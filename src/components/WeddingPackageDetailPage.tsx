import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { weddingPackages } from '../data/weddingPackages'
import { weddingPackageDetails } from '../data/weddingPackageDetails'
import { weddingPackageLongContentById } from '../data/weddingBasicPackageContent'
import NotFoundPage from './NotFoundPage'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'

export default function WeddingPackageDetailPage() {
  const pageRef = useReveal()
  const { packageId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  const packageTier = useMemo(
    () => weddingPackages.find((tier) => tier.id === packageId),
    [packageId]
  )

  if (!packageTier) {
    return <NotFoundPage />
  }

  const detail = weddingPackageDetails[packageTier.id]
  const longContent = weddingPackageLongContentById[packageTier.id]
  const ordered = weddingPackages.slice().sort((a, b) => a.sortOrder - b.sortOrder)
  const index = ordered.findIndex((tier) => tier.id === packageTier.id)
  const prevTier = index > 0 ? ordered[index - 1] : null
  const nextTier = index < ordered.length - 1 ? ordered[index + 1] : null

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [packageTier.id])

  return (
    <div className="page wedding-page wedding-package-detail-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />

      <section className="wedding-package-detail-hero">
        <div className="wedding-package-detail-hero__bg" aria-hidden />
        <div className="container wedding-package-detail-hero__content">
          <div className="wedding-package-detail-hero__kicker">
            <span className="wedding-package-detail-hero__eyebrow">
              Wedding package {String(packageTier.sortOrder).padStart(2, '0')}
            </span>
            <span className="wedding-package-detail-hero__rule" aria-hidden />
          </div>

          <h1 className="wedding-package-detail-hero__title">
            {longContent ? longContent.title : packageTier.name}
          </h1>

          {longContent ? (
            <p className="wedding-package-detail-hero__subtitle">{longContent.subtitle}</p>
          ) : null}

          <p className="wedding-package-detail-hero__title-el" lang="el">
            {packageTier.nameEl}
          </p>

          <div className="wedding-package-detail-hero__price-row">
            <p className="wedding-package-detail-hero__price">
              {longContent ? longContent.priceDisplay : packageTier.priceDisplay}
            </p>
            <span className="wedding-package-detail-hero__price-note">Investment from</span>
          </div>

          <div className="wedding-package-detail-hero__copy">
            <p className="wedding-package-detail-hero__summary">{detail.summary}</p>
            <p className="wedding-package-detail-hero__summary-el" lang="el">
              {detail.summaryEl}
            </p>
          </div>

          <div className="wedding-package-detail-hero__actions">
            <Link
              to="/contact"
              state={{ serviceInterest: 'Wedding Services', weddingPackage: packageTier.name }}
              className="wedding-package-detail-hero__action wedding-package-detail-hero__action--primary"
            >
              <span>Book consultation</span>
            </Link>
            <Link
              to={weddingBrandHref('/services/wedding#wedding-packages-heading')}
              className="wedding-package-detail-hero__action wedding-package-detail-hero__action--ghost"
            >
              <span>Back to packages</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="wedding-package-detail-content">
        <div className="container wedding-package-detail-content__grid">
          <article className="wedding-package-detail-panel reveal reveal-delay-1">
            <h2 className="wedding-package-detail-panel__title">Ideal for</h2>
            <p className="wedding-package-detail-panel__copy">{detail.idealFor}</p>
            <p className="wedding-package-detail-panel__copy-el" lang="el">
              {detail.idealForEl}
            </p>
            <div className="wedding-package-detail-panel__meta">
              <p>{detail.planningWindow}</p>
              <p lang="el">{detail.planningWindowEl}</p>
            </div>
          </article>

          <article className="wedding-package-detail-panel reveal reveal-delay-2">
            <h2 className="wedding-package-detail-panel__title">Included scope</h2>
            <ul className="wedding-package-detail-panel__list">
              {detail.inclusions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="container wedding-package-detail-nav reveal reveal-delay-3">
          {prevTier ? (
            <Link
              to={weddingBrandHref(`/services/wedding/packages/${prevTier.id}`)}
              className="wedding-package-detail-nav__link"
            >
              <span>Previous</span>
              <strong>{prevTier.name}</strong>
            </Link>
          ) : (
            <div />
          )}

          {nextTier ? (
            <Link
              to={weddingBrandHref(`/services/wedding/packages/${nextTier.id}`)}
              className="wedding-package-detail-nav__link wedding-package-detail-nav__link--next"
            >
              <span>Next</span>
              <strong>{nextTier.name}</strong>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {longContent ? (
          <div
            className={`container wedding-basic-package reveal reveal-delay-4 wedding-basic-package--${packageTier.id}`}
          >
            <section className="wedding-basic-package__intro">
              <h2>Package includes</h2>
              <ul className="wedding-basic-package__includes">
                {longContent.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="wedding-basic-package__contact">
                For appointments or more information,{' '}
                <Link to="/contact" state={{ serviceInterest: 'Wedding Services' }}>
                  contact our team
                </Link>
                .
              </p>
            </section>

            <section className="wedding-basic-package__about">
              <h2>{longContent.aboutTitle}</h2>
              <p>{longContent.aboutCopy}</p>
            </section>

            <div className="wedding-basic-package__sections">
              {longContent.sections.map((section) => (
                <article key={section.title} className="wedding-basic-package__section-card">
                  <h3>{section.title}</h3>
                  {section.intro ? <p>{section.intro}</p> : null}
                  {section.items ? (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.groups?.map((group) => (
                    <div key={group.title} className="wedding-basic-package__subgroup">
                      <h4>{group.title}</h4>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              ))}
            </div>

            <section className="wedding-basic-package__important">
              <h3>Important</h3>
              <p>{longContent.importantNote}</p>
            </section>
          </div>
        ) : null}
      </section>

      <Footer />
    </div>
  )
}
