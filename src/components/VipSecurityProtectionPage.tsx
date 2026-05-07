import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

const VIP_SECURITY_GALLERY = [
  '/images/services/vip-service/Security-services/vip-security-1.webp',
  '/images/services/vip-service/Security-services/vip-security-2.webp',
  '/images/services/vip-service/Security-services/vip-security-3.webp',
  '/images/services/vip-service/Security-services/vip-security-6.webp',
  '/images/services/vip-service/Security-services/vip-security-5.webp',
  '/images/services/vip-service/Security-services/vip-security-4.webp',
] as const

const viewportStory = {
  once: true,
  amount: 0.22,
  margin: '-80px 0px',
} as const

/** Snappier / more elastic exit from rest — reads stronger on scroll */
const EASE_IMPACT = [0.12, 0.85, 0.18, 1] as const

const springEnter = {
  type: 'spring' as const,
  stiffness: 88,
  damping: 19,
  mass: 0.72,
}

const hoverPop = {
  scale: 1.03,
  transition: { type: 'spring' as const, stiffness: 400, damping: 22 },
}

const hoverHero = {
  scale: 1.02,
  transition: { type: 'spring' as const, stiffness: 380, damping: 24 },
}

export default function VipSecurityProtectionPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const imgLeft = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: -110, scale: 0.88, rotate: -6 },
        whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
        transition: springEnter,
        viewport: viewportStory,
        whileHover: hoverPop,
      }

  const imgRight = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 110, scale: 0.88, rotate: 6 },
        whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
        transition: springEnter,
        viewport: viewportStory,
        whileHover: hoverPop,
      }

  const imgHero = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.78, y: 72, rotate: 4 },
        whileInView: { opacity: 1, scale: 1, y: 0, rotate: 0 },
        transition: { ...springEnter, stiffness: 76, damping: 18 },
        viewport: viewportStory,
        whileHover: hoverHero,
      }

  const textReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 56, filter: 'blur(14px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.82, ease: EASE_IMPACT },
        viewport: viewportStory,
      }

  const panelBlock = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 44, filter: 'blur(12px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: viewportStory,
          transition: { duration: 0.72, ease: EASE_IMPACT, delay },
        }

  const panelClosing = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 36, filter: 'blur(10px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: viewportStory,
        transition: { duration: 0.68, ease: EASE_IMPACT, delay: 0.06 },
      }

  const panelActions = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28, scale: 0.96 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        viewport: viewportStory,
        transition: { type: 'spring' as const, stiffness: 120, damping: 20, delay: 0.12 },
      }

  return (
    <div className="page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/services"
      />

      <section className="service-detail-hero service-detail-hero--vip-full" data-hero-parallax-root>
        <div className="service-detail-hero-bg limo-detail-hero-bg" aria-hidden data-hero-parallax />
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">VIP Protection</p>
          <h1 className="reveal reveal-delay-1">VIP Security & Protection</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Bespoke executive protection for a world of modern threats.
          </p>
        </div>
      </section>

      <section className="service-default-sections limo-detail">
        <div className="container">
          <div className="vip-security-layout">
            {/* Intro — text + hero image */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--intro">
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <p className="limo-detail__eyebrow">Executive protection by Luxury Sky</p>
                <h2>Bespoke Executive Protection for a World of Modern Threats</h2>
                <p className="limo-detail__lead">
                  Elevate your personal security with a refined, discreet protection service designed
                  for today&apos;s dynamic risk landscape. At Luxury Sky, we safeguard your lifestyle
                  with precision, professionalism, and absolute confidentiality - wherever you are,
                  whatever challenges may arise.
                </p>
              </motion.div>
              <motion.figure
                className="vip-security-story__fig vip-security-story__fig--hero"
                {...imgHero}
              >
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[0]}
                    alt=""
                    className="vip-security-story__img"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </motion.figure>
            </motion.article>

            {/* Image left */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--flip-md">
              <motion.figure className="vip-security-story__fig" {...imgLeft}>
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[1]}
                    alt=""
                    className="vip-security-story__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.figure>
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <h3 className="limo-detail__subhead">Specialized protection for high-profile individuals</h3>
                <div className="limo-detail__prose">
                  <p>
                    At Luxury Sky, we deliver tailored executive protection solutions designed for
                    individuals operating in high-risk environments. Whether due to public visibility,
                    strategic responsibility, or elevated net worth, our approach is meticulously
                    structured to ensure maximum security and absolute discretion.
                  </p>
                  <p>
                    Our focused methodology is built to safeguard those who are essential to your
                    operations - providing peace of mind, operational continuity, and uncompromising
                    protection at every level.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* Image right */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--flip-md vip-security-story__segment--reverse-md">
              <motion.figure className="vip-security-story__fig" {...imgRight}>
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[2]}
                    alt=""
                    className="vip-security-story__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.figure>
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <h3 className="limo-detail__subhead">Protecting reputation and essential leadership</h3>
                <div className="limo-detail__prose">
                  <p>
                    At Luxury Sky, executive protection goes beyond personal safety - it is a strategic
                    safeguard for your brand and your most valuable people. Our services are designed to
                    preserve your reputation while ensuring the security and well-being of key individuals
                    who represent your organization at the highest level.
                  </p>
                  <p>
                    Through proactive planning and discreet execution, we mitigate risks before they
                    arise - protecting both your public image and your leadership from potential threats
                    in an increasingly complex environment.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* Image left */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--flip-md">
              <motion.figure className="vip-security-story__fig" {...imgLeft}>
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[3]}
                    alt=""
                    className="vip-security-story__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.figure>
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <h3 className="limo-detail__subhead">Seamless global protection in motion</h3>
                <div className="limo-detail__prose">
                  <p>
                    At Luxury Sky, security travels with you. Our executive protection services go far
                    beyond static coverage, delivering continuous, end-to-end protection for individuals
                    on the move - across cities, countries, and continents.
                  </p>
                  <p>
                    With meticulous planning and adaptive strategies, we ensure uninterrupted security in
                    every environment, effectively mitigating risks across diverse geographical landscapes
                    while maintaining discretion, comfort, and operational continuity.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* Image right */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--flip-md vip-security-story__segment--reverse-md">
              <motion.figure className="vip-security-story__fig" {...imgRight}>
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[4]}
                    alt=""
                    className="vip-security-story__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.figure>
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <h3 className="limo-detail__subhead">Is your organization truly prepared?</h3>
                <div className="limo-detail__prose">
                  <p>
                    In today&apos;s increasingly complex global environment, safeguarding your leadership
                    is not merely a matter of personal security - it is a strategic necessity. Your
                    executives represent the core of your organization: they carry critical decision-making
                    authority, sensitive intelligence, and the vision that drives your success.
                  </p>
                  <p>
                    At Luxury Sky, our Executive Protection Services are designed to strengthen your
                    resilience against evolving threats - ensuring business continuity, regulatory
                    alignment, and a sustained competitive advantage in every environment.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* Image left — shorter closing story beat */}
            <motion.article className="vip-security-story__segment vip-security-story__segment--flip-md">
              <motion.figure className="vip-security-story__fig" {...imgLeft}>
                <div className="vip-security-story__img-shell vip-security-story__img-shell--drift">
                  <img
                    src={VIP_SECURITY_GALLERY[5]}
                    alt=""
                    className="vip-security-story__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.figure>
              <motion.div className="vip-security-story__copy" {...textReveal}>
                <h3 className="limo-detail__subhead">Elite protection for high-profile individuals</h3>
                <div className="limo-detail__prose">
                  <p>
                    Luxury Sky delivers world-class security solutions tailored to executives,
                    high-net-worth individuals, public figures, and their families. Our integrated
                    approach combines discretion, precision, and operational excellence - ensuring safety
                    without compromising lifestyle, privacy, or efficiency.
                  </p>
                </div>
              </motion.div>
            </motion.article>

            {/* Dense panel: capabilities + closing */}
            <div className="service-default-block limo-detail__panel vip-security-panel reveal">
              <motion.div {...panelBlock(0)}>
                <h3 className="limo-detail__subhead">Our capabilities</h3>
                <div className="limo-detail__facts">
                  <article>
                    <h3>Bespoke close protection</h3>
                    <p>
                      Protection specialists from elite military and law enforcement backgrounds, with
                      coverage adapted from overt teams to refined low-profile presence.
                    </p>
                  </article>
                  <article>
                    <h3>Residential security excellence</h3>
                    <p>
                      Advanced security systems, controlled access protocols, and dedicated 24/7
                      residential teams for complete property protection.
                    </p>
                  </article>
                  <article>
                    <h3>Advanced protective intelligence</h3>
                    <p>
                      Continuous threat monitoring, in-depth risk analysis, and intelligence-led
                      prevention to neutralize risks before they materialize.
                    </p>
                  </article>
                  <article>
                    <h3>Rapid emergency response</h3>
                    <p>
                      Crisis-ready teams that execute evacuations, coordinate with authorities, and
                      protect both individuals and operations under pressure.
                    </p>
                  </article>
                </div>
              </motion.div>

              <motion.div {...panelBlock(0.1)}>
                <h3 className="limo-detail__subhead">Strategic business advantages</h3>
                <ul className="limo-detail__occasion-list">
                  <li>Enhancing brand integrity and public confidence</li>
                  <li>Regulatory compliance and risk mitigation in high-exposure sectors</li>
                  <li>Protection of critical information and strategic assets</li>
                </ul>
                <p>
                  Investing in elite executive protection demonstrates responsibility, reinforces trust
                  with stakeholders, minimizes liability, and preserves operational continuity.
                </p>
              </motion.div>

              <motion.p className="limo-detail__closing" {...panelClosing}>
                Partner with Luxury Sky to protect not only your people - but the future they
                represent.
              </motion.p>
              <motion.div className="limo-detail__actions" {...panelActions}>
                <Link
                  to="/contact"
                  className="limo-detail__cta"
                  state={{
                    serviceInterest: 'VIP Services',
                    vipSubService: 'VIP Security & Protection',
                  }}
                >
                  Request private consultation
                </Link>
                <Link to="/services/vip" className="limo-detail__back">
                  Back to VIP services
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
