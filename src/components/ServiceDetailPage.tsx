import { useCallback, useEffect } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import { TAX_NEX_FAQ_SECTION_ID } from '../data/taxNexFaqData'
import VipServicesGrid from './VipServicesGrid'
import StoragePremiumSection from './StoragePremiumSection'
import ServiceDefaultSections from './ServiceDefaultSections'
import TaxNexCyprusPage from './TaxNexCyprusPage'

const VIP_DETAIL_HERO_IMAGE = '/images/services/vip-service/vip-hero.webp'
const VIP_PORTFOLIO_SECTION_ID = 'vip-portfolio'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const card = getServiceBySlug(slug)
  const defaultContent = slug ? getServicePageContent(slug) : undefined
  const pageRef = useReveal()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (id) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const t = window.setTimeout(
        () => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          }
        },
        id === 'tax-faq' ? 100 : 0,
      )
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug, location.hash])

  if (!card) {
    return <Navigate to="/" replace />
  }

  const isVip = slug === 'vip'
  const heroBackgroundImage = isVip ? VIP_DETAIL_HERO_IMAGE : card.image

  const scrollToVipPortfolio = useCallback(() => {
    const el = document.getElementById(VIP_PORTFOLIO_SECTION_ID)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/services"
      />
      {slug === 'storage' ? (
        <div className="storage-page-subnav" aria-label="Storage page navigation">
          <div className="container">
            <nav className="storage-page-subnav__inner">
              <a href="#storage-parallax" className="storage-page-subnav__link">
                Overview
              </a>
              <a href="#storage-offers" className="storage-page-subnav__link">
                Storage Options
              </a>
              <a href="#storage-features" className="storage-page-subnav__link">
                Features
              </a>
              <a href="#storage-rates" className="storage-page-subnav__link">
                Monthly Rates
              </a>
              <a href="#storage-contact" className="storage-page-subnav__link storage-page-subnav__link--cta">
                Contact
              </a>
            </nav>
          </div>
        </div>
      ) : slug === 'tax' ? (
        <div className="tax-page-subnav" aria-label="Tax page navigation">
          <div className="container">
            <nav className="tax-page-subnav__inner">
              <a href="#tax-hero" className="tax-page-subnav__link">
                Εισαγωγή
              </a>
              <Link to="/services/tax/services" className="tax-page-subnav__link">
                Υπηρεσίες
              </Link>
              <a href="#tax-pricing" className="tax-page-subnav__link">
                Πακέτα
              </a>
              <a href="#tax-mission" className="tax-page-subnav__link">
                Στόχος
              </a>
              <a href="#tax-steps" className="tax-page-subnav__link">
                Βήματα
              </a>
              <div className="tax-page-subnav__tools">
                <a href="#tax-tools" className="tax-page-subnav__link">
                  Εργαλεία
                </a>
                <div className="tax-page-subnav__tools-menu" role="menu" aria-label="Tax tools menu">
                  <Link
                    to="/services/tax/income-tax-calculator"
                    className="tax-page-subnav__tools-item"
                    role="menuitem"
                  >
                    ΥΠΟΛΟΓΙΣΜΟΣ ΦΟΡΟΥ ΕΙΣΟΔΗΜΑΤΟΣ
                  </Link>
                  <a href="#tax-tools" className="tax-page-subnav__tools-item" role="menuitem">
                    ΕΛΕΓΧΟΣ ΦΟΡΟΛΟΓΙΚΗΣ ΚΑΤΟΙΚΙΑΣ
                  </a>
                  <Link
                    to="/services/tax/transfer-fees-calculator"
                    className="tax-page-subnav__tools-item"
                    role="menuitem"
                  >
                    ΥΠΟΛΟΓΙΣΜΟΣ ΤΕΛΩΝ ΜΕΤΑΒΙΒΑΣΗΣ
                  </Link>
                  <Link
                    to="/services/tax/income-tax-calculator"
                    className="tax-page-subnav__tools-item"
                    role="menuitem"
                  >
                    20% ΦΟΡΟΑΠΑΛΛΑΓΗ
                  </Link>
                  <Link
                    to="/services/tax/income-tax-calculator"
                    className="tax-page-subnav__tools-item"
                    role="menuitem"
                  >
                    50% ΦΟΡΟΑΠΑΛΛΑΓΗ
                  </Link>
                  <a href="#tax-tools" className="tax-page-subnav__tools-item" role="menuitem">
                    FORM TD59
                  </a>
                </div>
              </div>
              <Link to={`/services/tax#${TAX_NEX_FAQ_SECTION_ID}`} className="tax-page-subnav__link">
                Συχνές ερωτήσεις
              </Link>
              <a href="#tax-newsletter" className="tax-page-subnav__link">
                Ενημέρωση
              </a>
              <a href="#tax-contact" className="tax-page-subnav__link tax-page-subnav__link--cta">
                Αίτημα
              </a>
            </nav>
          </div>
        </div>
      ) : null}

      {slug === 'storage' ? (
        <StoragePremiumSection />
      ) : slug === 'tax' ? (
        <TaxNexCyprusPage />
      ) : (
        <>
          <section
            className={`service-detail-hero${isVip ? ' service-detail-hero--vip-full' : ''}`}
            data-hero-parallax-root
          >
            {isVip ? (
              <div
                className="service-detail-hero-bg service-detail-hero-bg--vip-img"
                aria-hidden
                data-hero-parallax
              >
                <img
                  className="service-detail-hero-bg__img"
                  src={VIP_DETAIL_HERO_IMAGE}
                  alt=""
                  width={1920}
                  height={1080}
                  decoding="async"
                  fetchPriority="high"
                  sizes="100vw"
                />
              </div>
            ) : (
              <div
                className="service-detail-hero-bg"
                aria-hidden
                data-hero-parallax
                style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
              />
            )}
            <div
              className={`service-detail-hero-scrim${isVip ? ' service-detail-hero-scrim--vip' : ''}`}
            />
            <div className="service-detail-hero-glow service-detail-hero-glow-1" />
            <div className="service-detail-hero-glow service-detail-hero-glow-2" />
            <div className="container service-detail-hero-inner">
              <p className="eyebrow reveal">{card.eyebrow}</p>
              <h1 className="reveal reveal-delay-1">{card.title}</h1>
              <p className="service-detail-hero-sub reveal reveal-delay-2">{card.description}</p>
              {isVip ? (
                <div className="service-detail-hero-cta reveal reveal-delay-3">
                  <button
                    type="button"
                    className="service-detail-hero-cta__btn"
                    onClick={scrollToVipPortfolio}
                    aria-label="Scroll to concierge portfolio and services"
                  >
                    Explore portfolio
                  </button>
                </div>
              ) : null}
            </div>
          </section>

          {slug === 'vip' && <VipServicesGrid />}

          {defaultContent && slug !== 'vip' ? (
            <ServiceDefaultSections content={defaultContent} serviceInterest={card.title} />
          ) : null}
        </>
      )}

      <Footer />
    </div>
  )
}
