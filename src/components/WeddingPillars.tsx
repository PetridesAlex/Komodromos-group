import { Link } from 'react-router-dom'
import { weddingHeroCopy, weddingPillarsCopy } from '../data/weddingPageCopy'
import { weddingBrandHref } from '../lib/brandPaths'
import { useWeddingLocale } from '../lib/weddingLocale'

export default function WeddingPillars() {
  const { t } = useWeddingLocale()

  return (
    <section className="wedding-pillars" aria-label={t(weddingHeroCopy.exploreServices)}>
      <div className="wedding-pillars__ambient" aria-hidden />
      <div className="container">
        <div className="wedding-pillars__inner">
          {weddingPillarsCopy.map((pillar, index) => {
            const isHash = pillar.href.startsWith('#')
            const href = isHash ? pillar.href : weddingBrandHref(pillar.href)
            const indexLabel = String(index + 1).padStart(2, '0')
            const className = `wedding-pillars__item wedding-pillars__item--${pillar.id} reveal reveal-delay-${Math.min(index + 1, 3)}`
            const style = { ['--pillar-i' as string]: String(index) }

            const content = (
              <>
                <span className="wedding-pillars__accent" aria-hidden />
                <span className="wedding-pillars__glow" aria-hidden />
                <span className="wedding-pillars__sheen" aria-hidden />
                <span className="wedding-pillars__index" aria-hidden>
                  {indexLabel}
                </span>
                <span className="wedding-pillars__body">
                  <span className="wedding-pillars__label">{t(pillar.label)}</span>
                  <span className="wedding-pillars__rule" aria-hidden />
                </span>
                <span className="wedding-pillars__action" aria-hidden>
                  <span className="wedding-pillars__action-ring" />
                  <span className="wedding-pillars__action-icon">+</span>
                </span>
              </>
            )

            if (isHash) {
              return (
                <a key={pillar.id} href={href} className={className} style={style}>
                  {content}
                </a>
              )
            }

            return (
              <Link key={pillar.id} to={href} className={className} style={style}>
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
