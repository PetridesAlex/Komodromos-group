import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
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
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8faff_0%,#f1f5fc_100%)] py-14 sm:py-16">
      <div className="pointer-events-none absolute -left-20 top-8 h-64 w-64 rounded-full bg-[#cddffb66] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-16 h-72 w-72 rounded-full bg-[#dce9ff66] blur-3xl" />
      <div className="container">
        <motion.div
          className="mx-auto max-w-6xl rounded-[30px] border border-[#d7e1f0] bg-[linear-gradient(170deg,#ffffff_0%,#f7fbff_100%)] p-6 shadow-[0_36px_72px_-46px_rgba(15,23,42,0.58)] sm:p-8 lg:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.58 }}
        >
          <motion.h2
            className="bg-gradient-to-b from-[#13233d] to-[#2d466c] bg-clip-text text-center text-3xl font-semibold tracking-tight text-transparent sm:text-4xl"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.46 }}
          >
            Take tax pressure off your plate
          </motion.h2>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <motion.div
              className="mx-auto w-full max-w-[360px] text-center"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
            >
              <div className="mx-auto overflow-hidden rounded-full border border-[#dbe4f3] bg-[#eff4fd] shadow-[0_18px_36px_-24px_rgba(30,63,125,0.45)]">
                <div className="aspect-square w-full">
                  <img
                    src="/images/services/companie-services-cover/tax.webp"
                    alt="Tax expert support"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <p className="mt-5 font-['Playfair_Display','Cormorant_Garamond',serif] text-3xl font-semibold text-[#202b42]">
                Dedicated filing guidance
              </p>
              <p className="mt-1 text-base text-[#63708a]">Full-service support from start to submission</p>
            </motion.div>

            <div>
              <ul className="space-y-4">
                {BENEFITS.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="rounded-2xl border border-[#d6e2f2] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-4 shadow-[0_14px_30px_-24px_rgba(20,45,89,0.35)]"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : i * 0.06 }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="tax-benefit-check mt-0.5 h-6 w-6 shrink-0 text-[#2d7bc9]" />
                      <div>
                        <p className="text-xl font-semibold leading-tight text-[#1f2a42]">{item.title}</p>
                        <p className="mt-1 text-base leading-relaxed text-[#4f5d78]">{item.description}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-7"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : 0.18 }}
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
