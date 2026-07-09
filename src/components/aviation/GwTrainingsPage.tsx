import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Globe2,
  GraduationCap,
  Headset,
  MapPin,
  Route,
  Shield,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import GwPageHero from './GwPageHero'
import GwTrainingsServicesSection from './GwTrainingsServicesSection'
import GwTrainingsTimelineSection from './GwTrainingsTimelineSection'
import { useReveal } from '../../hooks/useReveal'
import { getAviationRoutes } from '../../data/globalWingsPage'
import {
  captainProgram,
  lineTrainingProgram,
  trainingsClosing,
  trainingsHero,
  trainingsIntro,
  trainingsWhyCards,
  trainingsWhySection,
} from '../../data/aviationTrainingsPage'

const SERVICE_INTEREST = 'Aviation Agency Services'

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
      <GwPageHero
        id="gw-trainings-hero-title"
        eyebrow="Training & Aviation Services · Global Wings"
        title={trainingsHero.title}
        subtitle={trainingsHero.subtitle}
        highlights={[
          { value: 'Type', label: 'Ratings & checks' },
          { value: 'Career', label: 'Development' },
        ]}
      />

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

        <GwTrainingsServicesSection />

        <section className="gw-trainings-section gw-trainings-section--line" aria-labelledby="gw-trainings-line-title">
          <div className="container">
            <div className="gw-trainings-line-shell reveal">
              <div className="gw-trainings-line">
                <div className="gw-trainings-line__copy">
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

              <div className="gw-trainings-includes">
                <div className="gw-trainings-includes__head">
                  <h3 className="gw-trainings-includes__title">Programme Includes</h3>
                  <p className="gw-trainings-includes__count">{lineTrainingProgram.includes.length} inclusions</p>
                </div>
                <div className="gw-trainings-includes-grid">
                  {lineTrainingProgram.includes.map((item, i) => (
                    <div
                      key={item}
                      className={`gw-trainings-include-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                    >
                      <span className="gw-trainings-include-card__index" aria-hidden>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="gw-trainings-include-card__text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="gw-trainings-meta-grid">
                <div className="gw-trainings-meta-card">
                  <span className="gw-trainings-meta-card__accent" aria-hidden />
                  <MapPin className="gw-trainings-meta-card__icon" aria-hidden strokeWidth={1.5} />
                  <h3 className="gw-trainings-meta-card__title">Programme Location</h3>
                  <p className="gw-trainings-meta-card__value">{lineTrainingProgram.location}</p>
                </div>
                <div className="gw-trainings-meta-card gw-trainings-meta-card--wide">
                  <span className="gw-trainings-meta-card__accent" aria-hidden />
                  <ClipboardCheck className="gw-trainings-meta-card__icon" aria-hidden strokeWidth={1.5} />
                  <h3 className="gw-trainings-meta-card__title">Minimum Entry Requirements</h3>
                  <ul className="gw-trainings-meta-card__list">
                    {lineTrainingProgram.requirements.map((req, i) => (
                      <li key={req}>
                        <span className="gw-trainings-meta-card__req-index" aria-hidden>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GwTrainingsTimelineSection />

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
                <span className="gw-trainings-captain-panel__accent" aria-hidden />
                <h3 className="gw-trainings-captain-panel__title">Programme Benefits</h3>
                <div className="gw-trainings-benefits-grid">
                  {captainProgram.benefits.map((item, i) => (
                    <div key={item} className={`gw-trainings-benefit-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}>
                      <span className="gw-trainings-benefit-card__index" aria-hidden>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="gw-trainings-benefit-card__text">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gw-trainings-captain-panel gw-trainings-captain-panel--req">
                <span className="gw-trainings-captain-panel__accent" aria-hidden />
                <h3 className="gw-trainings-captain-panel__title">Minimum Requirements</h3>
                <ul className="gw-trainings-captain-reqs">
                  {captainProgram.requirements.map((req, i) => (
                    <li key={req}>
                      <span className="gw-trainings-captain-reqs__index" aria-hidden>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="gw-trainings-section gw-trainings-section--why" aria-labelledby="gw-trainings-why-title">
          <div className="container">
            <header className="gw-trainings-section__header gw-trainings-why__header reveal">
              <p className="gw-trainings-section__eyebrow">{trainingsWhySection.eyebrow}</p>
              <h2 id="gw-trainings-why-title" className="gw-trainings-section__title">
                {trainingsWhySection.title}
              </h2>
              <p className="gw-trainings-why__intro">{trainingsWhySection.intro}</p>
            </header>
            <div className="gw-trainings-why-grid">
              {trainingsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                const featured = i < 2
                return (
                  <article
                    key={item.title}
                    className={`gw-trainings-why-card${featured ? ' gw-trainings-why-card--featured' : ''} reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-trainings-why-card__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
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
          <div className="gw-trainings-closing__bg" aria-hidden />
          <div className="container gw-trainings-closing">
            <div className="gw-trainings-closing__copy reveal">
              <p className="gw-trainings-closing__eyebrow">{trainingsClosing.eyebrow}</p>
              <h2 id="gw-trainings-closing-title" className="gw-trainings-closing__title">
                {trainingsClosing.title}{' '}
                <span className="gw-trainings-closing__title-em">{trainingsClosing.titleEmphasis}</span>
              </h2>
              {trainingsClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-trainings-closing__para">
                  {para}
                </p>
              ))}
              <ul className="gw-trainings-closing__stats" aria-label="Training highlights">
                {trainingsClosing.highlights.map((item) => (
                  <li key={item.label}>
                    <span className="gw-trainings-closing__stat-value">{item.value}</span>
                    <span className="gw-trainings-closing__stat-label">{item.label}</span>
                  </li>
                ))}
              </ul>
              <div className="gw-trainings-closing__actions">
                <Link to={getAviationRoutes().contact} state={applyState} className="gw-trainings-closing__cta gw-trainings-closing__cta--primary">
                  <span className="gw-trainings-closing__cta-fill" aria-hidden />
                  <span className="gw-trainings-closing__cta-label">{trainingsClosing.primaryCta}</span>
                  <ArrowRight className="gw-trainings-closing__cta-icon" aria-hidden size={16} />
                </Link>
                <Link to={getAviationRoutes().contact} state={advisorState} className="gw-trainings-closing__cta gw-trainings-closing__cta--secondary">
                  <span className="gw-trainings-closing__cta-label">{trainingsClosing.secondaryCta}</span>
                  <ArrowRight className="gw-trainings-closing__cta-icon" aria-hidden size={16} />
                </Link>
              </div>
            </div>
            <div className="gw-trainings-closing__panel reveal reveal-delay-1" aria-hidden>
              <span className="gw-trainings-closing__panel-accent" />
              <p className="gw-trainings-closing__panel-eyebrow">Global Wings Training</p>
              <p className="gw-trainings-closing__panel-title">From cadet to Captain</p>
              <ul className="gw-trainings-closing__panel-list">
                <li>Type ratings &amp; line training</li>
                <li>Captain upgrade programmes</li>
                <li>Airline assessment preparation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
