import { useRef, useState } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'motion/react'

type LogoItem = {
  name: string
  img: string
}

const logosRowOne: LogoItem[] = [
  { name: 'Komodromos', img: '/images/services/companie-services-cover/cards-logos-services/main-logo.png' },
  { name: 'Astreal Developers', img: '/images/services/companie-services-cover/cards-logos-services/astreal-developers.png' },
  { name: 'Global Wings', img: '/images/services/companie-services-cover/cards-logos-services/global-wings.png' },
  { name: 'Luxury Sky', img: '/images/services/companie-services-cover/cards-logos-services/luxury-sky.png' },
  { name: 'Blue Sky', img: '/images/services/companie-services-cover/cards-logos-services/blue-sky.png' },
  { name: 'Jan Chapelle', img: '/images/services/companie-services-cover/cards-logos-services/jan-chapelle.png' },
]

const logosRowTwo: LogoItem[] = [
  { name: 'Law', img: '/images/services/companie-services-cover/cards-logos-services/law-logo.png' },
  { name: 'The Circle Theory', img: '/images/services/companie-services-cover/cards-logos-services/the-circle-theory.png' },
  { name: 'Storage to Rent', img: '/images/services/companie-services-cover/cards-logos-services/storage-to-rent.png' },
  { name: 'Wedding Sky', img: '/images/services/companie-services-cover/cards-logos-services/wedding-sky.png' },
  { name: 'Business Consulting', img: '/images/services/companie-services-cover/cards-logos-services/komodromos-businness-consulting.png' },
  { name: 'Tax Nex', img: '/images/services/companie-services-cover/cards-logos-services/tax-nex.png' },
]

function Marquee({
  items,
  direction = 'left',
  speed = 1,
}: {
  items: LogoItem[]
  direction?: 'left' | 'right'
  speed?: number
}) {
  const [isHovered, setIsHovered] = useState(false)
  const xPercent = useMotionValue(direction === 'right' ? -50 : 0)
  const x = useTransform(xPercent, (v) => `${v}%`)
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((_, delta) => {
    if (isHovered) return

    const moveBy = (speed * delta) / 1000
    if (direction === 'left') {
      const next = xPercent.get() - moveBy
      xPercent.set(next <= -50 ? 0 : next)
    } else {
      const next = xPercent.get() + moveBy
      xPercent.set(next >= 0 ? -50 : next)
    }
  })

  const itemsLoop = [...items, ...items]

  return (
    <div
      className="flex w-full overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-8 pr-8 sm:gap-14 sm:pr-14"
        style={{ x }}
      >
        {itemsLoop.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="group flex h-11 items-center justify-center opacity-45 transition-opacity duration-300 hover:opacity-95"
            title={logo.name}
          >
            <img
              src={logo.img}
              alt={logo.name}
              className="h-7 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-8 pr-8 sm:gap-14 sm:pr-14"
        style={{ x }}
        aria-hidden
      >
        {itemsLoop.map((logo, index) => (
          <div key={`${logo.name}-dup-${index}`} className="flex h-11 items-center justify-center opacity-45">
            <img src={logo.img} alt="" className="h-7 w-auto object-contain grayscale" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function TaxPremiumSocialProof() {
  return (
    <section className="bg-[radial-gradient(circle_at_18%_10%,#1a2a45_0%,transparent_36%),radial-gradient(circle_at_82%_0%,#243a63_0%,transparent_34%),linear-gradient(180deg,#04060b_0%,#080d16_58%,#070b14_100%)] pt-0 pb-16 text-white sm:pb-20">
      <div className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_50%_-30%,rgba(66,102,166,0.42),transparent_48%),linear-gradient(180deg,#0b111b_0%,#080d16_100%)] px-4 py-10 sm:px-8 sm:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_100%,rgba(70,112,184,0.22),transparent_52%),radial-gradient(circle_at_80%_0%,rgba(112,150,230,0.18),transparent_45%)]" />
        <p className="relative mb-10 text-center text-sm font-semibold uppercase tracking-[0.26em] text-[#e0ebff] sm:mb-12 sm:text-base">
          Connecting trusted companies with their customers
        </p>

        <div className="relative flex flex-col gap-10 sm:gap-12">
          <Marquee items={logosRowOne} direction="left" speed={1.4} />
          <Marquee items={logosRowTwo} direction="right" speed={1.4} />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[34%] bg-gradient-to-r from-[#090e17] via-[#090e17e6] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[34%] bg-gradient-to-l from-[#090e17] via-[#090e17e6] to-transparent" />
        </div>
      </div>
    </section>
  )
}
