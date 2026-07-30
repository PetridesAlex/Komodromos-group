import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { vipTourDestinations } from '../data/vipTourDestinations'

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'VIP Tour Around the Island & More',
} as const

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
          className="service-detail-hero-bg"
          aria-hidden
          data-hero-parallax
          style={{
            backgroundImage:
              'url("/images/services/vip-service/vip-transportation/vip-transportaion.webp")',
          }}
        />
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">VIP Touring</p>
          <h1 className="reveal reveal-delay-1">VIP Tour Around the Island & More</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Curated Cyprus destinations — privately chauffeured, discreetly timed, and tailored to
            your itinerary.
          </p>
          <motion.div
            className="vip-tour-hero-cta-wrap reveal reveal-delay-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          >
            <button type="button" className="vip-tour-hero-cta" onClick={scrollToTourSection}>
              Explore destinations
            </button>
          </motion.div>
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
              Twenty places. One private journey.
            </h2>
            <p className="vip-tour-destinations__lead">
              Select landmarks across Paphos, Limassol, Larnaca, and Ayia Napa — composed into a
              bespoke VIP day or multi-stop island experience.
            </p>
          </header>

          <ol className="vip-tour-destinations__grid">
            {vipTourDestinations.map((destination, index) => {
              const num = String(index + 1).padStart(2, '0')
              return (
                <li key={destination.id} className="vip-tour-dest-card reveal">
                  <Link
                    to="/contact"
                    state={{
                      ...CONTACT_STATE,
                      destinationInterest: destination.title,
                    }}
                    className="vip-tour-dest-card__link"
                  >
                    <span
                      className={`vip-tour-dest-card__media vip-tour-dest-card__media--tone-${index % 5}`}
                      aria-hidden={!destination.image}
                    >
                      {destination.image ? (
                        <img
                          src={destination.image}
                          alt=""
                          className="vip-tour-dest-card__img"
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={1000}
                        />
                      ) : (
                        <span className="vip-tour-dest-card__placeholder">
                          <span className="vip-tour-dest-card__watermark">{num}</span>
                        </span>
                      )}
                      <span className="vip-tour-dest-card__scrim" />
                    </span>

                    <span className="vip-tour-dest-card__body">
                      <span className="vip-tour-dest-card__meta">
                        <span className="vip-tour-dest-card__index">{num}</span>
                        <span className="vip-tour-dest-card__region">{destination.region}</span>
                      </span>
                      <span className="vip-tour-dest-card__title">{destination.title}</span>
                      <span className="vip-tour-dest-card__blurb">{destination.blurb}</span>
                      <span className="vip-tour-dest-card__cta">
                        Request this stop
                        <span aria-hidden>→</span>
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
