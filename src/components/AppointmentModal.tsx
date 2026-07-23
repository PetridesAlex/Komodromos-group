import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { CalendarDays, Check, ChevronLeft, ChevronRight, Clock, X } from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'

type Props = {
  open: boolean
  onClose: () => void
  /** Email "source" tag, e.g. "Astreal Appointment". */
  source: string
  /** Service line stored on the enquiry. */
  service: string
  /** Small eyebrow above the title. */
  eyebrow?: string
  /** Modal title. */
  title?: string
  /** Supporting sentence under the title. */
  subtitle?: string
}

const TIME_SLOTS = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
] as const

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function isoDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function formatLongDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

/** Monday-based index (0 = Monday … 6 = Sunday). */
function mondayIndex(date: Date): number {
  return (date.getDay() + 6) % 7
}

export default function AppointmentModal({
  open,
  onClose,
  source,
  service,
  eyebrow = 'Private consultation',
  title = 'Book an appointment',
  subtitle = 'Choose a date and time that suits you — our team will confirm your appointment shortly.',
}: Props) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', notes: '' })
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
    setViewYear(today.getFullYear())
    setViewMonth(today.getMonth())
    setSelectedDate(null)
    setSelectedSlot(null)
    setForm({ name: '', phone: '', email: '', notes: '' })
    setError(null)
    setSubmitted(false)
    if (dialogRef.current) dialogRef.current.focus()
  }, [open, today])

  const monthDays = useMemo(() => {
    const firstOfMonth = new Date(viewYear, viewMonth, 1)
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate()
    const leading = mondayIndex(firstOfMonth)
    const cells: (Date | null)[] = []
    for (let i = 0; i < leading; i += 1) cells.push(null)
    for (let d = 1; d <= daysInMonth; d += 1) cells.push(new Date(viewYear, viewMonth, d))
    return cells
  }, [viewYear, viewMonth])

  const canGoPrev =
    new Date(viewYear, viewMonth, 1) > new Date(today.getFullYear(), today.getMonth(), 1)

  function goPrevMonth() {
    if (!canGoPrev) return
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1)
        return 11
      }
      return m - 1
    })
  }

  function goNextMonth() {
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1)
        return 0
      }
      return m + 1
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!selectedDate) {
      setError('Please choose a date for your appointment.')
      return
    }
    if (!selectedSlot) {
      setError('Please choose a time for your appointment.')
      return
    }
    if (!form.name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!form.phone.trim()) {
      setError('Please enter a contact number.')
      return
    }

    const dateLabel = formatLongDate(selectedDate)

    const message = [
      'New appointment request.',
      '',
      `Preferred date: ${dateLabel} (${isoDate(selectedDate)})`,
      `Preferred time: ${selectedSlot}`,
      form.notes.trim() ? `\nAdditional notes:\n${form.notes.trim()}` : '',
    ]
      .filter((line) => line !== '')
      .join('\n')

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service,
        message,
        detailsTitle: 'Appointment details',
        details: [
          { label: 'Preferred date', value: dateLabel },
          { label: 'Preferred time', value: selectedSlot },
        ],
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your appointment request. Please try again or email info@komodromosgroup.com directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return createPortal(
    <div
      className="appt"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="appt__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="appt-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="appt__close" onClick={onClose} aria-label="Close">
          <X size={18} strokeWidth={2} aria-hidden />
        </button>

        {submitted ? (
          <div className="appt__success">
            <div className="appt__success-icon" aria-hidden>
              <Check size={30} strokeWidth={2.5} />
            </div>
            <h3>Appointment request received</h3>
            <p>
              Thank you{form.name.trim() ? `, ${form.name.trim().split(' ')[0]}` : ''}. Our team will
              confirm your appointment
              {selectedDate ? ` for ${formatLongDate(selectedDate)}` : ''}
              {selectedSlot ? ` at ${selectedSlot}` : ''} and be in touch shortly.
            </p>
            <button type="button" className="appt__btn" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <header className="appt__head">
              <p className="appt__eyebrow">{eyebrow}</p>
              <h2 id="appt-title" className="appt__title">
                {title}
              </h2>
              <p className="appt__sub">{subtitle}</p>
            </header>

            <form className="appt__body" onSubmit={handleSubmit}>
              <div className="appt__grid">
                <div className="appt__col">
                  <p className="appt__label">
                    <CalendarDays size={14} strokeWidth={2} aria-hidden /> Select a date
                  </p>
                  <div className="appt-cal">
                    <div className="appt-cal__nav">
                      <button
                        type="button"
                        className="appt-cal__navbtn"
                        onClick={goPrevMonth}
                        disabled={!canGoPrev}
                        aria-label="Previous month"
                      >
                        <ChevronLeft size={18} strokeWidth={2} aria-hidden />
                      </button>
                      <span className="appt-cal__month">
                        {MONTH_NAMES[viewMonth]} {viewYear}
                      </span>
                      <button
                        type="button"
                        className="appt-cal__navbtn"
                        onClick={goNextMonth}
                        aria-label="Next month"
                      >
                        <ChevronRight size={18} strokeWidth={2} aria-hidden />
                      </button>
                    </div>
                    <div className="appt-cal__weekdays" aria-hidden>
                      {WEEKDAYS.map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="appt-cal__grid">
                      {monthDays.map((date, index) => {
                        if (!date)
                          return (
                            <span
                              key={`blank-${index}`}
                              className="appt-cal__cell appt-cal__cell--empty"
                            />
                          )
                        const disabled = date < today
                        const isSelected =
                          !!selectedDate && isoDate(date) === isoDate(selectedDate)
                        return (
                          <button
                            key={isoDate(date)}
                            type="button"
                            className={`appt-cal__cell${isSelected ? ' appt-cal__cell--selected' : ''}`}
                            disabled={disabled}
                            aria-pressed={isSelected}
                            onClick={() => setSelectedDate(date)}
                          >
                            {date.getDate()}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>

                <div className="appt__col">
                  <p className="appt__label">
                    <Clock size={14} strokeWidth={2} aria-hidden /> Preferred time
                  </p>
                  <div className="appt-slots">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`appt-slot${selectedSlot === slot ? ' appt-slot--selected' : ''}`}
                        aria-pressed={selectedSlot === slot}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <div className="appt__summary" aria-live="polite">
                    {selectedDate ? (
                      <p>
                        <span>{formatLongDate(selectedDate)}</span>
                        {selectedSlot ? <span> · {selectedSlot}</span> : null}
                      </p>
                    ) : (
                      <p className="appt__summary--muted">No date selected yet</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="appt__fields">
                <div className="appt__field">
                  <label htmlFor="appt-name">Full name</label>
                  <input
                    id="appt-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="appt__field">
                  <label htmlFor="appt-phone">Contact number</label>
                  <input
                    id="appt-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+357 00 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="appt__field">
                  <label htmlFor="appt-email">
                    Email <span className="appt__optional">(optional)</span>
                  </label>
                  <input
                    id="appt-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="appt__field appt__field--full">
                  <label htmlFor="appt-notes">Notes (optional)</label>
                  <textarea
                    id="appt-notes"
                    name="notes"
                    rows={3}
                    placeholder="Anything we should know before your appointment…"
                    value={form.notes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error ? (
                <p className="appt__error" role="alert">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="appt__btn appt__submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Request appointment'}
              </button>
              <p className="appt__note">
                This is an appointment request. Our team confirms availability by phone or email.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
