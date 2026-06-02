import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import {
  STORAGE_EXTRA_SERVICE_IMAGES,
  STORAGE_HERO_FAN,
  STORAGE_OFFER_IMAGES,
} from '../data/storagePageImages'
import StorageParallaxCards from './StorageParallaxCards'
import StorageSpotlightGallery from './StorageSpotlightGallery'
import StorageUsefulTipsSection from './StorageUsefulTipsSection'

const STORAGE_PLANS: { title: string; price: number }[] = [
  { title: '10 ft Container', price: 60 },
  { title: '20 ft Container', price: 100 },
  { title: '20 ft Insulated warehouse', price: 100 },
  { title: '30 ft Insulated warehouse', price: 135 },
  { title: '40 ft Container', price: 190 },
]

const STORAGE_OFFER_CARDS = [
  {
    title: 'Personal Storage Units',
    desc: 'Flexible storage space for boxes, furniture, and personal belongings with simple monthly options.',
    image: STORAGE_OFFER_IMAGES.personal,
  },
  {
    title: 'Business Storage Units',
    desc: 'Secure business storage for operational materials, equipment, and seasonal stock overflow.',
    image: STORAGE_OFFER_IMAGES.business,
  },
  {
    title: 'Pallet Storage Space',
    desc: 'Practical pallet-ready storage designed for organized access and efficient logistics handling.',
    image: STORAGE_OFFER_IMAGES.pallet,
  },
] as const

const STORAGE_SIZE_OPTIONS = [
  'BKS1 (1.19 sq.m) - W:0.95m x D:1.25m x H:2.50m',
  'BKS2 (2.30 sq.m) - W:1.45m x D:1.60m x H:2.50m',
  'BKS3 (4.10 sq.m) - W:2.05m x D:2.00m x H:2.50m',
] as const

const STORAGE_HERO_PILLS = [
  '24-hour access',
  'Secure monitored yard',
  'Personal & business units',
] as const

export default function StoragePremiumSection() {
  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading" id="storage-parallax">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <header className="storage-premium-header storage-premium-header--full">
        <section className="storage-premium-hero-shell relative w-full overflow-hidden bg-transparent py-2 sm:py-4">
          <div className="storage-premium-hero-frame relative z-10 w-full">
              <div className="storage-premium-hero-copy mb-12 flex flex-col items-center text-center sm:mb-20 lg:mb-24">
                <motion.p
                  className="storage-premium-hero-eyebrow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  <span className="storage-premium-hero-eyebrow__line" aria-hidden />
                  <span>Storage2Rent · Komodromos Group</span>
                  <span className="storage-premium-hero-eyebrow__line" aria-hidden />
                </motion.p>

                <motion.h1
                  id="storage-premium-heading"
                  className="storage-premium-hero-heading"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12 }}
                >
                  <span className="storage-premium-hero-heading__main">Secure storage.</span>
                  <span className="storage-premium-hero-heading__accent">Ready when you are.</span>
                </motion.h1>

                <motion.p
                  className="storage-premium-hero-lead"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.22 }}
                >
                  Premium self-storage and container space in Cyprus — clean units, professional
                  on-site standards, and flexible terms for homes, businesses, and logistics.
                </motion.p>

                <motion.ul
                  className="storage-premium-hero-pills"
                  aria-label="Storage2Rent highlights"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {STORAGE_HERO_PILLS.map((pill) => (
                    <li key={pill} className="storage-premium-hero-pill">
                      {pill}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  className="storage-premium-hero-cta-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38 }}
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

                <div className="storage-premium-hero-fan relative mx-auto flex w-full flex-row items-end justify-center">
                  {STORAGE_HERO_FAN.map((card, index) => (
                    <motion.div
                      key={card.src}
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

      <div className="container">
        <section className="mx-auto mt-8 w-full max-w-6xl" id="storage-offers">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Storage Solutions for Every Need
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Choose from personal, business, and pallet storage options designed for security, flexibility, and easy access.
            </p>
          </div>

          <div className="storage-calculator">
            <div className="storage-calculator__copy">
              <p className="storage-calculator__eyebrow">Estimate your cost</p>
              <h3 className="storage-calculator__title">Calculate the cost by your needs</h3>
              <p className="storage-calculator__lead">
                Select your preferred storage setup and continue to request a tailored quote from our team.
              </p>
            </div>

            <form className="storage-calculator__form storage-form" aria-label="Storage quote estimator">
              <label className="storage-form__field">
                <span className="storage-form__label">Unit of measure</span>
                <select className="storage-form__control" name="unit" defaultValue="sq-meters">
                  <option value="sq-meters">Sq. meters</option>
                  <option value="sq-feet">Sq. feet</option>
                </select>
              </label>

              <label className="storage-form__field">
                <span className="storage-form__label">Step 1 — Select size</span>
                <select className="storage-form__control" name="size" defaultValue={STORAGE_SIZE_OPTIONS[0]}>
                  {STORAGE_SIZE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <div className="storage-form__row storage-form__row--split">
                <label className="storage-form__field">
                  <span className="storage-form__label">Step 2 — Duration</span>
                  <select className="storage-form__control" name="duration" defaultValue="3-months">
                    <option value="3-months">Up to 3 months</option>
                    <option value="6-months">Up to 6 months</option>
                    <option value="12-months">Up to 12 months</option>
                  </select>
                </label>

                <label className="storage-form__field">
                  <span className="storage-form__label">Step 3 — Start date</span>
                  <select className="storage-form__control" name="start" defaultValue="6-months">
                    <option value="6-months">Within the next 6 months</option>
                    <option value="3-months">Within the next 3 months</option>
                    <option value="1-month">Within the next month</option>
                    <option value="immediate">Immediate</option>
                  </select>
                </label>
              </div>

              <Link
                to="/contact"
                state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                className="storage-form__submit"
              >
                Get a quote
                <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
              </Link>
            </form>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="mb-8 overflow-hidden rounded-3xl border border-[rgba(146,195,231,0.3)] bg-[linear-gradient(145deg,rgba(11,28,49,0.72)_0%,rgba(7,20,35,0.84)_58%,rgba(6,16,28,0.9)_100%)] p-5 shadow-[0_24px_56px_-34px_rgba(0,0,0,0.64)] backdrop-blur-lg sm:p-6 lg:mb-10 lg:p-8"
          >
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8ed0ff]">
                  Extra Services
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_20px_rgba(15,39,68,0.5)] sm:text-3xl">
                  Do you need more?
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
                  Whether you need home, business, or long-term support, we provide complementary services for flexible storage operations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STORAGE_EXTRA_SERVICE_IMAGES.map((service, idx) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="rounded-2xl border border-[rgba(157,216,255,0.22)] bg-[rgba(7,18,32,0.54)] p-3 text-center transition-colors duration-300 hover:border-[rgba(157,216,255,0.52)] hover:bg-[rgba(10,27,46,0.74)]"
                  >
                    <div className="mx-auto h-20 w-20 overflow-hidden rounded-full border-2 border-[#9dd8ff] p-1 shadow-[0_16px_26px_-16px_rgba(0,0,0,0.72)] sm:h-24 sm:w-24">
                      <img src={service.image} alt={service.title} className="h-full w-full rounded-full object-cover" loading="lazy" />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-[#d7ecff] sm:text-sm">{service.title}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {STORAGE_OFFER_CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[rgba(15,39,68,0.1)] bg-transparent p-4 shadow-[0_14px_36px_-16px_rgba(15,39,68,0.36)] ring-1 ring-[rgba(255,255,255,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(74,142,184,0.45)] hover:shadow-[0_24px_54px_-18px_rgba(15,39,68,0.5)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="pointer-events-none absolute inset-x-5 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent opacity-75"
                  aria-hidden
                />
                <div className="overflow-hidden rounded-xl ring-1 ring-[rgba(15,39,68,0.08)]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="aspect-[4/3] w-full min-h-[200px] object-cover object-center sm:min-h-[220px] lg:min-h-[240px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-3 text-lg font-extrabold tracking-tight text-white drop-shadow-[0_2px_10px_rgba(15,39,68,0.45)] sm:text-xl">
                  {card.title}
                </h3>
                <p className="mt-2 min-h-[4.25rem] text-sm leading-relaxed text-slate-500">{card.desc}</p>
                <Link
                  to="/contact"
                  state={{ serviceInterest: `Storage2Rent - ${card.title}` }}
                  className="group mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[rgba(15,39,68,0.14)] bg-[#f8fbff] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#0f2744] transition hover:border-[#4a8eb8] hover:bg-[#dff1ff] hover:text-[#114e77] active:border-[#2d79aa] active:bg-[#cce9ff] active:text-[#0a3b5f]"
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

        <div className="storage-features-wrap" id="storage-features">
          <h3 className="storage-features-heading">The Storage2Rent standard</h3>
        </div>
        <div className="storage-parallax-bleed">
          <StorageParallaxCards />
        </div>

        <h3 className="storage-pricing-heading" id="storage-rates">
          Monthly rates
        </h3>
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
      </div>

      <div className="storage-tips-bleed">
        <StorageUsefulTipsSection />
      </div>

      <div className="storage-spotlight-bleed">
        <StorageSpotlightGallery />
      </div>

      <div className="container">
        <section id="storage-contact" className="mx-auto mt-10 w-full max-w-3xl px-1 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className="storage-contact-panel"
          >
            <div className="storage-contact-panel__accent" aria-hidden />
            <div className="storage-contact-panel__icon" aria-hidden>
              <Sparkles className="h-6 w-6" strokeWidth={1.8} />
            </div>

            <h3 className="storage-contact-panel__title">Still wondering about something?</h3>
            <p className="storage-contact-panel__lead">
              Send us your storage request and a real person from our team will contact you within one
              business day.
            </p>

            <form className="storage-contact-panel__form storage-form" aria-label="Storage inquiry">
              <label className="storage-form__field">
                <span className="storage-form__label">Full name</span>
                <input
                  type="text"
                  name="fullName"
                  className="storage-form__control"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>
              <label className="storage-form__field">
                <span className="storage-form__label">Phone</span>
                <input
                  type="tel"
                  name="phone"
                  className="storage-form__control"
                  placeholder="+357 …"
                  autoComplete="tel"
                />
              </label>
              <label className="storage-form__field storage-form__field--full">
                <span className="storage-form__label">Email</span>
                <input
                  type="email"
                  name="email"
                  className="storage-form__control"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </label>
              <label className="storage-form__field storage-form__field--full">
                <span className="storage-form__label">Storage requirements</span>
                <textarea
                  name="message"
                  className="storage-form__control"
                  placeholder="Unit size, duration, containers vs. warehouse space…"
                  rows={4}
                />
              </label>
              <Link
                to="/contact"
                state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                className="storage-form__submit storage-form__submit--secondary storage-form__field--full"
              >
                Continue to full contact form
                <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
              </Link>
            </form>
          </motion.div>
        </section>

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
