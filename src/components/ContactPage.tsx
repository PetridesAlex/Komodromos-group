import { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Check } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { CONTACT_FIELD_LIMITS } from '../lib/contactFormValidation'
import { useFormSpamProtection } from '../hooks/useFormSpamProtection'
import { getPublicServiceCards } from '../lib/serviceMaintenance'
import { vipSubServices } from '../data/vipSubServices'

const CONTACT_PHONES = ['24333305', '96000336', '99243100', '24333306'] as const

function formatPhoneDisplay(phone: string): string {
  if (phone.length === 8) {
    return `+357 ${phone.slice(0, 2)} ${phone.slice(2, 5)} ${phone.slice(5)}`
  }
  return `+357 ${phone}`
}

export default function ContactPage() {
  const location = useLocation()
  const pageRef = useReveal()
  const { spamMeta, spamFields } = useFormSpamProtection()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    const s = location.state as {
      serviceInterest?: string
      storageTip?: string
      vipSubService?: string
      consultingTopic?: string
      weddingPackage?: string
      taxFilingPackage?: string
      taxFilingTitle?: string
      contactPrefill?: {
        name?: string
        email?: string
        phone?: string
        company?: string
        service?: string
        message?: string
      }
    } | null

    if (!s) return

    setForm((f) => {
      let next = { ...f }
      const p = s.contactPrefill
      if (p) {
        if (p.name !== undefined && p.name !== '') next = { ...next, name: p.name }
        if (p.email !== undefined && p.email !== '') next = { ...next, email: p.email }
        if (p.phone !== undefined && p.phone !== '') next = { ...next, phone: p.phone }
        if (p.company !== undefined) next = { ...next, company: p.company }
        if (p.service !== undefined && p.service !== '') next = { ...next, service: p.service }
        if (p.message !== undefined && p.message !== '') next = { ...next, message: p.message }
      }

      const interest = s.serviceInterest
      if (typeof interest === 'string' && interest) {
        next = { ...next, service: interest }
      }

      if (!next.message.trim()) {
        const taxTitle = s.taxFilingTitle
        if (typeof taxTitle === 'string' && taxTitle) {
          const pkg = s.taxFilingPackage
          next = {
            ...next,
            message:
              pkg !== undefined && pkg !== ''
                ? `Αίτημα πληρωμής φορολογικής δήλωσης — ${taxTitle} (πακέτο: ${pkg})`
                : `Αίτημα πληρωμής φορολογικής δήλωσης — ${taxTitle}`,
          }
        } else {
          const vipSub = s.vipSubService
          if (typeof vipSub === 'string' && vipSub) {
            next = { ...next, message: `Interested in: ${vipSub}` }
          } else {
            const consultingTopic = s.consultingTopic
            if (typeof consultingTopic === 'string' && consultingTopic) {
              next = { ...next, message: `Topic: ${consultingTopic}` }
            } else {
              const storageTip = s.storageTip
              if (typeof storageTip === 'string' && storageTip) {
                next = {
                  ...next,
                  message: `I would like more information about: ${storageTip}`,
                }
              } else {
                const weddingPackage = s.weddingPackage
                if (typeof weddingPackage === 'string' && weddingPackage) {
                  next = { ...next, message: `Wedding package interest: ${weddingPackage}` }
                }
              }
            }
          }
        }
      }

      return next
    })
  }, [location.state])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError(null)

    try {
      await sendContactInquiry({
        source: 'Komodromos Contact Page',
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

  const requestService = useCallback((serviceTitle: string, vipDetail?: string) => {
    setSubmitted(false)
    setSubmitError(null)
    setForm((f) => ({
      ...f,
      service: serviceTitle,
      message: vipDetail
        ? f.message.trim()
          ? f.message
          : `Interested in: ${vipDetail}`
        : f.message,
    }))

    const desk = document.getElementById('contact-desk')
    desk?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    })

    window.setTimeout(() => {
      document.getElementById('name')?.focus()
      document.getElementById('contact-form-panel')?.classList.add('is-pulse')
      window.setTimeout(() => {
        document.getElementById('contact-form-panel')?.classList.remove('is-pulse')
      }, 1200)
    }, 350)
  }, [])

  const companyServices = getPublicServiceCards()

  return (
    <div className="page contact-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero__media" aria-hidden />
        <div className="contact-hero__veil" aria-hidden />
        <div className="contact-hero__glow contact-hero__glow--a" aria-hidden />
        <div className="contact-hero__glow contact-hero__glow--b" aria-hidden />

        <div className="container contact-hero__inner">
          <p className="contact-hero__brand reveal">Komodromos Group</p>
          <h1 id="contact-hero-title" className="contact-hero__title reveal reveal-delay-1">
            Let’s start a conversation
          </h1>
          <p className="contact-hero__lead reveal reveal-delay-2">
            Consultations, partnerships, and private client requests — our desk responds within 24
            hours.
          </p>
          <a href="#contact-desk" className="contact-hero__cta reveal reveal-delay-3">
            Open the concierge desk
            <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden />
          </a>
        </div>
      </section>

      <section id="contact-desk" className="contact-body" aria-labelledby="contact-desk-title">
        <div className="container contact-grid">
          <aside className="contact-info reveal-left reveal">
            <p className="contact-info__eyebrow">Private client desk</p>
            <h2 id="contact-desk-title" className="contact-info__title">
              Get in touch
            </h2>
            <p className="contact-info__intro">
              Whether you are exploring our companies or ready to engage, write to us with clarity —
              we will guide the next step with confidence.
            </p>

            <ul className="contact-channels">
              <li className="contact-channel">
                <span className="contact-channel__icon" aria-hidden>
                  <Mail size={18} strokeWidth={2} />
                </span>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Email</span>
                  <a className="contact-channel__value" href="mailto:info@komodromosgroup.com">
                    info@komodromosgroup.com
                  </a>
                </div>
              </li>

              <li className="contact-channel">
                <span className="contact-channel__icon" aria-hidden>
                  <Phone size={18} strokeWidth={2} />
                </span>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Phone</span>
                  <div className="contact-channel__phones">
                    {CONTACT_PHONES.map((phone) => (
                      <a key={phone} href={`tel:+357${phone}`} className="contact-channel__value">
                        {formatPhoneDisplay(phone)}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="contact-channel">
                <span className="contact-channel__icon" aria-hidden>
                  <MapPin size={18} strokeWidth={2} />
                </span>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Office</span>
                  <span className="contact-channel__value contact-channel__value--static">
                    Limassol, Cyprus
                  </span>
                </div>
              </li>

              <li className="contact-channel">
                <span className="contact-channel__icon" aria-hidden>
                  <Clock size={18} strokeWidth={2} />
                </span>
                <div className="contact-channel__body">
                  <span className="contact-channel__label">Business hours</span>
                  <span className="contact-channel__value contact-channel__value--static">
                    Mon – Fri · 09:00 – 18:00
                  </span>
                  <span className="contact-channel__meta">Saturday by appointment</span>
                </div>
              </li>
            </ul>
          </aside>

          <div id="contact-form-panel" className="contact-form-wrap reveal-right reveal">
            {submitted ? (
              <div className="contact-success" role="status">
                <div className="contact-success__icon" aria-hidden>
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3 className="contact-success__title">Message received</h3>
                <p className="contact-success__body">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {spamFields}
                <header className="contact-form__head">
                  <p className="contact-form__eyebrow">Enquiry</p>
                  <h3 className="contact-form__title">Send a message</h3>
                  <p className="contact-form__lead">
                    Share a few details and we will connect you with the right company desk.
                  </p>
                </header>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      maxLength={CONTACT_FIELD_LIMITS.name}
                      placeholder="Alexandros Petrides"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      maxLength={CONTACT_FIELD_LIMITS.email}
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={CONTACT_FIELD_LIMITS.phone}
                      placeholder="+357 00 000 000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      maxLength={CONTACT_FIELD_LIMITS.company}
                      placeholder="Optional"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service of interest</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="">Select a service</option>
                    <optgroup label="Group companies">
                      {companyServices.map((c) => (
                        <option key={c.slug} value={c.title}>
                          {c.navTitle ?? c.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="VIP portfolio">
                      {vipSubServices.map((vip) => (
                        <option key={vip.slug} value={`VIP Services — ${vip.title}`}>
                          {vip.title}
                        </option>
                      ))}
                    </optgroup>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={CONTACT_FIELD_LIMITS.message}
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit" disabled={submitting}>
                  <span>{submitting ? 'Sending…' : 'Send message'}</span>
                  {!submitting ? <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden /> : null}
                </button>
                {submitError ? (
                  <p className="contact-form-error" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </section>

      <section
        id="contact-services"
        className="contact-services"
        aria-labelledby="contact-services-title"
      >
        <div className="container">
          <header className="contact-services__head reveal">
            <p className="contact-services__eyebrow">Direct request</p>
            <h2 id="contact-services-title" className="contact-services__title">
              Choose a service to enquire
            </h2>
            <p className="contact-services__lead">
              Select any company or VIP experience below — we will prefill your enquiry so you can
              send it in one step.
            </p>
          </header>

          <div className="contact-services__block reveal">
            <div className="contact-services__block-head">
              <h3 className="contact-services__block-title">Group companies</h3>
              <p className="contact-services__block-note">From the Solutions portfolio</p>
            </div>
            <ul className="contact-service-grid">
              {companyServices.map((card, index) => (
                <li
                  key={card.slug}
                  className="contact-service-card"
                  style={{ animationDelay: `${Math.min(index, 8) * 0.05}s` }}
                >
                  <div className="contact-service-card__media">
                    <img
                      src={card.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={400}
                    />
                    <span className="contact-service-card__scrim" aria-hidden />
                  </div>
                  <div className="contact-service-card__body">
                    <p className="contact-service-card__eyebrow">{card.eyebrow}</p>
                    <h4 className="contact-service-card__name">{card.navTitle ?? card.title}</h4>
                    <button
                      type="button"
                      className="contact-service-card__cta"
                      onClick={() => requestService(card.title)}
                    >
                      Request this service
                      <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-services__block contact-services__block--vip reveal">
            <div className="contact-services__block-head">
              <h3 className="contact-services__block-title">VIP portfolio</h3>
              <p className="contact-services__block-note">Private client experiences</p>
            </div>
            <ul className="contact-vip-grid">
              {vipSubServices.map((vip, index) => (
                <li
                  key={vip.slug}
                  className="contact-vip-card"
                  style={{ animationDelay: `${Math.min(index, 10) * 0.045}s` }}
                >
                  <div className="contact-vip-card__media">
                    <img
                      src={vip.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={420}
                      height={280}
                    />
                    <span className="contact-vip-card__scrim" aria-hidden />
                  </div>
                  <div className="contact-vip-card__body">
                    {vip.kicker ? (
                      <p className="contact-vip-card__kicker">{vip.kicker}</p>
                    ) : null}
                    <h4 className="contact-vip-card__name">{vip.nameLine ?? vip.title}</h4>
                    <button
                      type="button"
                      className="contact-vip-card__cta"
                      onClick={() =>
                        requestService(`VIP Services — ${vip.title}`, vip.title)
                      }
                    >
                      Request
                      <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
