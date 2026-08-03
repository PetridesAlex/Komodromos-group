import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import { useReveal } from '../hooks/useReveal'
import {
  STORAGE_USEFUL_TIPS,
  getStorageTipById,
  storageTipDetailPath,
} from '../data/storageUsefulTipsContent'
import NotFoundPage from './NotFoundPage'

const EASE = [0.22, 1, 0.36, 1] as const

export default function StorageTipDetailPage() {
  const { tipId } = useParams<{ tipId: string }>()
  const tip = getStorageTipById(tipId)
  const pageRef = useReveal()

  const tipIndex = tip ? STORAGE_USEFUL_TIPS.findIndex((t) => t.id === tip.id) : -1
  const prevTip = tipIndex > 0 ? STORAGE_USEFUL_TIPS[tipIndex - 1] : null
  const nextTip =
    tipIndex >= 0 && tipIndex < STORAGE_USEFUL_TIPS.length - 1
      ? STORAGE_USEFUL_TIPS[tipIndex + 1]
      : null

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [tipId])

  if (!tip) {
    return <NotFoundPage />
  }

  return (
    <div className="page storage-tip-detail-page" ref={pageRef}>
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />

      <article className="storage-tip-detail">
        <div className="storage-tip-detail__hero">
          <div className="storage-tip-detail__hero-media">
            <img
              src={tip.image}
              alt={tip.imageAlt}
              className="storage-tip-detail__hero-img"
              loading="eager"
              decoding="async"
            />
            <div className="storage-tip-detail__hero-scrim" aria-hidden />
          </div>

          <div className="storage-tip-detail__hero-bar">
            <div className="container storage-tip-detail__hero-bar-inner">
              <nav className="storage-tip-detail__breadcrumb" aria-label="Breadcrumb">
                <ol className="storage-tip-detail__breadcrumb-list">
                  <li className="storage-tip-detail__breadcrumb-item">
                    <Link to="/services/storage" className="storage-tip-detail__crumb storage-tip-detail__crumb--link">
                      Storage2Rent
                    </Link>
                  </li>
                  <li className="storage-tip-detail__breadcrumb-sep" aria-hidden>
                    <ChevronRight size={13} strokeWidth={2.25} />
                  </li>
                  <li className="storage-tip-detail__breadcrumb-item">
                    <Link
                      to="/services/storage#storage-tips"
                      className="storage-tip-detail__crumb storage-tip-detail__crumb--link"
                    >
                      Useful tips
                    </Link>
                  </li>
                  <li className="storage-tip-detail__breadcrumb-sep" aria-hidden>
                    <ChevronRight size={13} strokeWidth={2.25} />
                  </li>
                  <li className="storage-tip-detail__breadcrumb-item storage-tip-detail__breadcrumb-item--current">
                    <span className="storage-tip-detail__crumb storage-tip-detail__crumb--current" aria-current="page">
                      {tip.title}
                    </span>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container storage-tip-detail__content-wrap">
          <motion.div
            className="storage-tip-detail__title-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h1 className="storage-tip-detail__title">{tip.title}</h1>
          </motion.div>

          <motion.div
            className="storage-tip-detail__content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: EASE }}
          >
            <div className="storage-tip-detail__intro-block">
              <span className="storage-tip-detail__intro-mark" aria-hidden>
                "
              </span>
              <p className="storage-tip-detail__intro">{tip.excerpt}</p>
            </div>
            <div className="storage-tip-detail__body">
              {tip.sections?.length
                ? tip.sections.map((section, index) => {
                    if (section.kind === 'h2') {
                      return (
                        <h2 key={`${section.text}-${index}`} className="storage-tip-detail__section-title">
                          {section.text}
                        </h2>
                      )
                    }

                    if (section.kind === 'ul') {
                      return (
                        <ul key={`list-${index}`} className="storage-tip-detail__list">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )
                    }

                    return <p key={`${section.text.slice(0, 32)}-${index}`}>{section.text}</p>
                  })
                : tip.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
            </div>

            <div className="storage-tip-detail__cta">
              <p className="storage-tip-detail__cta-text">
                Ready to reserve space or get a tailored quote for your situation?
              </p>
              <Link
                to="/contact"
                state={{
                  serviceInterest: 'Storage2Rent',
                  storageInquiry: true,
                  storageTip: tip.title,
                }}
                className="storage-tip-detail__cta-btn"
              >
                Contact Storage2Rent
                <ArrowRight size={16} strokeWidth={2.25} aria-hidden />
              </Link>
            </div>
          </motion.div>

          <nav className="storage-tip-detail__nav" aria-label="More useful tips">
            <div className="storage-tip-detail__nav-head">
              <p className="storage-tip-detail__nav-eyebrow">Continue reading</p>
              <Link to="/services/storage#storage-tips" className="storage-tip-detail__nav-all">
                View all tips
                <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
              </Link>
            </div>

            {(prevTip || nextTip) && (
              <div
                className={`storage-tip-detail__nav-cards${
                  prevTip && nextTip ? '' : ' storage-tip-detail__nav-cards--single'
                }`}
              >
                {prevTip ? (
                  <Link
                    to={storageTipDetailPath(prevTip.id)}
                    className="storage-tip-detail__nav-card storage-tip-detail__nav-card--prev"
                  >
                    <div className="storage-tip-detail__nav-card-media">
                      <img src={prevTip.image} alt={prevTip.imageAlt} loading="lazy" decoding="async" />
                    </div>
                    <div className="storage-tip-detail__nav-card-body">
                      <span className="storage-tip-detail__nav-label">
                        <ArrowLeft size={13} strokeWidth={2.25} aria-hidden />
                        Previous tip
                      </span>
                      <span className="storage-tip-detail__nav-card-title">{prevTip.title}</span>
                    </div>
                  </Link>
                ) : null}

                {nextTip ? (
                  <Link
                    to={storageTipDetailPath(nextTip.id)}
                    className="storage-tip-detail__nav-card storage-tip-detail__nav-card--next"
                  >
                    <div className="storage-tip-detail__nav-card-body">
                      <span className="storage-tip-detail__nav-label">
                        Next tip
                        <ArrowRight size={13} strokeWidth={2.25} aria-hidden />
                      </span>
                      <span className="storage-tip-detail__nav-card-title">{nextTip.title}</span>
                    </div>
                    <div className="storage-tip-detail__nav-card-media">
                      <img src={nextTip.image} alt={nextTip.imageAlt} loading="lazy" decoding="async" />
                    </div>
                  </Link>
                ) : null}
              </div>
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </div>
  )
}
