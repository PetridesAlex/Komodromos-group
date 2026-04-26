import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { serviceCards } from '../data/serviceCards'

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false)
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

  useEffect(() => {
    const s = location.state as {
      serviceInterest?: string
      vipSubService?: string
      consultingTopic?: string
      weddingPackage?: string
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
        const vipSub = s.vipSubService
        if (typeof vipSub === 'string' && vipSub) {
          next = { ...next, message: `Interested in: ${vipSub}` }
        } else {
          const consultingTopic = s.consultingTopic
          if (typeof consultingTopic === 'string' && consultingTopic) {
            next = { ...next, message: `Topic: ${consultingTopic}` }
          } else {
            const weddingPackage = s.weddingPackage
            if (typeof weddingPackage === 'string' && weddingPackage) {
              next = { ...next, message: `Wedding package interest: ${weddingPackage}` }
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/#services" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
            <Link
              to="/contact"
              className="nav-active"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
            <TopbarSocialLinks variant="mobile" />
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

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
              <span>+357 00 000 000</span>
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
                    {serviceCards.map((c) => (
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
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="form-submit">
                  SEND MESSAGE
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
