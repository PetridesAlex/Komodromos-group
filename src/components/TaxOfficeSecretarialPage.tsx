import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { taxBrandHref } from '../lib/brandPaths'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  TAX_OFFICE_SECRETARIAL_CONFERENCE,
  TAX_OFFICE_SECRETARIAL_FLEX,
  TAX_OFFICE_SECRETARIAL_FLEX_IMAGE_ALT,
  TAX_OFFICE_SECRETARIAL_IMAGES,
  TAX_OFFICE_SECRETARIAL_MAIN,
  TAX_OFFICE_SECRETARIAL_PAGE_TITLES,
  TAX_OFFICE_SECRETARIAL_PRICING_PLANS,
  TAX_OFFICE_SECRETARIAL_STATS,
  TAX_OFFICE_SECRETARIAL_TAXNEX,
  type TaxOfficePricingPlan,
} from '../data/taxOfficeSecretarialPageContent'
import { getTaxNexAddressLine } from '../data/taxNexPageContent'
import { useReveal } from '../hooks/useReveal'
import AnimatedCounter from './AnimatedCounter'
import SiteTopbar from './SiteTopbar'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEW = { once: true, amount: 0.2 } as const

type Locale = 'en' | 'el'
type SlideDir = 'left' | 'right' | 'up'

function FlexHighlightIcon({ variant }: { variant: 'meeting' | 'custom' }) {
  return (
    <span className="taxnex-office-flex__highlight-icon" aria-hidden>
      {variant === 'meeting' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 20V9.5L12 5l8 4.5V20M8 20v-5h8v5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11h4M10 14h4"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 21V14M4 10V3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M12 21V12M12 8V3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M20 21V16M20 11V3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="4" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="10" r="2" fill="currentColor" />
          <circle cx="20" cy="14" r="2" fill="currentColor" />
        </svg>
      )}
    </span>
  )
}

function slideIn(direction: SlideDir, reduceMotion: boolean | null, delay = 0, distance = 52) {
  if (reduceMotion) return {}
  const offset =
    direction === 'left'
      ? { x: -distance, y: 0 }
      : direction === 'right'
        ? { x: distance, y: 0 }
        : { x: 0, y: distance }
  return {
    initial: { opacity: 0, ...offset },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: VIEW,
    transition: { duration: 0.68, ease: EASE, delay },
  }
}

function OfficePricingCard({
  plan,
  locale,
  titles,
  index,
  reduceMotion,
}: {
  plan: TaxOfficePricingPlan
  locale: Locale
  titles: (typeof TAX_OFFICE_SECRETARIAL_PAGE_TITLES)[Locale]
  index: number
  reduceMotion: boolean | null
}) {
  return (
    <motion.article
      className={`taxnex-office-plan${plan.featured ? ' taxnex-office-plan--featured' : ''}`}
      {...slideIn(index % 2 === 0 ? 'left' : 'right', reduceMotion, index * 0.1, 48)}
      whileHover={reduceMotion ? undefined : { y: -8, transition: { duration: 0.3, ease: EASE } }}
    >
      {plan.featured ? (
        <span className="taxnex-office-plan__badge">
          {locale === 'en' ? 'Most popular' : 'Δημοφιλές'}
        </span>
      ) : null}
      <div className="taxnex-office-plan__head">
        <h3 className="taxnex-office-plan__name">{plan.name[locale]}</h3>
        <p className="taxnex-office-plan__tagline">{plan.tagline[locale]}</p>
        <p className="taxnex-office-plan__price">
          <span className="taxnex-office-plan__currency">€</span>
          <span className="taxnex-office-plan__amount">{plan.priceEur}</span>
          <span className="taxnex-office-plan__period">{plan.period[locale]}</span>
        </p>
      </div>
      <ul className="taxnex-office-plan__features">
        {plan.features[locale].map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {plan.footnote ? (
        <p className="taxnex-office-plan__footnote">{plan.footnote[locale]}</p>
      ) : null}
      <motion.div
        className="taxnex-office-plan__cta-wrap"
        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.22, ease: EASE }}
      >
        <Link
          className={`taxnex-btn taxnex-btn--lg taxnex-office-plan__cta${plan.featured ? ' taxnex-btn--primary' : ' taxnex-btn--outline'}`}
          to="/contact"
          state={{ serviceInterest: 'Tax & Accounting Services' }}
        >
          {titles.planCta}
        </Link>
      </motion.div>
    </motion.article>
  )
}

export default function TaxOfficeSecretarialPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { i18n } = useTranslation()
  const locale: Locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const titles = TAX_OFFICE_SECRETARIAL_PAGE_TITLES[locale]
  const main = TAX_OFFICE_SECRETARIAL_MAIN
  const conference = TAX_OFFICE_SECRETARIAL_CONFERENCE
  const flex = TAX_OFFICE_SECRETARIAL_FLEX
  const taxAddressLine = getTaxNexAddressLine(locale)
  const taxnex = TAX_OFFICE_SECRETARIAL_TAXNEX

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />
      <div className="taxnex-root taxnex-office-root" lang={locale === 'en' ? 'en' : 'el'}>
        <div className="taxnex-topbar">
          <div className="container taxnex-topbar__inner">
            <span className="taxnex-topbar__pin" aria-hidden />
            <span className="taxnex-topbar__text">{taxAddressLine}</span>
          </div>
        </div>

        <header className="taxnex-page-hero taxnex-page-hero--regco taxnex-page-hero--office" aria-labelledby="tax-office-h1">
          <motion.div className="taxnex-regco-hero__stage" aria-hidden>
            <img
              className="taxnex-regco-hero__img"
              src={TAX_OFFICE_SECRETARIAL_IMAGES.hero}
              alt=""
              width={1200}
              height={800}
              decoding="async"
              fetchPriority="high"
            />
            <div className="taxnex-regco-hero__scrim" aria-hidden />
            <div className="taxnex-regco-hero__frame" aria-hidden />
            <div className="taxnex-regco-hero__sheen" aria-hidden />
          </motion.div>
          <div className="container taxnex-regco-hero__content">
            <motion.div
              className="taxnex-regco-hero__panel"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
            >
              <nav className="taxnex-regco-hero__crumbs" aria-label="Breadcrumb">
                <Link to={taxBrandHref('/services/tax')} className="taxnex-regco-hero__crumb">
                  TaxNex Cyprus
                </Link>
                <span className="taxnex-regco-hero__crumb-sep" aria-hidden>
                  /
                </span>
                <span className="taxnex-regco-hero__crumb taxnex-regco-hero__crumb--current">
                  {titles.breadcrumbCurrent}
                </span>
              </nav>
              <h1 id="tax-office-h1" className="taxnex-regco-hero__title">
                {titles.h1}
              </h1>
              <p className="taxnex-regco-hero__intro">{titles.intro}</p>
              <div className="taxnex-regco-hero__actions">
                <Link
                  className="taxnex-btn taxnex-btn--primary taxnex-btn--lg"
                  to="/contact"
                  state={{ serviceInterest: 'Tax & Accounting Services' }}
                >
                  {titles.secureCta}
                </Link>
                <Link className="taxnex-btn taxnex-btn--ghost taxnex-btn--lg taxnex-regco-hero__back" to={taxBrandHref('/services/tax')}>
                  {titles.backCta}
                </Link>
              </div>
            </motion.div>
          </div>
        </header>

        <main className="taxnex-regco-main">
          {/* taxnexcy section_1 — main title & Custom Flex intro */}
          <section className="taxnex-section taxnex-section--light taxnex-regco-section" aria-labelledby="tax-office-main-h">
            <div className="container">
              <motion.div className="taxnex-office-main" {...slideIn('up', reduceMotion, 0, 36)}>
                <motion.figure
                  className="taxnex-office-main__figure"
                  {...slideIn('left', reduceMotion, 0.06, 48)}
                >
                  <img
                    src={TAX_OFFICE_SECRETARIAL_IMAGES.intro}
                    alt=""
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.figure>
                <motion.div className="taxnex-office-main__copy" {...slideIn('right', reduceMotion, 0.1, 48)}>
                  <h2 id="tax-office-main-h" className="taxnex-office-main__title">
                    {main.sectionTitle[locale]}
                  </h2>
                  <p className="taxnex-office-main__lead">{main.lead[locale]}</p>
                  {main.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph} className="taxnex-office-main__p">
                      {paragraph}
                    </p>
                  ))}
                  <motion.div
                    className="taxnex-office-main__services-panel"
                    {...slideIn('up', reduceMotion, 0.14, 32)}
                  >
                    <p className="taxnex-office-main__services-label">{main.servicesHeading[locale]}</p>
                    <ul className="taxnex-office-main__services">
                      {main.selectableServices[locale].map((service, index) => (
                        <motion.li
                          key={service}
                          className="taxnex-office-main__service"
                          {...slideIn('up', reduceMotion, 0.16 + index * 0.025, 18)}
                        >
                          {service}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  <p className="taxnex-office-main__tagline">{main.tagline[locale]}</p>
                  <Link
                    className="taxnex-btn taxnex-btn--primary taxnex-office-main__cta"
                    to="/contact"
                    state={{ serviceInterest: 'Tax & Accounting Services' }}
                  >
                    {main.visitCta[locale]}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Conference room & pricing packages header */}
          <section className="taxnex-section taxnex-regco-section taxnex-office-section--conference" aria-labelledby="tax-office-conf-h">
            <div className="container">
              <motion.article className="taxnex-office-conference" {...slideIn('up', reduceMotion, 0, 32)}>
                <h2 id="tax-office-conf-h" className="taxnex-office-conference__title">
                  {conference.title[locale]}
                </h2>
                <p className="taxnex-office-conference__body">{conference.body[locale]}</p>
              </motion.article>
            </div>
          </section>

          {/* Pricing tables — Starter / Pro / Premium */}
          <section
            className="taxnex-section taxnex-regco-section taxnex-office-section--pricing"
            aria-label={locale === 'en' ? 'Service packages' : 'Πακέτα υπηρεσιών'}
          >
            <div className="container">
              <div className="taxnex-office-pricing__grid">
                {TAX_OFFICE_SECRETARIAL_PRICING_PLANS.map((plan, index) => (
                  <OfficePricingCard
                    key={plan.id}
                    plan={plan}
                    locale={locale}
                    titles={titles}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Custom Flex Pack — section 2 */}
          <section
            className="taxnex-section taxnex-section--light taxnex-regco-section taxnex-office-section--flex"
            aria-labelledby="tax-office-flex-h"
          >
            <div className="container">
              <motion.article className="taxnex-office-flex" {...slideIn('up', reduceMotion, 0, 40)}>
                <motion.figure
                  className="taxnex-office-flex__media"
                  {...slideIn('left', reduceMotion, 0.06, 56)}
                >
                  <img
                    src={TAX_OFFICE_SECRETARIAL_IMAGES.flexPack}
                    alt={TAX_OFFICE_SECRETARIAL_FLEX_IMAGE_ALT[locale]}
                    width={960}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.figure>
                <motion.div className="taxnex-office-flex__body" {...slideIn('right', reduceMotion, 0.12, 48)}>
                  <header className="taxnex-office-flex__head">
                    <p className="taxnex-office-flex__eyebrow">
                      {locale === 'en' ? 'Flexible package' : 'Ευέλικτο πακέτο'}
                    </p>
                    <h2 id="tax-office-flex-h" className="taxnex-office-flex__title">
                      {flex.title[locale]}
                    </h2>
                    <p className="taxnex-office-flex__intro">{flex.intro[locale]}</p>
                    <ul className="taxnex-office-flex__highlights">
                      {flex.highlights[locale].map((item, index) => (
                        <motion.li
                          key={item}
                          className="taxnex-office-flex__highlight"
                          {...slideIn('up', reduceMotion, 0.1 + index * 0.07, 22)}
                        >
                          <FlexHighlightIcon variant={index === 0 ? 'meeting' : 'custom'} />
                          <span className="taxnex-office-flex__highlight-text">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </header>
                  <h3 className="taxnex-office-flex__services-h">{flex.servicesHeading[locale]}</h3>
                  <ul className="taxnex-office-flex__services">
                    {flex.selectableServices[locale].map((service, index) => (
                      <motion.li
                        key={service}
                        className="taxnex-office-flex__service"
                        {...slideIn('up', reduceMotion, 0.14 + index * 0.02, 20)}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                  <p className="taxnex-office-flex__note">{flex.pricingNote[locale]}</p>
                  <motion.div
                    className="taxnex-office-flex__cta-wrap"
                    whileHover={reduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                    transition={{ duration: 0.22, ease: EASE }}
                  >
                    <Link
                      className="taxnex-btn taxnex-btn--primary taxnex-btn--lg taxnex-office-flex__cta"
                      to="/contact"
                      state={{ serviceInterest: 'Tax & Accounting Services' }}
                    >
                      {titles.flexCta}
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            </div>
          </section>

          {/* Stats + TaxNex — same as taxnexcy */}
          <section
            className="taxnex-section taxnex-regco-section taxnex-regco-section--stats"
            aria-labelledby="tax-office-stats-h"
          >
            <div className="container taxnex-regco-stats-wrap">
              <motion.p
                id="tax-office-stats-h"
                className="taxnex-regco-stats__tagline"
                {...slideIn('up', reduceMotion, 0, 28)}
              >
                {taxnex.statsTagline[locale]}
              </motion.p>
              <ul className="taxnex-regco-stats" aria-label={taxnex.statsTagline[locale]}>
                {TAX_OFFICE_SECRETARIAL_STATS[locale].map((stat, index) => (
                  <motion.li
                    key={stat.label}
                    className="taxnex-regco-stat"
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.82, y: 16 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
                    viewport={VIEW}
                    transition={{
                      duration: 0.55,
                      ease: EASE,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                  >
                    <span className="taxnex-regco-stat__ring" aria-hidden />
                    <span className="taxnex-regco-stat__glow" aria-hidden />
                    <span className="taxnex-regco-stat__value">
                      <AnimatedCounter
                        value={stat.percent}
                        suffix="%"
                        delayMs={index * 140}
                        duration={1900}
                        className="taxnex-regco-stat__count"
                      />
                    </span>
                    <span className="taxnex-regco-stat__label">{stat.label}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.article className="taxnex-regco-taxnex" {...slideIn('up', reduceMotion, 0.1, 44)}>
                <motion.h2 className="taxnex-regco-taxnex__title" {...slideIn('left', reduceMotion, 0.16, 32)}>
                  {taxnex.title[locale]}
                </motion.h2>
                <div className="taxnex-regco-taxnex__blocks">
                  {taxnex.blocks.map((block, blockIndex) => (
                    <motion.div
                      key={block.heading.el}
                      className="taxnex-regco-taxnex__block"
                      {...slideIn(blockIndex % 2 === 0 ? 'left' : 'right', reduceMotion, 0.2 + blockIndex * 0.1, 48)}
                    >
                      <h3 className="taxnex-regco-taxnex__heading">{block.heading[locale]}</h3>
                      {block.paragraphs?.[locale].map((paragraph) => (
                        <p key={paragraph.slice(0, 40)} className="taxnex-regco-taxnex__p">
                          {paragraph}
                        </p>
                      ))}
                      {block.bullets ? (
                        <ul className="taxnex-regco-taxnex__ul">
                          {block.bullets[locale].map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </div>
          </section>

          <section className="taxnex-section taxnex-section--cta-bottom" aria-label={titles.contactCta}>
            <motion.div className="container taxnex-bottom-cta" {...slideIn('up', reduceMotion, 0, 40)}>
              <p className="taxnex-bottom-cta__label">{titles.contactCta}</p>
              <h2 className="taxnex-h2 taxnex-h2--tight">{titles.contactHeading}</h2>
              <p className="taxnex-muted">{titles.contactBody}</p>
              <Link
                className="taxnex-btn taxnex-btn--primary taxnex-btn--lg"
                to="/contact"
                state={{ serviceInterest: 'Tax & Accounting Services' }}
              >
                {titles.primaryCta}
              </Link>
              <Link className="taxnex-btn taxnex-btn--outline taxnex-btn--lg" to={taxBrandHref('/services/tax')}>
                {titles.backCta}
              </Link>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  )
}
