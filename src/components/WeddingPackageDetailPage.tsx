import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import { useReveal } from '../hooks/useReveal'
import {
  getPackagesForCategory,
  getWeddingPackageCategory,
  weddingPackages,
} from '../data/weddingPackages'
import { weddingPackageDetails } from '../data/weddingPackageDetails'
import {
  resolveWeddingPackageLongContent,
  weddingPackageLongContentById,
} from '../data/weddingBasicPackageContent'
import NotFoundPage from './NotFoundPage'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import { weddingDetailPageCopy } from '../data/weddingPageCopy'

export default function WeddingPackageDetailPage() {
  const pageRef = useReveal()
  const { packageId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const { locale, t } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  const packageTier = useMemo(
    () => weddingPackages.find((tier) => tier.id === packageId),
    [packageId]
  )

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [packageTier?.id])

  if (!packageTier) {
    return <NotFoundPage />
  }

  const detail = weddingPackageDetails[packageTier.id]
  const localizedLongContent = weddingPackageLongContentById[packageTier.id]
  const longContent = localizedLongContent
    ? resolveWeddingPackageLongContent(localizedLongContent, locale)
    : undefined
  const category = getWeddingPackageCategory(packageTier.category)
  const ordered = getPackagesForCategory(packageTier.category)
  const index = ordered.findIndex((tier) => tier.id === packageTier.id)
  const prevTier = index > 0 ? ordered[index - 1] : null
  const nextTier = index < ordered.length - 1 ? ordered[index + 1] : null
  const categoryHref = weddingBrandHref(
    `/services/wedding/categories/${packageTier.category}`,
  )
  const heroTitle = longContent ? longContent.title : t(packageTier.name)
  const titleMatch = heroTitle.match(/^("[^"]+"|«[^»]+»)\s*(.*)$/)
  const titleMark = titleMatch?.[1] ?? null
  const titleRest = titleMatch?.[2]?.trim() || null

  return (
    <div
      className="page wedding-page wedding-package-detail-page"
      ref={pageRef}
      lang={locale}
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

      <section className="wedding-package-detail-hero">
        <div className="wedding-package-detail-hero__bg" aria-hidden />
        <div className="container wedding-package-detail-hero__content">
          <div className="wedding-package-detail-hero__kicker">
            <span className="wedding-package-detail-hero__eyebrow">
              {category ? t(category.name) : t(weddingDetailPageCopy.packageEyebrow)}{' '}
              {String(packageTier.sortOrder).padStart(2, '0')}
            </span>
            <span className="wedding-package-detail-hero__rule" aria-hidden />
          </div>

          <h1 className="wedding-package-detail-hero__title">
            {titleMark && titleRest ? (
              <span className="wedding-package-detail-hero__title-stack">
                <span className="wedding-package-detail-hero__title-mark">{titleMark}</span>
                <span className="wedding-package-detail-hero__title-rest">{titleRest}</span>
              </span>
            ) : (
              heroTitle
            )}
          </h1>

          {longContent ? (
            <p className="wedding-package-detail-hero__subtitle">{longContent.subtitle}</p>
          ) : null}

          <div className="wedding-package-detail-hero__price-row">
            <p className="wedding-package-detail-hero__price">
              {longContent ? longContent.priceDisplay : t(packageTier.priceDisplay)}
            </p>
            <span className="wedding-package-detail-hero__price-note">
              {t(weddingDetailPageCopy.investmentFrom)}
            </span>
          </div>

          <div className="wedding-package-detail-hero__copy">
            <p className="wedding-package-detail-hero__summary">{t(detail.summary)}</p>
          </div>

          <div className="wedding-package-detail-hero__actions">
            <Link
              to="/contact"
              state={{ serviceInterest: 'Wedding Services', weddingPackage: t(packageTier.name) }}
              className="wedding-package-detail-hero__action wedding-package-detail-hero__action--primary"
            >
              <span>{t(weddingDetailPageCopy.bookConsultation)}</span>
            </Link>
            <Link
              to={categoryHref}
              className="wedding-package-detail-hero__action wedding-package-detail-hero__action--ghost"
            >
              <span>
                {t(weddingDetailPageCopy.backTo).replace(
                  '{{title}}',
                  category ? t(category.name) : t(weddingDetailPageCopy.packageEyebrow),
                )}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="wedding-package-detail-content">
        <div className="container wedding-package-detail-content__grid">
          <article className="wedding-package-detail-panel reveal reveal-delay-1">
            <h2 className="wedding-package-detail-panel__title">
              {t(weddingDetailPageCopy.idealFor)}
            </h2>
            <p className="wedding-package-detail-panel__copy">{t(detail.idealFor)}</p>
            <div className="wedding-package-detail-panel__meta">
              <p>{t(detail.planningWindow)}</p>
            </div>
          </article>

          <article className="wedding-package-detail-panel reveal reveal-delay-2">
            <h2 className="wedding-package-detail-panel__title">
              {t(weddingDetailPageCopy.includedScope)}
            </h2>
            <ul className="wedding-package-detail-panel__list">
              {detail.inclusions.map((item) => (
                <li key={item.en}>{t(item)}</li>
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
              <span>{t(weddingDetailPageCopy.previous)}</span>
              <strong>{t(prevTier.name)}</strong>
            </Link>
          ) : (
            <div />
          )}

          {nextTier ? (
            <Link
              to={weddingBrandHref(`/services/wedding/packages/${nextTier.id}`)}
              className="wedding-package-detail-nav__link wedding-package-detail-nav__link--next"
            >
              <span>{t(weddingDetailPageCopy.next)}</span>
              <strong>{t(nextTier.name)}</strong>
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
              <h2>{t(weddingDetailPageCopy.packageIncludes)}</h2>
              <ul className="wedding-basic-package__includes">
                {longContent.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="wedding-basic-package__contact">
                {t(weddingDetailPageCopy.contactPrefix)}
                <Link to="/contact" state={{ serviceInterest: 'Wedding Services' }}>
                  {t(weddingDetailPageCopy.contactLink)}
                </Link>
                {t(weddingDetailPageCopy.contactSuffix)}
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
              <h3>{t(weddingDetailPageCopy.important)}</h3>
              <p>{longContent.importantNote}</p>
            </section>
          </div>
        ) : null}
      </section>

      <Footer />
    </div>
  )
}
