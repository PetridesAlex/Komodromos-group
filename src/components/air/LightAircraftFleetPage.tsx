import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteLogo from '../SiteLogo'
import TopbarSocialLinks from '../TopbarSocialLinks'
import { useReveal } from '../../hooks/useReveal'
import { airCategoryPath, airLightFleet, airLightFleetPath } from '../../data/airServicesPage'

const BASE_TITLE = 'Komodromos'
const EASE = [0.16, 1, 0.3, 1] as const

export default function LightAircraftFleetPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const d = airLightFleet
  const lightCategoryPath = `/services/air/${airCategoryPath.light}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const prev = document.title
    document.title = `Light Aircraft Fleet · Air Services · ${BASE_TITLE}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div className="page air-services-page air-pjf-page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/#services" className="nav-active" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <TopbarSocialLinks variant="mobile" />
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="air-pjf air-pjf--light">
        <div className="air-pjf__ambient" aria-hidden>
          <span className="air-pjf__glow air-pjf__glow--1" />
          <span className="air-pjf__glow air-pjf__glow--2" />
        </div>

        <section className="air-pjf__masthead" aria-labelledby="air-pjf-title">
          <div className="container air-pjf__masthead-inner">
            <nav className="air-category-breadcrumb" aria-label="Breadcrumb">
              <ol className="air-category-breadcrumb__list">
                <li className="air-category-breadcrumb__item">
                  <Link to="/" className="air-category-breadcrumb__link">
                    Home
                  </Link>
                </li>
                <li className="air-category-breadcrumb__item" aria-hidden>
                  <span className="air-category-breadcrumb__sep">/</span>
                </li>
                <li className="air-category-breadcrumb__item">
                  <Link to="/services/air" className="air-category-breadcrumb__link">
                    Air Services
                  </Link>
                </li>
                <li className="air-category-breadcrumb__item" aria-hidden>
                  <span className="air-category-breadcrumb__sep">/</span>
                </li>
                <li className="air-category-breadcrumb__item">
                  <Link to={lightCategoryPath} className="air-category-breadcrumb__link">
                    Light Aircraft
                  </Link>
                </li>
                <li className="air-category-breadcrumb__item" aria-hidden>
                  <span className="air-category-breadcrumb__sep">/</span>
                </li>
                <li className="air-category-breadcrumb__item air-category-breadcrumb__item--current">
                  <span aria-current="page">Fleet</span>
                </li>
              </ol>
            </nav>

            <motion.p
              className="air-pjf__eyebrow air-pjf__eyebrow--light-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 12, letterSpacing: '0.16em' }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, letterSpacing: '0.22em' }}
              transition={{ duration: reduceMotion ? 0 : 0.52, ease: EASE }}
            >
              {d.eyebrow}
            </motion.p>
            <motion.h1
              id="air-pjf-title"
              className="air-pjf__title air-pjf__title--light-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.985 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : 0.06, ease: EASE }}
            >
              {d.title}
            </motion.h1>
            <motion.p
              className="air-pjf__lead air-pjf__lead--light-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.66, delay: reduceMotion ? 0 : 0.14, ease: EASE }}
            >
              {d.lead}
            </motion.p>
          </div>
        </section>

        <section className="air-pjf__fleet" aria-label="Aircraft">
          <div className="container">
            <ul className="air-pjf__grid">
              {d.aircraft.map((ac, i) => (
                <motion.li
                  key={ac.id}
                  className="air-pjf__cell"
                  initial={
                    reduceMotion
                      ? false
                      : { opacity: 0, x: i % 2 === 0 ? -64 : 64, y: 36, scale: 0.965 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-60px 0px -40px 0px', amount: 0.18 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.72,
                    delay: reduceMotion ? 0 : Math.min(i * 0.16, 0.44),
                    ease: EASE,
                  }}
                >
                  <Link to={`${airLightFleetPath}/${ac.id}`} className="air-pjf__card-link">
                    <article className="air-pjf__card">
                    <div className="air-pjf__card-media">
                      <img
                        className="air-pjf__card-img"
                        src={ac.image}
                        alt={ac.imageAlt}
                        width={960}
                        height={600}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="air-pjf__card-sheen" aria-hidden />
                    </div>
                    <motion.div
                      className="air-pjf__card-body"
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-70px 0px -40px 0px', amount: 0.2 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.56,
                        delay: reduceMotion ? 0 : 0.1 + Math.min(i * 0.12, 0.3),
                        ease: EASE,
                      }}
                    >
                      <motion.p
                        className="air-pjf__card-segment"
                        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0 : 0.38, delay: reduceMotion ? 0 : 0.16 + i * 0.08, ease: EASE }}
                      >
                        {ac.segment}
                      </motion.p>
                      <motion.h2
                        className="air-pjf__card-title"
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: reduceMotion ? 0 : 0.42, delay: reduceMotion ? 0 : 0.2 + i * 0.08, ease: EASE }}
                      >
                        {ac.name}
                      </motion.h2>
                    </motion.div>
                    </article>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="air-pjf__actions">
              <Link to="/contact" className="air-category-hero__cta" state={{ serviceInterest: 'VIP Services' }}>
                Enquire
              </Link>
              <Link to={lightCategoryPath} className="air-category-hero__cta air-category-hero__cta--ghost">
                Light aircraft overview
              </Link>
              <Link to="/services/air" className="air-category-hero__cta air-category-hero__cta--ghost">
                All air services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
