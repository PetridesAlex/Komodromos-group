/**
 * Shared anti-spam checks for form → Resend pipelines.
 * - Cloudflare Turnstile (when TURNSTILE_SECRET_KEY is set)
 * - Honeypot + minimum fill time
 * - Lightweight content heuristics
 */

const MIN_FILL_MS = 3000

const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  'guerrillamail.com',
  'guerrillamail.net',
  '10minutemail.com',
  'tempmail.com',
  'temp-mail.org',
  'yopmail.com',
  'trashmail.com',
  'sharklasers.com',
  'getnada.com',
  'maildrop.cc',
  'discard.email',
  'throwaway.email',
  'fakeinbox.com',
])

const URL_PATTERN = /https?:\/\/|www\./gi

function readEnv(name) {
  const value = process.env[name]
  return typeof value === 'string' ? value.trim() : ''
}

function cleanField(value, maxLen) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLen)
}

function emailDomain(email) {
  const at = email.lastIndexOf('@')
  if (at === -1) return ''
  return email.slice(at + 1).toLowerCase()
}

/**
 * @typedef {'allow' | 'discard' | 'reject'} SpamAction
 * @typedef {{ action: SpamAction, reason?: string, userMessage?: string }} SpamVerdict
 */

/**
 * Verify a Turnstile token with Cloudflare.
 * @returns {Promise<{ ok: boolean, skipped?: boolean, error?: string }>}
 */
export async function verifyTurnstileToken(token, remoteip) {
  const secret = readEnv('TURNSTILE_SECRET_KEY')
  if (!secret) {
    console.warn(
      '[spamGuard] TURNSTILE_SECRET_KEY is not set — skipping Turnstile verification (dev/local mode).',
    )
    return { ok: true, skipped: true }
  }

  const cleaned = cleanField(token, 2048)
  if (!cleaned) {
    return { ok: false, error: 'missing_token' }
  }

  const body = new URLSearchParams()
  body.set('secret', secret)
  body.set('response', cleaned)
  if (remoteip) body.set('remoteip', remoteip)

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
    const data = await response.json()
    if (data && data.success === true) {
      return { ok: true }
    }
    const codes = Array.isArray(data?.['error-codes']) ? data['error-codes'].join(',') : 'unknown'
    return { ok: false, error: codes }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'network_error'
    console.error('[spamGuard] Turnstile verify failed:', message)
    return { ok: false, error: message }
  }
}

/**
 * Honeypot / timing / content heuristics (no network).
 * @returns {SpamVerdict}
 */
export function evaluatePayloadHeuristics(body) {
  const website = cleanField(body?.website, 200)
  if (website) {
    return { action: 'discard', reason: 'honeypot' }
  }

  const startedRaw = body?.formStartedAt
  const startedAt =
    typeof startedRaw === 'number'
      ? startedRaw
      : typeof startedRaw === 'string' && startedRaw.trim()
        ? Number(startedRaw)
        : NaN

  if (Number.isFinite(startedAt) && startedAt > 0) {
    const elapsed = Date.now() - startedAt
    if (elapsed >= 0 && elapsed < MIN_FILL_MS) {
      return { action: 'discard', reason: 'too_fast' }
    }
  }

  const name = cleanField(body?.name, 160)
  const email = cleanField(body?.email, 160).toLowerCase()
  const message = cleanField(body?.message, 8000)

  const domain = emailDomain(email)
  if (domain && DISPOSABLE_EMAIL_DOMAINS.has(domain)) {
    return { action: 'discard', reason: 'disposable_email' }
  }

  const urlMatches = message.match(URL_PATTERN)
  if (urlMatches && urlMatches.length >= 4) {
    return { action: 'discard', reason: 'too_many_urls' }
  }

  if (message.length >= 80 && !/\s/.test(message)) {
    return { action: 'discard', reason: 'gibberish_message' }
  }

  // Long lowercase alphanumeric blob with no spaces — typical bot name
  if (name.length >= 24 && /^[a-z0-9]+$/.test(name)) {
    return { action: 'discard', reason: 'bot_name' }
  }

  return { action: 'allow' }
}

/**
 * Full spam evaluation for an incoming form body.
 * Turnstile hard-fail (when configured) → reject with user-facing retry message.
 * Honeypot / timing / heuristics → silent discard.
 *
 * @param {object} body
 * @param {{ remoteip?: string }} [options]
 * @returns {Promise<SpamVerdict>}
 */
export async function evaluateSpam(body, options = {}) {
  const heuristic = evaluatePayloadHeuristics(body)
  if (heuristic.action !== 'allow') {
    console.info('[spamGuard] Discarding submission', { reason: heuristic.reason })
    return heuristic
  }

  const turnstile = await verifyTurnstileToken(body?.turnstileToken, options.remoteip)
  if (turnstile.skipped) {
    return { action: 'allow' }
  }

  if (!turnstile.ok) {
    // Missing token from a direct bot POST → silent discard.
    if (turnstile.error === 'missing_token') {
      console.info('[spamGuard] Discarding submission', { reason: 'missing_turnstile' })
      return { action: 'discard', reason: 'missing_turnstile' }
    }

    // Present but invalid — likely a real user whose challenge failed; ask to retry.
    console.info('[spamGuard] Rejecting submission', { reason: 'turnstile_failed', detail: turnstile.error })
    return {
      action: 'reject',
      reason: 'turnstile_failed',
      userMessage:
        'Could not verify your submission. Please refresh the page and try again, or email info@komodromosgroup.com directly.',
    }
  }

  return { action: 'allow' }
}

export function getClientIp(req) {
  const forwarded = req.headers?.['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.trim()) {
    return forwarded.split(',')[0].trim()
  }
  if (Array.isArray(forwarded) && forwarded[0]) {
    return String(forwarded[0]).trim()
  }
  const realIp = req.headers?.['x-real-ip']
  if (typeof realIp === 'string' && realIp.trim()) return realIp.trim()
  return undefined
}
