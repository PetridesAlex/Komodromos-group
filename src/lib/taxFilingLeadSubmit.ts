import type { CyprusIncomeTaxYear } from './cyprusIncomeTax'
import { formatTaxFilingMessage } from './formSubmissionFormatters'
import { sendContactInquiry } from './sendContactInquiry'

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

/** @deprecated Use formatTaxFilingMessage — kept for callers that import the prefill builder */
export function buildTaxFilingContactPrefillMessage(p: TaxFilingLeadPayload): string {
  return formatTaxFilingMessage(p)
}

export async function submitTaxFilingLead(payload: TaxFilingLeadPayload): Promise<void> {
  const fullName = [payload.firstName, payload.surname].filter(Boolean).join(' ')
  await sendContactInquiry({
    source: 'Income Tax Calculator — Filing Request',
    name: fullName,
    email: payload.email,
    phone: payload.phone,
    service: 'Tax & Accounting Services',
    message: formatTaxFilingMessage(payload),
  })
}

/** @deprecated Use submitTaxFilingLead */
export async function postTaxFilingLeadIfConfigured(payload: TaxFilingLeadPayload): Promise<boolean> {
  await submitTaxFilingLead(payload)
  return true
}
