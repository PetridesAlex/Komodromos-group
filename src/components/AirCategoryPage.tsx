import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteLogo from './SiteLogo'
import TopbarSocialLinks from './TopbarSocialLinks'
import { useReveal } from '../hooks/useReveal'
import { useAirJetsAnim } from '../hooks/useAirJetsAnim'
import {
  airCategoryContent,
  airCategoryPath,
  airJetsInFlight,
  airLightExperiences,
  airSlugToCategoryId,
  type AirCategoryId,
  type AirJetsInflightSegment,
} from '../data/airServicesPage'

const BASE_TITLE = 'Komodromos'

export default function AirCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>()
  const categoryId = airSlugToCategoryId(categorySlug)
  const [menuOpen, setMenuOpen] = useState(false)
  const pageRef = useReveal()
  const jetsAnim = useAirJetsAnim()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categorySlug])

  useEffect(() => {
    if (!categoryId) return
    const content = airCategoryContent[categoryId]
    const prev = document.title
    document.title = `${content.title} · Air Services · ${BASE_TITLE}`
    return () => {
      document.title = prev
    }
  }, [categoryId])

  if (!categoryId) {
    return <Navigate to="/services/air" replace />
  }

  const content = airCategoryContent[categoryId]
  const otherId: AirCategoryId = categoryId === 'jets' ? 'light' : 'jets'
  const other = airCategoryContent[otherId]
  const otherPath = `/services/air/${airCategoryPath[otherId]}`

  return (
    <div className="page air-services-page air-category-page" ref={pageRef}>
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

      <section className="air-category-hero" aria-labelledby="air-category-title">
        <div className="air-category-hero__bg" aria-hidden>
          <div className="air-category-hero__gradient" />
        </div>
        <div className="container air-category-hero__inner">
          <nav className="air-category-breadcrumb" aria-label="Breadcrumb">
            <ol className="air-category-breadcrumb__list">
              <li className="air-category-breadcrumb__item">
                <Link to="/" className="air-category-breadcrumb__link">
                  Home
                </Link>
              </li>
              <li className="air-category-breadcrumb__item" aria-hidden>
                <span className="air-category-breadcrumb__sep">/</span>
              </li>
              <li className="air-category-breadcrumb__item">
                <Link to="/services/air" className="air-category-breadcrumb__link">
                  Air Services
                </Link>
              </li>
              <li className="air-category-breadcrumb__item" aria-hidden>
                <span className="air-category-breadcrumb__sep">/</span>
              </li>
              <li className="air-category-breadcrumb__item air-category-breadcrumb__item--current">
                <span aria-current="page">{content.title}</span>
              </li>
            </ol>
          </nav>

          <div className="air-category-hero__layout">
            <div className="air-category-hero__copy">
              <p className="air-category-hero__eyebrow">{content.tagline}</p>
              <h1 id="air-category-title" className="air-category-hero__title">
                {content.title}
              </h1>
              <p className="air-category-hero__lead">{content.lead}</p>
              <p className="air-category-hero__footnote">{content.footnote}</p>
              <div className="air-category-hero__actions">
                <Link to="/contact" className="air-category-hero__cta" state={{ serviceInterest: 'VIP Services' }}>
                  Enquire
                </Link>
                <Link to="/services/air" className="air-category-hero__cta air-category-hero__cta--ghost">
                  All air services
                </Link>
              </div>
            </div>
            <figure className="air-category-hero__figure">
              <div className="air-category-hero__frame">
                <img
                  className="air-category-hero__img"
                  src={content.image}
                  alt={content.imageAlt}
                  width={960}
                  height={600}
                  decoding="async"
                  fetchPriority="high"
                />
                <span className="air-category-hero__sheen" aria-hidden />
              </div>
            </figure>
          </div>

          <ul className="air-category-highlights" aria-label="Highlights">
            {content.highlights.map((h) => (
              <li key={h.label} className="air-category-highlights__item">
                <span className="air-category-highlights__label">{h.label}</span>
                <p className="air-category-highlights__text">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className="air-category-cross" aria-label="Related air category">
        <div className="container air-category-cross__inner">
          <p className="air-category-cross__label">Also explore</p>
          <Link to={otherPath} className="air-category-cross__link">
            <span className="air-category-cross__link-title">{other.title}</span>
            <span className="air-category-cross__link-tag">{other.tagline}</span>
            <span className="air-category-cross__link-arrow" aria-hidden />
          </Link>
        </div>
      </nav>

      {categoryId === 'jets' ? (
        <section
          className="air-jets-inflight"
          id="air-jets-inflight"
          aria-labelledby="air-jets-section-heading"
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
                  In-flight & charter
                </motion.p>
                <motion.h2 className="air-jets-inflight__title" id="air-jets-section-heading" variants={jetsAnim.introItem}>
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
                      {(block.segments as readonly AirJetsInflightSegment[]).map((seg, si) => {
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
                              <div
                                className={`air-jets-inflight__segment-frame${seg.image ? '' : ' air-jets-inflight__segment-frame--placeholder'}`}
                              >
                                {seg.image ? (
                                  <>
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
                                  </>
                                ) : (
                                  <div
                                    className="air-jets-inflight__segment-placeholder"
                                    role="img"
                                    aria-label={
                                      seg.caption
                                        ? `Image placeholder — ${seg.caption}`
                                        : 'Image placeholder'
                                    }
                                  >
                                    <span className="air-jets-inflight__segment-placeholder__label">Insert image</span>
                                    {seg.caption ? (
                                      <span className="air-jets-inflight__segment-placeholder__hint">{seg.caption}</span>
                                    ) : null}
                                  </div>
                                )}
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
      ) : (
        <section className="air-light-experiences" id="air-light-experiences" aria-labelledby="air-light-section-heading">
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
                Full programme
              </motion.p>
              <motion.h2
                className="air-light-experiences__title"
                id="air-light-section-heading"
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
                    <figcaption className="air-light-experiences__caption">{item.caption}</figcaption>
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
