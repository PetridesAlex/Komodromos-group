/**
 * 2026 employment income estimate aligned with TaxNexCy public calculator logic
 * (marginal bands + SI/GESY caps + reform deductions). Illustrative only.
 */

export type TaxNex2026FamilyStatus = 'single' | 'singleparent' | 'family'

export type TaxNex2026Input = {
  salaryType: 'annual' | 'monthly'
  grossSalary: number
  has13th: boolean
  familyStatus: TaxNex2026FamilyStatus
  exemption20: boolean
  exemption50: boolean
  familyIncome: number
  dependentChildren: number
  housingExpense: number
  greenExpense: number
  disasterExpense: number
}

export type TaxNex2026Result = {
  annualSalary: number
  socialInsurance: number
  ghsContribution: number
  firstEmploymentDeduction: number
  childDeduction: number
  housingDeduction: number
  greenDeduction: number
  disasterDeduction: number
  totalDeductions: number
  taxableIncome: number
  incomeTax: number
  netSalary: number
  monthlyNet: number
  exemption20Applied: boolean
  exemption50Applied: boolean
}

/** Progressive income tax — same marginal slicing as TaxNexCy `calculateTax2026WPML`. */
export function progressiveIncomeTax2026TaxNex(taxableIncome: number): number {
  let incomeTax = 0
  let remaining = Math.max(0, taxableIncome)
  if (remaining > 72000) {
    incomeTax += (remaining - 72000) * 0.35
    remaining = 72000
  }
  if (remaining > 42000) {
    incomeTax += (remaining - 42000) * 0.3
    remaining = 42000
  }
  if (remaining > 32000) {
    incomeTax += (remaining - 32000) * 0.25
    remaining = 32000
  }
  if (remaining > 22000) {
    incomeTax += (remaining - 22000) * 0.2
  }
  return incomeTax
}

/**
 * Resolve conflicting 20% / 50% first-employment flags like TaxNexCy (uses gross input before annualisation).
 */
export function resolveExemptionsTaxNex(
  exemption20: boolean,
  exemption50: boolean,
  grossInputForMutual: number,
): { exemption20: boolean; exemption50: boolean } {
  let ex20 = exemption20
  let ex50 = exemption50
  if (ex20 && ex50) {
    if (grossInputForMutual > 55000) {
      ex20 = false
    } else {
      ex50 = false
    }
  }
  return { exemption20: ex20, exemption50: ex50 }
}

export function calculateIncomeTax2026TaxNex(input: TaxNex2026Input): TaxNex2026Result {
  const grossRaw = Math.max(0, input.grossSalary)
  const { exemption20: ex20, exemption50: ex50 } = resolveExemptionsTaxNex(
    input.exemption20,
    input.exemption50,
    grossRaw,
  )

  const annualSalary =
    input.salaryType === 'annual'
      ? grossRaw
      : grossRaw * (input.has13th ? 13 : 12)

  const siCap = 68904
  const socialInsurance = Math.min(annualSalary, siCap) * 0.088

  const ghsCap = 180000
  const ghsContribution = Math.min(annualSalary, ghsCap) * 0.0265

  let firstEmploymentDeduction = 0
  if (ex50 && annualSalary > 55000) {
    firstEmploymentDeduction = annualSalary * 0.5
  } else if (ex20) {
    firstEmploymentDeduction = Math.min(annualSalary * 0.2, 8550)
  }

  const { familyStatus, familyIncome, dependentChildren } = input

  let incomeLimit = 40000
  if (familyStatus !== 'single') {
    if (dependentChildren <= 2) incomeLimit = 100000
    else if (dependentChildren <= 4) incomeLimit = 150000
    else incomeLimit = 200000
  }

  let childDeduction = 0
  if (familyIncome <= incomeLimit) {
    if (familyStatus === 'family') {
      for (let i = 1; i <= dependentChildren; i++) {
        if (i === 1) childDeduction += 1000 * 2
        else if (i === 2) childDeduction += 1250 * 2
        else childDeduction += 1500 * 2
      }
    } else if (familyStatus === 'singleparent') {
      for (let j = 1; j <= dependentChildren; j++) {
        if (j === 1) childDeduction += 2000
        else if (j === 2) childDeduction += 2500
        else childDeduction += 3000
      }
    }
  }

  let housingDeduction = 0
  if (familyIncome <= incomeLimit) {
    const personCount = familyStatus === 'family' ? 2 : 1
    const housingCap = 2000 * personCount
    housingDeduction = Math.min(Math.max(0, input.housingExpense), housingCap)
  }

  let greenDeduction = 0
  if (familyIncome <= incomeLimit) {
    const greenCap = 1000 * (familyStatus === 'family' ? 2 : 1)
    greenDeduction = Math.min(Math.max(0, input.greenExpense), greenCap)
  }

  const disasterCap = 500 * (familyStatus === 'family' ? 2 : 1)
  const disasterDeduction = Math.min(Math.max(0, input.disasterExpense), disasterCap)

  const totalDeductions =
    firstEmploymentDeduction +
    childDeduction +
    housingDeduction +
    greenDeduction +
    disasterDeduction

  let taxableIncome = annualSalary - socialInsurance - ghsContribution - totalDeductions
  if (taxableIncome < 0) taxableIncome = 0

  const incomeTax = progressiveIncomeTax2026TaxNex(taxableIncome)

  const netSalary = annualSalary - socialInsurance - ghsContribution - incomeTax

  const monthlyNet =
    input.salaryType === 'annual'
      ? netSalary / 12
      : netSalary / (input.has13th ? 13 : 12)

  return {
    annualSalary,
    socialInsurance,
    ghsContribution,
    firstEmploymentDeduction,
    childDeduction,
    housingDeduction,
    greenDeduction,
    disasterDeduction,
    totalDeductions,
    taxableIncome,
    incomeTax,
    netSalary,
    monthlyNet,
    exemption20Applied: ex20,
    exemption50Applied: ex50,
  }
}
