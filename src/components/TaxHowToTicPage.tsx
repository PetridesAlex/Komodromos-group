import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { taxBrandHref } from '../lib/brandPaths'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { getTaxNexAddressLine } from '../data/taxNexPageContent'
import { TAX_FOR_ALL_URL, TAX_TIC_ARTICLE_BLOCKS, TAX_TIC_HERO_IMAGE, TAX_TIC_PAGE_TITLES } from '../data/taxHowToTicPageContent'
import { getTaxServiceGuideNav } from '../data/taxTaxServiceGuideNav'
import { useReveal } from '../hooks/useReveal'
import SiteTopbar from './SiteTopbar'
import { TaxNexGuideArticleBody } from './TaxNexGuideArticleBody'
import TaxContactLink from './TaxContactLink'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEW = { once: true, amount: 0.28 } as const

export default function TaxHowToTicPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { i18n } = useTranslation()
  const location = useLocation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const taxAddressLine = getTaxNexAddressLine(locale)
  const titles = TAX_TIC_PAGE_TITLES[locale]
  const nav = getTaxServiceGuideNav(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeUp = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: VIEW,
        transition: { duration: 0.52, ease: EASE },
      }

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

        <header className="taxnex-page-hero" aria-labelledby="tax-tic-h1">
          <div className="taxnex-page-hero__bg" aria-hidden />
          <div className="container taxnex-page-hero__inner">
            <nav className="taxnex-page-hero__crumbs" aria-label="Breadcrumb">
              <Link to={taxBrandHref('/services/tax')} className="taxnex-page-hero__crumb">
                {titles.breadcrumbParent}
              </Link>
              <span className="taxnex-page-hero__crumb-sep" aria-hidden>
                /
              </span>
              <span className="taxnex-page-hero__crumb taxnex-page-hero__crumb--current">{titles.breadcrumbCurrent}</span>
            </nav>
            <motion.h1
              id="tax-tic-h1"
              className="taxnex-page-hero__title"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              {titles.h1}
            </motion.h1>
            <motion.p
              className="taxnex-page-hero__intro taxnex-muted"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
            >
              {titles.intro}
            </motion.p>
            <motion.div
              className="taxnex-page-hero__actions"
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.48, ease: EASE, delay: 0.12 }}
            >
              <a className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" href={TAX_FOR_ALL_URL} target="_blank" rel="noopener noreferrer">
                {titles.portalCta}
              </a>
              <Link className="taxnex-btn taxnex-btn--outline taxnex-btn--lg" to={taxBrandHref('/services/tax')}>
                {titles.backCta}
              </Link>
            </motion.div>
          </div>
        </header>

        <main>
          <section className="taxnex-section taxnex-section--light taxnex-tic-section" aria-labelledby="tax-tic-sidebar-h">
            <div className="container taxnex-guide">
              <motion.aside className="taxnex-guide__sidebar" {...fadeUp}>
                <h2 id="tax-tic-sidebar-h" className="taxnex-guide__sidebar-title">
                  {titles.sidebar}
                </h2>
                <nav className="taxnex-guide__nav" aria-label={titles.sidebar}>
                  <ul className="taxnex-guide__nav-list">
                    {nav.map((item) => {
                      const label = locale === 'en' ? item.labelEn : item.labelEl
                      const linkClass = `taxnex-guide__nav-link${item.current ? ' taxnex-guide__nav-link--current' : ''}`
                      return (
                        <li key={item.id}>
                          <Link className={linkClass} to={item.href} state={{ serviceInterest: 'Tax & Accounting Services' }}>
                            {label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                <div className="taxnex-guide__sidebar-media">
                  <img
                    src={TAX_TIC_HERO_IMAGE}
                    alt=""
                    width={1280}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="taxnex-guide__sidebar-img"
                  />
                </div>
              </motion.aside>

              <motion.article className="taxnex-guide__article taxnex-prose" {...fadeUp} aria-labelledby="tax-tic-h1">
                <TaxNexGuideArticleBody
                  locale={locale}
                  blocks={TAX_TIC_ARTICLE_BLOCKS}
                  afterFirstParagraph={
                    <p className="taxnex-prose__p">
                      <a href={TAX_FOR_ALL_URL} className="taxnex-prose__link" target="_blank" rel="noopener noreferrer">
                        {TAX_FOR_ALL_URL}
                      </a>
                    </p>
                  }
                />
              </motion.article>
            </div>
          </section>

          <section className="taxnex-section taxnex-section--cta-bottom" aria-label={titles.contactCta}>
            <div className="container taxnex-bottom-cta">
              <p className="taxnex-bottom-cta__label">{titles.contactCta}</p>
              <h2 className="taxnex-h2 taxnex-h2--tight">{locale === 'en' ? 'Need help with TAXISnet or TIC?' : 'Χρειάζεστε βοήθεια με TAXISnet ή Α.Φ.Μ.;'}</h2>
              <p className="taxnex-muted">
                {locale === 'en'
                  ? 'Our team can review your draft registration and documents before you submit to the portal.'
                  : 'Η ομάδα μας μπορεί να ελέγξει το προσχέδιο εγγραφής και τα δικαιολογητικά πριν την οριστική υποβολή στην πύλη.'}
              </p>
              <TaxContactLink className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" state={{ serviceInterest: 'Tax & Accounting Services' }}>
                {titles.contactCta}
              </TaxContactLink>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
