import { Link } from 'react-router-dom'
import {
  Calculator,
  Globe2,
  HandCoins,
  Landmark,
  Mail,
  PiggyBank,
  ReceiptText,
} from 'lucide-react'

type ToolCard = {
  title: string
  subtitle: string
  description: string
  ctaLabel: string
  Icon: typeof Calculator
}

const TAX_TOOLS: ToolCard[] = [
  {
    title: 'Income Tax Calculator',
    subtitle: 'Employed in Cyprus?',
    description: "Estimate your annual tax burden with a clear, practical breakdown.",
    ctaLabel: 'Open calculator',
    Icon: Calculator,
  },
  {
    title: 'Domicile Status Check',
    subtitle: "Cyprus non-dom test",
    description: 'Understand your domicile profile and the implications for taxation.',
    ctaLabel: 'Start check',
    Icon: Globe2,
  },
  {
    title: 'Transfer Fee Estimator',
    subtitle: 'Buying property?',
    description: 'Project likely transfer fees before completion and avoid surprises.',
    ctaLabel: 'Estimate fees',
    Icon: Mail,
  },
  {
    title: 'Capital Gains Calculator',
    subtitle: 'Selling property in Cyprus?',
    description: 'Calculate a quick capital gains estimate based on your scenario.',
    ctaLabel: 'Calculate gains',
    Icon: Landmark,
  },
  {
    title: '20% Exemption Guide',
    subtitle: 'First employment in Cyprus',
    description: 'Check if your case may qualify for the 20% tax exemption framework.',
    ctaLabel: 'View eligibility',
    Icon: HandCoins,
  },
  {
    title: '50% Exemption Guide',
    subtitle: 'High income employment',
    description: 'Review key criteria for the 50% exemption and plan with confidence.',
    ctaLabel: 'Review criteria',
    Icon: PiggyBank,
  },
  {
    title: 'Form TD59 Assistant',
    subtitle: 'Short practical guide',
    description: 'Follow a guided checklist for where and how to complete each field.',
    ctaLabel: 'Open guide',
    Icon: ReceiptText,
  },
] as const

export default function TaxPremiumTools() {
  return (
    <section className="bg-[linear-gradient(180deg,#eef4ff_0%,#e8f0fd_100%)] py-14 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c6d8c]">Free toolkit</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1b2742] sm:text-5xl">
            Use our free tax tools
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#556482] sm:text-lg">
            Fast checks, calculators, and practical guides to help you make confident tax decisions.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TAX_TOOLS.map((tool) => (
            <article
              key={tool.title}
              className="group rounded-2xl border border-[#d4dfef] bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:border-[#9db5da] hover:shadow-[0_26px_46px_-30px_rgba(20,46,91,0.35)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#ccdaee] bg-[#f3f7ff] text-[#3460a8]">
                <tool.Icon className="h-6 w-6" strokeWidth={2.1} />
              </div>
              <h3 className="mt-4 text-[clamp(1.18rem,1.04rem+0.42vw,1.46rem)] font-medium leading-[1.18] tracking-[0.01em] text-[#1a2742] [font-family:'Canela','Playfair_Display','Cormorant_Garamond',Georgia,'Times_New_Roman',serif] transition-colors duration-300 group-hover:text-[#263f6a]">
                {tool.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#3f5f93]">{tool.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#5a6886]">{tool.description}</p>

              <Link
                to="/contact"
                state={{ serviceInterest: `Tax tool: ${tool.title}` }}
                className="mt-5 inline-flex h-10 items-center justify-center rounded-md border border-[#9eb5d8] bg-[#edf4ff] px-4 text-xs font-semibold uppercase tracking-wide text-[#2f5ca3] transition group-hover:bg-[#dfeafe]"
              >
                {tool.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
