import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import LimoGalleryLightbox from './LimoGalleryLightbox'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import type { SuperLuxuryCarDetail } from '../data/superLuxuryCarsPage'

type Props = {
  car: SuperLuxuryCarDetail
}

const easeOut = [0.16, 1, 0.3, 1] as const

export default function SuperLuxuryCarDetailPage({ car }: Props) {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="service-detail-hero service-detail-hero--vip-full" data-hero-parallax-root>
        <div
          className="service-detail-hero-bg service-detail-hero-bg--vip-img"
          aria-hidden
          data-hero-parallax
        >
          <img
            className="service-detail-hero-bg__img"
            src={car.heroImage}
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">{car.eyebrow}</p>
          <h1 className="reveal reveal-delay-1">{car.title}</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">{car.tagline}</p>
        </div>
      </section>

      <section className="service-default-sections limo-detail limo-detail--luxury">
        <motion.div
          className="limo-detail-gallery limo-detail-gallery--luxury-full"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: easeOut }}
        >
          {car.gallery.map((src, index) => (
            <motion.figure
              key={src}
              className={`limo-detail-gallery__item${index === 0 ? ' limo-detail-gallery__item--hero' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.45,
                delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.32),
                ease: easeOut,
              }}
            >
              <button
                type="button"
                className="limo-detail-gallery__trigger"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View larger image ${index + 1} of ${car.gallery.length}`}
              >
                <img
                  src={src}
                  alt={`${car.title} gallery image ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </button>
            </motion.figure>
          ))}
        </motion.div>

        <div className="container limo-detail__content">
          <motion.div
            className="service-default-block limo-detail__panel limo-detail__panel--luxury"
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.65, ease: easeOut }}
          >
            <motion.p
              className="limo-detail__eyebrow"
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.01 : 0.45, delay: reduceMotion ? 0 : 0.08 }}
            >
              {car.panelEyebrow}
            </motion.p>
            <motion.h2
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.12 }}
            >
              {car.panelTitle}
            </motion.h2>
            <motion.p
              className="limo-detail__lead"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.16 }}
            >
              {car.lead}
            </motion.p>

            <div className="limo-detail__facts">
              {car.facts.map((fact, index) => (
                <motion.article
                  key={fact.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.48,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.07,
                    ease: easeOut,
                  }}
                  whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.25 } }}
                >
                  <h3>{fact.title}</h3>
                  <p>{fact.body}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              className="limo-detail__prose"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: reduceMotion ? 0 : 0.12 }}
            >
              {car.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p className="limo-detail__closing">{car.closing}</p>
            </motion.div>

            <motion.div
              className="limo-detail__actions"
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.18 }}
            >
              <motion.div
                whileHover={reduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
              >
                <Link
                  to="/contact"
                  className="limo-detail__cta limo-detail__cta--luxury"
                  state={{
                    serviceInterest: 'VIP Services',
                    vipSubService: car.vipSubService,
                  }}
                >
                  <span className="limo-detail__cta-label">{car.ctaLabel}</span>
                </Link>
              </motion.div>
              <Link to="/services/super-luxury-cars" className="limo-detail__back limo-detail__back--luxury">
                Back to Super &amp; Luxury Cars
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <LimoGalleryLightbox
        images={car.gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        altForIndex={(i) => `${car.title} gallery image ${i + 1}`}
      />

      <Footer />
    </div>
  )
}
