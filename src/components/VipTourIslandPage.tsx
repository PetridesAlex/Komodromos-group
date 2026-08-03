import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { vipTourDestinations } from '../data/vipTourDestinations'
import { vipTourIntro } from '../data/vipTourIntro'

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'VIP Tour Around the Island & More',
} as const

const EASE = [0.22, 1, 0.36, 1] as const

const HERO_TITLE = 'VIP Tour Around the Island & More'
const HERO_SUB =
  'Curated Cyprus destinations — privately chauffeured, discreetly timed, and tailored to your itinerary.'

export default function VipTourIslandPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToTourSection() {
    const el = document.getElementById('vip-tour-content')
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const titleWords = HERO_TITLE.split(' ')
  const subWords = HERO_SUB.split(' ')

  return (
    <div className="page vip-tour-page" ref={pageRef}>
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
            src="/images/services/vip-service/vip-transportation/vip-transportaion.webp"
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <motion.p
            className="eyebrow vip-tour-hero__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 14, letterSpacing: '0.28em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.42em' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: EASE }}
          >
            VIP Touring
          </motion.p>

          <h1 className="vip-tour-hero__title">
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="vip-tour-hero__title-word"
                initial={
                  reduceMotion ? false : { opacity: 0, y: 32, filter: 'blur(10px)' }
                }
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.72,
                  delay: reduceMotion ? 0 : 0.12 + index * 0.065,
                  ease: EASE,
                }}
              >
                {word}
                {index < titleWords.length - 1 ? '\u00A0' : ''}
              </motion.span>
            ))}
          </h1>

          <p className="service-detail-hero-sub vip-tour-hero__sub">
            {subWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="vip-tour-hero__sub-word"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.55,
                  delay: reduceMotion ? 0 : 0.55 + index * 0.028,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.div
            className="vip-tour-hero-cta-wrap"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              delay: reduceMotion ? 0 : 1.05,
              ease: EASE,
            }}
          >
            <button
              type="button"
              className="vip-tour-hero-scroll"
              onClick={scrollToTourSection}
              aria-label="Scroll to explore destinations"
            >
              <motion.span
                className="vip-tour-hero-scroll__label"
                initial={reduceMotion ? false : { opacity: 0, letterSpacing: '0.2em' }}
                animate={{ opacity: 1, letterSpacing: '0.32em' }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.7,
                  delay: reduceMotion ? 0 : 1.15,
                  ease: EASE,
                }}
              >
                Explore destinations
              </motion.span>
              <span className="vip-tour-hero-scroll__orb" aria-hidden>
                <span className="vip-tour-hero-scroll__ring" />
                <svg
                  className="vip-tour-hero-scroll__chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9.5L12 15.5L18 9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section
        className="vip-tour-intro"
        id="vip-tour-intro"
        aria-labelledby="vip-tour-intro-heading"
      >
        <div className="container vip-tour-intro__inner">
          <header className="vip-tour-intro__header reveal">
            <p className="vip-tour-intro__brand">{vipTourIntro.brand}</p>
            <h2 id="vip-tour-intro-heading" className="vip-tour-intro__headline">
              {vipTourIntro.headline}
            </h2>
            <span className="vip-tour-intro__rule" aria-hidden />
          </header>

          <div className="vip-tour-intro__prose">
            {vipTourIntro.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="vip-tour-intro__p reveal">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="vip-tour-intro__vehicles reveal">
          <div className="vip-tour-intro__vehicles-shell">
            <p className="vip-tour-intro__vehicles-lead">{vipTourIntro.vehicleLead}</p>
            <ul className="vip-tour-intro__vehicle-grid">
              {vipTourIntro.vehicles.map((vehicle, index) => (
                <li key={vehicle.id} className="vip-tour-intro__vehicle">
                  <div className="vip-tour-intro__vehicle-media">
                    <img
                      className="vip-tour-intro__vehicle-img"
                      src={vehicle.image}
                      alt={vehicle.imageAlt}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      width={1600}
                      height={1000}
                      sizes="(max-width: 900px) 100vw, min(1480px, 100vw)"
                    />
                    <span className="vip-tour-intro__vehicle-media-scrim" aria-hidden />
                    <span className="vip-tour-intro__vehicle-slide" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="vip-tour-intro__vehicle-content">
                    <p className="vip-tour-intro__vehicle-badge">{vehicle.badge}</p>
                    <h3 className="vip-tour-intro__vehicle-title">{vehicle.title}</h3>
                    <span className="vip-tour-intro__vehicle-divider" aria-hidden />
                    <p className="vip-tour-intro__vehicle-body">{vehicle.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container vip-tour-intro__inner">
          <div className="vip-tour-intro__closing">
            {vipTourIntro.closing.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="vip-tour-intro__p reveal">
                {paragraph}
              </p>
            ))}
            <p className="vip-tour-intro__finale reveal">{vipTourIntro.finale}</p>
          </div>
        </div>
      </section>

      <section
        className="vip-tour-destinations"
        id="vip-tour-content"
        aria-labelledby="vip-tour-destinations-heading"
      >
        <div className="container vip-tour-destinations__inner">
          <header className="vip-tour-destinations__header reveal">
            <p className="vip-tour-destinations__eyebrow">Signature destinations</p>
            <h2 id="vip-tour-destinations-heading" className="vip-tour-destinations__title">
              Signature destinations. One private journey.
            </h2>
            <p className="vip-tour-destinations__lead">
              Select landmarks across Paphos, Limassol, Larnaca, and Ayia Napa — composed into a
              bespoke VIP day or multi-stop island experience.
            </p>
          </header>

          <ol className="vip-tour-destinations__grid">
            {vipTourDestinations.map((destination, index) => {
              const num = String(index + 1).padStart(2, '0')
              const hasDetailPage = Boolean(destination.description?.length)
              const cardTo = hasDetailPage
                ? `/services/vip-tour-around-island/${destination.id}`
                : '/contact'
              const cardState = hasDetailPage
                ? undefined
                : {
                    ...CONTACT_STATE,
                    destinationInterest: destination.title,
                  }
              return (
                <li key={destination.id} className="vip-tour-dest-card reveal">
                  <Link to={cardTo} state={cardState} className="vip-tour-dest-card__link">
                    <span
                      className={`vip-tour-dest-card__media vip-tour-dest-card__media--tone-${index % 5}`}
                    >
                      {destination.image ? (
                        <img
                          src={destination.image}
                          alt={
                            destination.imageAlt ??
                            `${destination.title} in ${destination.region}, Cyprus`
                          }
                          className="vip-tour-dest-card__img"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="low"
                          width={800}
                          height={1000}
                          sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                        />
                      ) : (
                        <span className="vip-tour-dest-card__placeholder" aria-hidden>
                          <span className="vip-tour-dest-card__watermark">{num}</span>
                        </span>
                      )}
                      <span className="vip-tour-dest-card__scrim" aria-hidden />
                    </span>

                    <span className="vip-tour-dest-card__body">
                      <span className="vip-tour-dest-card__meta">
                        <span className="vip-tour-dest-card__index">{num}</span>
                        <span className="vip-tour-dest-card__region">{destination.region}</span>
                      </span>
                      <span className="vip-tour-dest-card__title">{destination.title}</span>
                      <span className="vip-tour-dest-card__blurb">{destination.blurb}</span>
                      <span className="vip-tour-dest-card__cta">
                        <span className="vip-tour-dest-card__cta-label">
                          {hasDetailPage ? 'Discover more' : 'Request this stop'}
                        </span>
                        <span className="vip-tour-dest-card__cta-arrow" aria-hidden>
                          →
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ol>

          <div className="vip-tour-destinations__footer reveal">
            <p className="vip-tour-destinations__footer-eyebrow">Bespoke itineraries</p>
            <p className="vip-tour-destinations__footer-copy">
              Prefer a fully custom route? Share your preferred stops, timing, and vehicle class —
              we compose the day around you.
            </p>
            <div className="vip-tour-destinations__actions">
              <Link to="/contact" className="vip-tour-destinations__cta" state={CONTACT_STATE}>
                <span className="vip-tour-destinations__cta-label">Request private tour</span>
              </Link>
              <Link to="/services/vip" className="vip-tour-destinations__back">
                Back to VIP services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
