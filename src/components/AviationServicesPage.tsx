import { useEffect, useRef, useState } from 'react'
import GwBlogSection from './aviation/GwBlogSection'
import GwHeroCarousel from './aviation/GwHeroCarousel'
import GwImagePlaceholder from './aviation/GwImagePlaceholder'
import GwServicesSection from './aviation/GwServicesSection'
import GwTeamSection from './aviation/GwTeamSection'
import { useReveal } from '../hooks/useReveal'
import {
  AVIATION_SECTIONS,
  AVIATION_YOUTUBE_EMBED,
  gwClosingCta,
  gwClientCount,
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
        <section id={AVIATION_SECTIONS.about} className="gw-section gw-section--about">
          <div className="container">
            <header className="gw-section__header reveal">
              <h2 className="gw-section__title">About Global Wings</h2>
            </header>
            <div className="gw-video reveal reveal-delay-1">
              <div className="gw-video__frame">
                <iframe
                  src={AVIATION_YOUTUBE_EMBED}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <GwServicesSection sectionId={AVIATION_SECTIONS.services} />

        <section id={AVIATION_SECTIONS.clients} className="gw-section gw-section--clients">
          <div className="container">
            <header className="gw-section__header reveal">
              <h2 className="gw-section__title">Our Clients</h2>
            </header>
          </div>
          <div className="gw-section__bleed gw-clients-grid">
            {Array.from({ length: gwClientCount }, (_, i) => (
              <a
                key={i}
                href="#"
                className={`gw-client-cell reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
              >
                <GwImagePlaceholder aspectRatio="570 / 270" variant="logo" label="Insert image here" />
              </a>
            ))}
          </div>
        </section>

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
              <GwImagePlaceholder aspectRatio="1 / 1" className="gw-leader__logo" label="Insert image here" />
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

        <section className="gw-section gw-section--closing" aria-label="Contact call to action">
          <div className="container gw-closing">
            <h3 className="gw-closing__lead reveal">{gwClosingCta.lead}</h3>
            <h2 className="gw-closing__title reveal reveal-delay-1">{gwClosingCta.title}</h2>
          </div>
        </section>
      </main>
    </div>
  )
}
