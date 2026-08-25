import { useEffect, useState } from 'react'
import { ChevronRight, Phone } from 'lucide-react'
import { socialLinks } from '../data/socialLinks'
import { weddingIntroCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

const INTRO_SLIDES = [
  '/images/services/wedding-highlights/thumbnail/1.webp',
  '/images/services/wedding-highlights/thumbnail/2.webp',
  '/images/services/wedding-highlights/thumbnail/3.webp',
  '/images/services/wedding-highlights/thumbnail/4.webp',
  '/images/services/wedding-highlights/thumbnail/5.webp',
  '/images/services/wedding-highlights/thumbnail/6.webp',
] as const

const SLIDE_INTERVAL_MS = 3000

const WEDDING_SKY_PHONES = [
  {
    id: 'office-1',
    label: 'officeLabel' as const,
    local: '24 333 305',
    digits: '24333305',
  },
  {
    id: 'office-2',
    label: 'officeLabel' as const,
    local: '24 333 306',
    digits: '24333306',
  },
  {
    id: 'mobile',
    label: 'mobileLabel' as const,
    local: '96 000 336',
    digits: '96000336',
  },
]

/** Wedding Sky channels — real destinations + brand icons from shared socialLinks */
const WEDDING_SKY_SOCIAL_HREFS: Record<string, string> = {
  WhatsApp: 'https://wa.me/35796000336',
  Viber: 'viber://chat?number=%2B35796000336',
  Instagram: 'https://www.instagram.com/weddingskycy/',
  Facebook: 'https://www.facebook.com/weddingsky',
  TikTok: 'https://www.tiktok.com/@weddingskycy',
}

const WEDDING_SKY_SOCIALS = socialLinks
  .filter((s) => s.label in WEDDING_SKY_SOCIAL_HREFS)
  .slice(0, 5)
  .map((s, index) => ({
    ...s,
    href: WEDDING_SKY_SOCIAL_HREFS[s.label] ?? s.href,
    index,
  }))

export default function WeddingIntroSocial() {
  const { t, htmlLang } = useWeddingLocale()
  const [revealedId, setRevealedId] = useState<string | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % INTRO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section
      className="wedding-intro-social"
      aria-labelledby="wedding-intro-heading"
      lang={htmlLang}
    >
      <div className="wedding-intro-social__ambient" aria-hidden />
      <div className="container wedding-intro-social__shell">
        <div className="wedding-intro-social__layout">
          <figure
            className="wedding-intro-social__media reveal-scale"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false)
              }
            }}
          >
            <div className="wedding-intro-social__media-shell" aria-hidden />
            <div className="wedding-intro-social__media-frame">
              <div
                className="wedding-intro-social__slides"
                aria-roledescription="carousel"
                aria-label={t(weddingIntroCopy.imageAlt)}
              >
                {INTRO_SLIDES.map((src, index) => {
                  const isActive = index === activeSlide
                  return (
                    <img
                      key={src}
                      src={src}
                      alt={isActive ? t(weddingIntroCopy.imageAlt) : ''}
                      className={`wedding-intro-social__slide${
                        isActive ? ' is-active' : ''
                      }`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                      aria-hidden={!isActive}
                    />
                  )
                })}
              </div>
              <div className="wedding-intro-social__media-scrim" aria-hidden />
              <div className="wedding-intro-social__slide-progress" aria-hidden>
                {INTRO_SLIDES.map((src, index) => (
                  <span
                    key={src}
                    className={`wedding-intro-social__slide-dot${
                      index === activeSlide ? ' is-active' : ''
                    }${paused && index === activeSlide ? ' is-paused' : ''}`}
                  />
                ))}
              </div>
            </div>
            <figcaption className="wedding-intro-social__media-caption reveal reveal-delay-4">
              <div className="wedding-intro-social__media-caption-inner">
                <span className="wedding-intro-social__media-caption-mark" aria-hidden />
                <div className="wedding-intro-social__media-caption-copy">
                  <span className="wedding-intro-social__media-caption-brand">Wedding Sky</span>
                  <strong className="wedding-intro-social__media-caption-tagline">
                    {t(weddingIntroCopy.captionStrong)}
                  </strong>
                </div>
              </div>
            </figcaption>
          </figure>

          <div className="wedding-intro-social__copy">
            <header className="wedding-intro-social__header reveal reveal-delay-1">
              <p className="wedding-intro-social__eyebrow">{t(weddingIntroCopy.eyebrow)}</p>
              <h2 id="wedding-intro-heading" className="wedding-intro-social__title">
                {t(weddingIntroCopy.title)}
              </h2>
              <span className="wedding-intro-social__rule" aria-hidden />
            </header>

            <p className="wedding-intro-social__lead reveal reveal-delay-2">
              {t(weddingIntroCopy.lead)}
            </p>
            <p className="wedding-intro-social__lead wedding-intro-social__lead--secondary reveal reveal-delay-3">
              {t(weddingIntroCopy.leadSecondary)}
            </p>

            <div
              className="wedding-intro-social__contact reveal reveal-delay-4"
              aria-label={t(weddingIntroCopy.contactAria)}
            >
              <div className="wedding-intro-social__contact-head">
                <span className="wedding-intro-social__contact-kicker">
                  {t(weddingIntroCopy.speakAtelier)}
                </span>
                <span className="wedding-intro-social__contact-code">
                  {t(weddingIntroCopy.cyprusLabel)}
                </span>
              </div>

              <ul className="wedding-intro-social__phone-list">
                {WEDDING_SKY_PHONES.map((phone, index) => {
                  const revealed = revealedId === phone.id
                  const label = t(weddingIntroCopy[phone.label])

                  return (
                    <li key={phone.id}>
                      {revealed ? (
                        <a
                          href={`tel:+357${phone.digits}`}
                          className="wedding-intro-social__phone wedding-intro-social__phone--revealed"
                          style={{ ['--phone-i' as string]: String(index) }}
                        >
                          <span className="wedding-intro-social__phone-icon" aria-hidden>
                            <Phone size={15} strokeWidth={2.25} />
                          </span>
                          <span className="wedding-intro-social__phone-meta">
                            <span className="wedding-intro-social__phone-label">{label}</span>
                            <span className="wedding-intro-social__phone-number">
                              <span className="wedding-intro-social__phone-cc">+357</span>
                              <span className="wedding-intro-social__phone-local">
                                {phone.local}
                              </span>
                            </span>
                          </span>
                          <span className="wedding-intro-social__phone-action">
                            {t(weddingIntroCopy.call)}
                          </span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          className="wedding-intro-social__phone wedding-intro-social__phone--masked"
                          style={{ ['--phone-i' as string]: String(index) }}
                          onClick={() => setRevealedId(phone.id)}
                          aria-expanded={false}
                          aria-label={`${label} — ${t(weddingIntroCopy.revealNumber)}`}
                        >
                          <span className="wedding-intro-social__phone-icon" aria-hidden>
                            <Phone size={15} strokeWidth={2.25} />
                          </span>
                          <span className="wedding-intro-social__phone-meta">
                            <span className="wedding-intro-social__phone-label">{label}</span>
                            <span className="wedding-intro-social__phone-hint">
                              {t(weddingIntroCopy.revealNumber)}
                            </span>
                          </span>
                          <span
                            className="wedding-intro-social__phone-action wedding-intro-social__phone-action--reveal"
                            aria-hidden
                          >
                            <ChevronRight size={16} strokeWidth={2.4} />
                          </span>
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="wedding-intro-social__connect reveal reveal-delay-5">
              <span className="wedding-intro-social__connect-label">
                {t(weddingIntroCopy.follow)}
              </span>
              <nav
                className="wedding-intro-social__nav"
                aria-label={t(weddingIntroCopy.socialAria)}
              >
                {WEDDING_SKY_SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className={`wedding-intro-social__pill wedding-intro-social__pill--${s.navClass}`}
                    style={{ ['--pill-i' as string]: String(s.index) }}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <span className="wedding-intro-social__pill-glow" aria-hidden />
                    <span className="wedding-intro-social__pill-icon" aria-hidden>
                      {s.svg}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
