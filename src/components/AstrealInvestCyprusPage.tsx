import { useCallback, useEffect, useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import AstrealPageNav from './AstrealPageNav'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  ASTREAL_INVEST_CYPRUS_HERO_IMAGE,
  ASTREAL_INVEST_CYPRUS_INTRO,
} from '../data/astrealInvestCyprusContent'

const VIEW = { once: true, amount: 0.12, margin: '0px 0px -60px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const
const content = ASTREAL_INVEST_CYPRUS_INTRO

const cardContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.06 },
  },
} as const

const cardItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
} as const

export default function AstrealInvestCyprusPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const highlightGallery = useMemo(
    () =>
      content.highlights
        .filter((item): item is (typeof content.highlights)[number] & { image: string } =>
          Boolean(item.image),
        )
        .map((item) => ({
          src: item.image,
          alt: item.imageAlt ?? item.text,
          caption: item.text,
        })),
    [],
  )

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])

  const goPrevLightbox = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i
      const n = highlightGallery.length
      return i <= 0 ? n - 1 : i - 1
    })
  }, [highlightGallery.length])

  const goNextLightbox = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return i
      const n = highlightGallery.length
      return i >= n - 1 ? 0 : i + 1
    })
  }, [highlightGallery.length])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      else if (e.key === 'ArrowLeft') goPrevLightbox()
      else if (e.key === 'ArrowRight') goNextLightbox()
    }

    document.addEventListener('keydown', onKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [lightboxIndex, closeLightbox, goPrevLightbox, goNextLightbox])

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: VIEW,
          transition: { duration: 0.68, ease: EASE, delay },
        }

  const fadeUpOnMount = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.68, ease: EASE, delay },
        }

  const titleLineMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, clipPath: 'inset(0 100% 0 0)' },
        animate: { opacity: 1, y: 0, clipPath: 'inset(0 0% 0 0)' },
        transition: { duration: 0.9, ease: EASE, delay: 0.08 },
      }

  const titleAccentMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.82, ease: EASE, delay: 0.22 },
      }

  const eyebrowMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, letterSpacing: '0.42em', y: 12 },
        animate: { opacity: 1, letterSpacing: '0.22em', y: 0 },
        transition: { duration: 0.75, ease: EASE, delay: 0.42 },
      }

  const figureMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { type: 'spring' as const, stiffness: 72, damping: 18, mass: 0.85, delay: 0.32 },
      }

  const imgMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 1.12 },
        animate: { scale: 1 },
        transition: { duration: 1.35, ease: EASE, delay: 0.55 },
      }

  const imgDrift = reduceMotion
    ? {}
    : {
        animate: { scale: [1, 1.045, 1] },
        transition: {
          duration: 14,
          ease: 'easeInOut' as const,
          repeat: Infinity,
          repeatType: 'mirror' as const,
        },
      }

  return (
    <div className="page astreal-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="astreal-about-page astreal-invest-page">
        <div className="astreal-about-page__shell">
          <AstrealPageNav currentLabel="Invest in Cyprus" />

          <section
            className="astreal-about astreal-about--premium astreal-about--page-layout"
            aria-labelledby="astreal-invest-heading"
          >
            <div className="astreal-about-page__content astreal-invest-page__content">
              <header className="astreal-about-page__masthead">
                <h1 id="astreal-invest-heading" className="astreal-about-page__heading astreal-invest-page__heading">
                  <motion.span className="astreal-invest-page__heading-line" {...titleLineMotion}>
                    {content.title}
                  </motion.span>
                  <motion.span className="astreal-invest-page__heading-accent" {...titleAccentMotion}>
                    {content.titleAccent}
                  </motion.span>
                </h1>
              </header>

              <motion.span
                className="astreal-about__eyebrow astreal-about-page__eyebrow astreal-invest-page__eyebrow"
                {...eyebrowMotion}
              >
                {content.eyebrow}
              </motion.span>

              <motion.figure className="astreal-invest-page__figure astreal-invest-page__figure--hero" {...figureMotion}>
                <span className="astreal-invest-page__figure-shine" aria-hidden />
                <motion.div className="astreal-invest-page__figure-media" {...imgMotion}>
                  <motion.img
                    src={ASTREAL_INVEST_CYPRUS_HERO_IMAGE}
                    alt={content.heroImageAlt}
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="astreal-invest-page__img"
                    {...imgDrift}
                  />
                </motion.div>
              </motion.figure>

              <motion.div className="astreal-invest-page__intro" {...fadeUpOnMount(0.38)}>
                <h2 className="astreal-invest-page__section-title">{content.sectionTitle}</h2>

                <div className="astreal-invest-page__intro-grid">
                  <div className="astreal-invest-page__intro-copy">
                    {content.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="astreal-about__prose astreal-about-page__prose">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <figure className="astreal-invest-page__intro-visual">
                    <img
                      src={content.introImage}
                      alt={content.introImageAlt}
                      width={900}
                      height={1200}
                      loading="lazy"
                      decoding="async"
                      className="astreal-invest-page__intro-img"
                    />
                  </figure>
                </div>
              </motion.div>

              <motion.div
                className="astreal-invest-page__mosaic"
                aria-hidden={false}
                role="group"
                aria-label="Cyprus lifestyle and investment imagery"
                {...fadeUp(0.12)}
              >
                {content.mosaic.map((item) => (
                  <figure
                    key={item.src}
                    className={`astreal-invest-page__mosaic-item${item.featured ? ' astreal-invest-page__mosaic-item--featured' : ''}`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={1200}
                      height={800}
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </motion.div>

              <motion.header className="astreal-invest-page__reasons-head" {...fadeUp(0.1)}>
                <h2 className="astreal-invest-page__reasons-title">{content.reasonsTitle}</h2>
                <p className="astreal-invest-page__reasons-lead">{content.reasonsLead}</p>
              </motion.header>

              <motion.ul
                className="astreal-invest-page__highlight-grid"
                variants={reduceMotion ? undefined : cardContainer}
                initial={reduceMotion ? undefined : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={VIEW}
              >
                {content.highlights.map((item) => {
                  const galleryIndex = item.image
                    ? highlightGallery.findIndex((entry) => entry.src === item.image)
                    : -1

                  return (
                    <motion.li
                      key={item.text}
                      className={`astreal-invest-page__highlight-card${item.image ? '' : ' astreal-invest-page__highlight-card--text-only'}`}
                      variants={reduceMotion ? undefined : cardItem}
                    >
                      {item.image && galleryIndex >= 0 ? (
                        <figure className="astreal-invest-page__highlight-media">
                          <button
                            type="button"
                            className="astreal-invest-page__highlight-trigger"
                            onClick={() => openLightbox(galleryIndex)}
                            aria-label={`Preview image: ${item.text}`}
                          >
                            <img
                              src={item.image}
                              alt={item.imageAlt ?? item.text}
                              width={640}
                              height={480}
                              loading="lazy"
                              decoding="async"
                            />
                            <span className="astreal-invest-page__highlight-zoom" aria-hidden>
                              View
                            </span>
                          </button>
                          <figcaption className="astreal-invest-page__highlight-caption">
                            <span>{item.text}</span>
                          </figcaption>
                        </figure>
                      ) : (
                        <p className="astreal-invest-page__highlight-text">{item.text}</p>
                      )}
                    </motion.li>
                  )
                })}
              </motion.ul>
            </div>
          </section>
        </div>
      </main>

      {lightboxIndex !== null && highlightGallery[lightboxIndex] ? (
        <div
          className="astreal-detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Invest in Cyprus image preview"
        >
          <button
            type="button"
            className="astreal-detail-lightbox__backdrop"
            onClick={closeLightbox}
            aria-label="Close fullscreen preview"
          />
          <button
            type="button"
            className="astreal-detail-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>
          {highlightGallery.length > 1 ? (
            <>
              <button
                type="button"
                className="astreal-detail-lightbox__nav astreal-detail-lightbox__nav--prev"
                onClick={(e) => {
                  e.stopPropagation()
                  goPrevLightbox()
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="astreal-detail-lightbox__nav astreal-detail-lightbox__nav--next"
                onClick={(e) => {
                  e.stopPropagation()
                  goNextLightbox()
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          ) : null}
          <div className="astreal-detail-lightbox__stage">
            <img
              className="astreal-detail-lightbox__img"
              src={highlightGallery[lightboxIndex].src}
              alt={highlightGallery[lightboxIndex].alt}
              width={1600}
              height={1067}
              sizes="96vw"
              decoding="async"
            />
            <p className="astreal-detail-lightbox__caption">
              {highlightGallery[lightboxIndex].caption}
            </p>
            <p className="astreal-detail-lightbox__counter">
              {lightboxIndex + 1} / {highlightGallery.length}
            </p>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
