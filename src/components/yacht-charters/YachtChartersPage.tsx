import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import {
  popularExperiences,
  privateEvents,
  whyChooseUs,
  yachtCharterIntro,
  yachtChartersHero,
  yachtChartersHeroImage,
  yachtFaq,
  yachtFleet,
  yachtReviews,
} from '../../data/yachtChartersData'
import MaritimeTermsConsent from './MaritimeTermsConsent'
import YachtCard from './YachtCard'
import YachtCharterTermsModal from './YachtCharterTermsModal'
import YachtFAQSection from './YachtFAQSection'
import YachtFilter, { type YachtFilterState } from './YachtFilter'
import YachtReviewsSection from './YachtReviewsSection'

const MotionLink = motion(Link)

const heroCtaSpring = { type: 'spring', stiffness: 440, damping: 28 } as const

const defaultFilter: YachtFilterState = {
  type: 'all',
  location: 'all',
  minGuests: 4,
  duration: '6h',
}

export default function YachtChartersPage() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [filter, setFilter] = useState<YachtFilterState>(defaultFilter)
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
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="yacht-hero" aria-labelledby="yacht-hero-title" data-hero-parallax-root>
        <div className="yacht-hero__bg" aria-hidden data-hero-parallax>
          <img
            className="yacht-hero__bg-img"
            src={yachtChartersHeroImage}
            alt=""
            width={1920}
            height={1080}
          />
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
            <motion.button
              type="button"
              className="yacht-btn yacht-btn--ghost"
              onClick={() => setTermsOpen(true)}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={heroCtaSpring}
            >
              Terms & conditions
            </motion.button>
          </motion.div>
        </div>
        <div className="yacht-hero__scroll-hint" aria-hidden>
          <span />
        </div>
      </section>

      <section
        className="yacht-intro"
        id="yacht-charter-intro"
        aria-labelledby="yacht-intro-heading"
      >
        <div className="container yacht-intro__container">
          <motion.div
            className="yacht-intro__frame reveal"
            initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0.01 : 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="yacht-intro__eyebrow">The experience</p>
            <h2 id="yacht-intro-heading" className="yacht-intro__title">
              {yachtCharterIntro.title}
            </h2>
            <p className="yacht-intro__lead">{yachtCharterIntro.lead}</p>
            <div className="yacht-intro__prose">
              {yachtCharterIntro.paragraphs.map((block, i) => {
                const text = typeof block === 'string' ? block : block.text
                const emphasis = typeof block === 'object' && block.emphasis
                return (
                  <p
                    key={i}
                    className={`yacht-intro__p${emphasis ? ' yacht-intro__p--emphasis' : ''}${i === yachtCharterIntro.paragraphs.length - 1 ? ' yacht-intro__p--closing' : ''}`}
                  >
                    {text}
                  </p>
                )
              })}
            </div>
          </motion.div>
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
            Our fleet
          </motion.h2>
          <p className="yacht-fleet__intro">
            From private escapes to corporate charters, our services combine comfort, safety, and
            seamless coordination — every time.
          </p>
          <p className="yacht-fleet__lead">
            {filteredFleet.length} vessel{filteredFleet.length === 1 ? '' : 's'} match your criteria
          </p>
          <div className="yacht-fleet__grid">
            {filteredFleet.map((yacht, index) => (
              <YachtCard key={yacht.id} yacht={yacht} index={index} reduceMotion={reduceMotion} />
            ))}
          </div>
          {filteredFleet.length === 0 ? (
            <p className="yacht-fleet__empty">No yachts match — try widening your filters.</p>
          ) : null}
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
            <button
              type="button"
              className="yacht-enquiry__terms"
              onClick={() => setTermsOpen(true)}
            >
              Read terms & conditions of carriage & charter
            </button>
          </motion.div>
        </div>
      </section>

      <MaritimeTermsConsent />
      <YachtCharterTermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />

      <Footer />
    </div>
  )
}
