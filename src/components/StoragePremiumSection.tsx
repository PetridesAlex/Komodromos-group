import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import StorageParallaxCards from './StorageParallaxCards'

const STORAGE_PLANS: { title: string; price: number }[] = [
  { title: '10 ft Container', price: 60 },
  { title: '20 ft Container', price: 100 },
  { title: '20 ft Insulated warehouse', price: 100 },
  { title: '30 ft Insulated warehouse', price: 135 },
  { title: '40 ft Container', price: 190 },
]

const HERO_CARDS = [
  {
    rotate: -12,
    translateY: 40,
    src: '/images/services/storage/hero-storage-two.webp',
    alt: 'Storage facility and access',
  },
  {
    rotate: 0,
    translateY: 0,
    src: '/images/services/storage/hero-storage.webp',
    alt: 'Flexible storage unit',
  },
  {
    rotate: 12,
    translateY: 40,
    src: '/images/services/storage/hero-storage-one.webp',
    alt: 'Professional storage workspace',
  },
] as const

const STORAGE_OFFER_CARDS = [
  {
    title: 'Personal Storage Units',
    desc: 'Flexible storage space for boxes, furniture, and personal belongings with simple monthly options.',
    image: '/images/services/storage/hero-storage-two.webp',
  },
  {
    title: 'Business Storage Units',
    desc: 'Secure business storage for operational materials, equipment, and seasonal stock overflow.',
    image: '/images/services/storage/hero-storage.webp',
  },
  {
    title: 'Pallet Storage Space',
    desc: 'Practical pallet-ready storage designed for organized access and efficient logistics handling.',
    image: '/images/services/storage/hero-storage-one.webp',
  },
] as const

export default function StoragePremiumSection() {
  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading" id="storage-parallax">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <div className="container">
        <header className="storage-premium-header">
          <section className="storage-premium-hero-shell relative w-full overflow-hidden bg-transparent py-6 sm:py-8">
            <div className="storage-premium-hero-frame relative z-10 mx-auto w-full max-w-[1400px]">
              <div className="storage-premium-hero-copy mb-12 flex flex-col items-center text-center sm:mb-20 lg:mb-24">
                <motion.h1
                  id="storage-premium-heading"
                  className="max-w-2xl text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Build something extraordinary today
                </motion.h1>

                <motion.p
                  className="max-w-xl text-base text-neutral-400 sm:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Transform your ideas into reality with powerful tools designed for
                  creators, founders, and dreamers.
                </motion.p>

                <motion.div
                  className="storage-premium-hero-cta-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/contact"
                    state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                    className="storage-premium-hero-cta group inline-flex min-w-[176px] cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-white text-sm font-medium leading-none text-neutral-900 transition-colors hover:bg-neutral-100 sm:min-w-[196px] sm:text-base"
                  >
                    <span className="storage-premium-hero-cta__text">Get started now</span>
                    <ArrowRight
                      size={12}
                      strokeWidth={2.25}
                      className="storage-premium-hero-cta__icon shrink-0"
                    />
                  </Link>
                </motion.div>
              </div>

              <div className="storage-premium-hero-fan-wrap relative">
                <div
                  className="pointer-events-none absolute left-1/2 top-[80%] z-10 aspect-square w-[250%] -translate-x-1/2 rounded-full bg-[#05070a] shadow-2xl shadow-purple-500/30 sm:top-[40%] sm:w-[200%]"
                  aria-hidden
                />

                <div className="storage-premium-hero-fan relative mx-auto flex w-full max-w-[980px] flex-row items-end justify-center -space-x-6 sm:-space-x-12 lg:-space-x-16">
                  {HERO_CARDS.map((card, index) => (
                    <motion.div
                      key={index}
                      className="storage-premium-hero-card relative origin-bottom overflow-hidden rounded-xl sm:rounded-3xl"
                      initial={{ opacity: 0, y: 80, rotate: 0 }}
                      animate={{ opacity: 1, y: card.translateY, rotate: card.rotate }}
                      whileHover={{ y: card.translateY - 12, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                      transition={{ duration: 0.7, delay: 0.4 + index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </header>

        <section className="mx-auto mt-8 w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {STORAGE_OFFER_CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[rgba(15,39,68,0.1)] bg-white p-4 shadow-[0_14px_36px_-16px_rgba(15,39,68,0.36)] ring-1 ring-[rgba(255,255,255,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(74,142,184,0.45)] hover:shadow-[0_24px_54px_-18px_rgba(15,39,68,0.5)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="pointer-events-none absolute inset-x-5 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-75"
                  aria-hidden
                />
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-32 w-full rounded-xl object-cover ring-1 ring-[rgba(15,39,68,0.08)] sm:h-36"
                  loading="lazy"
                />
                <h3 className="mt-3 text-base font-bold tracking-tight text-[#0f2744] sm:text-lg">{card.title}</h3>
                <p className="mt-2 min-h-[4.25rem] text-sm leading-relaxed text-slate-500">{card.desc}</p>
                <Link
                  to="/contact"
                  state={{ serviceInterest: `Storage2Rent - ${card.title}` }}
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[rgba(15,39,68,0.14)] bg-[#f8fbff] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#0f2744] transition hover:border-[#4a8eb8] hover:bg-[#eff7ff] hover:text-[#1e5d87]"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={13}
                    strokeWidth={2.25}
                    className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[rgba(134,185,222,0.26)] bg-[rgba(8,21,37,0.62)] px-5 py-4 sm:px-6">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              See our offers for <span className="text-[#c5a059]">business storage</span>
            </h3>
            <Link
              to="/contact"
              state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0f2744] to-[#173a61] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(15,39,68,0.55)] transition hover:from-[#133357] hover:to-[#1f4974] hover:shadow-[0_18px_36px_-16px_rgba(15,39,68,0.62)]"
            >
              <span>More Services</span>
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </section>

        <div className="storage-features-wrap">
          <h3 className="storage-features-heading">The Storage2Rent standard</h3>
        </div>
        <div className="storage-parallax-bleed">
          <StorageParallaxCards />
        </div>

        <h3 className="storage-pricing-heading">Monthly rates</h3>
        <div className="storage-pricing-grid" role="list">
          {STORAGE_PLANS.map((plan) => (
            <article key={plan.title} className="storage-price-card" role="listitem">
              <div className="storage-price-card__accent" aria-hidden />
              <h3 className="storage-price-card__title">{plan.title}</h3>
              <p className="storage-price-card__price">
                <span className="storage-price-card__amount">{plan.price}€</span>
                <span className="storage-price-card__period">per month</span>
              </p>
            </article>
          ))}
        </div>

        <p className="storage-premium-footnote">
          Availability and access terms on request.{' '}
          <Link
            to="/contact"
            state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
            className="storage-premium-contact"
          >
            Contact us
          </Link>{' '}
          to reserve capacity or arrange a viewing.
        </p>
      </div>
    </section>
  )
}
