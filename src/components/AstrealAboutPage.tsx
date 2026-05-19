import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { astrealAboutImage } from '../data/astrealDevelopersPage'
import { useReveal } from '../hooks/useReveal'

const VIEW = { once: true, amount: 0.35, margin: '-48px 0px' } as const
const EASE = [0.22, 1, 0.36, 1] as const

export default function AstrealAboutPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const aboutEase = EASE

  const aboutTitleMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 38, filter: 'blur(12px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.78, ease: aboutEase, delay: 0 },
      }

  const aboutEyebrow = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 22, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.62, ease: aboutEase, delay: 0.18 },
      }

  const aboutLead = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.72, ease: aboutEase, delay: 0.26 },
      }

  const aboutPara = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, filter: 'blur(8px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: VIEW,
        transition: { duration: 0.72, ease: aboutEase, delay: 0.34 },
      }

  const aboutQuote = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, rotate: -0.5 },
        whileInView: { opacity: 1, y: 0, rotate: 0 },
        viewport: VIEW,
        transition: { type: 'spring' as const, stiffness: 70, damping: 22, delay: 0.42 },
      }

  const aboutImage = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -48, scale: 1.04 },
        whileInView: { opacity: 1, x: 0, scale: 1 },
        viewport: VIEW,
        transition: { duration: 0.85, ease: aboutEase, delay: 0.12 },
      }

  return (
    <div className="page astreal-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <main className="astreal-about-page">
        <div className="astreal-about-page__shell">
          <nav className="astreal-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services/astreal">Astreal Developers</Link>
            <span className="astreal-detail-breadcrumb__sep" aria-hidden>
              /
            </span>
            <span className="astreal-detail-breadcrumb__current">About us</span>
          </nav>

          <section
            className="astreal-about astreal-about--premium astreal-about--page-layout"
            aria-labelledby="astreal-about-heading"
          >
            <motion.div className="astreal-about__grid astreal-about-page__grid">
              <motion.figure className="astreal-about-page__figure" {...aboutImage}>
                <img
                  src={astrealAboutImage}
                  alt="ASTREAL Developers — architecture and development in Cyprus"
                  width={2240}
                  height={1260}
                  loading="lazy"
                  decoding="async"
                />
                <span className="astreal-about-page__figure-accent" aria-hidden />
              </motion.figure>

              <motion.div className="astreal-about-page__content">
              <header className="astreal-about-page__masthead">
                <motion.h1
                  id="astreal-about-heading"
                  className="astreal-about-page__heading"
                  {...aboutTitleMotion}
                >
                  About us
                </motion.h1>
              </header>

              <motion.span className="astreal-about__eyebrow astreal-about-page__eyebrow" {...aboutEyebrow}>
                Who we are
              </motion.span>

              <motion.p className="astreal-lead astreal-lead--about astreal-about-page__lead" {...aboutLead}>
                <strong>ASTREAL Developers</strong> provides integrated services in architectural design,
                construction, development and project management.
              </motion.p>

              <motion.p className="astreal-about__prose astreal-about-page__prose" {...aboutPara}>
                We insist on design excellence, with a primary commitment to excellent customer service.
                Based on extensive and many years of professional experience, our office is a valuable and
                reliable professional partner for the development of property — working to maximize its
                performance.
              </motion.p>

              <motion.blockquote className="astreal-quote astreal-quote--about-page" {...aboutQuote}>
                <p>
                  We understand that a home is not just a place. We build to ensure comfort for a lifetime
                  in our homes.
                </p>
              </motion.blockquote>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
