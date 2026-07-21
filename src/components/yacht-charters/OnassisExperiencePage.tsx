import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import {
  onassisCategories,
  onassisHero,
  onassisIntro,
  onassisStats,
} from '../../data/onassisExperience'

const EASE = [0.16, 1, 0.3, 1] as const

export default function OnassisExperiencePage() {
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page onassis-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="onassis-hero" aria-label="Onassis flagship yacht" data-hero-parallax-root>
        <div className="onassis-hero__media" data-hero-parallax>
          <img
            className="onassis-hero__img"
            src={onassisHero.image}
            alt=""
            width={2000}
            height={1000}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
          />
          <div className="onassis-hero__scrim" aria-hidden />
        </div>

        <div className="container onassis-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.7, ease: EASE }}
          >
            <p className="onassis-hero__eyebrow">{onassisHero.eyebrow}</p>
            <h1 className="onassis-hero__name">{onassisHero.name}</h1>
            <p className="onassis-hero__headline">{onassisHero.headline}</p>
            <p className="onassis-hero__lead">{onassisHero.lead}</p>
            <div className="onassis-hero__actions">
              <a href="#onassis-categories" className="onassis-btn onassis-btn--gold">
                Explore the yacht
              </a>
              <Link
                to="/contact"
                className="onassis-btn onassis-btn--ghost"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Yacht charter — Onassis (Limassol)',
                }}
              >
                Request a private charter
              </Link>
            </div>
          </motion.div>
        </div>

        <nav className="onassis-hero__nav" aria-label="Previous page">
          <button type="button" className="onassis-hero-back" onClick={() => navigate(-1)}>
            ← Previous page
          </button>
        </nav>
      </section>

      <section className="onassis-intro" aria-label="Introduction">
        <div className="container onassis-intro__inner reveal">
          <div className="onassis-intro__copy">
            <h2 className="onassis-section-title">{onassisIntro.title}</h2>
            {onassisIntro.paragraphs.map((p, i) => (
              <p key={i} className="onassis-intro__text">
                {p}
              </p>
            ))}
          </div>
          <dl className="onassis-stats">
            {onassisStats.map((stat) => (
              <div key={stat.label} className="onassis-stat">
                <dt className="onassis-stat__label">{stat.label}</dt>
                <dd className="onassis-stat__value">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="onassis-categories" className="onassis-categories" aria-label="Explore Onassis">
        <div className="container">
          <header className="onassis-categories__head reveal">
            <p className="onassis-eyebrow">Explore</p>
            <h2 className="onassis-section-title">Discover Onassis</h2>
            <p className="onassis-categories__lead">
              Choose a perspective to explore the yacht in detail.
            </p>
          </header>

          <div className="onassis-cat-grid">
            {onassisCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={
                  reduceMotion ? false : { opacity: 0, y: 48, scale: 0.92, filter: 'blur(12px)' }
                }
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.75,
                  delay: reduceMotion ? 0 : Math.min(i * 0.1, 0.6),
                  ease: EASE,
                }}
              >
                <Link to={`/services/yacht-charters/onassis/${cat.id}`} className="onassis-cat-card">
                  <div className="onassis-cat-card__media">
                    <img
                      className="onassis-cat-card__img"
                      src={cat.cover}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="onassis-cat-card__scrim" aria-hidden />
                  </div>
                  <div className="onassis-cat-card__body">
                    <span className="onassis-cat-card__label">{cat.label}</span>
                    <span className="onassis-cat-card__tagline">{cat.tagline}</span>
                    <span className="onassis-cat-card__cta" aria-hidden>
                      Discover →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="onassis-cta" aria-label="Enquire">
        <div className="container onassis-cta__inner reveal">
          <h2 className="onassis-cta__title">Charter Onassis</h2>
          <p className="onassis-cta__text">
            Available for day charters, overnight escapes and bespoke Mediterranean itineraries.
            Speak with our concierge to plan your private experience.
          </p>
          <div className="onassis-cta__actions">
            <Link
              to="/contact"
              className="onassis-btn onassis-btn--gold"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Yacht charter — Onassis (Limassol)',
              }}
            >
              Request your charter
            </Link>
            <Link to="/services/yacht-charters" className="onassis-btn onassis-btn--ghost">
              ← Back to fleet
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
