import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { Check, ChevronDown, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'
import {
  GROUP_BUSINESS_HOURS,
  GROUP_CONTACT_EMAIL,
  GROUP_CONTACT_OFFICES,
  GROUP_CONTACT_PHONES,
} from '../data/groupContact'
import { useSiteContext } from '../seo/SiteContext'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { CONTACT_FIELD_LIMITS } from '../lib/contactFormValidation'
import { useFormSpamProtection } from '../hooks/useFormSpamProtection'
import { getPublicServiceCards } from '../lib/serviceMaintenance'

function isWeddingSkyPath(pathname: string) {
  return pathname === '/services/wedding' || pathname.startsWith('/services/wedding/')
}

export default function SocialHub() {
  const { brand } = useSiteContext()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [phonesOpen, setPhonesOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const phoneMenuRef = useRef<HTMLDivElement>(null)
  const bookingFormRef = useRef<HTMLFormElement>(null)
  const id = useId()
  const panelId = `social-hub-panel-${id}`
  const phoneListId = `social-hub-phones-${id}`
  const { spamMeta, spamFields } = useFormSpamProtection()

  const hideOnWeddingSky = brand?.slug === 'wedding' || isWeddingSkyPath(pathname)
  const services = getPublicServiceCards()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (phonesOpen) {
        setPhonesOpen(false)
        return
      }
      if (bookingOpen) {
        setBookingOpen(false)
        return
      }
      setOpen(false)
    }
    const onDoc = (e: MouseEvent) => {
      const t = e.target as Node
      if (panelRef.current?.contains(t) || btnRef.current?.contains(t)) {
        return
      }
      setOpen(false)
      setPhonesOpen(false)
      setBookingOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDoc)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDoc)
    }
  }, [open, phonesOpen, bookingOpen])

  useEffect(() => {
    if (!phonesOpen) return
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null
      if (phoneMenuRef.current && target && !phoneMenuRef.current.contains(target)) {
        setPhonesOpen(false)
      }
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [phonesOpen])

  useEffect(() => {
    if (hideOnWeddingSky) {
      setOpen(false)
      setPhonesOpen(false)
      setBookingOpen(false)
    }
  }, [hideOnWeddingSky])

  useEffect(() => {
    if (!open) {
      setPhonesOpen(false)
      setBookingOpen(false)
    }
  }, [open])

  useEffect(() => {
    if (bookingOpen && bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [bookingOpen])

  async function handleBookingSubmit(e: FormEvent) {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setSubmitError(null)
    try {
      await sendContactInquiry({
        source: 'Social Hub — Book Now',
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message || `I would like to book: ${form.service || 'a service'}.`,
        website: spamMeta.website,
        formStartedAt: spamMeta.formStartedAt,
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Could not send your request.')
    } finally {
      setSubmitting(false)
    }
  }

  if (hideOnWeddingSky) return null

  return (
    <div className={`social-hub ${open ? 'social-hub--open' : ''}`}>
      {open && (
        <button
          type="button"
          className="social-hub-backdrop"
          aria-hidden
          tabIndex={-1}
          onClick={() => {
            setOpen(false)
            setPhonesOpen(false)
            setBookingOpen(false)
          }}
        />
      )}
      <div
        id={panelId}
        ref={panelRef}
        className="social-hub-panel"
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label="Connect desk"
      >
        <div className="social-hub-panel-scroll">
          <header className="social-hub-panel-head">
            <p className="social-hub-eyebrow">Connect desk</p>
            <h2 className="social-hub-heading">
              <span className="social-hub-heading-gradient">Connect</span>
            </h2>
            <p className="social-hub-sub">
              <span className="social-hub-sub-muted">Follow </span>
              <span className="social-hub-sub-brand">Komodromos Group</span>
              <span className="social-hub-sub-muted"> — socials, locations & booking</span>
            </p>
          </header>

          <section className="social-hub-section" aria-label="Official channels">
            <p className="social-hub-section-label">Official channels</p>
            <ul className="social-hub-list">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className={`social-hub-item social-hub-item--${s.navClass}`}
                    aria-label={s.label}
                  >
                    <span className="social-hub-item-icon">{s.svg}</span>
                    <span className="social-hub-item-label">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="social-hub-section" aria-label="Contact">
            <p className="social-hub-section-label">Contact</p>
            <a className="social-hub-email" href={`mailto:${GROUP_CONTACT_EMAIL}`}>
              <span className="social-hub-email-icon" aria-hidden>
                <Mail size={14} strokeWidth={2.25} />
              </span>
              <span className="social-hub-email-copy">
                <span className="social-hub-email-label">Email</span>
                <span className="social-hub-email-value">{GROUP_CONTACT_EMAIL}</span>
              </span>
            </a>

            <div
              className={`social-hub-phone-menu${phonesOpen ? ' social-hub-phone-menu--open' : ''}`}
              ref={phoneMenuRef}
            >
              <button
                type="button"
                className="social-hub-phone-menu__trigger"
                aria-expanded={phonesOpen}
                aria-controls={phoneListId}
                aria-haspopup="menu"
                onClick={() => setPhonesOpen((v) => !v)}
              >
                <span className="social-hub-phone-menu__trigger-icon" aria-hidden>
                  <Phone size={14} strokeWidth={2.25} />
                </span>
                <span className="social-hub-phone-menu__trigger-copy">
                  <span className="social-hub-phone-menu__trigger-label">Call our lines</span>
                  <span className="social-hub-phone-menu__trigger-meta">
                    {GROUP_CONTACT_PHONES.length} numbers
                  </span>
                </span>
                <ChevronDown
                  className="social-hub-phone-menu__chevron"
                  size={15}
                  strokeWidth={2.25}
                  aria-hidden
                />
              </button>
              <ul
                id={phoneListId}
                className="social-hub-phone-menu__list"
                role="menu"
                hidden={!phonesOpen}
              >
                {GROUP_CONTACT_PHONES.map((phone) => (
                  <li key={phone.id} role="none">
                    <a
                      href={`tel:+357${phone.digits}`}
                      className="social-hub-phone-menu__item"
                      role="menuitem"
                      aria-label={`${phone.label}: ${phone.display}`}
                      onClick={() => setPhonesOpen(false)}
                    >
                      <span className="social-hub-phone-menu__item-label">{phone.label}</span>
                      <span className="social-hub-phone-menu__item-number">{phone.display}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="social-hub-section" aria-label="Locations">
            <p className="social-hub-section-label">Locations</p>
            <ul className="social-hub-offices">
              {GROUP_CONTACT_OFFICES.map((office, officeIndex) => (
                <li
                  key={office.id}
                  className="social-hub-office"
                  style={{ ['--office-i' as string]: String(officeIndex) }}
                >
                  <div className="social-hub-office__head">
                    <span className="social-hub-office__badge">
                      <MapPin size={11} strokeWidth={2.25} aria-hidden />
                      Location
                    </span>
                    <p className="social-hub-office__city">{office.city}</p>
                  </div>
                  <address className="social-hub-office__address">
                    {office.addressLines.map((line) => (
                      <span key={line} className="social-hub-office__line">
                        {line}
                      </span>
                    ))}
                  </address>
                  <a
                    href={office.phoneHref}
                    className="social-hub-office__phone"
                    aria-label={`${office.city} studio phone: ${office.phone}`}
                  >
                    <Phone size={13} strokeWidth={2} aria-hidden />
                    <span>{office.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="social-hub-section social-hub-section--hours" aria-label="Business hours">
            <div className="social-hub-hours">
              <span className="social-hub-hours-icon" aria-hidden>
                <Clock size={14} strokeWidth={2.25} />
              </span>
              <div className="social-hub-hours-copy">
                <span className="social-hub-hours-label">Business hours</span>
                <span className="social-hub-hours-primary">{GROUP_BUSINESS_HOURS.primary}</span>
                <span className="social-hub-hours-note">{GROUP_BUSINESS_HOURS.note}</span>
              </div>
            </div>
          </section>

          {bookingOpen ? (
            <section className="social-hub-section social-hub-section--booking" aria-label="Book now">
              <p className="social-hub-section-label">Book now</p>
              {submitted ? (
                <div className="social-hub-booking-success" role="status">
                  <span className="social-hub-booking-success-icon" aria-hidden>
                    <Check size={18} strokeWidth={2.5} />
                  </span>
                  <p className="social-hub-booking-success-title">Request received</p>
                  <p className="social-hub-booking-success-body">
                    Our desk will follow up shortly to confirm your booking.
                  </p>
                  <button
                    type="button"
                    className="social-hub-booking-success-again"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form
                  ref={bookingFormRef}
                  className="social-hub-booking-form"
                  onSubmit={handleBookingSubmit}
                  noValidate
                >
                  {spamFields}
                  <label className="social-hub-field">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      required
                      maxLength={CONTACT_FIELD_LIMITS.name}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    />
                  </label>
                  <label className="social-hub-field">
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      required
                      maxLength={CONTACT_FIELD_LIMITS.email}
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    />
                  </label>
                  <label className="social-hub-field">
                    <span>Phone</span>
                    <input
                      type="tel"
                      name="phone"
                      maxLength={CONTACT_FIELD_LIMITS.phone}
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    />
                  </label>
                  <label className="social-hub-field">
                    <span>Service</span>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    >
                      <option value="">Select a service…</option>
                      {services.map((card) => (
                        <option key={card.slug} value={card.title}>
                          {card.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="social-hub-field">
                    <span>Message</span>
                    <textarea
                      name="message"
                      rows={3}
                      maxLength={CONTACT_FIELD_LIMITS.message}
                      placeholder="Tell us what you need…"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    />
                  </label>
                  {submitError ? (
                    <p className="social-hub-booking-error" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  <div className="social-hub-booking-actions">
                    <button
                      type="button"
                      className="social-hub-booking-cancel"
                      onClick={() => setBookingOpen(false)}
                    >
                      Back
                    </button>
                    <button type="submit" className="social-hub-booking-submit" disabled={submitting}>
                      {submitting ? 'Sending…' : 'Send booking'}
                    </button>
                  </div>
                </form>
              )}
            </section>
          ) : null}
        </div>

        {!bookingOpen ? (
          <div className="social-hub-panel-footer">
            <button
              type="button"
              className="social-hub-book-now"
              onClick={() => {
                setSubmitted(false)
                setSubmitError(null)
                setBookingOpen(true)
              }}
            >
              <span className="social-hub-book-now__label">Book Now</span>
              <span className="social-hub-book-now__meta">Choose a service &amp; reserve</span>
            </button>
          </div>
        ) : null}
      </div>
      <button
        type="button"
        ref={btnRef}
        className="social-hub-fab"
        aria-label={open ? 'Close connect desk' : 'Open connect desk'}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="social-hub-fab-inner">
          <svg
            className="social-hub-fab-icon social-hub-fab-icon--share"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
          </svg>
        </span>
        <span className="social-hub-fab-text">Connect</span>
      </button>
    </div>
  )
}
