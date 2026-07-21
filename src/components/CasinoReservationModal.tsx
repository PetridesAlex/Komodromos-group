import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  Minus,
  Plus,
  X,
} from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'

type Props = {
  open: boolean
  onClose: () => void
}

const TIME_SLOTS = ['18:00', '19:00', '20:00', '21:00', '22:00', '23:00'] as const
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

export default function CasinoReservationModal({ open, onClose }: Props) {
  const today = useMemo(() => startOfDay(new Date()), [])
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [guests, setGuests] = useState(2)
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
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
    setGuests(2)
    setForm({ name: '', email: '', phone: '', notes: '' })
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

  const canGoPrev = new Date(viewYear, viewMonth, 1) > new Date(today.getFullYear(), today.getMonth(), 1)

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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!selectedDate) {
      setError('Please choose a date for your reservation.')
      return
    }
    if (!selectedSlot) {
      setError('Please choose an arrival time.')
      return
    }

    const dateLabel = formatLongDate(selectedDate)
    const guestsLabel = `${guests} ${guests === 1 ? 'guest' : 'guests'}`

    const message = [
      'New casino night reservation request.',
      '',
      `Preferred date: ${dateLabel} (${isoDate(selectedDate)})`,
      `Arrival time: ${selectedSlot}`,
      `Party size: ${guestsLabel}`,
      form.notes.trim() ? `\nAdditional notes:\n${form.notes.trim()}` : '',
    ]
      .filter((line) => line !== '')
      .join('\n')

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source: 'Casino Reservation',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: 'Casino Experiences — City of Dreams Mediterranean',
        message,
        detailsTitle: 'Reservation details',
        details: [
          { label: 'Preferred date', value: dateLabel },
          { label: 'Arrival time', value: selectedSlot },
          { label: 'Party size', value: guestsLabel },
        ],
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your reservation. Please try again or email info@komodromosgroup.com directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (!open) return null

  return createPortal(
    <div
      className="casino-reserve"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="casino-reserve__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="casino-reserve-title"
        tabIndex={-1}
        ref={dialogRef}
      >
        <button type="button" className="casino-reserve__close" onClick={onClose} aria-label="Close reservation">
          <X size={18} strokeWidth={2} aria-hidden />
        </button>

        {submitted ? (
          <div className="casino-reserve__success">
            <div className="casino-reserve__success-icon" aria-hidden>
              <Check size={30} strokeWidth={2.5} />
            </div>
            <h3>Reservation request received</h3>
            <p>
              Thank you{form.name.trim() ? `, ${form.name.trim().split(' ')[0]}` : ''}. Our VIP
              concierge team will confirm your casino night
              {selectedDate ? ` for ${formatLongDate(selectedDate)}` : ''}
              {selectedSlot ? ` at ${selectedSlot}` : ''} and be in touch shortly.
            </p>
            <button type="button" className="casino-btn casino-btn--gold" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <header className="casino-reserve__head">
              <p className="casino-reserve__eyebrow">City of Dreams Mediterranean</p>
              <h2 id="casino-reserve-title" className="casino-reserve__title">
                Reserve your night
              </h2>
              <p className="casino-reserve__sub">
                Choose a date and arrival time — we&rsquo;ll arrange VIP gaming and transportation
                to match.
              </p>
            </header>

            <form className="casino-reserve__body" onSubmit={handleSubmit}>
              <div className="casino-reserve__grid">
                <div className="casino-reserve__col">
                  <p className="casino-reserve__label">Select a date</p>
                  <div className="casino-cal">
                    <div className="casino-cal__nav">
                      <button
                        type="button"
                        className="casino-cal__navbtn"
                        onClick={goPrevMonth}
                        disabled={!canGoPrev}
                        aria-label="Previous month"
                      >
                        <ChevronLeft size={18} strokeWidth={2} aria-hidden />
                      </button>
                      <span className="casino-cal__month">
                        {MONTH_NAMES[viewMonth]} {viewYear}
                      </span>
                      <button
                        type="button"
                        className="casino-cal__navbtn"
                        onClick={goNextMonth}
                        aria-label="Next month"
                      >
                        <ChevronRight size={18} strokeWidth={2} aria-hidden />
                      </button>
                    </div>
                    <div className="casino-cal__weekdays" aria-hidden>
                      {WEEKDAYS.map((day) => (
                        <span key={day}>{day}</span>
                      ))}
                    </div>
                    <div className="casino-cal__grid">
                      {monthDays.map((date, index) => {
                        if (!date) return <span key={`blank-${index}`} className="casino-cal__cell casino-cal__cell--empty" />
                        const disabled = date < today
                        const isSelected =
                          !!selectedDate && isoDate(date) === isoDate(selectedDate)
                        return (
                          <button
                            key={isoDate(date)}
                            type="button"
                            className={`casino-cal__cell${isSelected ? ' casino-cal__cell--selected' : ''}`}
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

                <div className="casino-reserve__col">
                  <p className="casino-reserve__label">
                    <Clock size={14} strokeWidth={2} aria-hidden /> Arrival time
                  </p>
                  <div className="casino-slots">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        className={`casino-slot${selectedSlot === slot ? ' casino-slot--selected' : ''}`}
                        aria-pressed={selectedSlot === slot}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <p className="casino-reserve__label">Guests</p>
                  <div className="casino-stepper">
                    <button
                      type="button"
                      className="casino-stepper__btn"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      disabled={guests <= 1}
                      aria-label="Fewer guests"
                    >
                      <Minus size={16} strokeWidth={2.5} aria-hidden />
                    </button>
                    <span className="casino-stepper__value">{guests}</span>
                    <button
                      type="button"
                      className="casino-stepper__btn"
                      onClick={() => setGuests((g) => Math.min(20, g + 1))}
                      disabled={guests >= 20}
                      aria-label="More guests"
                    >
                      <Plus size={16} strokeWidth={2.5} aria-hidden />
                    </button>
                  </div>

                  <div className="casino-reserve__summary" aria-live="polite">
                    {selectedDate ? (
                      <p>
                        <span>{formatLongDate(selectedDate)}</span>
                        {selectedSlot ? <span> · {selectedSlot}</span> : null}
                        <span> · {guests} {guests === 1 ? 'guest' : 'guests'}</span>
                      </p>
                    ) : (
                      <p className="casino-reserve__summary--muted">No date selected yet</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="casino-reserve__fields">
                <div className="casino-reserve__field">
                  <label htmlFor="casino-res-name">Full name</label>
                  <input
                    id="casino-res-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="casino-reserve__field">
                  <label htmlFor="casino-res-email">Email</label>
                  <input
                    id="casino-res-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="casino-reserve__field">
                  <label htmlFor="casino-res-phone">Phone</label>
                  <input
                    id="casino-res-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+357 00 000 000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="casino-reserve__field casino-reserve__field--full">
                  <label htmlFor="casino-res-notes">Special requests (optional)</label>
                  <textarea
                    id="casino-res-notes"
                    name="notes"
                    rows={3}
                    placeholder="Transportation preference, celebration, dining, Platinum Club access…"
                    value={form.notes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error ? (
                <p className="casino-reserve__error" role="alert">
                  {error}
                </p>
              ) : null}

              <button type="submit" className="casino-btn casino-btn--gold casino-reserve__submit" disabled={submitting}>
                {submitting ? 'Sending…' : 'Request reservation'}
              </button>
              <p className="casino-reserve__note">
                This is a reservation request. Our concierge team confirms availability by email or
                phone.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}
