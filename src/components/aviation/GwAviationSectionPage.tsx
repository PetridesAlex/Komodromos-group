import { Navigate, useParams } from 'react-router-dom'
import GwImagePlaceholder from './GwImagePlaceholder'
import { useReveal } from '../../hooks/useReveal'
import {
  aviationSectionSlugs,
  aviationSections,
  type AviationSectionSlug,
} from '../../data/globalWingsPage'

function isAviationSectionSlug(slug: string | undefined): slug is AviationSectionSlug {
  return !!slug && aviationSectionSlugs.includes(slug as AviationSectionSlug)
}

export default function GwAviationSectionPage() {
  const pageRef = useReveal()
  const { sectionSlug } = useParams<{ sectionSlug: string }>()

  if (!isAviationSectionSlug(sectionSlug)) {
    return <Navigate to="/services/aviation" replace />
  }

  const section = aviationSections[sectionSlug]

  return (
    <div className="gw-aviation-page gw-aviation-page--section" ref={pageRef}>
      <main className="gw-main gw-main--section" aria-label={section.title}>
        <section className="gw-section gw-section--about">
          <div className="container">
            <header className="gw-section__header reveal">
              <h1 className="gw-section__title">{section.heading}</h1>
            </header>
            <div className="gw-section-shell reveal reveal-delay-1">
              <GwImagePlaceholder aspectRatio="16 / 7" label="Insert image here" />
              <p className="gw-section-shell__note">
                Content for {section.title} will be added in the next build phase.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
