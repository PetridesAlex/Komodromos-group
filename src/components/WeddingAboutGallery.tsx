import { useEffect, useState } from 'react'
import WeddingLazyImage from './WeddingLazyImage'

const SLIDE_INTERVAL_MS = 3800

const WEDDING_ABOUT_SLIDES = [
  {
    src: '/images/services/wedding-highlights/about-us/luxury-wedding-sparkler-sendoff-cyprus.webp',
    alt: 'Guests holding sparklers around the couple at a luxury night wedding celebration in Cyprus — Wedding Sky',
    mainPosition: '55% 48%',
    thumbPosition: 'center 50%',
  },
  {
    src: '/images/services/wedding-highlights/about-us/luxury-cyprus-bride-veil-bouquet-portrait.webp',
    alt: 'Smiling bride in a pearl veil with floral bouquet at a luxury Cyprus wedding ceremony — Wedding Sky',
    mainPosition: 'center 28%',
    thumbPosition: 'center 22%',
  },
  {
    src: '/images/services/wedding-highlights/about-us/intimate-bride-groom-under-veil-cyprus.webp',
    alt: 'Intimate black-and-white portrait of bride and groom under a veil — Wedding Sky Cyprus',
    mainPosition: 'center 42%',
    thumbPosition: 'center 40%',
  },
  {
    src: '/images/services/wedding-highlights/about-us/luxury-wedding-couple-vintage-rolls-royce-cyprus.webp',
    alt: 'Bride and groom posing with a vintage Rolls-Royce at a luxury Cyprus wedding — Wedding Sky',
    mainPosition: 'center 35%',
    thumbPosition: 'center 32%',
  },
  {
    src: '/images/services/wedding-highlights/about-us/vintage-wedding-car-floral-decoration-cyprus.webp',
    alt: 'Vintage Packard wedding car decorated with roses and hydrangeas — Wedding Sky Cyprus',
    mainPosition: 'center 48%',
    thumbPosition: 'center 55%',
  },
] as const

type WeddingAboutGalleryProps = {
  photoLabel: string
}

function AboutPhotoSlides({
  activeIndex,
  variant,
  slotOffset = 0,
}: {
  activeIndex: number
  variant: 'main' | 'thumb'
  slotOffset?: number
}) {
  const visibleIndex = (activeIndex + slotOffset) % WEDDING_ABOUT_SLIDES.length

  return (
    <div className="wedding-about__photo-slides">
      {WEDDING_ABOUT_SLIDES.map((slide, index) => {
        const isActive = index === visibleIndex
        return (
          <WeddingLazyImage
            key={slide.src}
            src={slide.src}
            alt={isActive ? slide.alt : ''}
            aria-hidden={!isActive}
            priority={variant === 'main' && index === 0}
            className={`wedding-about__photo-slide wedding-about__photo-slide--${variant}${
              isActive ? ' is-active' : ''
            }`}
            style={{
              objectPosition:
                variant === 'main' ? slide.mainPosition : slide.thumbPosition,
            }}
          />
        )
      })}
    </div>
  )
}

export default function WeddingAboutGallery({ photoLabel }: WeddingAboutGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % WEDDING_ABOUT_SLIDES.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <div
      className="wedding-about__visual reveal-left"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <figure
        className="wedding-about__photo-main"
        aria-roledescription="carousel"
        aria-label={WEDDING_ABOUT_SLIDES[activeIndex]?.alt}
      >
        <AboutPhotoSlides activeIndex={activeIndex} variant="main" />
        <figcaption className="wedding-about__photo-caption">
          <span>{photoLabel}</span>
          <strong>Cyprus</strong>
        </figcaption>
      </figure>

      <div className="wedding-about__photo-row">
        {[1, 2, 3].map((offset) => (
          <figure key={offset} className="wedding-about__photo-secondary">
            <AboutPhotoSlides
              activeIndex={activeIndex}
              variant="thumb"
              slotOffset={offset}
            />
          </figure>
        ))}
      </div>

      <div className="wedding-about__photo-progress" aria-hidden>
        {WEDDING_ABOUT_SLIDES.map((slide, index) => (
          <span
            key={slide.src}
            className={`wedding-about__photo-dot${
              index === activeIndex ? ' is-active' : ''
            }${paused && index === activeIndex ? ' is-paused' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}
