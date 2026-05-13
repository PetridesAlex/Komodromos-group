import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import { getTaxNexAddressLine } from '../data/taxNexPageContent'
import { getTaxServiceGuideNav } from '../data/taxTaxServiceGuideNav'
import {
  TAX_CLEARANCES_ARTICLE_BLOCKS,
  TAX_CLEARANCES_PAGE_TITLES,
} from '../data/taxClearancesPageContent'
import { useReveal } from '../hooks/useReveal'
import SiteTopbar from './SiteTopbar'
import { TaxNexGuideArticleBody } from './TaxNexGuideArticleBody'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEW = { once: true, amount: 0.28 } as const

export default function TaxClearancesPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { i18n } = useTranslation()
  const location = useLocation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const taxAddressLine = getTaxNexAddressLine(locale)
  const titles = TAX_CLEARANCES_PAGE_TITLES[locale]
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

        <header className="taxnex-page-hero" aria-labelledby="tax-clear-h1">
          <div className="taxnex-page-hero__bg" aria-hidden />
          <div className="container taxnex-page-hero__inner">
            <nav className="taxnex-page-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/services/tax" className="taxnex-page-hero__crumb">
                {titles.breadcrumbParent}
              </Link>
              <span className="taxnex-page-hero__crumb-sep" aria-hidden>
                /
              </span>
              <span className="taxnex-page-hero__crumb taxnex-page-hero__crumb--current">{titles.breadcrumbCurrent}</span>
            </nav>
            <motion.h1
              id="tax-clear-h1"
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
              <Link
                className="taxnex-btn taxnex-btn--primary taxnex-btn--lg"
                to="/contact"
                state={{ serviceInterest: 'Tax & Accounting Services' }}
              >
                {titles.primaryCta}
              </Link>
              <Link className="taxnex-btn taxnex-btn--outline taxnex-btn--lg" to="/services/tax">
                {titles.backCta}
              </Link>
            </motion.div>
          </div>
        </header>

        <main>
          <section className="taxnex-section taxnex-section--light taxnex-tic-section" aria-labelledby="tax-clear-sidebar-h">
            <div className="container taxnex-guide">
              <motion.aside className="taxnex-guide__sidebar" {...fadeUp}>
                <h2 id="tax-clear-sidebar-h" className="taxnex-guide__sidebar-title">
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
              </motion.aside>

              <motion.article
                className="taxnex-guide__article taxnex-prose taxnex-prose--premium-guide"
                {...fadeUp}
                aria-labelledby="tax-clear-h1"
              >
                <TaxNexGuideArticleBody locale={locale} blocks={TAX_CLEARANCES_ARTICLE_BLOCKS} />
              </motion.article>
            </div>
          </section>

          <section className="taxnex-section taxnex-section--cta-bottom" aria-label={titles.contactCta}>
            <div className="container taxnex-bottom-cta">
              <p className="taxnex-bottom-cta__label">{titles.contactCta}</p>
              <h2 className="taxnex-h2 taxnex-h2--tight">
                {locale === 'en'
                  ? 'Need help with your tax clearance certificate?'
                  : 'Χρειάζεστε βοήθεια με το πιστοποιητικό φορολογικής ενημερότητας;'}
              </h2>
              <p className="taxnex-muted">
                {locale === 'en'
                  ? 'We can help you prepare your filings, liaise with the Tax Department, and obtain your clearance certificate.'
                  : 'Μπορούμε να σας βοηθήσουμε στην προετοιμασία των δηλώσεών σας, στην επικοινωνία με το Τμήμα Φορολογίας και στην απόκτηση του πιστοποιητικού ενημερότητας.'}
              </p>
              <Link className="taxnex-btn taxnex-btn--primary taxnex-btn--lg" to="/contact" state={{ serviceInterest: 'Tax & Accounting Services' }}>
                {titles.primaryCta}
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
