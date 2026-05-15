import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react'
import {
  Building2,
  ClipboardCheck,
  Compass,
  Hammer,
  HardHat,
  KanbanSquare,
  PenLine,
  type LucideIcon,
} from 'lucide-react'
import type { AstrealServiceBlock } from '../data/astrealOurServicesContent'

const EASE = [0.22, 1, 0.36, 1] as const

const ICONS: Record<string, LucideIcon> = {
  build: Hammer,
  design: PenLine,
  strategy: Compass,
  'real-estate-advisory': Building2,
  'property-valuation': ClipboardCheck,
  development: HardHat,
  'project-management': KanbanSquare,
}

function TimelineNode({
  progress,
  at,
  Icon,
  reduceMotion,
}: {
  progress: MotionValue<number>
  at: number
  Icon: LucideIcon
  reduceMotion: boolean
}) {
  const start = Math.max(0, at - 0.1)
  const mid = Math.min(1, at + 0.02)
  const scale = useTransform(progress, [start, mid], [0.65, 1])
  const opacity = useTransform(progress, [start, mid], [0.3, 1])
  const ringOpacity = useTransform(progress, [start, mid], [0, 1])
  const [reached, setReached] = useState(reduceMotion)

  useMotionValueEvent(progress, 'change', (v) => {
    if (!reduceMotion) setReached(v >= mid - 0.001)
  })

  if (reduceMotion) {
    return (
      <div className="astreal-services-timeline__node">
        <span className="astreal-services-timeline__node-core astreal-services-timeline__node-core--active">
          <Icon className="astreal-services-timeline__node-icon" aria-hidden />
        </span>
      </div>
    )
  }

  return (
    <motion.div className="astreal-services-timeline__node">
      <span className="astreal-services-timeline__node-backdrop" aria-hidden />
      <motion.span
        style={{ opacity: ringOpacity }}
        className="astreal-services-timeline__node-ring"
        aria-hidden
      />
      {reached ? (
        <motion.span
          aria-hidden
          className="astreal-services-timeline__node-pulse"
          initial={{ scale: 1, opacity: 0.45 }}
          animate={{ scale: 1.85, opacity: 0 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
        />
      ) : null}
      <motion.span
        style={{ scale, opacity }}
        animate={
          reached
            ? {
                backgroundColor: 'rgba(48, 132, 238, 0.98)',
                color: 'rgba(236, 248, 255, 0.98)',
                borderColor: 'rgba(164, 218, 255, 0.85)',
              }
            : {}
        }
        transition={{ duration: 0.35 }}
        className="astreal-services-timeline__node-core"
      >
        <Icon className="astreal-services-timeline__node-icon" aria-hidden />
      </motion.span>
    </motion.div>
  )
}

function ServiceCardImage({ pillar }: { pillar: AstrealServiceBlock }) {
  return (
    <figure className="astreal-services-page__card-figure">
      <img
        src={pillar.image}
        alt={pillar.imageAlt}
        className="astreal-services-page__card-img"
        width={800}
        height={450}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

function TimelineCard({
  pillar,
  side,
  reduceMotion,
}: {
  pillar: AstrealServiceBlock
  side: 'left' | 'right'
  reduceMotion: boolean
}) {
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: true, amount: 0.25, margin: '-12% 0px' },
        transition: { duration: 0.62, ease: EASE },
      }

  return (
    <motion.article
      id={pillar.id}
      className={`astreal-services-page__card astreal-services-timeline__card astreal-services-timeline__card--${side}${
        pillar.id === 'project-management' ? ' astreal-services-timeline__card--large' : ''
      }`}
      {...motionProps}
    >
      <h2 className="astreal-services-page__card-title">{pillar.title}</h2>
      <ServiceCardImage pillar={pillar} />
      <div className="astreal-services-page__card-body">
        {pillar.paragraphs.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>
      <p className="astreal-services-page__card-tagline">{pillar.tagline}</p>
    </motion.article>
  )
}

type Props = {
  pillars: readonly AstrealServiceBlock[]
}

export default function AstrealServicesTimeline({ pillars }: Props) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const firstNodeRef = useRef<HTMLDivElement>(null)
  const lastNodeRef = useRef<HTMLDivElement>(null)
  const scrollYProgress = useMotionValue(0)
  const [lineBounds, setLineBounds] = useState({ top: 0, height: 0 })

  const stepCount = Math.max(1, pillars.length - 1)

  useEffect(() => {
    if (reduceMotion) return

    let raf = 0

    const tick = () => {
      const container = ref.current
      const first = firstNodeRef.current
      const last = lastNodeRef.current
      if (container && first && last) {
        const win = container.ownerDocument.defaultView ?? window
        const vh = win.innerHeight || container.ownerDocument.documentElement.clientHeight
        const containerRect = container.getBoundingClientRect()
        const firstRect = first.getBoundingClientRect()
        const lastRect = last.getBoundingClientRect()

        const firstCenterY = firstRect.top + firstRect.height / 2
        const lastCenterY = lastRect.top + lastRect.height / 2
        const activate = vh * 0.55
        const span = lastCenterY - firstCenterY

        if (span > 0) {
          const p = (activate - firstCenterY) / span
          scrollYProgress.set(Math.min(1, Math.max(0, p)))
        }

        const top = firstCenterY - containerRect.top
        const height = lastCenterY - firstCenterY
        setLineBounds((prev) =>
          prev.top === top && prev.height === height ? prev : { top, height },
        )
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [scrollYProgress, reduceMotion])

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  if (reduceMotion) {
    return (
      <div className="astreal-services-timeline astreal-services-timeline--static">
        {pillars.map((pillar) => {
          const Icon = ICONS[pillar.id] ?? Building2
          return (
            <article
              key={pillar.id}
              id={pillar.id}
              className={`astreal-services-page__card${
                pillar.id === 'project-management' ? ' astreal-services-timeline__card--large' : ''
              }`}
            >
              <div className="astreal-services-timeline__static-icon" aria-hidden>
                <Icon className="astreal-services-timeline__node-icon" />
              </div>
              <h2 className="astreal-services-page__card-title">{pillar.title}</h2>
              <ServiceCardImage pillar={pillar} />
              <div className="astreal-services-page__card-body">
                {pillar.paragraphs.map((para) => (
                  <p key={para.slice(0, 40)}>{para}</p>
                ))}
              </div>
              <p className="astreal-services-page__card-tagline">{pillar.tagline}</p>
            </article>
          )
        })}
      </div>
    )
  }

  return (
    <div ref={ref} className="astreal-services-timeline">
      <div
        aria-hidden
        style={{ top: lineBounds.top, height: lineBounds.height }}
        className="astreal-services-timeline__line astreal-services-timeline__line--track"
      />
      <motion.div
        aria-hidden
        style={{
          top: lineBounds.top,
          height: lineBounds.height,
          scaleY: lineScale,
          transformOrigin: 'top',
        }}
        className="astreal-services-timeline__line astreal-services-timeline__line--fill"
      />

      <div className="astreal-services-timeline__steps">
        {pillars.map((pillar, i) => {
          const side: 'left' | 'right' = i % 2 === 0 ? 'left' : 'right'
          const at = i / stepCount
          const Icon = ICONS[pillar.id] ?? Building2
          const isFirst = i === 0
          const isLast = i === pillars.length - 1

          return (
            <div key={pillar.id} className="astreal-services-timeline__step">
              <div className="astreal-services-timeline__card-slot astreal-services-timeline__card-slot--left">
                {side === 'left' ? (
                  <TimelineCard pillar={pillar} side={side} reduceMotion={false} />
                ) : null}
              </div>
              <div
                ref={isFirst ? firstNodeRef : isLast ? lastNodeRef : undefined}
                className="astreal-services-timeline__node-wrap"
              >
                <TimelineNode
                  progress={scrollYProgress}
                  at={at}
                  Icon={Icon}
                  reduceMotion={false}
                />
              </div>
              <div className="astreal-services-timeline__card-slot astreal-services-timeline__card-slot--right">
                {side === 'right' ? (
                  <TimelineCard pillar={pillar} side={side} reduceMotion={false} />
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
