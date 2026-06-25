import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  Check,
  Crown,
  Globe2,
  Layers,
  Plane,
  Shield,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import { useReveal } from '../../hooks/useReveal'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import {
  airlinesClosing,
  airlinesFlightCrew,
  airlinesHero,
  airlinesInsightSections,
  airlinesRoleCategories,
  airlinesServiceBlocks,
} from '../../data/aviationAirlineServicesPage'

const SERVICE_ICONS = {
  'temp-permanent': Layers,
  permanent: Briefcase,
  executive: Crown,
} as const

const ROLE_ICONS = [Briefcase, Plane, Wrench] as const
const INSIGHT_ICONS = [Globe2, Users, Shield, Sparkles] as const

export default function GwAirlineServicesPage() {
  const pageRef = useReveal()

  return (
    <div className="gw-aviation-page gw-airlines-page" ref={pageRef}>
      <section className="gw-airlines-hero" aria-labelledby="gw-airlines-hero-title">
        <GwImagePlaceholder variant="hero-bg" className="gw-airlines-hero__bg" label="Insert image here" />
        <div className="gw-airlines-hero__scrim" aria-hidden />
        <div className="container gw-airlines-hero__inner">
          <p className="gw-airlines-hero__eyebrow reveal">Airline Services · Global Wings</p>
          <h1 id="gw-airlines-hero-title" className="gw-airlines-hero__title reveal reveal-delay-1">
            {airlinesHero.title}
          </h1>
          <p className="gw-airlines-hero__subtitle reveal reveal-delay-2">{airlinesHero.subtitle}</p>
        </div>
      </section>

      <main className="gw-main gw-main--airlines" aria-label="Airline Services">
        <section className="gw-airlines-section gw-airlines-section--intro">
          <div className="container gw-airlines-intro">
            <div className="gw-airlines-intro__media reveal">
              <div className="gw-airlines-intro__frame">
                <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
                <span className="gw-airlines-intro__frame-accent" aria-hidden />
              </div>
            </div>
            <div className="gw-airlines-intro__copy reveal reveal-delay-1">
              <p className="gw-airlines-section__eyebrow">Core Capability</p>
              <h2 className="gw-airlines-section__title">{airlinesFlightCrew.title}</h2>
              {airlinesFlightCrew.paragraphs.map((para, i) => (
                <p key={i} className="gw-airlines-intro__para">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="gw-airlines-section gw-airlines-section--services" aria-label="Recruitment services">
          <div className="container">
            <header className="gw-airlines-section__header reveal">
              <p className="gw-airlines-section__eyebrow">Recruitment Solutions</p>
              <h2 className="gw-airlines-section__title gw-airlines-section__title--light">
                Flexible staffing for every operational need
              </h2>
            </header>

            <div className="gw-airlines-services-stack">
              {airlinesServiceBlocks.map((block, index) => {
                const Icon = SERVICE_ICONS[block.id]
                const isEven = index % 2 === 0
                return (
                  <article
                    key={block.id}
                    className={`gw-airlines-service-block reveal reveal-delay-${Math.min((index % 3) + 1, 3)}${isEven ? '' : ' gw-airlines-service-block--reverse'}`}
                  >
                    <div className="gw-airlines-service-block__copy">
                      <div className="gw-airlines-service-block__icon-wrap">
                        <Icon className="gw-airlines-service-block__icon" aria-hidden strokeWidth={1.5} />
                      </div>
                      <h3 className="gw-airlines-service-block__title">{block.title}</h3>
                      {block.paragraphs.map((para, pi) => (
                        <p key={pi} className="gw-airlines-service-block__para">
                          {para}
                        </p>
                      ))}

                      {'benefits' in block && block.benefits ? (
                        <div className="gw-airlines-list-block">
                          <p className="gw-airlines-list-block__label">Key Benefits</p>
                          <ul className="gw-airlines-checklist">
                            {block.benefits.map((item) => (
                              <li key={item}>
                                <span className="gw-airlines-checklist__mark" aria-hidden>
                                  <Check strokeWidth={2.5} />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {'process' in block && block.process ? (
                        <div className="gw-airlines-list-block">
                          <p className="gw-airlines-list-block__label">Our Process</p>
                          <ol className="gw-airlines-process">
                            {block.process.map((step, si) => (
                              <li key={step}>
                                <span className="gw-airlines-process__index">{String(si + 1).padStart(2, '0')}</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ) : null}

                      {'services' in block && block.services ? (
                        <div className="gw-airlines-list-block">
                          <p className="gw-airlines-list-block__label">Executive Recruitment Services</p>
                          <ul className="gw-airlines-checklist">
                            {block.services.map((item) => (
                              <li key={item}>
                                <span className="gw-airlines-checklist__mark" aria-hidden>
                                  <Check strokeWidth={2.5} />
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                    <div className="gw-airlines-service-block__media">
                      <GwImagePlaceholder aspectRatio="16 / 12" label="Insert image here" />
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-airlines-section gw-airlines-section--roles" aria-labelledby="gw-airlines-roles-title">
          <div className="container">
            <header className="gw-airlines-section__header reveal">
              <p className="gw-airlines-section__eyebrow">Roles We Recruit For</p>
              <h2 id="gw-airlines-roles-title" className="gw-airlines-section__title">
                Comprehensive coverage across aviation disciplines
              </h2>
            </header>
            <div className="gw-airlines-roles-grid">
              {airlinesRoleCategories.map((category, i) => {
                const Icon = ROLE_ICONS[i] ?? Briefcase
                return (
                  <article
                    key={category.title}
                    className={`gw-airlines-role-card reveal reveal-delay-${Math.min(i + 1, 3)}`}
                  >
                    <div className="gw-airlines-role-card__head">
                      <Icon className="gw-airlines-role-card__icon" aria-hidden strokeWidth={1.5} />
                      <h3 className="gw-airlines-role-card__title">{category.title}</h3>
                    </div>
                    <ul className="gw-airlines-role-card__list">
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

        <section className="gw-airlines-section gw-airlines-section--insights" aria-label="Industry expertise">
          <div className="container">
            <div className="gw-airlines-insights-grid">
              {airlinesInsightSections.map((section, i) => {
                const Icon = INSIGHT_ICONS[i] ?? Globe2
                return (
                  <article
                    key={section.title}
                    className={`gw-airlines-insight-card reveal reveal-delay-${Math.min((i % 2) + 1, 2)}`}
                  >
                    <div className="gw-airlines-insight-card__icon-wrap">
                      <Icon className="gw-airlines-insight-card__icon" aria-hidden strokeWidth={1.5} />
                    </div>
                    <h3 className="gw-airlines-insight-card__title">{section.title}</h3>
                    {section.paragraphs.map((para, pi) => (
                      <p key={pi} className="gw-airlines-insight-card__para">
                        {para}
                      </p>
                    ))}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="gw-airlines-section gw-airlines-section--closing" aria-labelledby="gw-airlines-closing-title">
          <div className="container gw-airlines-closing">
            <div className="gw-airlines-closing__copy reveal">
              <h2 id="gw-airlines-closing-title" className="gw-airlines-closing__title">
                {airlinesClosing.title}
              </h2>
              {airlinesClosing.paragraphs.map((para, i) => (
                <p key={i} className="gw-airlines-closing__para">
                  {para}
                </p>
              ))}
              <Link to={AVIATION_ROUTES.contact} className="gw-airlines-closing__cta">
                Contact our team
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
            <div className="gw-airlines-closing__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="16 / 11" label="Insert image here" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
