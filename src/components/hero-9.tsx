import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ChevronDown, Circle } from 'lucide-react'

const HR_HERO_CONTENT_TARGET = 'service-programme-intro-title'
const EASE = [0.22, 1, 0.36, 1] as const

const MotionLink = motion(Link)

const ctaContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.62,
    },
  },
} as const

const ctaItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE },
  },
} as const

type BlurLineProps = {
  text: string
  delay?: number
  reducedMotion: boolean
  className?: string
  singleLine?: boolean
  wordClassName?: string
}

function BlurLine({
  text,
  delay = 0,
  reducedMotion,
  className = '',
  singleLine = false,
  wordClassName = '',
}: BlurLineProps) {
  const words = text.split(' ')

  if (reducedMotion) {
    return (
      <span className={`${className}${singleLine ? ' hr-hero-9__blur-line--single' : ''}`}>
        {text}
      </span>
    )
  }

  return (
    <span className={`${className}${singleLine ? ' hr-hero-9__blur-line--single' : ''}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={`${word}-${wordIndex}`}
          className={
            wordClassName ||
            (singleLine
              ? 'hr-hero-9__title-word'
              : 'mr-[0.28em] inline-block last:mr-0')
          }
          initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.55,
            delay: delay + wordIndex * 0.11,
            ease: EASE,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

function scrollToProgramme() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const target =
    document.getElementById(HR_HERO_CONTENT_TARGET) ??
    document.getElementById('service-default-content')

  target?.scrollIntoView({
    behavior: reduce ? 'auto' : 'smooth',
    block: 'start',
  })
}

export type Hero9Props = {
  eyebrow: string
  imageSrc: string
  line1: string
  line2: string
  tagline: string
  serviceInterest: string
  titleLayout?: 'stacked' | 'inline'
}

export function Hero9({
  eyebrow,
  imageSrc,
  line1,
  line2,
  tagline,
  serviceInterest,
  titleLayout = 'stacked',
}: Hero9Props) {
  const reducedMotion = useReducedMotion()

  return (
    <section
      className="hr-hero-9 relative min-h-[min(100svh,920px)] w-full overflow-hidden bg-[#05070a]"
      aria-labelledby="hr-hero-9-title"
    >
      <motion.img
        className="hr-hero-9__bg absolute inset-0 h-full w-full object-cover object-center"
        src={imageSrc}
        alt=""
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        aria-hidden
        initial={reducedMotion ? false : { scale: 1.1 }}
        animate={reducedMotion ? undefined : { scale: [1.1, 1.04, 1.1] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 18, repeat: Infinity, ease: 'easeInOut' }
        }
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" aria-hidden />
      <div className="absolute inset-0 bg-black/15" aria-hidden />

      <div className="relative z-10 flex min-h-[min(100svh,920px)] flex-col justify-end px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
        <div className="mx-auto w-full max-w-[1400px]">
          <motion.p
            className="hr-hero-9__eyebrow mb-4 sm:mb-5"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: reducedMotion ? 0 : 0.05 }}
          >
            {eyebrow}
          </motion.p>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="flex w-full max-w-4xl flex-col items-start">
              <h1 id="hr-hero-9-title" className="hr-hero-9__title" aria-label="Human Resources Management">
                {titleLayout === 'inline' && line2.trim() ? (
                  <span className="hr-hero-9__title-inline">
                    <span className="hr-hero-9__title-line hr-hero-9__title-line--primary hr-hero-9__title-line--inline-primary">
                      <BlurLine
                        text={line1}
                        delay={0.12}
                        reducedMotion={!!reducedMotion}
                        singleLine
                        wordClassName="hr-hero-9__title-word hr-hero-9__title-word--primary"
                      />
                    </span>
                    <span className="hr-hero-9__title-line hr-hero-9__title-line--accent hr-hero-9__title-line--inline-accent">
                      <BlurLine
                        text={line2}
                        delay={0.34}
                        reducedMotion={!!reducedMotion}
                        wordClassName="hr-hero-9__title-word hr-hero-9__title-word--accent"
                      />
                    </span>
                  </span>
                ) : (
                  <>
                    <span className="hr-hero-9__title-line hr-hero-9__title-line--primary">
                      <BlurLine
                        text={line1}
                        delay={0.12}
                        reducedMotion={!!reducedMotion}
                        singleLine={!!line2.trim()}
                      />
                    </span>
                    {line2.trim() ? (
                      <span className="hr-hero-9__title-line hr-hero-9__title-line--accent">
                        <BlurLine text={line2} delay={0.38} reducedMotion={!!reducedMotion} />
                      </span>
                    ) : null}
                  </>
                )}
              </h1>

              <motion.button
                type="button"
                className="hr-hero-9__scroll mt-6 sm:mt-8"
                initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: reducedMotion ? 0 : 0.72 }}
                whileHover={reducedMotion ? undefined : { scale: 1.04 }}
                whileTap={reducedMotion ? undefined : { scale: 0.97 }}
                onClick={scrollToProgramme}
                aria-label="Scroll to The Circle programme overview"
              >
                <span className="hr-hero-9__scroll-dot" aria-hidden />
                Scroll
                <motion.span
                  animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
                  transition={
                    reducedMotion
                      ? undefined
                      : { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }
                  }
                  className="inline-flex"
                  aria-hidden
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : 0.3 }}
              className="flex flex-col items-start gap-4 lg:items-end lg:gap-5"
            >
              <motion.p
                className="hr-hero-9__tagline"
                initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.65, delay: reducedMotion ? 0 : 0.48, ease: EASE }}
              >
                {tagline}
              </motion.p>

              <motion.div
                className="hr-hero-9__actions"
                variants={reducedMotion ? undefined : ctaContainerVariants}
                initial={reducedMotion ? false : 'hidden'}
                animate="visible"
              >
                <motion.button
                  type="button"
                  onClick={scrollToProgramme}
                  className="hr-hero-9__cta hr-hero-9__cta--primary"
                  variants={reducedMotion ? undefined : ctaItemVariants}
                  whileHover={reducedMotion ? undefined : { scale: 1.04, y: -3 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <motion.span
                    className="hr-hero-9__cta-icon"
                    aria-hidden
                    animate={reducedMotion ? undefined : { rotate: [0, 8, 0] }}
                    transition={
                      reducedMotion
                        ? undefined
                        : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                    }
                  >
                    <Circle strokeWidth={1.75} />
                  </motion.span>
                  <span className="hr-hero-9__cta-copy">
                    <span className="hr-hero-9__cta-label">Discover</span>
                    <span className="hr-hero-9__cta-title">The Circle™</span>
                  </span>
                </motion.button>

                <MotionLink
                  to="/contact"
                  state={{ serviceInterest }}
                  className="hr-hero-9__cta hr-hero-9__cta--secondary"
                  variants={reducedMotion ? undefined : ctaItemVariants}
                  whileHover={reducedMotion ? undefined : { scale: 1.04, y: -3 }}
                  whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                >
                  <motion.span
                    className="hr-hero-9__cta-icon"
                    aria-hidden
                    animate={reducedMotion ? undefined : { x: [0, 3, 0] }}
                    transition={
                      reducedMotion
                        ? undefined
                        : { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                    }
                  >
                    <ArrowRight strokeWidth={2} />
                  </motion.span>
                  <span className="hr-hero-9__cta-copy">
                    <span className="hr-hero-9__cta-label">Get in touch</span>
                    <span className="hr-hero-9__cta-title">Request details</span>
                  </span>
                </MotionLink>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
