/**
 * Vercel serverless — CV / résumé submissions with file attachment via Resend.
 * Optional: TURNSTILE_SECRET_KEY for Cloudflare Turnstile spam protection.
 */

import { evaluateSpam, getClientIp } from './lib/spamGuard.js'

const SITE_URL = 'https://www.komodromosgroup.com'
const INBOX_EMAIL = 'info@komodromosgroup.com'
const COMPANY_NAME = 'Komodromos Group of Companies'
const MAX_FILE_BYTES = 4 * 1024 * 1024

const ACCEPTED_EXTENSIONS = new Set(['.pdf', '.doc', '.docx', '.odt', '.rtf'])

function readEnv(name) {
  const value = process.env[name]
  return typeof value === 'string' ? value.trim() : ''
}

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

function parseBody(req) {
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    return req.body
  }
  const raw = req.body
  if (typeof raw === 'string' && raw.length > 0) {
    try {
      return JSON.parse(raw)
    } catch {
      return null
    }
  }
  return null
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function cleanField(value, maxLen) {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, maxLen)
}

function stripEnv(value) {
  return value.trim().replace(/^['"]|['"]$/g, '')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formatSubmittedAt(date) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Europe/Nicosia',
  }).format(date)
}

function buildReferenceId(submittedAt) {
  const stamp = submittedAt.replace(/[^0-9]/g, '').slice(0, 12)
  return `GW-CV-${stamp || Date.now()}`
}

function getFileExtension(filename) {
  const dot = filename.lastIndexOf('.')
  if (dot === -1) return ''
  return filename.slice(dot).toLowerCase()
}

function sanitizeFilename(filename) {
  const base = cleanField(filename, 200)
  return base.replace(/[^\w.\-()+\s]/g, '_') || 'cv-document'
}

function displayValue(value) {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  return trimmed || 'Not provided'
}

function buildEmailText(payload) {
  return [
    `${COMPANY_NAME} — CV SUBMISSION`,
    '────────────────────────────────────────',
    `Reference: ${payload.referenceId}`,
    `Received: ${payload.submittedAt} (Cyprus time)`,
    '',
    `Full name:     ${displayValue(payload.name)}`,
    `Email:         ${displayValue(payload.email)}`,
    `Phone:         ${displayValue(payload.phone)}`,
    `Role:          ${displayValue(payload.role)}`,
    `Licence:       ${displayValue(payload.licence)}`,
    `Flight hours:  ${displayValue(payload.flightHours)}`,
    '',
    'Cover note',
    '────────────────────────────────────────',
    displayValue(payload.message),
    '',
    `Attachment: ${payload.attachment.filename}`,
  ].join('\n')
}

function buildEmailHtml(payload) {
  const rows = [
    ['Full name', payload.name],
    ['Email', payload.email],
    ['Phone', payload.phone],
    ['Role applying for', payload.role],
    ['Licence / rating', payload.licence],
    ['Total flight hours', payload.flightHours],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;color:#8fa0b8;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;">${escapeHtml(label)}</td></tr>` +
        `<tr><td style="padding:0 0 16px;color:#edf2f8;font-size:15px;">${escapeHtml(displayValue(value))}</td></tr>`,
    )
    .join('')

  return `<!DOCTYPE html><html><body style="margin:0;background:#05080f;color:#edf2f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px;">
  <table width="100%" style="max-width:640px;background:#0a101c;border:1px solid #24314a;border-radius:16px;">
  <tr><td style="padding:24px 28px;border-bottom:1px solid #24314a;">
  <p style="margin:0 0 8px;color:#4a90e2;font-size:10px;letter-spacing:0.18em;text-transform:uppercase;font-weight:700;">Global Wings CV submission</p>
  <h1 style="margin:0;color:#fff;font-size:24px;font-weight:500;">New talent application</h1>
  <p style="margin:12px 0 0;color:#b7c4d8;font-size:14px;">Reference ${escapeHtml(payload.referenceId)}</p>
  </td></tr>
  <tr><td style="padding:24px 28px;">${rows}
  <p style="margin:0 0 8px;color:#8fa0b8;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;">Cover note</p>
  <p style="margin:0 0 16px;color:#edf2f8;font-size:15px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(displayValue(payload.message))}</p>
  <p style="margin:0;color:#a5d2ff;font-size:14px;">CV attached: <strong>${escapeHtml(payload.attachment.filename)}</strong></p>
  </td></tr></table></td></tr></table></body></html>`
}

function extractResendError(data) {
  if (!data || typeof data !== 'object') return 'Unknown email service error'
  if (typeof data.message === 'string' && data.message.trim()) return data.message
  return JSON.stringify(data)
}

function userFacingEmailError(resendMessage) {
  const message = typeof resendMessage === 'string' ? resendMessage : ''
  if (message.includes('only send testing emails') || message.includes('verify a domain')) {
    return 'Our email service is still being configured. Please email info@komodromosgroup.com directly with your CV.'
  }
  return 'Could not submit your CV right now. Please try again or email info@komodromosgroup.com directly.'
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return json(res, 405, { success: false, error: 'Method not allowed. Use POST.' })
  }

  const body = parseBody(req)
  if (!body || typeof body !== 'object') {
    return json(res, 400, { success: false, error: 'Invalid JSON body.' })
  }

  const source = cleanField(body.source, 120) || 'Global Wings CV submission'
  const name = cleanField(body.name, 160)
  const email = cleanField(body.email, 160)
  const phone = cleanField(body.phone, 80)
  const role = cleanField(body.role, 120)
  const licence = cleanField(body.licence, 120)
  const flightHours = cleanField(body.flightHours, 20)
  const message = cleanField(body.message, 4000)

  const attachment = body.attachment
  const filename = attachment && typeof attachment.filename === 'string' ? sanitizeFilename(attachment.filename) : ''
  const contentType =
    attachment && typeof attachment.contentType === 'string' ? cleanField(attachment.contentType, 120) : ''
  const content = attachment && typeof attachment.content === 'string' ? attachment.content.trim() : ''

  const missing = []
  if (!name) missing.push('name')
  if (!email) missing.push('email')
  if (!role) missing.push('role')
  if (!filename) missing.push('attachment.filename')
  if (!content) missing.push('attachment.content')

  if (missing.length > 0) {
    return json(res, 400, {
      success: false,
      error: `Missing required fields: ${missing.join(', ')}`,
      missingFields: missing,
    })
  }

  if (!isValidEmail(email)) {
    return json(res, 400, { success: false, error: 'Invalid email address.' })
  }

  const spamVerdict = await evaluateSpam(body, { remoteip: getClientIp(req) })
  if (spamVerdict.action === 'discard') {
    return json(res, 200, {
      success: true,
      referenceId: `GW-CV-BLOCKED-${Date.now().toString(36)}`,
      id: null,
    })
  }
  if (spamVerdict.action === 'reject') {
    return json(res, 400, {
      success: false,
      error:
        spamVerdict.userMessage ||
        'Could not verify your submission. Please try again or email info@komodromosgroup.com directly.',
    })
  }

  const ext = getFileExtension(filename)
  if (!ACCEPTED_EXTENSIONS.has(ext)) {
    return json(res, 400, {
      success: false,
      error: 'Unsupported file type. Upload PDF, Word, ODT, or RTF.',
    })
  }

  let fileBuffer
  try {
    fileBuffer = Buffer.from(content, 'base64')
  } catch {
    return json(res, 400, { success: false, error: 'Invalid file encoding.' })
  }

  if (!fileBuffer.length) {
    return json(res, 400, { success: false, error: 'The uploaded file is empty.' })
  }

  if (fileBuffer.length > MAX_FILE_BYTES) {
    return json(res, 400, { success: false, error: 'CV file must be 4 MB or smaller.' })
  }

  const apiKey = stripEnv(readEnv('RESEND_API_KEY'))
  const toEmail = stripEnv(readEnv('CONTACT_TO_EMAIL') || INBOX_EMAIL)
  const fromRaw = stripEnv(readEnv('RESEND_FROM'))
  const fromEmail = fromRaw && isValidEmail(fromRaw.replace(/^.*<([^>]+)>$/, '$1'))
    ? fromRaw
    : `Komodromos Group <${INBOX_EMAIL}>`

  if (!apiKey) {
    return json(res, 500, {
      success: false,
      error: 'Email service is not configured. Set RESEND_API_KEY on the server.',
    })
  }

  const submittedAt = formatSubmittedAt(new Date())
  const referenceId = buildReferenceId(submittedAt)
  const emailPayload = {
    source,
    name,
    email,
    phone,
    role,
    licence,
    flightHours,
    message,
    submittedAt,
    referenceId,
    attachment: { filename, contentType },
  }

  const resendPayload = {
    from: fromEmail,
    to: [toEmail],
    subject: `[${referenceId}] CV submission — ${name} — ${role}`.slice(0, 200),
    html: buildEmailHtml(emailPayload),
    text: buildEmailText(emailPayload),
    attachments: [
      {
        filename,
        content,
      },
    ],
  }

  if (isValidEmail(email)) {
    resendPayload.reply_to = email
  }

  let resendResponse
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    })
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : 'Network error'
    return json(res, 502, { success: false, error: `Could not reach email service: ${errMessage}` })
  }

  let resendData
  try {
    resendData = await resendResponse.json()
  } catch {
    return json(res, 502, { success: false, error: 'Email service returned an invalid response.' })
  }

  if (!resendResponse.ok) {
    const resendMessage = extractResendError(resendData)
    console.error('[send-cv-application] Resend rejected message:', resendMessage)
    return json(res, 502, {
      success: false,
      error: userFacingEmailError(resendMessage),
    })
  }

  console.info('[send-cv-application] Delivered CV submission', {
    referenceId,
    to: toEmail,
    filename,
    resendId: resendData?.id,
  })

  return json(res, 200, {
    success: true,
    referenceId,
    id: resendData?.id ?? null,
  })
}
