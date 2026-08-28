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
import WeddingLazyImage from './WeddingLazyImage'
import WeddingLazyReveal from './WeddingLazyReveal'
import WeddingPackageLongContentBlock from './WeddingPackageLongContent'
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
  const summaryText = detail ? t(detail.summary) : t(packageTier.tagline)

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
        <div className="wedding-package-detail-hero__bg" aria-hidden>
          <WeddingLazyImage
            src={packageTier.image}
            alt=""
            aria-hidden
            priority
            className="wedding-package-detail-hero__photo"
          />
          <span className="wedding-package-detail-hero__mesh" />
          <span className="wedding-package-detail-hero__glow wedding-package-detail-hero__glow--gold" />
          <span className="wedding-package-detail-hero__glow wedding-package-detail-hero__glow--blue" />
        </div>
        <div className="wedding-package-detail-hero__scrim" aria-hidden />
        <div className="container wedding-package-detail-hero__content wedding-package-detail-hero__content--enter">
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

          <div className="wedding-package-detail-hero__spotlight">
            <div className="wedding-package-detail-hero__investment">
              <span className="wedding-package-detail-hero__price-note">
                {t(weddingDetailPageCopy.investmentFrom)}
              </span>
              <p className="wedding-package-detail-hero__price">
                {longContent ? longContent.priceDisplay : t(packageTier.priceDisplay)}
              </p>
            </div>
            <span className="wedding-package-detail-hero__spotlight-rule" aria-hidden />
            <p className="wedding-package-detail-hero__summary">{summaryText}</p>
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
        <div className="wedding-package-detail-content__ambient" aria-hidden>
          <span className="wedding-package-detail-content__orb wedding-package-detail-content__orb--one" />
          <span className="wedding-package-detail-content__orb wedding-package-detail-content__orb--two" />
        </div>

        <div className="container wedding-package-detail-content__grid">
          {detail ? (
            <WeddingLazyReveal as="article" className="wedding-package-detail-panel" delay={0}>
              <h2 className="wedding-package-detail-panel__title">
                {t(weddingDetailPageCopy.idealFor)}
              </h2>
              <p className="wedding-package-detail-panel__copy">{t(detail.idealFor)}</p>
              <div className="wedding-package-detail-panel__meta">
                <p>{t(detail.planningWindow)}</p>
              </div>
            </WeddingLazyReveal>
          ) : null}

          {detail ? (
            <WeddingLazyReveal as="article" className="wedding-package-detail-panel" delay={90}>
              <h2 className="wedding-package-detail-panel__title">
                {t(weddingDetailPageCopy.includedScope)}
              </h2>
              <ul className="wedding-package-detail-panel__list">
                {detail.inclusions.map((item, index) => (
                  <li key={item.en} style={{ '--item-i': index } as React.CSSProperties}>
                    {t(item)}
                  </li>
                ))}
              </ul>
            </WeddingLazyReveal>
          ) : null}
        </div>

        <WeddingLazyReveal className="container wedding-package-detail-nav" delay={140}>
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
        </WeddingLazyReveal>

        {longContent ? (
          <div className="container wedding-package-detail-long">
            <WeddingPackageLongContentBlock packageId={packageTier.id} content={longContent} />
          </div>
        ) : null}
      </section>

      <Footer />
    </div>
  )
}
