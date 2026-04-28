import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
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

const STORAGE_SIZE_OPTIONS = [
  'BKS1 (1.19 sq.m) - W:0.95m x D:1.25m x H:2.50m',
  'BKS2 (2.30 sq.m) - W:1.45m x D:1.60m x H:2.50m',
  'BKS3 (4.10 sq.m) - W:2.05m x D:2.00m x H:2.50m',
] as const

const STORAGE_EXTRA_SERVICES = [
  { title: 'Removal Storage', image: '/images/services/storage/hero-storage-two.webp' },
  { title: 'Man with Van for Hire', image: '/images/services/storage/hero-storage.webp' },
  { title: 'Pallet Storage', image: '/images/services/storage/hero-storage-one.webp' },
  { title: 'Documents Storage', image: '/images/services/storage/hero-storage-two.webp' },
] as const

export default function StoragePremiumSection() {
  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading" id="storage-parallax">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <div className="container">
        <header className="storage-premium-header">
          <section className="storage-premium-hero-shell relative w-full overflow-hidden bg-transparent py-2 sm:py-4">
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

        <section className="mx-auto mt-8 w-full max-w-6xl" id="storage-offers">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Storage Solutions for Every Need
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Choose from personal, business, and pallet storage options designed for security, flexibility, and easy access.
            </p>
          </div>

          <div className="mb-8 grid items-center gap-6 overflow-hidden rounded-3xl border border-[rgba(134,185,222,0.3)] bg-[linear-gradient(145deg,rgba(13,31,56,0.92)_0%,rgba(9,24,44,0.96)_52%,rgba(8,19,34,0.98)_100%)] p-5 shadow-[0_24px_48px_-28px_rgba(0,0,0,0.48)] sm:p-7 lg:mb-10 lg:grid-cols-2 lg:p-9">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9dd8ff]">Estimate your cost</p>
              <h3 className="mt-3 max-w-md text-3xl font-extrabold leading-[1.05] text-white sm:text-5xl">
                Calculate the cost by your needs
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                Select your preferred storage setup and continue to request a tailored quote from our team.
              </p>
            </div>

            <form className="space-y-3 rounded-2xl border border-[rgba(12,28,49,0.25)] bg-[rgba(255,255,255,0.2)] p-4 backdrop-blur-sm sm:p-5">
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#cfe9ff]">Sq. meters</span>
                <select className="h-11 w-full rounded-xl border border-[rgba(6,19,35,0.45)] bg-white px-3 text-sm text-[#1a2a3e] outline-none transition focus:border-[#2c7cb0]">
                  <option>Sq. Meters</option>
                  <option>Sq. Feet</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#cfe9ff]">Step 1: Select size</span>
                <select className="h-11 w-full rounded-xl border border-[rgba(6,19,35,0.45)] bg-white px-3 text-sm text-[#1a2a3e] outline-none transition focus:border-[#2c7cb0]">
                  {STORAGE_SIZE_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#cfe9ff]">Step 2: Duration</span>
                  <select className="h-11 w-full rounded-xl border border-[rgba(6,19,35,0.45)] bg-white px-3 text-sm text-[#1a2a3e] outline-none transition focus:border-[#2c7cb0]">
                    <option>Up to 3 months</option>
                    <option>Up to 6 months</option>
                    <option>Up to 12 months</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#cfe9ff]">Step 3: Start date</span>
                  <select className="h-11 w-full rounded-xl border border-[rgba(6,19,35,0.45)] bg-white px-3 text-sm text-[#1a2a3e] outline-none transition focus:border-[#2c7cb0]">
                    <option>Within the next 6 months</option>
                    <option>Within the next 3 months</option>
                    <option>Within the next month</option>
                    <option>Immediate</option>
                  </select>
                </label>
              </div>

              <Link
                to="/contact"
                state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#081524] text-sm font-semibold text-white transition hover:bg-[#102b44]"
              >
                Get a quote...
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
                {STORAGE_EXTRA_SERVICES.map((service, idx) => (
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
                className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-[rgba(15,39,68,0.1)] bg-transparent p-4 shadow-[0_14px_36px_-16px_rgba(15,39,68,0.36)] ring-1 ring-[rgba(255,255,255,0.9)] transition duration-300 hover:-translate-y-1 hover:border-[rgba(74,142,184,0.45)] hover:shadow-[0_24px_54px_-18px_rgba(15,39,68,0.5)]"
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

        <section id="storage-contact" className="mx-auto mt-10 w-full max-w-3xl px-1 sm:mt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className="relative overflow-hidden rounded-3xl border border-[rgba(148,184,220,0.34)] bg-[linear-gradient(180deg,rgba(11,33,61,0.72)_0%,rgba(6,22,44,0.78)_100%)] p-8 text-center shadow-[0_24px_60px_-34px_rgba(0,0,0,0.7)] backdrop-blur-xl transition duration-300 hover:border-[rgba(166,208,247,0.62)] hover:bg-[linear-gradient(180deg,rgba(13,38,70,0.76)_0%,rgba(8,27,52,0.82)_100%)] active:border-[rgba(188,223,255,0.78)] active:bg-[linear-gradient(180deg,rgba(15,44,78,0.8)_0%,rgba(10,31,58,0.86)_100%)] sm:p-10"
          >
            <div
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(197,160,89,0.7)] to-transparent"
              aria-hidden
            />
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(6,12,20,0.88)] shadow-[0_12px_28px_-20px_rgba(0,0,0,0.85)]">
              <Sparkles className="h-6 w-6 text-[#f2d18d]" strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Still wondering about something?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Send us your storage request and a real person from our team will contact you within one business day.
            </p>

            <form className="mx-auto mt-8 grid w-full max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className="h-11 rounded-xl border border-[rgba(149,187,220,0.24)] bg-[rgba(7,16,29,0.76)] px-3.5 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-[#86b9de]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="h-11 rounded-xl border border-[rgba(149,187,220,0.24)] bg-[rgba(7,16,29,0.76)] px-3.5 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-[#86b9de]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="h-11 rounded-xl border border-[rgba(149,187,220,0.24)] bg-[rgba(7,16,29,0.76)] px-3.5 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-[#86b9de] sm:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Tell us what storage space you need..."
                rows={4}
                className="rounded-xl border border-[rgba(149,187,220,0.24)] bg-[rgba(7,16,29,0.76)] px-3.5 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition focus:border-[#86b9de] sm:col-span-2"
              />
              <Link
                to="/contact"
                state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                className="mt-1 inline-flex h-11 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-[#0f2744] transition hover:bg-neutral-100 sm:col-span-2"
              >
                Continue to full contact form
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
