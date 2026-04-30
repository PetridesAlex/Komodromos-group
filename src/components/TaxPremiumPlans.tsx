import { Link } from 'react-router-dom'

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
  return (
    <section className="bg-[linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)] py-12 sm:py-14">
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#58667d]">Tax packages</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#141b2d] sm:text-4xl">
            Choose your filing approach
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {TAX_PLANS.map((plan) => (
            <article
              key={plan.title}
              className={`group rounded-[26px] border bg-white p-6 shadow-[0_26px_54px_-40px_rgba(20,30,55,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_58px_-34px_rgba(20,30,55,0.4)] sm:p-7 ${
                plan.featured
                  ? 'border-[#8aa8d8] ring-1 ring-[#d3e0f7] bg-[linear-gradient(165deg,#ffffff_0%,#f5f9ff_100%)]'
                  : 'border-[#d8dfec]'
              }`}
            >
              <h3 className="text-[2rem] font-semibold leading-none tracking-tight text-[#18233b]">
                {plan.title}
              </h3>
              <p className="mt-5 min-h-[84px] text-sm leading-relaxed text-[#4e5c76] sm:text-[15px]">
                {plan.description}
              </p>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.13em] text-[#62708c]">
                Starting from:
              </p>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold leading-none text-[#121c31]">
                  €{plan.price}
                </span>
                <span className="text-base text-[#6c7690]">(including 19% VAT)</span>
              </div>

              <Link
                to={plan.ctaTo}
                state={{ serviceInterest: 'Tax & Accounting Services' }}
                className={`mt-7 inline-flex h-12 w-full items-center justify-center rounded-md px-5 text-sm font-semibold uppercase tracking-wide text-white transition ${
                  plan.featured
                    ? 'bg-[#4f8fff] hover:bg-[#3f7fee]'
                    : 'bg-[#53a0ff] hover:bg-[#4390ef]'
                }`}
              >
                {plan.ctaLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
