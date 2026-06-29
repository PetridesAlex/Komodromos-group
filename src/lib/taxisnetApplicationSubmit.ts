import { formatTaxisNetMessage } from './formSubmissionFormatters'
import { sendContactInquiry } from './sendContactInquiry'

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

export async function submitTaxisNetApplication(payload: TaxisNetApplicationPayload): Promise<void> {
  const { personal } = payload
  const fullName = [personal.firstName, personal.lastName].filter(Boolean).join(' ')
  await sendContactInquiry({
    source: 'TaxisNet Application Form',
    name: fullName,
    email: personal.email,
    phone: personal.phone,
    company: personal.afm ? `AFM: ${personal.afm}` : '',
    service: 'Tax & Accounting Services',
    message: formatTaxisNetMessage(payload),
  })
}

/** @deprecated Use submitTaxisNetApplication */
export async function postTaxisNetApplicationIfConfigured(payload: TaxisNetApplicationPayload): Promise<boolean> {
  await submitTaxisNetApplication(payload)
  return true
}
