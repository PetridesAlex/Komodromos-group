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

function buildEmailHtml({ source, name, email, phone, company, service, message }) {
  const rows = [
    ['Source', source],
    ['Name', name],
    ['Email', email],
    ['Phone', phone || '—'],
    ['Company', company || '—'],
    ['Service', service || '—'],
  ]

  const tableRows = rows
    .map(
      ([label, val]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 0;font-size:14px;color:#111827;">${escapeHtml(val)}</td></tr>`,
    )
    .join('')

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;color:#111827;max-width:640px;">
      <p style="margin:0 0 16px;font-size:16px;font-weight:600;">New website inquiry</p>
      <table style="border-collapse:collapse;width:100%;margin-bottom:20px;">${tableRows}</table>
      <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
      <div style="padding:14px 16px;background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;font-size:14px;white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `.trim()
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
    readEnv('RESEND_FROM') || 'Komodromos Group <onboarding@resend.dev>'

  if (!apiKey) {
    return json(res, 500, {
      success: false,
      error: 'Email service is not configured. Set RESEND_API_KEY on the server.',
      missingEnv: ['RESEND_API_KEY'],
    })
  }

  const subject = `[Komodromos Group] ${source} — ${name}`
  const html = buildEmailHtml({ source, name, email, phone, company, service, message })
  const text = [
    `New inquiry (${source})`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `Company: ${company || '—'}`,
    `Service: ${service || '—'}`,
    '',
    'Message:',
    message,
  ].join('\n')

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
    return json(res, 502, {
      success: false,
      error: resendData?.message || 'Email service rejected the message.',
      resendStatus: resendResponse.status,
    })
  }

  return json(res, 200, {
    success: true,
    id: resendData?.id ?? null,
  })
}
