import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, type Variants } from 'motion/react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import {
  airCategoryContent,
  airJetsInFlight,
  airLightExperiences,
  airServicesHero,
  type AirCategoryId,
} from '../data/airServicesPage'

const IDS: AirCategoryId[] = ['jets', 'light']

const JETS_EASE = [0.16, 1, 0.3, 1] as const

export default function AirServicesPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<AirCategoryId>('jets')
  const pageRef = useReveal()
  const jetsSectionRef = useRef<HTMLElement | null>(null)
  const lightSectionRef = useRef<HTMLElement | null>(null)
  const prevSelected = useRef<AirCategoryId>('jets')
  const reduceMotion = useReducedMotion()

  const jetsAnim = useMemo(() => {
    if (reduceMotion) {
      const still: Variants = { hidden: {}, visible: {} }
      return {
        introGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        introItem: still,
        listGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        article: still,
        articleBody: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        articleHeading: still,
        segmentRow: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        segmentText: still,
        segmentFig: still,
        galleryGroup: { hidden: {}, visible: { transition: { staggerChildren: 0 } } },
        galleryCell: still,
        foot: still,
      }
    }
    return {
      introGroup: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.14 },
        },
      },
      introItem: {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: JETS_EASE } },
      },
      listGroup: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.16, delayChildren: 0.06 },
        },
      },
      article: {
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.68,
            ease: JETS_EASE,
            staggerChildren: 0.13,
            delayChildren: 0.06,
          },
        },
      },
      articleBody: {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.16, delayChildren: 0.02 },
        },
      },
      articleHeading: {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      segmentRow: {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.04 } },
      },
      segmentText: {
        hidden: (flip: boolean) => ({ opacity: 0, x: flip ? 40 : -40 }),
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      segmentFig: {
        hidden: (flip: boolean) => ({ opacity: 0, x: flip ? -44 : 44, scale: 0.94 }),
        visible: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: { duration: 0.65, ease: JETS_EASE },
        },
      },
      galleryGroup: {
        hidden: { opacity: 0 },
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
      },
      galleryCell: {
        hidden: { opacity: 0, y: 36, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.58, ease: JETS_EASE },
        },
      },
      foot: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: JETS_EASE } },
      },
    }
  }, [reduceMotion])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const prev = prevSelected.current
    if (selected === 'light' && prev === 'jets') {
      requestAnimationFrame(() => {
        lightSectionRef.current?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    } else if (selected === 'jets' && prev === 'light') {
      requestAnimationFrame(() => {
        jetsSectionRef.current?.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    }
    prevSelected.current = selected
  }, [selected])

  return (
    <div className="page air-services-page" ref={pageRef}>
      <header className="topbar">
        <div className="container topbar-inner">
          <SiteLogo />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              HOME
            </Link>
            <Link
              to="/#services"
              className="nav-active"
              onClick={() => setMenuOpen(false)}
            >
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

      <section className="air-hero" aria-labelledby="air-hero-title">
        <div className="air-hero__bg" aria-hidden>
          <div className="air-hero__gradient" />
        </div>
        <div className="air-hero__ambient" aria-hidden>
          <span className="air-hero__bloom air-hero__bloom--1" />
          <span className="air-hero__bloom air-hero__bloom--2" />
        </div>
        <div className="container air-hero__shell">
          <div className="air-hero__copy">
            <p className="air-hero__eyebrow air-hero__fade air-hero__fade--1">{airServicesHero.eyebrow}</p>
            <span className="air-hero__rule air-hero__fade air-hero__fade--1" aria-hidden />
            <h1
              id="air-hero-title"
              className="air-hero__title air-hero__title--premium air-hero__fade air-hero__fade--2"
            >
              <span className="air-hero__title-line">{airServicesHero.titleWords[0]}</span>
              <span className="air-hero__title-line air-hero__title-line--accent">
                {airServicesHero.titleWords[1]}
              </span>
            </h1>
            <p className="air-hero__sub air-hero__fade air-hero__fade--3">{airServicesHero.subtitle}</p>
          </div>
          <div className="air-hero__showcase">
            <figure className="air-hero__figure air-hero__figure--jets air-hero__fade air-hero__fade--4">
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--jets"
                  src={airCategoryContent.jets.image}
                  alt={airCategoryContent.jets.imageAlt}
                  width={1200}
                  height={750}
                  decoding="async"
                  fetchPriority="high"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <figcaption className="air-hero__cap">{airCategoryContent.jets.title}</figcaption>
            </figure>
            <figure className="air-hero__figure air-hero__figure--light air-hero__fade air-hero__fade--5">
              <div className="air-hero__frame">
                <img
                  className="air-hero__img air-hero__img--light"
                  src={airCategoryContent.light.image}
                  alt={airCategoryContent.light.imageAlt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  decoding="async"
                />
                <span className="air-hero__sheen" aria-hidden />
              </div>
              <figcaption className="air-hero__cap">{airCategoryContent.light.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="air-pick" aria-label="Aircraft type">
        <div className="container">
          <div className="air-pick__grid" role="tablist" aria-label="Aircraft category">
            {IDS.map((id) => {
              const item = airCategoryContent[id]
              const isActive = selected === id
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`air-tab-${id}`}
                  aria-selected={isActive}
                  aria-controls={id === 'light' ? 'air-light-experiences' : 'air-jets-inflight'}
                  className={`air-pick__card ${isActive ? 'air-pick__card--active' : ''}`}
                  onClick={() => setSelected(id)}
                >
                  <span className="air-pick__card-idx" aria-hidden>
                    {id === 'jets' ? '01' : '02'}
                  </span>
                  <span className="air-pick__card-body">
                    <span className="air-pick__card-title">{item.title}</span>
                    <span className="air-pick__card-tag">{item.tagline}</span>
                  </span>
                  <span className="air-pick__card-arrow" aria-hidden />
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {selected === 'jets' && (
        <section
          ref={jetsSectionRef}
          className="air-jets-inflight"
          id="air-jets-inflight"
          role="tabpanel"
          tabIndex={-1}
          aria-labelledby="air-tab-jets"
        >
          <div className="air-jets-inflight__ambient" aria-hidden>
            <span className="air-jets-inflight__glow air-jets-inflight__glow--1" />
            <span className="air-jets-inflight__glow air-jets-inflight__glow--2" />
          </div>
          <div className="container">
            <motion.div
              className="air-jets-inflight__load-hero"
              variants={jetsAnim.introGroup}
              initial="hidden"
              animate="visible"
            >
              <header className="air-jets-inflight__header">
                <motion.p className="air-jets-inflight__eyebrow" variants={jetsAnim.introItem}>
                  Private jet
                </motion.p>
                <motion.h2 className="air-jets-inflight__title" variants={jetsAnim.introItem}>
                  {airJetsInFlight.headline}
                </motion.h2>
                <div className="air-jets-inflight__intro">
                  {airJetsInFlight.intro.map((para, i) => (
                    <motion.p key={i} className="air-jets-inflight__intro-p" variants={jetsAnim.introItem}>
                      {para}
                    </motion.p>
                  ))}
                </div>
              </header>

              <motion.blockquote className="air-jets-inflight__quote" variants={jetsAnim.introItem}>
                <p className="air-jets-inflight__quote-text">{airJetsInFlight.quote}</p>
              </motion.blockquote>
            </motion.div>

            <motion.ol
              className="air-jets-inflight__features"
              aria-label="In-flight service articles"
              variants={jetsAnim.listGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.06, margin: '0px 0px -8% 0px' }}
            >
              {airJetsInFlight.sections.map((block, i) => {
                const segmentsBefore = airJetsInFlight.sections
                  .slice(0, i)
                  .reduce((acc, s) => acc + s.segments.length, 0)
                return (
                  <motion.li key={block.title} className="air-jets-inflight__article" variants={jetsAnim.article}>
                    <motion.h3 className="air-jets-inflight__article-title" variants={jetsAnim.articleHeading}>
                      {block.title}
                    </motion.h3>
                    <motion.div className="air-jets-inflight__article-body" variants={jetsAnim.articleBody}>
                      {block.segments.map((seg, si) => {
                        const globalSegIndex = segmentsBefore + si
                        const flipLayout = globalSegIndex % 2 === 1
                        return (
                          <motion.div
                            key={`${block.title}-${si}`}
                            className={`air-jets-inflight__segment${flipLayout ? ' air-jets-inflight__segment--flip' : ''}`}
                            variants={jetsAnim.segmentRow}
                          >
                            <motion.p
                              className="air-jets-inflight__segment-text"
                              variants={jetsAnim.segmentText}
                              custom={flipLayout}
                            >
                              {seg.paragraph}
                            </motion.p>
                            <motion.figure
                              className="air-jets-inflight__segment-fig"
                              variants={jetsAnim.segmentFig}
                              custom={flipLayout}
                            >
                              <div className="air-jets-inflight__segment-frame">
                                <img
                                  className="air-jets-inflight__segment-img"
                                  src={seg.image.src}
                                  alt={seg.image.alt}
                                  width={960}
                                  height={540}
                                  loading="lazy"
                                  decoding="async"
                                />
                                <span className="air-jets-inflight__segment-shine" aria-hidden />
                              </div>
                              {seg.caption ? (
                                <figcaption className="air-jets-inflight__segment-cap">{seg.caption}</figcaption>
                              ) : null}
                            </motion.figure>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </motion.li>
                )
              })}
            </motion.ol>

            <motion.ul
              className="air-jets-inflight__gallery"
              aria-label="Private aviation imagery"
              variants={jetsAnim.galleryGroup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
            >
              {airJetsInFlight.gallery.map((item) => (
                <motion.li key={item.src} className="air-jets-inflight__cell" variants={jetsAnim.galleryCell}>
                  <figure className="air-jets-inflight__fig">
                    <div className="air-jets-inflight__img-wrap">
                      <img
                        className="air-jets-inflight__img"
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={560}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="air-jets-inflight__img-shine" aria-hidden />
                    </div>
                    <figcaption className="air-jets-inflight__caption">{item.caption}</figcaption>
                  </figure>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="air-jets-inflight__foot"
              variants={jetsAnim.foot}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link
                to="/contact"
                className="air-jets-inflight__btn"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Private Jets — In-flight & charter',
                }}
              >
                Request details
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {selected === 'light' && (
        <section
          ref={lightSectionRef}
          className="air-light-experiences"
          id="air-light-experiences"
          role="tabpanel"
          tabIndex={-1}
          aria-labelledby="air-tab-light"
        >
          <div className="air-light-experiences__ambient" aria-hidden>
            <span className="air-light-experiences__glow air-light-experiences__glow--1" />
            <span className="air-light-experiences__glow air-light-experiences__glow--2" />
          </div>
          <div className="container">
            <header className="air-light-experiences__header">
              <motion.p
                className="air-light-experiences__eyebrow"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Light aircraft
              </motion.p>
              <motion.h2
                className="air-light-experiences__title"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.65,
                  delay: reduceMotion ? 0 : 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {airLightExperiences.headline}
              </motion.h2>
              <div className="air-light-experiences__intro">
                <motion.p
                  className="air-light-experiences__hook"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {airLightExperiences.introHook}
                </motion.p>
                {airLightExperiences.intro.map((para, i) => (
                  <motion.p
                    key={i}
                    className="air-light-experiences__intro-p"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.55,
                      delay: reduceMotion ? 0 : 0.16 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
            </header>

            <div className="air-light-experiences__prose">
              <div className="air-light-experiences__journeys" aria-label="Experience types">
                {airLightExperiences.journeys.map((journey, ji) => (
                  <motion.article
                    key={journey.title}
                    className={`air-light-experiences__journey ${ji % 2 === 1 ? 'air-light-experiences__journey--alt' : ''}`}
                    initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-36px' }}
                    transition={{
                      duration: reduceMotion ? 0.01 : 0.55,
                      delay: reduceMotion ? 0 : Math.min(ji * 0.06, 0.24),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <h3 className="air-light-experiences__journey-title">{journey.title}</h3>
                    {journey.paragraphs.map((p, pi) => (
                      <p key={pi} className="air-light-experiences__journey-p">
                        {p}
                      </p>
                    ))}
                  </motion.article>
                ))}
              </div>

              <motion.section
                className="air-light-experiences__school"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                aria-labelledby="air-light-school-heading"
              >
                <h3 id="air-light-school-heading" className="air-light-experiences__school-title">
                  {airLightExperiences.flightSchool.title}
                </h3>
                {airLightExperiences.flightSchool.paragraphs.map((p, i) => (
                  <p key={i} className="air-light-experiences__school-p">
                    {p}
                  </p>
                ))}
              </motion.section>

              <motion.section
                className="air-light-experiences__qual"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                aria-labelledby="air-light-qual-heading"
              >
                <h3 id="air-light-qual-heading" className="air-light-experiences__qual-title">
                  {airLightExperiences.qualifications.title}
                </h3>
                <p className="air-light-experiences__qual-lead">{airLightExperiences.qualifications.lead}</p>
                <ul className="air-light-experiences__qual-list">
                  {airLightExperiences.qualifications.items.map((item) => (
                    <li key={item} className="air-light-experiences__qual-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.section
                className="air-light-experiences__trial"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-32px' }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                aria-labelledby="air-light-trial-heading"
              >
                <h3 id="air-light-trial-heading" className="air-light-experiences__trial-title">
                  {airLightExperiences.trialAndMembership.title}
                </h3>
                {airLightExperiences.trialAndMembership.paragraphs.map((p, i) => (
                  <p key={i} className="air-light-experiences__trial-p">
                    {p}
                  </p>
                ))}
                <p className="air-light-experiences__trial-membership-lead">
                  {airLightExperiences.trialAndMembership.membershipLead}
                </p>
                <ul className="air-light-experiences__trial-list">
                  {airLightExperiences.trialAndMembership.membershipItems.map((item) => (
                    <li key={item} className="air-light-experiences__trial-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.section>

              <motion.aside
                className="air-light-experiences__outro"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-24px' }}
                transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                aria-labelledby="air-light-outro-heading"
              >
                <h3 id="air-light-outro-heading" className="air-light-experiences__outro-title">
                  {airLightExperiences.closing.title}
                </h3>
                <p className="air-light-experiences__outro-body">{airLightExperiences.closing.body}</p>
              </motion.aside>
            </div>

            <ul className="air-light-experiences__gallery" aria-label="Scenes from light aircraft experiences">
              {airLightExperiences.gallery.map((item, i) => (
                <motion.li
                  key={item.src}
                  className="air-light-experiences__cell"
                  initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: reduceMotion ? 0.01 : 0.55,
                    delay: reduceMotion ? 0 : i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <figure className="air-light-experiences__fig">
                    <div className="air-light-experiences__img-wrap">
                      <img
                        className="air-light-experiences__img"
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={560}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="air-light-experiences__img-shine" aria-hidden />
                    </div>
                    <figcaption className="air-light-experiences__caption">
                      {item.caption}
                    </figcaption>
                  </figure>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="air-light-experiences__foot"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: reduceMotion ? 0 : 0.2,
                duration: reduceMotion ? 0.01 : 0.5,
              }}
            >
              <Link
                to="/contact"
                className="air-light-experiences__btn"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'Light Aircraft — Experiences, tours & flying school',
                }}
              >
                {airLightExperiences.closing.buttonLabel}
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
