import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import AppointmentModal from './AppointmentModal'
import JanchapelleBridalNav from './JanchapelleBridalNav'
import JanchapelleGalleryLightbox from './JanchapelleGalleryLightbox'
import JanchapelleGallerySaveButton from './JanchapelleGallerySaveButton'
import PageSeo from '../seo/PageSeo'
import { useReveal } from '../hooks/useReveal'
import {
  galleryToWishlistItem,
  makeGalleryWishlistId,
  useJanchapelleWishlist,
} from '../hooks/useJanchapelleWishlist'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { janchapelleBrandHref } from '../lib/brandPaths'
import { useSiteContext } from '../seo/SiteContext'
import NotFoundPage from './NotFoundPage'
import {
  JANCHAPELLE_CONTACT_STATE,
  JANCHAPELLE_HOUSES,
  JANCHAPELLE_HOUSES_EYEBROW,
  getJanchapelleHouseById,
} from '../data/janchapellePage'

const JANCHAPELLE_MARK_LOGO =
  '/images/services/janchapelle/logo/janchapelle-logo.png'

function splitHouseName(name: string): { primary: string; accent: string } {
  const words = name.trim().split(/\s+/)
  if (words.length <= 1) {
    return { primary: name, accent: '' }
  }
  const accent = words.pop() ?? ''
  return { primary: words.join(' '), accent }
}

export default function JanchapelleHouseDetailPage() {
  const pageRef = useReveal()
  const { houseId } = useParams()
  const { isBrandDomain } = useSiteContext()
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { isSaved, toggle: toggleSaved } = useJanchapelleWishlist()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  const house = getJanchapelleHouseById(houseId)
  const { primary, accent } = useMemo(
    () => (house ? splitHouseName(house.name) : { primary: '', accent: '' }),
    [house],
  )
  const galleryItems = useMemo(
    () =>
      (house?.gallery ?? []).map((item) => ({
        src: item.src,
        alt: item.alt,
      })),
    [house],
  )

  const houseIndex = JANCHAPELLE_HOUSES.findIndex((item) => item.id === house?.id)
  const prevHouse = houseIndex > 0 ? JANCHAPELLE_HOUSES[houseIndex - 1] : null
  const nextHouse =
    houseIndex >= 0 && houseIndex < JANCHAPELLE_HOUSES.length - 1
      ? JANCHAPELLE_HOUSES[houseIndex + 1]
      : null

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setLightboxIndex(null)
  }, [houseId])

  if (!house) {
    return <NotFoundPage />
  }

  const housesHome = janchapelleBrandHref('/services/janchapelle#jc-houses')
  const housePath = janchapelleBrandHref(`/services/janchapelle/houses/${house.id}`)

  return (
    <div className="page jc-page jc-collection-page" ref={pageRef}>
      <PageSeo
        title={`${house.name} | Janchapelle Bridal Atelier`}
        description={house.tagline}
        path={housePath}
      />
      <SiteTopbar
        logoPathname="/"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <JanchapelleBridalNav onBookAppointment={() => setAppointmentOpen(true)} />

      <section className="jc-collection-hero" aria-labelledby="jc-house-heading">
        <div
          className="jc-collection-hero__media"
          role="img"
          aria-label={house.alt}
        >
          <img
            src={house.heroImage ?? house.image}
            alt=""
            className="jc-collection-hero__img"
            width={1213}
            height={1600}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="jc-collection-hero__scrim" aria-hidden />
        <div className="jc-collection-hero__inner">
          <nav className="jc-collection-hero__crumb" aria-label="Breadcrumb">
            <Link to={housesHome}>{JANCHAPELLE_HOUSES_EYEBROW}</Link>
            <span aria-hidden>/</span>
            <span>{house.name}</span>
          </nav>
          <p className="jc-collection-hero__eyebrow reveal">{house.eyebrow}</p>
          <h1 id="jc-house-heading" className="jc-collection-hero__title reveal reveal-delay-1">
            <span className="jc-collection-hero__wordmark" aria-label={house.name}>
              <span className="jc-collection-hero__wordmark-primary">{primary}</span>
              {accent ? (
                <span className="jc-collection-hero__wordmark-accent">{accent}</span>
              ) : null}
            </span>
          </h1>
          <span className="jc-collection-hero__rule reveal reveal-delay-1" aria-hidden />
          <p className="jc-collection-hero__lead reveal reveal-delay-2">{house.tagline}</p>
        </div>
      </section>

      <section className="jc-collection-body" aria-label={`About ${house.name}`}>
        <div className="jc-collection-body__inner">
          <div className="jc-collection-body__copy">
            {house.paragraphs.map((paragraph, index) => {
              const isClosing = index === house.paragraphs.length - 1
              const isLead = index === 0
              return (
                <p
                  key={paragraph}
                  className={`jc-collection-body__paragraph reveal reveal-delay-${Math.min(index, 2)}${
                    isLead ? ' jc-collection-body__paragraph--lead' : ''
                  }${isClosing ? ' jc-collection-body__paragraph--closing' : ''}`}
                >
                  {paragraph}
                </p>
              )
            })}
            <div className="jc-collection-body__mark reveal reveal-delay-2" aria-label="Janchapelle">
              <div className="jc-collection-body__mark-seal">
                <span className="jc-collection-body__mark-orbit" aria-hidden />
                <span className="jc-collection-body__mark-glow" aria-hidden />
                <div className="jc-collection-body__mark-frame">
                  <img
                    src={JANCHAPELLE_MARK_LOGO}
                    alt=""
                    className="jc-collection-body__mark-logo"
                    loading="lazy"
                    decoding="async"
                    width={180}
                    height={180}
                  />
                </div>
              </div>
              <div className="jc-collection-body__mark-copy">
                <p className="jc-collection-body__mark-eyebrow">Bridal atelier</p>
                <p className="jc-collection-body__mark-title">Janchapelle</p>
                <span className="jc-collection-body__mark-rule" aria-hidden />
                <p className="jc-collection-body__mark-caption">
                  Couture craftsmanship · Cyprus
                </p>
              </div>
            </div>
          </div>

          <aside className="jc-collection-body__aside reveal reveal-delay-2">
            <span className="jc-collection-body__aside-glow" aria-hidden />
            <span className="jc-collection-body__aside-ornament" aria-hidden />
            <p className="jc-collection-body__aside-eyebrow">Private fitting</p>
            <h2 className="jc-collection-body__aside-title">Explore this collection in the atelier</h2>
            <p className="jc-collection-body__aside-copy">
              Book a quiet appointment to discover {house.name.toLowerCase()} with our bridal
              consultants — curated to complement your gown and complete your look.
            </p>
            <div className="jc-collection-body__actions">
              <button
                type="button"
                className="jc-btn jc-btn--solid jc-btn--compact"
                onClick={() => setAppointmentOpen(true)}
              >
                <span className="jc-btn__label">Book an appointment</span>
              </button>
              <Link
                to="/contact"
                state={{
                  ...JANCHAPELLE_CONTACT_STATE,
                  gownInterest: house.name,
                  collectionInterest: house.name,
                }}
                className="jc-btn jc-btn--ghost jc-btn--compact"
              >
                <span className="jc-btn__label">Enquire online</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {house.gallery && house.gallery.length > 0 ? (
        <section
          className={`jc-collection-gallery${
            house.galleryVariant === 'product' ? ' jc-collection-gallery--product' : ''
          }`}
          aria-labelledby="jc-house-gallery-heading"
        >
          <div className="jc-collection-gallery__inner">
            <header className="jc-collection-gallery__head reveal">
              <p className="jc-collection-gallery__eyebrow">
                {house.galleryEyebrow ?? 'Lookbook'}
              </p>
              <h2 id="jc-house-gallery-heading" className="jc-collection-gallery__title">
                {house.galleryTitle ?? `${house.name} gallery`}
              </h2>
              <span className="jc-collection-gallery__rule" aria-hidden />
              <p className="jc-collection-gallery__lead">
                {house.galleryLead ??
                  `A curated lookbook from the ${house.name.toLowerCase()}.`}
              </p>
            </header>

            <ul className="jc-collection-gallery__grid">
              {house.gallery.map((item, index) => (
                <li
                  key={item.src}
                  className={`jc-collection-gallery__item reveal reveal-delay-${Math.min(index % 4, 3)}`}
                >
                  <figure className="jc-collection-gallery__figure">
                    <JanchapelleGallerySaveButton
                      saved={isSaved(makeGalleryWishlistId(house.id, item.src))}
                      label={item.alt}
                      onToggle={() =>
                        toggleSaved(
                          galleryToWishlistItem({
                            parentId: house.id,
                            parentName: house.name,
                            parentKind: 'house',
                            src: item.src,
                            alt: item.alt,
                          }),
                        )
                      }
                    />
                    <button
                      type="button"
                      className="jc-collection-gallery__trigger"
                      onClick={() => setLightboxIndex(index)}
                      aria-label={`View ${item.alt}`}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="jc-collection-gallery__img"
                        loading={index < 8 ? 'eager' : 'lazy'}
                        decoding="async"
                        width={720}
                        height={720}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    </button>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {(prevHouse || nextHouse) && (
        <nav className="jc-collection-nav" aria-label="Other signature collections">
          {prevHouse ? (
            <Link
              to={janchapelleBrandHref(`/services/janchapelle/houses/${prevHouse.id}`)}
              className="jc-collection-nav__link jc-collection-nav__link--prev reveal"
            >
              <span className="jc-collection-nav__label">Previous</span>
              <span className="jc-collection-nav__name">{prevHouse.name}</span>
            </Link>
          ) : (
            <span className="jc-collection-nav__spacer" aria-hidden />
          )}
          <Link to={housesHome} className="jc-collection-nav__home reveal">
            <span className="jc-btn__label">All collections</span>
          </Link>
          {nextHouse ? (
            <Link
              to={janchapelleBrandHref(`/services/janchapelle/houses/${nextHouse.id}`)}
              className="jc-collection-nav__link jc-collection-nav__link--next reveal"
            >
              <span className="jc-collection-nav__label">Next</span>
              <span className="jc-collection-nav__name">{nextHouse.name}</span>
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
        source="Janchapelle House Collection"
        service={JANCHAPELLE_CONTACT_STATE.serviceInterest}
        eyebrow="Bridal atelier"
        title={`Book a fitting — ${house.name}`}
        subtitle="Choose a date and time for your private appointment — our consultants will confirm shortly."
        splitName
        requireEmail
        variant="janchapelle"
      />

      <JanchapelleGalleryLightbox
        items={galleryItems}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={setLightboxIndex}
        label={`${house.name} lookbook`}
      />
    </div>
  )
}
