import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import {
  airCategoryContent,
  airCategoryPath,
  airSlugToCategoryId,
  type AirCategoryId,
} from '../data/airServicesPage'
import LightAircraftPremiumSection from './air/LightAircraftPremiumSection'
import PrivateJetsInflightPremiumSection from './air/PrivateJetsInflightPremiumSection'

const BASE_TITLE = 'Komodromos'

export default function AirCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const categoryId = airSlugToCategoryId(categorySlug)
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()

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
  const other = airCategoryContent[otherId]
  const otherPath = `/services/air/${airCategoryPath[otherId]}`

  return (
    <div className="page air-services-page air-category-page" ref={pageRef}>
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

      {categoryId === 'jets' ? (
        <>
          <section className="air-category-hero" aria-labelledby="air-category-title">
            <div className="air-category-hero__bg" aria-hidden>
              <div className="air-category-hero__gradient" />
            </div>
            <div className="container air-category-hero__inner">
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
                  <li className="air-category-breadcrumb__item air-category-breadcrumb__item--current">
                    <span aria-current="page">{content.title}</span>
                  </li>
                </ol>
              </nav>

              <div className="air-category-hero__layout">
                <div className="air-category-hero__copy">
                  <p className="air-category-hero__eyebrow">{content.tagline}</p>
                  <h1 id="air-category-title" className="air-category-hero__title">
                    {content.title}
                  </h1>
                  <p className="air-category-hero__lead">{content.lead}</p>
                  <p className="air-category-hero__footnote">{content.footnote}</p>
                  <div className="air-category-hero__actions">
                    <Link to="/contact" className="air-category-hero__cta" state={{ serviceInterest: 'VIP Services' }}>
                      Enquire
                    </Link>
                    <Link to="/services/air" className="air-category-hero__cta air-category-hero__cta--ghost">
                      All air services
                    </Link>
                  </div>
                </div>
                <figure className="air-category-hero__figure">
                  <div className="air-category-hero__frame">
                    <img
                      className="air-category-hero__img"
                      src={content.image}
                      alt={content.imageAlt}
                      width={960}
                      height={600}
                      decoding="async"
                      fetchPriority="high"
                    />
                    <span className="air-category-hero__sheen" aria-hidden />
                  </div>
                </figure>
              </div>

              <ul className="air-category-highlights" aria-label="Highlights">
                {content.highlights.map((h) => (
                  <li key={h.label} className="air-category-highlights__item">
                    <span className="air-category-highlights__label">{h.label}</span>
                    <p className="air-category-highlights__text">{h.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <nav className="air-category-cross" aria-label="Related air category">
            <div className="container air-category-cross__inner">
              <p className="air-category-cross__label">Also explore</p>
              <Link to={otherPath} className="air-category-cross__link">
                <span className="air-category-cross__link-title">{other.title}</span>
                <span className="air-category-cross__link-tag">{other.tagline}</span>
                <span className="air-category-cross__link-arrow" aria-hidden />
              </Link>
            </div>
          </nav>
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
