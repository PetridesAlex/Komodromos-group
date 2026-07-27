import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { sendContactInquiry } from '../../lib/sendContactInquiry'

type Props = {
  open: boolean
  onClose: () => void
}

const INITIAL = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
}

export default function ChristinaOBookModal({ open, onClose }: Props) {
  const titleId = useId()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState(INITIAL)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

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
    setForm(INITIAL)
    setError(null)
    setSubmitted(false)
    setSubmitting(false)
    dialogRef.current?.focus()
  }, [open])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const firstName = form.firstName.trim()
    const lastName = form.lastName.trim()
    const email = form.email.trim()
    const phone = form.phone.trim()

    if (!firstName) {
      setError('Please enter your first name.')
      return
    }
    if (!lastName) {
      setError('Please enter your last name.')
      return
    }
    if (!email) {
      setError('Please enter your email address.')
      return
    }
    if (!phone) {
      setError('Please enter your contact number.')
      return
    }

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source: 'Christina O — Book Now',
        name: `${firstName} ${lastName}`,
        email,
        phone,
        service: 'VIP Services — Yacht charter — Christina O',
        message:
          'New Christina O charter booking enquiry submitted via the Book Now form on the yacht experience page.',
        detailsTitle: 'Guest details',
        details: [
          { label: 'First name', value: firstName },
          { label: 'Last name', value: lastName },
          { label: 'Contact number', value: phone },
        ],
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your request. Please try again or email info@komodromosgroup.com.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return createPortal(
    <div
      className="onassis-book"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        className="onassis-book__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <button type="button" className="onassis-book__close" onClick={onClose} aria-label="Close">
          ×
        </button>

        {submitted ? (
          <div className="onassis-book__success">
            <p className="onassis-book__eyebrow">Christina O</p>
            <h2 id={titleId} className="onassis-book__title">
              Request received
            </h2>
            <p className="onassis-book__lead">
              Thank you. Our charter concierge will contact you shortly to continue your private
              booking.
            </p>
            <button type="button" className="onassis-btn onassis-btn--gold" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="onassis-book__body">
              <p className="onassis-book__eyebrow">Private charter</p>
              <h2 id={titleId} className="onassis-book__title">
                Book Christina O
              </h2>
              <p className="onassis-book__lead">
                Share your details and our team will arrange a discreet follow-up for your charter
                enquiry.
              </p>

              <form id="christina-o-book-form" className="onassis-book__form" onSubmit={handleSubmit} noValidate>
                <div className="onassis-book__row">
                  <label className="onassis-book__field">
                    <span>First name</span>
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="onassis-book__field">
                    <span>Last name</span>
                    <input
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label className="onassis-book__field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label className="onassis-book__field">
                  <span>Contact number</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                {error ? (
                  <p className="onassis-book__error" role="alert">
                    {error}
                  </p>
                ) : null}
              </form>
            </div>

            <div className="onassis-book__actions">
              <button type="button" className="onassis-btn onassis-btn--ghost" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                form="christina-o-book-form"
                className="onassis-btn onassis-btn--gold"
                disabled={submitting}
              >
                {submitting ? 'Sending…' : 'Submit enquiry'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
