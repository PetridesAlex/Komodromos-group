import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const WORKFLOW_STEPS = [
  "Register with TaxApp - it's 100% free.",
  'Answer simple questions and we prepare your tax form.',
  'Our tax experts review your tax form for full accuracy.',
  'We submit your form to TAXISnet on your behalf.',
] as const

export default function TaxPremiumHowItWorks() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container">
        <motion.div
          className="mx-auto rounded-[30px] border border-[#e3e9f3] bg-[linear-gradient(165deg,#ffffff_0%,#f7faff_100%)] p-6 shadow-[0_32px_60px_-45px_rgba(16,24,40,0.45)] sm:p-8 lg:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.58 }}
        >
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              className="mx-auto w-full max-w-[420px]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : 0.08 }}
            >
              <div className="overflow-hidden rounded-full border border-[#d6dfec] bg-[#eef3fb] shadow-[0_20px_36px_-30px_rgba(17,33,72,0.55)]">
                <div className="aspect-square w-full">
                  <img
                    src="/images/services/tax-services/tax-hero.webp"
                    alt="Tax support team"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            <div>
              <motion.h2
                className="text-center text-3xl font-semibold tracking-tight text-[#1a2238] sm:text-4xl lg:text-left"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: reduceMotion ? 0 : 0.48 }}
              >
                How TaxApp Works
              </motion.h2>

              <ol className="mx-auto mt-7 max-w-2xl space-y-5 lg:mx-0">
                {WORKFLOW_STEPS.map((step, index) => (
                  <motion.li
                    key={step}
                    className="grid grid-cols-[auto_1fr] items-start gap-4"
                    initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : index * 0.08 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.span
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#abc0e4] bg-white text-2xl font-semibold text-[#2f5da3] shadow-[0_10px_20px_-16px_rgba(24,66,140,0.8)]"
                        initial={reduceMotion ? false : { scale: 0.86, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0 : 0.36, delay: reduceMotion ? 0 : 0.04 + index * 0.08 }}
                      >
                        {index + 1}
                      </motion.span>
                      {index < WORKFLOW_STEPS.length - 1 ? (
                        <motion.span
                          className="mt-2 h-10 w-px origin-top bg-[linear-gradient(180deg,#6f95d5_0%,#c7d7f0_100%)]"
                          initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
                          whileInView={{ scaleY: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.12 + index * 0.1 }}
                        />
                      ) : null}
                    </div>
                    <p className="pt-2 text-lg leading-relaxed text-[#2f3b55]">{step}</p>
                  </motion.li>
                ))}
              </ol>

              <motion.div
                className="mt-8 flex justify-center lg:justify-start"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.2 }}
              >
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                  className="tax-how-cta inline-flex h-12 items-center justify-center rounded-md px-7 text-sm font-semibold uppercase tracking-wide text-white"
                >
                  Start for free
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
