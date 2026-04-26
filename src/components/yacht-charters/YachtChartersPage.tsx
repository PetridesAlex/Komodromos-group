import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteLogo from '../SiteLogo'
import TopbarSocialLinks from '../TopbarSocialLinks'
import { useReveal } from '../../hooks/useReveal'
import {
  charteringCyprus,
  popularExperiences,
  privateEvents,
  whyChooseUs,
  yachtChartersHero,
  yachtFaq,
  yachtFleet,
  yachtReviews,
} from '../../data/yachtChartersData'
import type { YachtCharter } from '../../data/yachtChartersData'
import YachtCard from './YachtCard'
import YachtDetailsModal from './YachtDetailsModal'
import YachtFAQSection from './YachtFAQSection'
import YachtFilter, { type YachtFilterState } from './YachtFilter'
import YachtReviewsSection from './YachtReviewsSection'

const HERO_BG = '/images/services/maritime-services/yacht-marine-hero.webp'

const MotionLink = motion(Link)

const heroCtaSpring = { type: 'spring', stiffness: 440, damping: 28 } as const

const defaultFilter: YachtFilterState = {
  type: 'all',
  location: 'all',
  minGuests: 4,
  duration: '6h',
}

export default function YachtChartersPage() {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<YachtFilterState>(defaultFilter)
  const [modalYacht, setModalYacht] = useState<YachtCharter | null>(null)
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredFleet = useMemo(() => {
    return yachtFleet.filter((y) => {
      if (filter.type !== 'all' && y.type !== filter.type) return false
      if (filter.location !== 'all' && y.location !== filter.location) return false
      if (y.guests < filter.minGuests) return false
      return true
    })
  }, [filter])

  function scrollToFleet() {
    document.getElementById('yacht-fleet')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page yacht-charters-page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link to="/#services" className="nav-active" onClick={() => setMenuOpen(false)}>
              SERVICES
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              CONTACT
            </Link>
            <TopbarSocialLinks variant="mobile" />
          </nav>
          <TopbarSocialLinks variant="desktop" />
          <button
            type="button"
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="yacht-hero" aria-labelledby="yacht-hero-title">
        <div className="yacht-hero__bg" aria-hidden>
          <img className="yacht-hero__bg-img" src={HERO_BG} alt="" width={1920} height={1080} />
          <div className="yacht-hero__overlay" />
          <div className="yacht-hero__grain" aria-hidden />
        </div>
        <div className="yacht-hero__content">
          <motion.p
            className="yacht-hero__eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Sea & yachting
          </motion.p>
          <motion.h1
            id="yacht-hero-title"
            className="yacht-hero__title"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.75,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {yachtChartersHero.title}
          </motion.h1>
          <motion.p
            className="yacht-hero__sub"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.65,
              delay: reduceMotion ? 0 : 0.16,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {yachtChartersHero.subtitle}
          </motion.p>
          <motion.div
            className="yacht-hero__cta"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.55,
              delay: reduceMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.button
              type="button"
              className="yacht-btn yacht-btn--gold"
              onClick={scrollToFleet}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              transition={heroCtaSpring}
            >
              Explore yachts
            </motion.button>
            <MotionLink
              to="/contact"
              className="yacht-btn yacht-btn--outline"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Luxury yacht charter — private quote',
              }}
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
              transition={heroCtaSpring}
            >
              Request a private quote
            </MotionLink>
          </motion.div>
        </div>
        <div className="yacht-hero__scroll-hint" aria-hidden>
          <span />
        </div>
      </section>

      <div className="yacht-sticky-wrap">
        <YachtFilter value={filter} onChange={setFilter} />
      </div>

      <section id="yacht-fleet" className="yacht-fleet" aria-label="Yacht fleet">
        <div className="container">
          <motion.h2
            className="yacht-section__title yacht-section__title--center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            The fleet
          </motion.h2>
          <p className="yacht-fleet__lead">
            {filteredFleet.length} vessel{filteredFleet.length === 1 ? '' : 's'} match your criteria
          </p>
          <div className="yacht-fleet__grid">
            {filteredFleet.map((yacht) => (
              <YachtCard
                key={yacht.id}
                yacht={yacht}
                durationHighlight={filter.duration}
                reduceMotion={reduceMotion}
                onViewDetails={() => setModalYacht(yacht)}
                onRequestBooking={() =>
                  navigate('/contact', {
                    state: {
                      serviceInterest: 'VIP Services',
                      vipSubService: `Yacht charter booking — ${yacht.name} (${yacht.location})`,
                    },
                  })
                }
              />
            ))}
          </div>
          {filteredFleet.length === 0 ? (
            <p className="yacht-fleet__empty">No yachts match — try widening your filters.</p>
          ) : null}
        </div>
      </section>

      <section className="yacht-section yacht-charter-info" aria-labelledby="charter-info-title">
        <div className="container">
          <motion.h2
            id="charter-info-title"
            className="yacht-section__title"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {charteringCyprus.title}
          </motion.h2>
          <motion.p
            className="yacht-charter-info__intro"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {charteringCyprus.intro}
          </motion.p>
          <div className="yacht-charter-info__hubs">
            {charteringCyprus.hubs.map((hub, i) => (
              <motion.article
                key={hub.title}
                className="yacht-charter-info__hub"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.5,
                  delay: reduceMotion ? 0 : i * 0.06,
                }}
              >
                <div
                  className={`yacht-charter-info__hub-media${hub.image ? '' : ' yacht-charter-info__hub-media--placeholder'}`}
                >
                  {hub.image ? (
                    <img
                      src={hub.image}
                      alt={hub.imageAlt ?? hub.title}
                      width={640}
                      height={420}
                      sizes="(max-width: 767px) 100vw, (max-width: 1099px) 50vw, 33vw"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      className="yacht-charter-info__hub-placeholder"
                      role="img"
                      aria-label={`Image placeholder for ${hub.title}`}
                    >
                      <span className="yacht-charter-info__hub-placeholder__label">Insert image</span>
                      <span className="yacht-charter-info__hub-placeholder__hint">{hub.title}</span>
                    </div>
                  )}
                </div>
                <div className="yacht-charter-info__hub-body">
                  <h3 className="yacht-charter-info__hub-title">{hub.title}</h3>
                  <p className="yacht-charter-info__hub-text">{hub.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.p
            className="yacht-charter-info__closing"
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55 }}
          >
            {charteringCyprus.closing}
          </motion.p>
        </div>
      </section>

      <section className="yacht-section yacht-why" aria-labelledby="yacht-why-title">
        <div className="container">
          <motion.h2
            id="yacht-why-title"
            className="yacht-section__title yacht-section__title--center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {whyChooseUs.title}
          </motion.h2>
          <div className="yacht-why__grid">
            {whyChooseUs.items.map((item, i) => (
              <motion.div
                key={item.title}
                className="yacht-glass-card"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.55,
                  delay: reduceMotion ? 0 : i * 0.07,
                }}
              >
                <h3 className="yacht-glass-card__title">{item.title}</h3>
                <p className="yacht-glass-card__text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="yacht-section yacht-popular" aria-labelledby="yacht-popular-title">
        <div className="container">
          <motion.h2
            id="yacht-popular-title"
            className="yacht-section__title"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {popularExperiences.title}
          </motion.h2>
          <ul className="yacht-popular__list">
            {popularExperiences.items.map((label, i) => (
              <motion.li
                key={label}
                className="yacht-popular__item"
                initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.45,
                  delay: reduceMotion ? 0 : i * 0.05,
                }}
              >
                {label}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="yacht-section yacht-events" aria-labelledby="yacht-events-title">
        <div className="container">
          <motion.div
            className="yacht-events__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55 }}
          >
            <h2 id="yacht-events-title" className="yacht-events__title">
              {privateEvents.title}
            </h2>
            <p className="yacht-events__text">{privateEvents.text}</p>
          </motion.div>
        </div>
      </section>

      <YachtReviewsSection title="Client reviews" reviews={yachtReviews} reduceMotion={reduceMotion} />
      <YachtFAQSection items={yachtFaq} reduceMotion={reduceMotion} />

      <section className="yacht-section yacht-enquiry" aria-labelledby="yacht-enquiry-title">
        <div className="container">
          <motion.div
            className="yacht-enquiry__panel"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55 }}
          >
            <h2 id="yacht-enquiry-title" className="yacht-enquiry__title">
              Charter enquiry
            </h2>
            <p className="yacht-enquiry__lead">
              Share dates, guest count, and preferred coast — we’ll respond with tailored options and
              transparent pricing.
            </p>
            <Link
              to="/contact"
              className="yacht-btn yacht-btn--gold yacht-btn--wide"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Luxury yacht charter — enquiry',
              }}
            >
              Open enquiry form
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <YachtDetailsModal yacht={modalYacht} onClose={() => setModalYacht(null)} reduceMotion={reduceMotion} />
    </div>
  )
}
