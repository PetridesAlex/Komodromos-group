import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  COOKIE_CONSENT_KEY,
  updateAnalyticsConsent,
} from '../lib/analytics'

const CONSENT_KEY = COOKIE_CONSENT_KEY

function CookieIcon() {
  return (
    <svg
      className="cookie-icon-svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="1.1" fill="currentColor" />
      <circle cx="14.5" cy="9" r="1.1" fill="currentColor" />
      <circle cx="11" cy="14.5" r="1.1" fill="currentColor" />
      <circle cx="15.5" cy="13.5" r="1.1" fill="currentColor" />
      <circle cx="7.5" cy="14" r="1.1" fill="currentColor" />
    </svg>
  )
}

export default function CookieBanner() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const privacyHref = pathname.startsWith('/services/aviation')
    ? '/services/aviation/privacy'
    : '/contact'

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
    updateAnalyticsConsent(consent === 'accepted')
    setShowButton(true)
  }, [])

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    updateAnalyticsConsent(true)
    dismiss()
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, 'declined')
    updateAnalyticsConsent(false)
    dismiss()
  }

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      setVisible(false)
      setClosing(false)
      setShowButton(true)
    }, 500)
  }

  function reopen() {
    setShowButton(false)
    localStorage.removeItem(CONSENT_KEY)
    updateAnalyticsConsent(false)
    setVisible(true)
  }

  return (
    <>
      {visible && (
        <div
          className={`cookie-banner ${closing ? 'cookie-exit' : 'cookie-enter'}`}
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
        >
          <div className="cookie-inner">
            <div className="cookie-text">
              <div className="cookie-icon" aria-hidden>
                <CookieIcon />
              </div>
              <div>
                <p id="cookie-banner-title" className="cookie-title">
                  We value your privacy
                </p>
                <p id="cookie-banner-desc" className="cookie-desc">
                  We use cookies to improve your browsing experience and understand how our
                  site is used. By clicking &ldquo;Accept All&rdquo;, you consent to our use of
                  cookies. Read our{' '}
                  <Link to={privacyHref} className="cookie-policy-link">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <button type="button" className="cookie-decline" onClick={handleDecline}>
                Decline
              </button>
              <button type="button" className="cookie-accept" onClick={handleAccept}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {showButton && !visible && (
        <button
          type="button"
          className="cookie-fab"
          onClick={reopen}
          aria-label="Cookie settings"
          title="Cookie settings"
        >
          <CookieIcon />
        </button>
      )}
    </>
  )
}
