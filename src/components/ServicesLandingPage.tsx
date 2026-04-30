import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, BadgeCheck, Calculator, FileCheck2, Landmark, ShieldCheck, WalletCards } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const SERVICE_ITEMS = [
  {
    title: 'Tax Identification Codes (TIC)',
    description: 'Guided support for registration and document readiness before your filing process starts.',
    Icon: FileCheck2,
  },
  {
    title: 'Tax Residency Certificates',
    description: 'Structured preparation and submission support for annual tax residency certification.',
    Icon: Landmark,
  },
  {
    title: 'Non-Dom Certificates',
    description: 'Practical guidance for non-dom status documentation and SDC exemption positioning.',
    Icon: ShieldCheck,
  },
  {
    title: 'Tax Clearances',
    description: 'Clearance request handling to verify liabilities are settled and compliant.',
    Icon: BadgeCheck,
  },
  {
    title: 'Tax Examinations / Objections',
    description: 'Professional support through examination responses and objection filing workflows.',
    Icon: WalletCards,
  },
  {
    title: 'Tax Payments Assistance',
    description: 'Assistance with payment planning for Income Tax, GESY, and Social contributions.',
    Icon: Calculator,
  },
  {
    title: 'Tax Exemption Eligibility (20% / 50%)',
    description: 'Eligibility assessment and documentation support for Cyprus exemption frameworks.',
    Icon: ShieldCheck,
  },
  {
    title: 'Form T.D.59 Assistance',
    description: 'Completion and review support for deduction claim forms with clean submission structure.',
    Icon: FileCheck2,
  },
  {
    title: 'Payroll for Companies',
    description: 'Reliable payroll setup and monthly operational support for Cyprus-based companies.',
    Icon: WalletCards,
  },
] as const

export default function ServicesLandingPage() {
  const pageRef = useReveal()

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/services"
      />

      <section
        className="relative overflow-hidden bg-[linear-gradient(145deg,#071226_0%,#0d2140_52%,#142f53_100%)] py-20 text-white sm:py-24"
        aria-label="Services"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              'radial-gradient(circle at 18% 18%, rgba(145,196,255,0.32), transparent 40%), radial-gradient(circle at 80% 0%, rgba(141,98,240,0.22), transparent 35%)',
          }}
        />
        <div className="container relative z-10">
          <motion.p
            className="inline-flex rounded-full border border-[#9cc7ff66] bg-[#9cc7ff1f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#d3e7ff]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Premium Tax Services
          </motion.p>
          <motion.h1
            className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.08 }}
          >
            We offer advanced tax-related services
          </motion.h1>
          <motion.p
            className="mt-6 max-w-3xl text-base leading-relaxed text-[#d7e4f6] sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            From personal compliance support to corporate payroll and objection workflows, our team
            delivers an organized, expert-led experience designed for clarity, speed, and confidence.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <Link
              to="/contact"
              state={{ serviceInterest: 'Tax & Accounting Services' }}
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#2f992d] px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#2b8729]"
            >
              Request consultation
            </Link>
            <a
              href="#services-catalog"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white/16"
            >
              Browse services
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services-catalog" className="bg-[linear-gradient(180deg,#f4f8ff_0%,#edf3fd_100%)] py-14 sm:py-16">
        <div className="container">
          <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607294]">Service catalog</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#1c2840] sm:text-4xl">
                Choose the support you need
              </h2>
            </div>
            <p className="max-w-md rounded-2xl border border-[#ccd8ea] bg-[linear-gradient(160deg,#f9fbff_0%,#edf3fc_100%)] px-4 py-3 text-sm leading-relaxed text-[#4f6180] shadow-[0_14px_28px_-24px_rgba(24,54,104,0.5)] sm:text-right [font-family:'Canela','Playfair_Display','Cormorant_Garamond',Georgia,'Times_New_Roman',serif] sm:text-[15px]">
              Every service is structured for practical delivery, transparent updates, and smooth completion.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {SERVICE_ITEMS.map((item, index) => (
              <motion.article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-[#d3deef] bg-white p-6 shadow-[0_22px_40px_-35px_rgba(20,42,80,0.55)] transition hover:-translate-y-0.5 hover:border-[#9eb5d8] hover:shadow-[0_30px_52px_-32px_rgba(27,61,115,0.38)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#cbdbf4] bg-[#f1f6ff] text-[#2f5da3]">
                  <item.Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-[clamp(1.2rem,1.08rem+0.34vw,1.42rem)] font-medium leading-[1.2] tracking-[0.01em] text-[#1b2842] [font-family:'Canela','Playfair_Display','Cormorant_Garamond',Georgia,'Times_New_Roman',serif]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#566684]">{item.description}</p>
                <Link
                  to="/contact"
                  state={{ serviceInterest: item.title }}
                  className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2f5ea6] transition hover:text-[#1f4682]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
