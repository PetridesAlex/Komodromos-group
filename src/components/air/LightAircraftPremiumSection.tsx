import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import {
  airCategoryContent,
  airLightFleetPath,
  airLightExperiences,
  airLightPremiumPage,
} from '../../data/airServicesPage'

const EASE = [0.16, 1, 0.3, 1] as const

/** Same editorial cards as private jets (`air-pjp__story-*`) — image per signature experience. */
const LIGHT_SIGNATURE_IMAGES = [
  {
    src: '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-1.webp',
    alt: 'Scenic light aircraft flight over Cyprus coastlines',
  },
  {
    src: '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-2.webp',
    alt: 'Light aircraft journey over the Mediterranean',
  },
  {
    src: '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-3.webp',
    alt: 'Premium light aircraft cabin and aerial perspective',
  },
  {
    src: '/images/services/vip-service/air-services/light-aircrafts/light-aircraft-introduction-4.webp',
    alt: 'Light aircraft experience — islands and open skies',
  },
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
          <div className="air-lxp__intro-layout">
            <div className="air-lxp__intro-heading-col">
              <motion.h2 id="air-lxp-intro-heading" className="air-lxp__section-title air-lxp__section-title--intro">
                {d.introHeading}
              </motion.h2>
              <p className="air-lxp__intro-kicker">{d.introKicker}</p>
            </div>
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
          <motion.div
            className="air-pjp__world"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.62, ease: EASE }}
          >
            <ul className="air-pjp__story-grid">
              {d.experienceCards.map((card, i) => {
                const cardImage = LIGHT_SIGNATURE_IMAGES[i]

                return (
                  <motion.li
                    key={card.title}
                    className="air-pjp__story-card"
                    initial={reduceMotion ? false : { opacity: 0, y: 38, scale: 0.975 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.28, margin: '-10% 0px -12% 0px' }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.64,
                      delay: reduceMotion ? 0 : i * 0.07,
                      ease: EASE,
                    }}
                    whileHover={reduceMotion ? undefined : { y: -7, scale: 1.014 }}
                  >
                    <motion.div
                      className="air-pjp__story-content"
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.35, margin: '-10% 0px -10% 0px' }}
                      transition={{ duration: reduceMotion ? 0 : 0.52, ease: EASE }}
                    >
                      <motion.figure
                        className="air-pjp__story-media"
                        aria-label={`${card.title} visual`}
                        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: reduceMotion ? 0 : 0.58, ease: EASE }}
                      >
                        {cardImage ? (
                          <img
                            className="air-pjp__story-img"
                            src={cardImage.src}
                            alt={cardImage.alt}
                            loading="lazy"
                            decoding="async"
                            width={900}
                            height={620}
                          />
                        ) : (
                          <div className="air-pjp__story-placeholder">
                            <span className="air-pjp__story-placeholder-label">Image will be added</span>
                          </div>
                        )}
                      </motion.figure>
                      <motion.div
                        className="air-pjp__story-text"
                        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.54,
                          delay: reduceMotion ? 0 : 0.04,
                          ease: EASE,
                        }}
                      >
                        <span className="air-pjp__story-index">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="air-pjp__story-title">{card.title}</h3>
                        <motion.p
                          className="air-pjp__story-paragraph"
                          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-30px' }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.48,
                            delay: reduceMotion ? 0 : 0.08,
                            ease: EASE,
                          }}
                        >
                          {card.description}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                    <span className="air-pjp__story-shine" aria-hidden />
                  </motion.li>
                )
              })}
            </ul>
          </motion.div>
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
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -2, 0],
                      }
                }
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  opacity: { duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.06, ease: EASE },
                  y: reduceMotion
                    ? { duration: 0 }
                    : {
                        duration: 3.8 + (i % 3) * 0.45,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: 0.15 + i * 0.18,
                      },
                }}
                whileHover={reduceMotion ? undefined : { y: -7, scale: 1.015 }}
                whileTap={reduceMotion ? undefined : { scale: 0.995 }}
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
