import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Building2, Mail, MapPin, Phone, Send, Smartphone } from 'lucide-react'
import GwImagePlaceholder from './GwImagePlaceholder'
import GwPageHero from './GwPageHero'
import { useReveal } from '../../hooks/useReveal'
import { sendContactInquiry } from '../../lib/sendContactInquiry'
import { useFormSpamProtection } from '../../hooks/useFormSpamProtection'
import {
  contactForm,
  contactHero,
  contactOffices,
  contactWelcome,
} from '../../data/aviationContactPage'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: contactForm.defaultService,
  message: '',
}

export default function GwContactPage() {
  const pageRef = useReveal()
  const location = useLocation()
  const { spamMeta, spamFields } = useFormSpamProtection()
  const [form, setForm] = useState<FormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const state = location.state as {
      serviceInterest?: string
      contactPrefill?: Partial<FormState>
    } | null

    if (!state) return

    setForm((current) => {
      let next = { ...current }
      const prefill = state.contactPrefill

      if (prefill) {
        next = {
          ...next,
          ...Object.fromEntries(
            Object.entries(prefill).filter(([, value]) => value !== undefined && value !== ''),
          ),
        } as FormState
      }

      if (state.serviceInterest) {
        next = { ...next, service: state.serviceInterest }
      }

      return next
    })
  }, [location.state])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)

    try {
      await sendContactInquiry({
        source: 'Global Wings Aviation Contact',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        service: form.service.trim(),
        message: form.message.trim(),
        website: spamMeta.website,
        formStartedAt: spamMeta.formStartedAt,
      })
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Could not send your message. Please try again or email info@komodromosgroup.com directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="gw-aviation-page gw-contact-page" ref={pageRef}>
      <GwPageHero
        id="gw-contact-hero-title"
        eyebrow="Global Wings · Contact"
        title={contactHero.title}
        subtitle={contactHero.subtitle}
        lead={contactHero.lead}
      />

      <main className="gw-main gw-main--contact" aria-label="Contact Global Wings">
        <section className="gw-contact-section gw-contact-section--welcome">
          <div className="container gw-contact-welcome">
            <div className="gw-contact-welcome__copy reveal">
              <p className="gw-contact-section__eyebrow">Welcome</p>
              <h2 className="gw-contact-section__title">{contactWelcome.title}</h2>
              {contactWelcome.paragraphs.map((para, i) => (
                <p key={i} className="gw-contact-welcome__para">
                  {para}
                </p>
              ))}
            </div>
            <div className="gw-contact-welcome__media reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="4 / 5" label="Insert image here" />
            </div>
          </div>
        </section>

        <section className="gw-contact-section gw-contact-section--offices" aria-label="Contact information">
          <div className="container">
            <header className="gw-contact-section__header reveal">
              <p className="gw-contact-section__eyebrow">Our Offices</p>
              <h2 className="gw-contact-section__title">Contact Information</h2>
            </header>

            <div className="gw-contact-offices-grid">
              {contactOffices.map((office, i) => (
                <article
                  key={office.id}
                  className={`gw-contact-office${office.id === 'limassol' ? ' gw-contact-office--hq' : ''} reveal reveal-delay-${Math.min(i + 1, 2)}`}
                >
                  <div className="gw-contact-office__accent" aria-hidden />
                  <div className="gw-contact-office__head">
                    <div className="gw-contact-office__icon-wrap">
                      <Building2 className="gw-contact-office__icon" aria-hidden strokeWidth={1.5} />
                    </div>
                    <div className="gw-contact-office__head-copy">
                      {office.id === 'limassol' ? (
                        <span className="gw-contact-office__badge">Headquarters</span>
                      ) : null}
                      <h3 className="gw-contact-office__title">{office.name}</h3>
                    </div>
                  </div>

                  <div className="gw-contact-office__body">
                    <div className="gw-contact-office__cell">
                      <span className="gw-contact-office__label">
                        <MapPin aria-hidden size={14} strokeWidth={2} />
                        Address
                      </span>
                      <address className="gw-contact-office__address">
                        {office.address.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </address>
                    </div>

                    <div className="gw-contact-office__cell">
                      <span className="gw-contact-office__label">
                        <Phone aria-hidden size={14} strokeWidth={2} />
                        Telephone
                      </span>
                      <ul className="gw-contact-office__links">
                        {office.telephones.map((phone) => (
                          <li key={phone.href}>
                            <a href={phone.href}>{phone.display}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="gw-contact-office__cell">
                      <span className="gw-contact-office__label">
                        <Smartphone aria-hidden size={14} strokeWidth={2} />
                        Mobile
                      </span>
                      <ul className="gw-contact-office__links">
                        {office.mobiles.map((mobile) => (
                          <li key={mobile.href}>
                            <a href={mobile.href}>{mobile.display}</a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="gw-contact-office__cell gw-contact-office__cell--email">
                      <span className="gw-contact-office__label">
                        <Mail aria-hidden size={14} strokeWidth={2} />
                        Email
                      </span>
                      <a className="gw-contact-office__email" href={`mailto:${office.email}`}>
                        {office.email}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gw-contact-section gw-contact-section--form" aria-labelledby="gw-contact-form-title">
          <div className="container gw-contact-form-layout">
            <div className="gw-contact-form-intro reveal">
              <p className="gw-contact-section__eyebrow">Get In Touch</p>
              <h2 id="gw-contact-form-title" className="gw-contact-section__title gw-contact-section__title--light">
                {contactForm.title}
              </h2>
              <p className="gw-contact-form-intro__text">{contactForm.intro}</p>
            </div>

            <div className="gw-contact-form-wrap reveal reveal-delay-1">
              {submitted ? (
                <div className="gw-contact-success">
                  <div className="gw-contact-success__icon" aria-hidden>
                    ✓
                  </div>
                  <h3 className="gw-contact-success__title">{contactForm.successTitle}</h3>
                  <p className="gw-contact-success__text">{contactForm.successMessage}</p>
                </div>
              ) : (
                <form className="gw-contact-form" onSubmit={handleSubmit}>
                  {spamFields}
                  <div className="gw-contact-form__row">
                    <div className="gw-contact-form__field">
                      <label htmlFor="gw-contact-name">Full Name</label>
                      <input
                        id="gw-contact-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gw-contact-form__field">
                      <label htmlFor="gw-contact-email">Email Address</label>
                      <input
                        id="gw-contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="gw-contact-form__row">
                    <div className="gw-contact-form__field">
                      <label htmlFor="gw-contact-phone">Phone Number</label>
                      <input
                        id="gw-contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="+357 ..."
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="gw-contact-form__field">
                      <label htmlFor="gw-contact-company">Company / Organisation</label>
                      <input
                        id="gw-contact-company"
                        name="company"
                        type="text"
                        placeholder="Optional"
                        value={form.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="gw-contact-form__field">
                    <label htmlFor="gw-contact-service">Service Interest</label>
                    <input
                      id="gw-contact-service"
                      name="service"
                      type="text"
                      value={form.service}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="gw-contact-form__field">
                    <label htmlFor="gw-contact-message">Message</label>
                    <textarea
                      id="gw-contact-message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us how we can assist with your aviation requirements..."
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="gw-contact-form__submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message'}
                    <Send aria-hidden size={16} strokeWidth={2} />
                  </button>
                  {submitError ? (
                    <p className="contact-form-error contact-form-error--light" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
