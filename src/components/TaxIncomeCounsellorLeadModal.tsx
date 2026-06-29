import { useEffect, useId, useState } from 'react'
import { TAX_CALC_COUNSELLOR_MODAL } from '../data/taxIncomeCalculatorPageContent'
import { sendContactInquiry } from '../lib/sendContactInquiry'

const M = TAX_CALC_COUNSELLOR_MODAL

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function TaxIncomeCounsellorLeadModal({ isOpen, onClose }: Props) {
  const titleId = useId()
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setFirstName('')
      setSurname('')
      setEmail('')
      setPhone('')
      setBusy(false)
      setError(null)
      setSuccess(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const fn = firstName.trim()
    const sn = surname.trim()
    const fullName = [fn, sn].filter(Boolean).join(' ')

    try {
      await sendContactInquiry({
        source: 'Income Tax Calculator — Counsellor Lead',
        name: fullName,
        email: email.trim(),
        phone: phone.trim(),
        service: 'Tax & Accounting Services',
        message: M.prefillMessage,
      })
      setSuccess(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your request. Please try again or email info@komodromosgroup.com directly.',
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <div
      className="taxnex-checkout-modal"
      role="presentation"
      onMouseDown={(ev) => {
        if (ev.target === ev.currentTarget) onClose()
      }}
    >
      <div
        className="taxnex-checkout-modal__dialog taxnex-newsletter-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="taxnex-checkout-modal__close"
          onClick={onClose}
          aria-label={M.closeAria}
        >
          ×
        </button>

        {success ? (
          <div className="taxnex-filing-modal__success">
            <p className="taxnex-checkout-modal__eyebrow taxnex-newsletter-modal__eyebrow">{M.eyebrow}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title taxnex-newsletter-modal__title">
              {M.title}
            </h2>
            <p className="taxnex-checkout-modal__lead taxnex-newsletter-modal__lead">
              Thank you — a tax counsellor will review your request and contact you shortly.
            </p>
            <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="taxnex-checkout-modal__eyebrow taxnex-newsletter-modal__eyebrow">{M.eyebrow}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title taxnex-newsletter-modal__title">
              {M.title}
            </h2>
            <p className="taxnex-checkout-modal__lead taxnex-newsletter-modal__lead">{M.lead}</p>

            <form className="taxnex-checkout-modal__form taxnex-newsletter-modal__form" onSubmit={handleSubmit}>
              <div className="taxnex-newsletter-modal__row">
                <label className="taxnex-checkout-modal__field">
                  <span>{M.firstName}</span>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="taxnex-checkout-modal__field">
                  <span>{M.surname}</span>
                  <input
                    type="text"
                    name="surname"
                    autoComplete="family-name"
                    required
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </label>
              </div>
              <label className="taxnex-checkout-modal__field">
                <span>{M.email}</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="taxnex-checkout-modal__field">
                <span>{M.phone}</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>

              {error ? (
                <p className="taxnex-checkout-modal__error" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="taxnex-checkout-modal__actions">
                <button
                  type="button"
                  className="taxnex-btn taxnex-btn--outline taxnex-checkout-modal__cancel"
                  onClick={onClose}
                  disabled={busy}
                >
                  {M.cancel}
                </button>
                <button type="submit" className="taxnex-btn taxnex-btn--primary" disabled={busy}>
                  {busy ? M.submitting : M.submit}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
