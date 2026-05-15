/**
 * Vercel serverless — register a JCC order and return the hosted payment URL.
 * Credentials are read from process.env only (never exposed to the client).
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

function toMinorUnits(amount) {
  const n = Number(amount)
  if (!Number.isFinite(n) || n <= 0) return null
  return Math.round(n * 100)
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

  const amount = body.amount
  const orderId = typeof body.orderId === 'string' ? body.orderId.trim() : ''
  const customerName = typeof body.customerName === 'string' ? body.customerName.trim() : ''
  const customerEmail = typeof body.customerEmail === 'string' ? body.customerEmail.trim() : ''
  const description = typeof body.description === 'string' ? body.description.trim() : ''

  const missing = []
  if (amount === undefined || amount === null || amount === '') missing.push('amount')
  if (!orderId) missing.push('orderId')
  if (!customerName) missing.push('customerName')
  if (!customerEmail) missing.push('customerEmail')
  if (!description) missing.push('description')

  if (missing.length > 0) {
    return json(res, 400, {
      success: false,
      error: `Missing required fields: ${missing.join(', ')}`,
      missingFields: missing,
    })
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)
  if (!emailOk) {
    return json(res, 400, { success: false, error: 'Invalid customerEmail.' })
  }

  const amountMinor = toMinorUnits(amount)
  if (amountMinor == null) {
    return json(res, 400, { success: false, error: 'Invalid amount. Must be a positive number in EUR.' })
  }

  const apiUrl = readEnv('JCC_API_URL') || 'https://gateway.jcc.com.cy/payment/rest/register.do'
  const userName = readEnv('JCC_API_USERNAME')
  const password = readEnv('JCC_API_PASSWORD')
  const currency = readEnv('JCC_CURRENCY') || '978'
  const language = readEnv('JCC_LANGUAGE') || 'en'
  const returnUrl = readEnv('JCC_SUCCESS_URL')
  const failUrl = readEnv('JCC_FAILED_URL')

  const configMissing = []
  if (!userName) configMissing.push('JCC_API_USERNAME')
  if (!password) configMissing.push('JCC_API_PASSWORD')
  if (!returnUrl) configMissing.push('JCC_SUCCESS_URL')
  if (!failUrl) configMissing.push('JCC_FAILED_URL')

  if (configMissing.length > 0) {
    return json(res, 500, {
      success: false,
      error: `Server payment configuration incomplete. Set: ${configMissing.join(', ')}`,
      missingEnv: configMissing,
    })
  }

  const params = new URLSearchParams()
  params.set('userName', userName)
  params.set('password', password)
  params.set('amount', String(amountMinor))
  params.set('currency', currency)
  params.set('orderNumber', orderId.slice(0, 64))
  params.set('returnUrl', returnUrl)
  params.set('failUrl', failUrl)
  params.set('description', description.slice(0, 512))
  params.set('email', customerEmail.slice(0, 128))
  params.set('language', language)

  let gatewayResponse
  try {
    gatewayResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Network error'
    return json(res, 502, { success: false, error: `Could not reach JCC gateway: ${message}` })
  }

  const responseText = await gatewayResponse.text()
  let data
  try {
    data = JSON.parse(responseText)
  } catch {
    return json(res, 502, {
      success: false,
      error: 'JCC returned a non-JSON response.',
      httpStatus: gatewayResponse.status,
      rawPreview: responseText.slice(0, 300),
    })
  }

  if (data.errorCode != null && String(data.errorCode) !== '' && String(data.errorCode) !== '0') {
    return json(res, 400, {
      success: false,
      error: data.errorMessage || 'JCC rejected the payment registration.',
      jccErrorCode: data.errorCode,
      jccErrorMessage: data.errorMessage,
      jccResponse: data,
    })
  }

  const formUrl = data.formUrl
  const jccOrderId = data.orderId

  if (!formUrl || typeof formUrl !== 'string') {
    return json(res, 502, {
      success: false,
      error: 'JCC did not return formUrl. Check API credentials and request fields.',
      jccResponse: data,
      missingJccField: 'formUrl',
    })
  }

  return json(res, 200, {
    success: true,
    paymentUrl: formUrl,
    jccOrderId: jccOrderId ?? null,
  })
}
