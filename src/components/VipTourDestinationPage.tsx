import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import LimoGalleryLightbox from './LimoGalleryLightbox'
import SiteTopbar from './SiteTopbar'
import NotFoundPage from './NotFoundPage'
import { useReveal } from '../hooks/useReveal'
import { getVipTourDestinationById } from '../data/vipTourDestinations'

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'VIP Tour Around the Island & More',
} as const

const EASE = [0.16, 1, 0.3, 1] as const

export default function VipTourDestinationPage() {
  const { destinationId } = useParams<{ destinationId: string }>()
  const destination = getVipTourDestinationById(destinationId)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [destinationId])

  if (!destination) {
    return <NotFoundPage />
  }

  const paragraphs =
    destination.description && destination.description.length > 0
      ? destination.description
      : [destination.blurb]

  const galleryImages = destination.galleryImages ?? []
  const gallery = galleryImages.map((item) => item.src)
  const heroSrc =
    destination.image ??
    gallery[0] ??
    '/images/services/vip-service/vip-transportation/vip-transportaion.webp'
  const heroAlt =
    destination.imageAlt ??
    galleryImages[0]?.alt ??
    `${destination.title} in ${destination.region}, Cyprus`

  return (
    <div className="page vip-tour-page vip-tour-destination-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="service-detail-hero service-detail-hero--vip-full" data-hero-parallax-root>
        <div
          className="service-detail-hero-bg service-detail-hero-bg--vip-img"
          aria-hidden
          data-hero-parallax
        >
          <img
            className="service-detail-hero-bg__img"
            src={heroSrc}
            alt={heroAlt}
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow vip-tour-destination-hero__eyebrow reveal">{destination.region}</p>
          <h1 className="reveal reveal-delay-1">{destination.title}</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">{destination.blurb}</p>
        </div>
      </section>

      <section
        className="vip-tour-destination-detail"
        aria-labelledby="vip-tour-destination-detail-heading"
      >
        <div className="container vip-tour-destination-detail__inner">
          <header className="vip-tour-destination-detail__header reveal">
            <p className="vip-tour-destination-detail__eyebrow">Luxury Sky Tour Packages</p>
            <h2 id="vip-tour-destination-detail-heading" className="vip-tour-destination-detail__title">
              {destination.blurb}
            </h2>
            <span className="vip-tour-destination-detail__rule" aria-hidden />
          </header>

          <div className="vip-tour-destination-detail__prose">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="vip-tour-destination-detail__p reveal">
                {paragraph}
              </p>
            ))}
          </div>

          {galleryImages.length > 0 ? (
            <section
              className="vip-tour-destination-gallery"
              aria-labelledby="vip-tour-destination-gallery-heading"
            >
              <header className="vip-tour-destination-gallery__header reveal">
                <p className="vip-tour-destination-gallery__eyebrow">Visual journey</p>
                <h3
                  id="vip-tour-destination-gallery-heading"
                  className="vip-tour-destination-gallery__title"
                >
                  Experience {destination.title}
                </h3>
                <p className="vip-tour-destination-gallery__lead">
                  A curated gallery of this destination — open any frame for a full-screen
                  preview.
                </p>
              </header>

              <ul className="vip-tour-destination-gallery__grid">
                {galleryImages.map((image, index) => {
                  const isFeature = index === 0
                  return (
                    <motion.li
                      key={image.src}
                      className={`vip-tour-destination-gallery__item${
                        isFeature ? ' vip-tour-destination-gallery__item--feature' : ''
                      }`}
                      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.55,
                        delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.28),
                        ease: EASE,
                      }}
                    >
                      <button
                        type="button"
                        className="vip-tour-destination-gallery__trigger"
                        onClick={() => setLightboxIndex(index)}
                        aria-label={`View larger: ${image.alt}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="vip-tour-destination-gallery__img"
                          loading={index < 2 ? 'eager' : 'lazy'}
                          decoding="async"
                          width={isFeature ? 1600 : 900}
                          height={isFeature ? 1000 : 700}
                          sizes={
                            isFeature
                              ? '(max-width: 900px) 100vw, 66vw'
                              : '(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw'
                          }
                        />
                        <span className="vip-tour-destination-gallery__frame" aria-hidden />
                        <span className="vip-tour-destination-gallery__index" aria-hidden>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </button>
                    </motion.li>
                  )
                })}
              </ul>
            </section>
          ) : null}

          <div className="vip-tour-destination-detail__actions reveal">
            <Link
              to="/contact"
              className="vip-tour-destinations__cta"
              state={{
                ...CONTACT_STATE,
                destinationInterest: destination.title,
              }}
            >
              <span className="vip-tour-destinations__cta-label">Request this stop</span>
            </Link>
            <Link to="/services/vip-tour-around-island" className="vip-tour-destinations__back">
              Back to all destinations
            </Link>
          </div>
        </div>
      </section>

      <LimoGalleryLightbox
        images={gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        altForIndex={(index) =>
          galleryImages[index]?.alt ?? `${destination.title} — gallery image ${index + 1}`
        }
      />

      <Footer />
    </div>
  )
}
