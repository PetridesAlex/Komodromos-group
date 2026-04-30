import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

type MediaImage = {
  url: string
  aspectRatio: number
}

type HeadlineRowProps = {
  leftText: string
  rightText: string
  images: MediaImage[]
  alt: string
  isInView: boolean
  delay?: number
}

const taxHeroImages: MediaImage[] = [
  { url: '/images/services/tax-services/tax-hero.webp', aspectRatio: 1.8 },
  { url: '/images/services/tax-services/tax-thumb.webp', aspectRatio: 1.0 },
  { url: '/images/services/tax-services/tax-hero.webp', aspectRatio: 1.8 },
  { url: '/images/services/tax-services/tax-thumb.webp', aspectRatio: 1.0 },
]

function HeadlineRow({
  leftText,
  rightText,
  images,
  alt,
  isInView,
  delay = 0,
}: HeadlineRowProps) {
  const premiumHeadlineFont =
    "[font-family:'Canela','Playfair_Display','Cormorant_Garamond',Georgia,'Times_New_Roman',serif]"
  const [isHovered, setIsHovered] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const shouldAnimate = isInView || isHovered

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3800)
    return () => window.clearInterval(interval)
  }, [images.length])

  const currentImage = images[currentImageIndex]
  const baseHeight = 78
  const targetWidth = shouldAnimate ? baseHeight * currentImage.aspectRatio : 0

  const hasRightText = rightText.trim().length > 0

  return (
    <>
      <motion.h1
        className={`sm:hidden text-3xl font-medium leading-[1.04] tracking-[0.01em] text-[#0d1117] uppercase ${premiumHeadlineFont}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay }}
      >
        {hasRightText ? `${leftText} ${rightText}` : leftText}
      </motion.h1>

      {hasRightText ? (
        <div
          className="hidden sm:flex items-center justify-center gap-x-3 lg:gap-x-4 cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.span
            layout
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-[0.01em] text-[#0d1117] uppercase ${premiumHeadlineFont}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay }}
          >
            {leftText}
          </motion.span>

          <motion.div
            layout
            className="h-[58px] md:h-[68px] lg:h-[78px] overflow-hidden rounded-lg border border-[#d5dde8] shadow-[0_12px_22px_rgba(15,23,42,0.14)]"
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: targetWidth,
              opacity: shouldAnimate ? 1 : 0,
            }}
            transition={{
              width: { duration: 0.48, type: 'spring', bounce: 0 },
              opacity: { duration: 0.28 },
            }}
          >
            <img src={currentImage.url} alt={alt} className="h-full w-full object-cover" />
          </motion.div>

          <motion.span
            layout
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-[0.01em] text-[#0d1117] uppercase ${premiumHeadlineFont}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: delay + 0.08 }}
          >
            {rightText}
          </motion.span>
        </div>
      ) : (
        <motion.h1
          className={`hidden sm:block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-none tracking-[0.01em] text-[#0d1117] uppercase ${premiumHeadlineFont}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay }}
        >
          {leftText}
        </motion.h1>
      )}
    </>
  )
}

export default function TaxPremiumHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setHasAnimated(true), 120)
    return () => window.clearTimeout(timer)
  }, [])

  const shouldShowMedia = isInView || hasAnimated

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 sm:py-16"
    >
      <div className="container relative z-10">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center space-y-7 sm:space-y-9 lg:space-y-12">
            <div className="w-full space-y-2 text-center">
              <HeadlineRow
                leftText="The right way"
                rightText="to submit your"
                images={taxHeroImages}
                alt="Tax and accounting services"
                isInView={shouldShowMedia}
                delay={0.06}
              />
              <HeadlineRow
                leftText="2024 Cyprus"
                rightText="Tax Form"
                images={taxHeroImages}
                alt="Cyprus tax form preparation"
                isInView={shouldShowMedia}
                delay={0.14}
              />
            </div>

            <motion.p
              className="max-w-2xl text-center text-sm leading-relaxed text-[#5d6b7f] sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              Whether you file on your own or with a tax pro, your tax form is checked by tax
              professionals ensuring correct submission.
            </motion.p>

            <motion.div
              className="relative w-full overflow-hidden rounded-xl border border-[#d9e2ef] bg-[#f5f8fc] shadow-[0_32px_56px_-34px_rgba(15,23,42,0.4)] sm:rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-[#0f172a33] to-transparent" />
              <div className="aspect-[16/9] w-full bg-[#141922] sm:aspect-[21/9]">
                <img
                  src="/images/services/tax-services/tax-thumb.webp"
                  alt="Professional tax support"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#f8fbffeb] to-transparent" />
              <div className="absolute left-4 top-4 z-20 rounded-full border border-[#c9d6e8] bg-white/80 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2937] backdrop-blur-sm sm:left-5 sm:top-5">
                Tax & Accounting Services
              </div>
            </motion.div>
          </div>
          <motion.div
            className="mx-auto mt-6 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-[#d4deeb] to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  )
}
