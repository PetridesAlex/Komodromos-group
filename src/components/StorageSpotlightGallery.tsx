import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'
import { STORAGE_SPOTLIGHT_GALLERY } from '../data/storagePageImages'

const EASE = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
} as const

const tileVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: EASE },
  },
} as const

export default function StorageSpotlightGallery() {
  const reduceMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeItem = activeIndex !== null ? STORAGE_SPOTLIGHT_GALLERY[activeIndex] : null

  const closePreview = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null || i <= 0 ? i : i - 1))
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((i) =>
      i === null || i >= STORAGE_SPOTLIGHT_GALLERY.length - 1 ? i : i + 1,
    )
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, closePreview, showNext, showPrev])

  const headerMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.55, ease: EASE },
      }

  const gridMotion = reduceMotion
    ? {}
    : {
        variants: gridVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-60px', amount: 0.12 },
      }

  return (
    <LayoutGroup id="storage-spotlight-gallery">
    <section
      className="storage-spotlight"
      aria-labelledby="storage-spotlight-heading"
    >
      <div className="storage-spotlight__ambient" aria-hidden />

      <motion.header className="storage-spotlight__head" {...headerMotion}>
        <p className="storage-spotlight__eyebrow">
          <span className="storage-spotlight__eyebrow-line" aria-hidden />
          <span className="storage-spotlight__eyebrow-text">Facility gallery</span>
          <span className="storage-spotlight__eyebrow-line" aria-hidden />
        </p>
        <h3 id="storage-spotlight-heading" className="storage-spotlight__title">
          <span className="storage-spotlight__title-main">See the site</span>
          <span className="storage-spotlight__title-accent">before you book</span>
        </h3>
        <p className="storage-spotlight__lead">
          Real views of our units, containers, and secure yard — the same locations featured across
          our services, collected here for a closer look.
        </p>
      </motion.header>

      <motion.ul className="storage-spotlight__grid" role="list" {...gridMotion}>
        {STORAGE_SPOTLIGHT_GALLERY.map((item, index) => (
          <motion.li
            key={item.file}
            role="listitem"
            className="storage-spotlight__tile"
            variants={reduceMotion ? undefined : tileVariants}
          >
            <button
              type="button"
              className="storage-spotlight__frame"
              onClick={() => setActiveIndex(index)}
              aria-label={`Preview ${item.caption}`}
            >
              <div className="storage-spotlight__img-wrap">
                <motion.img
                  layoutId={reduceMotion ? undefined : `spotlight-img-${item.file}`}
                  src={item.src}
                  alt={item.alt}
                  className="storage-spotlight__img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="storage-spotlight__shine" aria-hidden />
              <div className="storage-spotlight__scrim" aria-hidden />
              <span className="storage-spotlight__preview-hint" aria-hidden>
                <ZoomIn size={18} strokeWidth={2} />
              </span>
              <span className="storage-spotlight__index" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="storage-spotlight__caption">{item.caption}</span>
            </button>
          </motion.li>
        ))}
      </motion.ul>

      <AnimatePresence>
        {activeItem && activeIndex !== null ? (
          <motion.div
            className="storage-spotlight-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Preview: ${activeItem.caption}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.35, ease: EASE }}
          >
            <motion.button
              type="button"
              className="storage-spotlight-lightbox__backdrop"
              aria-label="Close preview"
              onClick={closePreview}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <div className="storage-spotlight-lightbox__chrome">
              <button
                type="button"
                className="storage-spotlight-lightbox__close"
                onClick={closePreview}
                aria-label="Close preview"
              >
                <X size={20} strokeWidth={2} />
              </button>
              <p className="storage-spotlight-lightbox__counter" aria-live="polite">
                {String(activeIndex + 1).padStart(2, '0')}
                <span aria-hidden> / </span>
                {String(STORAGE_SPOTLIGHT_GALLERY.length).padStart(2, '0')}
              </p>
            </div>

            <motion.div
              className="storage-spotlight-lightbox__stage"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.45, ease: EASE }}
            >
              <motion.img
                key={activeItem.file}
                layoutId={reduceMotion ? undefined : `spotlight-img-${activeItem.file}`}
                src={activeItem.src}
                alt={activeItem.alt}
                className="storage-spotlight-lightbox__img"
                initial={reduceMotion ? false : { opacity: 0.6 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
              <motion.p
                key={`${activeItem.file}-caption`}
                className="storage-spotlight-lightbox__caption"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.06, ease: EASE }}
              >
                {activeItem.caption}
              </motion.p>
            </motion.div>

            {activeIndex > 0 ? (
              <button
                type="button"
                className="storage-spotlight-lightbox__nav storage-spotlight-lightbox__nav--prev"
                onClick={showPrev}
                aria-label="Previous photo"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
            ) : null}

            {activeIndex < STORAGE_SPOTLIGHT_GALLERY.length - 1 ? (
              <button
                type="button"
                className="storage-spotlight-lightbox__nav storage-spotlight-lightbox__nav--next"
                onClick={showNext}
                aria-label="Next photo"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            ) : null}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
    </LayoutGroup>
  )
}
