import { useEffect, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { sendContactInquiry } from '../lib/sendContactInquiry'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function TaxMeetingRequestModal({ isOpen, onClose }: Props) {
  const { t } = useTranslation()
  const titleId = useId()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
      setLastName('')
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

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()

    try {
      await sendContactInquiry({
        source: 'TaxNex — Book Appointment',
        name: fullName,
        email: email.trim(),
        phone: phone.trim(),
        service: 'Tax & Accounting Services',
        message: t('tax.contactFormPrefillMessage'),
        detailsTitle: 'Contact details',
        details: [
          { label: 'First name', value: firstName.trim() },
          { label: 'Last name', value: lastName.trim() },
          { label: 'Email', value: email.trim() },
          { label: 'Contact number', value: phone.trim() },
        ],
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
        className="taxnex-checkout-modal__dialog taxnex-checkout-modal__dialog--meeting"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <button
          type="button"
          className="taxnex-checkout-modal__close"
          onClick={onClose}
          aria-label={t('tax.meetingModalCloseAria')}
        >
          ×
        </button>

        {success ? (
          <div className="taxnex-filing-modal__success">
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.contactFormEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.contactFormSuccessTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">{t('tax.contactFormSuccessBody')}</p>
            <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={onClose}>
              {t('tax.meetingModalCloseAria')}
            </button>
          </div>
        ) : (
          <>
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.contactFormEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.contactFormTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">{t('tax.contactFormLead')}</p>

            <form className="taxnex-checkout-modal__form" onSubmit={handleSubmit}>
              <div className="taxnex-newsletter-modal__row">
                <label className="taxnex-checkout-modal__field">
                  <span>{t('tax.contactFormFirstName')}</span>
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
                  <span>{t('tax.contactFormLastName')}</span>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
              <label className="taxnex-checkout-modal__field">
                <span>{t('tax.contactFormEmail')}</span>
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
                <span>{t('tax.contactFormPhone')}</span>
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
                  {t('tax.meetingModalCancel')}
                </button>
                <button type="submit" className="taxnex-btn taxnex-btn--primary" disabled={busy}>
                  {busy ? t('tax.meetingModalSubmitting') : t('tax.contactFormSubmit')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
