import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  FISHING_SCUBA_HERO,
  fishingScubaCategoryCards,
} from '../data/fishingScubaPage'

const EASE = [0.16, 1, 0.3, 1] as const

export default function FishingScubaPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToCategories() {
    const el = document.getElementById('fishing-scuba-categories')
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
            src={FISHING_SCUBA_HERO}
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
          <p className="eyebrow reveal">VIP Water Experiences</p>
          <h1 className="reveal reveal-delay-1">Fishing &amp; Scuba Diving</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Two private Mediterranean experiences — choose your element and we will tailor every
            detail.
          </p>
          <motion.div
            className="limo-hero-cta-wrap reveal reveal-delay-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          >
            <button type="button" className="limo-hero-cta" onClick={scrollToCategories}>
              <span className="limo-hero-cta__label">Explore experiences</span>
              <span className="limo-hero-cta__arrow" aria-hidden>
                →
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      <section
        className="service-default-sections fishing-scuba-hub"
        id="fishing-scuba-categories"
      >
        <div className="container fishing-scuba-hub__inner">
          <motion.header
            className="fishing-scuba-hub__header"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: EASE }}
          >
            <p className="fishing-scuba-hub__eyebrow">Choose your experience</p>
            <h2 className="fishing-scuba-hub__title">Two Elements. One Standard of Excellence.</h2>
            <p className="fishing-scuba-hub__intro">
              Select Fishing or Scuba Diving to explore curated Mediterranean experiences —
              crafted for private clients who expect discretion, craftsmanship, and unforgettable
              moments at sea.
            </p>
          </motion.header>

          <div className="fishing-scuba-hub__grid">
            {fishingScubaCategoryCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.55,
                  delay: reduceMotion ? 0 : 0.1 + index * 0.12,
                  ease: EASE,
                }}
                whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.28 } }}
              >
                <Link
                  to={card.to ?? '/contact'}
                  className="fishing-scuba-hub__card"
                  state={
                    card.to
                      ? undefined
                      : {
                          serviceInterest: 'VIP Services',
                          vipSubService: card.title,
                        }
                  }
                >
                  <div className="fishing-scuba-hub__card-media">
                    <img src={card.image} alt={card.imageAlt} loading="lazy" decoding="async" />
                    <div className="fishing-scuba-hub__card-veil" aria-hidden />
                  </div>
                  <div className="fishing-scuba-hub__card-body">
                    <p className="fishing-scuba-hub__card-kicker">{card.kicker}</p>
                    <h3>{card.title}</h3>
                    <p className="fishing-scuba-hub__card-blurb">{card.blurb}</p>
                    <span className="fishing-scuba-hub__card-cta">
                      Explore
                      <span aria-hidden> →</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="fishing-scuba-hub__footer"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.15 }}
          >
            <Link
              to="/contact"
              className="fishing-scuba-hub__quote"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Fishing & Scuba Diving',
              }}
            >
              Request a private quote
            </Link>
            <Link to="/services/vip" className="fishing-scuba-hub__back">
              ← Back to VIP services
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
