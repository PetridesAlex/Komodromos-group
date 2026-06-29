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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
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
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
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
    const trimmed = message.trim()
    const body = trimmed
      ? `${t('tax.meetingRequestPrefillMessage')}\n\n${trimmed}`
      : t('tax.meetingRequestPrefillMessage')

    try {
      await sendContactInquiry({
        source: 'TaxNex — Meeting Request',
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        service: 'Tax & Accounting Services',
        message: body,
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
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.meetingModalEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.meetingModalTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">
              Thank you — your meeting request was sent to our team. We will contact you shortly.
            </p>
            <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.meetingModalEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.meetingModalTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">{t('tax.meetingModalLead')}</p>

            <form className="taxnex-checkout-modal__form" onSubmit={handleSubmit}>
              <label className="taxnex-checkout-modal__field">
                <span>{t('tax.meetingModalName')}</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="taxnex-checkout-modal__field">
                <span>{t('tax.meetingModalEmail')}</span>
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
                <span>{t('tax.meetingModalPhone')}</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <label className="taxnex-checkout-modal__field">
                <span>{t('tax.meetingModalMessage')}</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('tax.meetingModalMessagePlaceholder')}
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
                  {busy ? t('tax.meetingModalSubmitting') : t('tax.meetingModalSubmit')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
