import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

export default function LimousinesExperiencesPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToLimousines() {
    const el = document.getElementById('limousines-fleet')
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
          className="service-detail-hero-bg"
          aria-hidden
          data-hero-parallax
          style={{ backgroundImage: 'url("/images/services/vip-service/limouzine.webp")' }}
        />
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">VIP Mobility</p>
          <h1 className="reveal reveal-delay-1">Limousines Experiences</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Page structure is ready. Content will be added in the next step.
          </p>
          <motion.div
            className="limo-hero-cta-wrap reveal reveal-delay-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          >
            <button
              type="button"
              className="limo-hero-cta"
              onClick={scrollToLimousines}
            >
              Book now
            </button>
          </motion.div>
        </div>
      </section>

      <section className="service-default-sections limo-showcase" id="limousines-fleet">
        <div className="container">
          <motion.div
            className="service-default-block limo-showcase__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.62, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="limo-showcase__eyebrow">Premium ground fleet</p>
            <h2>Available Limousines</h2>
            <p className="limo-showcase__intro">
              Two vehicles are ready to be presented here. Send the exact model names, specs, and
              dedicated images, and I will finalize the section.
            </p>
            <div className="limo-grid">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0.01 : 0.48, delay: reduceMotion ? 0 : 0.08 }}
              >
                <Link
                to="/services/limousines-experiences/chrysler-300-super-stretch"
                className="limo-card limo-card--link"
              >
                <div className="limo-card__media">
                  <img
                    src="/images/services/vip-service/limousine-services/chrystler/chrysler7.webp"
                    alt="Chrysler 300 Super Stretch Limousine Experience in Cyprus"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="limo-card__body">
                  <p className="limo-card__kicker">Vehicle 01</p>
                  <h3>Chrysler 300 Super Stretch Limousine Experience - Cyprus</h3>
                </div>
                </Link>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0.01 : 0.48, delay: reduceMotion ? 0 : 0.16 }}
              >
                <Link
                to="/services/limousines-experiences/lincoln-30ft-stretched"
                className="limo-card limo-card--link"
              >
                <div className="limo-card__media">
                  <img
                    src="/images/services/vip-service/limousine-services/Lincoln-30ft/limousine3.webp"
                    alt="Lincoln 30ft Stretched Limousine"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="limo-card__body">
                  <p className="limo-card__kicker">Vehicle 02</p>
                  <h3>Lincoln 30ft Stretched Limousine</h3>
                </div>
                </Link>
              </motion.div>
            </div>
            <p className="limo-showcase__cta-wrap">
              <Link
                to="/contact"
                className="limo-showcase__cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Limousines Experiences',
                }}
              >
                Request a private quote
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
