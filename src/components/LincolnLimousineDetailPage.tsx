import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import LimoGalleryLightbox from './LimoGalleryLightbox'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const LINCOLN_GALLERY = [
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine1.webp',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine2.webp',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine3.webp',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine4.webp',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine5.webp',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine6.webp',
] as const

export default function LincolnLimousineDetailPage() {
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

      <section className="service-detail-hero" data-hero-parallax-root>
        <div
          className="service-detail-hero-bg limo-detail-hero-bg"
          aria-hidden
          data-hero-parallax
        />
        <div className="service-detail-hero-scrim" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">VIP Limousine Experience</p>
          <h1 className="reveal reveal-delay-1">Lincoln 30ft Stretched Limousine</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            A bold arrival. A luxury experience. A lifestyle.
          </p>
        </div>
      </section>

      <section className="service-default-sections limo-detail">
        <div className="container">
          <motion.div
            className="limo-detail-gallery"
            initial={reduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINCOLN_GALLERY.map((src, index) => (
              <figure
                key={src}
                className={`limo-detail-gallery__item${index === 0 ? ' limo-detail-gallery__item--hero' : ''}`}
              >
                <button
                  type="button"
                  className="limo-detail-gallery__trigger"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Προβολή μεγαλύτερης εικόνας ${index + 1} από ${LINCOLN_GALLERY.length}`}
                >
                  <img
                    src={src}
                    alt={`Lincoln 30ft Stretched Limousine gallery image ${index + 1}`}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </button>
              </figure>
            ))}
          </motion.div>

          <motion.div
            className="service-default-block limo-detail__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.58, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="limo-detail__eyebrow">Executive class chauffeur experience</p>
            <h2>VIP Limousine Experience</h2>
            <p className="limo-detail__lead">
              Enter a new dimension of prestige, where transportation becomes a statement of
              power, elegance and elite lifestyle. Our ultra-luxury limousine service is designed
              for clients who expect nothing less than absolute comfort, privacy and grand
              presence.
            </p>
            <div className="limo-detail__facts">
              <article>
                <h3>Capacity</h3>
                <p>Up to 8 guests in executive lounge comfort.</p>
              </article>
              <article>
                <h3>Interior</h3>
                <p>Two-tone leather, mirrored bar, neon and fibre-optic ambiance.</p>
              </article>
              <article>
                <h3>Onboard</h3>
                <p>Dual entertainment screens, crystal glassware, premium ice compartments.</p>
              </article>
              <article>
                <h3>Service</h3>
                <p>Suit-and-tie chauffeur with climate-controlled privacy at every stage.</p>
              </article>
            </div>
            <div className="limo-detail__prose">
              <p>
              The iconic Lincoln 30ft Stretched Limousine delivers an unforgettable VIP atmosphere
              with refined two-tone leather seating, ambient neon and fibre-optic lighting, dual
              entertainment screens, and a mirrored luxury bar fully equipped with crystal
              glassware and premium ice compartments. Spaciously accommodating up to eight guests,
              the interior is crafted to feel like a private executive lounge on wheels.
              </p>
              <p>
              Tinted windows ensure discretion, while independently controlled climate comfort and
              a professionally presented chauffeur in smart suit and tie guarantee a seamless,
              first-class journey from start to finish.
              </p>
            </div>
            <h3 className="limo-detail__subhead">Perfect for</h3>
            <ul className="limo-detail__occasion-list">
              <li>Weddings and grand arrivals</li>
              <li>High-profile events and red-carpet appearances</li>
              <li>Executive transfers and VIP delegations</li>
              <li>Exclusive private celebrations</li>
            </ul>
            <p>
              Perfect for weddings, high-profile events, executive transfers and exclusive
              celebrations - this is not simply transportation.
            </p>
            <p className="limo-detail__closing">It is a bold arrival. A luxury experience. A lifestyle.</p>
            <div className="limo-detail__actions">
              <Link
                to="/contact"
                className="limo-detail__cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Lincoln 30ft Stretched Limousine',
                }}
              >
                Request this limousine
              </Link>
              <Link to="/services/limousines-experiences" className="limo-detail__back">
                Back to all limousines
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <LimoGalleryLightbox
        images={LINCOLN_GALLERY}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
        altForIndex={(i) => `Lincoln 30ft Stretched Limousine gallery image ${i + 1}`}
      />

      <Footer />
    </div>
  )
}
