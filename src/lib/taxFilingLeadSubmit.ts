import type { CyprusIncomeTaxYear } from './cyprusIncomeTax'

/**
 * Income-tax calculator → tax filing lead.
 * When `VITE_TAX_FILING_LEAD_URL` is set in the environment, the payload is POSTed as JSON
 * (wire your email/API receiver there). Otherwise the UI falls back to `/contact` prefill.
 */
export type TaxFilingLeadPayload = {
  source: 'income-tax-calculator'
  firstName: string
  surname: string
  email: string
  phone: string
  taxYear: CyprusIncomeTaxYear
  registrantType: string
  registrantLabel: string
  arcOrTin: string
  notes: string
  submittedAt: string
}

export function buildTaxFilingContactPrefillMessage(p: TaxFilingLeadPayload): string {
  const lines = [
    'Αίτημα υποβολής φορολογικής δήλωσης εισοδήματος — εργαλείο «Υπολογισμός Φόρου Εισοδήματος» TaxNex (Κύπρος).',
    '',
    `Έτος δήλωσης: ${p.taxYear}`,
    `Κατηγορία: ${p.registrantLabel}`,
  ]
  if (p.arcOrTin.trim()) lines.push(`Αρ. ταυτότητας / ΑΦΜ: ${p.arcOrTin.trim()}`)
  lines.push('', 'Σημειώσεις / λεπτομέρειες:', p.notes.trim())
  return lines.join('\n')
}

/** POST JSON when `VITE_TAX_FILING_LEAD_URL` is set. Throws on network or non-2xx. */
export async function postTaxFilingLeadIfConfigured(payload: TaxFilingLeadPayload): Promise<boolean> {
  const raw = import.meta.env.VITE_TAX_FILING_LEAD_URL
  const url = typeof raw === 'string' ? raw.trim() : ''
  if (!url) return false

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`)
  }
  return true
}
