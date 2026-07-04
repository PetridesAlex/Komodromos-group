import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  GraduationCap,
  Headset,
  Rocket,
  Timer,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import GwJobsCvSubmitSection from './GwJobsCvSubmitSection'
import GwJobsPositionsSection from './GwJobsPositionsSection'
import GwPageHero from './GwPageHero'
import { useReveal } from '../../hooks/useReveal'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  jobsCareerIntro,
  jobsHero,
  jobsMarkets,
  jobsProcessSteps,
  jobsTalentNetwork,
  jobsWhyCards,
  jobsWhySection,
} from '../../data/aviationJobsPage'

const SERVICE_INTEREST = 'Aviation Agency Services'

const WHY_ICONS = [Globe2, GraduationCap, Headset, BadgeCheck, Timer, Rocket] as const

const contactCvState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to submit my CV and join the Global Wings Talent Network.',
  },
}

export default function GwAviationJobsPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-jobs-page" ref={pageRef}>
      <GwPageHero
        id="gw-jobs-hero-title"
        eyebrow="Aviation Jobs · Global Wings"
        title={jobsHero.title}
        subtitle={jobsHero.subtitle}
        lead={jobsHero.lead}
        highlights={[
          { value: '15+', label: 'Years recruiting' },
          { value: 'Global', label: 'Airline network' },
          { value: '31+', label: 'Role types' },
        ]}
      />

      <main className="gw-main gw-main--jobs" aria-label="Aviation Jobs">
        <section className="gw-jobs-section gw-jobs-section--intro">
          <div className="container">
            <div className="gw-jobs-intro">
              <article className="gw-jobs-intro__panel gw-jobs-intro__copy reveal">
                <div className="gw-jobs-intro__panel-accent" aria-hidden />
                <div className="gw-jobs-intro__panel-inner">
                  <p className="gw-jobs-section__eyebrow">Career Opportunities</p>
                  <h2 className="gw-jobs-section__title">{jobsCareerIntro.title}</h2>
                  <div className="gw-jobs-intro__copy-body">
                    {jobsCareerIntro.paragraphs.map((para, i) => (
                      <p key={i} className="gw-jobs-intro__para">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
              <article className="gw-jobs-intro__panel gw-jobs-intro__media reveal reveal-delay-1">
                <div className="gw-jobs-intro__panel-accent" aria-hidden />
                <div className="gw-jobs-intro__frame">
                  <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
                  <span className="gw-jobs-intro__frame-badge">Global recruitment network</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="gw-jobs-section gw-jobs-section--markets" aria-labelledby="gw-jobs-markets-title">
          <div className="gw-jobs-markets__bg" aria-hidden />
          <div className="container gw-jobs-markets">
            <div className="gw-jobs-markets__copy reveal">
              <p className="gw-jobs-section__eyebrow gw-jobs-section__eyebrow--light">Global Reach</p>
              <h2 id="gw-jobs-markets-title" className="gw-jobs-section__title gw-jobs-section__title--light">
                {jobsMarkets.title}
              </h2>
              <p className="gw-jobs-markets__intro">{jobsMarkets.intro}</p>
              <ul className="gw-jobs-markets__stats" aria-label="Global recruitment footprint">
                {jobsMarkets.stats.map((item) => (
                  <li key={item.label}>
                    <span className="gw-jobs-markets__stat-value">{item.value}</span>
                    <span className="gw-jobs-markets__stat-label">{item.label}</span>
                  </li>
                ))}
              </ul>
              <p className="gw-jobs-markets__label">{jobsMarkets.label}</p>
            </div>
            <div className="gw-jobs-markets__grid">
              {jobsMarkets.regions.map((region, i) => (
                <article
                  key={region.name}
                  className={`gw-jobs-markets__region reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                >
                  <header className="gw-jobs-markets__region-head">
                    <span className="gw-jobs-markets__region-code">{region.code}</span>
                    <div className="gw-jobs-markets__region-meta">
                      <h3 className="gw-jobs-markets__region-name">{region.name}</h3>
                      <span className="gw-jobs-markets__region-count">
                        {region.countries.length} markets
                      </span>
                    </div>
                  </header>
                  <ul className="gw-jobs-markets__countries">
                    {region.countries.map((country) => (
                      <li key={country}>
                        <span className="gw-jobs-markets__country-dot" aria-hidden />
                        {country}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="gw-jobs-markets__outro reveal">{jobsMarkets.outro}</p>
          </div>
        </section>

        <GwJobsPositionsSection />

        <section className="gw-jobs-section gw-jobs-section--why" aria-labelledby="gw-jobs-why-title">
          <div className="gw-jobs-why__bg" aria-hidden />
          <div className="container gw-jobs-why">
            <header className="gw-jobs-section__header gw-jobs-why__header reveal">
              <p className="gw-jobs-section__eyebrow">{jobsWhySection.eyebrow}</p>
              <h2 id="gw-jobs-why-title" className="gw-jobs-section__title">
                {jobsWhySection.title}
              </h2>
              <p className="gw-jobs-why__intro">{jobsWhySection.intro}</p>
            </header>
            <ul className="gw-jobs-why__highlights reveal reveal-delay-1" aria-label="Global Wings strengths">
              {jobsWhySection.highlights.map((item) => (
                <li key={item.label}>
                  <span className="gw-jobs-why__highlight-value">{item.value}</span>
                  <span className="gw-jobs-why__highlight-label">{item.label}</span>
                </li>
              ))}
            </ul>
            <div className="gw-jobs-why-grid">
              {jobsWhyCards.map((item, i) => {
                const Icon = WHY_ICONS[i] ?? Globe2
                const featured = i < 2
                return (
                  <article
                    key={item.title}
                    className={`gw-jobs-why-card${featured ? ' gw-jobs-why-card--featured' : ''} reveal reveal-delay-${Math.min((i % 3) + 1, 3)}`}
                  >
                    <span className="gw-jobs-why-card__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
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

        <GwJobsCvSubmitSection />
      </main>
    </div>
  )
}
