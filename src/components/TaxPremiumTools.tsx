import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
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
  ctaTo: string
  Icon: typeof Calculator
}

const TAX_TOOLS: ToolCard[] = [
  {
    title: 'Income Tax Calculator',
    subtitle: 'Employed in Cyprus?',
    description: "Estimate your annual tax burden with a clear, practical breakdown.",
    ctaLabel: 'Open calculator',
    ctaTo: '/contact',
    Icon: Calculator,
  },
  {
    title: 'Domicile Status Check',
    subtitle: "Cyprus non-dom test",
    description: 'Understand your domicile profile and the implications for taxation.',
    ctaLabel: 'Start check',
    ctaTo: '/contact',
    Icon: Globe2,
  },
  {
    title: 'Transfer Fee Estimator',
    subtitle: 'Buying property?',
    description: 'Project likely transfer fees before completion and avoid surprises.',
    ctaLabel: 'Estimate fees',
    ctaTo: '/services/tax/transfer-fees-calculator',
    Icon: Mail,
  },
  {
    title: 'Capital Gains Calculator',
    subtitle: 'Selling property in Cyprus?',
    description: 'Calculate a quick capital gains estimate based on your scenario.',
    ctaLabel: 'Calculate gains',
    ctaTo: '/contact',
    Icon: Landmark,
  },
  {
    title: '20% Exemption Guide',
    subtitle: 'First employment in Cyprus',
    description: 'Check if your case may qualify for the 20% tax exemption framework.',
    ctaLabel: 'View eligibility',
    ctaTo: '/contact',
    Icon: HandCoins,
  },
  {
    title: '50% Exemption Guide',
    subtitle: 'High income employment',
    description: 'Review key criteria for the 50% exemption and plan with confidence.',
    ctaLabel: 'Review criteria',
    ctaTo: '/contact',
    Icon: PiggyBank,
  },
  {
    title: 'Form TD59 Assistant',
    subtitle: 'Short practical guide',
    description: 'Follow a guided checklist for where and how to complete each field.',
    ctaLabel: 'Open guide',
    ctaTo: '/contact',
    Icon: ReceiptText,
  },
] as const

export default function TaxPremiumTools() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4ff_0%,#e8f0fd_100%)] py-14 sm:py-16">
      <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#c6dafd66] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#dbe7ff66] blur-3xl" />
      <div className="container">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5c6d8c]">Free toolkit</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#1b2742] sm:text-5xl">
            Use our free tax tools
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#556482] sm:text-lg">
            Fast checks, calculators, and practical guides to help you make confident tax decisions.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {TAX_TOOLS.map((tool, i) => (
            <motion.article
              key={tool.title}
              className="tax-tool-card group rounded-2xl border border-[#d4dfef] bg-white p-5 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)] transition hover:border-[#7f9dcb] hover:shadow-[0_30px_56px_-30px_rgba(20,46,91,0.45)]"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.06 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
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
                to={tool.ctaTo}
                state={{ serviceInterest: `Tax tool: ${tool.title}` }}
                className="tax-tool-cta mt-5 inline-flex h-10 items-center justify-center rounded-md px-4 text-xs font-semibold uppercase tracking-wide"
              >
                {tool.ctaLabel}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
