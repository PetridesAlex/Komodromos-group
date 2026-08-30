import { useEffect } from 'react'
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

      <section className="wedding-difference-hero" aria-labelledby="wedding-difference-heading">
        <div className="wedding-difference-hero__backdrop" aria-hidden>
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
        className="wedding-difference-reasons"
        aria-label={t(copy.pageTitle)}
      >
        <div className="wedding-difference-reasons__atmosphere" aria-hidden>
          <span className="wedding-difference-reasons__rail wedding-difference-reasons__rail--left" />
          <span className="wedding-difference-reasons__rail wedding-difference-reasons__rail--right" />
          <span className="wedding-difference-reasons__glow wedding-difference-reasons__glow--a" />
          <span className="wedding-difference-reasons__glow wedding-difference-reasons__glow--b" />
          <span className="wedding-difference-reasons__grain" />
        </div>

        <div className="container wedding-difference-reasons__shell">
          <header className="wedding-difference-reasons__header reveal">
            <p className="wedding-difference-reasons__kicker">
              <span className="wedding-difference-reasons__kicker-line" aria-hidden />
              <span>{t(copy.eyebrow)}</span>
              <span className="wedding-difference-reasons__kicker-line" aria-hidden />
            </p>
            <p className="wedding-difference-reasons__count">
              <span className="wedding-difference-reasons__count-num">{copy.reasons.length}</span>
              <span className="wedding-difference-reasons__count-label">{t(copy.reasonsLabel)}</span>
            </p>
          </header>

          <div className="wedding-difference-reasons__inner">
            {copy.reasons.map((reason, index) => {
              const delay = Math.min((index % 4) + 1, 4)
              const sideClass = index % 2 === 0 ? 'reveal-left' : 'reveal-right'
              return (
                <article
                  key={reason.id}
                  className={`wedding-difference-card wedding-difference-card--${reason.tone} ${sideClass} reveal-delay-${delay}${index === 0 ? ' wedding-difference-card--lead' : ''}`}
                  style={{ ['--diff-i' as string]: String(index) }}
                >
                  <span className="wedding-difference-card__watermark" aria-hidden>
                    {reason.id}
                  </span>
                  <span className="wedding-difference-card__sheen" aria-hidden />
                  <span className="wedding-difference-card__accent" aria-hidden />
                  <header className="wedding-difference-card__head">
                    <span className="wedding-difference-card__index" aria-hidden>
                      {reason.id}
                    </span>
                    <h2 className="wedding-difference-card__title">{t(reason.title)}</h2>
                  </header>
                  <div className="wedding-difference-card__body">
                    {reason.paragraphs.map((paragraph) => (
                      <p key={paragraph.en} className="wedding-difference-card__p">
                        {t(paragraph)}
                      </p>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
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
