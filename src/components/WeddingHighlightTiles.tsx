import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { weddingHighlightTiles } from '../data/weddingHighlightTiles'
import { weddingTilesSectionCopy } from '../data/weddingPageCopy'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { useWeddingLocale } from '../lib/weddingLocale'
import WeddingLazyImage from './WeddingLazyImage'

function TileContent({
  index,
  kicker,
  title,
  image,
  decorativeImage,
  interactive,
  exploreLabel,
}: {
  index: number
  kicker?: string
  title: string
  image: string
  decorativeImage?: boolean
  interactive?: boolean
  exploreLabel: string
}) {
  return (
    <>
      <div className="wedding-highlight-tiles__media">
        <WeddingLazyImage
          src={image}
          alt={
            decorativeImage ? '' : getServiceCoverImageAlt(image, title)
          }
        />
        <div className="wedding-highlight-tiles__scrim" aria-hidden />
        <span className="wedding-highlight-tiles__index" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="wedding-highlight-tiles__caption">
        {kicker ? <p className="wedding-highlight-tiles__kicker">{kicker}</p> : null}
        <p className="wedding-highlight-tiles__title">{title}</p>
        {interactive ? (
          <span className="wedding-highlight-tiles__cta">
            {exploreLabel}
            <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
          </span>
        ) : null}
      </div>
    </>
  )
}

export default function WeddingHighlightTiles() {
  const { t, htmlLang } = useWeddingLocale()

  return (
    <section
      id="wedding-services"
      className="wedding-section wedding-highlight-tiles"
      aria-labelledby="wedding-tiles-heading"
      lang={htmlLang}
    >
      <div className="container">
        <header className="wedding-highlight-tiles__head reveal">
          <p className="wedding-highlight-tiles__eyebrow">
            {t(weddingTilesSectionCopy.eyebrow)}
          </p>
          <h2 id="wedding-tiles-heading" className="wedding-highlight-tiles__h2">
            {t(weddingTilesSectionCopy.title)}
          </h2>
          <span className="wedding-highlight-tiles__rule" aria-hidden />
          <p className="wedding-highlight-tiles__intro">
            {t(weddingTilesSectionCopy.intro)}
          </p>
        </header>
      </div>
      <div className="wedding-highlight-tiles__grid">
          {weddingHighlightTiles.map((tile, index) => {
            const isLink = Boolean(tile.contact || tile.hashHref)
            const delayClass = `reveal reveal-delay-${Math.min((index % 4) + 1, 4)}`
            const body = (
              <TileContent
                index={index}
                kicker={tile.kicker ? t(tile.kicker) : undefined}
                title={t(tile.title)}
                image={tile.image}
                decorativeImage={isLink}
                interactive={isLink}
                exploreLabel={t(weddingTilesSectionCopy.explore)}
              />
            )
            const style = { ['--tile-i' as string]: String(index) }

            if (tile.contact) {
              return (
                <Link
                  key={tile.id}
                  to="/contact"
                  state={{ serviceInterest: 'Wedding Services' }}
                  className={`wedding-highlight-tiles__tile wedding-highlight-tiles__tile--link ${delayClass}`}
                  style={style}
                  aria-label={t(weddingTilesSectionCopy.openContactAria).replace(
                    '{{title}}',
                    t(tile.title),
                  )}
                >
                  {body}
                </Link>
              )
            }

            if (tile.hashHref) {
              return (
                <a
                  key={tile.id}
                  href={tile.hashHref}
                  className={`wedding-highlight-tiles__tile wedding-highlight-tiles__tile--link ${delayClass}`}
                  style={style}
                  aria-label={t(weddingTilesSectionCopy.jumpSectionAria).replace(
                    '{{title}}',
                    t(tile.title),
                  )}
                >
                  {body}
                </a>
              )
            }

            return (
              <article
                key={tile.id}
                className={`wedding-highlight-tiles__tile ${delayClass}`}
                style={style}
              >
                {body}
              </article>
            )
          })}
      </div>
    </section>
  )
}
