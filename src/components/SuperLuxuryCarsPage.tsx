import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  SUPER_LUXURY_CARS_HERO,
  superLuxuryCarCards,
} from '../data/superLuxuryCarsPage'

export default function SuperLuxuryCarsPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToFleet() {
    const el = document.getElementById('super-luxury-fleet')
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="page" ref={pageRef}>
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
            src={SUPER_LUXURY_CARS_HERO}
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
          <p className="eyebrow reveal">VIP Mobility</p>
          <h1 className="reveal reveal-delay-1">Super &amp; Luxury Cars</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Exclusive supercar and luxury vehicle experiences — curated for private clients who
            expect presence, performance, and discretion.
          </p>
          <motion.div
            className="limo-hero-cta-wrap reveal reveal-delay-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          >
            <button type="button" className="limo-hero-cta" onClick={scrollToFleet}>
              <span className="limo-hero-cta__label">View fleet</span>
              <span className="limo-hero-cta__arrow" aria-hidden>
                →
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section className="service-default-sections limo-showcase" id="super-luxury-fleet">
        <div className="container">
          <motion.div
            className="service-default-block limo-showcase__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.62, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="limo-showcase__eyebrow">Premium road fleet</p>
            <h2>Available Super &amp; Luxury Cars</h2>
            <p className="limo-showcase__intro">
              {superLuxuryCarCards.length > 0
                ? 'Select a vehicle to explore details, imagery, and private booking options.'
                : 'Fleet cards will appear here next. Send each car’s name and images, and we will add the cards — then build dedicated detail pages for each model.'}
            </p>

            {superLuxuryCarCards.length > 0 ? (
              <div className="limo-grid">
                {superLuxuryCarCards.map((car, index) => {
                  const body = (
                    <>
                      <div className="limo-card__media">
                        <img
                          src={car.image}
                          alt={car.imageAlt}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="limo-card__body">
                        <p className="limo-card__kicker">{car.kicker}</p>
                        <h3>{car.title}</h3>
                      </div>
                    </>
                  )

                  return (
                    <motion.div
                      key={car.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.48,
                        delay: reduceMotion ? 0 : 0.08 + index * 0.08,
                      }}
                    >
                      {car.to ? (
                        <Link to={car.to} className="limo-card limo-card--link">
                          {body}
                        </Link>
                      ) : (
                        <div className="limo-card">{body}</div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            ) : (
              <div className="limo-grid limo-grid--awaiting" aria-live="polite">
                <div className="limo-card limo-card--placeholder">
                  <div className="limo-card__media limo-card__media--placeholder" aria-hidden />
                  <div className="limo-card__body">
                    <p className="limo-card__kicker">Vehicle 01</p>
                    <h3>Awaiting model imagery</h3>
                  </div>
                </div>
                <div className="limo-card limo-card--placeholder">
                  <div className="limo-card__media limo-card__media--placeholder" aria-hidden />
                  <div className="limo-card__body">
                    <p className="limo-card__kicker">Vehicle 02</p>
                    <h3>Awaiting model imagery</h3>
                  </div>
                </div>
              </div>
            )}

            <p className="limo-showcase__cta-wrap">
              <Link
                to="/contact"
                className="limo-showcase__cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Super & Luxury Cars',
                }}
              >
                Request a private quote
                <span className="limo-showcase__cta-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </p>
            <p className="limo-showcase__back-wrap">
              <Link to="/services/vip" className="limo-showcase__back">
                ← Back to VIP services
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
