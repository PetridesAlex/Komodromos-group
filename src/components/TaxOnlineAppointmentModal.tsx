import { useEffect, useId, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'

type Props = {
  isOpen: boolean
  onClose: () => void
}

const WEEKDAYS_EN = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'] as const
const WEEKDAYS_EL = ['Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα', 'Κυ'] as const

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function isoDate(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function mondayIndex(date: Date): number {
  return (date.getDay() + 6) % 7
}

export default function TaxOnlineAppointmentModal({ isOpen, onClose }: Props) {
  const { t, i18n } = useTranslation()
  const titleId = useId()
  const locale = i18n.resolvedLanguage === 'en' ? 'en' : 'el'
  const today = useMemo(() => startOfDay(new Date()), [])

  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
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
    if (!isOpen) return
    setViewYear(today.getFullYear())
    setViewMonth(today.getMonth())
    setSelectedDate(null)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPhone('')
    setBusy(false)
    setError(null)
    setSuccess(false)
  }, [isOpen, today])

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

  const monthLabel = useMemo(() => {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'el-GR', {
      month: 'long',
      year: 'numeric',
    }).format(new Date(viewYear, viewMonth, 1))
  }, [locale, viewYear, viewMonth])

  const weekdays = locale === 'en' ? WEEKDAYS_EN : WEEKDAYS_EL

  function formatLongDate(date: Date): string {
    return new Intl.DateTimeFormat(locale === 'en' ? 'en-GB' : 'el-GR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

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

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    if (!selectedDate) {
      setError(t('tax.onlineApptNeedDate'))
      return
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`.trim()
    const dateLabel = formatLongDate(selectedDate)

    setBusy(true)
    try {
      await sendContactInquiry({
        source: 'TaxNex — Online Appointment',
        name: fullName,
        email: email.trim(),
        phone: phone.trim(),
        service: 'Tax & Accounting Services',
        message: [
          t('tax.onlineApptPrefillMessage'),
          '',
          `Preferred date: ${dateLabel} (${isoDate(selectedDate)})`,
        ].join('\n'),
        detailsTitle: 'Online appointment',
        details: [
          { label: 'First name', value: firstName.trim() },
          { label: 'Last name', value: lastName.trim() },
          { label: 'Email', value: email.trim() },
          { label: 'Contact number', value: phone.trim() },
          { label: 'Preferred date', value: dateLabel },
        ],
      })
      setSuccess(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Could not send your appointment request. Please try again or email info@komodromosgroup.com directly.',
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
        className="taxnex-checkout-modal__dialog taxnex-checkout-modal__dialog--online-appt"
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
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.onlineApptEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.onlineApptSuccessTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">
              {t('tax.onlineApptSuccessBody', {
                date: selectedDate ? formatLongDate(selectedDate) : '',
              })}
            </p>
            <button type="button" className="taxnex-btn taxnex-btn--primary" onClick={onClose}>
              {t('tax.meetingModalCloseAria')}
            </button>
          </div>
        ) : (
          <>
            <p className="taxnex-checkout-modal__eyebrow">{t('tax.onlineApptEyebrow')}</p>
            <h2 id={titleId} className="taxnex-checkout-modal__title">
              {t('tax.onlineApptTitle')}
            </h2>
            <p className="taxnex-checkout-modal__lead">{t('tax.onlineApptLead')}</p>

            <form className="taxnex-checkout-modal__form taxnex-online-appt__form" onSubmit={handleSubmit}>
              <div className="taxnex-online-appt__cal" aria-label={t('tax.onlineApptCalendarAria')}>
                <div className="taxnex-online-appt__cal-nav">
                  <button
                    type="button"
                    className="taxnex-online-appt__cal-navbtn"
                    onClick={goPrevMonth}
                    disabled={!canGoPrev}
                    aria-label={t('tax.onlineApptPrevMonth')}
                  >
                    <ChevronLeft size={18} strokeWidth={2.25} aria-hidden />
                  </button>
                  <p className="taxnex-online-appt__cal-month">{monthLabel}</p>
                  <button
                    type="button"
                    className="taxnex-online-appt__cal-navbtn"
                    onClick={goNextMonth}
                    aria-label={t('tax.onlineApptNextMonth')}
                  >
                    <ChevronRight size={18} strokeWidth={2.25} aria-hidden />
                  </button>
                </div>

                <div className="taxnex-online-appt__cal-weekdays">
                  {weekdays.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="taxnex-online-appt__cal-grid">
                  {monthDays.map((day, index) => {
                    if (!day) {
                      return <span key={`empty-${index}`} className="taxnex-online-appt__cal-empty" />
                    }
                    const disabled = day < today
                    const selected =
                      selectedDate !== null && isoDate(day) === isoDate(selectedDate)
                    const isToday = isoDate(day) === isoDate(today)
                    return (
                      <button
                        key={isoDate(day)}
                        type="button"
                        disabled={disabled}
                        className={[
                          'taxnex-online-appt__cal-day',
                          selected ? 'is-selected' : '',
                          isToday ? 'is-today' : '',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        onClick={() => setSelectedDate(day)}
                        aria-pressed={selected}
                        aria-label={formatLongDate(day)}
                      >
                        {day.getDate()}
                      </button>
                    )
                  })}
                </div>

                {selectedDate ? (
                  <p className="taxnex-online-appt__selected" role="status">
                    {t('tax.onlineApptSelected', { date: formatLongDate(selectedDate) })}
                  </p>
                ) : (
                  <p className="taxnex-online-appt__hint">{t('tax.onlineApptHint')}</p>
                )}
              </div>

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
                  {busy ? t('tax.meetingModalSubmitting') : t('tax.onlineApptSubmit')}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
