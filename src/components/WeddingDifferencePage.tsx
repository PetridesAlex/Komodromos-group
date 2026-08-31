import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import { useReveal } from '../hooks/useReveal'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { openWeddingSkyBooking } from '../lib/weddingSkyBooking'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import { weddingDifferenceCopy } from '../data/weddingDifferenceCopy'

export default function WeddingDifferencePage() {
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const homeHref = weddingBrandHref('/services/wedding')
  const copy = weddingDifferenceCopy

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="page wedding-page wedding-difference-page" ref={pageRef} lang={htmlLang}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
      />
      <div className="wedding-language-switcher">
        <LanguageSwitcher dynamic />
      </div>

      <section
        className="wedding-difference-hero wedding-difference-hero--photo"
        aria-labelledby="wedding-difference-heading"
      >
        <div className="wedding-difference-hero__backdrop" aria-hidden>
          <img
            className="wedding-difference-hero__photo"
            src="/images/services/wedding-highlights/wedding-services/live-setup-cake-100cm-hero.webp"
            alt=""
            width={1254}
            height={1254}
            decoding="async"
            fetchPriority="high"
          />
          <span className="wedding-difference-hero__scrim" />
          <span className="wedding-difference-hero__orb wedding-difference-hero__orb--gold" />
          <span className="wedding-difference-hero__orb wedding-difference-hero__orb--blue" />
          <span className="wedding-difference-hero__mesh" />
          <span className="wedding-difference-hero__grain" />
        </div>
        <div className="container wedding-difference-hero__content">
          <Link to={homeHref} className="wedding-difference-hero__back">
            <span aria-hidden>←</span>
            <span>{t(copy.backToAtelier)}</span>
          </Link>
          <p className="wedding-difference-hero__eyebrow">{t(copy.eyebrow)}</p>
          <h1 id="wedding-difference-heading" className="wedding-difference-hero__title">
            {t(copy.pageTitle)}
          </h1>
          <p className="wedding-difference-hero__lead">{t(copy.lead)}</p>
          <span className="wedding-difference-hero__rule" aria-hidden />
          <div className="wedding-difference-hero__intro">
            {copy.intro.map((paragraph) => (
              <p key={paragraph.en} className="wedding-difference-hero__intro-p">
                {t(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wedding-concierge-faq wedding-difference-reasons"
        aria-labelledby="wedding-difference-reasons-title"
      >
        <div className="container wedding-concierge-faq__shell">
          <header className="wedding-concierge-faq__header reveal">
            <p className="wedding-concierge-faq__eyebrow">{t(copy.reasonsEyebrow)}</p>
            <h2 id="wedding-difference-reasons-title" className="wedding-concierge-faq__title">
              {t(copy.reasonsTitle)}
            </h2>
            <span className="wedding-concierge-faq__rule" aria-hidden />
            <p className="wedding-concierge-faq__count">
              <span className="wedding-concierge-faq__count-num">{copy.reasons.length}</span>
              <span className="wedding-concierge-faq__count-label">{t(copy.reasonsLabel)}</span>
            </p>
          </header>

          <div className="wedding-concierge-faq__panel reveal">
            <div className="wedding-concierge-faq__list">
              {copy.reasons.map((reason, index) => {
                const isOpen = openIndex === index
                const isAccent = index % 2 === 0
                return (
                  <div
                    key={reason.id}
                    className={[
                      'wedding-concierge-faq__item',
                      isAccent
                        ? 'wedding-concierge-faq__item--accent'
                        : 'wedding-concierge-faq__item--plain',
                      isOpen ? 'is-open' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <button
                      type="button"
                      className="wedding-concierge-faq__trigger"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      id={`wedding-difference-r-${reason.id}`}
                      aria-controls={`wedding-difference-a-${reason.id}`}
                    >
                      <span className="wedding-concierge-faq__q-index" aria-hidden>
                        {reason.id}
                      </span>
                      <span className="wedding-concierge-faq__q-text">{t(reason.title)}</span>
                      <span className="wedding-concierge-faq__chevron" aria-hidden>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`wedding-difference-a-${reason.id}`}
                      role="region"
                      aria-labelledby={`wedding-difference-r-${reason.id}`}
                      hidden={!isOpen}
                      className="wedding-concierge-faq__answer"
                    >
                      {isOpen ? (
                        <div className="wedding-concierge-faq__answer-inner">
                          {reason.paragraphs.map((paragraph) => (
                            <p key={paragraph.en}>{t(paragraph)}</p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <aside
            className="wedding-difference-logo-card wedding-difference-logo-card--after-faq reveal-scale"
            aria-label={t(copy.logoAlt)}
          >
            <span className="wedding-difference-logo-card__glow" aria-hidden />
            <span className="wedding-difference-logo-card__frame" aria-hidden />
            <img
              className="wedding-difference-logo-card__logo"
              src="/images/services/wedding-highlights/wedding-sky-logo.webp"
              alt={t(copy.logoAlt)}
              width={480}
              height={282}
              decoding="async"
              loading="lazy"
            />
            <p className="wedding-difference-logo-card__slogan">{t(copy.logoCardSlogan)}</p>
            <p className="wedding-difference-logo-card__tagline">{t(copy.logoCardTagline)}</p>
          </aside>
        </div>
      </section>

      <section className="wedding-difference-close" aria-labelledby="wedding-difference-close-title">
        <div className="container wedding-difference-close__inner">
          <p className="wedding-difference-close__eyebrow">{t(copy.closingEyebrow)}</p>
          <h2 id="wedding-difference-close-title" className="wedding-difference-close__lead">
            {t(copy.closingLead)}
          </h2>
          <p className="wedding-difference-close__body">{t(copy.closingBody)}</p>

          <div className="wedding-difference-close__brand">
            <p className="wedding-difference-close__brand-name">{t(copy.brandName)}</p>
            <p className="wedding-difference-close__brand-tagline">{t(copy.brandTagline)}</p>
            <p className="wedding-difference-close__brand-cta">{t(copy.brandCtaLine)}</p>
          </div>

          <button
            type="button"
            className="wedding-difference-close__button"
            onClick={() => openWeddingSkyBooking()}
          >
            <span className="wedding-difference-close__button-sheen" aria-hidden />
            <span>{t(copy.bookCta)}</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
