/**
 * 2025 employment income estimate aligned with TaxNexCy public calculator (2025 tab):
 * annual/monthly gross, 13th salary, then SI + GESY (capped) → taxable → progressive tax (2025 bands) → net.
 * Illustrative only — same cap/rate model as the 2026 TaxNex port in this repo.
 */

import { calculateCyprusIncomeTax } from './cyprusIncomeTax'

export type TaxNex2025SimpleInput = {
  salaryType: 'annual' | 'monthly'
  grossSalary: number
  has13th: boolean
}

export type TaxNex2025SimpleResult = {
  annualSalary: number
  socialInsurance: number
  ghsContribution: number
  taxableIncome: number
  incomeTax: number
  netSalary: number
  monthlyNet: number
}

const SI_CAP = 68904
const SI_RATE = 0.088
const GHS_CAP = 180000
const GHS_RATE = 0.0265

export function calculateIncomeTax2025TaxNex(input: TaxNex2025SimpleInput): TaxNex2025SimpleResult {
  const grossRaw = Math.max(0, input.grossSalary)
  const annualSalary =
    input.salaryType === 'annual' ? grossRaw : grossRaw * (input.has13th ? 13 : 12)

  const socialInsurance = Math.min(annualSalary, SI_CAP) * SI_RATE
  const ghsContribution = Math.min(annualSalary, GHS_CAP) * GHS_RATE

  let taxableIncome = annualSalary - socialInsurance - ghsContribution
  if (taxableIncome < 0) taxableIncome = 0

  const { totalTax: incomeTax } = calculateCyprusIncomeTax(taxableIncome, '2025')

  const netSalary = annualSalary - socialInsurance - ghsContribution - incomeTax

  const monthlyNet =
    input.salaryType === 'annual'
      ? netSalary / 12
      : netSalary / (input.has13th ? 13 : 12)

  return {
    annualSalary,
    socialInsurance,
    ghsContribution,
    taxableIncome,
    incomeTax,
    netSalary,
    monthlyNet,
  }
}
