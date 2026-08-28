import { useEffect, useState } from 'react'
import ParallaxCarousel from './ParallaxCarousel'
import { weddingAboutServicesCarouselImages } from '../data/weddingAboutServicesCarousel'
import { weddingAboutCopy } from '../data/weddingPageCopy'
import { useWeddingLocale } from '../lib/weddingLocale'

function useCarouselSizing() {
  const [sizing, setSizing] = useState({
    width: 340,
    height: 480,
    gap: 32,
    speed: 40,
  })

  useEffect(() => {
    const sync = () => {
      const narrow = window.matchMedia('(max-width: 640px)').matches
      setSizing(
        narrow
          ? { width: 260, height: 360, gap: 20, speed: 28 }
          : { width: 340, height: 480, gap: 32, speed: 40 },
      )
    }
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  return sizing
}

export default function WeddingAboutServicesCarousel() {
  const { t } = useWeddingLocale()
  const carouselSizing = useCarouselSizing()

  return (
    <section
      className="wedding-about-services-carousel"
      aria-labelledby="wedding-about-services-carousel-heading"
    >
      <div className="wedding-about-services-carousel__head container">
        <p className="wedding-about-services-carousel__eyebrow">
          <span className="wedding-about-services-carousel__eyebrow-line" aria-hidden />
          <span>{t(weddingAboutCopy.servicesCarouselEyebrow)}</span>
          <span className="wedding-about-services-carousel__eyebrow-line" aria-hidden />
        </p>
        <h2
          id="wedding-about-services-carousel-heading"
          className="wedding-about-services-carousel__title"
        >
          {t(weddingAboutCopy.servicesCarouselTitle)}
        </h2>
        <p className="wedding-about-services-carousel__lead">
          {t(weddingAboutCopy.servicesCarouselLead)}
        </p>
      </div>

      <div className="wedding-about-services-carousel__stage">
        <span className="wedding-about-services-carousel__fade wedding-about-services-carousel__fade--left" aria-hidden />
        <span className="wedding-about-services-carousel__fade wedding-about-services-carousel__fade--right" aria-hidden />
        <div className="wedding-about-services-carousel__canvas-wrap">
          <ParallaxCarousel
            images={weddingAboutServicesCarouselImages}
            imageWidth={carouselSizing.width}
            imageHeight={carouselSizing.height}
            gap={carouselSizing.gap}
            parallaxIntensity={0.42}
            loop
            autoplaySpeed={carouselSizing.speed}
            pauseOnHover
            showProgress={false}
            borderRadius={18}
          />
        </div>
        <p className="wedding-about-services-carousel__hint" aria-hidden>
          {t(weddingAboutCopy.servicesCarouselHint)}
        </p>
      </div>
    </section>
  )
}
