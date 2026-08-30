import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import NotFoundPage from './NotFoundPage'
import { useReveal } from '../hooks/useReveal'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { openWeddingSkyBooking } from '../lib/weddingSkyBooking'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import {
  weddingPackageFamilyCopy,
  weddingPackagesHubCopy,
} from '../data/weddingPackagesHub'

const FAMILY_IDS = ['decor'] as const
type FamilyId = (typeof FAMILY_IDS)[number]

function isFamilyId(value: string | undefined): value is FamilyId {
  return FAMILY_IDS.includes(value as FamilyId)
}

export default function WeddingPackageFamilyPage() {
  const pageRef = useReveal()
  const { familyId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const hubHref = weddingBrandHref('/services/wedding/wedding-packages')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [familyId])

  if (!isFamilyId(familyId)) {
    return <NotFoundPage />
  }

  const family = weddingPackageFamilyCopy[familyId]
  const card = weddingPackagesHubCopy.cards.find((item) => item.id === familyId)
  const collectionName = t(family.title)

  return (
    <div
      className={`page wedding-page wedding-package-family-page wedding-package-family-page--${familyId}`}
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
        className="wedding-package-family-hero"
        aria-labelledby="wedding-package-family-title"
      >
        <div
          className="wedding-package-family-hero__bg"
          style={card ? { backgroundImage: `url(${card.image})` } : undefined}
          aria-hidden
        />
        <div className="wedding-package-family-hero__scrim" aria-hidden />
        <div className="container wedding-package-family-hero__content">
          <Link to={hubHref} className="wedding-package-family-hero__back">
            <span aria-hidden>←</span>
            <span>{t(weddingPackageFamilyCopy.backToHub)}</span>
          </Link>
          <p className="wedding-package-family-hero__eyebrow">{t(family.eyebrow)}</p>
          <h1 id="wedding-package-family-title" className="wedding-package-family-hero__title">
            {t(family.title)}
          </h1>
          <p className="wedding-package-family-hero__lead">{t(family.lead)}</p>
          <span className="wedding-package-family-hero__rule" aria-hidden />
        </div>
      </section>

      <section className="wedding-package-family-body">
        <div className="container wedding-package-family-body__inner">
          {family.body.map((paragraph) => (
            <p key={paragraph.en} className="wedding-package-family-body__p">
              {t(paragraph)}
            </p>
          ))}

          <button
            type="button"
            className="wedding-package-family-body__cta"
            onClick={() => openWeddingSkyBooking({ collectionName })}
          >
            <span className="wedding-package-family-body__cta-sheen" aria-hidden />
            <span>{t(weddingPackageFamilyCopy.bookCta)}</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
