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
import { weddingConciergeCopy } from '../data/weddingConciergeCopy'

export default function WeddingConciergePage() {
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'
  const homeHref = weddingBrandHref('/services/wedding')
  const copy = weddingConciergeCopy

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="page wedding-page wedding-concierge-page" ref={pageRef} lang={htmlLang}>
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
        className="wedding-concierge-hero wedding-concierge-hero--photo"
        aria-labelledby="wedding-concierge-heading"
      >
        <div className="wedding-concierge-hero__backdrop" aria-hidden>
          <img
            className="wedding-concierge-hero__photo"
            src="/images/services/wedding-highlights/wedding-services/confetti-machine-hero.webp"
            alt=""
            width={1536}
            height={1024}
            decoding="async"
            fetchPriority="high"
          />
          <span className="wedding-concierge-hero__scrim" />
          <span className="wedding-concierge-hero__orb wedding-concierge-hero__orb--gold" />
          <span className="wedding-concierge-hero__orb wedding-concierge-hero__orb--blue" />
          <span className="wedding-concierge-hero__mesh" />
          <span className="wedding-concierge-hero__grain" />
        </div>
        <div className="container wedding-concierge-hero__content">
          <Link to={homeHref} className="wedding-concierge-hero__back">
            <span aria-hidden>←</span>
            <span>{t(copy.backToAtelier)}</span>
          </Link>
          <p className="wedding-concierge-hero__eyebrow">{t(copy.eyebrow)}</p>
          <h1 id="wedding-concierge-heading" className="wedding-concierge-hero__title">
            {t(copy.pageTitle)}
          </h1>
          <p className="wedding-concierge-hero__lead">{t(copy.lead)}</p>
          <span className="wedding-concierge-hero__rule" aria-hidden />
          <div className="wedding-concierge-hero__intro">
            {copy.intro.map((paragraph) => (
              <p key={paragraph.en} className="wedding-concierge-hero__intro-p">
                {t(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wedding-concierge-faq"
        aria-labelledby="wedding-concierge-faq-title"
      >
        <div className="container wedding-concierge-faq__shell">
          <header className="wedding-concierge-faq__header reveal">
            <p className="wedding-concierge-faq__eyebrow">{t(copy.faqEyebrow)}</p>
            <h2 id="wedding-concierge-faq-title" className="wedding-concierge-faq__title">
              {t(copy.faqTitle)}
            </h2>
            <span className="wedding-concierge-faq__rule" aria-hidden />
            <p className="wedding-concierge-faq__count">
              <span className="wedding-concierge-faq__count-num">{copy.questions.length}</span>
              <span className="wedding-concierge-faq__count-label">{t(copy.questionsLabel)}</span>
            </p>
          </header>

          <div className="wedding-concierge-faq__panel reveal">
            <div className="wedding-concierge-faq__list">
              {copy.questions.map((question, index) => {
                const isOpen = openIndex === index
                const isAccent = index % 2 === 0
                return (
                  <div
                    key={question.id}
                    className={[
                      'wedding-concierge-faq__item',
                      isAccent ? 'wedding-concierge-faq__item--accent' : 'wedding-concierge-faq__item--plain',
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
                      id={`wedding-concierge-q-${question.id}`}
                      aria-controls={`wedding-concierge-a-${question.id}`}
                    >
                      <span className="wedding-concierge-faq__q-index" aria-hidden>
                        {question.id}
                      </span>
                      <span className="wedding-concierge-faq__q-text">{t(question.title)}</span>
                      <span className="wedding-concierge-faq__chevron" aria-hidden>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      id={`wedding-concierge-a-${question.id}`}
                      role="region"
                      aria-labelledby={`wedding-concierge-q-${question.id}`}
                      hidden={!isOpen}
                      className="wedding-concierge-faq__answer"
                    >
                      {isOpen ? (
                        <div className="wedding-concierge-faq__answer-inner">
                          {question.paragraphs.map((paragraph) => (
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
        </div>
      </section>

      <section className="wedding-concierge-close" aria-labelledby="wedding-concierge-close-title">
        <div className="container wedding-concierge-close__inner">
          <p className="wedding-concierge-close__eyebrow">{t(copy.closingEyebrow)}</p>
          <h2 id="wedding-concierge-close-title" className="wedding-concierge-close__lead">
            {t(copy.closingLead)}
          </h2>
          <p className="wedding-concierge-close__body">{t(copy.closingBody)}</p>

          <div className="wedding-concierge-close__brand">
            <p className="wedding-concierge-close__brand-name">{t(copy.brandName)}</p>
            <p className="wedding-concierge-close__brand-tagline">{t(copy.brandTagline)}</p>
            <p className="wedding-concierge-close__brand-cta">{t(copy.brandCtaLine)}</p>
          </div>

          <button
            type="button"
            className="wedding-concierge-close__button"
            onClick={() => openWeddingSkyBooking()}
          >
            <span className="wedding-concierge-close__button-sheen" aria-hidden />
            <span>{t(copy.bookCta)}</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
