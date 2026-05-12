import { useCallback, useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { getAstrealProjectById } from '../data/astrealDevelopersPage'

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
    para === 'Prices starting from €360,000 + VAT'
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
  const project = projectId ? getAstrealProjectById(projectId) : undefined

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

  if (!project) {
    return <Navigate to="/services/astreal" replace />
  }

  const detailHeroBreadcrumb = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 14, filter: 'blur(8px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.72, ease: EASE, delay: 0 },
      }

  const detailHeroEyebrow = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.72, ease: EASE, delay: 0.1 },
      }

  const detailHeroTitle = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 44,
          filter: 'blur(22px)',
          clipPath: 'inset(0 100% 0 0)',
        },
        animate: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          clipPath: 'inset(0 0% 0 0)',
        },
        transition: { duration: 1.05, ease: EASE, delay: 0.2 },
      }

  const detailHeroLede = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30, filter: 'blur(14px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.9, ease: EASE, delay: 0.36 },
      }

  const detailHeroActions = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.68, ease: EASE, delay: 0.5 },
      }

  const heroSrc = project.detailHeroSrc ?? project.gallery[0] ?? project.imageSrc
  const fadeBlock = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.25 },
        transition: { duration: 0.68, ease: EASE },
      }

  const galleryItemMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.08 },
      }

  return (
    <div className="page astreal-page astreal-detail-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/services"
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
        <div className="container astreal-detail-hero__inner">
          <motion.nav className="astreal-detail-breadcrumb" aria-label="Breadcrumb" {...detailHeroBreadcrumb}>
            <Link to="/services">Services</Link>
            <span className="astreal-detail-breadcrumb__sep" aria-hidden>
              /
            </span>
            <Link to="/services/astreal">Astreal Developers</Link>
            <span className="astreal-detail-breadcrumb__sep" aria-hidden>
              /
            </span>
            <span className="astreal-detail-breadcrumb__current">{project.title}</span>
          </motion.nav>
          <motion.p className="astreal-detail-hero__eyebrow" {...detailHeroEyebrow}>
            {project.subtitle}
          </motion.p>
          <motion.h1 id="astreal-detail-title" className="astreal-detail-hero__title" {...detailHeroTitle}>
            {project.title}
          </motion.h1>
          <motion.p className="astreal-detail-hero__lede" {...detailHeroLede}>
            {project.description}
          </motion.p>
          <motion.div className="astreal-detail-hero__actions" {...detailHeroActions}>
            <Link
              to="/contact"
              className="astreal-detail-hero__btn astreal-detail-hero__btn--primary"
              state={{ serviceInterest: `Astreal — ${project.title}` }}
            >
              Request details
            </Link>
            <Link to="/services/astreal#astreal-projects" className="astreal-detail-hero__btn astreal-detail-hero__btn--ghost">
              All Astreal projects
            </Link>
          </motion.div>
        </div>
      </header>

      <article className="astreal-detail-article">
        <div className="astreal-detail-article__inner">
          <motion.section
            className="astreal-detail-highlights"
            aria-labelledby="astreal-detail-highlights-heading"
            {...fadeBlock}
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
              className={`astreal-detail-highlights__bar${reduceMotion ? ' astreal-detail-highlights__bar--static' : ''}`}
              aria-hidden="true"
            >
              <div className="astreal-detail-highlights__viewport">
                <div
                  className={`astreal-detail-highlights__track${reduceMotion ? '' : ' astreal-detail-highlights__track--marquee'}`}
                >
                  {(reduceMotion ? project.highlights : [...project.highlights, ...project.highlights]).map(
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
          </motion.section>
        </div>

        <motion.section
          className="astreal-detail-copy astreal-detail-copy--fullbleed astreal-detail-copy--refined"
          aria-labelledby="astreal-detail-copy-h"
          {...fadeBlock}
        >
          <h2 id="astreal-detail-copy-h" className="astreal-detail-copy__heading">
            Property narrative
          </h2>
          <div className="astreal-detail-copy__body">
            {project.detailParagraphs.map((para, i) => {
              const isSectionLabel = isAstrealDetailCopySectionLabel(para)
              return (
                <p key={i} className={astrealDetailCopyParagraphClassName(para, i, isSectionLabel)}>
                  {para}
                </p>
              )
            })}
          </div>
        </motion.section>

        <div className="astreal-detail-article__inner">
          <section className="astreal-detail-gallery" aria-labelledby="astreal-detail-gallery-h">
            <motion.div className="astreal-detail-gallery__head" {...fadeBlock}>
              <h2 id="astreal-detail-gallery-h" className="astreal-detail-gallery__title">
                Architecture & interiors
              </h2>
              <p className="astreal-detail-gallery__sub">
                Curated photography from this development — explore finish quality, spatial rhythm, and landscape
                integration.
              </p>
            </motion.div>
            <ul className="astreal-detail-gallery__grid">
              {project.gallery.map((src, i) => (
                <motion.li
                  key={src}
                  className="astreal-detail-gallery__cell"
                  {...galleryItemMotion}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.52,
                    ease: EASE,
                    delay: reduceMotion ? 0 : Math.min(i, 10) * 0.035,
                  }}
                >
                  <figure className="astreal-detail-gallery__figure">
                    <button
                      type="button"
                      className="astreal-detail-gallery__trigger"
                      onClick={() => openLightbox(i)}
                      aria-label={`Open image ${i + 1} of ${project.gallery.length} fullscreen`}
                    >
                      <img
                        className="astreal-detail-gallery__img"
                        src={src}
                        alt={`${project.title} — image ${i + 1}`}
                        width={1600}
                        height={1067}
                        loading={i < 4 ? 'eager' : 'lazy'}
                        decoding="async"
                        sizes="(max-width: 719px) 100vw, (max-width: 1399px) 50vw, 50vw"
                      />
                    </button>
                  </figure>
                </motion.li>
              ))}
            </ul>
          </section>
        </div>
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
          <div className="astreal-detail-lightbox__stage">
            <img
              className="astreal-detail-lightbox__img"
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} — image ${lightboxIndex + 1}`}
              width={1600}
              height={1067}
              sizes="96vw"
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
