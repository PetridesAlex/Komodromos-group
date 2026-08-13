import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import AppointmentModal from './AppointmentModal'
import JanchapelleBridalNav from './JanchapelleBridalNav'
import PageSeo from '../seo/PageSeo'
import { useReveal } from '../hooks/useReveal'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { janchapelleBrandHref } from '../lib/brandPaths'
import { useSiteContext } from '../seo/SiteContext'
import NotFoundPage from './NotFoundPage'
import {
  JANCHAPELLE_COLLECTIONS,
  JANCHAPELLE_COLLECTIONS_EYEBROW,
  JANCHAPELLE_CONTACT_STATE,
  getJanchapelleCollectionById,
} from '../data/janchapellePage'

function splitCollectionName(name: string): { primary: string; accent: string } {
  const words = name.trim().split(/\s+/)
  if (words.length <= 1) {
    return { primary: name, accent: '' }
  }
  const accent = words.pop() ?? ''
  return { primary: words.join(' '), accent }
}

export default function JanchapelleCollectionDetailPage() {
  const pageRef = useReveal()
  const { collectionId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  const collection = getJanchapelleCollectionById(collectionId)
  const { primary, accent } = useMemo(
    () => (collection ? splitCollectionName(collection.name) : { primary: '', accent: '' }),
    [collection],
  )

  const collectionIndex = JANCHAPELLE_COLLECTIONS.findIndex((item) => item.id === collection?.id)
  const prevCollection =
    collectionIndex > 0 ? JANCHAPELLE_COLLECTIONS[collectionIndex - 1] : null
  const nextCollection =
    collectionIndex >= 0 && collectionIndex < JANCHAPELLE_COLLECTIONS.length - 1
      ? JANCHAPELLE_COLLECTIONS[collectionIndex + 1]
      : null

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [collectionId])

  if (!collection) {
    return <NotFoundPage />
  }

  const collectionsHome = janchapelleBrandHref('/services/janchapelle#jc-featured')

  return (
    <div className="page jc-page jc-collection-page" ref={pageRef}>
      <PageSeo
        title={`${collection.name} | Janchapelle Bridal Atelier`}
        description={collection.tagline}
        path={janchapelleBrandHref(`/services/janchapelle/collections/${collection.id}`)}
      />
      <SiteTopbar
        logoPathname="/"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <JanchapelleBridalNav onBookAppointment={() => setAppointmentOpen(true)} />

      <section className="jc-collection-hero" aria-labelledby="jc-collection-heading">
        <div
          className="jc-collection-hero__media"
          style={{ backgroundImage: `url("${collection.image}")` }}
          role="img"
          aria-label={collection.alt}
        />
        <div className="jc-collection-hero__scrim" aria-hidden />
        <div className="jc-collection-hero__inner">
          <nav className="jc-collection-hero__crumb" aria-label="Breadcrumb">
            <Link to={collectionsHome}>{JANCHAPELLE_COLLECTIONS_EYEBROW}</Link>
            <span aria-hidden>/</span>
            <span>{collection.name}</span>
          </nav>
          <p className="jc-collection-hero__eyebrow reveal">{JANCHAPELLE_COLLECTIONS_EYEBROW}</p>
          <h1 id="jc-collection-heading" className="jc-collection-hero__title reveal reveal-delay-1">
            <span className="jc-collection-hero__wordmark" aria-label={collection.name}>
              <span className="jc-collection-hero__wordmark-primary">{primary}</span>
              {accent ? (
                <span className="jc-collection-hero__wordmark-accent">{accent}</span>
              ) : null}
            </span>
          </h1>
          <span className="jc-collection-hero__rule reveal reveal-delay-1" aria-hidden />
          <p className="jc-collection-hero__lead reveal reveal-delay-2">{collection.tagline}</p>
        </div>
      </section>

      <section className="jc-collection-body" aria-label={`About ${collection.name}`}>
        <div className="jc-collection-body__inner">
          <div className="jc-collection-body__copy">
            {collection.paragraphs.map((paragraph, index) => {
              const isClosing = index === collection.paragraphs.length - 1
              return (
                <p
                  key={paragraph}
                  className={`jc-collection-body__paragraph reveal reveal-delay-${Math.min(index, 2)}${
                    isClosing ? ' jc-collection-body__paragraph--closing' : ''
                  }`}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          <aside className="jc-collection-body__aside reveal reveal-delay-2">
            <p className="jc-collection-body__aside-eyebrow">Private fitting</p>
            <h2 className="jc-collection-body__aside-title">Experience this collection in the atelier</h2>
            <p className="jc-collection-body__aside-copy">
              Book a quiet appointment to explore silhouettes, fabrics, and finishing from the{' '}
              {collection.name} with our bridal consultants.
            </p>
            <div className="jc-collection-body__actions">
              <button
                type="button"
                className="jc-btn jc-btn--solid jc-btn--compact"
                onClick={() => setAppointmentOpen(true)}
              >
                Book an appointment
              </button>
              <Link
                to="/contact"
                state={{
                  ...JANCHAPELLE_CONTACT_STATE,
                  gownInterest: collection.name,
                  collectionInterest: collection.name,
                }}
                className="jc-btn jc-btn--ghost jc-btn--compact"
              >
                Enquire online
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {(prevCollection || nextCollection) && (
        <nav className="jc-collection-nav" aria-label="Other collections">
          {prevCollection ? (
            <Link
              to={janchapelleBrandHref(
                `/services/janchapelle/collections/${prevCollection.id}`,
              )}
              className="jc-collection-nav__link jc-collection-nav__link--prev reveal"
            >
              <span className="jc-collection-nav__label">Previous</span>
              <span className="jc-collection-nav__name">{prevCollection.name}</span>
            </Link>
          ) : (
            <span className="jc-collection-nav__spacer" aria-hidden />
          )}
          <Link to={collectionsHome} className="jc-collection-nav__home reveal">
            All collections
          </Link>
          {nextCollection ? (
            <Link
              to={janchapelleBrandHref(
                `/services/janchapelle/collections/${nextCollection.id}`,
              )}
              className="jc-collection-nav__link jc-collection-nav__link--next reveal"
            >
              <span className="jc-collection-nav__label">Next</span>
              <span className="jc-collection-nav__name">{nextCollection.name}</span>
            </Link>
          ) : (
            <span className="jc-collection-nav__spacer" aria-hidden />
          )}
        </nav>
      )}

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        source="Janchapelle Collection"
        service={JANCHAPELLE_CONTACT_STATE.serviceInterest}
        eyebrow="Bridal atelier"
        title={`Book a fitting — ${collection.name}`}
        subtitle="Choose a date and time for your private appointment — our consultants will confirm shortly."
        splitName
        requireEmail
      />
    </div>
  )
}
