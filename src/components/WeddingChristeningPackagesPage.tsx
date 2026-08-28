import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingLazyImage from './WeddingLazyImage'
import ChristeningPricingGrid from './ChristeningPricingGrid'
import { useReveal } from '../hooks/useReveal'
import { christeningPackagesPageCopy } from '../data/christeningPackages'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'

const HERO_IMAGE =
  '/images/services/wedding-highlights/wedding-christening-packages/christening-packages.webp'

export default function WeddingChristeningPackagesPage() {
  const pageRef = useReveal()
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
    <div
      className="page wedding-page wedding-christening-packages-page"
      ref={pageRef}
      lang={htmlLang}
    >
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <div className="wedding-language-switcher">
        <LanguageSwitcher dynamic />
      </div>

      <section
        className="wedding-christening-hero"
        aria-labelledby="wedding-christening-hero-title"
      >
        <div className="wedding-christening-hero__media" aria-hidden>
          <WeddingLazyImage
            src={HERO_IMAGE}
            alt=""
            priority
            className="wedding-christening-hero__img"
          />
          <span className="wedding-christening-hero__scrim" />
          <span className="wedding-christening-hero__grain" />
        </div>

        <div className="container wedding-christening-hero__content">
          <Link to={homeHref} className="wedding-christening-hero__back">
            <span className="wedding-christening-hero__back-arrow" aria-hidden>
              ←
            </span>
            <span>{t(christeningPackagesPageCopy.backLabel)}</span>
          </Link>

          <p className="wedding-christening-hero__eyebrow">
            <span className="wedding-christening-hero__eyebrow-line" aria-hidden />
            <span>{t(christeningPackagesPageCopy.eyebrow)}</span>
            <span className="wedding-christening-hero__eyebrow-line" aria-hidden />
          </p>

          <div className="wedding-christening-hero__headline">
            <h1
              id="wedding-christening-hero-title"
              className="wedding-christening-hero__title"
            >
              <span className="wedding-christening-hero__title-line wedding-christening-hero__title-line--primary">
                {t(christeningPackagesPageCopy.heroTitleLine1)}
              </span>
              <span className="wedding-christening-hero__title-line wedding-christening-hero__title-line--secondary">
                {t(christeningPackagesPageCopy.heroTitleLine2)}
              </span>
            </h1>
            <span className="wedding-christening-hero__rule" aria-hidden />
            <p className="wedding-christening-hero__lead">
              {t(christeningPackagesPageCopy.lead)}
            </p>
          </div>
        </div>
      </section>

      <section
        className="wedding-christening-catalogue"
        aria-label={t(christeningPackagesPageCopy.title)}
      >
        <div className="container wedding-christening-catalogue__inner">
          <ChristeningPricingGrid />
        </div>
      </section>

      <Footer />
    </div>
  )
}
