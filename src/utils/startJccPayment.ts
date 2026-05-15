export type JccPaymentInput = {
  amount: number
  orderId: string
  customerName: string
  customerEmail: string
  description: string
}

export type JccPaymentSuccess = {
  success: true
  paymentUrl: string
  jccOrderId: string | null
}

export type JccPaymentError = {
  success: false
  error: string
  missingFields?: string[]
  missingEnv?: string[]
  jccErrorCode?: string
  jccErrorMessage?: string
  missingJccField?: string
  jccResponse?: unknown
}

export async function startJccPayment(input: JccPaymentInput): Promise<JccPaymentSuccess> {
  const response = await fetch('/api/create-jcc-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })

  let data: JccPaymentSuccess | JccPaymentError
  try {
    data = (await response.json()) as JccPaymentSuccess | JccPaymentError
  } catch {
    throw new Error('Payment service returned an invalid response. Please try again.')
  }

  if (!response.ok || !data.success) {
    const err = data as JccPaymentError
    const parts = [err.error || 'Payment could not be started.']
    if (err.jccErrorMessage) parts.push(`JCC: ${err.jccErrorMessage}`)
    if (err.missingFields?.length) parts.push(`Missing: ${err.missingFields.join(', ')}`)
    if (err.missingJccField) parts.push(`JCC field missing: ${err.missingJccField}`)
    throw new Error(parts.join(' '))
  }

  const ok = data as JccPaymentSuccess
  if (!ok.paymentUrl) {
    throw new Error('Payment URL was not returned. Please contact support.')
  }

  window.location.href = ok.paymentUrl
  return ok
}
