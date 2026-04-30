import { useCallback, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import VipServicesGrid from './VipServicesGrid'
import StoragePremiumSection from './StoragePremiumSection'
import ServiceDefaultSections from './ServiceDefaultSections'
import TaxPremiumHero from './TaxPremiumHero'
import TaxPremiumPlans from './TaxPremiumPlans'
import TaxPremiumSteps from './TaxPremiumSteps'
import TaxPremiumHowItWorks from './TaxPremiumHowItWorks'
import TaxPremiumBenefits from './TaxPremiumBenefits'
import TaxPremiumTools from './TaxPremiumTools'
import TaxPremiumSocialProof from './TaxPremiumSocialProof'

const VIP_DETAIL_HERO_IMAGE = '/images/services/vip-service/vip-hero.webp'
const VIP_PORTFOLIO_SECTION_ID = 'vip-portfolio'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const card = getServiceBySlug(slug)
  const defaultContent = slug ? getServicePageContent(slug) : undefined
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

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
                Intro
              </a>
              <a href="#tax-plans" className="tax-page-subnav__link">
                Plans
              </a>
              <a href="#tax-steps" className="tax-page-subnav__link">
                Steps
              </a>
              <Link to="/services" className="tax-page-subnav__link">
                Services
              </Link>
              <a href="#tax-how-it-works" className="tax-page-subnav__link">
                How it works
              </a>
              <a href="#tax-benefits" className="tax-page-subnav__link">
                Benefits
              </a>
              <a href="#tax-tools" className="tax-page-subnav__link">
                Free tools
              </a>
              <a href="#tax-partners" className="tax-page-subnav__link">
                Partners
              </a>
              <a href="#service-default-content" className="tax-page-subnav__link tax-page-subnav__link--cta">
                Request details
              </a>
            </nav>
          </div>
        </div>
      ) : null}

      {slug === 'storage' ? (
        <StoragePremiumSection />
      ) : slug === 'tax' ? (
        <>
          <div id="tax-hero">
            <TaxPremiumHero />
          </div>
          <div id="tax-plans">
            <TaxPremiumPlans />
          </div>
          <div id="tax-steps">
            <TaxPremiumSteps />
          </div>
          <div id="tax-how-it-works">
            <TaxPremiumHowItWorks />
          </div>
          <div id="tax-benefits">
            <TaxPremiumBenefits />
          </div>
          <div id="tax-tools">
            <TaxPremiumTools />
          </div>
          <div id="tax-partners">
            <TaxPremiumSocialProof />
          </div>
          {defaultContent ? (
            <div id="service-default-content">
              <ServiceDefaultSections content={defaultContent} serviceInterest={card.title} />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <section
            className={`service-detail-hero${isVip ? ' service-detail-hero--vip-full' : ''}`}
          >
            {isVip ? (
              <div className="service-detail-hero-bg service-detail-hero-bg--vip-img" aria-hidden>
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
