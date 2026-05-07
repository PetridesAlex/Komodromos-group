import { useState } from 'react'
import { TAX_NEX_FAQ_HEADING, TAX_NEX_FAQ_ITEMS, TAX_NEX_FAQ_SECTION_ID } from '../data/taxNexFaqData'

type Props = {
  /** Extra classes on the root section (e.g. home page spacing). */
  className?: string
}

export default function TaxNexFaqSection({ className = '' }: Props) {
  const [faqOpen, setFaqOpen] = useState<number | null>(0)

  return (
    <section
      lang="el"
      id={TAX_NEX_FAQ_SECTION_ID}
      className={`scroll-mt-28 ${className}`.trim()}
      aria-labelledby="tax-faq-title"
    >
      <div className="mb-10 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5b7a6e] sm:text-xs">
          {TAX_NEX_FAQ_HEADING.eyebrow}
        </p>
        <h2
          id="tax-faq-title"
          className="mt-3 font-['Playfair_Display','Cormorant_Garamond',serif] text-[1.65rem] font-semibold tracking-tight text-[#064e3b] sm:text-[2rem]"
        >
          {TAX_NEX_FAQ_HEADING.title}
        </h2>
        <div
          className="mx-auto mt-5 h-px max-w-[12rem] bg-gradient-to-r from-transparent via-emerald-600/45 to-transparent"
          aria-hidden
        />
      </div>

      <div className="rounded-[1.35rem] border border-emerald-200/70 bg-gradient-to-b from-white via-white to-emerald-50/[0.55] p-2 sm:p-3 shadow-[0_36px_80px_-52px_rgba(6,78,59,0.38),inset_0_1px_0_0_rgba(255,255,255,0.9)]">
        <div className="flex flex-col gap-2 sm:gap-2.5">
          {TAX_NEX_FAQ_ITEMS.map((item, i) => {
            const isOpen = faqOpen === i
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-xl transition-[box-shadow,transform] duration-300 ${
                  isOpen
                    ? 'shadow-[0_18px_40px_-28px_rgba(6,95,70,0.35)] ring-1 ring-emerald-700/15'
                    : 'shadow-[0_8px_24px_-20px_rgba(15,59,47,0.12)] ring-1 ring-emerald-950/[0.06] hover:ring-emerald-800/10'
                }`}
              >
                <button
                  type="button"
                  className="group flex w-full items-start justify-between gap-5 bg-white/95 px-5 py-[1.05rem] text-left transition-colors hover:bg-emerald-50/[0.65] sm:px-6 sm:py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/35 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  onClick={() => setFaqOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  id={`tax-faq-q-${i}`}
                  aria-controls={`tax-faq-a-${i}`}
                >
                  <span className="min-w-0 flex-1 text-[15px] font-medium leading-[1.45] tracking-[-0.015em] text-[#0f3d2e] sm:text-base sm:leading-snug">
                    {item.question}
                  </span>
                  <span
                    className={`mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 border-emerald-700 bg-emerald-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]'
                        : 'border-emerald-200/95 bg-white text-emerald-800 shadow-sm group-hover:border-emerald-300 group-hover:bg-emerald-50/90'
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
                      ? 'border-t border-emerald-100/90 bg-gradient-to-b from-emerald-50/[0.65] to-white'
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
