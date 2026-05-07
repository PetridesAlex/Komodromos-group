import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  Calculator,
  FileBadge2,
  FileCheck2,
  FileSearch2,
  HandCoins,
  PiggyBank,
  ReceiptEuro,
  ReceiptText,
  ShieldCheck,
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
    title: 'Tax Identification Codes (TIC)',
    subtitle: 'Tax Department registration',
    description: 'Assistance in registering with the Tax Department and obtaining TIC.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: FileBadge2,
  },
  {
    title: 'Tax Residency Certificates',
    subtitle: 'Status confirmation support',
    description:
      'Confirm your Tax Residency Status for a specific year by requesting a Tax Residency Certificate from the Tax Department.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: ShieldCheck,
  },
  {
    title: 'Tax Clearances',
    subtitle: 'Certificate issuance',
    description: 'Obtain a Tax Clearance Certificate confirming that all tax liabilities are settled.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: FileCheck2,
  },
  {
    title: 'Tax Examinations / Tax Objections',
    subtitle: 'Case handling assistance',
    description: 'Assistance with Tax Examinations and filing of Tax Objections.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: FileSearch2,
  },
  {
    title: 'Tax Payments Assistance',
    subtitle: 'Income Tax, GESY and SDC',
    description: 'Assistance with payments of Income Tax, GESY and SDC.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: HandCoins,
  },
  {
    title: 'Tax Exemptions Eligibility (20% / 50%)',
    subtitle: 'Employment exemption support',
    description: 'Assistance with tax exemption eligibility assessment.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: PiggyBank,
  },
  {
    title: 'Form T.D.59 Assistance',
    subtitle: 'Declaration support',
    description:
      'Assistance with completing or reviewing Form T.D.59 (Declaration for Claiming Tax Deductions).',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: ReceiptText,
  },
  {
    title: 'Payroll for Companies',
    subtitle: 'Company payroll workflows',
    description: 'Smart payroll solutions for your company.',
    ctaLabel: 'Read more',
    ctaTo: '/contact',
    Icon: ReceiptEuro,
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
