import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GwBlogSection from './aviation/GwBlogSection'
import GwHeroCarousel from './aviation/GwHeroCarousel'
import GwImagePlaceholder from './aviation/GwImagePlaceholder'
import GwServicesSection from './aviation/GwServicesSection'
import GwTeamSection from './aviation/GwTeamSection'
import { useReveal } from '../hooks/useReveal'
import {
  AVIATION_SECTIONS,
  AVIATION_YOUTUBE_EMBED,
  AVIATION_ROUTES,
  gwAboutSection,
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
            <div className="gw-about">
              <div className="gw-about__layout">
                <article className="gw-about__panel gw-about__panel--copy reveal">
                  <div className="gw-about__panel-accent" aria-hidden />
                  <div className="gw-about__panel-inner">
                    <span className="gw-about__eyebrow">{gwAboutSection.eyebrow}</span>
                    <h2 className="gw-about__title">{gwAboutSection.title}</h2>
                    <p className="gw-about__intro">{gwAboutSection.intro}</p>

                    <ul className="gw-about__highlights" aria-label="Company highlights">
                      {gwAboutSection.highlights.map((item) => (
                        <li key={item.label}>
                          <span className="gw-about__highlight-value">{item.value}</span>
                          <span className="gw-about__highlight-label">{item.label}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="gw-about__capabilities" aria-label="Core capabilities">
                      {gwAboutSection.capabilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>

                <article className="gw-about__panel gw-about__panel--media reveal reveal-delay-1">
                  <div className="gw-about__panel-accent" aria-hidden />
                  <div className="gw-about__media-inner">
                    <div className="gw-about__video-label">
                      <span className="gw-about__video-badge">Company overview</span>
                      <p className="gw-about__video-caption">{gwAboutSection.videoCaption}</p>
                    </div>
                    <div className="gw-video gw-video--about">
                      <div className="gw-video__shell" aria-hidden>
                        <div className="gw-video__accent" />
                      </div>
                      <div className="gw-video__frame">
                        <iframe
                          src={AVIATION_YOUTUBE_EMBED}
                          title="About Global Wings Ltd — company overview"
                          loading="eager"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </article>
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
                <Link to={AVIATION_ROUTES.contact} className="gw-closing__cta gw-closing__cta--primary">
                  <span className="gw-closing__cta-fill" aria-hidden />
                  <span className="gw-closing__cta-label">{gwClosingCta.primaryCta}</span>
                  <ArrowRight className="gw-closing__cta-icon" aria-hidden size={16} />
                </Link>
                <Link to={`${AVIATION_ROUTES.home}#${AVIATION_SECTIONS.services}`} className="gw-closing__cta gw-closing__cta--secondary">
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
