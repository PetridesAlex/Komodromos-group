import { yachtCharterTermsDocument } from '../../data/yachtCharterTerms'

type Props = {
  /** Optional id for the main heading (dialog labelledby). */
  titleId?: string
}

export default function YachtCharterTermsDocumentInner({ titleId }: Props) {
  const doc = yachtCharterTermsDocument

  return (
    <>
      <header className="yacht-terms-doc__head">
        <p className="yacht-terms-doc__eyebrow">{doc.eyebrow}</p>
        <h2 id={titleId} className="yacht-terms-doc__title">
          {doc.title}
        </h2>
        {doc.subtitle ? (
          <p className="yacht-terms-doc__subtitle">{doc.subtitle}</p>
        ) : null}
        <p className="yacht-terms-doc__notice">{doc.notice}</p>
      </header>
      <div className="yacht-terms-doc__body">
        {doc.sections.map((section) => {
          const sectionHeadingId = `yacht-terms-section-${section.id}`
          return (
            <section
              key={section.id}
              className="yacht-terms-doc__section"
              aria-labelledby={sectionHeadingId}
            >
              <h3 id={sectionHeadingId} className="yacht-terms-doc__section-title">
                {section.title}
              </h3>
              {section.pieces.map((piece, i) => {
                if (piece.type === 'p') {
                  return (
                    <p key={i} className="yacht-terms-doc__p">
                      {piece.text}
                    </p>
                  )
                }
                return (
                  <div key={i} className="yacht-terms-doc__block">
                    {'intro' in piece && piece.intro ? (
                      <p className="yacht-terms-doc__p yacht-terms-doc__p--intro">{piece.intro}</p>
                    ) : null}
                    <ul className="yacht-terms-doc__ul">
                      {piece.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </section>
          )
        })}
      </div>
    </>
  )
}
