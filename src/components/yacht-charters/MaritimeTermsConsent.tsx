import { useCallback, useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import YachtCharterTermsDocumentInner from './YachtCharterTermsDocumentInner'

const STORAGE_KEY = 'kg-maritime-luxury-sky-terms'

/**
 * Yacht charters / maritime services: one-time blocking terms acceptance per session.
 * After acceptance, terms are not shown again until the session ends; links on the page
 * can still open the full document via YachtChartersPage.
 */
export default function MaritimeTermsConsent() {
  const titleId = useId()
  const [hydrated, setHydrated] = useState(false)
  const [gateOpen, setGateOpen] = useState(false)

  useEffect(() => {
    setHydrated(true)
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      const t = window.setTimeout(() => setGateOpen(true), 600)
      return () => window.clearTimeout(t)
    }
    return undefined
  }, [])

  useEffect(() => {
    if (!gateOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [gateOpen])

  const accept = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, 'accepted')
    setGateOpen(false)
  }, [])

  if (!hydrated) return null

  const gate =
    gateOpen &&
    createPortal(
      <div
        className="maritime-terms-consent-layer"
        role="presentation"
        aria-live="polite"
      >
        <div className="maritime-terms-consent__backdrop" aria-hidden />
        <div
          className="maritime-terms-consent__shell yacht-modal__panel yacht-modal__panel--terms"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="maritime-terms-consent__scroll">
            <div className="yacht-terms-doc yacht-terms-doc--maritime-gate">
              <YachtCharterTermsDocumentInner titleId={titleId} />
            </div>
          </div>
          <div className="maritime-terms-consent__accept-bar">
            <p className="maritime-terms-consent__hint">
              Scroll to read the full terms. Acceptance is required to continue browsing this section.
            </p>
            <button
              type="button"
              className="maritime-terms-consent__accept-btn"
              onClick={accept}
            >
              I accept the terms and conditions
            </button>
          </div>
        </div>
      </div>,
      document.body,
    )

  return gate
}
