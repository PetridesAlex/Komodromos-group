import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
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
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import GwPageHero from './GwPageHero'
import { useReveal } from '../../hooks/useReveal'
import { getAviationRoutes } from '../../data/globalWingsPage'
import {
  cadetAssessment,
  cadetBaseTraining,
  cadetClosing,
  cadetFaqs,
  cadetFaqSection,
  cadetHero,
  cadetPartnerBenefits,
  cadetProgrammes,
  cadetProgrammesSection,
  cadetRequirements,
  cadetStats,
  cadetTimeline,
  cadetTypeRatings,
  cadetWhyChoose,
  cadetWhyPilots,
  cadetWhySection,
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
  const reduceMotion = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="gw-cadet-faq">
      {cadetFaqs.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <article
            key={item.question}
            className={`gw-cadet-faq__item${isOpen ? ' gw-cadet-faq__item--open' : ''}${i === 0 ? ' gw-cadet-faq__item--featured' : ''}`}
          >
            <span className="gw-cadet-faq__accent" aria-hidden />
            <button
              type="button"
              className="gw-cadet-faq__trigger"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="gw-cadet-faq__index" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="gw-cadet-faq__question">{item.question}</span>
              <ChevronDown className="gw-cadet-faq__chevron" aria-hidden size={18} strokeWidth={2} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  className="gw-cadet-faq__panel"
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="gw-cadet-faq__panel-inner">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        )
      })}
    </div>
  )
}

function CadetProgrammesExplorer() {
  const reduceMotion = useReducedMotion()
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProgramme = cadetProgrammes[activeIndex]
  const ActiveIcon = PROGRAMME_ICONS[activeIndex] ?? Plane

  const selectProgramme = useCallback((index: number) => {
    setActiveIndex(index)
  }, [])

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = cadetProgrammes.length - 1
    let next = index

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault()
      next = index === lastIndex ? 0 : index + 1
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault()
      next = index === 0 ? lastIndex : index - 1
    } else {
      return
    }

    selectProgramme(next)
    document.getElementById(`${baseId}-prog-tab-${next}`)?.focus()
  }

  return (
    <div className="gw-cadet-programmes__shell reveal reveal-delay-1">
      <div className="gw-cadet-programmes__nav" role="tablist" aria-label="GlobalCadet programmes">
        {cadetProgrammes.map((programme, index) => {
          const Icon = PROGRAMME_ICONS[index] ?? Plane
          const isActive = index === activeIndex

          return (
            <button
              key={programme.id}
              type="button"
              id={`${baseId}-prog-tab-${index}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${baseId}-prog-panel`}
              tabIndex={isActive ? 0 : -1}
              className={`gw-cadet-programmes__tab${isActive ? ' gw-cadet-programmes__tab--active' : ''}`}
              onClick={() => selectProgramme(index)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
            >
              <span className="gw-cadet-programmes__tab-icon-wrap" aria-hidden>
                <Icon className="gw-cadet-programmes__tab-icon" strokeWidth={1.5} />
              </span>
              <span className="gw-cadet-programmes__tab-label">{programme.title}</span>
            </button>
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={activeProgramme.id}
          id={`${baseId}-prog-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-prog-tab-${activeIndex}`}
          className="gw-cadet-programme-feature"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="gw-cadet-programme-feature__accent" aria-hidden />
          <div className="gw-cadet-programme-feature__head">
            <span className="gw-cadet-programme-feature__icon-wrap" aria-hidden>
              <ActiveIcon className="gw-cadet-programme-feature__icon" strokeWidth={1.5} />
            </span>
            <div>
              <p className="gw-cadet-programme-feature__eyebrow">Selected programme</p>
              <h3 className="gw-cadet-programme-feature__title">{activeProgramme.title}</h3>
            </div>
          </div>
          <p className="gw-cadet-programme-feature__text">{activeProgramme.description}</p>
          <div className="gw-cadet-programme-feature__salary">
            <span className="gw-cadet-programme-feature__salary-label">{activeProgramme.salaryLabel}</span>
            <strong>{activeProgramme.salary}</strong>
          </div>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}

export default function GwCadetPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-cadet-page" ref={pageRef}>
      <GwPageHero
        id="gw-cadet-hero-title"
        eyebrow={cadetHero.eyebrow}
        title={cadetHero.title}
        subtitle={cadetHero.tagline}
        paragraphs={cadetHero.paragraphs}
        actions={[
          { label: cadetHero.primaryCta, to: getAviationRoutes().contact, variant: 'primary', state: applyState },
          {
            label: cadetHero.secondaryCta,
            to: getAviationRoutes().contact,
            variant: 'secondary',
            state: advisorState,
          },
        ]}
      />

      <main className="gw-main gw-main--cadet" aria-label="GlobalCadet Programme">
        <section className="gw-cadet-section gw-cadet-section--programmes" aria-labelledby="gw-cadet-programmes-title">
          <div className="container gw-cadet-programmes">
            <header className="gw-cadet-section__header gw-cadet-programmes__header reveal">
              <p className="gw-cadet-section__eyebrow">{cadetProgrammesSection.eyebrow}</p>
              <h2 id="gw-cadet-programmes-title" className="gw-cadet-section__title">
                {cadetProgrammesSection.title}
              </h2>
              <p className="gw-cadet-programmes__intro">{cadetProgrammesSection.intro}</p>
            </header>
            <CadetProgrammesExplorer />
          </div>
        </section>

        <section className="gw-cadet-section gw-cadet-section--why" aria-labelledby="gw-cadet-why-title">
          <div className="container">
            <header className="gw-cadet-section__header gw-cadet-why__header reveal">
              <p className="gw-cadet-section__eyebrow">{cadetWhySection.eyebrow}</p>
              <h2 id="gw-cadet-why-title" className="gw-cadet-section__title gw-cadet-section__title--light">
                {cadetWhySection.title}
              </h2>
              <p className="gw-cadet-why__intro">{cadetWhySection.intro}</p>
            </header>
            <div className="gw-cadet-why-grid">
              {cadetWhyChoose.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                const featured = i < 3
                return (
                  <article
                    key={item}
                    className={`gw-cadet-why-card${featured ? ' gw-cadet-why-card--featured' : ''} reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-cadet-why-card__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
            <header className="gw-cadet-section__header gw-cadet-faq__header reveal">
              <p className="gw-cadet-section__eyebrow">{cadetFaqSection.eyebrow}</p>
              <h2 id="gw-cadet-faq-title" className="gw-cadet-section__title">
                {cadetFaqSection.title}
              </h2>
              <p className="gw-cadet-faq__intro">{cadetFaqSection.intro}</p>
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
                <Link to={getAviationRoutes().contact} state={applyState} className="gw-cadet-closing__btn gw-cadet-closing__btn--primary">
                  {cadetClosing.primaryCta}
                </Link>
                <Link to={getAviationRoutes().contact} state={advisorState} className="gw-cadet-closing__btn gw-cadet-closing__btn--secondary">
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
