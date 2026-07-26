import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import TaxIncomeCounsellorLeadModal from './TaxIncomeCounsellorLeadModal'
import { useReveal } from '../hooks/useReveal'
import { calculateCyprusIncomeTax, type CyprusIncomeTaxYear } from '../lib/cyprusIncomeTax'
import { calculateIncomeTax2025TaxNex } from '../lib/cyprusIncomeTax2025TaxNex'
import {
  calculateIncomeTax2026TaxNex,
  type TaxNex2026FamilyStatus,
} from '../lib/cyprusIncomeTax2026TaxNex'
import { TAX_CALC_UI, TAX_CALC_2025_UI, TAX_CALC_2026_UI } from '../data/taxIncomeCalculatorPageContent'
import { taxBrandHref } from '../lib/brandPaths'

const EASE = [0.16, 1, 0.3, 1] as const
const TAX_LOGO = '/images/services/tax-services/tax-nex.png'
const TAXISNET_APPLICATION_PATH = '/services/tax/taxisnet-application'

function formatEurEl(n: number) {
  return `${n.toLocaleString('el-GR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`
}

function parseNum(s: string) {
  return Number(String(s).replace(/,/g, '').replace(/\s/g, '')) || 0
}

export default function TaxIncomeCalculatorPage() {
  const [counsellorModalOpen, setCounsellorModalOpen] = useState(false)
  const [taxYear, setTaxYear] = useState<CyprusIncomeTaxYear>('2026')

  /** —— 2025 TaxNex-aligned (period + 13ος όταν μηνιαίο) —— */
  const [period, setPeriod] = useState<'annual' | 'monthly'>('monthly')
  const [grossInput, setGrossInput] = useState('')
  const [has13th25, setHas13th25] = useState(false)

  /** —— 2026 TaxNex-style —— */
  const [salaryType26, setSalaryType26] = useState<'annual' | 'monthly'>('monthly')
  const [gross2026, setGross2026] = useState('')
  const [has13th, setHas13th] = useState(false)
  const [familyStatus26, setFamilyStatus26] = useState<TaxNex2026FamilyStatus>('single')
  const [ex20, setEx20] = useState(false)
  const [ex50, setEx50] = useState(false)
  const [familyIncomeStr, setFamilyIncomeStr] = useState('')
  const [totalChildrenStr, setTotalChildrenStr] = useState('0')
  const [dependentChildrenStr, setDependentChildrenStr] = useState('0')
  const [housingStr, setHousingStr] = useState('')
  const [greenStr, setGreenStr] = useState('')
  const [disasterStr, setDisasterStr] = useState('')

  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  const numericGross = parseNum(grossInput)

  const result2025 = useMemo(() => {
    if (taxYear !== '2025') return null
    const g = parseNum(grossInput)
    return calculateIncomeTax2025TaxNex({
      salaryType: period,
      grossSalary: g,
      has13th: has13th25,
    })
  }, [taxYear, period, grossInput, has13th25])

  const calc25 = useMemo(() => {
    if (taxYear !== '2025' || !result2025) {
      return { totalTax: 0, rows: [] as ReturnType<typeof calculateCyprusIncomeTax>['rows'] }
    }
    return calculateCyprusIncomeTax(result2025.taxableIncome, '2025')
  }, [taxYear, result2025])

  const effectiveRate25 =
    result2025 && result2025.taxableIncome > 0
      ? (result2025.incomeTax / result2025.taxableIncome) * 100
      : 0

  const grossParsed26 = parseNum(gross2026)
  const annualPreview26 =
    salaryType26 === 'annual' ? grossParsed26 : grossParsed26 * (has13th ? 13 : 12)

  const result2026 = useMemo(() => {
    if (taxYear !== '2026') return null
    const gross = parseNum(gross2026)
    const annualPrev = salaryType26 === 'annual' ? gross : gross * (has13th ? 13 : 12)
    const ex50Eff = ex50 && annualPrev > 55000
    return calculateIncomeTax2026TaxNex({
      salaryType: salaryType26,
      grossSalary: gross,
      has13th,
      familyStatus: familyStatus26,
      exemption20: ex20,
      exemption50: ex50Eff,
      familyIncome: parseNum(familyIncomeStr),
      dependentChildren: Math.max(0, Math.floor(parseNum(dependentChildrenStr))),
      housingExpense: parseNum(housingStr),
      greenExpense: parseNum(greenStr),
      disasterExpense: parseNum(disasterStr),
    })
  }, [
    taxYear,
    salaryType26,
    gross2026,
    has13th,
    familyStatus26,
    ex20,
    ex50,
    familyIncomeStr,
    dependentChildrenStr,
    housingStr,
    greenStr,
    disasterStr,
  ])

  const rowsBreakdown2026 = useMemo(() => {
    if (!result2026 || taxYear !== '2026') return []
    return calculateCyprusIncomeTax(result2026.taxableIncome, '2026').rows
  }, [result2026, taxYear])

  const effectiveRate26 =
    result2026 && result2026.taxableIncome > 0
      ? (result2026.incomeTax / result2026.taxableIncome) * 100
      : 0

  const showChildrenFields = familyStatus26 === 'family' || familyStatus26 === 'singleparent'

  const inputDark =
    'mt-1.5 h-11 w-full rounded-xl border border-white/25 bg-white px-3 text-sm font-medium text-[#064e3b] shadow-inner outline-none focus:border-white focus:ring-2 focus:ring-white/35'

  return (
    <div className="page" ref={pageRef} lang="el">
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="relative isolate overflow-hidden bg-[linear-gradient(165deg,#fafdfb_0%,#ecfdf5_38%,#e6fffa_72%,#f0fdf4_100%)] pt-24 pb-16 sm:pb-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(16,185,129,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-teal-300/10 blur-3xl"
          aria-hidden
        />

        <section className="container relative">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5f766c] sm:text-xs">
              <Link to="/" className="transition-colors hover:text-[#047857]">
                {TAX_CALC_UI.breadcrumbHome}
              </Link>
              <span className="opacity-40" aria-hidden>
                ·
              </span>
              <Link to={taxBrandHref('/services/tax')} className="transition-colors hover:text-[#047857]">
                {TAX_CALC_UI.breadcrumbTax}
              </Link>
              <span className="opacity-40" aria-hidden>
                ·
              </span>
              <span className="text-[#065f46]">{TAX_CALC_UI.breadcrumbCurrent}</span>
            </nav>

            <motion.div
              className="relative overflow-hidden rounded-[1.35rem] border border-emerald-200/70 bg-white/95 shadow-[0_40px_100px_-52px_rgba(6,78,59,0.45),0_0_0_1px_rgba(255,255,255,0.85)_inset]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, ease: EASE }}
            >
              <div className="relative min-h-[11rem] bg-[linear-gradient(135deg,#022c22_0%,#064e3b_38%,#047857_62%,#0d9488_100%)] sm:min-h-[12.5rem]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(167,243,208,0.45)_0%,transparent_42%),radial-gradient(circle_at_88%_78%,rgba(45,212,191,0.2)_0%,transparent_38%)]" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
                <div className="relative flex flex-col items-center justify-center px-6 pb-10 pt-9 text-center sm:px-10">
                  <img
                    src={TAX_LOGO}
                    alt="TaxNex"
                    width={3250}
                    height={3250}
                    className="mb-5 h-auto w-[min(200px,52vw)] shrink-0 object-contain sm:w-[min(228px,46vw)] md:w-[min(248px,42vw)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                    decoding="async"
                    loading="eager"
                    fetchPriority="high"
                  />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-100/95">
                    {TAX_CALC_UI.heroKicker}
                  </p>
                  <h1 className="mt-2 max-w-xl font-['Playfair_Display','Cormorant_Garamond',serif] text-[1.65rem] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,30,22,0.45)] sm:text-3xl md:text-[2rem]">
                    {TAX_CALC_UI.title}
                  </h1>
                  <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-100/85">
                    {TAX_CALC_UI.eyebrow}
                  </p>
                </div>
              </div>

              <div className="border-t border-emerald-100/90 px-5 py-8 sm:px-9 sm:py-10 lg:px-11 lg:py-12">
                <div className="flex flex-wrap items-end justify-between gap-4 border-b border-emerald-100/90 pb-8">
                  <div>
                    <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#047857] ring-1 ring-emerald-200/90">
                      {TAX_CALC_UI.stageBadge}
                    </p>
                    <h2 className="mt-3 font-['Playfair_Display','Cormorant_Garamond',serif] text-2xl font-semibold tracking-tight text-[#064e3b] sm:text-[1.75rem]">
                      {TAX_CALC_UI.stageTitle}
                    </h2>
                  </div>
                  <div className="flex rounded-2xl border border-emerald-200/90 bg-emerald-50/40 p-1 shadow-inner">
                    <button
                      type="button"
                      onClick={() => setTaxYear('2025')}
                      className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${
                        taxYear === '2025'
                          ? 'bg-white text-[#065f46] shadow-md ring-1 ring-emerald-200/80'
                          : 'text-[#5f766c] hover:bg-white/70'
                      }`}
                    >
                      2025
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaxYear('2026')}
                      className={`rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all ${
                        taxYear === '2026'
                          ? 'bg-white text-[#065f46] shadow-md ring-1 ring-emerald-200/80'
                          : 'text-[#5f766c] hover:bg-white/70'
                      }`}
                    >
                      2026
                    </button>
                  </div>
                </div>

                <div className="mt-8 space-y-4 text-[15px] leading-[1.72] text-[#3d5349] sm:text-base">
                  {taxYear === '2026' ? (
                    <>
                      <p>{TAX_CALC_2026_UI.introP1}</p>
                      <p>{TAX_CALC_2026_UI.introP2}</p>
                      <p>
                        {TAX_CALC_UI.introP3BeforeLink}
                        <Link
                          className="font-semibold text-[#047857] underline decoration-emerald-300 underline-offset-2 hover:text-[#065f46]"
                          to="/contact"
                        >
                          {TAX_CALC_UI.introLink}
                        </Link>
                        {TAX_CALC_UI.introP3AfterLink}
                      </p>
                      <p className="rounded-lg border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm font-medium text-amber-950/90">
                        {TAX_CALC_UI.requiredFieldsNote}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>{TAX_CALC_2025_UI.introP1}</p>
                      <p>{TAX_CALC_2025_UI.introP2}</p>
                      <p>
                        {TAX_CALC_2025_UI.introP3BeforeLink}
                        <Link
                          className="font-semibold text-[#047857] underline decoration-emerald-300 underline-offset-2 hover:text-[#065f46]"
                          to="/contact"
                        >
                          {TAX_CALC_UI.introLink}
                        </Link>
                        {TAX_CALC_UI.introP3AfterLink}
                      </p>
                      <p className="rounded-lg border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm font-medium text-amber-950/90">
                        {TAX_CALC_2025_UI.requiredStarNote}
                      </p>
                    </>
                  )}
                </div>

                <p className="mt-6 text-xs leading-relaxed text-[#5f766c]">
                  {taxYear === '2025' ? TAX_CALC_UI.yearHint2025 : TAX_CALC_UI.yearHint2026}
                </p>

                {taxYear === '2025' ? (
                  <>
                    <div className="mt-8 rounded-2xl border border-emerald-400/40 bg-[linear-gradient(165deg,#059669_0%,#047857_48%,#0f766e_100%)] p-5 shadow-[0_28px_56px_-28px_rgba(6,95,70,0.55)] sm:p-7">
                      <fieldset className="min-w-0 w-full border-0 p-0 shadow-none [background:transparent]">
                        <legend className="sr-only">{TAX_CALC_2025_UI.fieldsetHeading}</legend>
                        <div className="mb-6 border-b border-white/15 pb-5">
                          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-100/95">
                            {TAX_CALC_UI.stageBadge} · {TAX_CALC_UI.stageTitle}
                          </p>
                          <h3 className="mt-2 font-['Playfair_Display','Cormorant_Garamond',serif] text-xl font-semibold text-white sm:text-[1.35rem]">
                            {TAX_CALC_2025_UI.fieldsetHeading}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-emerald-50/90">{TAX_CALC_2025_UI.formHint2025}</p>
                        </div>

                        <ol className="grid list-decimal gap-6 pl-5 text-sm font-semibold text-emerald-50 marker:text-emerald-200/95 sm:pl-6">
                          <li className="pl-1">
                            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-100/95">
                              {TAX_CALC_UI.periodLegend}
                            </span>
                            <div className="mt-3 grid grid-cols-2 gap-2 font-normal">
                              <button
                                type="button"
                                onClick={() => setPeriod('annual')}
                                className={`rounded-xl py-3 text-xs font-bold uppercase tracking-wide transition ${
                                  period === 'annual'
                                    ? 'bg-white text-[#047857] shadow-lg'
                                    : 'bg-white/12 text-emerald-50 hover:bg-white/18'
                                }`}
                              >
                                {TAX_CALC_UI.annual}
                              </button>
                              <button
                                type="button"
                                onClick={() => setPeriod('monthly')}
                                className={`rounded-xl py-3 text-xs font-bold uppercase tracking-wide transition ${
                                  period === 'monthly'
                                    ? 'bg-white text-[#047857] shadow-lg'
                                    : 'bg-white/12 text-emerald-50 hover:bg-white/18'
                                }`}
                              >
                                {TAX_CALC_UI.monthly}
                              </button>
                            </div>
                          </li>

                          <li className="pl-1">
                            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-100/95">
                              {period === 'monthly' ? `${TAX_CALC_UI.thirteenthSalary} · ${TAX_CALC_UI.grossMonthly}` : TAX_CALC_UI.grossAnnual}
                            </span>
                            <div
                              className={`mt-3 grid gap-4 font-normal ${period === 'monthly' ? 'sm:grid-cols-2 sm:items-end' : ''}`}
                            >
                              {period === 'monthly' ? (
                                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-semibold text-emerald-50">
                                  <input
                                    type="checkbox"
                                    checked={has13th25}
                                    onChange={(e) => setHas13th25(e.target.checked)}
                                    className="h-4 w-4 shrink-0 rounded border-white/40 accent-emerald-600"
                                  />
                                  {TAX_CALC_UI.thirteenthSalary}
                                </label>
                              ) : null}
                              <label className={`block min-w-0 ${period === 'annual' ? 'sm:col-span-2' : ''}`}>
                                <span className="sr-only">
                                  {period === 'annual' ? TAX_CALC_UI.grossAnnual : TAX_CALC_UI.grossMonthly}
                                </span>
                                <input
                                  id="tax-calc-gross-input"
                                  type="text"
                                  inputMode="decimal"
                                  autoComplete="off"
                                  value={grossInput}
                                  onChange={(e) => setGrossInput(e.target.value)}
                                  placeholder={
                                    period === 'annual' ? TAX_CALC_UI.placeholderAnnual : TAX_CALC_UI.placeholderMonthly
                                  }
                                  aria-label={
                                    period === 'annual' ? TAX_CALC_UI.grossAnnual : TAX_CALC_UI.grossMonthly
                                  }
                                  className="mt-0 h-12 w-full rounded-xl border border-white/25 bg-white px-3 text-lg font-semibold tabular-nums text-[#064e3b] shadow-inner outline-none transition placeholder:text-emerald-900/30 focus:border-white focus:ring-2 focus:ring-white/35 sm:mt-2"
                                />
                              </label>
                            </div>
                          </li>
                        </ol>
                      </fieldset>
                    </div>

                    {result2025 ? (
                      <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-200/90 bg-white shadow-[0_24px_56px_-40px_rgba(6,78,59,0.35)]">
                        <div className="border-b border-emerald-100 bg-[linear-gradient(180deg,#ecfdf5_0%,#ffffff_100%)] px-6 py-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#065f46]">
                            {TAX_CALC_2025_UI.resultsTitle2025}
                          </p>
                          <p className="mt-1 text-sm text-[#5f766c]">{TAX_CALC_2025_UI.resultsHint2025}</p>
                        </div>
                        <div className="divide-y divide-emerald-100" aria-live="polite" aria-atomic="true">
                          {[
                            [TAX_CALC_2026_UI.rowGrossAnnual, formatEurEl(result2025.annualSalary)],
                            [TAX_CALC_2026_UI.rowSi, formatEurEl(result2025.socialInsurance)],
                            [TAX_CALC_2026_UI.rowGesy, formatEurEl(result2025.ghsContribution)],
                            [TAX_CALC_2026_UI.rowTaxable, formatEurEl(result2025.taxableIncome)],
                            [TAX_CALC_2026_UI.rowTax, formatEurEl(result2025.incomeTax)],
                            [TAX_CALC_2026_UI.rowNetAnnual, formatEurEl(result2025.netSalary)],
                            [TAX_CALC_2026_UI.rowNetMonthly, formatEurEl(result2025.monthlyNet)],
                          ].map(([k, v]) => (
                            <div key={String(k)} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm">
                              <span className="font-medium text-[#4a6359]">{k}</span>
                              <span className="font-['Playfair_Display','Cormorant_Garamond',serif] text-lg font-semibold tabular-nums text-[#064e3b]">
                                {v}
                              </span>
                            </div>
                          ))}
                        </div>
                        {period === 'monthly' && grossInput.trim() !== '' ? (
                          <p className="border-t border-emerald-100 px-6 py-3 text-xs text-[#6b8579]">
                            {TAX_CALC_UI.metricMonthlyGross}:{' '}
                            <span className="font-semibold tabular-nums text-[#064e3b]">{formatEurEl(numericGross)}</span>
                            {' · '}
                            {TAX_CALC_UI.annualEquivalentLabel}:{' '}
                            <span className="font-semibold tabular-nums text-[#064e3b]">{formatEurEl(result2025.annualSalary)}</span>
                            {has13th25 ? (
                              <span className="text-emerald-700/90"> ({TAX_CALC_UI.thirteenthSalary}: 13×)</span>
                            ) : (
                              <span className="text-emerald-700/90"> (12×)</span>
                            )}
                          </p>
                        ) : null}
                      </div>
                    ) : null}

                    <p className="mt-5 text-sm text-[#5f766c]">
                      {TAX_CALC_UI.effectiveRate}{' '}
                      <strong className="tabular-nums text-[#065f46]">{effectiveRate25.toFixed(2)}%</strong>
                    </p>

                    <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-[0_16px_40px_-28px_rgba(15,59,47,0.18)]">
                      <div className="border-b border-emerald-100 bg-[linear-gradient(180deg,#ecfdf5_0%,#f8fffc_100%)] px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#065f46]">
                          {TAX_CALC_UI.breakdownTitle} (2025)
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="border-b border-emerald-100 bg-white text-[11px] font-bold uppercase tracking-[0.08em] text-[#5f766c]">
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableBand}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableRate}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableInBand}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableTaxInBand}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {calc25.rows.length > 0 ? (
                              calc25.rows.map((row, idx) => (
                                <tr
                                  key={row.label}
                                  className={`text-sm text-[#1e3a2f] ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50/40'}`}
                                >
                                  <td className="border-b border-emerald-50 px-5 py-3.5 font-medium">{row.label}</td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums">
                                    {(row.rate * 100).toFixed(0)}%
                                  </td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums">
                                    {formatEurEl(row.incomeInBand)}
                                  </td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums font-medium text-[#065f46]">
                                    {formatEurEl(row.taxInBand)}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="px-5 py-8 text-sm text-[#6b8579]" colSpan={4}>
                                  {TAX_CALC_UI.tableEmpty}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mt-10 rounded-[1.25rem] border border-teal-600/35 bg-[linear-gradient(155deg,#115e59_0%,#0f766e_38%,#047857_72%,#065f46_100%)] p-6 shadow-[0_32px_64px_-36px_rgba(6,78,59,0.65)] sm:p-8">
                      <div className="mb-6 flex flex-col gap-1 border-b border-white/15 pb-5">
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-100/95">{TAX_CALC_2026_UI.formTitle}</p>
                        <p className="text-sm text-emerald-50/85">{TAX_CALC_2026_UI.resultsHint}</p>
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <label className="block text-sm font-semibold text-emerald-50">
                          {TAX_CALC_2026_UI.salaryType}
                          <select
                            value={salaryType26}
                            onChange={(e) => setSalaryType26(e.target.value as 'annual' | 'monthly')}
                            className={`${inputDark} appearance-none bg-[length:12px_8px] bg-[position:right_14px_center] bg-no-repeat pr-10`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23064748' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            }}
                          >
                            <option value="annual">{TAX_CALC_UI.annual}</option>
                            <option value="monthly">{TAX_CALC_UI.monthly}</option>
                          </select>
                        </label>

                        <label className="block text-sm font-semibold text-emerald-50">
                          {TAX_CALC_2026_UI.grossLabel}
                          <input
                            type="text"
                            inputMode="decimal"
                            value={gross2026}
                            onChange={(e) => setGross2026(e.target.value)}
                            className={inputDark}
                          />
                        </label>

                        {salaryType26 === 'monthly' ? (
                          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-emerald-50 sm:col-span-2">
                            <input
                              type="checkbox"
                              checked={has13th}
                              onChange={(e) => setHas13th(e.target.checked)}
                              className="h-4 w-4 rounded border-white/40 accent-emerald-600"
                            />
                            {TAX_CALC_2026_UI.thirteenth}
                          </label>
                        ) : null}

                        <label className="block text-sm font-semibold text-emerald-50 sm:col-span-2">
                          {TAX_CALC_2026_UI.familyStatus}
                          <select
                            value={familyStatus26}
                            onChange={(e) => setFamilyStatus26(e.target.value as TaxNex2026FamilyStatus)}
                            className={`${inputDark} appearance-none bg-[length:12px_8px] bg-[position:right_14px_center] bg-no-repeat pr-10`}
                            style={{
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23064748' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                            }}
                          >
                            <option value="single">{TAX_CALC_2026_UI.optSingle}</option>
                            <option value="singleparent">{TAX_CALC_2026_UI.optSingleParent}</option>
                            <option value="family">{TAX_CALC_2026_UI.optFamily}</option>
                          </select>
                        </label>

                        <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-emerald-50">
                          <input
                            type="checkbox"
                            checked={ex20}
                            onChange={(e) => setEx20(e.target.checked)}
                            className="h-4 w-4 rounded border-white/40 accent-emerald-600"
                          />
                          {TAX_CALC_2026_UI.ex20}
                        </label>

                        <label className={`flex cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-emerald-50 ${annualPreview26 <= 55000 ? 'opacity-60' : ''}`}>
                          <input
                            type="checkbox"
                            checked={ex50 && annualPreview26 > 55000}
                            disabled={annualPreview26 <= 55000}
                            onChange={(e) => setEx50(e.target.checked)}
                            className="h-4 w-4 rounded border-white/40 accent-emerald-600 disabled:opacity-50"
                          />
                          <span>{TAX_CALC_2026_UI.ex50}</span>
                        </label>
                        {annualPreview26 <= 55000 ? (
                          <p className="sm:col-span-2 text-xs text-emerald-100/90">{TAX_CALC_2026_UI.ex50Disabled}</p>
                        ) : null}

                        <label className="block text-sm font-semibold text-emerald-50 sm:col-span-2">
                          {TAX_CALC_2026_UI.familyIncome}
                          <input
                            type="text"
                            inputMode="decimal"
                            value={familyIncomeStr}
                            onChange={(e) => setFamilyIncomeStr(e.target.value)}
                            className={inputDark}
                          />
                        </label>

                        {showChildrenFields ? (
                          <>
                            <label className="block text-sm font-semibold text-emerald-50">
                              {TAX_CALC_2026_UI.totalChildren}
                              <input
                                type="text"
                                inputMode="numeric"
                                value={totalChildrenStr}
                                onChange={(e) => setTotalChildrenStr(e.target.value)}
                                className={inputDark}
                              />
                            </label>
                            <label className="block text-sm font-semibold text-emerald-50">
                              {TAX_CALC_2026_UI.dependentChildren}
                              <input
                                type="text"
                                inputMode="numeric"
                                value={dependentChildrenStr}
                                onChange={(e) => setDependentChildrenStr(e.target.value)}
                                className={inputDark}
                              />
                            </label>
                          </>
                        ) : (
                          <p className="text-xs text-emerald-100/75 sm:col-span-2">{TAX_CALC_2026_UI.childrenHiddenHint}</p>
                        )}

                        <label className="block text-sm font-semibold text-emerald-50">
                          {TAX_CALC_2026_UI.housing}
                          <input
                            type="text"
                            inputMode="decimal"
                            value={housingStr}
                            onChange={(e) => setHousingStr(e.target.value)}
                            className={inputDark}
                          />
                        </label>

                        <label className="block text-sm font-semibold text-emerald-50">
                          {TAX_CALC_2026_UI.green}
                          <input
                            type="text"
                            inputMode="decimal"
                            value={greenStr}
                            onChange={(e) => setGreenStr(e.target.value)}
                            className={inputDark}
                          />
                        </label>

                        <label className="block text-sm font-semibold text-emerald-50 sm:col-span-2">
                          {TAX_CALC_2026_UI.disaster}
                          <input
                            type="text"
                            inputMode="decimal"
                            value={disasterStr}
                            onChange={(e) => setDisasterStr(e.target.value)}
                            className={inputDark}
                          />
                        </label>
                      </div>
                    </div>

                    {result2026 ? (
                      <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-200/90 bg-white shadow-[0_24px_56px_-40px_rgba(6,78,59,0.35)]">
                        <div className="border-b border-emerald-100 bg-[linear-gradient(180deg,#ecfdf5_0%,#ffffff_100%)] px-6 py-4">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#065f46]">{TAX_CALC_2026_UI.resultsTitle}</p>
                        </div>
                        <div className="divide-y divide-emerald-100">
                          {[
                            [TAX_CALC_2026_UI.rowGrossAnnual, formatEurEl(result2026.annualSalary)],
                            [TAX_CALC_2026_UI.rowSi, formatEurEl(result2026.socialInsurance)],
                            [TAX_CALC_2026_UI.rowGesy, formatEurEl(result2026.ghsContribution)],
                            [TAX_CALC_2026_UI.rowDeductions, formatEurEl(result2026.totalDeductions)],
                            [TAX_CALC_2026_UI.rowTaxable, formatEurEl(result2026.taxableIncome)],
                            [TAX_CALC_2026_UI.rowTax, formatEurEl(result2026.incomeTax)],
                            [TAX_CALC_2026_UI.rowNetAnnual, formatEurEl(result2026.netSalary)],
                            [TAX_CALC_2026_UI.rowNetMonthly, formatEurEl(result2026.monthlyNet)],
                          ].map(([k, v]) => (
                            <div key={String(k)} className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-sm">
                              <span className="font-medium text-[#4a6359]">{k}</span>
                              <span className="font-['Playfair_Display','Cormorant_Garamond',serif] text-lg font-semibold tabular-nums text-[#064e3b]">
                                {v}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <p className="mt-6 text-sm text-[#5f766c]">
                      {TAX_CALC_UI.effectiveRate}{' '}
                      <strong className="tabular-nums text-[#065f46]">{effectiveRate26.toFixed(2)}%</strong>
                    </p>

                    <div className="mt-10 overflow-hidden rounded-2xl border border-emerald-200/80 bg-white shadow-[0_16px_40px_-28px_rgba(15,59,47,0.18)]">
                      <div className="border-b border-emerald-100 bg-[linear-gradient(180deg,#ecfdf5_0%,#f8fffc_100%)] px-5 py-4">
                        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#065f46]">
                          {TAX_CALC_UI.breakdownTitle} (2026)
                        </p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-[560px] border-collapse text-left">
                          <thead>
                            <tr className="border-b border-emerald-100 bg-white text-[11px] font-bold uppercase tracking-[0.08em] text-[#5f766c]">
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableBand}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableRate}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableInBand}</th>
                              <th className="px-5 py-3.5">{TAX_CALC_UI.tableTaxInBand}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {rowsBreakdown2026.length > 0 ? (
                              rowsBreakdown2026.map((row, idx) => (
                                <tr
                                  key={row.label}
                                  className={`text-sm text-[#1e3a2f] ${idx % 2 === 0 ? 'bg-white' : 'bg-emerald-50/40'}`}
                                >
                                  <td className="border-b border-emerald-50 px-5 py-3.5 font-medium">{row.label}</td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums">
                                    {(row.rate * 100).toFixed(0)}%
                                  </td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums">
                                    {formatEurEl(row.incomeInBand)}
                                  </td>
                                  <td className="border-b border-emerald-50 px-5 py-3.5 tabular-nums font-medium text-[#065f46]">
                                    {formatEurEl(row.taxInBand)}
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td className="px-5 py-8 text-sm text-[#6b8579]" colSpan={4}>
                                  {TAX_CALC_UI.tableEmpty}
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-10 rounded-2xl border border-emerald-200/60 bg-emerald-50/35 px-5 py-5 sm:px-7">
                  <p className="font-semibold text-[#064e3b]">{TAX_CALC_UI.reformNoteTitle}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#4a6359]">{TAX_CALC_UI.reformNoteBody}</p>
                </div>

                <div className="mt-12 border-t border-emerald-100 pt-10">
                  <h3 className="font-['Playfair_Display','Cormorant_Garamond',serif] text-xl font-semibold text-[#064e3b] sm:text-2xl">
                    {TAX_CALC_UI.ctaTitle}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#4a6359]">{TAX_CALC_UI.ctaBody}</p>
                  <Link
                    to={taxBrandHref(TAXISNET_APPLICATION_PATH)}
                    className="mt-6 inline-flex min-h-[3rem] items-center justify-center rounded-xl bg-[linear-gradient(180deg,#059669_0%,#047857_100%)] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-[0_14px_32px_-12px_rgba(6,95,70,0.65)] ring-1 ring-white/20 transition hover:brightness-[1.03]"
                  >
                    {TAX_CALC_UI.ctaPrimary}
                  </Link>
                </div>

                <p className="mt-10 text-xs leading-relaxed text-[#6b8579]">
                  {taxYear === '2026' ? TAX_CALC_2026_UI.disclaimer2026 : TAX_CALC_2025_UI.disclaimer2025}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to={taxBrandHref('/services/tax')}
                    className="inline-flex min-h-[2.75rem] items-center justify-center rounded-xl border border-emerald-300/90 bg-white px-6 text-xs font-bold uppercase tracking-wide text-[#047857] shadow-sm transition hover:bg-emerald-50"
                  >
                    {TAX_CALC_UI.backTax}
                  </Link>
                  <button
                    type="button"
                    className="inline-flex min-h-[2.75rem] items-center justify-center rounded-xl border border-emerald-800 bg-[#065f46] px-6 text-xs font-bold uppercase tracking-wide text-emerald-50 shadow-md transition hover:bg-[#047857]"
                    onClick={() => setCounsellorModalOpen(true)}
                  >
                    {TAX_CALC_UI.speakAdvisor}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <TaxIncomeCounsellorLeadModal isOpen={counsellorModalOpen} onClose={() => setCounsellorModalOpen(false)} />

      <Footer />
    </div>
  )
}
