import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { taxBrandHref } from '../lib/brandPaths'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  TAX_COMPANY_REGISTRATION_BENEFITS_INTRO,
  TAX_COMPANY_REGISTRATION_BENEFIT_ROWS,
  TAX_COMPANY_REGISTRATION_IMAGES,
  TAX_COMPANY_REGISTRATION_INTRO_SPLITS,
  TAX_COMPANY_REGISTRATION_PAGE_TITLES,
  TAX_COMPANY_REGISTRATION_SERVICES,
  TAX_COMPANY_REGISTRATION_STATS,
  TAX_COMPANY_REGISTRATION_TAXNEX,
  TAX_COMPANY_REGISTRATION_TAX_2026,
  type TaxCompanyRegistrationSplit,
} from '../data/taxCompanyRegistrationPageContent'
import { getTaxNexAddressLine } from '../data/taxNexPageContent'
import { useReveal } from '../hooks/useReveal'
import AnimatedCounter from './AnimatedCounter'
import SiteTopbar from './SiteTopbar'
import TaxContactLink from './TaxContactLink'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEW = { once: true, amount: 0.2 } as const

type Locale = 'en' | 'el'
type SlideDir = 'left' | 'right' | 'up'

function slideIn(
  direction: SlideDir,
  reduceMotion: boolean | null,
  delay = 0,
  distance = 52,
) {
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

function RegCoDuoCard({
  item,
  locale,
  index,
  reduceMotion,
}: {
  item: TaxCompanyRegistrationSplit
  locale: Locale
  index: number
  reduceMotion: boolean | null
}) {
  const enterFrom: SlideDir = index % 2 === 0 ? 'left' : 'right'
  const baseDelay = index * 0.14

  return (
    <motion.article
      className="taxnex-regco-duo-card"
      {...slideIn(enterFrom, reduceMotion, baseDelay)}
      whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.28, ease: EASE } }}
    >
      <motion.figure
        className="taxnex-regco-duo-card__figure"
        {...slideIn('up', reduceMotion, baseDelay + 0.06, 28)}
      >
        <img
          src={item.image}
          alt={item.imageAlt[locale]}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
        />
        <span className="taxnex-regco-duo-card__shade" aria-hidden />
      </motion.figure>
      <motion.div
        className="taxnex-regco-duo-card__body"
        {...slideIn(enterFrom === 'left' ? 'right' : 'left', reduceMotion, baseDelay + 0.1, 36)}
      >
        <h2 className="taxnex-regco-duo-card__title">{item.title[locale]}</h2>
        <p className="taxnex-regco-duo-card__text">{item.body[locale]}</p>
        {item.cta ? (
          <TaxContactLink className="taxnex-btn taxnex-btn--primary taxnex-regco-duo-card__cta" state={{ serviceInterest: 'Tax & Accounting Services' }}>
            {item.cta[locale]}
          </TaxContactLink>
        ) : null}
      </motion.div>
    </motion.article>
  )
}

function RegCoMediaRow({
  item,
  locale,
  reverse = false,
  reduceMotion,
}: {
  item: TaxCompanyRegistrationSplit
  locale: Locale
  reverse?: boolean
  reduceMotion: boolean | null
}) {
  const imageFrom: SlideDir = reverse ? 'right' : 'left'
  const copyFrom: SlideDir = reverse ? 'left' : 'right'

  return (
    <motion.div
      className={`taxnex-regco-media${reverse ? ' taxnex-regco-media--reverse' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <motion.figure
        className="taxnex-regco-media__figure"
        {...slideIn(imageFrom, reduceMotion, 0.05, 64)}
      >
        <img
          src={item.image}
          alt={item.imageAlt[locale]}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
        />
        <span className="taxnex-regco-media__shade" aria-hidden />
      </motion.figure>
      <motion.div className="taxnex-regco-media__copy" {...slideIn(copyFrom, reduceMotion, 0.14, 64)}>
        <h2 className="taxnex-regco-media__title">{item.title[locale]}</h2>
        <p className="taxnex-regco-media__body">{item.body[locale]}</p>
      </motion.div>
    </motion.div>
  )
}

export default function TaxCompanyRegistrationPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { i18n } = useTranslation()
  const locale: Locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const titles = TAX_COMPANY_REGISTRATION_PAGE_TITLES[locale]
  const taxAddressLine = getTaxNexAddressLine(locale)
  const tax2026 = TAX_COMPANY_REGISTRATION_TAX_2026
  const benefitsIntro = TAX_COMPANY_REGISTRATION_BENEFITS_INTRO
  const taxnex = TAX_COMPANY_REGISTRATION_TAXNEX

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />
      <div className="taxnex-root" lang={locale === 'en' ? 'en' : 'el'}>
        <div className="taxnex-topbar">
          <div className="container taxnex-topbar__inner">
            <span className="taxnex-topbar__pin" aria-hidden />
            <span className="taxnex-topbar__text">{taxAddressLine}</span>
          </div>
        </div>

        <header className="taxnex-page-hero taxnex-page-hero--regco" aria-labelledby="tax-regco-h1">
          <motion.div className="taxnex-regco-hero__stage" aria-hidden>
            <img
              className="taxnex-regco-hero__img"
              src={TAX_COMPANY_REGISTRATION_IMAGES.hero}
              alt=""
              width={1200}
              height={800}
              decoding="async"
              fetchPriority="high"
            />
            <div className="taxnex-regco-hero__scrim" />
            <div className="taxnex-regco-hero__frame" />
            <div className="taxnex-regco-hero__sheen" />
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
              <h1 id="tax-regco-h1" className="taxnex-regco-hero__title">
                {titles.h1}
              </h1>
              <p className="taxnex-regco-hero__intro">{titles.intro}</p>
              <div className="taxnex-regco-hero__actions">
                <TaxContactLink className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" state={{ serviceInterest: 'Tax & Accounting Services' }}>
                  {titles.secureCta}
                </TaxContactLink>
                <Link className="taxnex-btn taxnex-btn--ghost taxnex-btn--lg taxnex-regco-hero__back" to={taxBrandHref('/services/tax')}>
                  {titles.backCta}
                </Link>
              </div>
            </motion.div>
          </div>
        </header>

        <main className="taxnex-regco-main">
          {/* taxnexcy section_2 */}
          <section className="taxnex-section taxnex-section--light taxnex-regco-section" aria-label={titles.h1}>
            <motion.div className="container taxnex-regco-duo" {...slideIn('up', reduceMotion, 0, 36)}>
              {TAX_COMPANY_REGISTRATION_INTRO_SPLITS.map((item, index) => (
                <RegCoDuoCard
                  key={item.title.el}
                  item={item}
                  locale={locale}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </section>

          {/* taxnexcy section_3 */}
          <section
            className="taxnex-section taxnex-regco-section taxnex-regco-section--panel"
            aria-labelledby="tax-regco-2026-h"
          >
            <div className="container">
              <motion.article className="taxnex-regco-panel" {...slideIn('up', reduceMotion, 0, 40)}>
                <motion.h2
                  id="tax-regco-2026-h"
                  className="taxnex-regco-panel__title"
                  {...slideIn('left', reduceMotion, 0.08, 32)}
                >
                  {tax2026.title[locale]}
                </motion.h2>
                <dl className="taxnex-regco-panel__defs">
                  {tax2026.items.map((row, rowIndex) => (
                    <motion.div
                      key={row.label.el}
                      className="taxnex-regco-panel__row"
                      {...slideIn('right', reduceMotion, 0.12 + rowIndex * 0.08, 40)}
                    >
                      <dt className="taxnex-regco-panel__term">{row.label[locale]}</dt>
                      <dd className="taxnex-regco-panel__desc">{row.body[locale]}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.article>
            </div>
          </section>

          {/* taxnexcy section_4–5 bordered duo */}
          <section
            className="taxnex-section taxnex-section--light taxnex-regco-section"
            aria-label={locale === 'en' ? 'Compliance and relocation' : 'Συμμόρφωση και μεταφορά'}
          >
            <motion.div
              className="container taxnex-regco-duo taxnex-regco-duo--bordered"
              {...slideIn('up', reduceMotion, 0, 36)}
            >
              {TAX_COMPANY_REGISTRATION_SERVICES.map((item, index) => (
                <RegCoDuoCard
                  key={item.title.el}
                  item={item}
                  locale={locale}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </section>

          {/* taxnexcy section_6 benefits intro */}
          <section
            className="taxnex-section taxnex-regco-section taxnex-regco-section--benefits"
            aria-labelledby="tax-regco-benefits-h"
          >
            <div className="container">
              <motion.div
                className="taxnex-regco-benefits-intro"
                initial={reduceMotion ? false : { opacity: 0 }}
                whileInView={reduceMotion ? undefined : { opacity: 1 }}
                viewport={VIEW}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <motion.figure
                  className="taxnex-regco-benefits-intro__figure"
                  {...slideIn('left', reduceMotion, 0.06, 56)}
                >
                  <img
                    src={benefitsIntro.image}
                    alt={benefitsIntro.imageAlt[locale]}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.figure>
                <motion.div
                  className="taxnex-regco-benefits-intro__copy"
                  {...slideIn('right', reduceMotion, 0.14, 56)}
                >
                  <h2 id="tax-regco-benefits-h" className="taxnex-regco-benefits-intro__title">
                    {benefitsIntro.title[locale]}
                  </h2>
                  <p className="taxnex-regco-benefits-intro__body">{benefitsIntro.body[locale]}</p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* taxnexcy sections_7–8–9 benefit rows */}
          {TAX_COMPANY_REGISTRATION_BENEFIT_ROWS.map((item, index) => (
            <section
              key={item.title.el}
              className={`taxnex-section taxnex-regco-section${index % 2 === 0 ? ' taxnex-section--light' : ''}`}
              aria-labelledby={`tax-regco-benefit-${index}`}
            >
              <div className="container">
                <RegCoMediaRow
                  item={item}
                  locale={locale}
                  reverse={index % 2 === 1}
                  reduceMotion={reduceMotion}
                />
              </div>
            </section>
          ))}

          {/* taxnexcy section_9 px_circle_sec */}
          <section
            className="taxnex-section taxnex-regco-section taxnex-regco-section--stats"
            aria-labelledby="tax-regco-stats-h"
          >
            <div className="container taxnex-regco-stats-wrap">
              <motion.p
                id="tax-regco-stats-h"
                className="taxnex-regco-stats__tagline"
                {...slideIn('up', reduceMotion, 0, 28)}
              >
                {taxnex.statsTagline[locale]}
              </motion.p>
              <ul className="taxnex-regco-stats" aria-label={taxnex.statsTagline[locale]}>
                {TAX_COMPANY_REGISTRATION_STATS[locale].map((stat, index) => (
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
              <TaxContactLink className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" state={{ serviceInterest: 'Tax & Accounting Services' }}>
                {titles.primaryCta}
              </TaxContactLink>
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
