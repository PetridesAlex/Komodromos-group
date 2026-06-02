import { useCallback, useRef, useSyncExternalStore } from 'react'
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'motion/react'
import { STORAGE_PARALLAX_SLIDES } from '../data/storagePageImages'

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

function ParallaxCard({
  title,
  image,
  layout,
  mx,
  my,
  reducedMotion,
  index,
}: {
  title: string
  image: string
  layout: ParallaxLayout
  mx: MotionValue<number>
  my: MotionValue<number>
  reducedMotion: boolean
  index: number
}) {
  const depth = layout.depth
  const tx = useTransform(mx, (v) => (reducedMotion ? 0 : v * PARALLAX_PX * depth))
  const ty = useTransform(my, (v) => (reducedMotion ? 0 : v * PARALLAX_PX * depth))
  const rz = useTransform(mx, (v) =>
    reducedMotion ? layout.rotate : layout.rotate + v * ROTATE_MOUSE * depth,
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
          alt=""
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
  const reducedMotion = usePrefersReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smoothMx = useSpring(mx, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)
  const smoothMy = useSpring(my, reducedMotion ? { stiffness: 500, damping: 100 } : SPRING)

  const onMove = useCallback(
    (e: React.PointerEvent) => {
      if (reducedMotion) return
      const el = stageRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.width < 1 || r.height < 1) return
      mx.set((e.clientX - r.left) / r.width - 0.5)
      my.set((e.clientY - r.top) / r.height - 0.5)
    },
    [mx, my, reducedMotion],
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <div className="storage-parallax">
      <div className="storage-parallax__frame">
        <div className="storage-parallax__accent" aria-hidden />
        <div
          ref={stageRef}
          className="storage-parallax__stage"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          aria-label="Storage2Rent facility gallery. Scroll horizontally for all photos; move the pointer for parallax."
        >
          <div className="storage-parallax__fog" aria-hidden />
          <div className="storage-parallax__track">
            {STORAGE_PARALLAX_SLIDES.map((slide, i) => (
              <ParallaxCard
                key={slide.image}
                title={slide.title}
                image={slide.image}
                layout={PARALLAX_LAYOUT[i % PARALLAX_LAYOUT.length]!}
                mx={smoothMx}
                my={smoothMy}
                reducedMotion={reducedMotion}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
