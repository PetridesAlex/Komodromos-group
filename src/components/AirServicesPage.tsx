import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import {
  airCategoryContent,
  airCategoryPath,
  airServicesHero,
  type AirCategoryId,
} from '../data/airServicesPage'

const IDS: AirCategoryId[] = ['jets', 'light']
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
            <figure className="air-hero__figure air-hero__figure--jets air-hero__fade air-hero__fade--4">
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
              <figcaption className="air-hero__cap">{airCategoryContent.jets.title}</figcaption>
            </figure>
            <figure className="air-hero__figure air-hero__figure--light air-hero__fade air-hero__fade--5">
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
              <figcaption className="air-hero__cap">{airCategoryContent.light.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="air-pick" aria-label="Choose aircraft category">
        <div className="container">
          <header className="air-pick__intro">
            <h2 className="air-pick__heading">How would you like to fly?</h2>
            <p className="air-pick__sub">
              Each category has its own dedicated page with programmes, imagery, and how to book.
            </p>
          </header>
          <div className="air-pick__grid">
            {IDS.map((id) => {
              const item = airCategoryContent[id]
              const to = `/services/air/${airCategoryPath[id]}`
              return (
                <Link
                  key={id}
                  to={to}
                  className="air-pick__card air-pick__card--nav"
                >
                  <span className="air-pick__card-idx" aria-hidden>
                    {id === 'jets' ? '01' : '02'}
                  </span>
                  <span className="air-pick__card-body">
                    <span className="air-pick__card-title">{item.title}</span>
                    <span className="air-pick__card-tag">{item.tagline}</span>
                    <span className="air-pick__card-hint">Open full overview</span>
                  </span>
                  <span className="air-pick__card-arrow" aria-hidden />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
