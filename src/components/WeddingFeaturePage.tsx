import { useCallback, useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import LanguageSwitcher from './LanguageSwitcher'
import { useReveal } from '../hooks/useReveal'
import { weddingBrandHref } from '../lib/brandPaths'
import { buildGroupSiteReturnUrl } from '../lib/navigationHistory'
import { openWeddingSkyBooking } from '../lib/weddingSkyBooking'
import { useSiteContext } from '../seo/SiteContext'
import { useWeddingLocale } from '../lib/weddingLocale'
import {
  balanceGalleryColumns,
  weddingFeatureLabels as labels,
  type WeddingFeaturePageContent,
} from '../data/weddingFeaturePage'

function columnCountForWidth(width: number): number {
  if (width >= 1100) return 4
  if (width >= 700) return 3
  return 2
}

function useGalleryColumnCount(): number {
  const [count, setCount] = useState(() =>
    typeof window === 'undefined' ? 3 : columnCountForWidth(window.innerWidth),
  )
  useEffect(() => {
    const update = () => setCount(columnCountForWidth(window.innerWidth))
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return count
}

type Props = {
  content: WeddingFeaturePageContent
}

/** Premium single-service Wedding Sky page: hero, story, details, gallery, quote and booking close. */
export default function WeddingFeaturePage({ content }: Props) {
  const pageRef = useReveal()
  const { isBrandDomain } = useSiteContext()
  const { t, htmlLang } = useWeddingLocale()
  const [lightbox, setLightbox] = useState<number | null>(null)
  const columnCount = useGalleryColumnCount()
  const copy = content
  const id = copy.key
  const total = copy.gallery.length

  const columns = useMemo(
    () => balanceGalleryColumns(copy.gallery, columnCount),
    [copy.gallery, columnCount],
  )

  const servicesSectionHref = isBrandDomain ? buildGroupSiteReturnUrl('services') : '/#services'
  const homeHref = weddingBrandHref('/services/wedding#wedding-services')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [id])

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((current) => (current === null ? null : (current + dir + total) % total))
    },
    [total],
  )

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null)
      else if (event.key === 'ArrowRight') step(1)
      else if (event.key === 'ArrowLeft') step(-1)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [lightbox, step])

  const active = lightbox === null ? null : copy.gallery[lightbox]
  const headingId = `wedding-${id}-heading`
  const quoteStyle: CSSProperties | undefined = copy.quoteBackdrop
    ? { ['--feature-quote-bg' as string]: `url("${copy.quoteBackdrop.src}")` }
    : undefined

  return (
    <div
      className={`page wedding-page wedding-concierge-page wedding-feature-page wedding-feature-page--${id}`}
      ref={pageRef}
      lang={htmlLang}
    >
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
        className={`wedding-concierge-hero wedding-concierge-hero--photo wedding-feature-hero${
          copy.hero.monochrome ? ' wedding-feature-hero--mono' : ''
        }`}
        aria-labelledby={headingId}
      >
        <div className="wedding-concierge-hero__backdrop" aria-hidden>
          <img
            className="wedding-concierge-hero__photo"
            src={copy.hero.src}
            alt=""
            width={copy.hero.width}
            height={copy.hero.height}
            decoding="async"
            fetchPriority="high"
            style={copy.hero.position ? { objectPosition: copy.hero.position } : undefined}
          />
          <span className="wedding-concierge-hero__scrim" />
          <span className="wedding-concierge-hero__orb wedding-concierge-hero__orb--gold" />
          <span className="wedding-concierge-hero__mesh" />
          <span className="wedding-concierge-hero__grain" />
        </div>
        <div className="container wedding-concierge-hero__content">
          <Link to={homeHref} className="wedding-concierge-hero__back">
            <span aria-hidden>←</span>
            <span>{t(labels.backToWedding)}</span>
          </Link>
          <p className="wedding-concierge-hero__eyebrow">{t(copy.eyebrow)}</p>
          <h1 id={headingId} className="wedding-concierge-hero__title">
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

      <section className="wedding-feature-story" aria-labelledby={`wedding-${id}-story-title`}>
        <div className="container wedding-feature-story__grid">
          <div className="wedding-feature-story__text reveal">
            <p className="wedding-feature-eyebrow">{t(copy.storyEyebrow)}</p>
            <h2 id={`wedding-${id}-story-title`} className="wedding-feature-title">
              {t(copy.storyTitle)}
            </h2>
            <span className="wedding-feature-rule" aria-hidden />
            {copy.storyParagraphs.map((paragraph) => (
              <p key={paragraph.en} className="wedding-feature-story__p">
                {t(paragraph)}
              </p>
            ))}
          </div>
          <figure className="wedding-feature-story__figure reveal">
            <span className="wedding-feature-story__frame" aria-hidden />
            <img
              src={copy.story.image.src}
              alt={t(copy.story.imageAlt)}
              width={copy.story.image.width}
              height={copy.story.image.height}
              loading="lazy"
              decoding="async"
              style={{
                aspectRatio: `${copy.story.image.width} / ${copy.story.image.height}`,
              }}
            />
          </figure>
        </div>
      </section>

      <section className="wedding-feature-pillars" aria-labelledby={`wedding-${id}-pillars-title`}>
        <div className="container">
          <header className="wedding-feature-head reveal">
            <p className="wedding-feature-eyebrow wedding-feature-eyebrow--light">
              {t(copy.pillarsEyebrow)}
            </p>
            <h2
              id={`wedding-${id}-pillars-title`}
              className="wedding-feature-title wedding-feature-title--light"
            >
              {t(copy.pillarsTitle)}
            </h2>
            <span className="wedding-feature-rule wedding-feature-rule--center" aria-hidden />
          </header>
          <div className="wedding-feature-pillars__grid">
            {copy.pillars.map((pillar, index) => (
              <article key={pillar.id} className="wedding-feature-pillar reveal">
                <span className="wedding-feature-pillar__index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="wedding-feature-pillar__title">{t(pillar.title)}</h3>
                <p className="wedding-feature-pillar__body">{t(pillar.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wedding-feature-gallery" aria-labelledby={`wedding-${id}-gallery-title`}>
        <div className="container">
          <header className="wedding-feature-head reveal">
            <p className="wedding-feature-eyebrow">{t(copy.galleryEyebrow)}</p>
            <h2 id={`wedding-${id}-gallery-title`} className="wedding-feature-title">
              {t(copy.galleryTitle)}
            </h2>
            <span className="wedding-feature-rule wedding-feature-rule--center" aria-hidden />
            <p className="wedding-feature-head__intro">{t(copy.galleryIntro)}</p>
          </header>
          <div
            className="wedding-feature-gallery__grid"
            style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
          >
            {columns.map((column) => (
              <div key={column.map((item) => item.id).join('|')} className="wedding-feature-gallery__column">
                {column.map((item) => {
                  const index = copy.gallery.indexOf(item)
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className="wedding-feature-gallery__item"
                      style={{ aspectRatio: `${item.width} / ${item.height}` }}
                      onClick={() => setLightbox(index)}
                      aria-label={`${t(labels.openImage)}: ${t(item.caption)}`}
                    >
                      <img
                        src={item.src}
                        alt={t(item.caption)}
                        width={item.width}
                        height={item.height}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="wedding-feature-gallery__veil" aria-hidden />
                      <span className="wedding-feature-gallery__caption">{t(item.caption)}</span>
                      <span className="wedding-feature-gallery__expand" aria-hidden>
                        <Expand size={15} strokeWidth={2} />
                      </span>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`wedding-feature-quote${copy.quoteBackdrop ? ' wedding-feature-quote--photo' : ''}`}
        style={quoteStyle}
        aria-label={t(copy.pageTitle)}
      >
        <div className="container wedding-feature-quote__inner reveal">
          <span className="wedding-feature-quote__mark" aria-hidden>
            “
          </span>
          <blockquote className="wedding-feature-quote__text">{t(copy.quote)}</blockquote>
        </div>
      </section>

      <section className="wedding-concierge-close" aria-labelledby={`wedding-${id}-close-title`}>
        <div className="container wedding-concierge-close__inner">
          <p className="wedding-concierge-close__eyebrow">{t(copy.closingEyebrow)}</p>
          <h2 id={`wedding-${id}-close-title`} className="wedding-concierge-close__lead">
            {t(copy.closingLead)}
          </h2>
          <p className="wedding-concierge-close__body">{t(copy.closingBody)}</p>
          <div className="wedding-concierge-close__brand">
            <p className="wedding-concierge-close__brand-name">{t(labels.brandName)}</p>
            <p className="wedding-concierge-close__brand-tagline">{t(copy.brandTagline)}</p>
          </div>
          <button
            type="button"
            className="wedding-concierge-close__button"
            onClick={() => openWeddingSkyBooking({ collectionName: t(copy.pageTitle) })}
          >
            <span className="wedding-concierge-close__button-sheen" aria-hidden />
            <span>{t(labels.bookCta)}</span>
          </button>
        </div>
      </section>

      {active ? (
        <div
          className="wedding-feature-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={t(active.caption)}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="wedding-feature-lightbox__close"
            onClick={() => setLightbox(null)}
            aria-label={t(labels.close)}
          >
            <X size={22} strokeWidth={2} />
          </button>
          <button
            type="button"
            className="wedding-feature-lightbox__nav wedding-feature-lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
            aria-label={t(labels.prev)}
          >
            <ChevronLeft size={26} strokeWidth={2} />
          </button>
          <figure className="wedding-feature-lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={t(active.caption)} />
            <figcaption>
              <span>{t(active.caption)}</span>
              <span className="wedding-feature-lightbox__count">
                {String((lightbox ?? 0) + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="wedding-feature-lightbox__nav wedding-feature-lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
            aria-label={t(labels.next)}
          >
            <ChevronRight size={26} strokeWidth={2} />
          </button>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
