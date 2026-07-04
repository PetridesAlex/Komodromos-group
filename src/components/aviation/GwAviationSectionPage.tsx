import { useParams } from 'react-router-dom'
import GwImagePlaceholder from './GwImagePlaceholder'
import GwPageHero from './GwPageHero'
import { useReveal } from '../../hooks/useReveal'
import {
  aviationSectionSlugs,
  aviationSections,
  type AviationSectionSlug,
} from '../../data/globalWingsPage'
import NotFoundPage from '../NotFoundPage'

function isAviationSectionSlug(slug: string | undefined): slug is AviationSectionSlug {
  return !!slug && aviationSectionSlugs.includes(slug as AviationSectionSlug)
}

export default function GwAviationSectionPage() {
  const pageRef = useReveal()
  const { sectionSlug } = useParams<{ sectionSlug: string }>()

  if (!isAviationSectionSlug(sectionSlug)) {
    return <NotFoundPage />
  }

  const section = aviationSections[sectionSlug]

  return (
    <div className="gw-aviation-page gw-aviation-page--section" ref={pageRef}>
      <GwPageHero
        eyebrow="Global Wings Ltd"
        title={section.heading}
        subtitle={`Resources and information for ${section.title}.`}
      />

      <main className="gw-main gw-main--section" aria-label={section.title}>
        <section className="gw-section gw-section--about">
          <div className="container">
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
