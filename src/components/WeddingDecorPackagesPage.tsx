import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingLazyImage from './WeddingLazyImage'
import ChristeningPricingGrid from './ChristeningPricingGrid'
import { useReveal } from '../hooks/useReveal'
import {
  decoWayPackages,
  decoWayPackagesPageCopy,
} from '../data/decoWayPackages'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'

const HERO_IMAGE =
  '/images/services/wedding-highlights/wedding-services/florals-decoration.webp'

export default function WeddingDecorPackagesPage() {
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const hubHref = weddingBrandHref('/services/wedding/wedding-packages')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div
      className="page wedding-page wedding-decor-packages-page"
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
        aria-labelledby="wedding-decor-packages-hero-title"
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
          <Link to={hubHref} className="wedding-christening-hero__back">
            <span className="wedding-christening-hero__back-arrow" aria-hidden>
              ←
            </span>
            <span>{t(decoWayPackagesPageCopy.backLabel)}</span>
          </Link>

          <p className="wedding-christening-hero__eyebrow">
            <span className="wedding-christening-hero__eyebrow-line" aria-hidden />
            <span>{t(decoWayPackagesPageCopy.eyebrow)}</span>
            <span className="wedding-christening-hero__eyebrow-line" aria-hidden />
          </p>

          <div className="wedding-christening-hero__headline">
            <h1
              id="wedding-decor-packages-hero-title"
              className="wedding-christening-hero__title"
            >
              <span className="wedding-christening-hero__title-line wedding-christening-hero__title-line--primary">
                {t(decoWayPackagesPageCopy.heroTitleLine1)}
              </span>
              <span className="wedding-christening-hero__title-line wedding-christening-hero__title-line--secondary">
                {t(decoWayPackagesPageCopy.heroTitleLine2)}
              </span>
            </h1>
            <span className="wedding-christening-hero__rule" aria-hidden />
            <p className="wedding-christening-hero__lead">
              {t(decoWayPackagesPageCopy.lead)}
            </p>
          </div>
        </div>
      </section>

      <section
        className="wedding-christening-catalogue"
        aria-label={t(decoWayPackagesPageCopy.title)}
      >
        <div className="wedding-christening-catalogue__backdrop" aria-hidden>
          <span className="wedding-christening-catalogue__orb wedding-christening-catalogue__orb--gold" />
          <span className="wedding-christening-catalogue__orb wedding-christening-catalogue__orb--blue" />
          <span className="wedding-christening-catalogue__orb wedding-christening-catalogue__orb--azure" />
          <span className="wedding-christening-catalogue__mesh" />
          <span className="wedding-christening-catalogue__sheen" />
          <span className="wedding-christening-catalogue__grain" />
        </div>
        <div className="container wedding-christening-catalogue__inner">
          <ChristeningPricingGrid
            packages={decoWayPackages}
            copy={decoWayPackagesPageCopy}
            idPrefix="decoway-package"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}
