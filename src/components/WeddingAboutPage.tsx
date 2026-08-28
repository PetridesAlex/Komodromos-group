import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingAboutManifesto from './WeddingAboutManifesto'
import WeddingAboutServicesCarousel from './WeddingAboutServicesCarousel'
import WeddingPlanEnquiryModal from './WeddingPlanEnquiryModal'
import WeddingLazyImage from './WeddingLazyImage'
import { useReveal } from '../hooks/useReveal'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import { weddingAboutCopy } from '../data/weddingPageCopy'
import { weddingAboutManifestoMeta } from '../data/weddingAboutManifesto'

const ABOUT_HERO_IMAGE =
  '/images/services/wedding-highlights/about-us/luxury-wedding-couple-vintage-rolls-royce-cyprus.webp'

export default function WeddingAboutPage() {
  const pageRef = useReveal()
  const [planEnquiryOpen, setPlanEnquiryOpen] = useState(false)
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const homeHref = weddingBrandHref('/services/wedding')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="page wedding-page wedding-about-page" ref={pageRef} lang={htmlLang}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <div className="wedding-language-switcher">
        <LanguageSwitcher dynamic />
      </div>

      <section className="wedding-about-page__hero" aria-labelledby="wedding-about-page-heading">
        <div className="wedding-about-page__hero-media" aria-hidden>
          <WeddingLazyImage
            src={ABOUT_HERO_IMAGE}
            alt=""
            priority
            className="wedding-about-page__hero-img"
          />
          <span className="wedding-about-page__hero-scrim" />
          <span className="wedding-about-page__hero-grain" />
        </div>

        <div className="container wedding-about-page__hero-content">
          <Link to={homeHref} className="wedding-about-page__back">
            <span className="wedding-about-page__back-arrow" aria-hidden>
              ←
            </span>
            <span className="wedding-about-page__back-label">
              {t(weddingAboutCopy.backToAtelier)}
            </span>
          </Link>

          <p className="wedding-about-page__eyebrow">
            <span className="wedding-about-page__eyebrow-line" aria-hidden />
            <span className="wedding-about-page__eyebrow-text">
              {t(weddingAboutCopy.eyebrow)}
            </span>
            <span className="wedding-about-page__eyebrow-line" aria-hidden />
          </p>
          <h1 id="wedding-about-page-heading" className="wedding-about-page__title">
            <span className="wedding-about-page__title-text">
              {t(weddingAboutManifestoMeta.brand)}
            </span>
          </h1>
          <p className="wedding-about-page__tagline">
            {t(weddingAboutManifestoMeta.tagline)}
          </p>
          <span className="wedding-about-page__rule" aria-hidden />
          <p className="wedding-about-page__lead">{t(weddingAboutCopy.lead)}</p>
        </div>
      </section>

      <section className="wedding-about-page__body" aria-label={t(weddingAboutCopy.pageTitle)}>
        <WeddingAboutServicesCarousel />
        <div className="wedding-about-page__body-inner">
          <WeddingAboutManifesto
            standalone
            onEnquire={() => setPlanEnquiryOpen(true)}
          />
        </div>
      </section>

      <Footer />

      <WeddingPlanEnquiryModal
        open={planEnquiryOpen}
        onClose={() => setPlanEnquiryOpen(false)}
      />
    </div>
  )
}
