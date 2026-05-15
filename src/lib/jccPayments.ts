/**
 * Public flag only — JCC secrets stay on the server (/api).
 * Pay-online is enabled in production builds by default.
 * Set VITE_JCC_PAYMENTS_ENABLED=false to turn it off.
 */
export function isJccPaymentsEnabled(): boolean {
  const raw = import.meta.env.VITE_JCC_PAYMENTS_ENABLED

  if (raw === true) return true
  if (raw === false) return false

  if (typeof raw === 'string') {
    const v = raw.trim().toLowerCase()
    if (v === 'false' || v === '0' || v === 'no') return false
    if (v === 'true' || v === '1' || v === 'yes') return true
  }

  // Production deploy includes /api/create-jcc-payment — show “Pay online” unless opted out
  return import.meta.env.PROD
}
