import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const CHRYSLER_GALLERY = [
  '/images/services/vip-service/limousine-services/chrystler/chrysler1.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler2.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler4.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler3.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler5.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler6.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler7.webp',
  '/images/services/vip-service/limousine-services/chrystler/chrysler8.webp',
] as const

export default function LimousineDetailPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/services"
      />

      <section className="service-detail-hero" data-hero-parallax-root>
        <div
          className="service-detail-hero-bg limo-detail-hero-bg"
          aria-hidden
          data-hero-parallax
        />
        <div className="service-detail-hero-scrim" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">Limousine Fleet</p>
          <h1 className="reveal reveal-delay-1">Chrysler 300 Super Stretch Limousine</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Step into a world of prestige, elegance and unforgettable luxury.
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
            {CHRYSLER_GALLERY.map((src, index) => (
              <figure
                key={src}
                className={`limo-detail-gallery__item${index === 0 ? ' limo-detail-gallery__item--hero' : ''}`}
              >
                <img
                  src={src}
                  alt={`Chrysler 300 Super Stretch Limousine gallery image ${index + 1}`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
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
            <p className="limo-detail__eyebrow">VIP ground transportation in Cyprus</p>
            <h2>Chrysler 300 Super Stretch Limousine Experience - Cyprus</h2>
            <p className="limo-detail__lead">
              Step into a world of prestige, elegance and unforgettable luxury with our iconic
              Chrysler 300 Super Stretch Limousine, one of the most impressive VIP transportation
              experiences available in Cyprus.
            </p>
            <div className="limo-detail__facts">
              <article>
                <h3>Capacity</h3>
                <p>Super-stretch comfort for up to 11 passengers.</p>
              </article>
              <article>
                <h3>VIP Interior</h3>
                <p>Luxury leather seating, dynamic ambient lighting, executive lounge atmosphere.</p>
              </article>
              <article>
                <h3>Entertainment</h3>
                <p>Premium sound, LCD screens and a stylish mini-bar area.</p>
              </article>
              <article>
                <h3>Signature Presence</h3>
                <p>Commanding grille, polished chrome rims and timeless Chrysler lines.</p>
              </article>
            </div>
            <div className="limo-detail__prose">
              <p>
                Designed to turn every arrival into a statement, this magnificent limousine combines
                timeless sophistication with exceptional comfort. Its extended super-stretch design
                provides generous space for up to 11 passengers, making it the perfect choice for
                high-profile occasions, elite celebrations and executive transportation.
              </p>
              <p>
                Inside, passengers are welcomed into a refined VIP lounge atmosphere featuring
                luxurious leather seating, dynamic ambient lighting and advanced entertainment
                systems. The limousine is equipped with a premium sound experience, LCD screens and a
                stylish mini-bar area, allowing guests to relax, celebrate and enjoy every moment of
                the journey in absolute comfort.
              </p>
              <p>
                The exterior presence of the Chrysler 300 limousine is equally breathtaking. With its
                commanding front grille, polished chrome rims and elegant lines, it represents
                confidence, prestige and high social status - ideal for those who wish to travel in
                true style.
              </p>
            </div>
            <h3 className="limo-detail__subhead">Perfect for elite occasions</h3>
            <ul className="limo-detail__occasion-list">
              <li>Luxury wedding transportation</li>
              <li>Bachelor and hen VIP parties</li>
              <li>Corporate and executive transfers</li>
              <li>Airport VIP meet and assist services</li>
              <li>Property viewings and investment tours</li>
              <li>Fashion events and grand entrances</li>
              <li>Private celebrations and night experiences</li>
            </ul>
            <p>
              Every journey is carefully tailored to your personal expectations, ensuring a seamless
              and memorable luxury experience.
            </p>
            <h3 className="limo-detail__subhead">Our commitment to excellence</h3>
            <ul className="limo-detail__occasion-list">
              <li>Absolute punctuality</li>
              <li>Discreet and trusted service</li>
              <li>Luxury comfort and safety</li>
              <li>Professional chauffeurs</li>
              <li>Personalised VIP experience</li>
            </ul>
            <p>
              We believe limousine transportation is not simply about moving from one place to
              another - it is about creating moments of prestige, confidence and unforgettable
              memories.
            </p>
            <p className="limo-detail__closing">
              Travel Cyprus in true VIP style. Arrive with presence. Experience luxury.
            </p>
            <div className="limo-detail__actions">
              <Link
                to="/contact"
                className="limo-detail__cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Chrysler 300 Super Stretch Limousine Experience - Cyprus',
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

      <Footer />
    </div>
  )
}
