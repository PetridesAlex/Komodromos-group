import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import { airCategoryPath, airPrivateJetFleet, airPrivateJetFleetPath } from '../../data/airServicesPage'

const BASE_TITLE = 'Komodromos'
const EASE = [0.16, 1, 0.3, 1] as const

export default function PrivateJetFleetPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const d = airPrivateJetFleet
  const jetsCategoryPath = `/services/air/${airCategoryPath.jets}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const prev = document.title
    document.title = `Private Jet Fleet · Air Services · ${BASE_TITLE}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div className="page air-services-page air-pjf-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="air-pjf">
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
                  <Link to={jetsCategoryPath} className="air-category-breadcrumb__link">
                    Private Jets
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
              className="air-pjf__eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, ease: EASE }}
            >
              {d.eyebrow}
            </motion.p>
            <motion.h1
              id="air-pjf-title"
              className="air-pjf__title air-pjf__title--jet-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.58, delay: reduceMotion ? 0 : 0.06, ease: EASE }}
            >
              {d.title}
            </motion.h1>
            <motion.p
              className="air-pjf__lead air-pjf__lead--jet-premium"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.52, delay: reduceMotion ? 0 : 0.12, ease: EASE }}
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
                  initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px 0px -40px 0px', amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.62,
                    delay: reduceMotion ? 0 : Math.min(i * 0.11, 0.33),
                    ease: EASE,
                  }}
                >
                  <Link to={`${airPrivateJetFleetPath}/${ac.id}`} className="air-pjf__card-link">
                    <article className="air-pjf__card">
                      <motion.div
                        className="air-pjf__card-media"
                        initial={reduceMotion ? false : { scale: 1.03 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, margin: '-80px 0px', amount: 0.2 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.7,
                          delay: reduceMotion ? 0 : 0.04 + Math.min(i * 0.07, 0.18),
                          ease: EASE,
                        }}
                      >
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
                      </motion.div>
                      <div className="air-pjf__card-body">
                        <p className="air-pjf__card-segment">{ac.segment}</p>
                        <h2 className="air-pjf__card-title">{ac.name}</h2>
                        <p className="air-pjf__card-desc">{ac.description}</p>
                        <ul className="air-pjf__card-highlights">
                          {ac.highlights.map((line) => (
                            <li key={line} className="air-pjf__card-highlight">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="air-pjf__actions"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
            >
              <Link to="/contact" className="air-category-hero__cta" state={{ serviceInterest: 'VIP Services' }}>
                Enquire
              </Link>
              <Link to={jetsCategoryPath} className="air-category-hero__cta air-category-hero__cta--ghost">
                Private jets overview
              </Link>
              <Link to="/services/air" className="air-category-hero__cta air-category-hero__cta--ghost">
                All air services
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
