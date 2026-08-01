import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import NotFoundPage from './NotFoundPage'
import { useReveal } from '../hooks/useReveal'
import { getVipTourDestinationById } from '../data/vipTourDestinations'

const CONTACT_STATE = {
  serviceInterest: 'VIP Services',
  vipSubService: 'VIP Tour Around the Island & More',
} as const

export default function VipTourDestinationPage() {
  const { destinationId } = useParams<{ destinationId: string }>()
  const destination = getVipTourDestinationById(destinationId)
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [destinationId])

  if (!destination) {
    return <NotFoundPage />
  }

  const paragraphs =
    destination.description && destination.description.length > 0
      ? destination.description
      : [destination.blurb]

  return (
    <div className="page vip-tour-page vip-tour-destination-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="service-detail-hero service-detail-hero--vip-full" data-hero-parallax-root>
        <div
          className="service-detail-hero-bg service-detail-hero-bg--vip-img"
          aria-hidden
          data-hero-parallax
        >
          <img
            className="service-detail-hero-bg__img"
            src={
              destination.image ??
              '/images/services/vip-service/vip-transportation/vip-transportaion.webp'
            }
            alt=""
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            sizes="100vw"
          />
        </div>
        <div className="service-detail-hero-scrim service-detail-hero-scrim--vip" />
        <div className="container service-detail-hero-inner">
          <p className="eyebrow vip-tour-destination-hero__eyebrow reveal">{destination.region}</p>
          <h1 className="reveal reveal-delay-1">{destination.title}</h1>
          <p className="service-detail-hero-sub reveal reveal-delay-2">{destination.blurb}</p>
        </div>
      </section>

      <section
        className="vip-tour-destination-detail"
        aria-labelledby="vip-tour-destination-detail-heading"
      >
        <div className="container vip-tour-destination-detail__inner">
          <header className="vip-tour-destination-detail__header reveal">
            <p className="vip-tour-destination-detail__eyebrow">Luxury Sky Tour Packages</p>
            <h2 id="vip-tour-destination-detail-heading" className="vip-tour-destination-detail__title">
              {destination.blurb}
            </h2>
            <span className="vip-tour-destination-detail__rule" aria-hidden />
          </header>

          <div className="vip-tour-destination-detail__prose">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="vip-tour-destination-detail__p reveal">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="vip-tour-destination-detail__actions reveal">
            <Link
              to="/contact"
              className="vip-tour-destinations__cta"
              state={{
                ...CONTACT_STATE,
                destinationInterest: destination.title,
              }}
            >
              <span className="vip-tour-destinations__cta-label">Request this stop</span>
            </Link>
            <Link to="/services/vip-tour-around-island" className="vip-tour-destinations__back">
              Back to all destinations
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
