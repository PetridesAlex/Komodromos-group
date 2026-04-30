import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

const BENEFITS = [
  {
    title: 'Private and encrypted handling',
    description:
      'Your filings and records are processed through secure workflows with strict confidentiality standards.',
  },
  {
    title: 'Compliance-led process',
    description:
      'We follow structured procedures aligned with Cyprus tax requirements to keep your submissions accurate.',
  },
  {
    title: 'Simple and time-saving flow',
    description:
      'Clear, guided steps remove complexity so you can complete filing with less stress and fewer delays.',
  },
  {
    title: 'Experienced tax specialists',
    description:
      'Our team supports personal and business cases with practical advice shaped by real filing experience.',
  },
  {
    title: 'Smarter tax outcomes',
    description:
      'We review key details carefully to help surface eligible reductions and avoid common missed opportunities.',
  },
] as const

export default function TaxPremiumBenefits() {
  return (
    <section className="bg-[linear-gradient(180deg,#f8faff_0%,#f1f5fc_100%)] py-14 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-[#dde5f2] bg-white p-6 shadow-[0_30px_65px_-45px_rgba(15,23,42,0.55)] sm:p-8 lg:p-10">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#1a2338] sm:text-4xl">
            Take tax pressure off your plate
          </h2>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="mx-auto w-full max-w-[360px] text-center">
              <div className="mx-auto overflow-hidden rounded-full border border-[#dbe4f3] bg-[#eff4fd] shadow-[0_18px_36px_-24px_rgba(30,63,125,0.45)]">
                <div className="aspect-square w-full">
                  <img
                    src="/images/services/companie-services-cover/tax.webp"
                    alt="Tax expert support"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <p className="mt-5 text-2xl font-semibold text-[#202b42]">Dedicated filing guidance</p>
              <p className="mt-1 text-base text-[#63708a]">Full-service support from start to submission</p>
            </div>

            <div>
              <ul className="space-y-4">
                {BENEFITS.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-[#dbe4f2] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#2d7bc9]" />
                      <div>
                        <p className="text-xl font-semibold leading-tight text-[#1f2a42]">{item.title}</p>
                        <p className="mt-1 text-base leading-relaxed text-[#4f5d78]">{item.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-[#355ca8] px-7 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#2e508f]"
                >
                  Start for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
