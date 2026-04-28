import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

/**
 * React Bits “hero-10” layout: centered copy, pill CTA, three images on a
 * fanned base with a large circular “horizon” disc behind the row.
 * (Structure matches the published block: relative row + % top + huge rounded-full)
 */
const cards = [
  {
    rotate: -12,
    translateY: 40,
    src: '/images/services/storage/local-easy-to-find.webp',
    alt: 'Storage facility—easy to find, convenient access',
  },
  {
    rotate: 0,
    translateY: 0,
    src: '/images/services/storage/storage-flexible.webp',
    alt: 'Flexible, clean self storage units',
  },
  {
    rotate: 12,
    translateY: 40,
    src: '/images/services/storage/personal-friendly-proffesional.webp',
    alt: 'Personal storage—professional, friendly service',
  },
] as const

type Hero10Props = {
  brandPrimary: string
  brandRegion: string
  contactState: { serviceInterest: string }
}

export function Hero10({ brandPrimary, brandRegion, contactState }: Hero10Props) {
  return (
    <section
      id="storage-hero"
      className="relative w-full scroll-mt-24 overflow-hidden bg-black py-12 text-white sm:px-4 sm:py-16 md:px-6 md:py-20 lg:px-8"
      aria-labelledby="storage-hero-10-title"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-0">
        <div className="mb-10 flex flex-col items-center text-center sm:mb-20 lg:mb-24">
          <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-500 sm:mb-4">
            {brandPrimary} · {brandRegion}
          </p>
          <motion.h1
            id="storage-hero-10-title"
            className="max-w-2xl text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build something extraordinary today
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-base text-neutral-400 sm:mt-6 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your space with secure self storage—designed for homes, businesses, and
            every season in between. Part of Komodromos Group.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              state={{
                ...contactState,
                contactPrefill: { service: `${brandPrimary} — Get a quote` },
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200 sm:px-8 sm:py-4 sm:text-base"
            >
              Get started now
              <ArrowRight className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Disc + fanned images — same stacking as reference (disc z-10, row z-20) */}
        <div className="relative w-full">
          <div
            className="pointer-events-none absolute left-1/2 top-[80%] z-10 aspect-square w-[250%] max-w-none -translate-x-1/2 rounded-full bg-black shadow-2xl shadow-zinc-950/80 sm:top-[40%] sm:w-[200%]"
            aria-hidden
          />

          <div className="relative z-20 flex flex-row flex-nowrap items-end justify-center gap-0 -space-x-6 sm:-space-x-12 lg:-space-x-16">
            {cards.map((card, index) => (
              <motion.div
                key={card.src}
                className="hero10-fan-card relative h-28 w-28 shrink-0 grow-0 origin-bottom overflow-hidden rounded-xl sm:h-64 sm:w-72 sm:rounded-3xl lg:h-72 lg:w-80"
                initial={{ opacity: 0, y: 80, rotate: 0 }}
                animate={{
                  opacity: 1,
                  y: card.translateY,
                  rotate: card.rotate,
                }}
                whileHover={{
                  y: card.translateY - 12,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + index * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="h-full w-full object-cover"
                  width={600}
                  height={600}
                  loading="eager"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
