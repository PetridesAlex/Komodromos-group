import { Link } from 'react-router-dom'
import {
  Award,
  BookOpen,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Headset,
  MapPin,
  Plane,
  Route,
  Shield,
  Stethoscope,
  Users,
  Wrench,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import { useReveal } from '../../hooks/useReveal'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  captainProgram,
  lineTrainingProgram,
  trainingsClosing,
  trainingsHero,
  trainingsIntro,
  trainingsServiceCategories,
  trainingsTimeline,
  trainingsWhyCards,
} from '../../data/aviationTrainingsPage'

const SERVICE_INTEREST = 'Aviation Agency Services'

const SERVICE_ICONS = [Plane, Award, ClipboardCheck, Stethoscope, Wrench] as const
const WHY_ICONS = [Globe2, GraduationCap, Headset, Shield, Route, BookOpen] as const

const applyState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to apply for aviation training with Global Wings Ltd.',
  },
}

const advisorState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to speak with an aviation advisor about training programmes.',
  },
}

export default function GwTrainingsPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-trainings-page" ref={pageRef}>
      <section className="gw-trainings-hero" aria-labelledby="gw-trainings-hero-title">
        <GwImagePlaceholder variant="hero-bg" className="gw-trainings-hero__bg" label="Insert image here" />
        <div className="gw-trainings-hero__scrim" aria-hidden />
        <div className="container gw-trainings-hero__inner">
          <p className="gw-trainings-hero__eyebrow reveal">Training & Aviation Services · Global Wings</p>
          <h1 id="gw-trainings-hero-title" className="gw-trainings-hero__title reveal reveal-delay-1">
            {trainingsHero.title}
          </h1>
          <p className="gw-trainings-hero__subtitle reveal reveal-delay-2">{trainingsHero.subtitle}</p>
        </div>
      </section>

      <main className="gw-main gw-main--trainings" aria-label="Training and Aviation Services">
        <section className="gw-trainings-section gw-trainings-section--intro">
          <div className="container gw-trainings-intro">
            <div className="gw-trainings-intro__copy reveal">
              <p className="gw-trainings-section__eyebrow">Professional Aviation Training</p>
              <h2 className="gw-trainings-section__title">{trainingsIntro.title}</h2>
              {trainingsIntro.paragraphs.map((para, i) => (
                <p key={i} className="gw-trainings-intro__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="gw-trainings-intro__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--services" aria-labelledby="gw-trainings-services-title">
          <div className="container">
            <header className="gw-trainings-section__header reveal">
              <p className="gw-trainings-section__eyebrow">Our Training Services</p>
              <h2 id="gw-trainings-services-title" className="gw-trainings-section__title gw-trainings-section__title--light">
                Comprehensive programmes for every stage of your career
              </h2>
            </header>
            <div className="gw-trainings-services-grid">
              {trainingsServiceCategories.map((category, i) => {
                const Icon = SERVICE_ICONS[i] ?? Plane
                return (
                  <article
                    key={category.title}
                    className={`gw-trainings-service-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <div className="gw-trainings-service-card__head">
                      <span className="gw-trainings-service-card__icon-wrap">
                        <Icon className="gw-trainings-service-card__icon" aria-hidden strokeWidth={1.5} />
                      </span>
                      <h3 className="gw-trainings-service-card__title">{category.title}</h3>
                    </div>
                    <ul className="gw-trainings-service-card__list">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--line" aria-labelledby="gw-trainings-line-title">
          <div className="container">
            <div className="gw-trainings-line">
              <div className="gw-trainings-line__copy reveal">
                <p className="gw-trainings-section__eyebrow">{lineTrainingProgram.eyebrow}</p>
                <h2 id="gw-trainings-line-title" className="gw-trainings-section__title">
                  {lineTrainingProgram.title}
                </h2>
                {lineTrainingProgram.paragraphs.map((para, i) => (
                  <p key={i} className="gw-trainings-line__para">
                    {para}
                  </p>
                ))}
              </div>
              <div className="gw-trainings-line__media reveal reveal-delay-1">
                <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
              </div>
            </div>

            <div className="gw-trainings-includes reveal">
              <h3 className="gw-trainings-includes__title">Programme Includes</h3>
              <div className="gw-trainings-includes-grid">
                {lineTrainingProgram.includes.map((item, i) => (
                  <div key={item} className={`gw-trainings-include-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                    <span className="gw-trainings-include-card__dot" aria-hidden />
                    <p className="gw-trainings-include-card__text">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="gw-trainings-meta-grid reveal">
              <div className="gw-trainings-meta-card">
                <MapPin className="gw-trainings-meta-card__icon" aria-hidden strokeWidth={1.5} />
                <h3 className="gw-trainings-meta-card__title">Programme Location</h3>
                <p className="gw-trainings-meta-card__value">{lineTrainingProgram.location}</p>
              </div>
              <div className="gw-trainings-meta-card gw-trainings-meta-card--wide">
                <ClipboardCheck className="gw-trainings-meta-card__icon" aria-hidden strokeWidth={1.5} />
                <h3 className="gw-trainings-meta-card__title">Minimum Entry Requirements</h3>
                <ul className="gw-trainings-meta-card__list">
                  {lineTrainingProgram.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--timeline" aria-labelledby="gw-trainings-timeline-title">
          <div className="container">
            <header className="gw-trainings-section__header reveal">
              <p className="gw-trainings-section__eyebrow gw-trainings-section__eyebrow--light">Training Programme Timeline</p>
              <h2 id="gw-trainings-timeline-title" className="gw-trainings-section__title gw-trainings-section__title--light">
                Your path from selection to First Officer employment
              </h2>
            </header>
            <ol className="gw-trainings-timeline">
              {trainingsTimeline.map((step, i) => (
                <li
                  key={step.title}
                  className={`gw-trainings-timeline__step reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                >
                  <div className="gw-trainings-timeline__marker">
                    <span className="gw-trainings-timeline__index">{step.step}</span>
                  </div>
                  <div className="gw-trainings-timeline__body">
                    <h3 className="gw-trainings-timeline__title">Step {parseInt(step.step, 10)} — {step.title}</h3>
                    {step.items.length > 1 || !step.items[0]?.includes('Official evaluation') ? (
                      <ul className="gw-trainings-timeline__list">
                        {step.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="gw-trainings-timeline__text">{step.items[0]}</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--captain" aria-labelledby="gw-trainings-captain-title">
          <div className="container">
            <div className="gw-trainings-captain">
              <div className="gw-trainings-captain__copy reveal">
                <p className="gw-trainings-section__eyebrow">{captainProgram.eyebrow}</p>
                <h2 id="gw-trainings-captain-title" className="gw-trainings-section__title">
                  {captainProgram.title}
                </h2>
                {captainProgram.paragraphs.map((para, i) => (
                  <p key={i} className="gw-trainings-captain__para">
                    {para}
                  </p>
                ))}
              </div>
              <div className="gw-trainings-captain__media reveal reveal-delay-1">
                <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
              </div>
            </div>

            <div className="gw-trainings-captain-grid reveal">
              <div className="gw-trainings-captain-panel">
                <h3 className="gw-trainings-captain-panel__title">Programme Benefits</h3>
                <div className="gw-trainings-benefits-grid">
                  {captainProgram.benefits.map((item, i) => (
                    <div key={item} className={`gw-trainings-benefit-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                      <Users className="gw-trainings-benefit-card__icon" aria-hidden strokeWidth={1.5} />
                      <p className="gw-trainings-benefit-card__text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gw-trainings-captain-panel gw-trainings-captain-panel--req">
                <h3 className="gw-trainings-captain-panel__title">Minimum Requirements</h3>
                <ul className="gw-trainings-captain-reqs">
                  {captainProgram.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--why" aria-labelledby="gw-trainings-why-title">
          <div className="container">
            <header className="gw-trainings-section__header reveal">
              <p className="gw-trainings-section__eyebrow">Why Train With Global Wings</p>
              <h2 id="gw-trainings-why-title" className="gw-trainings-section__title">
                World-class training backed by industry expertise
              </h2>
            </header>
            <div className="gw-trainings-why-grid">
              {trainingsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                return (
                  <article
                    key={item.title}
                    className={`gw-trainings-why-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-trainings-why-card__icon-wrap">
                      <Icon className="gw-trainings-why-card__icon" aria-hidden strokeWidth={1.5} />
                    </span>
                    <h3 className="gw-trainings-why-card__title">{item.title}</h3>
                    <p className="gw-trainings-why-card__text">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--closing" aria-labelledby="gw-trainings-closing-title">
          <div className="container gw-trainings-closing">
            <div className="gw-trainings-closing__inner reveal">
              <h2 id="gw-trainings-closing-title" className="gw-trainings-closing__title">
                {trainingsClosing.title}
              </h2>
              {trainingsClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-trainings-closing__para">
                  {para}
                </p>
              ))}
              <div className="gw-trainings-closing__actions">
                <Link to={AVIATION_ROUTES.contact} state={applyState} className="gw-trainings-closing__btn gw-trainings-closing__btn--primary">
                  {trainingsClosing.primaryCta}
                </Link>
                <Link to={AVIATION_ROUTES.contact} state={advisorState} className="gw-trainings-closing__btn gw-trainings-closing__btn--secondary">
                  {trainingsClosing.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
