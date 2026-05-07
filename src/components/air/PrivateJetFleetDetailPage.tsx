import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteLogo from '../SiteLogo'
import TopbarSocialLinks from '../TopbarSocialLinks'
import { useReveal } from '../../hooks/useReveal'
import {
  airCategoryPath,
  airPrivateJetFleet,
  airPrivateJetFleetDetails,
  airPrivateJetFleetPath,
} from '../../data/airServicesPage'

const BASE_TITLE = 'Komodromos'
const EASE = [0.16, 1, 0.3, 1] as const

export default function PrivateJetFleetDetailPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { aircraftId } = useParams<{ aircraftId: string }>()

  const aircraft = airPrivateJetFleet.aircraft.find((item) => item.id === aircraftId)
  if (!aircraft) return <Navigate to={airPrivateJetFleetPath} replace />

  const detail = airPrivateJetFleetDetails[aircraft.id]
  const jetsCategoryPath = `/services/air/${airCategoryPath.jets}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [aircraft.id])

  useEffect(() => {
    const prev = document.title
    document.title = `${aircraft.name} · Private Jets · ${BASE_TITLE}`
    return () => {
      document.title = prev
    }
  }, [aircraft.name])

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

      <main className="air-pjf air-pjf-detail">
        <section className="air-pjf__masthead" aria-labelledby="air-pjf-detail-title">
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
                <li className="air-category-breadcrumb__item">
                  <Link to={airPrivateJetFleetPath} className="air-category-breadcrumb__link">
                    Fleet
                  </Link>
                </li>
                <li className="air-category-breadcrumb__item" aria-hidden>
                  <span className="air-category-breadcrumb__sep">/</span>
                </li>
                <li className="air-category-breadcrumb__item air-category-breadcrumb__item--current">
                  <span aria-current="page">{aircraft.name}</span>
                </li>
              </ol>
            </nav>

            <p className="air-pjf__eyebrow">{aircraft.segment}</p>
            <h1 id="air-pjf-detail-title" className="air-pjf__title">
              {aircraft.name}
            </h1>
            <p className="air-pjf__lead">{detail.intro}</p>
            <p className="air-pjf__lead air-pjf__lead--detail">{detail.description}</p>
          </div>
        </section>

        <section className="air-pjf__fleet" aria-label={`${aircraft.name} specifications`}>
          <div className="container">
            <motion.article
              className="air-pjf__detail-specs-card"
              initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-70px 0px -50px 0px', amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.68, ease: EASE }}
            >
              <h2 className="air-pjf__detail-section-title">Aircraft Specifications</h2>
              <ul className="air-pjf__detail-specs-list">
                {detail.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </motion.article>
          </div>
        </section>

        <section className="air-pjf__fleet" aria-label={`${aircraft.name} gallery`}>
          <div className="container">
            <motion.ul
              className="air-pjf__detail-gallery"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px 0px -40px 0px', amount: 0.16 }}
              transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
            >
              {detail.gallery.map((item, i) => (
                <motion.li
                  key={item.src}
                  className="air-pjf__detail-cell"
                  initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-70px 0px -40px 0px', amount: 0.16 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.56,
                    delay: reduceMotion ? 0 : Math.min(i * 0.07, 0.35),
                    ease: EASE,
                  }}
                >
                  <figure className="air-pjf__detail-fig">
                    <img
                      className="air-pjf__detail-img"
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={780}
                    />
                  </figure>
                </motion.li>
              ))}
            </motion.ul>

            <div className="air-pjf__actions">
              <Link to={airPrivateJetFleetPath} className="air-category-hero__cta">
                Back to private jet fleet
              </Link>
              <Link
                to="/contact"
                className="air-category-hero__cta air-category-hero__cta--ghost"
                state={{ serviceInterest: 'VIP Services', vipSubService: `Private jet — ${aircraft.name}` }}
              >
                Enquire
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
