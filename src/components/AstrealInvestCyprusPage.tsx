import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  ASTREAL_INVEST_CYPRUS_HERO_IMAGE,
  ASTREAL_INVEST_CYPRUS_INTRO,
} from '../data/astrealInvestCyprusContent'

const VIEW = { once: true, amount: 0.35, margin: '-48px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const
const content = ASTREAL_INVEST_CYPRUS_INTRO

const highlightContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
} as const

const highlightItem = {
  hidden: { opacity: 0, x: -14, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: EASE },
  },
} as const

export default function AstrealInvestCyprusPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 32, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: VIEW,
          transition: { duration: 0.72, ease: EASE, delay },
        }

  const titleLineMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40, filter: 'blur(14px)', clipPath: 'inset(0 100% 0 0)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0% 0 0)' },
        transition: { duration: 0.95, ease: EASE, delay: 0.1 },
      }

  const titleAccentMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.85, ease: EASE, delay: 0.28 },
      }

  const eyebrowMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, letterSpacing: '0.42em', y: 12 },
        animate: { opacity: 1, letterSpacing: '0.22em', y: 0 },
        transition: { duration: 0.75, ease: EASE, delay: 0.42 },
      }

  const figureMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 48, scale: 0.96, filter: 'blur(12px)' },
        animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
        transition: { type: 'spring' as const, stiffness: 72, damping: 18, mass: 0.85, delay: 0.52 },
      }

  const imgMotion = reduceMotion
    ? {}
    : {
        initial: { scale: 1.12 },
        animate: { scale: 1 },
        transition: { duration: 1.35, ease: EASE, delay: 0.55 },
      }

  const imgDrift = reduceMotion
    ? {}
    : {
        animate: { scale: [1, 1.045, 1] },
        transition: {
          duration: 14,
          ease: 'easeInOut' as const,
          repeat: Infinity,
          repeatType: 'mirror' as const,
        },
      }

  return (
    <div className="page astreal-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="astreal-about-page astreal-invest-page">
        <div className="astreal-about-page__shell">
          <nav className="astreal-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services/astreal">Astreal Developers</Link>
            <span className="astreal-detail-breadcrumb__sep" aria-hidden>
              /
            </span>
            <span className="astreal-detail-breadcrumb__current">Invest in Cyprus</span>
          </nav>

          <section
            className="astreal-about astreal-about--premium astreal-about--page-layout"
            aria-labelledby="astreal-invest-heading"
          >
            <div className="astreal-about-page__content astreal-invest-page__content">
              <header className="astreal-about-page__masthead">
                <h1 id="astreal-invest-heading" className="astreal-about-page__heading astreal-invest-page__heading">
                  <motion.span className="astreal-invest-page__heading-line" {...titleLineMotion}>
                    {content.title}
                  </motion.span>
                  <motion.span className="astreal-invest-page__heading-accent" {...titleAccentMotion}>
                    {content.titleAccent}
                  </motion.span>
                </h1>
              </header>

              <motion.span
                className="astreal-about__eyebrow astreal-about-page__eyebrow astreal-invest-page__eyebrow"
                {...eyebrowMotion}
              >
                {content.eyebrow}
              </motion.span>

              <motion.figure className="astreal-invest-page__figure" {...figureMotion}>
                <span className="astreal-invest-page__figure-shine" aria-hidden />
                <motion.div className="astreal-invest-page__figure-media" {...imgMotion}>
                  <motion.img
                    src={ASTREAL_INVEST_CYPRUS_HERO_IMAGE}
                    alt={content.heroImageAlt}
                    width={1600}
                    height={900}
                    loading="eager"
                    decoding="async"
                    className="astreal-invest-page__img"
                    {...imgDrift}
                  />
                </motion.div>
              </motion.figure>

              <motion.h2 className="astreal-invest-page__section-title" {...fadeUp(0.08)}>
                {content.sectionTitle}
              </motion.h2>

              {content.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={paragraph.slice(0, 48)}
                  className="astreal-about__prose astreal-about-page__prose"
                  {...fadeUp(0.16 + i * 0.08)}
                >
                  {paragraph}
                </motion.p>
              ))}

              <motion.ul
                className="astreal-invest-page__highlights"
                variants={reduceMotion ? undefined : highlightContainer}
                initial={reduceMotion ? undefined : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={VIEW}
              >
                {content.highlights.map((item) => (
                  <motion.li key={item} variants={reduceMotion ? undefined : highlightItem}>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
