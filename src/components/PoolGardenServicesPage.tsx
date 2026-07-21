import { useEffect, useState, type ReactNode } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { Building2, Home, Layers } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { useLazyVideo } from '../hooks/useLazyVideo'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import { poolBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import {
  poolCategories,
  poolGardenPillars,
  POOL_CATEGORY_DETAILS,
  POOL_GARDEN_INTRO,
  POOL_LINING_DETAILS,
  POOL_SERVICE_DETAILS,
  poolCategoryDetailPath,
  poolInternalLinings,
  poolLiningDetailPath,
  poolServiceDetailPath,
  poolServiceRenovationRepair,
} from '../data/poolGardenPage'

const pillarIcons = [Home, Building2, Layers] as const

const POOL_EASE = [0.22, 1, 0.36, 1] as const

const repairGridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
}

const repairGridItemVariants = {
  hidden: { opacity: 0, y: 38 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: POOL_EASE },
  },
}

const sectionViewport = {
  once: true,
  amount: 0.14,
  margin: '-50px 0px',
} as const

const fadeUpView = {
  once: true,
  amount: 0.2,
  margin: '-40px 0px',
} as const

const scrollGridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
}

const scrollGridItemVariants = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: POOL_EASE },
  },
}

const introListContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.12 },
  },
}

const introListItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.48, ease: POOL_EASE },
  },
}

function poolMotionProps(reduceMotion: boolean | null) {
  if (reduceMotion) return {}
  return {
    initial: { opacity: 0, y: 36 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.68, ease: POOL_EASE },
    viewport: sectionViewport,
  }
}

function PoolMotionSection({
  reduceMotion,
  className,
  id,
  children,
  ...aria
}: {
  reduceMotion: boolean | null
  className?: string
  id?: string
  children: ReactNode
  'aria-label'?: string
  'aria-labelledby'?: string
}) {
  if (reduceMotion) {
    return (
      <section className={className} id={id} {...aria}>
        {children}
      </section>
    )
  }

  return (
    <motion.section
      className={className}
      id={id}
      {...aria}
      {...poolMotionProps(reduceMotion)}
    >
      {children}
    </motion.section>
  )
}

function LazyPoolImage({
  src,
  alt,
  className,
  width,
  height,
}: {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      width={width}
      height={height}
      className={[className, 'pool-garden-lazy-img', loaded ? 'pool-garden-lazy-img--loaded' : '']
        .filter(Boolean)
        .join(' ')}
      onLoad={() => setLoaded(true)}
    />
  )
}

/** Primary hero video */
const POOL_HERO_VIDEO =
  '/images/services/swimming-pool-garden-services/swimming-pool-video/2021871_Hydro_Massage_Outdoor_3840x2160.mp4'

/** Editorial strip — alternate pool detail so hero and insight section differ visually */
const POOL_EDITORIAL_IMAGE =
  '/images/services/swimming-pool-garden-services/over-flow-1.webp'

export default function PoolGardenServicesPage() {
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const { containerRef: heroVideoContainerRef, videoRef, shouldLoad: shouldLoadHeroVideo } =
    useLazyVideo()
  const card = getServiceBySlug('pool')
  const content = getServicePageContent('pool')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!card || !content) {
    return <Navigate to="/" replace />
  }

  const heroMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.85, ease: POOL_EASE },
      }

  const scrollToServices = () => {
    const el = document.getElementById('pool-categories')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="page pool-garden-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />

      <section className="pool-garden-hero" aria-label="Introduction" data-hero-parallax-root>
        <div
          ref={heroVideoContainerRef}
          className="pool-garden-hero__bg"
          aria-hidden
          data-hero-parallax
        >
          <video
            ref={videoRef}
            className={[
              'pool-garden-hero__bg-video',
              shouldLoadHeroVideo ? 'pool-garden-hero__bg-video--ready' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/services/swimming-pool-garden-services/over-flow-1.webp"
          >
            {shouldLoadHeroVideo ? (
              <source src={POOL_HERO_VIDEO} type="video/mp4" />
            ) : null}
          </video>
        </div>
        <div className="pool-garden-hero__scrim" aria-hidden />
        <div className="pool-garden-hero__grain" aria-hidden />
        <div className="container pool-garden-hero__inner">
          <motion.p className="pool-garden-hero__eyebrow" {...heroMotion}>
            {card.eyebrow}
          </motion.p>
          <motion.h1
            className="pool-garden-hero__title"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 32 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.85, delay: 0.08, ease: POOL_EASE },
                })}
          >
            {card.title}
          </motion.h1>
          <div className="pool-garden-hero__lede">
            <motion.p
              className="pool-garden-hero__sub"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 28 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.82, delay: 0.16, ease: POOL_EASE },
                  })}
            >
              {card.description}
            </motion.p>
            <motion.p
              className="pool-garden-hero__tag"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.78, delay: 0.24, ease: POOL_EASE },
                  })}
            >
              Private pools · Hospitality exteriors · Landscape infrastructure
            </motion.p>
          </div>
          <motion.div
            className="pool-garden-hero__cta"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.72, delay: 0.32, ease: POOL_EASE },
                })}
          >
            <button
              type="button"
              className="pool-garden-hero__services-btn"
              onClick={scrollToServices}
            >
              <span className="pool-garden-hero__services-btn-text">
                Click for services
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-intro pool-garden-lead pool-garden-lead--premium pool-garden-scroll-section"
        aria-labelledby="pool-garden-intro-title"
      >
        <div className="pool-garden-lead__glow" aria-hidden />
        <div className="container pool-garden-intro__inner">
          <motion.header
            className="pool-garden-intro__head"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 28 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.62, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            <p className="pool-garden-intro__eyebrow">{POOL_GARDEN_INTRO.eyebrow}</p>
            <h2 id="pool-garden-intro-title" className="pool-garden-intro__title">
              {POOL_GARDEN_INTRO.title}
            </h2>
            <p className="pool-garden-intro__subtitle">{POOL_GARDEN_INTRO.subtitle}</p>
            <div className="pool-garden-intro__title-rule" aria-hidden />
          </motion.header>

          <div className="pool-garden-intro__grid">
            <motion.div
              className="pool-garden-intro__prose"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.58, delay: 0.1, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              {POOL_GARDEN_INTRO.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="pool-garden-intro__paragraph">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.aside
              className="pool-garden-intro__services"
              aria-labelledby="pool-garden-intro-services"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.58, delay: 0.18, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              <h3 id="pool-garden-intro-services" className="pool-garden-intro__services-title">
                {POOL_GARDEN_INTRO.servicesTitle}
              </h3>
              {reduceMotion ? (
                <ul className="pool-garden-intro__services-list">
                  {POOL_GARDEN_INTRO.services.map((service) => (
                    <li key={service} className="pool-garden-intro__services-item">
                      {service}
                    </li>
                  ))}
                </ul>
              ) : (
                <motion.ul
                  className="pool-garden-intro__services-list"
                  variants={introListContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={fadeUpView}
                >
                  {POOL_GARDEN_INTRO.services.map((service) => (
                    <motion.li
                      key={service}
                      className="pool-garden-intro__services-item"
                      variants={introListItemVariants}
                    >
                      {service}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.aside>
          </div>

          <motion.div
            className="pool-garden-intro__excellence"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.58, delay: 0.08, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            <h3 className="pool-garden-intro__excellence-title">
              {POOL_GARDEN_INTRO.excellenceTitle}
            </h3>
            {POOL_GARDEN_INTRO.excellenceParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="pool-garden-intro__paragraph">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.footer
            className="pool-garden-intro__signature"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.52, delay: 0.12, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            <p className="pool-garden-intro__brand">{POOL_GARDEN_INTRO.brandName}</p>
            <p className="pool-garden-intro__tagline">{POOL_GARDEN_INTRO.tagline}</p>
          </motion.footer>
        </div>
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-flagship pool-garden-flagship--categories pool-garden-scroll-section"
        id="pool-categories"
        aria-labelledby="pool-categories-heading"
      >
        <motion.div
          className="container pool-garden-flagship__header"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.62, ease: POOL_EASE },
                viewport: fadeUpView,
              })}
        >
          <h2 id="pool-categories-heading" className="pool-garden-flagship__title">
            Pool Categories
          </h2>
          <div className="pool-garden-flagship__rule" aria-hidden />
        </motion.div>
        {reduceMotion ? (
          <div className="pool-garden-flagship__grid pool-garden-flagship__grid--categories container container--categories-hero">
            {poolCategories.map((item) => {
              const hasDetail = Boolean(POOL_CATEGORY_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <Link
                    key={item.id}
                    to={poolBrandHref(poolCategoryDetailPath(item.id))}
                    className={[
                      'pool-garden-showcase-card',
                      'pool-garden-showcase-card--categories',
                      'pool-garden-showcase-card--interactive',
                    ].join(' ')}
                    aria-label={`Learn more about ${item.label} pools`}
                  >
                    <div className="pool-garden-showcase-card__media">
                      <LazyPoolImage src={item.imageSrc} alt="" />
                      <span className="pool-garden-showcase-card__veil" aria-hidden />
                      <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                        View details
                      </span>
                    </div>
                    <span className="pool-garden-showcase-card__cap">{item.label}</span>
                  </Link>
                )
              }

              return (
                <figure
                  key={item.id}
                  className={[
                    'pool-garden-showcase-card',
                    'pool-garden-showcase-card--categories',
                  ].join(' ')}
                >
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </figure>
              )
            })}
          </div>
        ) : (
          <motion.div
            className="pool-garden-flagship__grid pool-garden-flagship__grid--categories container container--categories-hero"
            variants={scrollGridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={fadeUpView}
          >
            {poolCategories.map((item) => {
              const hasDetail = Boolean(POOL_CATEGORY_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <motion.div key={item.id} variants={scrollGridItemVariants}>
                    <Link
                      to={poolBrandHref(poolCategoryDetailPath(item.id))}
                      className={[
                        'pool-garden-showcase-card',
                        'pool-garden-showcase-card--categories',
                        'pool-garden-showcase-card--interactive',
                      ].join(' ')}
                      aria-label={`Learn more about ${item.label} pools`}
                    >
                      <div className="pool-garden-showcase-card__media">
                        <LazyPoolImage src={item.imageSrc} alt="" />
                        <span className="pool-garden-showcase-card__veil" aria-hidden />
                        <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                          View details
                        </span>
                      </div>
                      <span className="pool-garden-showcase-card__cap">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              }

              return (
                <motion.figure
                  key={item.id}
                  className={[
                    'pool-garden-showcase-card',
                    'pool-garden-showcase-card--categories',
                  ].join(' ')}
                  variants={scrollGridItemVariants}
                >
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </motion.figure>
              )
            })}
          </motion.div>
        )}
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-flagship pool-garden-flagship--repair pool-garden-scroll-section"
        id="service-renovation-repair"
        aria-labelledby="service-renovation-heading"
      >
        <motion.div
          className="container pool-garden-flagship__header"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.62, ease: POOL_EASE },
                viewport: fadeUpView,
              })}
        >
          <h2 id="service-renovation-heading" className="pool-garden-flagship__title">
            Service, Renovation and Repair
          </h2>
          <div className="pool-garden-flagship__rule" aria-hidden />
        </motion.div>
        {reduceMotion ? (
          <div className="pool-garden-flagship__grid pool-garden-flagship__grid--repair container">
            {poolServiceRenovationRepair.map((item) => {
              const hasDetail = Boolean(POOL_SERVICE_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <Link
                    key={item.id}
                    to={poolBrandHref(poolServiceDetailPath(item.id))}
                    className="pool-garden-showcase-card pool-garden-showcase-card--interactive"
                    aria-label={`Learn more about ${item.label}`}
                  >
                    <div className="pool-garden-showcase-card__media">
                      <LazyPoolImage src={item.imageSrc} alt="" />
                      <span className="pool-garden-showcase-card__veil" aria-hidden />
                      <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                        View details
                      </span>
                    </div>
                    <span className="pool-garden-showcase-card__cap">{item.label}</span>
                  </Link>
                )
              }

              return (
                <figure key={item.id} className="pool-garden-showcase-card">
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </figure>
              )
            })}
          </div>
        ) : (
          <motion.div
            className="pool-garden-flagship__grid pool-garden-flagship__grid--repair container pool-garden-flagship__grid--repair-animated"
            variants={repairGridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={fadeUpView}
          >
            {poolServiceRenovationRepair.map((item) => {
              const hasDetail = Boolean(POOL_SERVICE_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <motion.div
                    key={item.id}
                    className="pool-garden-showcase-card-wrap"
                    variants={repairGridItemVariants}
                  >
                    <Link
                      to={poolBrandHref(poolServiceDetailPath(item.id))}
                      className="pool-garden-showcase-card pool-garden-showcase-card--repair-motion pool-garden-showcase-card--interactive"
                      aria-label={`Learn more about ${item.label}`}
                    >
                      <div className="pool-garden-showcase-card__media">
                        <LazyPoolImage src={item.imageSrc} alt="" />
                        <span className="pool-garden-showcase-card__veil" aria-hidden />
                        <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                          View details
                        </span>
                      </div>
                      <span className="pool-garden-showcase-card__cap">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              }

              return (
                <motion.figure
                  key={item.id}
                  className="pool-garden-showcase-card pool-garden-showcase-card--repair-motion"
                  variants={repairGridItemVariants}
                >
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </motion.figure>
              )
            })}
          </motion.div>
        )}
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-flagship pool-garden-flagship--linings pool-garden-scroll-section"
        id="pool-internal-linings"
        aria-labelledby="pool-linings-heading"
      >
        <motion.div
          className="container pool-garden-flagship__header"
          {...(reduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 28 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.62, ease: POOL_EASE },
                viewport: fadeUpView,
              })}
        >
          <h2 id="pool-linings-heading" className="pool-garden-flagship__title">
            Pool Internal Linings
          </h2>
          <div className="pool-garden-flagship__rule" aria-hidden />
        </motion.div>
        {reduceMotion ? (
          <div className="pool-garden-flagship__grid pool-garden-flagship__grid--linings container">
            {poolInternalLinings.map((item) => {
              const hasDetail = Boolean(POOL_LINING_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <Link
                    key={item.id}
                    to={poolBrandHref(poolLiningDetailPath(item.id))}
                    className="pool-garden-showcase-card pool-garden-showcase-card--tall pool-garden-showcase-card--interactive"
                    aria-label={`Learn more about ${item.label}`}
                  >
                    <div className="pool-garden-showcase-card__media">
                      <LazyPoolImage src={item.imageSrc} alt="" />
                      <span className="pool-garden-showcase-card__veil" aria-hidden />
                      <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                        View details
                      </span>
                    </div>
                    <span className="pool-garden-showcase-card__cap">{item.label}</span>
                  </Link>
                )
              }

              return (
                <figure key={item.id} className="pool-garden-showcase-card pool-garden-showcase-card--tall">
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </figure>
              )
            })}
          </div>
        ) : (
          <motion.div
            className="pool-garden-flagship__grid pool-garden-flagship__grid--linings container"
            variants={scrollGridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={fadeUpView}
          >
            {poolInternalLinings.map((item) => {
              const hasDetail = Boolean(POOL_LINING_DETAILS[item.id])

              if (hasDetail) {
                return (
                  <motion.div key={item.id} variants={scrollGridItemVariants}>
                    <Link
                      to={poolBrandHref(poolLiningDetailPath(item.id))}
                      className="pool-garden-showcase-card pool-garden-showcase-card--tall pool-garden-showcase-card--interactive"
                      aria-label={`Learn more about ${item.label}`}
                    >
                      <div className="pool-garden-showcase-card__media">
                        <LazyPoolImage src={item.imageSrc} alt="" />
                        <span className="pool-garden-showcase-card__veil" aria-hidden />
                        <span className="pool-garden-showcase-card__detail-hint" aria-hidden>
                          View details
                        </span>
                      </div>
                      <span className="pool-garden-showcase-card__cap">{item.label}</span>
                    </Link>
                  </motion.div>
                )
              }

              return (
                <motion.figure
                  key={item.id}
                  className="pool-garden-showcase-card pool-garden-showcase-card--tall"
                  variants={scrollGridItemVariants}
                >
                  <div className="pool-garden-showcase-card__media">
                    <LazyPoolImage src={item.imageSrc} alt="" />
                    <span className="pool-garden-showcase-card__veil" aria-hidden />
                  </div>
                  <figcaption className="pool-garden-showcase-card__cap">{item.label}</figcaption>
                </motion.figure>
              )
            })}
          </motion.div>
        )}
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-pillars section-led section-led--cyan pool-garden-scroll-section"
        aria-labelledby="pool-garden-pillars-title"
      >
        <div className="container pool-garden-pillars__inner">
          <motion.p
            id="pool-garden-pillars-title"
            className="pool-garden-section-eyebrow"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.55, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            Core capabilities
          </motion.p>
          {reduceMotion ? (
            <div className="pool-garden-pillar-grid">
              {poolGardenPillars.map((p, i) => {
                const Icon = pillarIcons[i]
                return (
                  <article key={p.key} className="pool-garden-pillar">
                    <div className="pool-garden-pillar__icon-wrap" aria-hidden>
                      <Icon strokeWidth={1.35} size={26} />
                    </div>
                    <h3 className="pool-garden-pillar__title">{p.title}</h3>
                    <p className="pool-garden-pillar__body">{p.body}</p>
                  </article>
                )
              })}
            </div>
          ) : (
            <motion.div
              className="pool-garden-pillar-grid"
              variants={scrollGridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={fadeUpView}
            >
              {poolGardenPillars.map((p, i) => {
                const Icon = pillarIcons[i]
                return (
                  <motion.article
                    key={p.key}
                    className="pool-garden-pillar"
                    variants={scrollGridItemVariants}
                  >
                    <div className="pool-garden-pillar__icon-wrap" aria-hidden>
                      <Icon strokeWidth={1.35} size={26} />
                    </div>
                    <h3 className="pool-garden-pillar__title">{p.title}</h3>
                    <p className="pool-garden-pillar__body">{p.body}</p>
                  </motion.article>
                )
              })}
            </motion.div>
          )}
        </div>
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-values section-led section-led--cyan pool-garden-scroll-section"
        aria-labelledby="pool-garden-values-title"
      >
        <div className="container pool-garden-values__inner">
          <motion.p
            id="pool-garden-values-title"
            className="pool-garden-section-eyebrow"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.55, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            {content.offeringsTitle}
          </motion.p>
          {reduceMotion ? (
            <div className="pool-garden-values__grid">
              {content.offerings.map((o) => (
                <article key={o.title} className="pool-garden-value-card">
                  <span className="pool-garden-value-card__rule" aria-hidden />
                  <h3 className="pool-garden-value-card__title">{o.title}</h3>
                  <p className="pool-garden-value-card__desc">{o.description}</p>
                </article>
              ))}
            </div>
          ) : (
            <motion.div
              className="pool-garden-values__grid"
              variants={scrollGridContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={fadeUpView}
            >
              {content.offerings.map((o) => (
                <motion.article
                  key={o.title}
                  className="pool-garden-value-card"
                  variants={scrollGridItemVariants}
                >
                  <span className="pool-garden-value-card__rule" aria-hidden />
                  <h3 className="pool-garden-value-card__title">{o.title}</h3>
                  <p className="pool-garden-value-card__desc">{o.description}</p>
                </motion.article>
              ))}
            </motion.div>
          )}
          {content.bullets && content.bullets.length > 0 ? (
            <motion.ul
              className="pool-garden-proof"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.58, delay: 0.12, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              {content.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </motion.ul>
          ) : null}
        </div>
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-insight pool-garden-scroll-section"
        id="pool-practical-guidance"
        aria-labelledby="pool-garden-insight-heading"
      >
        <div className="container pool-garden-insight__inner">
          <motion.div
            className="pool-garden-insight__media"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, x: -36, scale: 0.98 },
                  whileInView: { opacity: 1, x: 0, scale: 1 },
                  transition: { duration: 0.72, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            <LazyPoolImage
              src={POOL_EDITORIAL_IMAGE}
              alt="Swimming pool with natural rock surround and planting"
              width={1200}
              height={750}
            />
          </motion.div>
          <div className="pool-garden-insight__copy">
            <motion.p
              className="pool-garden-section-eyebrow"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.52, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              Practical guidance
            </motion.p>
            <motion.h2
              id="pool-garden-insight-heading"
              className="pool-garden-insight__title"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.58, delay: 0.06, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              Lock details before the shell is poured
            </motion.h2>
            <motion.p
              className="pool-garden-insight__lead"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 22 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.58, delay: 0.1, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              The fastest way to control cost on a pool and garden programme is to agree structure,
              hydraulics, and finishes in one coordinated pass — before excavation fixes decisions that
              are expensive to unwind later.
            </motion.p>
            <motion.ul
              className="pool-garden-insight__list"
              {...(reduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 24 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.62, delay: 0.14, ease: POOL_EASE },
                    viewport: fadeUpView,
                  })}
            >
              <li>
                <strong>Equipment &amp; access.</strong> Position filtration and heating where service
                paths stay clear for life — hard-to-reach kit is what fails first when chemistry or
                seals drift.
              </li>
              <li>
                <strong>Circulation &amp; chemistry.</strong> Balance inlet and outlet placement with
                sun, wind, and planting so debris load and chlorine demand stay predictable in warm
                seasons.
              </li>
              <li>
                <strong>Documentation.</strong> Keep hydraulic and finishing schedules aligned with
                warranty terms so handover is clear for operators, clubs, or homeowners managing the
                asset long term.
              </li>
            </motion.ul>
          </div>
        </div>
      </PoolMotionSection>

      <PoolMotionSection
        reduceMotion={reduceMotion}
        className="pool-garden-cta-strip pool-garden-scroll-section"
      >
        <div className="container pool-garden-cta-strip__inner">
          <motion.p
            className="pool-garden-cta-strip__copy"
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 22 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.58, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            {content.closing ??
              'Tell us about your site and timeline — we will respond with a clear next step.'}
          </motion.p>
          <motion.div
            {...(reduceMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 18 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.52, delay: 0.1, ease: POOL_EASE },
                  viewport: fadeUpView,
                })}
          >
            <Link
              to="/contact"
              state={{ serviceInterest: card.title }}
              className="pool-garden-cta-strip__btn"
            >
              Request details
            </Link>
          </motion.div>
        </div>
      </PoolMotionSection>

      <Footer />
    </div>
  )
}
