import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TAX_NEX_FAQ_SECTION_ID, getTaxNexFaqContent } from '../data/taxNexFaqData'

type Props = {
  /** Extra classes on the root section (e.g. home page spacing). */
  className?: string
}

export default function TaxNexFaqSection({ className = '' }: Props) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const { i18n } = useTranslation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const faqContent = getTaxNexFaqContent(locale)

  return (
    <section
      lang={locale}
      id={TAX_NEX_FAQ_SECTION_ID}
      className={`scroll-mt-28 ${className}`.trim()}
      aria-labelledby="tax-faq-title"
    >
      <div className="mb-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5b7a6e] sm:text-xs">
          {faqContent.heading.eyebrow}
        </p>
        <h2
          id="tax-faq-title"
          className="mt-3 font-['Playfair_Display','Cormorant_Garamond',serif] text-[1.65rem] font-semibold tracking-tight text-[#064e3b] sm:text-[2rem]"
        >
          {faqContent.heading.title}
        </h2>
        <div
          className="mx-auto mt-5 h-px max-w-[12rem] bg-gradient-to-r from-transparent via-emerald-600/45 to-transparent"
          aria-hidden
        />
      </div>

      <div className="rounded-[1.35rem] border border-emerald-200/70 bg-gradient-to-b from-white via-white to-emerald-50/[0.55] p-2 sm:p-3 shadow-[0_36px_80px_-52px_rgba(6,78,59,0.38),inset_0_1px_0_0_rgba(255,255,255,0.9)]">
        <div className="flex flex-col gap-2 sm:gap-2.5">
          {faqContent.items.map((item, i) => {
            const isOpen = faqOpen === i
            const isGreenStripe = i % 2 === 0
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-xl transition-[box-shadow,transform] duration-300 ${
                  isGreenStripe
                    ? 'bg-[linear-gradient(152deg,#ecfdf5_0%,#a7f3d0_18%,#6ee7b7_42%,#34d399_62%,#14b8a6_82%,#ccfbf1_100%)] ring-1 ring-emerald-900/25'
                    : 'bg-white ring-1 ring-emerald-950/[0.06]'
                } ${
                  isOpen
                    ? isGreenStripe
                      ? 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.62),inset_0_-1px_0_rgba(4,47,46,0.07),0_20px_48px_-24px_rgba(4,47,46,0.42)] ring-emerald-950/30'
                      : 'shadow-[0_18px_40px_-28px_rgba(6,95,70,0.35)] ring-emerald-700/15'
                    : isGreenStripe
                      ? 'shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(4,47,46,0.06),0_14px_36px_-14px_rgba(4,60,48,0.32)] ring-emerald-900/28'
                      : 'shadow-[0_8px_24px_-20px_rgba(15,59,47,0.12)]'
                }`}
              >
                <button
                  type="button"
                  className={`group flex w-full items-start justify-between gap-5 px-5 py-[1.05rem] text-left sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/35 focus-visible:ring-offset-2 ${
                    isGreenStripe
                      ? 'bg-white/30 backdrop-blur-[2px] focus-visible:ring-offset-emerald-200/90'
                      : 'bg-white/95 focus-visible:ring-offset-white'
                  }`}
                  onClick={() => setFaqOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`tax-faq-q-${i}`}
                  aria-controls={`tax-faq-a-${i}`}
                >
                  <span
                    className={`min-w-0 flex-1 text-[15px] font-semibold leading-[1.45] tracking-[-0.015em] sm:text-base sm:leading-snug ${
                      isGreenStripe ? 'text-emerald-950' : 'font-medium text-[#0f3d2e]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-emerald-700 bg-emerald-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                        : isGreenStripe
                          ? 'border-emerald-900/20 bg-white/90 text-emerald-950 shadow-[0_2px_8px_rgba(4,47,46,0.12)]'
                          : 'border-emerald-200/95 bg-white text-emerald-800 shadow-sm'
                    }`}
                    aria-hidden
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-95"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`tax-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`tax-faq-q-${i}`}
                  hidden={!isOpen}
                  className={
                    isOpen
                      ? isGreenStripe
                        ? 'border-t border-emerald-900/12 bg-[linear-gradient(180deg,rgba(236,253,245,0.97)_0%,rgba(167,243,208,0.55)_38%,#ffffff_100%)]'
                        : 'border-t border-emerald-100/90 bg-gradient-to-b from-emerald-50/[0.65] to-white'
                      : undefined
                  }
                >
                  {isOpen ? (
                    <div className="space-y-3.5 px-5 pb-6 pt-5 text-[15px] leading-[1.68] text-[#2c4338] sm:px-7 sm:text-[0.9375rem] [&_a]:font-medium [&_a]:text-emerald-800 [&_li]:marker:text-emerald-600/80 [&_ol]:text-[#2c4338] [&_ol]:marker:font-medium [&_p]:text-[#2c4338] [&_strong]:font-semibold [&_strong]:text-[#0f3d2e]">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
