import type { ServiceProgrammeIntro as ServiceProgrammeIntroContent } from '../data/servicePageSections'

type Props = {
  intro: ServiceProgrammeIntroContent
}

export default function ServiceProgrammeIntro({ intro }: Props) {
  return (
    <section
      className="service-default-section service-default-section--programme scroll-mt-28"
      aria-labelledby="service-programme-intro-title"
    >
      <div className="container service-programme-intro">
        <header className="service-programme-intro__head reveal">
          <p className="service-programme-intro__eyebrow">{intro.eyebrow}</p>
          <h2 id="service-programme-intro-title" className="service-programme-intro__title">
            {intro.title}
          </h2>
          <p className="service-programme-intro__tagline">{intro.tagline}</p>
        </header>

        <div className="service-programme-intro__body">
          {intro.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 48)}
              className={`service-programme-intro__paragraph reveal reveal-delay-${Math.min(index + 1, 4)}`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="service-programme-intro__block service-programme-intro__block--learn reveal">
          <div className="service-programme-intro__block-head">
            <h3 className="service-programme-intro__block-title">{intro.learnTitle}</h3>
            <span className="service-programme-intro__block-rule" aria-hidden />
          </div>
          <ul className="service-programme-intro__learn-grid">
            {intro.learnItems.map((item, index) => (
              <li key={item} className="service-programme-intro__learn-item">
                <span className="service-programme-intro__learn-index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="service-programme-intro__learn-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="service-programme-intro__panels">
          <article className="service-programme-intro__panel service-programme-intro__panel--audience reveal reveal-delay-1">
            <span className="service-programme-intro__panel-index" aria-hidden>
              01
            </span>
            <h3 className="service-programme-intro__panel-title">{intro.audienceTitle}</h3>
            <p className="service-programme-intro__panel-text">{intro.audience}</p>
          </article>
          <article className="service-programme-intro__panel service-programme-intro__panel--result reveal reveal-delay-2">
            <span className="service-programme-intro__panel-index" aria-hidden>
              02
            </span>
            <h3 className="service-programme-intro__panel-title">{intro.resultTitle}</h3>
            <p className="service-programme-intro__panel-text">{intro.result}</p>
          </article>
        </div>

        <p className="service-programme-intro__closing reveal reveal-delay-3">{intro.closing}</p>
      </div>
    </section>
  )
}
