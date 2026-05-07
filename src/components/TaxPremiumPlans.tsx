import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

type TaxPlan = {
  title: string
  description: string
  price: number
  ctaLabel: string
  ctaTo: string
  featured?: boolean
}

const TAX_PLANS: TaxPlan[] = [
  {
    title: 'File Yourself',
    description:
      "Just answer simple questions, and we'll guide you through filing your taxes with a final expert review before you file.",
    price: 35,
    ctaLabel: 'Start for free',
    ctaTo: '/contact',
  },
  {
    title: 'File with a Tax Pro',
    description: 'Have a dedicated tax expert handle everything, from start to finish.',
    price: 75,
    ctaLabel: 'Get in touch',
    ctaTo: '/contact',
    featured: true,
  },
  {
    title: 'Self-Employed',
    description: 'A dedicated tax expert helps you file your taxes and keep your records organized.',
    price: 100,
    ctaLabel: 'Get in touch',
    ctaTo: '/contact',
  },
]

export default function TaxPremiumPlans() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] py-12 sm:py-14">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#bfd4f766] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-[#d8e4ff66] blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-8 max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.52 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#58667d]">Tax packages</p>
          <h2 className="mt-3 bg-gradient-to-b from-[#141b2d] to-[#364968] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
            Choose your filing approach
          </h2>
        </motion.div>
        <div className="grid gap-5 lg:grid-cols-3">
          {TAX_PLANS.map((plan, i) => (
            <motion.article
              key={plan.title}
              className={`group relative overflow-hidden rounded-[26px] border bg-white p-6 shadow-[0_26px_54px_-40px_rgba(20,30,55,0.45)] transition sm:p-7 ${
                plan.featured
                  ? 'border-[#84a6de] ring-1 ring-[#cfe0fb] bg-[linear-gradient(165deg,#ffffff_0%,#f3f8ff_100%)]'
                  : 'border-[#d8dfec]'
              }`}
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -7, scale: 1.01 }}
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#dce8fb66] to-transparent" />
              {plan.featured ? (
                <span className="absolute right-4 top-4 rounded-full border border-[#b8cdf0] bg-[#edf4ff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3f6299]">
                  Most Popular
                </span>
              ) : null}
              <motion.span
                aria-hidden
                className="mb-4 block h-1.5 w-20 rounded-full bg-[linear-gradient(90deg,#6f97dc_0%,#bfd2f2_100%)]"
                initial={reduceMotion ? false : { width: 0, opacity: 0 }}
                whileInView={{ width: '4rem', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08 + i * 0.08 }}
              />
              <h3 className="relative z-10 font-['Playfair_Display','Cormorant_Garamond',serif] text-[2rem] font-semibold leading-none tracking-tight text-[#18233b]">
                {plan.title}
              </h3>
              <p className="relative z-10 mt-5 min-h-[84px] text-sm leading-relaxed text-[#4e5c76] sm:text-[15px]">
                {plan.description}
              </p>

              <p className="relative z-10 mt-5 text-sm font-medium uppercase tracking-[0.13em] text-[#62708c]">
                Starting from:
              </p>
              <div className="relative z-10 mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold leading-none text-[#121c31]">
                  €{plan.price}
                </span>
                <span className="text-base text-[#6c7690]">(including 19% VAT)</span>
              </div>

              <Link
                to={plan.ctaTo}
                state={{ serviceInterest: 'Tax & Accounting Services' }}
                className={`tax-plan-cta relative z-10 mt-7 inline-flex h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold uppercase tracking-wide text-white ${
                  plan.featured ? 'tax-plan-cta--featured' : ''
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
