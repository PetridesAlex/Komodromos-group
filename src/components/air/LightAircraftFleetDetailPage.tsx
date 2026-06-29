import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import { airCategoryPath, airLightFleet, airLightFleetDetails, airLightFleetPath } from '../../data/airServicesPage'
import NotFoundPage from '../NotFoundPage'

const EASE = [0.16, 1, 0.3, 1] as const

export default function LightAircraftFleetDetailPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const { aircraftId } = useParams<{ aircraftId: string }>()

  const aircraft = airLightFleet.aircraft.find((item) => item.id === aircraftId)
  if (!aircraft) return <NotFoundPage />

  const detail = airLightFleetDetails[aircraft.id]
  const lightCategoryPath = `/services/air/${airCategoryPath.light}`

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [aircraft.id])

  return (
    <div className="page air-services-page air-pjf-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="air-pjf air-pjf--light air-pjf-detail">
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
                  <Link to={lightCategoryPath} className="air-category-breadcrumb__link">
                    Light Aircraft
                  </Link>
                </li>
                <li className="air-category-breadcrumb__item" aria-hidden>
                  <span className="air-category-breadcrumb__sep">/</span>
                </li>
                <li className="air-category-breadcrumb__item">
                  <Link to={airLightFleetPath} className="air-category-breadcrumb__link">
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
            {detail.bullets && detail.bullets.length > 0 ? (
              <ul className="air-pjf__detail-list">
                {detail.bullets.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-40px 0px -30px 0px', amount: 0.22 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.46,
                      delay: reduceMotion ? 0 : Math.min(i * 0.06, 0.24),
                      ease: EASE,
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>

        {detail.sections && detail.sections.length > 0 ? (
          <section className="air-pjf__fleet" aria-label={`${aircraft.name} highlights`}>
            <div className="container">
              <div className="air-pjf__detail-sections">
                {detail.sections.map((section, i) => (
                  <motion.article
                    key={section.title}
                    className={
                      section.title === 'Exclusive Scenic Flights'
                        ? 'air-pjf__detail-section-card air-pjf__detail-section-card--compact'
                        : 'air-pjf__detail-section-card'
                    }
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 24,
                            x: i % 2 === 0 ? -34 : 34,
                            scale: 0.98,
                          }
                    }
                    whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-60px 0px -40px 0px', amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.62,
                      delay: reduceMotion ? 0 : Math.min(i * 0.08, 0.22),
                      ease: EASE,
                    }}
                  >
                    <h2 className="air-pjf__detail-section-title">{section.title}</h2>
                    {section.paragraphs.map((p) => (
                      <p key={p} className="air-pjf__detail-section-text">
                        {p}
                      </p>
                    ))}
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {detail.specs && detail.specs.length > 0 ? (
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
                {detail.price ? <p className="air-pjf__detail-price">Price: {detail.price}</p> : null}
              </motion.article>
            </div>
          </section>
        ) : null}

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
                  whileHover={reduceMotion ? undefined : { y: -6 }}
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
              <Link to={airLightFleetPath} className="air-category-hero__cta">
                Back to light fleet
              </Link>
              <Link
                to="/contact"
                className="air-category-hero__cta air-category-hero__cta--ghost"
                state={{ serviceInterest: 'VIP Services', vipSubService: `Light aircraft — ${aircraft.name}` }}
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
