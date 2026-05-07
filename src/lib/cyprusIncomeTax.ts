/**
 * Cyprus personal income tax — progressive employment bands (EUR).
 * 2025: standard bands. 2026: reform bands — verify against official notices before advising clients.
 */

export type CyprusIncomeTaxYear = '2025' | '2026'

export type CyprusTaxBandRow = {
  label: string
  rate: number
  taxInBand: number
  incomeInBand: number
}

const BANDS_2025: { ceiling: number; rate: number }[] = [
  { ceiling: 19_500, rate: 0 },
  { ceiling: 28_000, rate: 0.2 },
  { ceiling: 36_300, rate: 0.25 },
  { ceiling: 60_000, rate: 0.3 },
  { ceiling: Number.POSITIVE_INFINITY, rate: 0.35 },
]

/** Marginal bands aligned with TaxNexCy 2026 public tool (€22k / €32k / €42k / €72k thresholds). */
const BANDS_2026: { ceiling: number; rate: number }[] = [
  { ceiling: 22_000, rate: 0 },
  { ceiling: 32_000, rate: 0.2 },
  { ceiling: 42_000, rate: 0.25 },
  { ceiling: 72_000, rate: 0.3 },
  { ceiling: Number.POSITIVE_INFINITY, rate: 0.35 },
]

function formatBandLabel(prevCeil: number, ceiling: number): string {
  if (ceiling === Number.POSITIVE_INFINITY) {
    return `Above EUR ${prevCeil.toLocaleString('en-US')}`
  }
  const low = prevCeil === 0 ? 0 : prevCeil + 1
  return `EUR ${low.toLocaleString('en-US')} – ${ceiling.toLocaleString('en-US')}`
}

/**
 * Computes progressive income tax on annual taxable employment income.
 */
export function calculateCyprusIncomeTax(
  annualTaxableIncome: number,
  year: CyprusIncomeTaxYear,
): { totalTax: number; rows: CyprusTaxBandRow[] } {
  const bands = year === '2025' ? BANDS_2025 : BANDS_2026
  const income = Math.max(0, annualTaxableIncome)

  const rows: CyprusTaxBandRow[] = []
  let prevCeiling = 0
  let totalTax = 0

  for (const band of bands) {
    if (income <= prevCeiling) break

    const ceiling = band.ceiling
    const sliceTop = Math.min(income, ceiling)
    const incomeInBand = sliceTop - prevCeiling

    if (incomeInBand > 0) {
      const taxInBand = incomeInBand * band.rate
      totalTax += taxInBand
      rows.push({
        label: formatBandLabel(prevCeiling, ceiling),
        rate: band.rate,
        taxInBand,
        incomeInBand,
      })
    }

    prevCeiling = ceiling
  }

  return { totalTax, rows }
}

/** Illustrative only — not payroll-accurate (caps, ceilings, other income types ignored). */
export const ILLUSTRATIVE_CONTRIBUTION_PCT = 0.11
