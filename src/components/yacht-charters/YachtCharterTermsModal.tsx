import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import YachtCharterTermsDocumentInner from './YachtCharterTermsDocumentInner'

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
          type="button"
          className="yacht-modal__close"
          aria-label="Close terms and conditions"
          onClick={onClose}
        >
          ×
        </button>
        <div className="yacht-terms-doc">
          <YachtCharterTermsDocumentInner titleId={titleId} />
          <footer className="yacht-terms-doc__foot">
            <button
              ref={closeRef}
              type="button"
              className="maritime-terms-consent__accept-btn yacht-terms-doc__accept-btn"
              onClick={onClose}
            >
              I accept the terms and conditions
            </button>
          </footer>
        </div>
      </div>
    </div>
  )

  return createPortal(node, document.body)
}
