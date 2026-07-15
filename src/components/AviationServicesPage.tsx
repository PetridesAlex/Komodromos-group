import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GwAboutSection from './aviation/GwAboutSection'
import GwBlogSection from './aviation/GwBlogSection'
import GwClientsSection from './aviation/GwClientsSection'
import GwHeroCarousel from './aviation/GwHeroCarousel'
import GwImagePlaceholder from './aviation/GwImagePlaceholder'
import GwServicesSection from './aviation/GwServicesSection'
import GwTeamSection from './aviation/GwTeamSection'
import { useReveal } from '../hooks/useReveal'
import {
  AVIATION_SECTIONS,
  getAviationRoutes,
  gwClosingCta,
  gwLeaderSection,
  gwStats,
} from '../data/globalWingsPage'

function GwStatItem({
  value,
  label,
  animate,
  suffix = '',
}: {
  value: string
  label: string
  animate?: boolean
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(animate ? '0' : value)

  useEffect(() => {
    if (!animate) return
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    const target = parseInt(value, 10)
    let started = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const duration = 1800
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(String(Math.round(target * eased)))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [animate, value])

  return (
    <div className="gw-stat reveal" ref={ref}>
      <GwImagePlaceholder variant="icon" className="gw-stat__icon" label="Insert image here" />
      <p className="gw-stat__value">
        {display}
        {suffix}
      </p>
      <p className="gw-stat__label">{label}</p>
    </div>
  )
}

export default function AviationServicesPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-aviation-page--home" ref={pageRef}>
      <GwHeroCarousel />

      <main className="gw-main" aria-label="Aviation Agency Services">
        <GwAboutSection sectionId={AVIATION_SECTIONS.about} />

        <GwServicesSection sectionId={AVIATION_SECTIONS.services} />

        <GwClientsSection />

        <section id={AVIATION_SECTIONS.leader} className="gw-section gw-section--leader">
          <div className="container gw-leader">
            <div className="gw-leader__copy reveal">
              <h2 className="gw-leader__title">{gwLeaderSection.title}</h2>
              {gwLeaderSection.paragraphs.map((para, pi) => (
                <p
                  key={pi}
                  className={`gw-leader__para${pi === gwLeaderSection.paragraphs.length - 1 ? ' gw-leader__para--last' : ''}`}
                >
                  {para.split('\n\n').map((block, bi, arr) => (
                    <span key={bi}>
                      {block}
                      {bi < arr.length - 1 ? (
                        <>
                          <br />
                          <br />
                        </>
                      ) : null}
                    </span>
                  ))}
                </p>
              ))}
              <a href={gwLeaderSection.moreHref} className="gw-btn-more">
                More
              </a>
            </div>
            <div className="gw-leader__media reveal reveal-delay-1">
              <div className="gw-leader__logo-frame">
                <span className="gw-leader__logo-ring" aria-hidden />
                <span className="gw-leader__logo-glow" aria-hidden />
                <img
                  className="gw-leader__logo"
                  src={gwLeaderSection.imageSrc}
                  alt={gwLeaderSection.imageAlt}
                  width={520}
                  height={520}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <GwTeamSection sectionId={AVIATION_SECTIONS.team} />

        <section className="gw-section gw-section--stats" aria-label="Company statistics">
          <div className="gw-section__bleed gw-stats-grid">
            {gwStats.map((stat) => (
              <GwStatItem
                key={stat.label}
                value={stat.value.replace('%', '')}
                label={stat.label}
                animate={stat.animate}
                suffix={stat.value.includes('%') ? '%' : ''}
              />
            ))}
          </div>
        </section>

        <GwBlogSection sectionId={AVIATION_SECTIONS.blog} />

        <section className="gw-section gw-section--closing" aria-labelledby="gw-home-closing-title">
          <div className="gw-closing__bg" aria-hidden />
          <div className="container gw-closing">
            <div className="gw-closing__copy reveal">
              <p className="gw-closing__eyebrow">{gwClosingCta.eyebrow}</p>
              <h2 id="gw-home-closing-title" className="gw-closing__title reveal reveal-delay-1">
                {gwClosingCta.title}{' '}
                <span className="gw-closing__title-em">{gwClosingCta.titleEmphasis}</span>
              </h2>
              <p className="gw-closing__lead">{gwClosingCta.lead}</p>
              <ul className="gw-closing__stats" aria-label="Global Wings highlights">
                {gwClosingCta.highlights.map((item) => (
                  <li key={item.label}>
                    <span className="gw-closing__stat-value">{item.value}</span>
                    <span className="gw-closing__stat-label">{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="gw-closing__actions">
                <Link to={getAviationRoutes().contact} className="gw-closing__cta gw-closing__cta--primary">
                  <span className="gw-closing__cta-fill" aria-hidden />
                  <span className="gw-closing__cta-label">{gwClosingCta.primaryCta}</span>
                  <ArrowRight className="gw-closing__cta-icon" aria-hidden size={16} />
                </Link>
                <Link to={`${getAviationRoutes().home}#${AVIATION_SECTIONS.services}`} className="gw-closing__cta gw-closing__cta--secondary">
                  <span className="gw-closing__cta-label">{gwClosingCta.secondaryCta}</span>
                  <ArrowRight className="gw-closing__cta-icon" aria-hidden size={16} />
                </Link>
              </div>
            </div>
            <div className="gw-closing__panel reveal reveal-delay-1" aria-hidden>
              <span className="gw-closing__panel-accent" />
              <p className="gw-closing__panel-eyebrow">Why Global Wings</p>
              <p className="gw-closing__panel-title">Recruitment. Training. Results.</p>
              <ul className="gw-closing__panel-list">
                <li>Flight crew &amp; cabin crew resourcing</li>
                <li>Airline partnerships worldwide</li>
                <li>Training, cadet &amp; career programmes</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
