import { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export default function TaxNewsletterLeadModal({ isOpen, onClose }: Props) {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const titleId = useId()
  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [busy, setBusy] = useState(false)

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
    }
  }, [isOpen])

  if (!isOpen) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    const fn = firstName.trim()
    const sn = surname.trim()
    const fullName = [fn, sn].filter(Boolean).join(' ')
    const message = t('tax.newsletterLeadPrefillMessage')

    navigate('/contact', {
      state: {
        serviceInterest: 'Tax & Accounting Services',
        contactPrefill: {
          name: fullName,
          email: email.trim(),
          phone: phone.trim(),
          service: 'Tax & Accounting Services',
          message,
        },
      },
    })
    onClose()
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
          aria-label={t('tax.newsletterModalCloseAria')}
        >
          ×
        </button>
        <p className="taxnex-checkout-modal__eyebrow taxnex-newsletter-modal__eyebrow">
          {t('tax.newsletterModalEyebrow')}
        </p>
        <h2 id={titleId} className="taxnex-checkout-modal__title taxnex-newsletter-modal__title">
          {t('tax.newsletterModalTitle')}
        </h2>
        <p className="taxnex-checkout-modal__lead taxnex-newsletter-modal__lead">{t('tax.newsletterModalLead')}</p>

        <form className="taxnex-checkout-modal__form taxnex-newsletter-modal__form" onSubmit={handleSubmit}>
          <div className="taxnex-newsletter-modal__row">
            <label className="taxnex-checkout-modal__field">
              <span>{t('tax.newsletterModalFirstName')}</span>
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
              <span>{t('tax.newsletterModalSurname')}</span>
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
            <span>{t('tax.newsletterModalEmail')}</span>
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
            <span>{t('tax.newsletterModalPhone')}</span>
            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <div className="taxnex-checkout-modal__actions">
            <button
              type="button"
              className="taxnex-btn taxnex-btn--outline taxnex-checkout-modal__cancel"
              onClick={onClose}
              disabled={busy}
            >
              {t('tax.newsletterModalCancel')}
            </button>
            <button type="submit" className="taxnex-btn taxnex-btn--primary" disabled={busy}>
              {busy ? t('tax.newsletterModalSubmitting') : t('tax.newsletterModalSubmit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
