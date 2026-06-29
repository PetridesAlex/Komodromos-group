/**
 * Stripe Payment Links for hosted checkout URLs.
 * Set in `.env`: VITE_TAX_CHECKOUT_DIY, VITE_TAX_CHECKOUT_ADVISOR, VITE_TAX_CHECKOUT_SELF_EMPLOYED
 */
export type TaxPlanCheckoutId = 'diy' | 'advisor' | 'self-employed'

const ENV_KEYS: Record<TaxPlanCheckoutId, string> = {
  diy: 'VITE_TAX_CHECKOUT_DIY',
  advisor: 'VITE_TAX_CHECKOUT_ADVISOR',
  'self-employed': 'VITE_TAX_CHECKOUT_SELF_EMPLOYED',
}

export function getTaxPlanCheckoutUrl(id: TaxPlanCheckoutId): string {
  const env = import.meta.env as Record<string, string | undefined>
  const raw = env[ENV_KEYS[id]]
  return typeof raw === 'string' ? raw.trim() : ''
}

export function isValidHttpUrl(s: string): boolean {
  if (!s) return false
  try {
    const u = new URL(s)
    return u.protocol === 'https:' || u.protocol === 'http:'
  } catch {
    return false
  }
}

const STORAGE_LEAD_KEY = 'komodromos:taxPlanCheckoutLead'

export type TaxPlanCheckoutLead = {
  planId: TaxPlanCheckoutId
  planTitle: string
  priceEur: number
  name: string
  email: string
  phone: string
  company: string
  at: string
}

/** Persist lead before redirecting to Stripe (Payment Links / hosted checkout). */
export function storeTaxPlanCheckoutLead(lead: Omit<TaxPlanCheckoutLead, 'at'>): void {
  try {
    const payload: TaxPlanCheckoutLead = { ...lead, at: new Date().toISOString() }
    sessionStorage.setItem(STORAGE_LEAD_KEY, JSON.stringify(payload))
  } catch {
    /* ignore quota / private mode */
  }
}

/**
 * Stripe Payment Links accept `prefilled_email` on the URL (see Stripe docs).
 */
export function appendPaymentLinkPrefill(checkoutUrl: string, email: string): string {
  const trimmed = email.trim()
  if (!trimmed) return checkoutUrl
  try {
    const u = new URL(checkoutUrl)
    u.searchParams.set('prefilled_email', trimmed)
    return u.href
  } catch {
    return checkoutUrl
  }
}
