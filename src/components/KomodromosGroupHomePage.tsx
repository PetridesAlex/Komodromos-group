import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnimatedCounter from './AnimatedCounter'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import MeetTheTeam from './MeetTheTeam'
import { useReveal } from '../hooks/useReveal'
import { getServicePageHref, isExternalServiceHref, serviceCards } from '../data/serviceCards'
import { isServiceLinkableFromGroup } from '../lib/serviceMaintenance'
import { prepareGlobalWingsEntryNavigation } from '../lib/gwEntryNavigation'

const marqueeItems = [
  'ADR DISPUTE MEDIATION SERVICES',
  'VIP SERVICES',
  'ASTREAL DEVELOPERS',
  "BUSINESS CONSULTANT'S",
  'MEDIATION SERVICES',
]

export default function KomodromosGroupHomePage() {
  const pageRef = useReveal()
  const location = useLocation()

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = window.setTimeout(() => {
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }, 0)
    return () => window.clearTimeout(t)
  }, [location.pathname, location.hash])

  return (
    <div className="page home-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="#home"
        servicesSectionHref="#services"
      />

      <div className="marquee-wrap">
        <div className="marquee-row">
          <div className="marquee-overflow marquee-full">
            <div className="marquee-track">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
                (item, index) => (
                  <span className="pill" key={`${item}-${index}`}>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <section id="home" className="hero-section" data-hero-parallax-root>
        <div className="hero-bg hero-bg--static" aria-hidden data-hero-parallax />
        <div className="container hero-content">
          <div className="hero-text">
            <h1
              className="hero-title-glass"
              aria-label="Komodromos Group of Companies"
            >
              <span className="hero-title-glass__inner">
                <span className="hero-title-glass__kg" aria-hidden="true">
                  KOMODROMOS GROUP
                </span>
                <span className="hero-title-glass__line2" aria-hidden="true">
                  OF COMPANIES
                </span>
              </span>
            </h1>
          </div>
          <div className="hero-cta-wrap hero-scroll-hint-wrap">
            <p className="hero-scroll-hint">
              <span className="hero-scroll-hint__label">Scroll to explore</span>
              <span className="hero-scroll-hint__shape" aria-hidden="true">
                <svg
                  className="hero-scroll-hint__svg"
                  viewBox="0 0 32 88"
                  width="36"
                  height="88"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g className="hero-scroll-hint__chevG hero-scroll-hint__chevG--1">
                    <path
                      className="hero-scroll-hint__chev hero-scroll-hint__chev--1"
                      d="M8 34l8 8 8-8"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g className="hero-scroll-hint__chevG hero-scroll-hint__chevG--2">
                    <path
                      className="hero-scroll-hint__chev hero-scroll-hint__chev--2"
                      d="M8 48l8 8 8-8"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g className="hero-scroll-hint__chevG hero-scroll-hint__chevG--3">
                    <path
                      className="hero-scroll-hint__chev hero-scroll-hint__chev--3"
                      d="M8 62l8 8 8-8"
                      stroke="currentColor"
                      strokeWidth="1.45"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section highlights section-led">
        <div className="highlights-glow highlights-glow-1" />
        <div className="highlights-glow highlights-glow-2" />
        <div className="container highlights-inner">
          <p className="eyebrow reveal">KEY HIGHLIGHTS</p>
          <h2 className="reveal reveal-delay-1">Experience Meets Precision</h2>
          <p className="section-sub reveal reveal-delay-2">
            More than seventeen years of disciplined leadership across sectors,
            with measurable outcomes and trusted partnerships.
          </p>
          <div className="stats">
            <div className="stat-card stat-card--experience reveal reveal-delay-1">
              <span className="stat-pre">MORE THAN</span>
              <AnimatedCounter value={17} delayMs={0} />
              <span>YEARS OF EXPERIENCE</span>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <AnimatedCounter value={14} delayMs={120} />
              <span>INTERNATIONAL PARTNERS</span>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <AnimatedCounter value={74} delayMs={240} />
              <span>QUALIFIED SPECIALISTS</span>
            </div>
            <div className="stat-card reveal reveal-delay-4">
              <AnimatedCounter value={100} delayMs={360} />
              <span>SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services section-led">
        <div className="container">
          <p className="eyebrow reveal">GROUP SERVICES</p>
          <h2 className="reveal reveal-delay-1">
            Specialized Companies Across Eleven Core Categories
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            A curated portfolio designed for private clients, corporates, and
            investors.
          </p>
          <div className="service-list">
            {serviceCards.map((card, index) => (
              <article
                key={card.slug}
                data-service-slug={card.slug}
                className="service-card reveal-scale reveal"
              >
                <div
                  className={`service-inner ${index % 2 !== 0 || card.slug === 'vip' ? 'img-left' : ''}`}
                >
                  <div className="service-media">
                    <div className="service-card-badge" aria-hidden>
                      <span className="service-card-badge__num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="service-card-badge__rule" />
                      <span className="service-card-badge__eyebrow">
                        {card.eyebrow}
                      </span>
                    </div>
                    <img src={card.image} alt={card.title} className="service-img" />
                    {card.comingSoon ? (
                      <div className="service-media__coming-soon" aria-hidden>
                        <div className="service-media__coming-soon-plaque">
                          <span className="service-media__coming-soon-kicker">Currently unavailable</span>
                          <span className="service-media__coming-soon-label">Under Maintenance</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div
                    className={`service-text${card.brandLogo ? ' service-text--with-brand' : ''}`}
                  >
                    {card.brandLogo ? (
                      <div className="service-brand-row">
                        <img
                          src={card.brandLogo}
                          alt=""
                          className={`service-brand-logo${card.brandLogoBlend === 'lighten' ? ' service-brand-logo--blend-lighten' : ''}`}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    ) : null}
                    <p className="service-eyebrow">{card.eyebrow}</p>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className="tags">
                      {card.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    {isServiceLinkableFromGroup(card.slug) ? (
                      isExternalServiceHref(card.slug) ? (
                        <a
                          href={getServicePageHref(card.slug)}
                          className="action"
                          rel="noopener noreferrer"
                          onClick={() => {
                            if (card.slug === 'aviation') prepareGlobalWingsEntryNavigation()
                          }}
                        >
                          REQUEST DETAILS
                        </a>
                      ) : (
                        <Link
                          to={getServicePageHref(card.slug)}
                          className="action"
                          onClick={() => {
                            if (card.slug === 'aviation') prepareGlobalWingsEntryNavigation()
                          }}
                        >
                          REQUEST DETAILS
                        </Link>
                      )
                    ) : (
                      <span className="action action--maintenance" aria-disabled="true">
                        Under maintenance
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section section-led section-led--warm">
        <div className="contact-section-glow contact-section-glow-1" />
        <div className="contact-section-glow contact-section-glow-2" />
        <div className="container contact-section-inner">
          <div className="contact-section-text">
            <p className="eyebrow reveal">CONTACT</p>
            <h2 className="reveal reveal-delay-1">Need To Reach Our Team?</h2>
            <p className="section-sub">
              Open the dedicated Contact page for all office addresses, direct
              numbers, and full inquiry details.
            </p>
          </div>
          <div className="contact-card reveal-scale reveal">
            <div className="contact-card-shine" />
            <div className="contact-card-body">
              <p className="contact-card-copy">
                Contact details, direct office lines, and inquiry form are now
                available in a dedicated page.
              </p>
              <Link to="/contact" className="contact-card-btn">
                <span>OPEN CONTACT PAGE</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MeetTheTeam />

      <Footer />
    </div>
  )
}
