/**
 * Vercel serverless — forward website form inquiries to info@komodromosgroup.com via Resend.
 * RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM must be set in Vercel Environment Variables.
 * Optional: TURNSTILE_SECRET_KEY for Cloudflare Turnstile spam protection.
 */

import { evaluateSpam, getClientIp } from './lib/spamGuard.js'

const SITE_URL = 'https://www.komodromosgroup.com'
const LOGO_URL = `${SITE_URL}/images/services/companie-services-cover/cards-logos-services/main-logo.png`
const COMPANY_NAME = 'Komodromos Group of Companies'
const INBOX_EMAIL = 'info@komodromosgroup.com'

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

function formatSubmittedAt(date) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Europe/Nicosia',
  }).format(date)
}

function displayValue(value) {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  return trimmed || 'Not provided'
}

function buildReferenceId(submittedAt) {
  const stamp = submittedAt.replace(/[^0-9]/g, '').slice(0, 12)
  return `KG-${stamp || Date.now()}`
}

function buildDetailRow(label, value, options = {}) {
  const { href, highlight = false } = options
  const display = displayValue(value)
  const valueHtml =
    href && display !== 'Not provided'
      ? `<a href="${escapeHtml(href)}" style="color:#d4b978;text-decoration:none;font-weight:600;">${escapeHtml(display)}</a>`
      : `<span style="color:${highlight ? '#faf6ee' : '#e8edf5'};font-size:15px;line-height:1.55;font-weight:${highlight ? '600' : '500'};">${escapeHtml(display)}</span>`

  return `
    <tr>
      <td style="padding:0 0 12px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td style="padding:16px 18px;background:linear-gradient(180deg,#0c1424 0%,#0a101c 100%);border:1px solid #24314a;border-radius:12px;">
              <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:10px;line-height:1.4;letter-spacing:0.18em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
                ${escapeHtml(label)}
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;">
                ${valueHtml}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `.trim()
}

function buildActionButton(label, href, primary = false) {
  const bg = primary
    ? 'background:linear-gradient(135deg,#c8a96a 0%,#a8894a 100%);color:#0a0a0a;'
    : 'background:transparent;border:1px solid rgba(200,169,106,0.45);color:#e8d4a0;'
  return `
    <td style="padding:0 8px 0 0;">
      <a href="${escapeHtml(href)}" style="display:inline-block;padding:12px 20px;border-radius:999px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;${bg}">
        ${escapeHtml(label)}
      </a>
    </td>
  `.trim()
}

function buildBookingSection(detailsTitle, details) {
  if (!Array.isArray(details) || details.length === 0) return ''
  const rows = details
    .map((entry) => buildDetailRow(entry.label, entry.value, { highlight: true }))
    .join('')
  return `
          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#0a101c;border-left:1px solid #24314a;border-right:1px solid #24314a;">
                <tr>
                  <td style="padding:24px 28px 8px 28px;">
                    <p style="margin:0 0 16px;font-size:10px;line-height:1.4;letter-spacing:0.2em;text-transform:uppercase;color:#c8a96a;font-weight:700;">
                      ${escapeHtml(detailsTitle || 'Booking details')}
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      ${rows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
  `.trim()
}

function buildEmailHtml({ source, name, email, phone, company, service, message, submittedAt, referenceId, detailsTitle, details }) {
  const detailRows = [
    buildDetailRow('Full name', name, { highlight: true }),
    buildDetailRow('Email address', email, { href: `mailto:${email}`, highlight: true }),
    buildDetailRow('Phone number', phone, {
      href: phone ? `tel:${phone.replace(/\s+/g, '')}` : undefined,
    }),
    buildDetailRow('Company / organisation', company),
    buildDetailRow('Service of interest', service, { highlight: true }),
  ].join('')

  const bookingSection = buildBookingSection(detailsTitle, details)

  const telHref = phone ? `tel:${phone.replace(/\s+/g, '')}` : `mailto:${email}`
  const actionButtons = [
    buildActionButton('Reply to client', `mailto:${email}?subject=${encodeURIComponent(`Re: Your inquiry — ${COMPANY_NAME}`)}`, true),
    phone ? buildActionButton('Call client', telHref) : '',
  ]
    .filter(Boolean)
    .join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>New inquiry — ${escapeHtml(COMPANY_NAME)}</title>
</head>
<body style="margin:0;padding:0;background:#05080f;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    New website inquiry from ${escapeHtml(name)} — ${escapeHtml(service || source)}
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#05080f;">
    <tr>
      <td align="center" style="padding:36px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:660px;">
          <tr>
            <td style="padding:0 0 20px 0;text-align:center;">
              <a href="${SITE_URL}" style="text-decoration:none;">
                <img src="${LOGO_URL}" alt="${escapeHtml(COMPANY_NAME)}" width="220" style="display:block;margin:0 auto;max-width:220px;height:auto;border:0;" />
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:linear-gradient(145deg,#10192c 0%,#0d1528 55%,#111c34 100%);border:1px solid #2a3852;border-radius:18px 18px 0 0;overflow:hidden;">
                <tr>
                  <td style="height:4px;background:linear-gradient(90deg,#8f7138 0%,#d4b978 50%,#8f7138 100%);font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td style="padding:28px 28px 18px 28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      <tr>
                        <td>
                          <p style="margin:0 0 8px;font-size:10px;line-height:1.4;letter-spacing:0.28em;text-transform:uppercase;color:#c8a96a;font-weight:700;">
                            Website inquiry
                          </p>
                          <h1 style="margin:0 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:30px;line-height:1.15;font-weight:500;color:#ffffff;">
                            New client message
                          </h1>
                          <p style="margin:0;font-size:14px;line-height:1.65;color:#b7c4d8;">
                            A visitor submitted a form on <a href="${SITE_URL}" style="color:#d4b978;text-decoration:none;">komodromosgroup.com</a>. Review the details below and respond promptly.
                          </p>
                        </td>
                        <td align="right" valign="top" style="padding-left:16px;white-space:nowrap;">
                          <span style="display:inline-block;padding:8px 12px;background:rgba(200,169,106,0.1);border:1px solid rgba(200,169,106,0.35);border-radius:8px;font-size:10px;line-height:1.3;letter-spacing:0.12em;text-transform:uppercase;color:#e8d4a0;font-weight:700;">
                            ${escapeHtml(referenceId)}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 28px 24px 28px;">
                    <span style="display:inline-block;padding:9px 16px;background:rgba(200,169,106,0.12);border:1px solid rgba(200,169,106,0.35);border-radius:999px;font-size:10px;line-height:1.4;letter-spacing:0.16em;text-transform:uppercase;color:#e8d4a0;font-weight:700;">
                      ${escapeHtml(source)}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#0a101c;border-left:1px solid #24314a;border-right:1px solid #24314a;">
                <tr>
                  <td style="padding:24px 28px 8px 28px;">
                    <p style="margin:0 0 16px;font-size:10px;line-height:1.4;letter-spacing:0.2em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
                      Contact details
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      ${detailRows}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${bookingSection}

          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#0a101c;border-left:1px solid #24314a;border-right:1px solid #24314a;">
                <tr>
                  <td style="padding:8px 28px 28px 28px;">
                    <p style="margin:0 0 12px;font-size:10px;line-height:1.4;letter-spacing:0.2em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
                      Message
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:20px 22px;background:linear-gradient(180deg,#0f1728 0%,#0c1320 100%);border:1px solid #2a3852;border-left:4px solid #c8a96a;border-radius:12px;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.8;color:#edf2f8;white-space:pre-wrap;">${escapeHtml(message)}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#080d18;border:1px solid #24314a;border-top:none;border-radius:0 0 18px 18px;">
                <tr>
                  <td style="padding:24px 28px 10px 28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                      <tr>${actionButtons}</tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 28px 24px 28px;">
                    <p style="margin:0 0 10px;font-size:13px;line-height:1.65;color:#d7e0ee;">
                      Reply directly to this email to respond to <strong style="color:#ffffff;">${escapeHtml(name)}</strong>.
                    </p>
                    <p style="margin:0;font-size:12px;line-height:1.6;color:#7f90a8;">
                      Received ${escapeHtml(submittedAt)} · Cyprus time
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 8px 0 8px;text-align:center;">
              <p style="margin:0 0 6px;font-size:11px;line-height:1.6;letter-spacing:0.1em;text-transform:uppercase;color:#5f6f86;">
                ${escapeHtml(COMPANY_NAME)}
              </p>
              <p style="margin:0;font-size:12px;line-height:1.6;color:#6b7a90;">
                Limassol, Cyprus · <a href="mailto:${INBOX_EMAIL}" style="color:#8fa0b8;text-decoration:none;">${INBOX_EMAIL}</a> · <a href="${SITE_URL}" style="color:#8fa0b8;text-decoration:none;">komodromosgroup.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`.trim()
}

function buildEmailText({ source, name, email, phone, company, service, message, submittedAt, referenceId, detailsTitle, details }) {
  const divider = '────────────────────────────────────────'

  const bookingLines =
    Array.isArray(details) && details.length > 0
      ? [
          '',
          (detailsTitle || 'BOOKING DETAILS').toUpperCase(),
          divider,
          ...details.map((entry) => `${entry.label}: ${entry.value}`),
        ]
      : []

  return [
    COMPANY_NAME.toUpperCase(),
    'NEW CLIENT INQUIRY',
    divider,
    '',
    `Reference: ${referenceId}`,
    `Form: ${source}`,
    `Received: ${submittedAt} (Cyprus time)`,
    '',
    'CONTACT DETAILS',
    divider,
    `Full name:          ${displayValue(name)}`,
    `Email address:      ${displayValue(email)}`,
    `Phone number:       ${displayValue(phone)}`,
    `Company:            ${displayValue(company)}`,
    `Service interest:   ${displayValue(service)}`,
    ...bookingLines,
    '',
    'MESSAGE',
    divider,
    message,
    '',
    divider,
    `Reply to this email to respond directly to ${name}.`,
    '',
    `${COMPANY_NAME} · Limassol, Cyprus · ${INBOX_EMAIL}`,
  ].join('\n')
}

function stripEnv(value) {
  return value.trim().replace(/^['"]|['"]$/g, '')
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalizeFromAddress(raw) {
  const fallback = `Komodromos Group <${INBOX_EMAIL}>`
  const value = stripEnv(raw)
  if (!value) return fallback

  const bracketMatch = value.match(/^(.+?)\s*<([^>]+)>$/)
  if (bracketMatch) {
    const name = bracketMatch[1].trim()
    const addr = stripEnv(bracketMatch[2])
    if (isValidEmail(addr)) {
      return name ? `${name} <${addr}>` : addr
    }
  }

  if (isValidEmail(value)) {
    return `Komodromos Group <${value}>`
  }

  return fallback
}

function normalizeRecipient(raw) {
  const value = stripEnv(raw)
  return isValidEmail(value) ? value : INBOX_EMAIL
}

function extractResendError(data) {
  if (!data || typeof data !== 'object') return 'Unknown email service error'
  if (typeof data.message === 'string' && data.message.trim()) return data.message
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    return data.errors
      .map((entry) => {
        if (typeof entry === 'string') return entry
        if (entry && typeof entry.message === 'string') return entry.message
        return JSON.stringify(entry)
      })
      .join('; ')
  }
  return JSON.stringify(data)
}

function asciiSubject(value) {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x20-\x7E]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}
function userFacingEmailError(resendMessage) {
  const message = typeof resendMessage === 'string' ? resendMessage : ''
  if (
    message.includes('only send testing emails') ||
    message.includes('verify a domain at resend.com/domains')
  ) {
    return 'Our email service is still being configured. Please email info@komodromosgroup.com directly or call us — we apologise for the inconvenience.'
  }
  if (
    message.includes('domain is not verified') ||
    message.includes('not authorized to send') ||
    message.includes('Invalid `from`') ||
    message.includes('Invalid from')
  ) {
    return 'Our email service is still being configured. Please email info@komodromosgroup.com directly — we apologise for the inconvenience.'
  }
  return 'Could not send your message right now. Please try again or email info@komodromosgroup.com directly.'
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

  const source = cleanField(body.source, 120) || 'Website contact form'
  const name = cleanField(body.name, 160)
  const email = cleanField(body.email, 160)
  const phone = cleanField(body.phone, 80)
  const company = cleanField(body.company, 160)
  const service = cleanField(body.service, 200)
  const message = cleanField(body.message, 8000)
  const detailsTitle = cleanField(body.detailsTitle, 80)
  const details = Array.isArray(body.details)
    ? body.details
        .slice(0, 20)
        .map((entry) => ({
          label: cleanField(entry && entry.label, 60),
          value: cleanField(entry && entry.value, 200),
        }))
        .filter((entry) => entry.label && entry.value)
    : []

  const missing = []
  if (!name) missing.push('name')
  if (!email) missing.push('email')
  if (!message) missing.push('message')

  if (missing.length > 0) {
    return json(res, 400, {
      success: false,
      error: `Missing required fields: ${missing.join(', ')}`,
      missingFields: missing,
    })
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return json(res, 400, { success: false, error: 'Invalid email address.' })
  }

  const spamVerdict = await evaluateSpam(body, { remoteip: getClientIp(req) })
  if (spamVerdict.action === 'discard') {
    // Silent success — do not teach bots which checks failed, and do not email.
    return json(res, 200, {
      success: true,
      id: null,
      referenceId: `KG-BLOCKED-${Date.now().toString(36)}`,
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

  const apiKey = stripEnv(readEnv('RESEND_API_KEY'))
  const toEmail = normalizeRecipient(readEnv('CONTACT_TO_EMAIL') || INBOX_EMAIL)
  const fromEmail = normalizeFromAddress(readEnv('RESEND_FROM'))

  if (!apiKey) {
    return json(res, 500, {
      success: false,
      error: 'Email service is not configured. Set RESEND_API_KEY on the server.',
      missingEnv: ['RESEND_API_KEY'],
    })
  }

  const submittedAt = formatSubmittedAt(new Date())
  const referenceId = buildReferenceId(submittedAt)
  const subject = asciiSubject(
    `[${referenceId}] New inquiry - ${name}${service ? ` - ${service}` : ''}`,
  )
  const emailPayload = {
    source,
    name,
    email,
    phone,
    company,
    service,
    message,
    submittedAt,
    referenceId,
    detailsTitle,
    details,
  }
  const html = buildEmailHtml(emailPayload)
  const text = buildEmailText(emailPayload)

  const resendPayload = {
    from: fromEmail,
    to: [toEmail],
    subject: subject.slice(0, 200),
    html,
    text,
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
    return json(res, 502, {
      success: false,
      error: 'Email service returned an invalid response.',
      httpStatus: resendResponse.status,
    })
  }

  if (!resendResponse.ok) {
    const resendMessage = extractResendError(resendData)
    console.error('[send-contact] Resend rejected message:', {
      status: resendResponse.status,
      from: fromEmail,
      to: toEmail,
      resendMessage,
      resendData,
    })
    return json(res, 502, {
      success: false,
      error: userFacingEmailError(resendMessage),
      resendStatus: resendResponse.status,
    })
  }

  console.info('[send-contact] Delivered inquiry', { referenceId, to: toEmail, resendId: resendData?.id })

  return json(res, 200, {
    success: true,
    id: resendData?.id ?? null,
    referenceId,
  })
}
