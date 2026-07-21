import type { KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { weddingPackages } from '../data/weddingPackages'
import { weddingBrandHref } from '../lib/brandPaths'

export default function WeddingPackagesSection() {
  const navigate = useNavigate()

  const openPackage = (packageId: string) => {
    navigate(weddingBrandHref(`/services/wedding/packages/${packageId}`))
  }

  const onCardKeyDown = (event: KeyboardEvent<HTMLElement>, packageId: string) => {
    if (event.target !== event.currentTarget) return
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openPackage(packageId)
  }

  return (
    <section
      className="wedding-section wedding-packages-section"
      id="wedding-packages-heading"
      aria-labelledby="wedding-packages-section-title"
    >
      <div className="container">
        <p className="wedding-section__eyebrow">INVESTMENT LEVELS</p>
        <h2 id="wedding-packages-section-title" className="wedding-section__title">
          Wedding packages
        </h2>
        <p className="wedding-section__intro wedding-packages-section__intro">
          Each tier reflects a different depth of planning, production, and on-site leadership.
          Premium sits at the top of our fixed catalogue; Customised is quoted around your brief.
        </p>
        <p className="wedding-packages-section__intro-el" lang="el">
          Κάθε επίπεδο αντιστοιχεί σε διαφορετικό βάθος σχεδιασμού και παραγωγής. Το Premium
          βρίσκεται στην κορυφή του σταθερού καταλόγου· το Customised τιμολογείται ανάλογα με το
          project σας.
        </p>
        <div className="wedding-packages-section__grid">
          {weddingPackages.map((pkg) => (
            <article
              key={pkg.id}
              id={`wedding-package-${pkg.id}`}
              className="wedding-packages-section__card wedding-packages-section__card--interactive"
              role="link"
              tabIndex={0}
              onClick={() => openPackage(pkg.id)}
              onKeyDown={(event) => onCardKeyDown(event, pkg.id)}
              aria-label={`Open ${pkg.name} package details`}
            >
              <div className="wedding-packages-section__media">
                <img src={pkg.image} alt="" loading="lazy" decoding="async" />
                <div className="wedding-packages-section__media-scrim" aria-hidden />
              </div>
              <div className="wedding-packages-section__content">
                <div className="wedding-packages-section__name-stack">
                  <h3 className="wedding-packages-section__name">{pkg.name}</h3>
                  <p className="wedding-packages-section__name-el" lang="el">
                    {pkg.nameEl}
                  </p>
                </div>
                <p className="wedding-packages-section__price">{pkg.priceDisplay}</p>
                <p className="wedding-packages-section__tag">{pkg.tagline}</p>
                <p className="wedding-packages-section__tag-el" lang="el">
                  {pkg.taglineEl}
                </p>
                <Link
                  to={weddingBrandHref(`/services/wedding/packages/${pkg.id}`)}
                  className="wedding-packages-section__details"
                  onClick={(event) => event.stopPropagation()}
                >
                  View package
                </Link>
                <Link
                  to="/contact"
                  state={{ serviceInterest: 'Wedding Services', weddingPackage: pkg.name }}
                  className="wedding-packages-section__enquire"
                  onClick={(event) => event.stopPropagation()}
                >
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
