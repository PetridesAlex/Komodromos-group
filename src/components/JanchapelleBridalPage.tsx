import { useEffect, useState, type CSSProperties } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import AppointmentModal from './AppointmentModal'
import JanchapelleBridalNav from './JanchapelleBridalNav'
import JanchapelleHeroVideo from './JanchapelleHeroVideo'
import JanchapelleSocialProof from './JanchapelleSocialProof'
import AnimatedCounter from './AnimatedCounter'
import { useReveal } from '../hooks/useReveal'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { janchapelleBrandHref, isAbsoluteHttpHref, weddingSkyHref } from '../lib/brandPaths'
import { useSiteContext } from '../seo/SiteContext'
import {
  JANCHAPELLE_CONTACT_STATE,
  JANCHAPELLE_DONT_MISS,
  JANCHAPELLE_EVENTS,
  JANCHAPELLE_EXPERIENCE,
  JANCHAPELLE_FEATURED,
  JANCHAPELLE_HERO,
  JANCHAPELLE_HOUSES,
  JANCHAPELLE_MID_CTA,
  JANCHAPELLE_NEWSLETTER,
  JANCHAPELLE_ATELIER_STATS,
  JANCHAPELLE_PHILOSOPHY,
  type JanchapelleDressCard,
} from '../data/janchapellePage'
import { sendContactInquiry } from '../lib/sendContactInquiry'
import { isValidContactEmail } from '../lib/contactFormValidation'

function AnimatedHeading({
  id,
  as: Tag = 'h2',
  text,
  className = '',
}: {
  id?: string
  as?: 'h1' | 'h2'
  text: string
  className?: string
}) {
  const words = text.trim().split(/\s+/)
  return (
    <Tag id={id} className={`jc-heading ${className}`.trim()}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="jc-heading__word"
          style={{ '--i': index } as CSSProperties}
        >
          <span className="jc-heading__inner">{word}</span>
        </span>
      ))}
    </Tag>
  )
}

function JcSectionHeader({
  id,
  eyebrow,
  title,
  lead,
  tone = 'ink',
}: {
  id: string
  eyebrow: string
  title: string
  lead?: string
  tone?: 'ink' | 'light'
}) {
  return (
    <header className={`jc-head reveal${tone === 'light' ? ' jc-head--light' : ''}`}>
      <p className="jc-head__eyebrow">{eyebrow}</p>
      <AnimatedHeading id={id} text={title} className="jc-head__title" />
      <span className="jc-ornament" aria-hidden />
      {lead ? <p className="jc-head__lead">{lead}</p> : null}
    </header>
  )
}

function splitCollectionName(name: string): { primary: string; accent: string } {
  const words = name.trim().split(/\s+/)
  if (words.length <= 1) {
    return { primary: name, accent: '' }
  }
  const accent = words.pop() ?? ''
  return { primary: words.join(' '), accent }
}

function splitCategoryWordmark(name: string): { primary: string; accent: string } {
  const trimmed = name.trim()
  const match = trimmed.match(/^Wedding\s+(.+)$/i)
  if (match) {
    return { primary: 'Wedding', accent: match[1] }
  }
  return splitCollectionName(trimmed)
}

function DressCard({
  dress,
  index,
  featured = false,
}: {
  dress: JanchapelleDressCard
  index: number
  featured?: boolean
}) {
  const delayClass = featured
    ? `reveal-delay-${Math.min(index, 3)}`
    : `reveal-delay-${Math.min(index % 3, 2)}`

  const weddingHref = !featured && dress.href ? weddingSkyHref(dress.href) : null
  const linkTo = featured
    ? janchapelleBrandHref(`/services/janchapelle/collections/${dress.id}`)
    : weddingHref ?? '/contact'
  const isExternal = Boolean(weddingHref && isAbsoluteHttpHref(weddingHref))
  const quickLabel = featured ? 'Explore' : weddingHref ? 'Explore' : 'Enquire'

  const media = (
    <>
      <span className="jc-dress__media">
        <img
          src={dress.image}
          alt={dress.alt}
          className="jc-dress__img"
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
          width={720}
          height={960}
          sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 280px"
        />
        <span className="jc-dress__veil" aria-hidden />
        <span className="jc-dress__quick">{quickLabel}</span>
      </span>
      <span
        className={`jc-dress__meta${
          dress.categoryWordmark
            ? ' jc-dress__meta--brand'
            : featured
              ? ' jc-dress__meta--collection'
              : ''
        }`}
      >
        {dress.categoryWordmark ? (
          (() => {
            const { primary, accent } = splitCategoryWordmark(dress.name)
            return (
              <>
                {dress.house ? <span className="jc-dress__house">{dress.house}</span> : null}
                <span className="jc-dress__wordmark" aria-label={dress.name}>
                  <span className="jc-dress__wordmark-primary">{primary}</span>
                  {accent ? (
                    <span className="jc-dress__wordmark-accent">{accent}</span>
                  ) : null}
                </span>
                <span className="jc-dress__wordmark-rule" aria-hidden />
              </>
            )
          })()
        ) : featured ? (
          (() => {
            const { primary, accent } = splitCollectionName(dress.name)
            return (
              <>
                {dress.house ? <span className="jc-dress__house">{dress.house}</span> : null}
                <span className="jc-dress__wordmark" aria-label={dress.name}>
                  <span className="jc-dress__wordmark-primary">{primary}</span>
                  {accent ? (
                    <span className="jc-dress__wordmark-accent">{accent}</span>
                  ) : null}
                </span>
                <span className="jc-dress__wordmark-rule" aria-hidden />
              </>
            )
          })()
        ) : (
          <>
            {dress.house ? <span className="jc-dress__house">{dress.house}</span> : null}
            <span className="jc-dress__name">{dress.name}</span>
          </>
        )}
      </span>
    </>
  )

  return (
    <li
      className={`jc-dress${featured ? ' jc-dress--featured' : ''} reveal ${delayClass}`}
    >
      {isExternal ? (
        <a
          href={linkTo}
          className="jc-dress__link"
          rel="noopener noreferrer"
        >
          {media}
        </a>
      ) : (
        <Link
          to={linkTo}
          state={
            featured || weddingHref
              ? undefined
              : { ...JANCHAPELLE_CONTACT_STATE, gownInterest: dress.name }
          }
          className="jc-dress__link"
        >
          {media}
        </Link>
      )}
    </li>
  )
}

export default function JanchapelleBridalPage() {
  const location = useLocation()
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const [appointmentOpen, setAppointmentOpen] = useState(false)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterConsent, setNewsletterConsent] = useState(false)
  const [newsletterBusy, setNewsletterBusy] = useState(false)
  const [newsletterDone, setNewsletterDone] = useState(false)
  const [newsletterError, setNewsletterError] = useState<string | null>(null)
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  async function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault()
    setNewsletterError(null)

    const email = newsletterEmail.trim()
    if (!email || !isValidContactEmail(email)) {
      setNewsletterError('Please enter a valid email address.')
      return
    }
    if (!newsletterConsent) {
      setNewsletterError('Please accept the terms and conditions to continue.')
      return
    }

    setNewsletterBusy(true)
    try {
      await sendContactInquiry({
        source: 'Janchapelle — Newsletter',
        name: 'Newsletter subscriber',
        email,
        service: JANCHAPELLE_CONTACT_STATE.serviceInterest,
        message: [
          'Newsletter subscription request from the Janchapelle bridal page.',
          '',
          'Terms & conditions accepted: Yes',
        ].join('\n'),
        detailsTitle: 'Newsletter',
        details: [
          { label: 'Email', value: email },
          { label: 'Consent', value: 'Accepted terms and conditions' },
        ],
      })
      setNewsletterDone(true)
      setNewsletterEmail('')
      setNewsletterConsent(false)
    } catch (err) {
      setNewsletterError(
        err instanceof Error
          ? err.message
          : 'Could not complete your subscription. Please try again shortly.',
      )
    } finally {
      setNewsletterBusy(false)
    }
  }

  return (
    <div className="page jc-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <JanchapelleBridalNav onBookAppointment={() => setAppointmentOpen(true)} />

      <section className="jc-hero" aria-labelledby="jc-hero-heading">
        <JanchapelleHeroVideo />
        <div className="jc-hero__scrim" aria-hidden />
        <div className="jc-hero__inner">
          <p className="jc-hero__brand">
            <span className="jc-hero__brand-name">{JANCHAPELLE_HERO.brand}</span>
            <span className="jc-hero__brand-line">{JANCHAPELLE_HERO.brandLine}</span>
          </p>
          <AnimatedHeading
            id="jc-hero-heading"
            as="h1"
            text={JANCHAPELLE_HERO.title}
            className="jc-hero__title"
          />
          <p className="jc-hero__lead">{JANCHAPELLE_HERO.lead}</p>
          <div className="jc-hero__actions">
            <button
              type="button"
              className="jc-btn jc-btn--solid"
              onClick={() => setAppointmentOpen(true)}
            >
              {JANCHAPELLE_HERO.primaryCta}
            </button>
            <a href="#jc-featured" className="jc-btn jc-btn--ghost">
              {JANCHAPELLE_HERO.secondaryCta}
            </a>
          </div>
        </div>
        <a href="#jc-events" className="jc-hero__scroll" aria-label="Scroll for more">
          <span aria-hidden>↓</span>
        </a>
      </section>

      <section id="jc-events" className="jc-events" aria-labelledby="jc-events-heading">
        <div
          className="jc-events__bg"
          style={{ backgroundImage: `url("${JANCHAPELLE_EVENTS.image}")` }}
          aria-hidden
        />
        <div className="jc-events__scrim" aria-hidden />
        <div className="jc-events__inner">
          <JcSectionHeader
            id="jc-events-heading"
            eyebrow={JANCHAPELLE_EVENTS.eyebrow}
            title={JANCHAPELLE_EVENTS.title}
            lead={JANCHAPELLE_EVENTS.lead}
            tone="light"
          />
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="jc-btn jc-btn--solid jc-btn--compact reveal"
          >
            {JANCHAPELLE_EVENTS.cta}
          </button>
        </div>
      </section>

      <section
        id="jc-featured"
        className="jc-section jc-section--light"
        aria-labelledby="jc-featured-heading"
      >
        <JcSectionHeader
          id="jc-featured-heading"
          eyebrow="Curated collections"
          title="Bride Categories"
        />
        <ul className="jc-dress-grid jc-dress-grid--four">
          {JANCHAPELLE_FEATURED.map((dress, index) => (
            <DressCard key={dress.id} dress={dress} index={index} featured />
          ))}
        </ul>
      </section>

      <section className="jc-houses" id="jc-houses" aria-label="Signature collections">
        {JANCHAPELLE_HOUSES.map((house, index) => (
          <article
            key={house.id}
            className={`jc-house reveal${index % 2 === 1 ? ' jc-house--flip' : ''}`}
          >
            <Link
              to={janchapelleBrandHref(`/services/janchapelle/houses/${house.id}`)}
              className="jc-house__media-wrap"
              aria-label={`View ${house.name}`}
            >
              <div
                className="jc-house__media"
                style={{ backgroundImage: `url("${house.image}")` }}
                role="img"
                aria-label={house.alt}
              />
              <span className="jc-house__media-veil" aria-hidden />
              <span className="jc-house__index" aria-hidden>
                {house.index}
              </span>
            </Link>
            <div className="jc-house__body">
              <p className="jc-house__eyebrow">{house.eyebrow}</p>
              <h3 className="jc-house__name">{house.name}</h3>
              <span className="jc-house__rule" aria-hidden />
              <p className="jc-house__lead">{house.lead}</p>
              <ul className="jc-house__features">
                {house.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link
                to={janchapelleBrandHref(`/services/janchapelle/houses/${house.id}`)}
                className="jc-house__cta"
              >
                <span>{house.cta}</span>
                <span className="jc-house__cta-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section
        id="jc-philosophy"
        className="jc-philosophy"
        aria-labelledby="jc-philosophy-heading"
      >
        <div className="jc-philosophy__glow" aria-hidden />
        <div className="jc-philosophy__inner">
          <header className="jc-philosophy__head reveal">
            <p className="jc-philosophy__eyebrow">{JANCHAPELLE_PHILOSOPHY.eyebrow}</p>
            <h2 id="jc-philosophy-heading" className="jc-philosophy__title">
              <span className="jc-philosophy__title-primary">
                {JANCHAPELLE_PHILOSOPHY.titlePrimary}
              </span>
              <span className="jc-philosophy__title-accent">
                {JANCHAPELLE_PHILOSOPHY.titleAccent}
              </span>
            </h2>
            <span className="jc-philosophy__rule" aria-hidden />
            <p className="jc-philosophy__lead">{JANCHAPELLE_PHILOSOPHY.lead}</p>
          </header>

          <div className="jc-philosophy__grid">
            <ul className="jc-philosophy__limits reveal reveal-delay-1">
              {JANCHAPELLE_PHILOSOPHY.limitations.map((line) => (
                <li key={line} className="jc-philosophy__limit">
                  <span className="jc-philosophy__mark" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="jc-philosophy__actions reveal reveal-delay-2">
              <ul className="jc-philosophy__verbs">
                {JANCHAPELLE_PHILOSOPHY.actions.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="jc-philosophy__closing">{JANCHAPELLE_PHILOSOPHY.closing}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="jc-atelier-stats"
        className="jc-atelier-stats"
        aria-labelledby="jc-atelier-stats-heading"
      >
        <div className="jc-atelier-stats__inner">
          <header className="jc-atelier-stats__head reveal">
            <p className="jc-atelier-stats__eyebrow">{JANCHAPELLE_ATELIER_STATS.eyebrow}</p>
            <h2 id="jc-atelier-stats-heading" className="jc-atelier-stats__title">
              <span className="jc-atelier-stats__title-primary">
                {JANCHAPELLE_ATELIER_STATS.titlePrimary}
              </span>
              <span className="jc-atelier-stats__title-accent">
                {JANCHAPELLE_ATELIER_STATS.titleAccent}
              </span>
            </h2>
            <span className="jc-atelier-stats__rule" aria-hidden />
          </header>

          <ul className="jc-atelier-stats__grid">
            {JANCHAPELLE_ATELIER_STATS.items.map((item, index) => (
              <li
                key={item.label}
                className={`jc-atelier-stats__item reveal reveal-delay-${Math.min(index, 3)}`}
              >
                {'count' in item && item.count != null ? (
                  <>
                    <AnimatedCounter
                      value={item.count}
                      suffix={item.suffix}
                      formatThousands
                      duration={2200}
                      delayMs={index * 140}
                      className="jc-atelier-stats__value"
                    />
                    <span className="jc-atelier-stats__label">{item.label}</span>
                  </>
                ) : (
                  <span className="jc-atelier-stats__label jc-atelier-stats__label--solo">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="jc-dont-miss"
        className="jc-section jc-section--light"
        aria-labelledby="jc-dont-miss-heading"
      >
        <JcSectionHeader
          id="jc-dont-miss-heading"
          eyebrow="Selected now"
          title="Don’t miss these"
        />
        <ul className="jc-dress-grid jc-dress-grid--five">
          {JANCHAPELLE_DONT_MISS.map((dress, index) => (
            <DressCard key={dress.id} dress={dress} index={index} />
          ))}
        </ul>
      </section>

      <section className="jc-mid-cta" aria-labelledby="jc-mid-cta-heading">
        <div
          className="jc-mid-cta__bg"
          style={{ backgroundImage: `url("${JANCHAPELLE_MID_CTA.image}")` }}
          aria-hidden
        />
        <div className="jc-mid-cta__scrim" aria-hidden />
        <div className="jc-mid-cta__inner">
          <JcSectionHeader
            id="jc-mid-cta-heading"
            eyebrow="Private fitting"
            title={JANCHAPELLE_MID_CTA.title}
            lead={JANCHAPELLE_MID_CTA.lead}
            tone="light"
          />
          <button
            type="button"
            onClick={() => setAppointmentOpen(true)}
            className="jc-btn jc-btn--solid reveal"
          >
            {JANCHAPELLE_MID_CTA.cta}
          </button>
        </div>
      </section>

      <section
        className="jc-section jc-experience-section"
        aria-labelledby="jc-experience-heading"
      >
        <div className="jc-experience-section__glow" aria-hidden />
        <div className="jc-experience-section__inner">
          <JcSectionHeader
            id="jc-experience-heading"
            eyebrow={JANCHAPELLE_EXPERIENCE.eyebrow}
            title={JANCHAPELLE_EXPERIENCE.title}
            lead={JANCHAPELLE_EXPERIENCE.lead}
          />

          <ol className="jc-experience-grid">
            {JANCHAPELLE_EXPERIENCE.items.map((item, index) => (
              <li
                key={item.title}
                className={`jc-experience reveal reveal-delay-${index}`}
              >
                <span className="jc-experience__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="jc-experience__copy">
                  <h3 className="jc-experience__title">{item.title}</h3>
                  <p className="jc-experience__desc">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside className="jc-assurances reveal" aria-label={JANCHAPELLE_EXPERIENCE.notesEyebrow}>
            <header className="jc-assurances__head">
              <p className="jc-assurances__eyebrow">{JANCHAPELLE_EXPERIENCE.notesEyebrow}</p>
              <span className="jc-assurances__rule" aria-hidden />
            </header>
            <ul className="jc-assurances__list">
              {JANCHAPELLE_EXPERIENCE.notes.map((note, index) => (
                <li
                  key={note}
                  className={`jc-assurances__item reveal reveal-delay-${Math.min(index + 1, 3)}`}
                >
                  <span className="jc-assurances__mark" aria-hidden />
                  <span className="jc-assurances__text">{note}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <JanchapelleSocialProof />

      <section
        id="jc-newsletter"
        className="jc-section jc-newsletter"
        aria-labelledby="jc-newsletter-heading"
      >
        <div className="jc-newsletter__glow" aria-hidden />
        <div className="jc-newsletter__inner reveal">
          <JcSectionHeader
            id="jc-newsletter-heading"
            eyebrow={JANCHAPELLE_NEWSLETTER.eyebrow}
            title={JANCHAPELLE_NEWSLETTER.title}
            lead={JANCHAPELLE_NEWSLETTER.lead}
          />

          {newsletterDone ? (
            <div className="jc-newsletter__success" role="status">
              <p className="jc-newsletter__success-title">You’re on the list</p>
              <p className="jc-newsletter__success-copy">
                Thank you — we’ll share atelier news and lookbook moments with care.
              </p>
            </div>
          ) : (
            <form className="jc-newsletter__form" onSubmit={handleNewsletterSubmit} noValidate>
              <div className="jc-newsletter__row">
                <label className="jc-newsletter__email">
                  <span className="visually-hidden">Email address</span>
                  <input
                    type="email"
                    name="newsletter-email"
                    autoComplete="email"
                    placeholder="Your email address"
                    value={newsletterEmail}
                    onChange={(ev) => setNewsletterEmail(ev.target.value)}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="jc-newsletter__submit"
                  disabled={newsletterBusy}
                >
                  {newsletterBusy ? 'Sending…' : 'Subscribe'}
                </button>
              </div>

              <label className="jc-newsletter__consent">
                <input
                  type="checkbox"
                  checked={newsletterConsent}
                  onChange={(ev) => setNewsletterConsent(ev.target.checked)}
                  required
                />
                <span>
                  I accept the{' '}
                  <Link to="/contact" state={{ ...JANCHAPELLE_CONTACT_STATE, topic: 'Terms' }}>
                    terms and conditions
                  </Link>{' '}
                  of the Janchapelle website and agree to receive atelier updates by email.
                </span>
              </label>

              {newsletterError ? (
                <p className="jc-newsletter__error" role="alert">
                  {newsletterError}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </section>

      <Footer />

      <AppointmentModal
        open={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        source="Janchapelle Appointment"
        service={JANCHAPELLE_CONTACT_STATE.serviceInterest}
        eyebrow="Bridal atelier"
        title="Book a private appointment"
        subtitle="Choose a date and time for your fitting — leave your details and our atelier will confirm shortly."
        splitName
        requireEmail
        variant="janchapelle"
      />
    </div>
  )
}
