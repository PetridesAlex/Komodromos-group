import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { weddingHighlightTiles } from '../data/weddingHighlightTiles'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'

function TileContent({
  index,
  kicker,
  title,
  titleEl,
  image,
  decorativeImage,
  interactive,
}: {
  index: number
  kicker: string
  title: string
  titleEl: string
  image: string
  decorativeImage?: boolean
  interactive?: boolean
}) {
  return (
    <>
      <div className="wedding-highlight-tiles__media">
        <img
          src={image}
          alt={
            decorativeImage ? '' : getServiceCoverImageAlt(image, title)
          }
          loading="lazy"
          decoding="async"
        />
        <div className="wedding-highlight-tiles__scrim" aria-hidden />
        <span className="wedding-highlight-tiles__index" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="wedding-highlight-tiles__caption">
        <p className="wedding-highlight-tiles__kicker">{kicker}</p>
        <p className="wedding-highlight-tiles__title">{title}</p>
        <p className="wedding-highlight-tiles__title-el" lang="el">
          {titleEl}
        </p>
        {interactive ? (
          <span className="wedding-highlight-tiles__cta">
            Explore
            <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
          </span>
        ) : null}
      </div>
    </>
  )
}

export default function WeddingHighlightTiles() {
  return (
    <section
      className="wedding-section wedding-highlight-tiles"
      aria-labelledby="wedding-tiles-heading"
    >
      <div className="container">
        <header className="wedding-highlight-tiles__head reveal">
          <p className="wedding-highlight-tiles__eyebrow">Discover Wedding Sky</p>
          <h2 id="wedding-tiles-heading" className="wedding-highlight-tiles__h2">
            What we craft with you
          </h2>
          <span className="wedding-highlight-tiles__rule" aria-hidden />
          <p className="wedding-highlight-tiles__intro">
            Eight entry points into how we work — from destinations and production to packages,
            love stories, and your first conversation with the team.
          </p>
          <p className="wedding-highlight-tiles__intro-el" lang="el">
            Οκτώ σημεία για να γνωρίσετε τον τρόπο μας — από τους χώρους και την παραγωγή μέχρι τα
            πακέτα, τις ιστορίες ζευγαριών και την πρώτη σας συνάντηση με την ομάδα.
          </p>
        </header>
        <div className="wedding-highlight-tiles__grid">
          {weddingHighlightTiles.map((tile, index) => {
            const isLink = Boolean(tile.contact || tile.hashHref)
            const delayClass = `reveal reveal-delay-${Math.min((index % 4) + 1, 4)}`
            const body = (
              <TileContent
                index={index}
                kicker={tile.kicker}
                title={tile.title}
                titleEl={tile.titleEl}
                image={tile.image}
                decorativeImage={isLink}
                interactive={isLink}
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
                  aria-label={`${tile.title} — open contact page`}
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
                  aria-label={`${tile.title} — jump to section`}
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
      </div>
    </section>
  )
}
