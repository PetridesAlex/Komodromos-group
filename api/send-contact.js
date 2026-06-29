/**
 * Vercel serverless — forward contact form inquiries to info@komodromosgroup.com via Resend.
 * RESEND_API_KEY must be set in Vercel Environment Variables (never in client code).
 */

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

function buildDetailRow(label, value, options = {}) {
  const { href, highlight = false } = options
  const display = displayValue(value)
  const valueHtml = href && display !== 'Not provided'
    ? `<a href="${escapeHtml(href)}" style="color:#c8a96a;text-decoration:none;font-weight:600;">${escapeHtml(display)}</a>`
    : `<span style="color:${highlight ? '#f4efe4' : '#e8edf5'};font-size:15px;line-height:1.55;font-weight:${highlight ? '600' : '500'};">${escapeHtml(display)}</span>`

  return `
    <tr>
      <td style="padding:0 0 14px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
          <tr>
            <td style="padding:14px 16px;background:#0b1220;border:1px solid #1f2a3d;border-radius:10px;">
              <p style="margin:0 0 6px;font-family:Arial,Helvetica,sans-serif;font-size:11px;line-height:1.4;letter-spacing:0.16em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
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

function buildEmailHtml({ source, name, email, phone, company, service, message, submittedAt }) {
  const detailRows = [
    buildDetailRow('Full name', name, { highlight: true }),
    buildDetailRow('Email address', email, { href: `mailto:${email}`, highlight: true }),
    buildDetailRow('Phone number', phone, {
      href: phone ? `tel:${phone.replace(/\s+/g, '')}` : undefined,
    }),
    buildDetailRow('Company / organisation', company),
    buildDetailRow('Service of interest', service),
  ].join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="color-scheme" content="dark" />
  <meta name="supported-color-schemes" content="dark" />
  <title>New inquiry — Komodromos Group</title>
</head>
<body style="margin:0;padding:0;background:#060a12;font-family:Arial,Helvetica,sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#060a12;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:640px;">
          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:linear-gradient(135deg,#0d1528 0%,#111c34 100%);border:1px solid #24314a;border-radius:16px 16px 0 0;">
                <tr>
                  <td style="padding:28px 28px 24px 28px;">
                    <p style="margin:0 0 10px;font-size:11px;line-height:1.4;letter-spacing:0.24em;text-transform:uppercase;color:#c8a96a;font-weight:700;">
                      Komodromos Group
                    </p>
                    <h1 style="margin:0 0 10px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;font-weight:500;color:#ffffff;">
                      New client inquiry
                    </h1>
                    <p style="margin:0;font-size:14px;line-height:1.6;color:#b7c4d8;">
                      A new message was submitted through the website contact form and is ready for review.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 28px 24px 28px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:8px 14px;background:rgba(200,169,106,0.12);border:1px solid rgba(200,169,106,0.35);border-radius:999px;">
                          <span style="font-size:11px;line-height:1.4;letter-spacing:0.14em;text-transform:uppercase;color:#e8d4a0;font-weight:700;">
                            ${escapeHtml(source)}
                          </span>
                        </td>
                      </tr>
                    </table>
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
                    <p style="margin:0 0 16px;font-size:11px;line-height:1.4;letter-spacing:0.18em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
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

          <tr>
            <td style="padding:0 0 18px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#0a101c;border-left:1px solid #24314a;border-right:1px solid #24314a;">
                <tr>
                  <td style="padding:8px 28px 28px 28px;">
                    <p style="margin:0 0 12px;font-size:11px;line-height:1.4;letter-spacing:0.18em;text-transform:uppercase;color:#8fa0b8;font-weight:700;">
                      Message
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                      <tr>
                        <td style="padding:18px 20px;background:#0f1728;border:1px solid #2a3852;border-left:4px solid #c8a96a;border-radius:10px;">
                          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:15px;line-height:1.75;color:#edf2f8;white-space:pre-wrap;">${escapeHtml(message)}</p>
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
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#080d18;border:1px solid #24314a;border-top:none;border-radius:0 0 16px 16px;">
                <tr>
                  <td style="padding:22px 28px;">
                    <p style="margin:0 0 10px;font-size:13px;line-height:1.6;color:#d7e0ee;">
                      Reply directly to this email to respond to <strong style="color:#ffffff;">${escapeHtml(name)}</strong>.
                    </p>
                    <p style="margin:0;font-size:12px;line-height:1.6;color:#7f90a8;">
                      Received ${escapeHtml(submittedAt)} (Cyprus time)
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:18px 8px 0 8px;text-align:center;">
              <p style="margin:0;font-size:11px;line-height:1.6;letter-spacing:0.08em;text-transform:uppercase;color:#5f6f86;">
                Komodromos Group of Companies · Website inquiry notification
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

function userFacingEmailError(resendMessage) {
  const message = typeof resendMessage === 'string' ? resendMessage : ''
  if (
    message.includes('only send testing emails') ||
    message.includes('verify a domain at resend.com/domains')
  ) {
    return 'Our email service is still being configured. Please email info@komodromosgroup.com directly or call us — we apologise for the inconvenience.'
  }
  if (message.includes('domain is not verified') || message.includes('not authorized to send')) {
    return 'Our email service is still being configured. Please email info@komodromosgroup.com directly — we apologise for the inconvenience.'
  }
  return 'Could not send your message right now. Please try again or email info@komodromosgroup.com directly.'
}
  const divider = '────────────────────────────────────────'

  return [
    'KOMODROMOS GROUP',
    'NEW CLIENT INQUIRY',
    divider,
    '',
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
    '',
    'MESSAGE',
    divider,
    message,
    '',
    divider,
    `Reply to this email to respond directly to ${name}.`,
    '',
    'Komodromos Group of Companies — Website inquiry notification',
  ].join('\n')
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

  const apiKey = readEnv('RESEND_API_KEY')
  const toEmail = readEnv('CONTACT_TO_EMAIL') || 'info@komodromosgroup.com'
  const fromEmail =
    readEnv('RESEND_FROM') || 'Komodromos Group <notifications@komodromosgroup.com>'

  if (!apiKey) {
    return json(res, 500, {
      success: false,
      error: 'Email service is not configured. Set RESEND_API_KEY on the server.',
      missingEnv: ['RESEND_API_KEY'],
    })
  }

  const subject = `[Komodromos Group] New inquiry — ${name}`
  const submittedAt = formatSubmittedAt(new Date())
  const emailPayload = { source, name, email, phone, company, service, message, submittedAt }
  const html = buildEmailHtml(emailPayload)
  const text = buildEmailText(emailPayload)

  let resendResponse
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subject.slice(0, 200),
        html,
        text,
      }),
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
    console.error('[send-contact] Resend rejected message:', resendData)
    return json(res, 502, {
      success: false,
      error: userFacingEmailError(resendData?.message),
      resendStatus: resendResponse.status,
    })
  }

  return json(res, 200, {
    success: true,
    id: resendData?.id ?? null,
  })
}
