import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import MeetTheTeam from './MeetTheTeam'
import { useReveal } from '../hooks/useReveal'
import { getServicePagePath, serviceCards } from '../data/serviceCards'

const marqueeItems = [
  'ADR DISPUTE MEDIATION SERVICES',
  'VIP SERVICES',
  'ASTREAL DEVELOPERS',
  "BUSINESS CONSULTANT'S",
  'MEDIATION SERVICES',
]

export default function KomodromosGroupHomePage() {
  const pageRef = useReveal()

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

      <section id="home" className="hero-section">
        <div className="hero-bg hero-bg--static" aria-hidden />
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

      <section className="section highlights">
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
              <strong>17</strong>
              <span>YEARS OF EXPERIENCE</span>
            </div>
            <div className="stat-card reveal reveal-delay-2">
              <strong>14</strong>
              <span>INTERNATIONAL PARTNERS</span>
            </div>
            <div className="stat-card reveal reveal-delay-3">
              <strong>74</strong>
              <span>QUALIFIED SPECIALISTS</span>
            </div>
            <div className="stat-card reveal reveal-delay-4">
              <strong>100</strong>
              <span>SERVICES</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
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
                    <Link to={getServicePagePath(card.slug)} className="action">
                      REQUEST DETAILS
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
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
