import { Link } from 'react-router-dom'

const WORKFLOW_STEPS = [
  "Register with TaxApp - it's 100% free.",
  'Answer simple questions and we prepare your tax form.',
  'Our tax experts review your tax form for full accuracy.',
  'We submit your form to TAXISnet on your behalf.',
] as const

export default function TaxPremiumHowItWorks() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container">
        <div className="mx-auto rounded-[30px] border border-[#e3e9f3] bg-[linear-gradient(165deg,#ffffff_0%,#f7faff_100%)] p-6 shadow-[0_32px_60px_-45px_rgba(16,24,40,0.45)] sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="mx-auto w-full max-w-[420px]">
              <div className="overflow-hidden rounded-full border border-[#d6dfec] bg-[#eef3fb] shadow-[0_20px_36px_-30px_rgba(17,33,72,0.55)]">
                <div className="aspect-square w-full">
                  <img
                    src="/images/services/tax-services/tax-hero.webp"
                    alt="Tax support team"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-center text-3xl font-semibold tracking-tight text-[#1a2238] sm:text-4xl lg:text-left">
                How TaxApp Works
              </h2>

              <ol className="mx-auto mt-7 max-w-2xl space-y-5 lg:mx-0">
                {WORKFLOW_STEPS.map((step, index) => (
                  <li key={step} className="grid grid-cols-[auto_1fr] items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#abc0e4] bg-white text-2xl font-semibold text-[#2f5da3] shadow-[0_10px_20px_-16px_rgba(24,66,140,0.8)]">
                        {index + 1}
                      </span>
                      {index < WORKFLOW_STEPS.length - 1 ? (
                        <span className="mt-2 h-10 w-px bg-[linear-gradient(180deg,#7ba0d9_0%,#c7d7f0_100%)]" />
                      ) : null}
                    </div>
                    <p className="pt-2 text-lg leading-relaxed text-[#2f3b55]">{step}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 flex justify-center lg:justify-start">
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
