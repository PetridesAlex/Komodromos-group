import { Link } from 'react-router-dom'
import type { ServicePageContent } from '../data/servicePageSections'
import ServiceGalleryMarquee from './ServiceGalleryMarquee'
import ServiceProgrammeIntro from './ServiceProgrammeIntro'
import ServiceVideosSection from './ServiceVideosSection'

type Props = {
  content: ServicePageContent
  serviceInterest: string
}

export default function ServiceDefaultSections({ content, serviceInterest }: Props) {
  return (
    <div id="service-default-content">
      {content.programmeIntro ? (
        <ServiceProgrammeIntro intro={content.programmeIntro} />
      ) : (
        <section className="service-default-section" aria-labelledby="service-default-lead-title">
          <div className="container service-default-inner">
            <h2 id="service-default-lead-title" className="service-default-lead-title reveal">
              {content.leadTitle}
            </h2>
            <p className="service-default-lead reveal reveal-delay-1">{content.lead}</p>
          </div>
        </section>
      )}

      {content.galleryMarquee ? (
        <ServiceGalleryMarquee section={content.galleryMarquee} />
      ) : null}

      {content.videosSection ? (
        <ServiceVideosSection section={content.videosSection} />
      ) : null}

      <section
        className={`service-default-section service-default-section--offerings${
          content.offeringsSection ? ' service-default-section--offerings-premium' : ''
        }`}
        aria-labelledby={
          content.offeringsSection ? 'service-offerings-heading' : undefined
        }
      >
        <div className="container service-offerings-inner">
          {content.offeringsSection ? (
            <header className="service-offerings-head reveal">
              <p className="service-offerings-eyebrow">{content.offeringsSection.eyebrow}</p>
              <h2 id="service-offerings-heading" className="service-offerings-title">
                {content.offeringsSection.title}
              </h2>
              {content.offeringsSection.intro ? (
                <p className="service-offerings-intro">{content.offeringsSection.intro}</p>
              ) : null}
            </header>
          ) : (
            <p className="eyebrow reveal">{content.offeringsTitle}</p>
          )}
          <div className="service-default-offerings">
            {content.offerings.map((o, i) => (
              <article
                key={o.title}
                className={`service-default-card${
                  content.offeringsSection ? ' service-default-card--premium' : ''
                } reveal ${
                  ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'][
                    Math.min(i, 3)
                  ]
                }`}
              >
                {content.offeringsSection ? (
                  <span className="service-default-card__index" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                ) : null}
                <h3 className="service-default-card__title">{o.title}</h3>
                <p className="service-default-card__desc">{o.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content.bullets && content.bullets.length > 0 ? (
        <section className="service-default-section service-default-section--bullets service-default-section--bullets-premium">
          <div className="container service-default-bullets-inner">
            <ul className="service-default-bullets reveal">
              {content.bullets.map((bullet, index) => (
                <li key={bullet} className="service-default-bullets__item">
                  <span className="service-default-bullets__mark" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service-default-bullets__text">{bullet}</span>
                </li>
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

      <section className="service-default-cta-wrap service-default-cta-wrap--premium">
        <div className="container service-default-cta-inner">
          <div className="service-default-cta-panel reveal">
            <Link
              to="/contact"
              state={{ serviceInterest }}
              className="service-default-cta service-default-cta--premium"
            >
              <span className="service-default-cta__label">Get in touch</span>
              <span className="service-default-cta__title">Request details</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
