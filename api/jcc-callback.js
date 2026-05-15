/**
 * Vercel serverless — JCC server-to-server / return callback hook.
 * TODO: persist payment status to your database when JCC payload format is confirmed.
 */

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify(body))
}

function collectPayload(req) {
  const query = req.query && typeof req.query === 'object' ? { ...req.query } : {}
  let body = {}
  if (req.body) {
    if (typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
      body = { ...req.body }
    } else if (typeof req.body === 'string' && req.body.length > 0) {
      try {
        body = JSON.parse(req.body)
      } catch {
        body = { raw: req.body }
      }
    }
  }
  return { query, body }
}

export default async function handler(req, res) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST')
    return json(res, 405, { ok: false, error: 'Method not allowed' })
  }

  const { query, body } = collectPayload(req)

  const orderId =
    query.orderId ??
    query.orderID ??
    query.mdOrder ??
    body.orderId ??
    body.orderID ??
    body.mdOrder ??
    null

  const orderNumber =
    query.orderNumber ?? body.orderNumber ?? query.order_number ?? body.order_number ?? null

  const status =
    query.status ??
    body.status ??
    query.operation ??
    body.operation ??
    query.paymentState ??
    body.paymentState ??
    null

  // TODO: Look up order by orderNumber / orderId in your database.
  // TODO: Verify payment with JCC getOrderStatusExtended.do (server-side) before marking paid.
  // TODO: Update order/payment record status (paid | failed | pending).
  console.info('[jcc-callback]', {
    method: req.method,
    orderId,
    orderNumber,
    status,
    query,
    body,
  })

  return json(res, 200, {
    ok: true,
    received: true,
    orderId,
    orderNumber,
    status,
  })
}
