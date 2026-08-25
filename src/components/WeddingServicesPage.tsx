import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import WeddingIntroSocial from './WeddingIntroSocial'
import WeddingHighlightTiles from './WeddingHighlightTiles'
import WeddingPackagesSection from './WeddingPackagesSection'
import WeddingAboutGallery from './WeddingAboutGallery'
import WeddingWhyCards from './WeddingWhyCards'
import WeddingSocialProof from './WeddingSocialProof'
import WeddingPlanEnquiryModal from './WeddingPlanEnquiryModal'
import WeddingContactSection from './WeddingContactSection'
import { useReveal } from '../hooks/useReveal'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { weddingBrandHref } from '../lib/brandPaths'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import {
  weddingAboutCopy,
  weddingHeroCopy,
  weddingKnowledgeCopy,
  weddingPillarsCopy,
  weddingTestimonialsCopy,
  weddingVideoCopy,
  weddingWhyCopy,
} from '../data/weddingPageCopy'

const WEDDING_HERO_IMAGE = '/images/services/companie-services-cover/wedding-sky.webp'

const WEDDING_SKY_LOGO =
  '/images/services/companie-services-cover/cards-logos-services/wedding-sky.png'

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Wedding+Sky+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLM0MDKyNLGwNDQwszA2NDE3t9zAyPiKUTg8NSUlMy9dITi7UiEotSwztbx4ESs2UQBgV4G0RwAAAA&rldimm=16902294891068314779&tbm=lcl&hl=en-CY#lkt=LocalPoiReviews'
const WEDDING_YOUTUBE_CHANNEL_URL =
  'https://www.youtube.com/@weddingskybykomodromosgrou3234'
const FACEBOOK_PAGE_URL = 'https://www.facebook.com/weddingsky'

const NAV_SCROLL_THRESHOLD_PX = 28

export default function WeddingServicesPage() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [planEnquiryOpen, setPlanEnquiryOpen] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const location = useLocation()
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const servicesSectionHref = isBrandDomain
    ? buildGroupSiteReturnUrl('services')
    : '/#services'

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash])

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > NAV_SCROLL_THRESHOLD_PX)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const hash = location.hash
    if (!hash || !hash.startsWith('#wedding-package-')) return
    const id = hash.slice(1)
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [location.hash])

  return (
    <div className="page wedding-page" ref={pageRef} lang={htmlLang}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref={servicesSectionHref}
        className={navScrolled ? 'topbar--scrolled' : undefined}
      />
      <div className="wedding-language-switcher">
        <LanguageSwitcher dynamic />
      </div>

      <section className="wedding-hero" aria-labelledby="wedding-hero-heading" data-hero-parallax-root>
        <div className="wedding-hero__layers" aria-hidden>
          <div
            className={`wedding-hero__bg${heroLoaded ? ' wedding-hero__bg--loaded' : ''}`}
            data-hero-parallax
          >
            <img
              className="wedding-hero__bg-img"
              src={WEDDING_HERO_IMAGE}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onLoad={() => setHeroLoaded(true)}
              ref={(node) => {
                if (node?.complete && node.naturalWidth > 0) setHeroLoaded(true)
              }}
            />
          </div>
          <div className="wedding-hero__vignette" />
          <div className="wedding-hero__scrim" />
          <div className="wedding-hero__grain" />
        </div>

        <div className="wedding-hero__frame">
          <div className="wedding-hero__brand-block">
            <p className="wedding-hero__located">{t(weddingHeroCopy.located)}</p>
            <h1 id="wedding-hero-heading" className="wedding-hero__brand">
              Wedding Sky
            </h1>
            <p className="wedding-hero__atelier">
              {t(weddingHeroCopy.atelier)}
            </p>
          </div>

          <div className="wedding-hero__footer-row">
            <div className="wedding-hero__footer-copy">
              <span className="wedding-hero__footer-glow" aria-hidden />
              <span className="wedding-hero__footer-accent" aria-hidden />
              <p className="wedding-hero__title">
                {t(weddingHeroCopy.title)}
              </p>
              <p className="wedding-hero__lead">
                {t(weddingHeroCopy.lead)}
              </p>
            </div>
            <div className="wedding-hero__meta">
              <a href={servicesSectionHref} className="wedding-hero__owner">
                <span className="wedding-hero__owner-kicker">{t(weddingHeroCopy.ownedBy)}</span>
                <span className="wedding-hero__owner-name">Komodromos Group</span>
              </a>
              <div className="wedding-hero__actions">
                <a href="#wedding-services" className="wedding-hero__cta">
                  <span>{t(weddingHeroCopy.exploreServices)}</span>
                </a>
                <a href="#wedding-contact" className="wedding-hero__cta wedding-hero__cta--ghost">
                  <span>{t(weddingHeroCopy.enquire)}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wedding-pillars" aria-label={t(weddingHeroCopy.exploreServices)}>
        <div className="container">
          <div className="wedding-pillars__inner">
            {weddingPillarsCopy.map((pillar, index) => {
              const isHash = pillar.href.startsWith('#')
              const href = isHash ? pillar.href : weddingBrandHref(pillar.href)
              const className = `wedding-pillars__item reveal reveal-delay-${Math.min(index + 1, 3)}`

              if (isHash) {
                return (
                  <a key={pillar.id} href={href} className={className}>
                    <span className="wedding-pillars__label">{t(pillar.label)}</span>
                    <span className="wedding-pillars__plus" aria-hidden>
                      +
                    </span>
                  </a>
                )
              }

              return (
                <Link key={pillar.id} to={href} className={className}>
                  <span className="wedding-pillars__label">{t(pillar.label)}</span>
                  <span className="wedding-pillars__plus" aria-hidden>
                    +
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <WeddingIntroSocial />
      <WeddingHighlightTiles />

      <section
        className="wedding-yt-bar"
        aria-labelledby="wedding-yt-bar-heading"
      >
        <div className="container">
          <a
            className="wedding-yt-bar__link reveal"
            href={WEDDING_YOUTUBE_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t(weddingVideoCopy.watchAria)}
          >
            <span className="wedding-yt-bar__sheen" aria-hidden />
            <span className="wedding-yt-bar__pulse" aria-hidden />

            <span className="wedding-yt-bar__mark" aria-hidden>
              <span className="wedding-yt-bar__mark-ring" />
              <svg viewBox="0 0 24 24" width="28" height="28" focusable="false">
                <path
                  fill="currentColor"
                  d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.5 15.6V8.4L15.8 12l-6.3 3.6z"
                />
              </svg>
            </span>

            <span className="wedding-yt-bar__copy">
              <span className="wedding-yt-bar__eyebrow">{t(weddingVideoCopy.eyebrow)}</span>
              <h2 id="wedding-yt-bar-heading" className="wedding-yt-bar__title">
                {t(weddingVideoCopy.title)}
              </h2>
              <span className="wedding-yt-bar__lead">{t(weddingVideoCopy.lead)}</span>
            </span>

            <span className="wedding-yt-bar__aside">
              <span className="wedding-yt-bar__handle">{t(weddingVideoCopy.handle)}</span>
              <span className="wedding-yt-bar__cta">
                <span>{t(weddingVideoCopy.cta)}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden focusable="false">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </section>

      <WeddingPackagesSection />

      <section
        className="wedding-knowledge-bar"
        aria-label={t(weddingKnowledgeCopy.sectionAria)}
      >
        <a href="#wedding-contact" className="wedding-knowledge-bar__trigger reveal">
          <span className="wedding-knowledge-bar__sr-only">
            {t(weddingKnowledgeCopy.srLabel)}
          </span>
          <span className="wedding-knowledge-bar__glow" aria-hidden />
          <span className="wedding-knowledge-bar__marquee" aria-hidden>
            <span className="wedding-knowledge-bar__track">
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--lead">
                {t(weddingKnowledgeCopy.phraseKnow)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--accent">
                {t(weddingKnowledgeCopy.phraseFaq)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--lead">
                {t(weddingKnowledgeCopy.phraseKnow)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--soft">
                {t(weddingKnowledgeCopy.phraseAnswers)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
            </span>
            <span className="wedding-knowledge-bar__track">
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--lead">
                {t(weddingKnowledgeCopy.phraseKnow)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--accent">
                {t(weddingKnowledgeCopy.phraseFaq)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--lead">
                {t(weddingKnowledgeCopy.phraseKnow)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
              <span className="wedding-knowledge-bar__phrase wedding-knowledge-bar__phrase--soft">
                {t(weddingKnowledgeCopy.phraseAnswers)}
              </span>
              <span className="wedding-knowledge-bar__sep" />
            </span>
          </span>
          <span className="wedding-knowledge-bar__cue" aria-hidden>
            <span className="wedding-knowledge-bar__cue-dot" />
          </span>
        </a>
      </section>

      <section className="wedding-section wedding-why">
        <div className="container">
          <header className="wedding-section__head wedding-why__head reveal">
            <p className="wedding-why__eyebrow">{t(weddingWhyCopy.eyebrow)}</p>
            <h2 className="wedding-section__title wedding-why__title">
              {t(weddingWhyCopy.title)}
            </h2>
            <span className="wedding-why__rule" aria-hidden />
            <p className="wedding-section__intro wedding-why__intro">
              {t(weddingWhyCopy.intro)}
            </p>
          </header>
          <WeddingWhyCards />
        </div>
      </section>

      <section className="wedding-section wedding-testimonials" aria-labelledby="wedding-testimonials-heading">
        <div className="container">
          <header className="wedding-section__head wedding-testimonials__head reveal">
            <div className="wedding-testimonials__brand">
              <img
                className="wedding-testimonials__brand-logo"
                src={WEDDING_SKY_LOGO}
                alt="Wedding Sky"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="wedding-section__eyebrow">{t(weddingTestimonialsCopy.eyebrow)}</p>
            <h2 id="wedding-testimonials-heading" className="wedding-section__title">
              {t(weddingTestimonialsCopy.title)}
            </h2>
            <p className="wedding-section__intro wedding-testimonials__intro">
              {t(weddingTestimonialsCopy.intro)}
            </p>

            <div className="wedding-testimonials__proof">
              <a
                className="wedding-testimonials__rating"
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="wedding-testimonials__rating-brand" aria-hidden>
                  <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </span>
                <span className="wedding-testimonials__rating-score">
                  {t(weddingTestimonialsCopy.googleRating)}
                </span>
                <span className="wedding-testimonials__rating-stars" aria-hidden>
                  ★★★★★
                </span>
                <span className="wedding-testimonials__rating-meta">
                  {t(weddingTestimonialsCopy.googleReviewsCount)}
                </span>
              </a>
              <div className="wedding-testimonials__platforms">
                <a
                  className="wedding-testimonials__platform wedding-testimonials__platform--google"
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="wedding-testimonials__platform-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="15" height="15" focusable="false">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </span>
                  {t(weddingTestimonialsCopy.viewOnGoogle)}
                </a>
                <a
                  className="wedding-testimonials__platform wedding-testimonials__platform--facebook"
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="wedding-testimonials__platform-icon" aria-hidden>
                    <svg viewBox="0 0 24 24" width="15" height="15" focusable="false">
                      <path
                        fill="currentColor"
                        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
                      />
                    </svg>
                  </span>
                  {t(weddingTestimonialsCopy.viewOnFacebook)}
                </a>
              </div>
            </div>
          </header>

          <WeddingSocialProof />
        </div>
      </section>

      <section className="wedding-section wedding-about" id="wedding-about" aria-labelledby="wedding-about-heading">
        <div className="container wedding-about__inner">
          <div className="wedding-about__showcase">
            <WeddingAboutGallery photoLabel={t(weddingAboutCopy.photoLabel)} />

            <div className="wedding-about__intro reveal-right reveal-delay-2">
              <p className="wedding-about__eyebrow">{t(weddingAboutCopy.eyebrow)}</p>
              <h2 id="wedding-about-heading" className="wedding-section__title wedding-about__page-title">
                {t(weddingAboutCopy.pageTitle)}
              </h2>
              <span className="wedding-about__rule" aria-hidden />
              <p className="wedding-about__lead">{t(weddingAboutCopy.lead)}</p>
              <p className="wedding-about__story">{t(weddingAboutCopy.story)}</p>
              <button
                type="button"
                className="wedding-about__cta"
                onClick={() => setPlanEnquiryOpen(true)}
              >
                {t(weddingAboutCopy.cta)}
              </button>
            </div>
          </div>

          <div className="wedding-about__pillars">
            {weddingAboutCopy.pillars.map((pillar, index) => (
              <article
                key={pillar.title.en}
                className={`wedding-about__pillar reveal reveal-delay-${Math.min(index + 1, 4)}`}
                style={{ ['--about-i' as string]: String(index) }}
              >
                <span className="wedding-about__pillar-index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="wedding-about__pillar-body">
                  <h3 className="wedding-about__subhead">{t(pillar.title)}</h3>
                  {pillar.tagline ? (
                    <p className="wedding-about__tagline">{t(pillar.tagline)}</p>
                  ) : null}
                  <p className="wedding-about__copy">{t(pillar.copy)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WeddingContactSection />

      <Footer />

      <WeddingPlanEnquiryModal
        open={planEnquiryOpen}
        onClose={() => setPlanEnquiryOpen(false)}
      />
    </div>
  )
}
