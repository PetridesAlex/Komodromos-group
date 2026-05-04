import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteLogo from '../SiteLogo'
import TopbarSocialLinks from '../TopbarSocialLinks'
import { useReveal } from '../../hooks/useReveal'
import {
  findYachtCharterById,
  getYachtDetailContent,
} from '../../data/yachtChartersData'

export default function YachtDetailPage() {
  const { yachtId } = useParams<{ yachtId: string }>()
  const [menuOpen, setMenuOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [yachtId])

  const yacht = yachtId ? findYachtCharterById(yachtId) : undefined

  if (!yacht) {
    return <Navigate to="/services/yacht-charters" replace />
  }

  const detail = getYachtDetailContent(yacht)
  const heroSrc = yacht.gallery[0] ?? yacht.image

  return (
    <div className="page yacht-detail-page" ref={pageRef}>
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

      <section className="yacht-detail-hero" aria-label="Yacht photography" data-hero-parallax-root>
        <div className="yacht-detail-hero__media" data-hero-parallax>
          <img
            className="yacht-detail-hero__img"
            src={heroSrc}
            alt=""
            width={2000}
            height={1000}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </section>

      <article className="yacht-detail-article">
        <div className="yacht-detail-article__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="yacht-detail-breadcrumb" aria-label="Breadcrumb">
              <Link to="/services/yacht-charters">Yacht charter</Link>
              <span aria-hidden className="yacht-detail-breadcrumb__sep">
                /
              </span>
              <span className="yacht-detail-breadcrumb__current">{yacht.name}</span>
            </nav>

            <p className="yacht-detail-kicker">{yacht.type}</p>
            <h1 className="yacht-detail-title">{yacht.name}</h1>

            <div className="yacht-detail-prose">
              {detail.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h2 className="yacht-detail-h2">Information</h2>
            <div className="yacht-detail-tables">
              <table className="yacht-detail-table">
                <tbody>
                  {detail.charterRates.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table className="yacht-detail-table yacht-detail-table--specs">
                <tbody>
                  {detail.vesselSpecs.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {detail.ratesFootnote ? (
              <p className="yacht-detail-footnote">{detail.ratesFootnote}</p>
            ) : null}

            <section className="yacht-detail-included" aria-labelledby="yacht-detail-included-title">
              <h2 id="yacht-detail-included-title" className="yacht-detail-h2">
                Included services
              </h2>
              <ul className="yacht-detail-included__list">
                {yacht.included.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </section>

            <div className="yacht-detail-actions">
              <Link
                to="/contact"
                className="yacht-detail-cta"
                state={{
                  serviceInterest: 'VIP Services',
                  vipSubService: `Yacht charter — ${yacht.name} (${yacht.location})`,
                }}
              >
                Send enquiry
              </Link>
              <Link to="/services/yacht-charters" className="yacht-detail-back">
                ← Back to fleet
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
