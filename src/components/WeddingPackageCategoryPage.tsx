import type { KeyboardEvent } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingLazyImage from './WeddingLazyImage'
import NotFoundPage from './NotFoundPage'
import { useReveal } from '../hooks/useReveal'
import {
  getPackagesForCategory,
  getWeddingPackageCategory,
  type WeddingPackageCategoryId,
} from '../data/weddingPackages'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { weddingCategoryPageCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

export default function WeddingPackageCategoryPage() {
  const pageRef = useReveal()
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  const category = getWeddingPackageCategory(categoryId)
  const packages = category
    ? getPackagesForCategory(category.id as WeddingPackageCategoryId)
    : []

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [categoryId])

  if (!category) {
    return <NotFoundPage />
  }

  const openPackage = (packageId: string) => {
    navigate(weddingBrandHref(`/services/wedding/packages/${packageId}`))
  }

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>, packageId: string) => {
    if (event.target !== event.currentTarget) return
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openPackage(packageId)
  }

  return (
    <div
      className="page wedding-page wedding-package-category-page"
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
        <LanguageSwitcher />
      </div>

      <section className="wedding-package-category-hero">
        <div
          className="wedding-package-category-hero__bg"
          style={{ backgroundImage: `url(${category.image})` }}
          aria-hidden
        />
        <div className="wedding-package-category-hero__scrim" aria-hidden />
        <div className="wedding-package-category-hero__glow" aria-hidden />
        <div className="container wedding-package-category-hero__content">
          <p className="wedding-package-category-hero__eyebrow">
            {t(weddingCategoryPageCopy.collectionEyebrow)}
          </p>
          <h1 className="wedding-package-category-hero__title">{t(category.name)}</h1>
          <span className="wedding-package-category-hero__rule" aria-hidden />
          <p className="wedding-package-category-hero__lead">{t(category.tagline)}</p>
          <div className="wedding-package-category-hero__actions">
            <Link
              to={weddingBrandHref('/services/wedding#wedding-packages-heading')}
              className="wedding-package-category-hero__back"
            >
              {t(weddingCategoryPageCopy.allCollections)}
            </Link>
            <Link
              to="/contact"
              state={{
                serviceInterest: 'Wedding Services',
                weddingPackage: t(category.name),
              }}
              className="wedding-package-category-hero__enquire"
            >
              {t(weddingCategoryPageCopy.enquire)}
            </Link>
          </div>
        </div>
      </section>

      <section
        className="wedding-section wedding-packages-section wedding-package-category-list"
        aria-labelledby="wedding-category-packages-title"
      >
        <div className="container">
          <header className="wedding-section__head reveal">
            <p className="wedding-section__eyebrow">{t(weddingCategoryPageCopy.tiersEyebrow)}</p>
            <h2 id="wedding-category-packages-title" className="wedding-section__title">
              {t(weddingCategoryPageCopy.chooseTitle)}
            </h2>
            <p className="wedding-section__intro">
              {t(weddingCategoryPageCopy.chooseIntro)}
            </p>
          </header>

          <div className="wedding-package-category-list__grid">
            {packages.map((pkg, index) => (
              <article
                key={pkg.id}
                id={`wedding-package-${pkg.id}`}
                className={`wedding-package-category-list__card reveal reveal-delay-${Math.min(index + 1, 4)}`}
                role="link"
                tabIndex={0}
                onClick={() => openPackage(pkg.id)}
                onKeyDown={(event) => onCardKeyDown(event, pkg.id)}
                aria-label={t(weddingCategoryPageCopy.openPackageAria).replace(
                  '{{title}}',
                  t(pkg.name),
                )}
              >
                <div className="wedding-package-category-list__media">
                  <WeddingLazyImage
                    src={pkg.image}
                    alt={getServiceCoverImageAlt(
                      pkg.image,
                      `Wedding Sky ${t(pkg.name)} package`,
                    )}
                  />
                  <div className="wedding-package-category-list__media-scrim" aria-hidden />
                  <span className="wedding-package-category-list__index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="wedding-package-category-list__content">
                  <p className="wedding-package-category-list__tier">
                    {t(weddingCategoryPageCopy.tiersEyebrow)} {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="wedding-package-category-list__name">{t(pkg.name)}</h3>
                  <p className="wedding-package-category-list__price">{t(pkg.priceDisplay)}</p>
                  <p className="wedding-package-category-list__tag">{t(pkg.tagline)}</p>
                  <div className="wedding-package-category-list__actions">
                    <Link
                      to={weddingBrandHref(`/services/wedding/packages/${pkg.id}`)}
                      className="wedding-package-category-list__details"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {t(weddingCategoryPageCopy.viewPackage)}
                    </Link>
                    <Link
                      to="/contact"
                      state={{
                        serviceInterest: 'Wedding Services',
                        weddingPackage: t(pkg.name),
                      }}
                      className="wedding-package-category-list__enquire"
                      onClick={(event) => event.stopPropagation()}
                    >
                      {t(weddingCategoryPageCopy.enquire)}
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
