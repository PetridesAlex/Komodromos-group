import type { ServiceProgrammeIntro as ServiceProgrammeIntroContent } from '../data/servicePageSections'

const PROGRAMME_PARAGRAPH_BLOCKS = [
  { index: '01', theme: 'The foundation', variant: 'lead' },
  { index: '02', theme: 'The programme', variant: 'body' },
  { index: '03', theme: 'Immersive learning', variant: 'body' },
  { index: '04', theme: 'Wellbeing & resilience', variant: 'body' },
  { index: '05', theme: 'Practical impact', variant: 'close' },
] as const

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
          {intro.paragraphs.map((paragraph, index) => {
            const block = PROGRAMME_PARAGRAPH_BLOCKS[index] ?? {
              index: String(index + 1).padStart(2, '0'),
              theme: 'Overview',
              variant: 'body' as const,
            }

            return (
              <article
                key={paragraph.slice(0, 48)}
                className={`service-programme-intro__copy-block service-programme-intro__copy-block--${block.variant} reveal reveal-delay-${Math.min(index + 1, 4)}`}
              >
                <header className="service-programme-intro__copy-head">
                  <span className="service-programme-intro__copy-index" aria-hidden>
                    {block.index}
                  </span>
                  <span className="service-programme-intro__copy-rule" aria-hidden />
                  <span className="service-programme-intro__copy-theme">{block.theme}</span>
                </header>
                <p className="service-programme-intro__paragraph">{paragraph}</p>
              </article>
            )
          })}
        </div>
      </div>

      <div className="service-programme-intro__learn-bleed reveal">
        <div className="service-programme-intro__learn-shell">
          <header className="service-programme-intro__learn-head">
            <p className="service-programme-intro__learn-eyebrow">Programme curriculum</p>
            <h3 className="service-programme-intro__learn-title">{intro.learnTitle}</h3>
            <span className="service-programme-intro__learn-rule" aria-hidden />
          </header>
          <ul className="service-programme-intro__learn-grid" role="list">
            {intro.learnItems.map((item, index) => (
              <li
                key={item}
                className={`service-programme-intro__learn-item reveal reveal-delay-${Math.min((index % 4) + 1, 4)}`}
              >
                <div className="service-programme-intro__learn-item-top">
                  <span className="service-programme-intro__learn-index" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service-programme-intro__learn-accent" aria-hidden />
                </div>
                <span className="service-programme-intro__learn-text">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container service-programme-intro">
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
