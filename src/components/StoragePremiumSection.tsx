import { type MouseEvent, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight, Clock, ShieldCheck, Warehouse } from 'lucide-react'
import {
  STORAGE_BRAND_ICON,
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
  { label: '24-hour access', icon: Clock },
  { label: 'Secure monitored yard', icon: ShieldCheck },
  { label: 'Personal & business units', icon: Warehouse },
] as const

const STORAGE_HERO_CTA_TARGET = 'storage-offers'

function scrollToStorageSection(sectionId: string, event?: MouseEvent<HTMLAnchorElement>) {
  event?.preventDefault()
  const el = document.getElementById(sectionId)
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${sectionId}`)
}

function subscribeMobileHeroFan(onStoreChange: () => void) {
  const mq = window.matchMedia('(max-width: 639px)')
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getMobileHeroFanSnapshot() {
  return window.matchMedia('(max-width: 639px)').matches
}

function getMobileHeroFanServerSnapshot() {
  return false
}

function useMobileHeroFan() {
  return useSyncExternalStore(
    subscribeMobileHeroFan,
    getMobileHeroFanSnapshot,
    getMobileHeroFanServerSnapshot,
  )
}

export default function StoragePremiumSection() {
  const isMobileHeroFan = useMobileHeroFan()

  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <header className="storage-premium-header storage-premium-header--full" id="storage-parallax">
        <section className="storage-premium-hero-shell relative w-full overflow-hidden bg-transparent py-2 sm:py-4">
          <div className="storage-premium-hero-frame relative z-10 w-full">
              <div className="storage-premium-hero-copy">
                <motion.p
                  className="storage-premium-hero-eyebrow"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  <span className="storage-premium-hero-eyebrow__line" aria-hidden />
                  <span className="storage-premium-hero-eyebrow__text">
                    Storage2Rent
                    <span className="storage-premium-hero-eyebrow__sep" aria-hidden>
                      {' '}
                      ·{' '}
                    </span>
                    Komodromos Group
                  </span>
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
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                  }}
                >
                  {STORAGE_HERO_PILLS.map((pill) => {
                    const Icon = pill.icon
                    return (
                      <motion.li
                        key={pill.label}
                        className="storage-premium-hero-pill"
                        variants={{
                          hidden: { opacity: 0, y: 14, scale: 0.94 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                        whileHover={
                          isMobileHeroFan
                            ? undefined
                            : { y: -4, scale: 1.03 }
                        }
                        transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                      >
                        <span className="storage-premium-hero-pill__fill" aria-hidden />
                        <span className="storage-premium-hero-pill__icon" aria-hidden>
                          <Icon size={13} strokeWidth={2.25} />
                        </span>
                        <span className="storage-premium-hero-pill__text">{pill.label}</span>
                        <span className="storage-premium-hero-pill__sheen" aria-hidden />
                      </motion.li>
                    )
                  })}
                </motion.ul>

                <motion.div
                  className="storage-premium-hero-cta-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38 }}
                >
                  <a
                    href={`#${STORAGE_HERO_CTA_TARGET}`}
                    className="storage-premium-hero-cta group"
                    onClick={(event) => scrollToStorageSection(STORAGE_HERO_CTA_TARGET, event)}
                  >
                    <span className="storage-premium-hero-cta__sheen" aria-hidden />
                    <span className="storage-premium-hero-cta__text">Get started now</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={2.5}
                      className="storage-premium-hero-cta__icon shrink-0"
                      aria-hidden
                    />
                  </a>
                </motion.div>
              </div>

              <div className="storage-premium-hero-fan-wrap relative z-0">
                {!isMobileHeroFan ? (
                  <div
                    className="storage-premium-hero-fan-wrap__shadow pointer-events-none absolute left-1/2 top-[80%] z-10 aspect-square w-[250%] -translate-x-1/2 rounded-full bg-[#05070a] shadow-2xl shadow-purple-500/30 sm:top-[40%] sm:w-[200%]"
                    aria-hidden
                  />
                ) : null}

                {isMobileHeroFan ? (
                  <div className="storage-premium-hero-stack">
                    {STORAGE_HERO_FAN.map((card) => (
                      <figure key={card.src} className="storage-premium-hero-stack__card">
                        <img
                          src={card.src}
                          alt={card.alt}
                          className="storage-premium-hero-stack__img"
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    ))}
                  </div>
                ) : (
                  <div className="storage-premium-hero-fan relative mx-auto flex w-full flex-row items-end justify-center">
                    {STORAGE_HERO_FAN.map((card, index) => (
                      <motion.div
                        key={card.src}
                        className="storage-premium-hero-card relative origin-bottom overflow-hidden rounded-xl sm:rounded-3xl"
                        initial={{ opacity: 0, y: 80, rotate: 0 }}
                        animate={{ opacity: 1, y: card.translateY, rotate: card.rotate }}
                        whileHover={{
                          y: card.translateY - 12,
                          transition: { type: 'spring', stiffness: 400, damping: 25 },
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.4 + index * 0.12,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <img src={card.src} alt={card.alt} className="h-full w-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
          </div>
        </section>
      </header>

      <div className="container">
        <section className="storage-offers-section" id="storage-offers">
          <header className="storage-offers__head">
            <p className="storage-offers__eyebrow">Storage options</p>
            <h2 className="storage-offers__title">Storage Solutions for Every Need</h2>
            <p className="storage-offers__lead">
              Choose from personal, business, and pallet storage options designed for security,
              flexibility, and easy access.
            </p>
          </header>

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
            className="storage-extra-services"
          >
            <div className="storage-extra-services__grid">
              <div className="storage-extra-services__copy">
                <p className="storage-extra-services__eyebrow">Extra Services</p>
                <h3 className="storage-extra-services__title">Do you need more?</h3>
                <p className="storage-extra-services__lead">
                  Whether you need home, business, or long-term support, we provide complementary
                  services for flexible storage operations.
                </p>
              </div>

              <div className="storage-extra-services__items">
                {STORAGE_EXTRA_SERVICE_IMAGES.map((service, idx) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="storage-extra-services__item"
                  >
                    <div className="storage-extra-services__item-media">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>
                    <p className="storage-extra-services__item-title">{service.title}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.section>

          <div className="storage-offers__cards">
            {STORAGE_OFFER_CARDS.map((card, i) => (
              <motion.article
                key={card.title}
                className="storage-offer-card group"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="storage-offer-card__accent" aria-hidden />
                <div className="storage-offer-card__media">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="storage-offer-card__title">{card.title}</h3>
                <p className="storage-offer-card__desc">{card.desc}</p>
                <Link
                  to="/contact"
                  state={{ serviceInterest: `Storage2Rent - ${card.title}` }}
                  className="storage-offer-card__link group"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={13}
                    strokeWidth={2.25}
                    className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="storage-offers-cta">
            <h3 className="storage-offers-cta__title">
              See our offers for <span>business storage</span>
            </h3>
            <Link
              to="/contact"
              state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
              className="storage-offers-cta__btn group"
            >
              <span>More Services</span>
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                aria-hidden
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

      <div className="container storage-page-closing">
        <section id="storage-contact" className="storage-contact-section">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35 }}
            className="storage-contact-panel"
          >
            <div className="storage-contact-panel__accent" aria-hidden />
            <div className="storage-contact-panel__icon" aria-hidden>
              <img
                src={STORAGE_BRAND_ICON}
                alt=""
                className="storage-contact-panel__icon-img"
                width={56}
                height={56}
                decoding="async"
              />
            </div>

            <p className="storage-contact-panel__eyebrow">Get in touch</p>
            <h3 className="storage-contact-panel__title">
              <span className="storage-contact-panel__title-main">Still wondering</span>
              <span className="storage-contact-panel__title-accent">about something?</span>
            </h3>
            <p className="storage-contact-panel__lead">
              Send us your storage request and a real person from our team will contact you within{' '}
              <span className="storage-contact-panel__lead-highlight">one business day</span>.
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
              <div className="storage-form__submit-wrap storage-form__field--full">
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Storage2Rent', storageInquiry: true }}
                  className="storage-form__submit storage-form__submit--premium"
                >
                  <span className="storage-form__submit-sheen" aria-hidden />
                  <span className="storage-form__submit-text">Submit</span>
                </Link>
              </div>
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
