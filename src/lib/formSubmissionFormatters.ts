import type { TaxFilingLeadPayload } from './taxFilingLeadSubmit'
import type { TaxisNetApplicationPayload } from './taxisnetApplicationSubmit'

function yesNo(value: 'yes' | 'no'): string {
  return value === 'yes' ? 'Yes / Ναι' : 'No / Όχι'
}

export function formatTaxFilingMessage(payload: TaxFilingLeadPayload): string {
  const lines = [
    'Tax filing request — Income Tax Calculator (TaxNex Cyprus).',
    '',
    `Tax year: ${payload.taxYear}`,
    `Registrant type: ${payload.registrantLabel}`,
  ]
  if (payload.arcOrTin.trim()) lines.push(`ID / TIN (ARC/ΑΦΜ): ${payload.arcOrTin.trim()}`)
  if (payload.notes.trim()) {
    lines.push('', 'Notes / details:', payload.notes.trim())
  }
  lines.push('', `Submitted at: ${payload.submittedAt}`)
  return lines.join('\n')
}

export function formatTaxisNetMessage(payload: TaxisNetApplicationPayload): string {
  const p = payload.personal
  const q = payload.questions
  const d = payload.incomeDetails

  return [
    'TaxisNet application form submission (TaxNex).',
    '',
    '--- Tax year & income ---',
    `Tax year: ${payload.taxYear}`,
    `Income types: ${payload.incomeTypeLabels.join(', ') || '—'}`,
    `Gross annual income: ${payload.grossAnnualIncome || '—'}`,
    '',
    '--- Personal details ---',
    `AFM (Α.Φ.Μ.): ${p.afm || '—'}`,
    `ID number: ${p.idNumber || '—'}`,
    `Social insurance no.: ${p.socialInsuranceNumber || '—'}`,
    `Address: ${p.addressLine1 || '—'}`,
    `City: ${p.city || '—'}`,
    `Province: ${p.province || '—'}`,
    `Postal code: ${p.postalCode || '—'}`,
    `Country: ${p.country || '—'}`,
    '',
    '--- Questions ---',
    `Has TAXISnet account: ${yesNo(q.hasTaxisnetAccount)}`,
    `More than 183 days in Cyprus: ${yesNo(q.moreThan183DaysInCyprus)}`,
    '',
    '--- Income details ---',
    `Insurable (TKKA): ${d.insurableTkka || '—'}`,
    `Approved pension funds: ${d.approvedPensionFunds || '—'}`,
    `Grants / commissions / benefits: ${d.grantsCommissionsBenefits || '—'}`,
    `Social insurance fund: ${d.socialInsuranceFund || '—'}`,
    `Trade union: ${d.tradeUnion || '—'}`,
    `Health fund: ${d.healthFund || '—'}`,
    `Fees & other benefits: ${d.feesAndOtherBenefits || '—'}`,
    `GESY on insurable earnings: ${d.gesyOnInsurableEarnings || '—'}`,
    `Tax-free benefits in kind: ${d.taxFreeBenefitsInKind || '—'}`,
    `Income without GESY: ${d.incomeWithoutGesy || '—'}`,
    '',
    '--- Consent ---',
    `Terms & privacy accepted: ${payload.consent.termsAndPrivacy ? 'Yes' : 'No'}`,
    `Accuracy & processing accepted: ${payload.consent.accuracyAndProcessing ? 'Yes' : 'No'}`,
    '',
    `Submitted at: ${payload.submittedAt}`,
  ].join('\n')
}
