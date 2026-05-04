import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { yachtCharterTermsDocument } from '../../data/yachtCharterTerms'

type Props = {
  open: boolean
  onClose: () => void
}

export default function YachtCharterTermsModal({ open, onClose }: Props) {
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = window.setTimeout(() => closeRef.current?.focus(), 0)
    return () => {
      document.body.style.overflow = prev
      window.clearTimeout(t)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const doc = yachtCharterTermsDocument

  const node = (
    <div className="yacht-modal yacht-modal--terms" role="presentation">
      <button
        type="button"
        className="yacht-modal__backdrop"
        aria-label="Close terms"
        onClick={onClose}
      />
      <div
        className="yacht-modal__panel yacht-modal__panel--terms"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          ref={closeRef}
          type="button"
          className="yacht-modal__close"
          aria-label="Close terms and conditions"
          onClick={onClose}
        >
          ×
        </button>
        <div className="yacht-terms-doc">
          <header className="yacht-terms-doc__head">
            <p className="yacht-terms-doc__eyebrow">{doc.eyebrow}</p>
            <h2 id={titleId} className="yacht-terms-doc__title">
              {doc.title}
            </h2>
            <p className="yacht-terms-doc__subtitle">{doc.subtitle}</p>
            <p className="yacht-terms-doc__notice">{doc.notice}</p>
          </header>
          <div className="yacht-terms-doc__body">
            {doc.sections.map((section) => {
              const sectionHeadingId = `yacht-terms-section-${section.id}`
              return (
              <section key={section.id} className="yacht-terms-doc__section" aria-labelledby={sectionHeadingId}>
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
          <footer className="yacht-terms-doc__foot">
            <button type="button" className="yacht-btn yacht-btn--gold" onClick={onClose}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
