import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { useTranslation } from 'react-i18next'
import {
  type TaxCorporateServiceId,
  getTaxCorporateServicePage,
} from '../data/taxNexCorporateServicesContent'
import { getTaxNexAddressLine } from '../data/taxNexPageContent'
import { useReveal } from '../hooks/useReveal'
import SiteTopbar from './SiteTopbar'

const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  serviceId: TaxCorporateServiceId
}

export default function TaxNexCorporateServiceDetailPage({ serviceId }: Props) {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { i18n } = useTranslation()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const taxAddressLine = getTaxNexAddressLine(locale)
  const page = getTaxCorporateServicePage(serviceId)
  const copy = page[locale]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [serviceId])

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

        <header className="taxnex-page-hero taxnex-page-hero--corp" aria-labelledby="tax-corp-detail-h1">
          <div className="taxnex-page-hero__bg" aria-hidden />
          <div className="container taxnex-page-hero__inner">
            <nav className="taxnex-page-hero__crumbs" aria-label="Breadcrumb">
              <Link to="/services/tax" className="taxnex-page-hero__crumb">
                TaxNex Cyprus
              </Link>
              <span className="taxnex-page-hero__crumb-sep" aria-hidden>
                /
              </span>
              <span className="taxnex-page-hero__crumb taxnex-page-hero__crumb--current">
                {copy.breadcrumbCurrent}
              </span>
            </nav>
            <motion.h1
              id="tax-corp-detail-h1"
              className="taxnex-page-hero__title"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              {copy.h1}
            </motion.h1>
            <motion.p
              className="taxnex-page-hero__intro taxnex-muted"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.06 }}
            >
              {copy.intro}
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
                {copy.primaryCta}
              </Link>
              <Link className="taxnex-btn taxnex-btn--outline taxnex-btn--lg" to="/services/tax">
                {copy.backCta}
              </Link>
            </motion.div>
          </div>
          <div className="taxnex-page-hero__media taxnex-page-hero__media--corp" aria-hidden>
            <img src={page.heroImage} alt="" width={1200} height={762} decoding="async" />
          </div>
        </header>

        <main>
          <section className="taxnex-section taxnex-section--light taxnex-corp-detail" aria-labelledby="tax-corp-placeholder-h">
            <div className="container">
              <motion.article
                className="taxnex-corp-detail__panel"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.52, ease: EASE, delay: 0.08 }}
              >
                <h2 id="tax-corp-placeholder-h" className="taxnex-corp-detail__title">
                  {copy.placeholderTitle}
                </h2>
                <p className="taxnex-corp-detail__body">{copy.placeholderBody}</p>
              </motion.article>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
