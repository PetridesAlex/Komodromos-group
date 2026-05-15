/**
 * Public flag only — JCC secrets stay on the server (/api).
 * Set VITE_JCC_PAYMENTS_ENABLED=true in .env to use JCC for TaxNex “Pay online”.
 */
export function isJccPaymentsEnabled(): boolean {
  const raw = import.meta.env.VITE_JCC_PAYMENTS_ENABLED
  if (raw === true) return true
  if (typeof raw === 'string') {
    const v = raw.trim().toLowerCase()
    return v === 'true' || v === '1' || v === 'yes'
  }
  return false
}
