import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Compass,
  Globe2,
  GraduationCap,
  Headset,
  Plane,
  Rocket,
  Timer,
  Users,
  Wrench,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import { useReveal } from '../../hooks/useReveal'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  jobsCareerIntro,
  jobsClosing,
  jobsHero,
  jobsMarkets,
  jobsPositionCategories,
  jobsProcessSteps,
  jobsTalentNetwork,
  jobsWhyCards,
} from '../../data/aviationJobsPage'

const SERVICE_INTEREST = 'Aviation Agency Services'

const POSITION_ICONS = [Plane, Users, Wrench, Compass, Briefcase] as const
const WHY_ICONS = [Globe2, GraduationCap, Headset, BadgeCheck, Timer, Rocket] as const

const contactCvState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to submit my CV and join the Global Wings Talent Network.',
  },
}

const contactVacanciesState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to view current aviation vacancies with Global Wings Ltd.',
  },
}

export default function GwAviationJobsPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-jobs-page" ref={pageRef}>
      <section className="gw-jobs-hero" aria-labelledby="gw-jobs-hero-title">
        <GwImagePlaceholder variant="hero-bg" className="gw-jobs-hero__bg" label="Insert image here" />
        <div className="gw-jobs-hero__scrim" aria-hidden />
        <div className="container gw-jobs-hero__inner">
          <p className="gw-jobs-hero__eyebrow reveal">Aviation Jobs · Global Wings</p>
          <h1 id="gw-jobs-hero-title" className="gw-jobs-hero__title reveal reveal-delay-1">
            {jobsHero.title}
          </h1>
          <p className="gw-jobs-hero__subtitle reveal reveal-delay-2">{jobsHero.subtitle}</p>
          <p className="gw-jobs-hero__lead reveal reveal-delay-3">{jobsHero.lead}</p>
        </div>
      </section>

      <main className="gw-main gw-main--jobs" aria-label="Aviation Jobs">
        <section className="gw-jobs-section gw-jobs-section--intro">
          <div className="container gw-jobs-intro">
            <div className="gw-jobs-intro__copy reveal">
              <p className="gw-jobs-section__eyebrow">Career Opportunities</p>
              <h2 className="gw-jobs-section__title">{jobsCareerIntro.title}</h2>
              {jobsCareerIntro.paragraphs.map((para, i) => (
                <p key={i} className="gw-jobs-intro__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="gw-jobs-intro__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--markets" aria-labelledby="gw-jobs-markets-title">
          <div className="container gw-jobs-markets">
            <div className="gw-jobs-markets__copy reveal">
              <p className="gw-jobs-section__eyebrow gw-jobs-section__eyebrow--light">Global Reach</p>
              <h2 id="gw-jobs-markets-title" className="gw-jobs-section__title gw-jobs-section__title--light">
                {jobsMarkets.title}
              </h2>
              <p className="gw-jobs-markets__intro">{jobsMarkets.intro}</p>
              <p className="gw-jobs-markets__label">{jobsMarkets.label}</p>
              <ul className="gw-jobs-markets__list">
                {jobsMarkets.regions.map((region) => (
                  <li key={region}>{region}</li>
                ))}
              </ul>
              <p className="gw-jobs-markets__outro">{jobsMarkets.outro}</p>
            </div>
            <div className="gw-jobs-markets__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="16 / 12" label="Insert image here" />
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--positions" aria-labelledby="gw-jobs-positions-title">
          <div className="container">
            <header className="gw-jobs-section__header reveal">
              <p className="gw-jobs-section__eyebrow">Positions We Recruit For</p>
              <h2 id="gw-jobs-positions-title" className="gw-jobs-section__title">
                Roles across every aviation discipline
              </h2>
            </header>
            <div className="gw-jobs-positions-grid">
              {jobsPositionCategories.map((category, i) => {
                const Icon = POSITION_ICONS[i] ?? Briefcase
                return (
                  <article
                    key={category.title}
                    className={`gw-jobs-position-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <div className="gw-jobs-position-card__head">
                      <span className="gw-jobs-position-card__icon-wrap">
                        <Icon className="gw-jobs-position-card__icon" aria-hidden strokeWidth={1.5} />
                      </span>
                      <h3 className="gw-jobs-position-card__title">{category.title}</h3>
                    </div>
                    <ul className="gw-jobs-position-card__list">
                      {category.roles.map((role) => (
                        <li key={role}>{role}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--why" aria-labelledby="gw-jobs-why-title">
          <div className="container">
            <header className="gw-jobs-section__header reveal">
              <p className="gw-jobs-section__eyebrow">Why Choose Global Wings</p>
              <h2 id="gw-jobs-why-title" className="gw-jobs-section__title">
                Your trusted partner in aviation careers
              </h2>
            </header>
            <div className="gw-jobs-why-grid">
              {jobsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                return (
                  <article
                    key={item.title}
                    className={`gw-jobs-why-card reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-jobs-why-card__icon-wrap">
                      <Icon className="gw-jobs-why-card__icon" aria-hidden strokeWidth={1.5} />
                    </span>
                    <h3 className="gw-jobs-why-card__title">{item.title}</h3>
                    <p className="gw-jobs-why-card__text">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--process" aria-labelledby="gw-jobs-process-title">
          <div className="container">
            <header className="gw-jobs-section__header reveal">
              <p className="gw-jobs-section__eyebrow gw-jobs-section__eyebrow--light">Our Recruitment Process</p>
              <h2 id="gw-jobs-process-title" className="gw-jobs-section__title gw-jobs-section__title--light">
                From application to career support
              </h2>
            </header>
            <ol className="gw-jobs-timeline">
              {jobsProcessSteps.map((step, i) => (
                <li
                  key={step}
                  className={`gw-jobs-timeline__step reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
                >
                  <span className="gw-jobs-timeline__index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="gw-jobs-timeline__label">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--network" aria-labelledby="gw-jobs-network-title">
          <div className="container gw-jobs-network">
            <div className="gw-jobs-network__copy reveal">
              <p className="gw-jobs-section__eyebrow">Talent Network</p>
              <h2 id="gw-jobs-network-title" className="gw-jobs-section__title">
                {jobsTalentNetwork.title}
              </h2>
              {jobsTalentNetwork.paragraphs.map((para, i) => (
                <p key={i} className="gw-jobs-network__para">
                  {para}
                </p>
              ))}
              <Link to={AVIATION_ROUTES.contact} state={contactCvState} className="gw-jobs-network__cta">
                Submit Your CV
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
            <div className="gw-jobs-network__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--closing" aria-labelledby="gw-jobs-closing-title">
          <div className="container gw-jobs-closing">
            <div className="gw-jobs-closing__inner reveal">
              <h2 id="gw-jobs-closing-title" className="gw-jobs-closing__title">
                {jobsClosing.title}
              </h2>
              {jobsClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-jobs-closing__para">
                  {para}
                </p>
              ))}
              <div className="gw-jobs-closing__actions">
                <Link to={AVIATION_ROUTES.contact} state={contactCvState} className="gw-jobs-closing__btn gw-jobs-closing__btn--primary">
                  {jobsClosing.primaryCta}
                </Link>
                <Link
                  to={AVIATION_ROUTES.contact}
                  state={contactVacanciesState}
                  className="gw-jobs-closing__btn gw-jobs-closing__btn--secondary"
                >
                  {jobsClosing.secondaryCta}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
