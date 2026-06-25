import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { AVIATION_SECTIONS, aviationSectionHref, gwHeroSlides } from '../../data/globalWingsPage'
import GwImagePlaceholder from './GwImagePlaceholder'

const SERVICES_LINK = aviationSectionHref('services')
const AUTO_INTERVAL_MS = 7000

export default function GwHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    const handler = () => setReduceMotion(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + gwHeroSlides.length) % gwHeroSlides.length)
  }, [])

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  useEffect(() => {
    if (reduceMotion) return
    const timer = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % gwHeroSlides.length)
    }, AUTO_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [reduceMotion])

  return (
    <section
      id={AVIATION_SECTIONS.hero}
      className="gw-hero"
      aria-label="Global Wings hero"
      aria-roledescription="carousel"
    >
      <div className="gw-hero__slides">
        {gwHeroSlides.map((slide, index) => {
          const isActive = index === activeIndex
          return (
            <div
              key={index}
              className={`gw-hero__slide${isActive ? ' gw-hero__slide--active' : ''}`}
              aria-hidden={!isActive}
            >
              <GwImagePlaceholder variant="hero-bg" className="gw-hero__slide-bg" label="Insert image here" />

              <div className="gw-hero__caption container">
                {slide.type === 'logo' ? (
                  <GwImagePlaceholder
                    variant="logo"
                    className="gw-hero__logo-placeholder"
                    aspectRatio="567 / 350"
                    label="Insert image here"
                  />
                ) : null}

                {slide.type === 'banner' ? (
                  <GwImagePlaceholder
                    variant="logo"
                    className="gw-hero__banner-placeholder"
                    aspectRatio="900 / 365"
                    label="Insert image here"
                  />
                ) : null}

                {slide.type === 'text' ? (
                  <>
                    <h1 className="gw-hero__title">{slide.title}</h1>
                    <h2 className="gw-hero__subtitle">{slide.subtitle}</h2>
                  </>
                ) : null}

                <Link
                  className={`gw-hero__cta${
                    slide.type === 'image-only' && slide.ctaVariant === 'secondary'
                      ? ' gw-hero__cta--secondary'
                      : ''
                  }`}
                  to={SERVICES_LINK}
                >
                  Start now
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      <div className="gw-hero__controls" aria-hidden={false}>
        <button
          type="button"
          className="gw-hero__control gw-hero__control--prev"
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <ChevronLeft aria-hidden />
        </button>
        <button
          type="button"
          className="gw-hero__control gw-hero__control--next"
          onClick={goNext}
          aria-label="Next slide"
        >
          <ChevronRight aria-hidden />
        </button>
      </div>

      <Link className="gw-hero__scroll" to={SERVICES_LINK} aria-label="Scroll to services">
        <ChevronDown aria-hidden />
      </Link>

      <div className="gw-hero__dots" role="tablist" aria-label="Hero slides">
        {gwHeroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            className={`gw-hero__dot${index === activeIndex ? ' gw-hero__dot--active' : ''}`}
            aria-selected={index === activeIndex}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </section>
  )
}
