import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { airCategoryContent, airCategoryPath, airServicesHero } from '../data/airServicesPage'

const BASE_TITLE = 'Komodromos'

export default function AirServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const prev = document.title
    document.title = `Air Services · ${BASE_TITLE}`
    return () => {
      document.title = prev
    }
  }, [])

  return (
    <div className="page air-services-page" ref={pageRef}>
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

      <section className="air-hero" aria-labelledby="air-hero-title">
        <div className="air-hero__bg" aria-hidden>
          <div className="air-hero__gradient" />
        </div>
        <div className="air-hero__ambient" aria-hidden>
          <span className="air-hero__bloom air-hero__bloom--1" />
          <span className="air-hero__bloom air-hero__bloom--2" />
        </div>
        <div className="container air-hero__shell">
          <div className="air-hero__copy">
            <p className="air-hero__eyebrow air-hero__fade air-hero__fade--1">{airServicesHero.eyebrow}</p>
            <span className="air-hero__rule air-hero__fade air-hero__fade--1" aria-hidden />
            <h1
              id="air-hero-title"
              className="air-hero__title air-hero__title--premium air-hero__fade air-hero__fade--2"
            >
              <span className="air-hero__title-line">{airServicesHero.titleWords[0]}</span>
              <span className="air-hero__title-line air-hero__title-line--accent">
                {airServicesHero.titleWords[1]}
              </span>
            </h1>
            <p className="air-hero__sub air-hero__fade air-hero__fade--3">{airServicesHero.subtitle}</p>
          </div>
          <div className="air-hero__showcase">
            <Link
              to={`/services/air/${airCategoryPath.jets}`}
              className="air-hero__figure air-hero__figure--jets air-hero__figure--nav air-hero__fade air-hero__fade--4"
              aria-label={`${airCategoryContent.jets.title}: open full overview`}
            >
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--jets"
                  src={airCategoryContent.jets.image}
                  alt={airCategoryContent.jets.imageAlt}
                  width={1200}
                  height={750}
                  decoding="async"
                  fetchPriority="high"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <span className="air-hero__cap">{airCategoryContent.jets.title}</span>
            </Link>
            <Link
              to={`/services/air/${airCategoryPath.light}`}
              className="air-hero__figure air-hero__figure--light air-hero__figure--nav air-hero__fade air-hero__fade--5"
              aria-label={`${airCategoryContent.light.title}: open full overview`}
            >
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--light"
                  src={airCategoryContent.light.image}
                  alt={airCategoryContent.light.imageAlt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <span className="air-hero__cap">{airCategoryContent.light.title}</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
