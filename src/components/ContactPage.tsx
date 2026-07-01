import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { CONTACT_FIELD_LIMITS } from '../lib/contactFormValidation'
import { getPublicServiceCards } from '../lib/serviceMaintenance'

const CONTACT_PHONES = ['24333305', '96000336', '99243100', '24333306'] as const

export default function ContactPage() {
  const location = useLocation()
  const pageRef = useReveal()
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="contact-hero">
        <div className="contact-hero-glow contact-hero-glow-1" />
        <div className="contact-hero-glow contact-hero-glow-2" />
        <div className="container contact-hero-inner">
          <p className="eyebrow reveal">CONTACT US</p>
          <h1 className="reveal reveal-delay-1">Let's Start a Conversation</h1>
          <p className="contact-hero-sub">
            Reach out for consultations, partnerships, or general inquiries.
            Our team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="contact-body">
        <div className="container contact-grid">
          <div className="contact-info reveal-left reveal">
            <h2>Get In Touch</h2>
            <p>
              Whether you're exploring our services or ready to engage, we're
              here to help you take the next step with confidence.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-label">EMAIL</span>
              <span>info@komodromosgroup.com</span>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">PHONE</span>
              {CONTACT_PHONES.map((phone) => (
                <a key={phone} href={`tel:+357${phone}`} className="contact-detail-phone">
                  +357 {phone}
                </a>
              ))}
            </div>
            <div className="contact-detail">
              <span className="contact-detail-label">OFFICE</span>
              <span>Limassol, Cyprus</span>
            </div>

            <div className="contact-hours">
              <span className="contact-detail-label">BUSINESS HOURS</span>
              <span>Mon – Fri: 09:00 – 18:00</span>
              <span>Sat: By Appointment</span>
            </div>
          </div>

          <div className="contact-form-wrap reveal-right reveal">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message Sent</h3>
                <p>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={CONTACT_FIELD_LIMITS.name}
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={CONTACT_FIELD_LIMITS.email}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
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
                      maxLength={CONTACT_FIELD_LIMITS.company}
                      placeholder="Your company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    {getPublicServiceCards().map((c) => (
                      <option key={c.slug} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    maxLength={CONTACT_FIELD_LIMITS.message}
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit" disabled={submitting}>
                  {submitting ? 'SENDING…' : 'SEND MESSAGE'}
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

      <Footer />
    </div>
  )
}
