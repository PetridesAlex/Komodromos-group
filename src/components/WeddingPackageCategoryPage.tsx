import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingChristeningPackagesPage from './WeddingChristeningPackagesPage'
import WeddingConsultationPromo from './WeddingConsultationPromo'
import WeddingPackagePricingGrid from './WeddingPackagePricingGrid'
import NotFoundPage from './NotFoundPage'
import { useReveal } from '../hooks/useReveal'
import {
  getPackagesForCategory,
  getWeddingPackageCategory,
  type WeddingPackageCategoryId,
} from '../data/weddingPackages'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { useSiteContext } from '../seo/SiteContext'
import { weddingCategoryPageCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

export default function WeddingPackageCategoryPage() {
  const pageRef = useReveal()
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

  if (category.id === 'christian') {
    return <WeddingChristeningPackagesPage />
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
        <LanguageSwitcher dynamic />
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
              <span className="wedding-package-category-hero__btn-sheen" aria-hidden />
              <span className="wedding-package-category-hero__btn-label">
                {t(weddingCategoryPageCopy.allCollections)}
              </span>
            </Link>
            <Link
              to="/contact"
              state={{
                serviceInterest: 'Wedding Services',
                weddingPackage: t(category.name),
              }}
              className="wedding-package-category-hero__enquire"
            >
              <span className="wedding-package-category-hero__btn-sheen" aria-hidden />
              <span className="wedding-package-category-hero__btn-label">
                {t(weddingCategoryPageCopy.enquire)}
              </span>
            </Link>
          </div>
        </div>
      </section>

      <WeddingConsultationPromo collectionName={t(category.name)} />

      <section
        className="wedding-christening-catalogue wedding-package-category-catalogue"
        aria-labelledby="wedding-category-packages-title"
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
          <WeddingPackagePricingGrid packages={packages} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
