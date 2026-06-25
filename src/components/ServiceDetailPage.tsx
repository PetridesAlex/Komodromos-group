import { useCallback, useEffect, useState } from 'react'
import { Navigate, useLocation, useParams } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../data/serviceCards'
import { getServicePageContent } from '../data/servicePageSections'
import {
  getStorageWhatsAppUrl,
  STORAGE_PAGE_CONTACTS,
} from '../data/storagePageContacts'
import { socialLinks } from '../data/socialLinks'
import VipServicesGrid from './VipServicesGrid'
import StoragePremiumSection from './StoragePremiumSection'
import ServiceDefaultSections from './ServiceDefaultSections'
import TaxNexCyprusPage from './TaxNexCyprusPage'
import { Hero9 } from './hero-9'

const VIP_DETAIL_HERO_IMAGE = '/images/services/vip-service/vip-hero.webp'
const VIP_PORTFOLIO_SECTION_ID = 'vip-portfolio'

const STORAGE_SUBNAV_LINKS: ReadonlyArray<{
  id: string
  label: string
  cta?: boolean
}> = [
  { id: 'storage-parallax', label: 'Overview' },
  { id: 'storage-offers', label: 'Storage Options' },
  { id: 'storage-features', label: 'Features' },
  { id: 'storage-rates', label: 'Monthly Rates' },
  { id: 'storage-tips', label: 'Useful Tips' },
  { id: 'storage-contact', label: 'Contact', cta: true },
]

const STORAGE_WHATSAPP_ICON = socialLinks.find((link) => link.label === 'WhatsApp')?.svg

function clearDocumentScrollLock() {
  const bodyStyle = document.body.style
  const htmlStyle = document.documentElement.style
  const lockedTop = bodyStyle.top
  const restoreY = lockedTop ? Math.abs(parseInt(lockedTop, 10)) : null

  bodyStyle.overflow = ''
  bodyStyle.position = ''
  bodyStyle.top = ''
  bodyStyle.left = ''
  bodyStyle.right = ''
  bodyStyle.width = ''
  htmlStyle.overflow = ''

  if (restoreY !== null && !Number.isNaN(restoreY)) {
    requestAnimationFrame(() => window.scrollTo(0, restoreY))
  }
}

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const card = getServiceBySlug(slug)
  const defaultContent = slug ? getServicePageContent(slug) : undefined
  const pageRef = useReveal()
  const [activeStorageSection, setActiveStorageSection] = useState('storage-parallax')

  useEffect(() => {
    clearDocumentScrollLock()
    return () => clearDocumentScrollLock()
  }, [slug])

  useEffect(() => {
    if (slug !== 'storage') return

    const sectionIds = STORAGE_SUBNAV_LINKS.map((link) => link.id)
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const ratios = new Map<HTMLElement, number>()
    let active: HTMLElement | null = null

    const pickActive = () => {
      let best: HTMLElement | null = null
      let bestRatio = 0
      for (const [el, ratio] of ratios) {
        if (ratio > bestRatio) {
          bestRatio = ratio
          best = el
        }
      }
      const next = bestRatio >= 0.12 ? best : null
      if (next === active) return
      active = next
      setActiveStorageSection(active?.id ?? 'storage-parallax')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(
            entry.target as HTMLElement,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          )
        }
        pickActive()
      },
      {
        threshold: [0, 0.08, 0.16, 0.28, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: '-20% 0px -55% 0px',
      },
    )

    for (const section of sections) {
      ratios.set(section, 0)
      observer.observe(section)
    }

    window.addEventListener('scroll', pickActive, { passive: true })
    pickActive()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', pickActive)
    }
  }, [slug])

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (id) {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const t = window.setTimeout(
        () => {
          const el = document.getElementById(id)
          if (el) {
            el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
          }
        },
        id === 'tax-faq' ? 100 : slug === 'storage' ? 50 : 0,
      )
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug, location.hash])

  const scrollToVipPortfolio = useCallback(() => {
    const el = document.getElementById(VIP_PORTFOLIO_SECTION_ID)
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: reduce ? 'auto' : 'smooth',
      block: 'start',
    })
  }, [])

  if (!card) {
    return <Navigate to="/" replace />
  }

  const isVip = slug === 'vip'
  const heroBackgroundImage = isVip ? VIP_DETAIL_HERO_IMAGE : card.image

  return (
    <div className={`page${slug === 'storage' ? ' storage-detail-page' : ''}`} ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />
      {slug === 'storage' ? (
        <div className="storage-page-subnav" aria-label="Storage page navigation">
          <div className="container">
            <nav className="storage-page-subnav__inner">
              <div className="storage-page-subnav__links" role="list">
                {STORAGE_SUBNAV_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    role="listitem"
                    className={[
                      'storage-page-subnav__link',
                      link.cta ? 'storage-page-subnav__link--cta' : '',
                      !link.cta && activeStorageSection === link.id
                        ? 'storage-page-subnav__link--active'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    aria-current={!link.cta && activeStorageSection === link.id ? 'true' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="storage-page-subnav__contacts" aria-label="Storage2Rent direct contact">
                {STORAGE_PAGE_CONTACTS.map((contact) => (
                  <div key={contact.id} className="storage-page-subnav__contact-card">
                    <div className="storage-page-subnav__contact-actions">
                      <a
                        href={`tel:${contact.tel}`}
                        className="storage-page-subnav__contact-btn storage-page-subnav__contact-btn--phone"
                        aria-label={`Call Storage2Rent ${contact.label}: ${contact.display}`}
                      >
                        <Phone size={14} strokeWidth={2.25} aria-hidden />
                      </a>
                      <a
                        href={getStorageWhatsAppUrl(contact.whatsapp)}
                        className="storage-page-subnav__contact-btn storage-page-subnav__contact-btn--wa"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp Storage2Rent ${contact.label}: ${contact.display}`}
                      >
                        {STORAGE_WHATSAPP_ICON}
                      </a>
                    </div>
                    <span className="storage-page-subnav__contact-number">{contact.display}</span>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>
      ) : null}

      {slug === 'storage' ? (
        <StoragePremiumSection />
      ) : slug === 'tax' ? (
        <TaxNexCyprusPage />
      ) : (
        <>
          {slug === 'hr' ? (
            <Hero9
              eyebrow={card.eyebrow}
              imageSrc="/images/services/human-resources-management/Cover%20(1).webp"
              line1="Human Resources"
              line2="Management"
              titleLayout="inline"
              tagline={card.description}
              serviceInterest={card.title}
            />
          ) : (
            <section
              className={`service-detail-hero${isVip ? ' service-detail-hero--vip-full' : ''}`}
              data-hero-parallax-root
            >
              {isVip ? (
                <div
                  className="service-detail-hero-bg service-detail-hero-bg--vip-img"
                  aria-hidden
                  data-hero-parallax
                >
                  <img
                    className="service-detail-hero-bg__img"
                    src={VIP_DETAIL_HERO_IMAGE}
                    alt=""
                    width={1920}
                    height={1080}
                    decoding="async"
                    fetchPriority="high"
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div
                  className="service-detail-hero-bg"
                  aria-hidden
                  data-hero-parallax
                  style={{ backgroundImage: `url("${heroBackgroundImage}")` }}
                />
              )}
              <div
                className={`service-detail-hero-scrim${isVip ? ' service-detail-hero-scrim--vip' : ''}`}
              />
              <div className="service-detail-hero-glow service-detail-hero-glow-1" />
              <div className="service-detail-hero-glow service-detail-hero-glow-2" />
              <div className="container service-detail-hero-inner">
                <p className="eyebrow reveal">{card.eyebrow}</p>
                <h1 className="reveal reveal-delay-1">{card.title}</h1>
                <p className="service-detail-hero-sub reveal reveal-delay-2">{card.description}</p>
                {isVip ? (
                  <div className="service-detail-hero-cta reveal reveal-delay-3">
                    <button
                      type="button"
                      className="service-detail-hero-cta__btn"
                      onClick={scrollToVipPortfolio}
                      aria-label="Scroll to concierge portfolio and services"
                    >
                      Explore portfolio
                    </button>
                  </div>
                ) : null}
              </div>
            </section>
          )}

          {slug === 'vip' && <VipServicesGrid />}

          {defaultContent && slug !== 'vip' ? (
            <ServiceDefaultSections content={defaultContent} serviceInterest={card.title} />
          ) : null}
        </>
      )}

      {slug === 'tax' ? null : <Footer />}
    </div>
  )
}
