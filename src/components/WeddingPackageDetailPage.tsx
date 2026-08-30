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
import {
  christeningPackagesPageCopy,
  getChristeningPackage,
  getChristeningPackageExpandedSections,
} from '../data/christeningPackages'
import {
  completeWeddingPackagesPageCopy,
  getCompleteWeddingPackage,
  getCompleteWeddingPackageExpandedSections,
} from '../data/completeWeddingPackages'
import {
  photoWayPackagesPageCopy,
  getPhotoWayPackage,
  getPhotoWayPackageExpandedSections,
} from '../data/photoWayPackages'
import {
  decoWayPackagesPageCopy,
  getDecoWayPackage,
  getDecoWayPackageExpandedSections,
} from '../data/decoWayPackages'

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
  const christeningPackage =
    packageTier.category === 'christian'
      ? getChristeningPackage(packageTier.id)
      : undefined
  const christeningSections = christeningPackage
    ? getChristeningPackageExpandedSections(packageTier.id)
    : undefined
  const completePackage =
    packageTier.category === 'wedding'
      ? getCompleteWeddingPackage(packageTier.id)
      : undefined
  const completeSections = completePackage
    ? getCompleteWeddingPackageExpandedSections(packageTier.id)
    : undefined
  const photoWayPackage =
    packageTier.category === 'photography'
      ? getPhotoWayPackage(packageTier.id)
      : undefined
  const photoWaySections = photoWayPackage
    ? getPhotoWayPackageExpandedSections(packageTier.id)
    : undefined
  const decoWayPackage =
    packageTier.category === 'decor'
      ? getDecoWayPackage(packageTier.id)
      : undefined
  const decoWaySections = decoWayPackage
    ? getDecoWayPackageExpandedSections(packageTier.id)
    : undefined
  const flyerPackage =
    completePackage ?? photoWayPackage ?? decoWayPackage ?? christeningPackage
  const flyerSections =
    completeSections ?? photoWaySections ?? decoWaySections ?? christeningSections
  const flyerPageCopy = completePackage
    ? completeWeddingPackagesPageCopy
    : photoWayPackage
      ? photoWayPackagesPageCopy
      : decoWayPackage
        ? decoWayPackagesPageCopy
        : christeningPackagesPageCopy
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
    packageTier.category === 'wedding'
      ? '/services/wedding/wedding-packages/complete'
      : packageTier.category === 'photography'
        ? '/services/wedding/wedding-packages/photography'
        : packageTier.category === 'decor'
          ? '/services/wedding/wedding-packages/decor'
          : `/services/wedding/categories/${packageTier.category}`,
  )
  const heroTitle = longContent ? longContent.title : t(packageTier.name)
  const titleMatch = heroTitle.match(/^("[^"]+"|«[^»]+»)\s*(.*)$/)
  const titleMark = titleMatch?.[1] ?? null
  const titleRest = titleMatch?.[2]?.trim() || null
  const summaryText = detail ? t(detail.summary) : t(packageTier.tagline)
  const heroPhoto =
    packageTier.detailHeroImage === null
      ? null
      : packageTier.detailHeroImage ?? packageTier.image
  const navMode =
    prevTier && nextTier ? 'both' : prevTier ? 'prev-only' : nextTier ? 'next-only' : 'none'

  const renderNavCard = (
    tier: typeof packageTier,
    direction: 'prev' | 'next',
  ) => {
    const isNext = direction === 'next'
    const label = t(isNext ? weddingDetailPageCopy.next : weddingDetailPageCopy.previous)
    const ariaTemplate = t(
      isNext ? weddingDetailPageCopy.nextPackageAria : weddingDetailPageCopy.previousPackageAria,
    ).replace('{{title}}', t(tier.name))

    return (
      <Link
        to={weddingBrandHref(`/services/wedding/packages/${tier.id}`)}
        className={[
          'wedding-package-detail-nav__card',
          isNext ? 'wedding-package-detail-nav__card--next' : 'wedding-package-detail-nav__card--prev',
        ].join(' ')}
        aria-label={ariaTemplate}
      >
        <div className="wedding-package-detail-nav__media" aria-hidden>
          <WeddingLazyImage
            src={tier.image}
            alt=""
            aria-hidden
            className="wedding-package-detail-nav__photo"
          />
          <span className="wedding-package-detail-nav__media-scrim" />
          <span className="wedding-package-detail-nav__index">
            {String(tier.sortOrder).padStart(2, '0')}
          </span>
        </div>

        <div className="wedding-package-detail-nav__body">
          <span className="wedding-package-detail-nav__eyebrow">{label}</span>
          <strong className="wedding-package-detail-nav__name">{t(tier.name)}</strong>
          <p className="wedding-package-detail-nav__price">{t(tier.priceDisplay)}</p>
          <p className="wedding-package-detail-nav__tagline">{t(tier.tagline)}</p>
          <span className="wedding-package-detail-nav__cta">
            <span>{t(weddingDetailPageCopy.explorePackage)}</span>
            <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              <path
                d={isNext ? 'M4 10h12M11 5l5 5-5 5' : 'M16 10H4M9 5l-5 5 5 5'}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </Link>
    )
  }

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

      <section
        className={[
          'wedding-package-detail-hero',
          !heroPhoto ? 'wedding-package-detail-hero--empty' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="wedding-package-detail-hero__bg" aria-hidden>
          {heroPhoto ? (
            <WeddingLazyImage
              src={heroPhoto}
              alt=""
              aria-hidden
              priority
              className="wedding-package-detail-hero__photo"
            />
          ) : (
            <span className="wedding-package-detail-hero__empty-canvas" aria-hidden />
          )}
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
            <span className="wedding-package-detail-hero__spotlight-glow" aria-hidden />
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
              <span className="wedding-package-detail-hero__action-fill" aria-hidden />
              <span className="wedding-package-detail-hero__action-shine" aria-hidden />
              <span className="wedding-package-detail-hero__action-label">
                {t(weddingDetailPageCopy.bookConsultation)}
              </span>
            </Link>
            <Link
              to={categoryHref}
              className="wedding-package-detail-hero__action wedding-package-detail-hero__action--ghost"
            >
              <span className="wedding-package-detail-hero__action-fill" aria-hidden />
              <span className="wedding-package-detail-hero__action-shine" aria-hidden />
              <span className="wedding-package-detail-hero__action-label">
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
          {flyerPackage && detail ? (
            <WeddingLazyReveal
              as="article"
              className="wedding-package-detail-panel wedding-package-detail-panel--overview"
              delay={0}
            >
              <p className="wedding-package-detail-panel__eyebrow">
                {category ? t(category.name) : t(weddingDetailPageCopy.packageEyebrow)}{' '}
                · {String(packageTier.sortOrder).padStart(2, '0')}
              </p>
              <h2 className="wedding-package-detail-panel__title wedding-package-detail-panel__title--package">
                {t(flyerPackage.name)}
              </h2>
              <p className="wedding-package-detail-panel__lead">{t(flyerPackage.tagline)}</p>

              <div className="wedding-package-detail-panel__flyer">
                <WeddingLazyImage
                  src={flyerPackage.image}
                  alt={t(flyerPackage.name)}
                  className="wedding-package-detail-panel__flyer-img"
                />
              </div>

              <div className="wedding-package-detail-panel__price-block">
                <span className="wedding-package-detail-panel__price-note">
                  {t(weddingDetailPageCopy.investmentFrom)}
                </span>
                <p className="wedding-package-detail-panel__price">
                  {t(flyerPackage.priceDisplay)}
                </p>
                {flyerPackage.priceNote ? (
                  <p className="wedding-package-detail-panel__price-surcharge">
                    {t(flyerPackage.priceNote)}
                  </p>
                ) : null}
              </div>

              <div className="wedding-package-detail-panel__block">
                <h3 className="wedding-package-detail-panel__subtitle">
                  {t(weddingDetailPageCopy.idealFor)}
                </h3>
                <p className="wedding-package-detail-panel__copy">{t(detail.idealFor)}</p>
              </div>

              <div className="wedding-package-detail-panel__block">
                <h3 className="wedding-package-detail-panel__subtitle">
                  {t(weddingDetailPageCopy.atAGlance)}
                </h3>
                <ul className="wedding-package-detail-panel__list wedding-package-detail-panel__list--compact">
                  {detail.inclusions.map((item, index) => (
                    <li key={item.en} style={{ '--item-i': index } as React.CSSProperties}>
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="wedding-package-detail-panel__meta">
                <p>{t(detail.planningWindow)}</p>
              </div>

              <p className="wedding-package-detail-panel__summary">{t(detail.summary)}</p>

              <div className="wedding-package-detail-panel__actions">
                <Link
                  to="/contact"
                  state={{
                    serviceInterest: 'Wedding Services',
                    weddingPackage: t(flyerPackage.name),
                  }}
                  className="wedding-package-detail-panel__cta"
                >
                  <span className="wedding-package-detail-panel__cta-fill" aria-hidden />
                  <span className="wedding-package-detail-panel__cta-shine" aria-hidden />
                  <span className="wedding-package-detail-panel__cta-label">
                    {t(flyerPageCopy.enquireShort)}
                  </span>
                </Link>
              </div>

              <p className="wedding-package-detail-panel__note">
                {t(flyerPageCopy.note)}
              </p>
            </WeddingLazyReveal>
          ) : detail ? (
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

          {flyerSections ? (
            <WeddingLazyReveal as="article" className="wedding-package-detail-panel" delay={90}>
              <h2 className="wedding-package-detail-panel__title">
                {t(weddingDetailPageCopy.includedScope)}
              </h2>
              <div className="wedding-package-detail-panel__sections">
                {flyerSections.map((section) => (
                  <div
                    key={section.title.en}
                    className="wedding-package-detail-panel__section"
                  >
                    <h3 className="wedding-package-detail-panel__section-title">
                      {t(section.title)}
                    </h3>
                    <ul className="wedding-package-detail-panel__list">
                      {section.items.map((item, index) => (
                        <li key={item.en} style={{ '--item-i': index } as React.CSSProperties}>
                          {t(item)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </WeddingLazyReveal>
          ) : detail ? (
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

        <WeddingLazyReveal
          className={[
            'container',
            'wedding-package-detail-nav',
            navMode !== 'none' ? `wedding-package-detail-nav--${navMode}` : '',
          ]
            .filter(Boolean)
            .join(' ')}
          delay={140}
        >
          {prevTier ? renderNavCard(prevTier, 'prev') : null}
          {nextTier ? renderNavCard(nextTier, 'next') : null}
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
