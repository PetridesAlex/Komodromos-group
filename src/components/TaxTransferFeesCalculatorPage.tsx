import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const EASE = [0.16, 1, 0.3, 1] as const

type FeeRow = {
  label: string
  rate: string
  fee: number
  accumulated: number
}

function formatEuro(v: number) {
  return `EUR ${v.toLocaleString('en-US', { maximumFractionDigits: 2 })}`
}

function calculateTransferFees(propertyValue: number, isSubjectToVat: boolean): FeeRow[] {
  if (propertyValue <= 0) {
    return []
  }

  if (isSubjectToVat) {
    return [
      {
        label: formatEuro(propertyValue),
        rate: '0%',
        fee: 0,
        accumulated: 0,
      },
    ]
  }

  const tiers = [
    { cap: 85_000, rate: 0.03 },
    { cap: 170_000, rate: 0.05 },
    { cap: Number.POSITIVE_INFINITY, rate: 0.08 },
  ]

  const rows: FeeRow[] = []
  let remaining = propertyValue
  let previousCap = 0
  let accumulated = 0

  for (const tier of tiers) {
    if (remaining <= 0) break

    const upperLimit = tier.cap
    const taxableChunk = Math.min(remaining, upperLimit - previousCap)
    if (taxableChunk <= 0) {
      previousCap = upperLimit
      continue
    }

    const fee = taxableChunk * tier.rate
    accumulated += fee
    rows.push({
      label:
        upperLimit === Number.POSITIVE_INFINITY
          ? `${formatEuro(previousCap + 1)}+`
          : `${formatEuro(previousCap + 1)} - ${formatEuro(upperLimit)}`,
      rate: `${tier.rate * 100}%`,
      fee,
      accumulated,
    })

    remaining -= taxableChunk
    previousCap = upperLimit
  }

  return rows
}

export default function TaxTransferFeesCalculatorPage() {
  const [propertyValue, setPropertyValue] = useState('')
  const [isSubjectToVat, setIsSubjectToVat] = useState(false)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const numericValue = Number(propertyValue.replace(/,/g, '')) || 0
  const feeRows = useMemo(
    () => calculateTransferFees(numericValue, isSubjectToVat),
    [numericValue, isSubjectToVat],
  )
  const totalFee = feeRows.length > 0 ? feeRows[feeRows.length - 1].accumulated : 0

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="bg-[linear-gradient(175deg,#f7fbff_0%,#edf4ff_45%,#f7fbff_100%)] pt-24 pb-14 sm:pb-20">
        <section className="container">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 text-center">
              <h1 className="font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold text-[#122844] sm:text-4xl">
                Transfer Fees Calculator
              </h1>
            </div>
            <motion.div
              className="overflow-hidden rounded-2xl border border-[#d5dfef] bg-white shadow-[0_34px_72px_-44px_rgba(15,23,42,0.5)]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
            >
              <div className="relative h-44 bg-[linear-gradient(140deg,#10233f_0%,#143258_46%,#1b3f6e_100%)] sm:h-52">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(148,198,255,0.28)_0%,transparent_46%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 text-center">
                    <p className="mx-auto mb-2 inline-flex rounded-full border border-[#d4e5ff8f] bg-[#122844b5] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#e8f2ff]">
                      Cyprus Property Tax Tools
                    </p>
                    <h1 className="bg-gradient-to-b from-white via-[#edf6ff] to-[#c9ddf5] bg-clip-text font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold text-transparent drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)] sm:text-4xl">
                      Transfer Fees Calculator
                    </h1>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-7 lg:p-8">
                <h2 className="text-2xl font-semibold text-[#17233b]">What it is</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4d5f7a] sm:text-base">
                  Transfer fees apply when Cyprus immovable property is sold. It is usually the
                  purchaser of the immovable property who pays transfer fees (unless otherwise agreed)
                  to the government via the Land Registry during the transfer process.
                </p>

                <div className="mt-6 rounded-xl border border-[#9bc0ef] bg-[linear-gradient(170deg,#2f88c7_0%,#2a79b7_100%)] p-4 text-white shadow-[0_20px_44px_-30px_rgba(28,85,148,0.8)] sm:p-5">
                  <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                    <label className="block">
                      <span className="text-xs font-semibold uppercase tracking-[0.13em] text-[#e8f3ff]">
                        Immovable property value
                      </span>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={propertyValue}
                        onChange={(e) => setPropertyValue(e.target.value)}
                        placeholder="e.g. 350000"
                        className="mt-2 h-11 w-full rounded-md border border-[#b7d4f5] bg-white px-3 text-sm text-[#0f2742] outline-none transition focus:border-[#e9f4ff] focus:ring-2 focus:ring-[#d9ecff]"
                      />
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm font-medium text-[#eaf4ff]">
                      <input
                        type="checkbox"
                        checked={isSubjectToVat}
                        onChange={(e) => setIsSubjectToVat(e.target.checked)}
                        className="h-4 w-4 rounded border-[#bad6f5] accent-[#e8f4ff]"
                      />
                      Is property subject to VAT?
                    </label>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-[#d5dfef]">
                  <div className="bg-[#f2f6fd] px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#35527d]">
                    Transfer Fees
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left">
                      <thead>
                        <tr className="bg-white text-xs uppercase tracking-[0.08em] text-[#607494]">
                          <th className="border-b border-[#e1e8f4] px-4 py-3">Market Value</th>
                          <th className="border-b border-[#e1e8f4] px-4 py-3">Rate</th>
                          <th className="border-b border-[#e1e8f4] px-4 py-3">Fee</th>
                          <th className="border-b border-[#e1e8f4] px-4 py-3">Accumulated Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {feeRows.length > 0 ? (
                          feeRows.map((row) => (
                            <tr key={`${row.label}-${row.rate}`} className="text-sm text-[#314764]">
                              <td className="border-b border-[#edf2fa] px-4 py-3">{row.label}</td>
                              <td className="border-b border-[#edf2fa] px-4 py-3">{row.rate}</td>
                              <td className="border-b border-[#edf2fa] px-4 py-3">{formatEuro(row.fee)}</td>
                              <td className="border-b border-[#edf2fa] px-4 py-3">{formatEuro(row.accumulated)}</td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td className="px-4 py-5 text-sm text-[#607494]" colSpan={4}>
                              Enter property value to estimate transfer fees.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-[#d9e2f1] bg-[#f8fbff] px-4 py-3 text-sm text-[#4a5d79]">
                  <span className="font-semibold text-[#2d4368]">Estimated total fee: </span>
                  {formatEuro(totalFee)}
                </div>

                <div className="mt-4 rounded-lg border border-[#d5dfef] bg-white px-4 py-3 text-sm leading-relaxed text-[#4d5f79]">
                  <p className="font-semibold text-[#2d4368]">No transfer fees in case of:</p>
                  <p className="mt-1">- Company reorganisations</p>
                  <p>- Loan restructurings</p>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-[#6a7890]">
                  Disclaimer: This tool should only be used as a guide. Even though we try to keep
                  values and assumptions up to date, we cannot guarantee validity for every case and
                  we shall not be held responsible for actions taken solely based on this estimate.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/services/tax"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#9eb5d8] bg-[#edf4ff] px-5 text-sm font-semibold uppercase tracking-wide text-[#2f5ca3] transition hover:bg-[#dfeafe]"
                  >
                    Back to tax services
                  </Link>
                  <Link
                    to="/contact"
                    state={{ serviceInterest: 'Tax & Accounting Services' }}
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-[#6f8fc5] bg-[#2d4770] px-5 text-sm font-semibold uppercase tracking-wide text-[#e8f1ff] transition hover:bg-[#385785]"
                  >
                    Speak with a tax pro
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
