import { useEffect, useRef, useState } from 'react'
import {
  Award,
  Check,
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
import { useReveal } from '../../hooks/useReveal'
import {
  pilotsClosing,
  pilotsIntro,
  pilotsMissionCards,
  pilotsStats,
  pilotsWhyCards,
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
      <section className="gw-pilots-hero" aria-labelledby="gw-pilots-hero-title">
        <GwImagePlaceholder variant="hero-bg" className="gw-pilots-hero__bg" label="Insert image here" />
        <div className="gw-pilots-hero__scrim" aria-hidden />
        <div className="container gw-pilots-hero__inner">
          <p className="gw-pilots-hero__eyebrow reveal">Pilots · Global Wings</p>
          <h1 id="gw-pilots-hero-title" className="gw-pilots-hero__title reveal reveal-delay-1">
            {pilotsIntro.title}
          </h1>
          <p className="gw-pilots-hero__lead reveal reveal-delay-2">{pilotsIntro.paragraphs[0]}</p>
        </div>
      </section>

      <main className="gw-main gw-main--pilots" aria-label="Global Wings Pilots">
        <section className="gw-pilots-section gw-pilots-section--intro">
          <div className="container gw-pilots-intro">
            <div className="gw-pilots-intro__copy reveal">
              <p className="gw-pilots-section__eyebrow">{pilotsIntro.eyebrow}</p>
              <h2 className="gw-pilots-section__title">{pilotsIntro.title}</h2>
              {pilotsIntro.paragraphs.map((para, i) => (
                <p key={i} className="gw-pilots-intro__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="gw-pilots-intro__media reveal reveal-delay-1">
              <div className="gw-pilots-intro__frame">
                <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
                <span className="gw-pilots-intro__frame-accent" aria-hidden />
              </div>
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
          <div className="container">
            <header className="gw-pilots-section__header reveal">
              <p className="gw-pilots-section__eyebrow">Why Choose Global Wings</p>
              <h2 id="gw-pilots-why-title" className="gw-pilots-section__title">
                The partner airlines &amp; professionals trust
              </h2>
            </header>
            <div className="gw-pilots-why-grid">
              {pilotsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                return (
                  <article
                    key={item.title}
                    className={`gw-pilots-why-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <div className="gw-pilots-why-card__head">
                      <span className="gw-pilots-why-card__check" aria-hidden>
                        <Check strokeWidth={2.5} />
                      </span>
                      <Icon className="gw-pilots-why-card__icon" aria-hidden strokeWidth={1.5} />
                    </div>
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
          <div className="container gw-pilots-closing">
            <div className="gw-pilots-closing__copy reveal">
              <h2 id="gw-pilots-closing-title" className="gw-pilots-closing__title">
                {pilotsClosing.title}
              </h2>
              {pilotsClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-pilots-closing__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="gw-pilots-closing__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
