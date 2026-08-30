import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingLazyImage from './WeddingLazyImage'
import { useReveal } from '../hooks/useReveal'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { weddingPackagesHubCopy } from '../data/weddingPackagesHub'

export default function WeddingPackagesHubPage() {
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const homeHref = weddingBrandHref('/services/wedding')
  const copy = weddingPackagesHubCopy

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="page wedding-page wedding-packages-hub-page" ref={pageRef} lang={htmlLang}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <div className="wedding-language-switcher">
        <LanguageSwitcher dynamic />
      </div>

      <section className="wedding-packages-hub-hero" aria-labelledby="wedding-packages-hub-title">
        <div className="wedding-packages-hub-hero__backdrop" aria-hidden>
          <span className="wedding-packages-hub-hero__orb wedding-packages-hub-hero__orb--gold" />
          <span className="wedding-packages-hub-hero__orb wedding-packages-hub-hero__orb--blue" />
          <span className="wedding-packages-hub-hero__mesh" />
          <span className="wedding-packages-hub-hero__grain" />
          <span className="wedding-packages-hub-hero__horizon" />
        </div>
        <div className="container wedding-packages-hub-hero__content">
          <Link to={homeHref} className="wedding-packages-hub-hero__back">
            <span className="wedding-packages-hub-hero__back-arrow" aria-hidden>
              ←
            </span>
            <span>{t(copy.backToAtelier)}</span>
          </Link>

          <p className="wedding-packages-hub-hero__eyebrow">
            <span className="wedding-packages-hub-hero__eyebrow-line" aria-hidden />
            <span>{t(copy.eyebrow)}</span>
            <span className="wedding-packages-hub-hero__eyebrow-line" aria-hidden />
          </p>

          <div className="wedding-packages-hub-hero__headline">
            <h1 id="wedding-packages-hub-title" className="wedding-packages-hub-hero__title">
              <span className="wedding-packages-hub-hero__title-line wedding-packages-hub-hero__title-line--brand">
                {t(copy.heroTitleLine1)}
              </span>
              <span className="wedding-packages-hub-hero__title-line wedding-packages-hub-hero__title-line--display">
                {t(copy.heroTitleLine2)}
              </span>
            </h1>
            <span className="wedding-packages-hub-hero__rule" aria-hidden />
            <p className="wedding-packages-hub-hero__lead">{t(copy.lead)}</p>
          </div>
        </div>
      </section>

      <section className="wedding-packages-hub-grid" aria-label={t(copy.title)}>
        <div className="container wedding-packages-hub-grid__inner">
          {copy.cards.map((card, index) => (
            <Link
              key={card.id}
              to={weddingBrandHref(card.href)}
              className={`wedding-packages-hub-card wedding-packages-hub-card--${card.tone} reveal reveal-delay-${Math.min(index + 1, 3)}`}
              aria-label={t(copy.openCardAria).replace('{{title}}', t(card.title))}
            >
              <div className="wedding-packages-hub-card__media">
                <WeddingLazyImage
                  src={card.image}
                  alt={getServiceCoverImageAlt(card.image, t(card.title))}
                  className="wedding-packages-hub-card__img"
                />
                <span className="wedding-packages-hub-card__scrim" aria-hidden />
                <span className="wedding-packages-hub-card__sheen" aria-hidden />
              </div>
              <div className="wedding-packages-hub-card__body">
                <span className="wedding-packages-hub-card__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="wedding-packages-hub-card__title">{t(card.title)}</h2>
                <p className="wedding-packages-hub-card__tagline">{t(card.tagline)}</p>
                <span className="wedding-packages-hub-card__cta" aria-hidden>
                  <span className="wedding-packages-hub-card__cta-ring" />
                  <span className="wedding-packages-hub-card__cta-icon">+</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
