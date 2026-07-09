import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Award,
  Eye,
  Globe2,
  Handshake,
  Headset,
  Plane,
  Sparkles,
  Target,
  Timer,
  Users,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import GwPageHero from './GwPageHero'
import { useReveal } from '../../hooks/useReveal'
import { getAviationRoutes } from '../../data/globalWingsPage'
import {
  pilotsClosing,
  pilotsIntro,
  pilotsMissionCards,
  pilotsStats,
  pilotsWhyCards,
  pilotsWhySection,
} from '../../data/aviationPilotsPage'

const MISSION_ICONS = {
  mission: Target,
  vision: Eye,
  values: Award,
} as const

const WHY_ICONS = [Globe2, Users, Timer, Plane, Headset, Handshake] as const

function PilotsStatCounter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(value)
      return
    }

    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        const duration = 2000
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(value * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const formatted = display >= 1000 ? display.toLocaleString() : String(display)

  return (
    <div className="gw-pilots-stat reveal" ref={ref}>
      <p className="gw-pilots-stat__value">
        {formatted}
        <span className="gw-pilots-stat__suffix">{suffix}</span>
      </p>
      <p className="gw-pilots-stat__label">{label}</p>
    </div>
  )
}

export default function GwPilotsPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-pilots-page" ref={pageRef}>
      <GwPageHero
        id="gw-pilots-hero-title"
        eyebrow="Pilots · Global Wings"
        title={pilotsIntro.title}
        lead={pilotsIntro.paragraphs[0]}
        highlights={[
          { value: 'Global', label: 'Recruitment reach' },
          { value: 'Trusted', label: 'Airline partners' },
        ]}
      />

      <main className="gw-main gw-main--pilots" aria-label="Global Wings Pilots">
        <section className="gw-pilots-section gw-pilots-section--intro">
          <div className="container">
            <div className="gw-pilots-intro">
              <article className="gw-pilots-intro__panel gw-pilots-intro__copy reveal">
                <span className="gw-pilots-intro__panel-accent" aria-hidden />
                <div className="gw-pilots-intro__panel-inner">
                  <p className="gw-pilots-section__eyebrow">{pilotsIntro.eyebrow}</p>
                  <h2 className="gw-pilots-section__title">{pilotsIntro.title}</h2>
                  <p className="gw-pilots-intro__lead">{pilotsIntro.intro}</p>
                  <div className="gw-pilots-intro__body">
                    {pilotsIntro.paragraphs.map((para, i) => (
                      <p key={i} className="gw-pilots-intro__para">
                        {para}
                      </p>
                    ))}
                  </div>
                  <ul className="gw-pilots-intro__stats" aria-label="Global Wings at a glance">
                    {pilotsIntro.highlights.map((item) => (
                      <li key={item.label}>
                        <span className="gw-pilots-intro__stat-value">{item.value}</span>
                        <span className="gw-pilots-intro__stat-label">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <article className="gw-pilots-intro__panel gw-pilots-intro__media reveal reveal-delay-1">
                <span className="gw-pilots-intro__panel-accent" aria-hidden />
                <div className="gw-pilots-intro__frame">
                  <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
                  <span className="gw-pilots-intro__frame-badge">{pilotsIntro.frameBadge}</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="gw-pilots-section gw-pilots-section--mission" aria-labelledby="gw-pilots-mission-title">
          <div className="container">
            <header className="gw-pilots-section__header reveal">
              <p className="gw-pilots-section__eyebrow">
                <Sparkles className="gw-pilots-section__eyebrow-icon" aria-hidden size={14} />
                Our Mission
              </p>
              <h2 id="gw-pilots-mission-title" className="gw-pilots-section__title gw-pilots-section__title--light">
                Purpose, vision &amp; values
              </h2>
            </header>
            <div className="gw-pilots-mission-grid">
              {pilotsMissionCards.map((item, i) => {
                const Icon = MISSION_ICONS[item.id as keyof typeof MISSION_ICONS]
                return (
                  <article
                    key={item.id}
                    className={`gw-pilots-mission-card reveal reveal-delay-${Math.min(i + 1, 3)}`}
                  >
                    <div className="gw-pilots-mission-card__icon-wrap">
                      <Icon className="gw-pilots-mission-card__icon" aria-hidden strokeWidth={1.5} />
                    </div>
                    <h3 className="gw-pilots-mission-card__title">{item.title}</h3>
                    {item.values ? (
                      <ul className="gw-pilots-mission-card__values">
                        {item.values.map((v) => (
                          <li key={v}>{v}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="gw-pilots-mission-card__text">{item.text}</p>
                    )}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-pilots-section gw-pilots-section--why" aria-labelledby="gw-pilots-why-title">
          <div className="gw-pilots-why__bg" aria-hidden />
          <div className="container gw-pilots-why">
            <header className="gw-pilots-section__header gw-pilots-why__header reveal">
              <p className="gw-pilots-section__eyebrow">{pilotsWhySection.eyebrow}</p>
              <h2 id="gw-pilots-why-title" className="gw-pilots-section__title">
                {pilotsWhySection.title}
              </h2>
              <p className="gw-pilots-why__intro">{pilotsWhySection.intro}</p>
            </header>
            <div className="gw-pilots-why-grid">
              {pilotsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                const featured = i < 2
                return (
                  <article
                    key={item.title}
                    className={`gw-pilots-why-card${featured ? ' gw-pilots-why-card--featured' : ''} reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-pilots-why-card__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="gw-pilots-why-card__icon-wrap">
                      <Icon className="gw-pilots-why-card__icon" aria-hidden strokeWidth={1.5} />
                    </span>
                    <h3 className="gw-pilots-why-card__title">{item.title}</h3>
                    <p className="gw-pilots-why-card__text">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-pilots-section gw-pilots-section--stats" aria-label="Company statistics">
          <div className="container">
            <div className="gw-pilots-stats-grid">
              {pilotsStats.map((stat) => (
                <PilotsStatCounter
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="gw-pilots-section gw-pilots-section--closing" aria-labelledby="gw-pilots-closing-title">
          <div className="gw-pilots-closing__bg" aria-hidden />
          <div className="container gw-pilots-closing">
            <div className="gw-pilots-closing__copy reveal">
              <p className="gw-pilots-closing__eyebrow">{pilotsClosing.eyebrow}</p>
              <h2 id="gw-pilots-closing-title" className="gw-pilots-closing__title">
                {pilotsClosing.title}{' '}
                <span className="gw-pilots-closing__title-em">{pilotsClosing.titleEmphasis}</span>
              </h2>
              {pilotsClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-pilots-closing__para">
                  {para}
                </p>
              ))}
              <ul className="gw-pilots-closing__stats" aria-label="Global Wings impact">
                {pilotsClosing.highlights.map((item) => (
                  <li key={item.label}>
                    <span className="gw-pilots-closing__stat-value">{item.value}</span>
                    <span className="gw-pilots-closing__stat-label">{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="gw-pilots-closing__actions">
                <Link to={getAviationRoutes().contact} className="gw-pilots-closing__cta gw-pilots-closing__cta--primary">
                  <span className="gw-pilots-closing__cta-fill" aria-hidden />
                  <span className="gw-pilots-closing__cta-label">{pilotsClosing.primaryCta}</span>
                  <ArrowRight className="gw-pilots-closing__cta-icon" aria-hidden size={16} />
                </Link>
                <Link to={getAviationRoutes().jobs} className="gw-pilots-closing__cta gw-pilots-closing__cta--secondary">
                  <span className="gw-pilots-closing__cta-label">{pilotsClosing.secondaryCta}</span>
                  <ArrowRight className="gw-pilots-closing__cta-icon" aria-hidden size={16} />
                </Link>
              </div>
            </div>
            <div className="gw-pilots-closing__panel reveal reveal-delay-1">
              <span className="gw-pilots-closing__panel-accent" aria-hidden />
              <div className="gw-pilots-closing__media">
                <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
              </div>
              <p className="gw-pilots-closing__panel-caption">Connecting exceptional talent with leading airlines</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
