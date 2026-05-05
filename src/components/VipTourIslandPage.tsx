import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'

export default function VipTourIslandPage() {
  const pageRef = useReveal()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function scrollToTourSection() {
    const el = document.getElementById('vip-tour-content')
    if (!el) return
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
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
        <div
          className="service-detail-hero-bg"
          aria-hidden
          data-hero-parallax
          style={{
            backgroundImage:
              'url("/images/services/vip-service/vip-transportation/vip-transportaion.webp")',
          }}
        />
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow reveal">VIP Touring</p>
          <h1 className="reveal reveal-delay-1">VIP Tour Around the Island & More</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">
            Full experience page is ready. Content and gallery details can be added next.
          </p>
          <motion.div
            className="vip-tour-hero-cta-wrap reveal reveal-delay-3"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, delay: reduceMotion ? 0 : 0.25 }}
          >
            <button type="button" className="vip-tour-hero-cta" onClick={scrollToTourSection}>
              Explore tours
            </button>
          </motion.div>
        </div>
      </section>

      <section className="service-default-sections limo-detail" id="vip-tour-content">
        <div className="container">
          <div className="service-default-block limo-detail__panel reveal">
            <p className="limo-detail__eyebrow">Page placeholder</p>
            <h2>VIP Tours Coming Soon</h2>
            <p className="limo-detail__lead">
              Share your destinations, itinerary options, vehicle classes, and package details to
              fully customize this page.
            </p>
            <div className="limo-detail__actions">
              <Link
                to="/contact"
                className="limo-detail__cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: 'VIP Tour Around the Island & More',
                }}
              >
                Request private tour
              </Link>
              <Link to="/services/vip" className="limo-detail__back">
                Back to VIP services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
