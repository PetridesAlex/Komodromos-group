import { Link } from 'react-router-dom'
import { BadgeCheck, Building2, FileCheck2 } from 'lucide-react'

type TaxStep = {
  title: string
  ctaLabel: string
  ctaTo: string
  Icon: typeof FileCheck2
}

const TAX_STEPS: TaxStep[] = [
  {
    title: 'Step 1: Get a TIC',
    ctaLabel: 'How to get a TIC',
    ctaTo: '/services/tax/how-to-get-a-tic',
    Icon: FileCheck2,
  },
  {
    title: 'Step 2: Register at TAXISnet',
    ctaLabel: 'How to register to TAXISnet',
    ctaTo: '/services/tax/how-to-register-to-taxisnet',
    Icon: Building2,
  },
  {
    title: 'Step 3: Register at TaxApp',
    ctaLabel: 'Start for free',
    ctaTo: '/contact',
    Icon: BadgeCheck,
  },
]

export default function TaxPremiumSteps() {
  return (
    <section className="bg-[linear-gradient(145deg,#0f1b2e_0%,#12243d_58%,#1b2f4a_100%)] py-14 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            First time filing a Cyprus Tax Form?
          </p>
          <p className="mt-2 text-2xl font-medium text-[#d5e3f8] sm:text-3xl">What you need to do</p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {TAX_STEPS.map((step) => (
            <article
              key={step.title}
              className="flex h-full flex-col rounded-[24px] border border-[#324a73] bg-[linear-gradient(175deg,#1a2d4a_0%,#162844_100%)] p-6 text-center shadow-[0_24px_45px_-30px_rgba(4,9,20,0.75)] ring-1 ring-white/5 transition hover:-translate-y-0.5 hover:border-[#41659b] sm:p-7"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-[#4f6d9e] bg-[linear-gradient(165deg,#22385a_0%,#1a2d49_100%)] text-[#9ec1ff] shadow-[0_14px_24px_-18px_rgba(35,76,150,0.75)]">
                <step.Icon className="h-12 w-12" strokeWidth={1.9} />
              </div>
              <h3 className="mt-6 text-[2rem] font-semibold leading-tight tracking-tight text-white">
                {step.title}
              </h3>
              <div className="mt-auto pt-6">
                <Link
                  to={step.ctaTo}
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                  className="inline-flex h-12 items-center justify-center rounded-lg border border-[#6f8fc5] bg-[#2d4770] px-6 text-sm font-semibold uppercase tracking-wide text-[#e8f1ff] transition hover:bg-[#385785]"
                >
                  {step.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
