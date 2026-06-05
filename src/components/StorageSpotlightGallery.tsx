import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
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

const EXIT_MS = 380

function subscribeMobileSpotlight(cb: () => void) {
  const mq = window.matchMedia('(max-width: 640px)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getMobileSpotlightSnapshot() {
  return window.matchMedia('(max-width: 640px)').matches
}

function getMobileSpotlightServerSnapshot() {
  return false
}

function useMobileSpotlight() {
  return useSyncExternalStore(
    subscribeMobileSpotlight,
    getMobileSpotlightSnapshot,
    getMobileSpotlightServerSnapshot,
  )
}

const SCROLL_LOCK_ATTR = 'data-kg-scroll-lock-y'

function lockPageScroll(scrollY: number) {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
  document.body.setAttribute(SCROLL_LOCK_ATTR, String(scrollY))
}

function unlockPageScroll(scrollY: number) {
  const stored = document.body.getAttribute(SCROLL_LOCK_ATTR)
  const parsed = stored ? parseInt(stored, 10) : scrollY
  const targetY = Number.isNaN(parsed) ? scrollY : parsed

  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  document.body.removeAttribute(SCROLL_LOCK_ATTR)

  // Clear legacy fixed-body lock if a prior build left it behind
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.left = ''
  document.body.style.right = ''
  document.body.style.width = ''

  window.scrollTo(0, targetY)
}

export default function StorageSpotlightGallery() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()
  const isMobile = useMobileSpotlight()
  const useSharedLayout = !reduceMotion && !isMobile
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scrollLocked, setScrollLocked] = useState(false)
  const savedScrollY = useRef(0)
  const scrollLockedRef = useRef(false)

  const activeItem = activeIndex !== null ? STORAGE_SPOTLIGHT_GALLERY[activeIndex] : null

  const openPreview = useCallback((index: number) => {
    savedScrollY.current = window.scrollY
    scrollLockedRef.current = true
    setScrollLocked(true)
    setActiveIndex(index)
  }, [])

  const releaseScrollLock = useCallback(() => {
    if (!scrollLockedRef.current) return
    unlockPageScroll(savedScrollY.current)
    scrollLockedRef.current = false
    setScrollLocked(false)
  }, [])

  const closePreview = useCallback(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    releaseScrollLock()
    setActiveIndex(null)
  }, [releaseScrollLock])

  const handleExitComplete = useCallback(() => {
    releaseScrollLock()
  }, [releaseScrollLock])

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null || i <= 0 ? i : i - 1))
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((i) =>
      i === null || i >= STORAGE_SPOTLIGHT_GALLERY.length - 1 ? i : i + 1,
    )
  }, [])

  useEffect(() => {
    if (!scrollLocked) return

    lockPageScroll(savedScrollY.current)

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePreview()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [scrollLocked, closePreview, showNext, showPrev])

  useEffect(() => {
    return () => {
      releaseScrollLock()
    }
  }, [releaseScrollLock])

  useEffect(() => {
    releaseScrollLock()
    setActiveIndex(null)
  }, [location.pathname, releaseScrollLock])

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
              onPointerDown={() => {
                savedScrollY.current = window.scrollY
              }}
              onClick={() => openPreview(index)}
              aria-label={`Preview ${item.caption}`}
            >
              <div className="storage-spotlight__img-wrap">
                <motion.img
                  layoutId={useSharedLayout ? `spotlight-img-${item.file}` : undefined}
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

      {typeof document !== 'undefined'
        ? createPortal(
            <AnimatePresence onExitComplete={handleExitComplete}>
              {activeItem && activeIndex !== null ? (
                <motion.div
                  className="storage-spotlight-lightbox"
                  role="dialog"
                  aria-modal="true"
                  aria-label={`Preview: ${activeItem.caption}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0.01 : EXIT_MS / 1000, ease: EASE }}
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
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97, y: 8 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.4, ease: EASE }}
                  >
                    <motion.img
                      key={activeItem.file}
                      layoutId={useSharedLayout ? `spotlight-img-${activeItem.file}` : undefined}
                      src={activeItem.src}
                      alt={activeItem.alt}
                      className="storage-spotlight-lightbox__img"
                      initial={
                        reduceMotion || !useSharedLayout
                          ? { opacity: 0, scale: 0.96 }
                          : { opacity: 0.6 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      exit={
                        reduceMotion || !useSharedLayout
                          ? { opacity: 0, scale: 0.96 }
                          : undefined
                      }
                      transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: EASE }}
                    />
                    <motion.p
                      key={`${activeItem.file}-caption`}
                      className="storage-spotlight-lightbox__caption"
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
                      transition={{ duration: 0.35, delay: reduceMotion ? 0 : 0.05, ease: EASE }}
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
            </AnimatePresence>,
            document.body,
          )
        : null}
    </section>
    </LayoutGroup>
  )
}
