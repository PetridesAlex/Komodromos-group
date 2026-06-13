import { type MouseEvent, useCallback, useState, useSyncExternalStore } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Camera, Clock, Lock, ShieldCheck, ThermometerSnowflake, Warehouse } from 'lucide-react'
import {
  STORAGE_BRAND_ICON,
  STORAGE_EXTRA_SERVICES_PATH,
  STORAGE_EXTRA_SERVICES_INTRO,
  STORAGE_HERO_FAN,
  STORAGE_OFFER_IMAGES,
  storageImage,
} from '../data/storagePageImages'
import StorageOfferDetailModal from './StorageOfferDetailModal'
import StorageParallaxCards from './StorageParallaxCards'
import StorageUsefulTipsSection from './StorageUsefulTipsSection'

const STORAGE_PLANS: { title: string; price: number }[] = [
  { title: '10 ft Container', price: 60 },
  { title: '20 ft Container', price: 100 },
  { title: '20 ft Insulated warehouse', price: 110 },
  { title: '30 ft Insulated warehouse', price: 145 },
  { title: '40 ft Container', price: 190 },
]

const PRICING_EASE = [0.16, 1, 0.3, 1] as const

const PRICING_CARD_STEP = 0.52

const pricingGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0,
      delayChildren: 0,
    },
  },
} as const

const pricingCardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.88,
    rotateX: 8,
    filter: 'blur(10px)',
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.32,
      delay: index * PRICING_CARD_STEP,
      ease: PRICING_EASE,
      when: 'beforeChildren',
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  }),
} as const

const pricingCardVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.18 },
  },
} as const

const pricingAccentVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.24, ease: PRICING_EASE },
  },
} as const

const pricingTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: PRICING_EASE },
  },
} as const

const pricingAmountVariants = {
  hidden: { opacity: 0, scale: 0.78, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 640,
      damping: 30,
      mass: 0.68,
      delay: 0.02,
    },
  },
} as const

const STORAGE_OFFER_CARDS = [
  {
    title: 'Self Storage Units',
    desc: 'Flexible storage space for boxes, furniture, and personal belongings with simple monthly options.',
    image: STORAGE_OFFER_IMAGES.personal,
    learnMore:
      'Our Personal Storage Units provide a secure, convenient and flexible solution for storing household belongings, furniture, seasonal items, personal collections, archives and valuable possessions. With 24/7 monitored security, thermally insulated units and easy access, you can enjoy complete peace of mind knowing that your belongings are protected in a safe and professionally managed environment.',
  },
  {
    title: 'Business Storage Units',
    desc: 'Secure business storage for operational materials, equipment, and seasonal stock overflow.',
    image: STORAGE_OFFER_IMAGES.business,
    learnMore:
      "Our Business Storage Units offer a secure and cost-effective solution for companies requiring additional space for inventory, equipment, documents, tools and business assets. We understand that every business has different storage requirements, which is why we can customise and adjust the size of our thermally insulated warehouse spaces according to each client's specific needs. With advanced security systems, 24/7 CCTV monitoring, controlled access and convenient accessibility, businesses can confidently store their valuable assets in a safe, professional and highly secure environment.",
  },
  {
    title: 'Safety & Security Systems',
    desc: 'Practical pallet-ready storage designed for organized access and efficient logistics handling.',
    image: STORAGE_OFFER_IMAGES.pallet,
    learnMore:
      'At Storage2Rent, the safety and security of your belongings are our highest priorities. Our facility is protected by multiple layers of advanced security technology and continuous monitoring systems, providing complete peace of mind for our customers.',
    learnMoreBullets: [
      'AI-powered 8MP CCTV surveillance cameras throughout the entire facility',
      'Thermal perimeter cameras for enhanced night-time detection',
      'ANPR (Automatic Number Plate Recognition) entrance camera',
      'Motion detection sensors surrounding storage units and containers',
      'Advanced smart alarm system with instant alerts',
      '24/7 professional monitoring centre',
      'High-performance floodlighting across the entire site',
      'UPS and generator backup systems to ensure uninterrupted operation',
      'Dual recording protection with cloud storage and local NVR recording',
      'Controlled electronic access systems',
      'On-site security personnel during night-time hours',
    ],
    learnMoreClosing:
      'With multiple layers of protection operating around the clock, Storage2Rent offers one of the most secure storage environments available, ensuring your belongings remain protected at all times.',
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

const STORAGE_ABOUT_SECURITY = [
  { label: '24-hour CCTV across the entire site', icon: Camera },
  { label: 'Advanced laser motion detection', icon: ShieldCheck },
  { label: 'Automated access control systems', icon: Lock },
  { label: 'Extensive night-time security lighting', icon: Clock },
  { label: 'Dedicated on-site security personnel (evenings)', icon: ShieldCheck },
] as const

const STORAGE_ABOUT_VALUES = [
  'Security',
  'Reliability',
  'Professionalism',
  'Cleanliness',
  'Flexibility',
  'Personal attention',
] as const

const STORAGE_ABOUT_PARAGRAPHS = [
  'Since 2015, Storage2Rent has been providing modern, reliable and secure storage solutions for both private individuals and businesses throughout Cyprus. With a strong commitment to security, quality and exceptional customer service, we have created a facility where our customers can store their belongings with complete confidence and peace of mind.',
  'Our facilities have been designed with one primary objective: the protection of your possessions. We operate a comprehensive 24-hour CCTV surveillance system with cameras covering the entire site, advanced laser motion detection technology, automated access control systems, extensive night-time security lighting and dedicated on-site security personnel during evening hours. These multiple layers of protection ensure that your belongings remain safe and secure at all times.',
  'In addition, our thermally insulated storage units and containers help maintain lower and more stable temperatures throughout the year, providing an ideal environment for the storage of personal belongings, furniture, business equipment, inventory, archives and important documents.',
  'The Storage2Rent team consists of experienced professionals who are committed to delivering exceptional customer service and tailored storage solutions to meet the unique needs of every client. Our core values — security, reliability, professionalism, cleanliness, flexibility and personal attention — form the foundation of everything we do.',
] as const

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
  const reduceMotion = useReducedMotion()
  const [activeOfferDetail, setActiveOfferDetail] = useState<{
    title: string
    image: string
    body: string
    bullets?: readonly string[]
    closing?: string
  } | null>(null)

  const closeOfferDetail = useCallback(() => {
    setActiveOfferDetail(null)
  }, [])

  return (
    <section className="storage-premium-section" aria-labelledby="storage-premium-heading">
      <div className="storage-premium-section__glow storage-premium-section__glow--1" aria-hidden />
      <div className="storage-premium-section__glow storage-premium-section__glow--2" aria-hidden />
      <header className="storage-premium-header storage-premium-header--full" id="storage-parallax">
        <section className="storage-premium-hero-shell relative w-full overflow-hidden bg-transparent py-2 sm:py-4">
          <div className="storage-premium-hero-frame relative z-10 w-full">
              <div className="storage-premium-hero-copy">
                <div className="storage-premium-hero-copy__watermark" aria-hidden>
                  <img
                    src={storageImage('Storage2Rent-hero-cover.webp')}
                    alt=""
                    className="storage-premium-hero-copy__watermark-img"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
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

      <section className="storage-about" id="storage-about" aria-labelledby="storage-about-heading">
        <div className="container storage-about__inner">
          <motion.header
            className="storage-about__head"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="storage-about__eyebrow">Who we are</p>
            <h2 id="storage-about-heading" className="storage-about__title">
              <span className="storage-about__title-line">Security, Reliability and Complete Protection</span>
              <span className="storage-about__title-line storage-about__title-line--accent">
                for Your Belongings
              </span>
            </h2>
          </motion.header>

          <div className="storage-about__grid">
            <motion.aside
              className="storage-about__visual"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="storage-about__visual-frame">
                <div className="storage-about__visual-accent" aria-hidden />
                <img
                  src={STORAGE_OFFER_IMAGES.pallet}
                  alt="Storage2Rent secure facility with professional protection systems"
                  className="storage-about__visual-img"
                  loading="lazy"
                  decoding="async"
                />
                <div className="storage-about__since-badge">
                  <span className="storage-about__since-year">Since 2015</span>
                  <span className="storage-about__since-label">Trusted in Cyprus</span>
                </div>
              </div>

              <ul className="storage-about__security-list" aria-label="Security features">
                {STORAGE_ABOUT_SECURITY.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.li
                      key={item.label}
                      className="storage-about__security-item"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ duration: 0.35, delay: 0.08 + index * 0.05 }}
                    >
                      <span className="storage-about__security-icon" aria-hidden>
                        <Icon size={14} strokeWidth={2.25} />
                      </span>
                      <span>{item.label}</span>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="storage-about__insulated">
                <span className="storage-about__insulated-icon" aria-hidden>
                  <ThermometerSnowflake size={15} strokeWidth={2.25} />
                </span>
                <p className="storage-about__insulated-text">
                  Thermally insulated units for stable year-round temperature control
                </p>
              </div>
            </motion.aside>

            <motion.div
              className="storage-about__prose"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {STORAGE_ABOUT_PARAGRAPHS.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="storage-about__paragraph">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          <motion.ul
            className="storage-about__values"
            aria-label="Storage2Rent core values"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
            }}
          >
            {STORAGE_ABOUT_VALUES.map((value) => (
              <motion.li
                key={value}
                className="storage-about__value"
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
              >
                {value}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="storage-about__closing"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: 0.08 }}
          >
            <div className="storage-about__closing-accent" aria-hidden />
            <p className="storage-about__closing-lead">
              At Storage2Rent, we do not simply provide storage space. We provide confidence, security
              and complete peace of mind, knowing that your belongings are stored within a professionally
              managed facility designed and operated to the highest standards of safety, protection and
              service.
            </p>
            <p className="storage-about__closing-note">
              Whether you require short-term or long-term storage, you can trust Storage2Rent to
              safeguard what matters most to you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container">
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
              <button
                type="button"
                className="storage-offer-card__link group"
                onClick={() =>
                  setActiveOfferDetail({
                    title: card.title,
                    image: card.image,
                    body: card.learnMore,
                    ...('learnMoreBullets' in card && card.learnMoreBullets
                      ? { bullets: card.learnMoreBullets }
                      : {}),
                    ...('learnMoreClosing' in card && card.learnMoreClosing
                      ? { closing: card.learnMoreClosing }
                      : {}),
                  })
                }
                aria-haspopup="dialog"
              >
                <span>Learn More</span>
                <ArrowRight
                  size={13}
                  strokeWidth={2.25}
                  className="shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.h3
          className="storage-pricing-heading"
          id="storage-rates"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.35, ease: PRICING_EASE }}
        >
          Monthly rates
        </motion.h3>
        <motion.div
          className="storage-pricing-grid"
          role="list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px', amount: 0.15 }}
          variants={pricingGridVariants}
        >
          {STORAGE_PLANS.map((plan, index) => (
            <motion.article
              key={plan.title}
              className="storage-price-card"
              role="listitem"
              custom={index}
              variants={reduceMotion ? pricingCardVariantsReduced : pricingCardVariants}
            >
              <motion.div
                className="storage-price-card__accent"
                aria-hidden
                variants={reduceMotion ? undefined : pricingAccentVariants}
              />
              <motion.h3
                className="storage-price-card__title"
                variants={reduceMotion ? undefined : pricingTextVariants}
              >
                {plan.title}
              </motion.h3>
              <motion.p
                className="storage-price-card__price"
                variants={reduceMotion ? undefined : pricingTextVariants}
              >
                <motion.span
                  className="storage-price-card__amount"
                  variants={reduceMotion ? undefined : pricingAmountVariants}
                >
                  {plan.price}€
                </motion.span>
                <span className="storage-price-card__period">per month</span>
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>

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
              <h3 className="storage-calculator__title">Explore Our Storage Unit Sizes & Specifications</h3>
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

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="storage-extra-entry"
          >
            <div className="storage-extra-entry__accent" aria-hidden />
            <div className="storage-extra-entry__grid">
              <div className="storage-extra-entry__copy">
                <p className="storage-extra-entry__eyebrow">{STORAGE_EXTRA_SERVICES_INTRO.eyebrow}</p>
                <h3 className="storage-extra-entry__title">{STORAGE_EXTRA_SERVICES_INTRO.title}</h3>
                <p className="storage-extra-entry__lead">{STORAGE_EXTRA_SERVICES_INTRO.lead}</p>
              </div>
              <Link to={STORAGE_EXTRA_SERVICES_PATH} className="storage-extra-entry__cta group">
                <span className="storage-extra-entry__cta-sheen" aria-hidden />
                <span className="storage-extra-entry__cta-text">Man with Van for Hire</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.5}
                  className="storage-extra-entry__cta-icon shrink-0"
                  aria-hidden
                />
              </Link>
            </div>
          </motion.div>
        </section>

        <div className="storage-features-wrap" id="storage-features">
          <h3 className="storage-features-heading">The Storage2Rent standard</h3>
        </div>
      </div>

      <div className="storage-parallax-bleed">
        <StorageParallaxCards />
      </div>

      <div className="storage-tips-bleed">
        <StorageUsefulTipsSection />
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

      <StorageOfferDetailModal
        open={activeOfferDetail !== null}
        title={activeOfferDetail?.title ?? ''}
        image={activeOfferDetail?.image ?? ''}
        body={activeOfferDetail?.body ?? ''}
        bullets={activeOfferDetail?.bullets}
        closing={activeOfferDetail?.closing}
        onClose={closeOfferDetail}
      />
    </section>
  )
}
