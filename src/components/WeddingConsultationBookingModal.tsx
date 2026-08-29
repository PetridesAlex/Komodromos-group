import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { Check, X } from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { useFormSpamProtection } from '../hooks/useFormSpamProtection'
import { useWeddingLocale, type LocalizedText } from '../lib/weddingLocale'
import { weddingConsultationCopy } from '../data/weddingPageCopy'

type Props = {
  open: boolean
  onClose: () => void
  collectionName?: string
}

type FormState = {
  name: string
  partnerName: string
  email: string
  phone: string
  preferredDate: string
  timeSlot: string
  meetingType: string
  message: string
}

const EMPTY_FORM: FormState = {
  name: '',
  partnerName: '',
  email: '',
  phone: '',
  preferredDate: '',
  timeSlot: '',
  meetingType: '',
  message: '',
}

function optionLabel(
  options: ReadonlyArray<{ value: string; label: LocalizedText }>,
  value: string,
  t: (text: LocalizedText) => string,
) {
  const match = options.find((o) => o.value === value)
  return match ? t(match.label) : value
}

export default function WeddingConsultationBookingModal({
  open,
  onClose,
  collectionName,
}: Props) {
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

  const update =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim()) {
      setError(t(weddingConsultationCopy.errors.name))
      return
    }
    if (!form.email.trim()) {
      setError(t(weddingConsultationCopy.errors.email))
      return
    }
    if (!form.phone.trim()) {
      setError(t(weddingConsultationCopy.errors.phone))
      return
    }

    const timeSlotLabel = form.timeSlot
      ? optionLabel(weddingConsultationCopy.timeSlotOptions, form.timeSlot, t)
      : ''
    const meetingTypeLabel = form.meetingType
      ? optionLabel(weddingConsultationCopy.meetingTypeOptions, form.meetingType, t)
      : ''

    const coupleLine = [form.name.trim(), form.partnerName.trim()].filter(Boolean).join(' & ')

    const message = [
      'New wedding consultation booking request from Wedding Sky.',
      '',
      `Couple / contact: ${coupleLine}`,
      collectionName ? `Collection viewed: ${collectionName}` : null,
      form.preferredDate.trim() ? `Preferred date: ${form.preferredDate.trim()}` : null,
      timeSlotLabel ? `Preferred time: ${timeSlotLabel}` : null,
      meetingTypeLabel ? `Meeting type: ${meetingTypeLabel}` : null,
      form.message.trim()
        ? `\nMessage:\n${form.message.trim()}`
        : '\n(No additional message provided.)',
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
      ...(collectionName ? [{ label: 'Collection viewed', value: collectionName }] : []),
      ...(form.preferredDate.trim()
        ? [{ label: 'Preferred date', value: form.preferredDate.trim() }]
        : []),
      ...(timeSlotLabel ? [{ label: 'Preferred time', value: timeSlotLabel }] : []),
      ...(meetingTypeLabel ? [{ label: 'Meeting type', value: meetingTypeLabel }] : []),
    ]

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source: 'Wedding Sky — Consultation booking',
        name: coupleLine,
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: meetingTypeLabel || 'Wedding consultation',
        message,
        detailsTitle: 'Consultation booking request',
        details,
        website: spamMeta.website,
        formStartedAt: spamMeta.formStartedAt,
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : t(weddingConsultationCopy.errors.generic),
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  const copy = weddingConsultationCopy

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
              <p className="appt__eyebrow">{t(copy.modalEyebrow)}</p>
              <h2 id={titleId} className="appt__title">
                {t(copy.title)}
              </h2>
              <p className="appt__sub">{t(copy.subtitle)}</p>
            </header>

            <form className="appt__body" onSubmit={handleSubmit} noValidate>
              {spamFields}

              <div className="appt__fields appt__fields--consult">
                <div className="appt__field">
                  <label htmlFor="ws-consult-name">
                    {t(copy.fields.name)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-consult-name"
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
                  <label htmlFor="ws-consult-partner">
                    {t(copy.fields.partnerName)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-consult-partner"
                    name="partnerName"
                    type="text"
                    autoComplete="off"
                    value={form.partnerName}
                    onChange={update('partnerName')}
                    placeholder={t(copy.placeholders.partnerName)}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-consult-email">
                    {t(copy.fields.email)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-consult-email"
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
                  <label htmlFor="ws-consult-phone">
                    {t(copy.fields.phone)} <span aria-hidden>*</span>
                  </label>
                  <input
                    id="ws-consult-phone"
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
                  <label htmlFor="ws-consult-date">
                    {t(copy.fields.preferredDate)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <input
                    id="ws-consult-date"
                    name="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={update('preferredDate')}
                  />
                </div>

                <div className="appt__field">
                  <label htmlFor="ws-consult-slot">
                    {t(copy.fields.timeSlot)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <select
                    id="ws-consult-slot"
                    name="timeSlot"
                    value={form.timeSlot}
                    onChange={update('timeSlot')}
                  >
                    <option value="">{t(copy.selectPlaceholder)}</option>
                    {copy.timeSlotOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="appt__field appt__field--full">
                  <label htmlFor="ws-consult-meeting">
                    {t(copy.fields.meetingType)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <select
                    id="ws-consult-meeting"
                    name="meetingType"
                    value={form.meetingType}
                    onChange={update('meetingType')}
                  >
                    <option value="">{t(copy.selectPlaceholder)}</option>
                    {copy.meetingTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {t(opt.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="appt__field appt__field--full">
                  <label htmlFor="ws-consult-message">
                    {t(copy.fields.message)}{' '}
                    <span className="appt__optional">({t(copy.optional)})</span>
                  </label>
                  <textarea
                    id="ws-consult-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update('message')}
                    placeholder={t(copy.placeholders.message)}
                  />
                </div>
              </div>

              {error ? (
                <p className="appt__error" role="alert">
                  {error}
                </p>
              ) : null}

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
