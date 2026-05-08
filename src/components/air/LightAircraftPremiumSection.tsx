import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  airCategoryContent,
  airLightFleetPath,
  airLightExperiences,
  airLightPremiumPage,
} from '../../data/airServicesPage'

const EASE = [0.16, 1, 0.3, 1] as const
const INTRO_CARD_IMAGES = [
  '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-1.webp',
  '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-2.webp',
  '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-3.webp',
  '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-4.webp',
] as const

type Props = {
  jetsPath: string
}

export default function LightAircraftPremiumSection({ jetsPath }: Props) {
  const reduceMotion = useReducedMotion()
  const light = airCategoryContent.light
  const d = airLightPremiumPage

  const fadeUp = reduceMotion
    ? { initial: false, animate: {} }
    : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 } }

  return (
    <div className="air-lxp" id="air-light-experiences">
      <section className="air-lxp__hero" aria-labelledby="air-lxp-hero-title">
        <div className="air-lxp__hero-media" aria-hidden>
          <img
            className="air-lxp__hero-img"
            src={light.image}
            alt=""
            width={1600}
            height={1000}
            decoding="async"
            fetchPriority="high"
          />
          <div className="air-lxp__hero-veil" />
          <div className="air-lxp__hero-grain" />
        </div>
        <div className="air-lxp__hero-toolbar">
          <div className="container air-lxp__toolbar">
            <nav className="air-lxp__breadcrumb" aria-label="Breadcrumb">
              <ol className="air-lxp__breadcrumb-list">
                <li>
                  <Link to="/" className="air-lxp__breadcrumb-link">
                    Home
                  </Link>
                </li>
                <li aria-hidden className="air-lxp__breadcrumb-sep">
                  /
                </li>
                <li>
                  <Link to="/services/air" className="air-lxp__breadcrumb-link">
                    Air Services
                  </Link>
                </li>
                <li aria-hidden className="air-lxp__breadcrumb-sep">
                  /
                </li>
                <li aria-current="page" className="air-lxp__breadcrumb-current">
                  Light Aircraft
                </li>
              </ol>
            </nav>
            <Link to={jetsPath} className="air-lxp__toolbar-link">
              <span className="air-lxp__toolbar-link-label">Private jets</span>
              <span className="air-lxp__toolbar-link-arrow" aria-hidden />
            </Link>
          </div>
        </div>
        <div className="container air-lxp__hero-content">
          <motion.p
            className="air-lxp__hero-eyebrow"
            {...fadeUp}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            {d.heroEyebrow}
          </motion.p>
          <motion.h1
            id="air-lxp-hero-title"
            className="air-lxp__hero-title"
            {...fadeUp}
            transition={{
              duration: reduceMotion ? 0 : 0.72,
              delay: reduceMotion ? 0 : 0.06,
              ease: EASE,
            }}
          >
            {d.heroTitle}
          </motion.h1>
          <motion.p
            className="air-lxp__hero-sub"
            {...fadeUp}
            transition={{
              duration: reduceMotion ? 0 : 0.6,
              delay: reduceMotion ? 0 : 0.14,
              ease: EASE,
            }}
          >
            {d.heroSubtitle}
          </motion.p>
          <motion.div
            className="air-lxp__hero-ctas"
            {...fadeUp}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : 0.22,
              ease: EASE,
            }}
          >
            <Link
              to="/contact"
              className="air-lxp__btn air-lxp__btn--gold"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Light aircraft — Book an experience',
              }}
            >
              Book an Experience
            </Link>
            <Link to={airLightFleetPath} className="air-lxp__btn air-lxp__btn--outline air-lxp__btn--fleet">
              See our light aircraft fleet
            </Link>
            <a href="#air-lxp-courses" className="air-lxp__btn air-lxp__btn--outline">
              Learn to Fly
            </a>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="air-lxp__intro"
        aria-labelledby="air-lxp-intro-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
      >
        <div className="container air-lxp__intro-inner">
          <motion.h2 id="air-lxp-intro-heading" className="air-lxp__section-title air-lxp__section-title--intro">
            {d.introHeading}
          </motion.h2>
          <div className="air-lxp__intro-prose">
            {d.introParagraphs.map((para, i) => (
              <motion.p
                key={i}
                className="air-lxp__intro-p"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : i * 0.08,
                  ease: EASE,
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="air-lxp__cards"
        aria-labelledby="air-lxp-cards-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
      >
        <div className="container">
          <motion.h2
            id="air-lxp-cards-heading"
            className="air-lxp__section-title"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            Signature experiences
          </motion.h2>
          <p className="air-lxp__section-lead">{d.signatureLead}</p>
          <div className="air-lxp__card-grid">
            {d.experienceCards.map((card, i) => (
              <motion.article
                key={card.title}
                className="air-lxp__card"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 42,
                        x: i % 2 === 0 ? -28 : 28,
                        scale: 0.985,
                      }
                }
                whileInView={
                  reduceMotion
                    ? { opacity: 1, y: 0, x: 0, scale: 1 }
                    : {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        transitionEnd: { filter: 'none' },
                      }
                }
                viewport={{ once: false, amount: 0.32, margin: '-40px 0px -40px 0px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.58,
                  delay: reduceMotion ? 0 : Math.min(i * 0.08, 0.24),
                  ease: EASE,
                }}
                whileHover={reduceMotion ? undefined : { y: -4 }}
              >
                <motion.span
                  className="air-lxp__card-index"
                  aria-hidden
                  initial={reduceMotion ? false : { opacity: 0, scale: 0.72, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.42,
                    delay: reduceMotion ? 0 : 0.12 + Math.min(i * 0.12, 0.45),
                    ease: EASE,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.span>
                <div className="air-lxp__card-content">
                  <figure className="air-lxp__image-slot air-lxp__image-slot--card" aria-label={`Card image placeholder ${i + 1}`}>
                    <img
                      className="air-lxp__image-slot-img"
                      src={INTRO_CARD_IMAGES[i]}
                      alt={`${card.title} visual`}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={420}
                    />
                  </figure>
                  <div className="air-lxp__card-text">
                    <h3 className="air-lxp__card-title">{card.title}</h3>
                    <p className="air-lxp__card-desc">{card.description}</p>
                  </div>
                </div>
                <span className="air-lxp__card-shine" aria-hidden />
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="air-lxp__school"
        aria-labelledby="air-lxp-school-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
      >
        <div className="container air-lxp__school-inner">
          <motion.h2
            id="air-lxp-school-heading"
            className="air-lxp__section-title air-lxp__section-title--intro"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            {d.learnToFlySchool.title}
          </motion.h2>
          <div className="air-lxp__school-prose">
            {d.learnToFlySchool.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                className="air-lxp__intro-p"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : i * 0.08,
                  ease: EASE,
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.section>

      <section className="air-lxp__courses" id="air-lxp-courses" aria-labelledby="air-lxp-courses-heading">
        <div className="container">
          <motion.div
            className="air-lxp__courses-head"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease: EASE }}
          >
            <h2 id="air-lxp-courses-heading" className="air-lxp__section-title">
              {d.coursesSectionTitle}
            </h2>
            <p className="air-lxp__section-lead air-lxp__section-lead--tight">{d.coursesLead}</p>
          </motion.div>
          <ul className="air-lxp__course-grid">
            {d.courses.map((item, i) => (
              <motion.li
                key={item}
                className="air-lxp__course-cell"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: EASE,
                }}
              >
                <span className="air-lxp__course-icon" aria-hidden />
                <span className="air-lxp__course-text">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <motion.section
        className="air-lxp__trial"
        aria-labelledby="air-lxp-trial-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
      >
        <div className="container">
          <motion.div
            className="air-lxp__trial-panel air-lxp__trial-panel--solo"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          >
            <div className="air-lxp__trial-copy">
              <h2 id="air-lxp-trial-heading" className="air-lxp__section-title air-lxp__section-title--on-dark">
                {d.trialSectionTitle}
              </h2>
              {d.trialParagraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="air-lxp__trial-intro"
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.06 + i * 0.05,
                    ease: EASE,
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="air-lxp__finale" aria-labelledby="air-lxp-finale-heading">
        <div className="container">
          <motion.div
            className="air-lxp__finale-card"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.65, ease: EASE }}
          >
            <h2 id="air-lxp-finale-heading" className="air-lxp__finale-title">
              {d.finalCta.title}
            </h2>
            <p className="air-lxp__finale-body">{d.finalCta.body}</p>
            <Link
              to="/contact"
              className="air-lxp__btn air-lxp__btn--gold air-lxp__btn--lg"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Light aircraft — Request information',
              }}
            >
              {d.finalCta.buttonLabel}
            </Link>
            <span className="air-lxp__finale-glow" aria-hidden />
          </motion.div>
        </div>
      </section>

      <motion.section
        className="air-lxp__gallery"
        aria-label="Light aircraft imagery"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
      >
        <div className="container">
          <h2 className="air-lxp__gallery-title">In the air</h2>
          <ul className="air-lxp__gallery-grid">
            {airLightExperiences.gallery.map((item, i) => (
              <motion.li
                key={item.src}
                className="air-lxp__gallery-cell"
                initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                  delay: reduceMotion ? 0 : i * 0.06,
                  ease: EASE,
                }}
              >
                <figure className="air-lxp__gallery-fig">
                  <div className="air-lxp__gallery-frame">
                    <img
                      className="air-lxp__gallery-img"
                      src={item.src}
                      alt={item.alt}
                      width={800}
                      height={560}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="air-lxp__gallery-shine" aria-hidden />
                  </div>
                  <figcaption className="air-lxp__gallery-cap">{item.caption}</figcaption>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  )
}
