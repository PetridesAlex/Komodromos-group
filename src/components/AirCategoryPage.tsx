import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  airCategoryContent,
  airCategoryPath,
  airPrivateJetFleetPath,
  airSlugToCategoryId,
  type AirCategoryId,
} from '../data/airServicesPage'
import LightAircraftPremiumSection from './air/LightAircraftPremiumSection'
import PrivateJetsInflightPremiumSection from './air/PrivateJetsInflightPremiumSection'

const BASE_TITLE = 'Komodromos'
const EASE = [0.16, 1, 0.3, 1] as const

export default function AirCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const categoryId = airSlugToCategoryId(categorySlug)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  const fadeUp = reduceMotion
    ? { initial: false, animate: {} }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categorySlug])

  useEffect(() => {
    if (!categoryId) return
    const prev = document.title
    const titles: Record<AirCategoryId, string> = {
      light: `Light Aircraft Experiences · Air Services · ${BASE_TITLE}`,
      jets: `Private Jet In-Flight Services · Air Services · ${BASE_TITLE}`,
    }
    document.title = titles[categoryId]
    return () => {
      document.title = prev
    }
  }, [categoryId])

  if (!categoryId) {
    return <Navigate to="/services/air" replace />
  }

  const content = airCategoryContent[categoryId]
  const otherId: AirCategoryId = categoryId === 'jets' ? 'light' : 'jets'
  const otherPath = `/services/air/${airCategoryPath[otherId]}`

  return (
    <div className="page air-services-page air-category-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      {categoryId === 'jets' ? (
        <>
          <section
            className="air-category-hero air-category-hero--immersive"
            aria-labelledby="air-category-title"
            data-hero-parallax-root
          >
            <div className="air-category-hero__media" aria-hidden data-hero-parallax>
              <img
                className="air-category-hero__media-img"
                src={content.image}
                alt=""
                width={1920}
                height={1080}
                decoding="async"
                fetchPriority="high"
              />
              <div className="air-category-hero__veil" />
              <div className="air-category-hero__grain" />
            </div>
            <div className="container air-category-hero__inner air-category-hero__inner--immersive">
              <nav className="air-category-breadcrumb air-category-breadcrumb--immersive" aria-label="Breadcrumb">
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
                  <li className="air-category-breadcrumb__item air-category-breadcrumb__item--current">
                    <span aria-current="page">{content.title}</span>
                  </li>
                </ol>
              </nav>

              <div className="air-category-hero__layout air-category-hero__layout--immersive">
                <div className="air-category-hero__copy air-category-hero__copy--immersive">
                  <motion.p
                    className="air-category-hero__eyebrow"
                    {...fadeUp}
                    transition={{ duration: reduceMotion ? 0 : 0.52, ease: EASE }}
                  >
                    {content.tagline}
                  </motion.p>
                  <motion.h1
                    id="air-category-title"
                    className="air-category-hero__title"
                    {...fadeUp}
                    transition={{
                      duration: reduceMotion ? 0 : 0.68,
                      delay: reduceMotion ? 0 : 0.06,
                      ease: EASE,
                    }}
                  >
                    {content.title}
                  </motion.h1>
                  <motion.p
                    className="air-category-hero__lead"
                    {...fadeUp}
                    transition={{
                      duration: reduceMotion ? 0 : 0.58,
                      delay: reduceMotion ? 0 : 0.14,
                      ease: EASE,
                    }}
                  >
                    {content.lead}
                  </motion.p>
                  <motion.p
                    className="air-category-hero__footnote"
                    {...fadeUp}
                    transition={{
                      duration: reduceMotion ? 0 : 0.54,
                      delay: reduceMotion ? 0 : 0.2,
                      ease: EASE,
                    }}
                  >
                    {content.footnote}
                  </motion.p>
                  <div className="air-category-hero__actions">
                    <Link to="/contact" className="air-category-hero__cta" state={{ serviceInterest: 'VIP Services' }}>
                      Enquire
                    </Link>
                    <Link
                      to={airPrivateJetFleetPath}
                      className="air-category-hero__cta air-category-hero__cta--fleet"
                    >
                      See our private fleet
                    </Link>
                    <Link to="/services/air" className="air-category-hero__cta air-category-hero__cta--ghost">
                      All air services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {categoryId === 'jets' ? (
        <PrivateJetsInflightPremiumSection lightPath={otherPath} />
      ) : (
        <LightAircraftPremiumSection jetsPath={otherPath} />
      )}

      <Footer />
    </div>
  )
}
