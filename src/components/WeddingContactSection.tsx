import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Mail, MapPin, Check } from 'lucide-react'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { useFormSpamProtection } from '../hooks/useFormSpamProtection'
import { useWeddingLocale } from '../lib/weddingLocale'
import { weddingContactCopy, weddingVisitCopy } from '../data/weddingPageCopy'

export default function WeddingContactSection() {
  const { t } = useWeddingLocale()
  const { spamMeta, spamFields, resetSpamProtection } = useFormSpamProtection()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const update =
    (field: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.name.trim()) {
      setError(t(weddingContactCopy.errors.name))
      return
    }
    if (!form.email.trim()) {
      setError(t(weddingContactCopy.errors.email))
      return
    }
    if (!form.message.trim()) {
      setError(t(weddingContactCopy.errors.message))
      return
    }

    const serviceLabel = form.service
      ? weddingContactCopy.serviceOptions.find((o) => o.value === form.service)
      : null
    const serviceText = serviceLabel ? t(serviceLabel.label) : 'General enquiry'

    setSubmitting(true)
    try {
      await sendContactInquiry({
        source: 'Wedding Sky — Contact',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        service: serviceText,
        message: form.message.trim(),
        website: spamMeta.website,
        formStartedAt: spamMeta.formStartedAt,
      })
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
      resetSpamProtection()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : t(weddingContactCopy.errors.generic),
      )
    } finally {
      setSubmitting(false)
    }
  }

  const copy = weddingContactCopy

  return (
    <section
      id="wedding-contact"
      className="wedding-section wedding-visit wedding-contact"
      aria-labelledby="wedding-contact-heading"
    >
      <div className="container wedding-visit__inner wedding-contact__inner">
        <header className="wedding-section__head wedding-visit__head wedding-contact__head reveal">
          <p className="wedding-contact__eyebrow">{t(copy.eyebrow)}</p>
          <h2 id="wedding-contact-heading" className="wedding-section__title wedding-contact__title">
            {t(copy.title)}
          </h2>
          <span className="wedding-contact__rule" aria-hidden />
          <p className="wedding-section__intro wedding-visit__intro wedding-contact__intro">
            {t(copy.intro)}
          </p>
        </header>

        <div className="wedding-contact__layout">
          <div className="wedding-contact__panel reveal reveal-delay-1">
            {submitted ? (
              <div className="wedding-contact__success">
                <div className="wedding-contact__success-icon" aria-hidden>
                  <Check size={28} strokeWidth={2.5} />
                </div>
                <h3>{t(copy.successTitle)}</h3>
                <p>{t(copy.successBody)}</p>
                <button
                  type="button"
                  className="wedding-contact__submit"
                  onClick={() => setSubmitted(false)}
                >
                  <span>{t(copy.sendAnother)}</span>
                </button>
              </div>
            ) : (
              <form className="wedding-contact__form" onSubmit={handleSubmit} noValidate>
                {spamFields}
                <div className="wedding-contact__fields">
                  <div className="wedding-contact__field">
                    <label htmlFor="ws-contact-name">
                      {t(copy.fields.name)} <span aria-hidden>*</span>
                    </label>
                    <input
                      id="ws-contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder={t(copy.placeholders.name)}
                    />
                  </div>
                  <div className="wedding-contact__field">
                    <label htmlFor="ws-contact-email">
                      {t(copy.fields.email)} <span aria-hidden>*</span>
                    </label>
                    <input
                      id="ws-contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder={t(copy.placeholders.email)}
                    />
                  </div>
                  <div className="wedding-contact__field">
                    <label htmlFor="ws-contact-phone">
                      {t(copy.fields.phone)}{' '}
                      <span className="wedding-contact__optional">({t(copy.optional)})</span>
                    </label>
                    <input
                      id="ws-contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      placeholder={t(copy.placeholders.phone)}
                    />
                  </div>
                  <div className="wedding-contact__field">
                    <label htmlFor="ws-contact-service">
                      {t(copy.fields.service)}{' '}
                      <span className="wedding-contact__optional">({t(copy.optional)})</span>
                    </label>
                    <select
                      id="ws-contact-service"
                      name="service"
                      value={form.service}
                      onChange={update('service')}
                    >
                      <option value="">{t(copy.selectPlaceholder)}</option>
                      {copy.serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {t(opt.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="wedding-contact__field wedding-contact__field--full">
                    <label htmlFor="ws-contact-message">
                      {t(copy.fields.message)} <span aria-hidden>*</span>
                    </label>
                    <textarea
                      id="ws-contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={update('message')}
                      placeholder={t(copy.placeholders.message)}
                    />
                  </div>
                </div>

                {error ? (
                  <p className="wedding-contact__error" role="alert">
                    {error}
                  </p>
                ) : null}

                <button type="submit" className="wedding-contact__submit" disabled={submitting}>
                  <span>{submitting ? t(copy.submitting) : t(copy.submit)}</span>
                </button>
                <p className="wedding-contact__note">{t(copy.note)}</p>
              </form>
            )}
          </div>

          <aside className="wedding-contact__aside">
            <div
              className="wedding-visit__card reveal reveal-delay-2"
              style={{ ['--visit-i' as string]: '0' }}
            >
              <div className="wedding-visit__card-top">
                <span className="wedding-visit__icon" aria-hidden>
                  <MapPin size={20} strokeWidth={1.75} />
                </span>
                <h3 className="wedding-visit__label">{t(weddingVisitCopy.addressLabel)}</h3>
              </div>
              <address className="wedding-visit__address">
                {weddingVisitCopy.addressLines.map((line, index) => (
                  <span key={line.en}>
                    {t(line)}
                    {index < weddingVisitCopy.addressLines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </address>
            </div>
            <div
              className="wedding-visit__card reveal reveal-delay-3"
              style={{ ['--visit-i' as string]: '1' }}
            >
              <div className="wedding-visit__card-top">
                <span className="wedding-visit__icon" aria-hidden>
                  <Mail size={20} strokeWidth={1.75} />
                </span>
                <h3 className="wedding-visit__label">{t(weddingVisitCopy.emailLabel)}</h3>
              </div>
              <ul className="wedding-visit__list">
                <li>
                  <a href="mailto:info@weddingskycy.com">info@weddingskycy.com</a>
                </li>
                <li>
                  <a href="mailto:weddingskycy@gmail.com">weddingskycy@gmail.com</a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="wedding-visit__map-wrap reveal reveal-delay-4">
          <iframe
            title={t(weddingVisitCopy.mapTitle)}
            className="wedding-visit__map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Iris+House+John+Kennedy+Limassol+Cyprus&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
