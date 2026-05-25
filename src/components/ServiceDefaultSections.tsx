import { Link } from 'react-router-dom'
import type { ServicePageContent } from '../data/servicePageSections'
import ServiceVideosSection from './ServiceVideosSection'

type Props = {
  content: ServicePageContent
  serviceInterest: string
}

export default function ServiceDefaultSections({ content, serviceInterest }: Props) {
  return (
    <>
      <section className="service-default-section" aria-labelledby="service-default-lead-title">
        <div className="container service-default-inner">
          <h2 id="service-default-lead-title" className="service-default-lead-title reveal">
            {content.leadTitle}
          </h2>
          <p className="service-default-lead reveal reveal-delay-1">{content.lead}</p>
        </div>
      </section>

      {content.videosSection ? (
        <ServiceVideosSection section={content.videosSection} />
      ) : null}

      <section className="service-default-section service-default-section--offerings">
        <div className="container service-default-inner">
          <p className="eyebrow reveal">{content.offeringsTitle}</p>
          <div className="service-default-offerings">
            {content.offerings.map((o, i) => (
              <article
                key={o.title}
                className={`service-default-card reveal ${
                  ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'][
                    Math.min(i, 3)
                  ]
                }`}
              >
                <h3 className="service-default-card__title">{o.title}</h3>
                <p className="service-default-card__desc">{o.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.bullets && content.bullets.length > 0 ? (
        <section className="service-default-section service-default-section--bullets">
          <div className="container service-default-inner">
            <ul className="service-default-bullets reveal">
              {content.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.closing ? (
        <section className="service-default-section">
          <div className="container service-default-inner">
            <p className="service-default-closing reveal">{content.closing}</p>
          </div>
        </section>
      ) : null}

      <section className="service-default-cta-wrap">
        <div className="container service-default-inner">
          <Link
            to="/contact"
            state={{ serviceInterest }}
            className="service-default-cta reveal"
          >
            Request details
          </Link>
        </div>
      </section>
    </>
  )
}
