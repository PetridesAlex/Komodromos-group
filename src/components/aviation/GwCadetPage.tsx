import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  Briefcase,
  ChevronDown,
  Globe2,
  GraduationCap,
  Headset,
  Plane,
  Route,
  Shield,
  Ticket,
  TrendingUp,
  Users,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import { useReveal } from '../../hooks/useReveal'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  cadetAssessment,
  cadetBaseTraining,
  cadetClosing,
  cadetFaqs,
  cadetHero,
  cadetPartnerBenefits,
  cadetProgrammes,
  cadetRequirements,
  cadetStats,
  cadetTimeline,
  cadetTypeRatings,
  cadetWhyChoose,
  cadetWhyPilots,
  type CadetStat,
} from '../../data/aviationCadetPage'

const SERVICE_INTEREST = 'Aviation Agency Services'

const applyState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to apply for the GlobalCadet Programme with Global Wings Ltd.',
  },
}

const advisorState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to speak with an aviation advisor about the GlobalCadet Programme.',
  },
}

const WHY_ICONS = [Globe2, Shield, TrendingUp, GraduationCap, Award, Ticket, Route, Briefcase, Plane] as const
const PILOT_WHY_ICONS = [Users, Headset, Globe2, Award] as const
const PROGRAMME_ICONS = [GraduationCap, TrendingUp, Plane] as const

function CadetStatItem({ stat }: { stat: CadetStat }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(stat.numeric ?? 0)

  useEffect(() => {
    if (stat.numeric === undefined) return

    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setDisplay(stat.numeric)
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
          setDisplay(Math.round(stat.numeric! * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [stat.numeric])

  return (
    <article ref={ref} className="gw-cadet-stat">
      <p className="gw-cadet-stat__value">
        {stat.numeric !== undefined ? (
          <>
            {display}
            {stat.suffix ?? ''}
          </>
        ) : (
          stat.value
        )}
      </p>
      <p className="gw-cadet-stat__label">{stat.label}</p>
    </article>
  )
}

function CadetFaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="gw-cadet-faq">
      {cadetFaqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <article key={item.question} className={`gw-cadet-faq__item${isOpen ? ' is-open' : ''}`}>
            <button
              type="button"
              className="gw-cadet-faq__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>{item.question}</span>
              <ChevronDown className="gw-cadet-faq__chevron" aria-hidden size={18} strokeWidth={2} />
            </button>
            <div className="gw-cadet-faq__panel" hidden={!isOpen}>
              <p>{item.answer}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default function GwCadetPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-cadet-page" ref={pageRef}>
      <section className="gw-cadet-hero" aria-labelledby="gw-cadet-hero-title">
        <GwImagePlaceholder variant="hero-bg" className="gw-cadet-hero__bg" label="Insert image here" />
        <div className="gw-cadet-hero__scrim" aria-hidden />
        <div className="container gw-cadet-hero__inner">
          <p className="gw-cadet-hero__eyebrow reveal">{cadetHero.eyebrow}</p>
          <h1 id="gw-cadet-hero-title" className="gw-cadet-hero__title reveal reveal-delay-1">
            {cadetHero.title}
          </h1>
          <p className="gw-cadet-hero__tagline reveal reveal-delay-2">{cadetHero.tagline}</p>
          {cadetHero.paragraphs.map((para, i) => (
            <p key={i} className={`gw-cadet-hero__para reveal reveal-delay-${Math.min(i + 3, 4)}`}>
              {para}
            </p>
          ))}
          <div className="gw-cadet-hero__actions reveal reveal-delay-4">
            <Link to={AVIATION_ROUTES.contact} state={applyState} className="gw-cadet-hero__btn gw-cadet-hero__btn--primary">
              {cadetHero.primaryCta}
            </Link>
            <Link to={AVIATION_ROUTES.contact} state={advisorState} className="gw-cadet-hero__btn gw-cadet-hero__btn--secondary">
              {cadetHero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <main className="gw-main gw-main--cadet" aria-label="GlobalCadet Programme">
        <section className="gw-cadet-section gw-cadet-section--programmes" aria-labelledby="gw-cadet-programmes-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Career Pathways</p>
              <h2 id="gw-cadet-programmes-title" className="gw-cadet-section__title">
                Programmes We Offer
              </h2>
            </header>
            <div className="gw-cadet-programmes-grid">
              {cadetProgrammes.map((programme, i) => {
                const Icon = PROGRAMME_ICONS[i] ?? Plane
                return (
                  <article
                    key={programme.id}
                    className={`gw-cadet-programme-card reveal reveal-delay-${Math.min(i + 1, 3)}`}
                  >
                    <div className="gw-cadet-programme-card__icon-wrap">
                      <Icon className="gw-cadet-programme-card__icon" aria-hidden strokeWidth={1.5} />
                    </div>
                    <h3 className="gw-cadet-programme-card__title">{programme.title}</h3>
                    <p className="gw-cadet-programme-card__text">{programme.description}</p>
                    <div className="gw-cadet-programme-card__salary">
                      <span className="gw-cadet-programme-card__salary-label">{programme.salaryLabel}</span>
                      <strong>{programme.salary}</strong>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--why" aria-labelledby="gw-cadet-why-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Programme Benefits</p>
              <h2 id="gw-cadet-why-title" className="gw-cadet-section__title gw-cadet-section__title--light">
                Why Choose GlobalCadet?
              </h2>
            </header>
            <div className="gw-cadet-why-grid">
              {cadetWhyChoose.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                return (
                  <article key={item} className={`gw-cadet-why-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                    <span className="gw-cadet-why-card__icon-wrap">
                      <Icon className="gw-cadet-why-card__icon" aria-hidden strokeWidth={1.5} />
                    </span>
                    <p className="gw-cadet-why-card__text">{item}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--partners" aria-labelledby="gw-cadet-partners-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Airline Partners</p>
              <h2 id="gw-cadet-partners-title" className="gw-cadet-section__title">
                What Our Airline Partners Offer
              </h2>
            </header>
            <div className="gw-cadet-benefits-grid">
              {cadetPartnerBenefits.map((benefit, i) => (
                <article key={benefit} className={`gw-cadet-benefit-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                  <span className="gw-cadet-benefit-card__dot" aria-hidden />
                  <p>{benefit}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--timeline" aria-labelledby="gw-cadet-timeline-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow gw-cadet-section__eyebrow--light">Training Journey</p>
              <h2 id="gw-cadet-timeline-title" className="gw-cadet-section__title gw-cadet-section__title--light">
                GlobalCadet Training Path
              </h2>
            </header>
            <ol className="gw-cadet-timeline">
              {cadetTimeline.map((step, i) => (
                <li key={step.title} className={`gw-cadet-timeline__step reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                  <div className="gw-cadet-timeline__marker">
                    <span className="gw-cadet-timeline__index">{step.step}</span>
                  </div>
                  <div className="gw-cadet-timeline__body">
                    <h3 className="gw-cadet-timeline__title">
                      Step {parseInt(step.step, 10)} — {step.title}
                    </h3>
                    {step.intro ? <p className="gw-cadet-timeline__intro">{step.intro}</p> : null}
                    {step.groups?.map((group) => (
                      <div key={group.label} className="gw-cadet-timeline__group">
                        <p className="gw-cadet-timeline__group-label">{group.label}</p>
                        <ul className="gw-cadet-timeline__list">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {step.items ? (
                      <ul className="gw-cadet-timeline__list">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {step.duration ? <p className="gw-cadet-timeline__duration">{step.duration}</p> : null}
                    {step.note ? <p className="gw-cadet-timeline__note">{step.note}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--pricing" aria-labelledby="gw-cadet-pricing-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Investment</p>
              <h2 id="gw-cadet-pricing-title" className="gw-cadet-section__title">
                Type Rating Information
              </h2>
            </header>
            <div className="gw-cadet-pricing-grid">
              {cadetTypeRatings.map((card, i) => (
                <article key={card.title} className={`gw-cadet-pricing-card reveal reveal-delay-${i + 1}`}>
                  <h3 className="gw-cadet-pricing-card__title">{card.title}</h3>
                  <p className="gw-cadet-pricing-card__label">Price</p>
                  <p className="gw-cadet-pricing-card__price">{card.price}</p>
                </article>
              ))}
              <article className="gw-cadet-pricing-card gw-cadet-pricing-card--highlight reveal reveal-delay-3">
                <h3 className="gw-cadet-pricing-card__title">{cadetBaseTraining.title}</h3>
                <p className="gw-cadet-pricing-card__label">{cadetBaseTraining.priceLabel}</p>
                <p className="gw-cadet-pricing-card__price">{cadetBaseTraining.price}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--requirements" aria-labelledby="gw-cadet-requirements-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Eligibility</p>
              <h2 id="gw-cadet-requirements-title" className="gw-cadet-section__title gw-cadet-section__title--light">
                Entry Requirements
              </h2>
            </header>
            <div className="gw-cadet-requirements-grid">
              {cadetRequirements.map((group, i) => (
                <article key={group.title} className={`gw-cadet-requirement-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                  <h3 className="gw-cadet-requirement-card__title">{group.title}</h3>
                  <ul className="gw-cadet-requirement-card__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="gw-cadet-assessment reveal">
              <h3 className="gw-cadet-assessment__title">{cadetAssessment.title}</h3>
              {cadetAssessment.paragraphs.map((para, i) => (
                <p key={i} className="gw-cadet-assessment__para">
                  {para}
                </p>
              ))}
              <div className="gw-cadet-assessment__score">
                <span className="gw-cadet-assessment__score-label">{cadetAssessment.passLabel}</span>
                <strong>{cadetAssessment.passScore}</strong>
              </div>
              <p className="gw-cadet-assessment__outro">{cadetAssessment.outro}</p>
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--pilots" aria-labelledby="gw-cadet-pilots-title">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Our Advantage</p>
              <h2 id="gw-cadet-pilots-title" className="gw-cadet-section__title">
                Why Pilots Choose Global Wings
              </h2>
            </header>
            <div className="gw-cadet-pilots-grid">
              {cadetWhyPilots.map((item, i) => {
                const Icon = PILOT_WHY_ICONS[i] ?? Award
                return (
                  <article key={item.title} className={`gw-cadet-pilot-card reveal reveal-delay-${Math.min((i % 2) + 1, 2)}`}>
                    <span className="gw-cadet-pilot-card__icon-wrap">
                      <Icon className="gw-cadet-pilot-card__icon" aria-hidden strokeWidth={1.5} />
                    </span>
                    <h3 className="gw-cadet-pilot-card__title">{item.title}</h3>
                    <p className="gw-cadet-pilot-card__text">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--stats" aria-label="Programme statistics">
          <div className="container">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow gw-cadet-section__eyebrow--light">By the Numbers</p>
              <h2 className="gw-cadet-section__title gw-cadet-section__title--light">Programme Statistics</h2>
            </header>
            <div className="gw-cadet-stats-grid">
              {cadetStats.map((stat) => (
                <CadetStatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--faq" aria-labelledby="gw-cadet-faq-title">
          <div className="container gw-cadet-faq-layout">
            <header className="gw-cadet-section__header reveal">
              <p className="gw-cadet-section__eyebrow">Support</p>
              <h2 id="gw-cadet-faq-title" className="gw-cadet-section__title">
                Frequently Asked Questions
              </h2>
            </header>
            <div className="reveal reveal-delay-1">
              <CadetFaqAccordion />
            </div>
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--closing" aria-labelledby="gw-cadet-closing-title">
          <div className="container gw-cadet-closing">
            <div className="gw-cadet-closing__inner reveal">
              <h2 id="gw-cadet-closing-title" className="gw-cadet-closing__title">
                {cadetClosing.title}
              </h2>
              {cadetClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-cadet-closing__para">
                  {para}
                </p>
              ))}
              <div className="gw-cadet-closing__actions">
                <Link to={AVIATION_ROUTES.contact} state={applyState} className="gw-cadet-closing__btn gw-cadet-closing__btn--primary">
                  {cadetClosing.primaryCta}
                </Link>
                <Link to={AVIATION_ROUTES.contact} state={advisorState} className="gw-cadet-closing__btn gw-cadet-closing__btn--secondary">
                  {cadetClosing.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
