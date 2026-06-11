import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import AstrealDetailConnect from './AstrealDetailConnect'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  getAstrealProjectById,
  type AstrealDetailCopyImageBreak,
} from '../data/astrealDevelopersPage'

type DetailCopyStreamItem =
  | { kind: 'paragraph'; para: string; index: number }
  | { kind: 'inline-gallery'; images: string[]; startIndex: number }

function buildDetailCopyStream(
  paragraphs: string[],
  gallery: string[],
  breaks?: AstrealDetailCopyImageBreak[],
): { items: DetailCopyStreamItem[]; galleryRemainder: string[]; galleryRemainderStart: number } {
  const items: DetailCopyStreamItem[] = []
  let galleryCursor = 0

  for (let index = 0; index < paragraphs.length; index += 1) {
    const para = paragraphs[index]
    const breakConfig = breaks?.find((entry) => entry.beforeLabel === para)
    if (breakConfig) {
      const count = breakConfig.count ?? 4
      const images = gallery.slice(galleryCursor, galleryCursor + count)
      if (images.length > 0) {
        items.push({ kind: 'inline-gallery', images, startIndex: galleryCursor })
        galleryCursor += images.length
      }
    }
    items.push({ kind: 'paragraph', para, index })
  }

  return {
    items,
    galleryRemainder: gallery.slice(galleryCursor),
    galleryRemainderStart: galleryCursor,
  }
}

const EASE = [0.22, 1, 0.36, 1] as const

function isAstrealDetailCopySectionLabel(para: string): boolean {
  if (para === 'Signature features') return true
  if (para.startsWith('Location —')) return true
  return (
    para === 'Each residence offers:' ||
    para === 'Each home includes:' ||
    para === 'Prime location' ||
    para === 'Additional advantages:' ||
    para === 'Price per residence' ||
    para === 'Designed around light, air & harmony' ||
    para === 'Luxury living experience includes:' ||
    para === 'Prices starting from €360,000 + VAT' ||
    para === 'The project features luxury residences offering:' ||
    para === 'Designed with exceptional lifestyle amenities including:' ||
    para === 'Developed and Renovated by:' ||
    para === 'Project details' ||
    para.startsWith('Location:') ||
    para.startsWith('Category:') ||
    para.startsWith('Style:') ||
    para.startsWith('Status:')
  )
}

function isAstrealDetailCopyEmojiBullet(para: string): boolean {
  const t = para.trim()
  return t.startsWith('▪️') || t.startsWith('✔️')
}

function isAstrealDetailCopyNote(para: string): boolean {
  return para.trim().startsWith('Note:')
}

/** Short specification / distance lines (not emoji bullets) — editorial list rhythm */
function isAstrealDetailCopyFactRow(para: string, isSectionLabel: boolean): boolean {
  if (isSectionLabel) return false
  const t = para.trim()
  if (t.length > 92 || t.length < 8) return false
  if (!t.endsWith('.')) return false
  if (isAstrealDetailCopyEmojiBullet(t) || isAstrealDetailCopyNote(t)) return false
  if (/^[✨🏡💎☀️💰]/.test(t)) return false
  if (t.startsWith('€')) return true
  return (
    /^\d/.test(t) ||
    /^(?:Private |Modern |South-facing|Spacious |Contemporary |Laundry|Large |Quiet |Adjacent |Next |Less than|Only \d)/i.test(t)
  )
}

function astrealDetailCopyParagraphClassName(
  para: string,
  index: number,
  isSectionLabel: boolean,
): string | undefined {
  if (index === 0) return 'astreal-detail-copy__lead'
  if (isSectionLabel) return 'astreal-detail-copy__section-label'
  if (isAstrealDetailCopyNote(para)) return 'astreal-detail-copy__note'
  if (isAstrealDetailCopyEmojiBullet(para)) {
    return para.trim().startsWith('✔️')
      ? 'astreal-detail-copy__bullet astreal-detail-copy__bullet--check'
      : 'astreal-detail-copy__bullet astreal-detail-copy__bullet--diamond'
  }
  if (isAstrealDetailCopyFactRow(para, isSectionLabel)) return 'astreal-detail-copy__fact'
  return 'astreal-detail-copy__prose'
}

export default function AstrealProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const [isNarrowViewport, setIsNarrowViewport] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 899px)').matches,
  )
  const project = projectId ? getAstrealProjectById(projectId) : undefined

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 899px)')
    const apply = () => setIsNarrowViewport(mq.matches)
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    setLightboxIndex(null)
  }, [projectId])

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), [])

  const goPrevLightbox = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || !project) return i
      const n = project.gallery.length
      return i <= 0 ? n - 1 : i - 1
    })
  }, [project])

  const goNextLightbox = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null || !project) return i
      const n = project.gallery.length
      return i >= n - 1 ? 0 : i + 1
    })
  }, [project])

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

  if (projectId === 'island-studios') {
    return <Navigate to="/services/astreal/projects/coral" replace />
  }

  if (!project) {
    return <Navigate to="/services/astreal" replace />
  }

  const skipScrollMotion = Boolean(reduceMotion || isNarrowViewport)
  const highlightsStatic = Boolean(reduceMotion)

  const detailHeroBack = skipScrollMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.72, ease: EASE, delay: 0 },
      }

  const detailHeroEyebrow = skipScrollMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.72, ease: EASE, delay: 0.1 },
      }

  const detailHeroTitle = skipScrollMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.85, ease: EASE, delay: 0.2 },
      }

  const heroSrc = project.detailHeroSrc ?? project.gallery[0] ?? project.imageSrc
  const { items: copyStream, galleryRemainder, galleryRemainderStart } = buildDetailCopyStream(
    project.detailParagraphs,
    project.gallery,
    project.detailCopyImageBreaks,
  )
  return (
    <div className="page astreal-page astreal-detail-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <header className="astreal-detail-hero" aria-labelledby="astreal-detail-title">
        <div className="astreal-detail-hero__media">
          <img
            className="astreal-detail-hero__img"
            src={heroSrc}
            alt=""
            width={1920}
            height={1080}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
          />
          <div className="astreal-detail-hero__scrim" aria-hidden />
        </div>
        <div className="astreal-detail-hero__back-slot">
          <motion.div className="astreal-detail-hero__back-wrap" {...detailHeroBack}>
            <Link
              to="/services/astreal#astreal-projects"
              className="astreal-detail-hero__back"
              aria-label="Back to all Astreal projects"
            >
              <span className="astreal-detail-hero__back-icon" aria-hidden>
                ‹
              </span>
              <span className="astreal-detail-hero__back-text">
                <span className="astreal-detail-hero__back-main">All Astreal projects</span>
                <span className="astreal-detail-hero__back-sub">Return to developments</span>
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="container astreal-detail-hero__inner">
          <motion.p className="astreal-detail-hero__eyebrow" {...detailHeroEyebrow}>
            {project.subtitle}
          </motion.p>
          <motion.h1
            id="astreal-detail-title"
            className="astreal-detail-hero__title astreal-detail-hero__title--split"
            {...detailHeroTitle}
          >
            {(project.cardTitleLines ?? [project.title, '']).map((line, lineIndex) =>
              line ? (
                <span
                  key={`${project.id}-${line}`}
                  className={[
                    'astreal-detail-hero__title-line',
                    lineIndex === 1 ? 'astreal-detail-hero__title-line--accent' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {line}
                </span>
              ) : null,
            )}
          </motion.h1>
        </div>
      </header>

      <article className="astreal-detail-article">
        <div className="astreal-detail-article__inner">
          <section
            className="astreal-detail-highlights"
            aria-labelledby="astreal-detail-highlights-heading"
          >
            <h2 id="astreal-detail-highlights-heading" className="visually-hidden">
              Highlights
            </h2>
            <ul className="visually-hidden">
              {project.highlights.map((line, i) => (
                <li key={`${line}-${i}`}>{line}</li>
              ))}
            </ul>
            <div
              className={`astreal-detail-highlights__bar${highlightsStatic ? ' astreal-detail-highlights__bar--static' : ''}`}
              aria-hidden="true"
            >
              <div className="astreal-detail-highlights__viewport">
                <div
                  className={`astreal-detail-highlights__track${highlightsStatic ? '' : ' astreal-detail-highlights__track--marquee'}`}
                >
                  {(highlightsStatic ? project.highlights : [...project.highlights, ...project.highlights]).map(
                    (line, i) => (
                      <span key={`${line}-${i}`} className="astreal-detail-highlights__segment">
                        <span className="astreal-detail-highlights__segment-text">{line}</span>
                        <span className="astreal-detail-highlights__divider" aria-hidden />
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section
          className="astreal-detail-copy astreal-detail-copy--fullbleed astreal-detail-copy--refined"
          aria-labelledby="astreal-detail-copy-h"
        >
          <h2 id="astreal-detail-copy-h" className="astreal-detail-copy__heading">
            Property narrative
          </h2>
          <div className="astreal-detail-copy__body">
            {copyStream.map((item, streamIndex) => {
              if (item.kind === 'inline-gallery') {
                return (
                  <div
                    key={`gallery-${item.startIndex}`}
                    className="astreal-detail-copy__inline-gallery"
                  >
                    <ul className="astreal-detail-copy__inline-grid">
                      {item.images.map((src, imageOffset) => {
                        const galleryIndex = item.startIndex + imageOffset
                        return (
                          <li key={src} className="astreal-detail-copy__inline-cell">
                            <figure className="astreal-detail-copy__inline-figure">
                              <button
                                type="button"
                                className="astreal-detail-copy__inline-trigger"
                                onClick={() => openLightbox(galleryIndex)}
                                aria-label={`Open image ${galleryIndex + 1} of ${project.gallery.length} fullscreen`}
                              >
                                <img
                                  className="astreal-detail-copy__inline-img"
                                  src={src}
                                  alt={`${project.title} — image ${galleryIndex + 1}`}
                                  width={1600}
                                  height={1067}
                                  loading="lazy"
                                  decoding="async"
                                  sizes="(max-width: 719px) 100vw, 50vw"
                                />
                              </button>
                            </figure>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              }

              const { para, index } = item
              const isSectionLabel = isAstrealDetailCopySectionLabel(para)
              return (
                <p
                  key={`para-${index}-${streamIndex}`}
                  className={astrealDetailCopyParagraphClassName(para, index, isSectionLabel)}
                >
                  {para}
                </p>
              )
            })}
          </div>
        </section>

        {galleryRemainder.length > 0 ? (
        <div className="astreal-detail-article__inner">
          <section className="astreal-detail-gallery" aria-labelledby="astreal-detail-gallery-h">
            <div className="astreal-detail-gallery__head">
              <h2 id="astreal-detail-gallery-h" className="astreal-detail-gallery__title">
                Architecture & interiors
              </h2>
              <p className="astreal-detail-gallery__sub">
                Curated photography from this development — explore finish quality, spatial rhythm, and landscape
                integration.
              </p>
            </div>
            <ul className="astreal-detail-gallery__grid">
              {galleryRemainder.map((src, i) => {
                const galleryIndex = galleryRemainderStart + i
                return (
                <li key={src} className="astreal-detail-gallery__cell">
                  <figure className="astreal-detail-gallery__figure">
                    <button
                      type="button"
                      className="astreal-detail-gallery__trigger"
                      onClick={() => openLightbox(galleryIndex)}
                      aria-label={`Open image ${galleryIndex + 1} of ${project.gallery.length} fullscreen`}
                    >
                      <img
                        className="astreal-detail-gallery__img"
                        src={src}
                        alt={`${project.title} — image ${galleryIndex + 1}`}
                        width={1600}
                        height={1067}
                        loading={i < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                        sizes="(max-width: 719px) 100vw, (max-width: 1399px) 50vw, 50vw"
                      />
                    </button>
                  </figure>
                </li>
                )
              })}
            </ul>
          </section>
        </div>
        ) : null}

        <AstrealDetailConnect projectTitle={project.title} />
      </article>

      {lightboxIndex !== null && (
        <div
          className="astreal-detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} photography`}
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
          <div
            className="astreal-detail-lightbox__stage"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <img
              className="astreal-detail-lightbox__img"
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} — image ${lightboxIndex + 1}`}
              width={1920}
              height={1280}
              sizes="100vw"
              decoding="async"
            />
            <p className="astreal-detail-lightbox__counter">
              {lightboxIndex + 1} / {project.gallery.length}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
