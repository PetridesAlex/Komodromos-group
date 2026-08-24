import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { Check, X } from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { useFormSpamProtection } from '../hooks/useFormSpamProtection'
import { useWeddingLocale, type LocalizedText } from '../lib/weddingLocale'
import { weddingPlanEnquiryCopy } from '../data/weddingPageCopy'

type Props = {
  open: boolean
  onClose: () => void
}

type FormState = {
  name: string
  partnerName: string
  email: string
  phone: string
  preferredDate: string
  guestCount: string
  ceremonyType: string
  venue: string
  packageInterest: string
  budget: string
  notes: string
}

const EMPTY_FORM: FormState = {
  name: '',
  partnerName: '',
  email: '',
  phone: '',
  preferredDate: '',
  guestCount: '',
  ceremonyType: '',
  venue: '',
  packageInterest: '',
  budget: '',
  notes: '',
}

function optionLabel(options: ReadonlyArray<{ value: string; label: LocalizedText }>, value: string, t: (text: LocalizedText) => string) {
  const match = options.find((o) => o.value === value)
  return match ? t(match.label) : value
}

export default function WeddingPlanEnquiryModal({ open, onClose }: Props) {
  const { t } = useWeddingLocale()
  const titleId = useId()
  const { spamMeta, spamFields, resetSpamProtection } = useFormSpamProtection()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    setForm(EMPTY_FORM)
    setSubmitting(false)
    setSubmitted(false)
    setError(null)
    resetSpamProtection()
    window.requestAnimationFrame(() => dialogRef.current?.focus())
  }, [open, resetSpamProtection])

  const update = (field: keyof FormState) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim()) {
      setError(t(weddingPlanEnquiryCopy.errors.name))
      return
    }
    if (!form.email.trim()) {
      setError(t(weddingPlanEnquiryCopy.errors.email))
      return
    }
    if (!form.phone.trim()) {
      setError(t(weddingPlanEnquiryCopy.errors.phone))
      return
    }

    const ceremonyLabel = form.ceremonyType
      ? optionLabel(weddingPlanEnquiryCopy.ceremonyOptions, form.ceremonyType, t)
      : ''
    const budgetLabel = form.budget
      ? optionLabel(weddingPlanEnquiryCopy.budgetOptions, form.budget, t)
      : ''

    const coupleLine = [form.name.trim(), form.partnerName.trim()].filter(Boolean).join(' & ')

    const message = [
      'New wedding planning enquiry from Wedding Sky.',
      '',
      `Couple / contact: ${coupleLine}`,
      form.preferredDate.trim() ? `Preferred date: ${form.preferredDate.trim()}` : null,
      form.guestCount.trim() ? `Estimated guests: ${form.guestCount.trim()}` : null,
      ceremonyLabel ? `Ceremony type: ${ceremonyLabel}` : null,
      form.venue.trim() ? `Venue preference: ${form.venue.trim()}` : null,
      form.packageInterest.trim() ? `Package interest: ${form.packageInterest.trim()}` : null,
      budgetLabel ? `Budget range: ${budgetLabel}` : null,
      form.notes.trim() ? `\nPlanning notes:\n${form.notes.trim()}` : '\n(No additional notes provided.)',
    ]
      .filter((line): line is string => line != null)
      .join('\n')

    const details = [
      ...(form.partnerName.trim()
        ? [
            { label: 'Contact name', value: form.name.trim() },
            { label: 'Partner name', value: form.partnerName.trim() },
          ]
        : [{ label: 'Contact name', value: form.name.trim() }]),
      { label: 'Phone', value: form.phone.trim() },
      ...(form.preferredDate.trim()
        ? [{ label: 'Preferred date', value: form.preferredDate.trim() }]
        : []),
      ...(form.guestCount.trim()
        ? [{ label: 'Guest count', value: form.guestCount.trim() }]
        : []),
      ...(ceremonyLabel ? [{ label: 'Ceremony', value: ceremonyLabel }] : []),
      ...(form.venue.trim() ? [{ label: 'Venue', value: form.venue.trim() }] : []),
      ...(form.packageInterest.trim()
        ? [{ label: 'Package interest', value: form.packageInterest.trim() }]
        : []),
      ...(budgetLabel ? [{ label: 'Budget', value: budgetLabel }] : []),
    ]

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source: 'Wedding Sky — Plan your wedding',
        name: coupleLine,
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: ceremonyLabel || 'Wedding planning',
        message,
        detailsTitle: 'Wedding planning enquiry',
        details,
        website: spamMeta.website,
        formStartedAt: spamMeta.formStartedAt,
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : t(weddingPlanEnquiryCopy.errors.generic),
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const copy = weddingPlanEnquiryCopy

  return createPortal(
    <div
      className="appt appt--ws"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="appt__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="appt__close" onClick={onClose} aria-label={t(copy.close)}>
          <X size={18} strokeWidth={2} aria-hidden />
        </button>

        {submitted ? (
          <div className="appt__success">
            <div className="appt__success-icon" aria-hidden>
              <Check size={30} strokeWidth={2.5} />
            </div>
            <h3>{t(copy.successTitle)}</h3>
            <p>{t(copy.successBody)}</p>
            <button type="button" className="appt__btn" onClick={onClose}>
              {t(copy.done)}
            </button>
          </div>
        ) : (
          <>
            <header className="appt__head">
              <p className="appt__eyebrow">{t(copy.eyebrow)}</p>
              <h2 id={titleId} className="appt__title">
                {t(copy.title)}
              </h2>
              <p className="appt__sub">{t(copy.subtitle)}</p>
            </header>

            <form className="appt__body" onSubmit={handleSubmit} noValidate>
              {spamFields}

              <div className="appt__fields appt__fields--plan">
                <div className="appt__field">
                  <label htmlFor="ws-plan-name">
                    {t(copy.fields.name)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-plan-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder={t(copy.placeholders.name)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-partner">
                    {t(copy.fields.partnerName)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-plan-partner"
                    name="partnerName"
                    type="text"
                    autoComplete="off"
                    value={form.partnerName}
                    onChange={update('partnerName')}
                    placeholder={t(copy.placeholders.partnerName)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-email">
                    {t(copy.fields.email)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-plan-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder={t(copy.placeholders.email)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-phone">
                    {t(copy.fields.phone)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-plan-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder={t(copy.placeholders.phone)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-date">
                    {t(copy.fields.preferredDate)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-plan-date"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={update('preferredDate')}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-guests">
                    {t(copy.fields.guestCount)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-plan-guests"
                    name="guestCount"
                    type="text"
                    inputMode="numeric"
                    value={form.guestCount}
                    onChange={update('guestCount')}
                    placeholder={t(copy.placeholders.guestCount)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-ceremony">
                    {t(copy.fields.ceremonyType)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <select
                    id="ws-plan-ceremony"
                    name="ceremonyType"
                    value={form.ceremonyType}
                    onChange={update('ceremonyType')}
                  >
                    <option value="">{t(copy.selectPlaceholder)}</option>
                    {copy.ceremonyOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-plan-budget">
                    {t(copy.fields.budget)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <select
                    id="ws-plan-budget"
                    name="budget"
                    value={form.budget}
                    onChange={update('budget')}
                  >
                    <option value="">{t(copy.selectPlaceholder)}</option>
                    {copy.budgetOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="appt__field appt__field--full">
                  <label htmlFor="ws-plan-venue">
                    {t(copy.fields.venue)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-plan-venue"
                    name="venue"
                    type="text"
                    value={form.venue}
                    onChange={update('venue')}
                    placeholder={t(copy.placeholders.venue)}
                  />
                </div>

                <div className="appt__field appt__field--full">
                  <label htmlFor="ws-plan-package">
                    {t(copy.fields.packageInterest)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-plan-package"
                    name="packageInterest"
                    type="text"
                    value={form.packageInterest}
                    onChange={update('packageInterest')}
                    placeholder={t(copy.placeholders.packageInterest)}
                  />
                </div>

                <div className="appt__field appt__field--full">
                  <label htmlFor="ws-plan-notes">
                    {t(copy.fields.notes)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <textarea
                    id="ws-plan-notes"
                    name="notes"
                    rows={4}
                    value={form.notes}
                    onChange={update('notes')}
                    placeholder={t(copy.placeholders.notes)}
                  />
                </div>
              </div>

              {error ? <p className="appt__error" role="alert">{error}</p> : null}

              <div className="appt__submit">
                <button type="submit" className="appt__btn" disabled={submitting}>
                  {submitting ? t(copy.submitting) : t(copy.submit)}
                </button>
              </div>
              <p className="appt__note">{t(copy.note)}</p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
