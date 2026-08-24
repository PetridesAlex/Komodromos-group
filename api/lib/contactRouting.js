/**
 * Server-side enquiry recipient routing for Resend.
 * Never trusts a client-supplied recipient email — only allowlisted signals.
 */

const DEFAULT_INBOX = 'info@komodromosgroup.com'
const AVIATION_INBOX = 'info@global-wings.co'
const ASTREAL_INBOX = 'info@astrealdevelopers.com'

const AVIATION_HOSTS = new Set(['global-wings.co', 'www.global-wings.co'])
const ASTREAL_HOSTS = new Set(['astrealdevelopers.com', 'www.astrealdevelopers.com'])

function readEnv(name) {
  const value = process.env[name]
  return typeof value === 'string' ? value.trim() : ''
}

function stripEnv(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalizeRecipient(raw, fallback) {
  const value = stripEnv(raw)
  return isValidEmail(value) ? value : fallback
}

/**
 * Sanitize a client-supplied hostname. Returns '' if missing/invalid.
 * @param {unknown} raw
 * @returns {string}
 */
export function sanitizeOriginHost(raw) {
  if (typeof raw !== 'string') return ''
  let host = raw.trim().toLowerCase()
  if (!host || host.length > 253) return ''

  // Strip accidental protocol / path / port
  host = host.replace(/^https?:\/\//, '')
  host = host.split('/')[0] || ''
  host = host.split(':')[0] || ''

  if (!/^[a-z0-9.-]+$/.test(host)) return ''
  if (host.startsWith('.') || host.endsWith('.') || host.includes('..')) return ''
  return host
}

function includesInsensitive(haystack, needle) {
  return haystack.toLowerCase().includes(needle.toLowerCase())
}

function matchesServiceRule(service, { equals = [], startsWith = [] } = {}) {
  const normalized = service.trim().toLowerCase()
  if (!normalized) return false
  if (equals.some((value) => normalized === value.toLowerCase())) return true
  return startsWith.some((prefix) => normalized.startsWith(prefix.toLowerCase()))
}

/**
 * Resolve Resend `to` address from allowlisted enquiry signals.
 * @param {{ source?: string, service?: string, originHost?: string }} input
 * @returns {{ to: string, routeKey: 'aviation' | 'astreal' | 'default' }}
 */
export function resolveContactRecipient(input = {}) {
  const source = typeof input.source === 'string' ? input.source.trim() : ''
  const service = typeof input.service === 'string' ? input.service.trim() : ''
  const originHost = sanitizeOriginHost(input.originHost)

  const isAviation =
    AVIATION_HOSTS.has(originHost) ||
    includesInsensitive(source, 'Global Wings') ||
    matchesServiceRule(service, {
      equals: ['Aviation Agency Services', 'Global Wings'],
      startsWith: ['Aviation Agency Services', 'Global Wings'],
    })

  if (isAviation) {
    return {
      to: normalizeRecipient(readEnv('CONTACT_TO_EMAIL_AVIATION'), AVIATION_INBOX),
      routeKey: 'aviation',
    }
  }

  const isAstreal =
    ASTREAL_HOSTS.has(originHost) ||
    includesInsensitive(source, 'Astreal') ||
    matchesServiceRule(service, {
      equals: ['Astreal Developers', 'Property Developers'],
      startsWith: ['Astreal Developers', 'Astreal —', 'Astreal -', 'Astreal –', 'Astreal—', 'Property Developers'],
    })

  if (isAstreal) {
    return {
      to: normalizeRecipient(readEnv('CONTACT_TO_EMAIL_ASTREAL'), ASTREAL_INBOX),
      routeKey: 'astreal',
    }
  }

  return {
    to: normalizeRecipient(readEnv('CONTACT_TO_EMAIL'), DEFAULT_INBOX),
    routeKey: 'default',
  }
}
