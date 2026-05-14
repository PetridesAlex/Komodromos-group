/**
 * TaxisNet application form → backend / email receiver.
 * When `VITE_TAXISNET_APPLICATION_URL` is set (e.g. serverless function, Formspree, or your API),
 * the payload is POSTed as JSON. Until then the UI still completes submission locally and shows success.
 */
export type TaxisNetApplicationPayload = {
  source: 'taxisnet-application-form'
  taxYear: string
  incomeTypeIds: string[]
  incomeTypeLabels: string[]
  grossAnnualIncome: string
  personal: {
    afm: string
    idNumber: string
    socialInsuranceNumber: string
    firstName: string
    lastName: string
    addressLine1: string
    city: string
    province: string
    postalCode: string
    country: string
    email: string
    phone: string
  }
  questions: {
    hasTaxisnetAccount: 'yes' | 'no'
    moreThan183DaysInCyprus: 'yes' | 'no'
  }
  incomeDetails: {
    insurableTkka: string
    approvedPensionFunds: string
    grantsCommissionsBenefits: string
    socialInsuranceFund: string
    tradeUnion: string
    healthFund: string
    feesAndOtherBenefits: string
    gesyOnInsurableEarnings: string
    taxFreeBenefitsInKind: string
    incomeWithoutGesy: string
  }
  consent: {
    termsAndPrivacy: boolean
    accuracyAndProcessing: boolean
  }
  submittedAt: string
}

/** POST JSON when `VITE_TAXISNET_APPLICATION_URL` is set. Throws on network or non-2xx. */
export async function postTaxisNetApplicationIfConfigured(payload: TaxisNetApplicationPayload): Promise<boolean> {
  const raw = import.meta.env.VITE_TAXISNET_APPLICATION_URL
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
