import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import Footer from '../Footer'
import SiteTopbar from '../SiteTopbar'
import { useReveal } from '../../hooks/useReveal'
import { findOnassisCategory, onassisCategories } from '../../data/onassisExperience'
import NotFoundPage from '../NotFoundPage'

const EASE = [0.16, 1, 0.3, 1] as const

export default function OnassisCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [categoryId])

  const category = findOnassisCategory(categoryId)

  if (!category) {
    return <NotFoundPage />
  }

  const index = onassisCategories.findIndex((c) => c.id === category.id)
  const prev = index > 0 ? onassisCategories[index - 1] : undefined
  const next = index < onassisCategories.length - 1 ? onassisCategories[index + 1] : undefined

  return (
    <div className="page onassis-page onassis-cat-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="onassis-cat-hero" aria-label={category.title} data-hero-parallax-root>
        <div className="onassis-cat-hero__media" data-hero-parallax>
          <img
            className="onassis-cat-hero__img"
            src={category.cover}
            alt=""
            width={2000}
            height={1000}
            sizes="100vw"
            fetchPriority="high"
            decoding="async"
          />
          <div className="onassis-hero__scrim" aria-hidden />
        </div>
        <div className="container onassis-cat-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: EASE }}
          >
            <p className="onassis-hero__eyebrow">Onassis · {category.label}</p>
            <h1 className="onassis-cat-hero__title">{category.title}</h1>
            <p className="onassis-cat-hero__tagline">{category.tagline}</p>
          </motion.div>
        </div>
        <nav className="onassis-hero__nav" aria-label="Previous page">
          <button type="button" className="onassis-hero-back" onClick={() => navigate(-1)}>
            ← Previous page
          </button>
        </nav>
      </section>

      <article className="onassis-cat-article">
        <div className="container onassis-cat-article__inner">
          <nav className="onassis-breadcrumb" aria-label="Breadcrumb">
            <Link to="/services/yacht-charters">Yacht charter</Link>
            <span aria-hidden className="onassis-breadcrumb__sep">
              /
            </span>
            <Link to="/services/yacht-charters/onassis">Onassis</Link>
            <span aria-hidden className="onassis-breadcrumb__sep">
              /
            </span>
            <span className="onassis-breadcrumb__current">{category.label}</span>
          </nav>

          <div className="onassis-cat-prose reveal">
            {category.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <section className="onassis-cat-highlights reveal" aria-label="Highlights">
            <h2 className="onassis-cat-h2">Highlights</h2>
            <ul className="onassis-cat-highlights__list">
              {category.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          {category.specs && category.specs.length > 0 ? (
            <section className="onassis-cat-specs reveal" aria-label="Specifications">
              <h2 className="onassis-cat-h2">At a glance</h2>
              <dl className="onassis-cat-specs__grid">
                {category.specs.map((row) => (
                  <div key={row.label} className="onassis-cat-specs__row">
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {category.gallery && category.gallery.length > 0 ? (
            <section className="onassis-cat-gallery reveal" aria-label={`${category.title} photos`}>
              <h2 className="onassis-cat-h2">Gallery</h2>
              <div className="onassis-cat-gallery__grid" role="list">
                {category.gallery.map((src, i) => (
                  <figure key={`${src}-${i}`} className="onassis-cat-gallery__cell" role="listitem">
                    <img
                      src={src}
                      alt={`${category.title} — photo ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 360px"
                    />
                  </figure>
                ))}
              </div>
            </section>
          ) : null}

          <div className="onassis-cat-actions">
            <Link
              to="/contact"
              className="onassis-btn onassis-btn--gold"
              state={{
                serviceInterest: 'VIP Services',
                vipSubService: 'Yacht charter — Onassis (Limassol)',
              }}
            >
              Enquire about Onassis
            </Link>
            <Link to="/services/yacht-charters/onassis" className="onassis-btn onassis-btn--ghost">
              ← All categories
            </Link>
          </div>

          <nav className="onassis-cat-pager" aria-label="Browse categories">
            {prev ? (
              <Link
                to={`/services/yacht-charters/onassis/${prev.id}`}
                className="onassis-cat-pager__link onassis-cat-pager__link--prev"
              >
                <span className="onassis-cat-pager__dir">← Previous</span>
                <span className="onassis-cat-pager__label">{prev.label}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to={`/services/yacht-charters/onassis/${next.id}`}
                className="onassis-cat-pager__link onassis-cat-pager__link--next"
              >
                <span className="onassis-cat-pager__dir">Next →</span>
                <span className="onassis-cat-pager__label">{next.label}</span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </div>
  )
}
