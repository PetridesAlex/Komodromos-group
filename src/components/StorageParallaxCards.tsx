import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { STORAGE_PARALLAX_SLIDES } from '../data/storagePageImages'
import { getStorageGalleryImageAlt } from '../data/seo/storageGalleryImageAlts'

/** Horizontal strip: parallax depth + subtle tilt (no overlapping cards) */
type ParallaxLayout = {
  depth: number
  rotate: number
}

const PARALLAX_LAYOUT: ParallaxLayout[] = [
  { depth: 0.52, rotate: -1.4 },
  { depth: 0.62, rotate: 1.1 },
  { depth: 0.44, rotate: -0.6 },
  { depth: 0.72, rotate: 1.3 },
  { depth: 0.5, rotate: -1.0 },
  { depth: 0.58, rotate: 0.8 },
]

const SPRING = { stiffness: 220, damping: 28, mass: 0.6 }
const PARALLAX_PX = 64
const ROTATE_MOUSE = 6
const TOTAL_SLIDES = STORAGE_PARALLAX_SLIDES.length

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
}

function subscribeMobileParallax(cb: () => void) {
  const mq = window.matchMedia('(max-width: 640px)')
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}

function getMobileParallaxSnapshot() {
  return window.matchMedia('(max-width: 640px)').matches
}

function getMobileParallaxServerSnapshot() {
  return false
}

function useMobileParallax() {
  return useSyncExternalStore(
    subscribeMobileParallax,
    getMobileParallaxSnapshot,
    getMobileParallaxServerSnapshot,
  )
}

function formatSlideIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

function ParallaxCard({
  title,
  image,
  layout,
  mx,
  my,
  reducedMotion,
  isMobile,
  index,
}: {
  title: string
  image: string
  layout: ParallaxLayout
  mx: MotionValue<number>
  my: MotionValue<number>
  reducedMotion: boolean
  isMobile: boolean
  index: number
}) {
  const depth = layout.depth
  const disableMotion = reducedMotion || isMobile
  const tx = useTransform(mx, (v) => (disableMotion ? 0 : v * PARALLAX_PX * depth))
  const ty = useTransform(my, (v) => (disableMotion ? 0 : v * PARALLAX_PX * depth))
  const rz = useTransform(mx, (v) =>
    disableMotion ? 0 : layout.rotate + v * ROTATE_MOUSE * depth,
  )

  return (
    <motion.article
      className="storage-parallax__card"
      style={{
        x: tx,
        y: ty,
        rotate: rz,
      }}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.48), ease: [0.16, 1, 0.3, 1] }}
      aria-label={title}
    >
      <div className="storage-parallax__card-inner">
        <img
          src={image}
          alt={getStorageGalleryImageAlt(image, title)}
          className="storage-parallax__card-img"
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
        />
        <div className="storage-parallax__card-scrim" aria-hidden />
        <p className="storage-parallax__card-title">{title}</p>
      </div>
    </motion.article>
  )
}

export default function StorageParallaxCards() {
  const stageRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const isMobile = useMobileParallax()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smoothMx = useSpring(mx, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)
  const smoothMy = useSpring(my, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)
  const [scrollState, setScrollState] = useState({ atStart: true, atEnd: false, progress: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [hasScrolled, setHasScrolled] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = Math.max(0, scrollWidth - clientWidth)
    if (scrollLeft > 12) setHasScrolled(true)

    const card = el.querySelector<HTMLElement>('.storage-parallax__card')
    const gap = parseFloat(getComputedStyle(el).gap || '0')
    const step = card ? card.offsetWidth + gap : 1
    const nextIndex = step > 0 ? Math.min(TOTAL_SLIDES - 1, Math.round(scrollLeft / step)) : 0

    setActiveIndex(nextIndex)
    setScrollState({
      atStart: scrollLeft < 8,
      atEnd: scrollLeft >= max - 8,
      progress: max > 0 ? scrollLeft / max : 0,
    })
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [updateScrollState])

  const scrollTrack = useCallback(
    (direction: 'prev' | 'next') => {
      const el = trackRef.current
      if (!el) return
      const card = el.querySelector<HTMLElement>('.storage-parallax__card')
      const gap = parseFloat(getComputedStyle(el).gap || '0')
      const step = card
        ? card.offsetWidth + gap
        : el.clientWidth * (isMobile ? 1 : 0.92)
      el.scrollBy({
        left: direction === 'next' ? step : -step,
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    },
    [isMobile, reducedMotion],
  )

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return

      const max = Math.max(0, el.scrollWidth - el.clientWidth)
      if (max <= 0) return

      const atStart = el.scrollLeft <= 0
      const atEnd = el.scrollLeft >= max - 1
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      if ((scrollingDown && atEnd) || (scrollingUp && atStart)) return

      e.preventDefault()
      el.scrollLeft += e.deltaY * 2.75
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reducedMotion || isMobile) return
      const el = stageRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.width < 1 || r.height < 1) return
      mx.set((e.clientX - r.left) / r.width - 0.5)
      my.set((e.clientY - r.top) / r.height - 0.5)
    },
    [mx, my, reducedMotion, isMobile],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  const canScroll = !(scrollState.atStart && scrollState.atEnd)

  return (
    <div className="storage-parallax">
      <div className="storage-parallax__frame">
        <div className="storage-parallax__accent" aria-hidden />
        <div className="storage-parallax__ambient" aria-hidden />
        <div
          ref={stageRef}
          className={[
            'storage-parallax__stage',
            isMobile ? 'storage-parallax__stage--mobile' : '',
            scrollState.atStart ? 'is-at-start' : '',
            scrollState.atEnd ? 'is-at-end' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          aria-label={
            isMobile
              ? 'Storage2Rent facility gallery. Swipe horizontally for all photos.'
              : 'Storage2Rent facility gallery. Scroll horizontally for all photos; move the pointer for parallax.'
          }
        >
          <div className="storage-parallax__edge storage-parallax__edge--left" aria-hidden />
          <div className="storage-parallax__edge storage-parallax__edge--right" aria-hidden />
          <div className="storage-parallax__fog" aria-hidden />

          {!hasScrolled && !scrollState.atEnd ? (
            <div
              className={[
                'storage-parallax__scroll-hint',
                isMobile ? 'storage-parallax__scroll-hint--swipe' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-hidden
            >
              <span className="storage-parallax__scroll-hint-text">
                {isMobile ? 'Swipe' : 'Scroll to explore'}
              </span>
              {isMobile ? (
                <span className="storage-parallax__scroll-hint-swipe" aria-hidden>
                  <ChevronLeft size={14} strokeWidth={2.25} />
                  <ChevronRight size={14} strokeWidth={2.25} />
                </span>
              ) : (
                <ChevronRight className="storage-parallax__scroll-hint-icon" size={16} strokeWidth={2.25} />
              )}
            </div>
          ) : null}

          <div
            ref={trackRef}
            className="storage-parallax__track"
            role="region"
            aria-label="Facility photo gallery"
            tabIndex={0}
          >
            {STORAGE_PARALLAX_SLIDES.map((slide, i) => (
              <ParallaxCard
                key={slide.image}
                title={slide.title}
                image={slide.image}
                layout={PARALLAX_LAYOUT[i % PARALLAX_LAYOUT.length]!}
                mx={smoothMx}
                my={smoothMy}
                reducedMotion={reducedMotion}
                isMobile={isMobile}
                index={i}
              />
            ))}
          </div>

          {canScroll ? (
            <>
              <div className="storage-parallax__rail storage-parallax__rail--prev">
                <button
                  type="button"
                  className={[
                    'storage-parallax__nav',
                    'storage-parallax__nav--prev',
                    scrollState.atStart ? 'is-disabled' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => scrollTrack('prev')}
                  disabled={scrollState.atStart}
                  aria-label="Previous photos"
                >
                  <span className="storage-parallax__nav-mark" aria-hidden />
                  <ChevronLeft size={22} strokeWidth={1.75} aria-hidden />
                </button>
              </div>
              <div className="storage-parallax__rail storage-parallax__rail--next">
                <button
                  type="button"
                  className={[
                    'storage-parallax__nav',
                    'storage-parallax__nav--next',
                    scrollState.atEnd ? 'is-disabled' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => scrollTrack('next')}
                  disabled={scrollState.atEnd}
                  aria-label="Next photos"
                >
                  <span className="storage-parallax__nav-mark" aria-hidden />
                  <ChevronRight size={22} strokeWidth={1.75} aria-hidden />
                </button>
              </div>
            </>
          ) : null}

          <div className="storage-parallax__footer" aria-hidden={!canScroll}>
            <p className="storage-parallax__counter">
              <span className="storage-parallax__counter-current">{formatSlideIndex(activeIndex)}</span>
              <span className="storage-parallax__counter-sep">/</span>
              <span className="storage-parallax__counter-total">{String(TOTAL_SLIDES).padStart(2, '0')}</span>
            </p>
            <div className="storage-parallax__progress">
              <div
                className="storage-parallax__progress-fill"
                style={{ transform: `scaleX(${scrollState.progress})` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
