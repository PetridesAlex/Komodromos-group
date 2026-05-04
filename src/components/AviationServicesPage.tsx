import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  ClipboardList,
  Compass,
  Handshake,
  Headphones,
  Plane,
  Search,
  Users,
} from 'lucide-react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import {
  aviationHeroSubtitle,
  aviationPremiumSection,
  aviationProcessSteps,
  aviationServiceCards,
  AVIATION_HERO_IMAGE,
  type AviationProcessIconId,
  type AviationServiceIconId,
} from '../data/aviationServicesPage'

const SERVICE_ICONS: Record<AviationServiceIconId, LucideIcon> = {
  plane: Plane,
  building: Building2,
  compass: Compass,
  users: Users,
  handshake: Handshake,
}

const PROCESS_ICONS: Record<AviationProcessIconId, LucideIcon> = {
  search: Search,
  layout: ClipboardList,
  plane: Plane,
  headset: Headphones,
}

export default function AviationServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const card = getServiceBySlug('aviation')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!card) {
    return <Navigate to="/" replace />
  }

  const scrollToServices = () => {
    const el = document.getElementById('aviation-services-grid')
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="page aviation-services-page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link
              to="/#services"
              className="nav-active"
              onClick={() => setMenuOpen(false)}
            >
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

      <section className="aviation-hero" aria-label="Aviation agency introduction" data-hero-parallax-root>
        <div className="aviation-hero__bg" aria-hidden data-hero-parallax>
          <img
            className="aviation-hero__bg-img"
            src={AVIATION_HERO_IMAGE}
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="aviation-hero__scrim" aria-hidden />
        <div className="aviation-hero__vignette" aria-hidden />
        <div className="aviation-hero__grain" aria-hidden />
        <div className="container aviation-hero__inner">
          <p className="aviation-hero__eyebrow aviation-hero__fade aviation-hero__fade--1">
            {card.eyebrow}
          </p>
          <h1 className="aviation-hero__title aviation-hero__fade aviation-hero__fade--2">
            Aviation Agency Services
          </h1>
          <p className="aviation-hero__sub aviation-hero__fade aviation-hero__fade--3">
            {aviationHeroSubtitle}
          </p>
          <div className="aviation-hero__cta aviation-hero__fade aviation-hero__fade--4">
            <button type="button" className="aviation-hero__btn-primary" onClick={scrollToServices}>
              Request consultation
            </button>
            <Link to="/contact" className="aviation-hero__btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section
        className="aviation-services"
        id="aviation-services-grid"
        aria-labelledby="aviation-services-heading"
      >
        <div className="container aviation-services__header">
          <p className="aviation-section-eyebrow reveal">Capabilities</p>
          <h2 id="aviation-services-heading" className="aviation-services__title reveal reveal-delay-1">
            Services overview
          </h2>
          <p className="aviation-services__lead reveal reveal-delay-2">
            A focused portfolio for owners, executives, and operators who require clarity, velocity, and
            discretion.
          </p>
        </div>
        <div className="container aviation-services__grid">
          {aviationServiceCards.map((item, i) => {
            const Icon = SERVICE_ICONS[item.icon]
            const delayClass = `reveal-delay-${Math.min(i + 1, 4)}`
            return (
              <article
                key={item.title}
                className={`aviation-service-card reveal reveal-scale ${delayClass}`}
              >
                <div
                  className="aviation-service-card__bg"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  aria-hidden
                />
                <div className="aviation-service-card__veil" aria-hidden />
                <div className="aviation-service-card__body">
                  <div className="aviation-service-card__icon-wrap">
                    <Icon className="aviation-service-card__icon" strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="aviation-service-card__title">{item.title}</h3>
                  <p className="aviation-service-card__desc">{item.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="aviation-premium" aria-labelledby="aviation-premium-heading">
        <div className="container aviation-premium__inner">
          <div className="aviation-premium__copy">
            <p className="aviation-section-eyebrow reveal">{aviationPremiumSection.eyebrow}</p>
            <h2 id="aviation-premium-heading" className="aviation-premium__title reveal reveal-delay-1">
              {aviationPremiumSection.title}
            </h2>
            <p className="aviation-premium__body reveal reveal-delay-2">{aviationPremiumSection.body}</p>
          </div>
          <div className="aviation-premium__media reveal reveal-right reveal-delay-2">
            <div className="aviation-premium__frame">
              <img
                src={aviationPremiumSection.image}
                alt={aviationPremiumSection.imageAlt}
                width={900}
                height={1100}
                loading="lazy"
                decoding="async"
                className="aviation-premium__img"
              />
              <span className="aviation-premium__frame-glow" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section className="aviation-process" aria-labelledby="aviation-process-heading">
        <div className="container">
          <div className="aviation-process__header">
            <p className="aviation-section-eyebrow reveal">How it works</p>
            <h2 id="aviation-process-heading" className="aviation-process__title reveal reveal-delay-1">
              From first call to wheels-down
            </h2>
          </div>
          <ol className="aviation-process__timeline">
            {aviationProcessSteps.map((step, i) => {
              const Icon = PROCESS_ICONS[step.icon]
              const delayClass = `reveal-delay-${Math.min((i % 4) + 1, 4)}`
              return (
                <li key={step.title} className={`aviation-process__step reveal ${delayClass}`}>
                  <div className="aviation-process__step-index" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="aviation-process__step-icon" aria-hidden>
                    <Icon strokeWidth={1.5} />
                  </div>
                  <div className="aviation-process__step-body">
                    <h3 className="aviation-process__step-title">{step.title}</h3>
                    <p className="aviation-process__step-desc">{step.description}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </section>

      <section className="aviation-cta" aria-labelledby="aviation-cta-heading">
        <div className="aviation-cta__blobs" aria-hidden>
          <span className="aviation-cta__blob aviation-cta__blob--1" />
          <span className="aviation-cta__blob aviation-cta__blob--2" />
        </div>
        <div className="aviation-cta__scrim" aria-hidden />
        <div className="container aviation-cta__inner">
          <h2 id="aviation-cta-heading" className="aviation-cta__title reveal">
            Elevate your aviation experience
          </h2>
          <p className="aviation-cta__sub reveal reveal-delay-1">
            Share your itinerary, ownership goals, or operational brief — we respond with a clear, discreet
            next step.
          </p>
          <Link to="/contact" className="aviation-cta__btn reveal reveal-delay-2">
            Contact us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
