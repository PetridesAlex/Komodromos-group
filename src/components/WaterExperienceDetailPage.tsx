import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import LimoGalleryLightbox from './LimoGalleryLightbox'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import type { WaterExperienceDetail } from '../data/fishingScubaPage'

const EASE = [0.16, 1, 0.3, 1] as const

type Props = {
  detail: WaterExperienceDetail
}

export default function WaterExperienceDetailPage({ detail }: Props) {
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
          className="service-detail-hero-bg"
          aria-hidden
          data-hero-parallax
          style={{ backgroundImage: `url("${detail.heroImage}")` }}
        />
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">{detail.eyebrow}</p>
          <h1 className="reveal reveal-delay-1">{detail.title}</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">{detail.tagline}</p>
        </div>
      </section>

      <section
        className="service-default-sections water-experience"
        aria-label={`${detail.title} experiences`}
      >
        <div className="container">
          {detail.experiences.map((block, i) => {
            const imageLeft = (block.imageSide ?? (i % 2 === 0 ? 'left' : 'right')) === 'left'
            const copyFrom = imageLeft ? 18 : -18
            return (
              <motion.article
                key={block.title}
                className={`water-experience__row${imageLeft ? '' : ' water-experience__row--flip'}`}
                initial={reduceMotion ? false : { opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.7,
                  delay: reduceMotion ? 0 : Math.min(i * 0.08, 0.18),
                  ease: EASE,
                }}
              >
                <motion.figure
                  className="water-experience__media"
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.04, x: imageLeft ? -24 : 24 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.85, ease: EASE }}
                >
                  <img
                    src={block.image}
                    alt={block.imageAlt}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </motion.figure>
                <div className="water-experience__copy">
                  <motion.p
                    className="water-experience__kicker"
                    initial={reduceMotion ? false : { opacity: 0, y: 14, x: copyFrom }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.55, delay: reduceMotion ? 0 : 0.08, ease: EASE }}
                  >
                    <span className="water-experience__kicker-mark" aria-hidden />
                    Experience 0{i + 1}
                  </motion.p>
                  <motion.h2
                    initial={reduceMotion ? false : { opacity: 0, y: 22, x: copyFrom }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.65, delay: reduceMotion ? 0 : 0.16, ease: EASE }}
                  >
                    {block.title}
                  </motion.h2>
                  {block.paragraphs.map((p, pi) => (
                    <motion.p
                      key={p.slice(0, 40)}
                      className="water-experience__body"
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{
                        duration: reduceMotion ? 0.01 : 0.55,
                        delay: reduceMotion ? 0 : 0.24 + pi * 0.1,
                        ease: EASE,
                      }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section
        className="service-default-sections limo-detail limo-detail--luxury limo-detail--ocean"
        aria-label={`${detail.title} gallery`}
      >
        <motion.div
          className="limo-detail-gallery limo-detail-gallery--luxury-full"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: EASE }}
        >
          {detail.gallery.map((src, index) => (
            <motion.figure
              key={src}
              className={`limo-detail-gallery__item${index === 0 ? ' limo-detail-gallery__item--hero' : ''}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.42,
                delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.28),
                ease: EASE,
              }}
            >
              <button
                type="button"
                className="limo-detail-gallery__trigger"
                onClick={() => setLightboxIndex(index)}
                aria-label={`View larger image ${index + 1} of ${detail.gallery.length}`}
              >
                <img
                  src={src}
                  alt={`${detail.title} gallery image ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </motion.figure>
          ))}
        </motion.div>

        <div className="container limo-detail__content">
          <motion.div
            className="service-default-block limo-detail__panel limo-detail__panel--luxury"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: EASE }}
          >
            <p className="limo-detail__eyebrow">{detail.panelEyebrow}</p>
            <h2>{detail.panelTitle}</h2>
            <p className="limo-detail__lead">{detail.panelLead}</p>
            <div className="limo-detail__actions">
              <Link
                to="/contact"
                className="limo-detail__cta limo-detail__cta--luxury"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: detail.vipSubService,
                }}
              >
                <span className="limo-detail__cta-label">{detail.ctaLabel}</span>
              </Link>
              <Link
                to="/services/fishing-scuba-diving"
                className="limo-detail__back limo-detail__back--luxury"
              >
                {detail.backLabel}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <LimoGalleryLightbox
        images={detail.gallery}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        altForIndex={(i) => `${detail.title} gallery image ${i + 1}`}
      />

      <Footer />
    </div>
  )
}
