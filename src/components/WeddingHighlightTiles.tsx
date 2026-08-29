import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { weddingHighlightTiles, type WeddingHighlightTile } from '../data/weddingHighlightTiles'
import { weddingTilesSectionCopy } from '../data/weddingPageCopy'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'
import { getServicePageHref, isExternalServiceHref } from '../data/serviceCards'
import { useSiteContext } from '../seo/SiteContext'
import { GROUP_SITE_URL } from '../seo/domainRegistry'
import { useWeddingLocale } from '../lib/weddingLocale'
import WeddingLazyImage from './WeddingLazyImage'
import WeddingHighlightDetailModal from './WeddingHighlightDetailModal'

/** Split service titles into a display mark + refined rest line. */
function splitServiceTitle(title: string): { mark: string; rest: string | null } {
  const trimmed = title.trim()
  if (!trimmed) return { mark: '', rest: null }

  const ampSplit = trimmed.split(/\s&\s/)
  if (ampSplit.length === 2) {
    const mark = ampSplit[0]?.trim() ?? ''
    const rest = ampSplit[1]?.trim()
    return rest ? { mark, rest: `& ${rest}` } : { mark: trimmed, rest: null }
  }

  const words = trimmed.split(/\s+/).filter(Boolean)
  if (words.length <= 1) return { mark: trimmed, rest: null }
  if (words.length === 2) {
    return { mark: words[0] ?? trimmed, rest: words[1] ?? null }
  }

  const mark = words.slice(0, 2).join(' ')
  const rest = words.slice(2).join(' ')
  return rest ? { mark, rest } : { mark: trimmed, rest: null }
}

function ServiceTitle({ title }: { title: string }) {
  const { mark, rest } = splitServiceTitle(title)

  return (
    <p className="wedding-highlight-tiles__title">
      <span className="wedding-highlight-tiles__title-stack">
        <span className="wedding-highlight-tiles__title-mark">{mark}</span>
        {rest ? (
          <span className="wedding-highlight-tiles__title-rest">{rest}</span>
        ) : null}
      </span>
    </p>
  )
}

function TileContent({
  index,
  kicker,
  title,
  image,
  imageFit = 'cover',
  decorativeImage,
  interactive,
  exploreLabel,
}: {
  index: number
  kicker?: string
  title: string
  image: string
  imageFit?: 'cover' | 'contain'
  decorativeImage?: boolean
  interactive?: boolean
  exploreLabel: string
}) {
  return (
    <>
      <div
        className={`wedding-highlight-tiles__media${
          imageFit === 'contain' ? ' wedding-highlight-tiles__media--contain' : ''
        }`}
      >
        <WeddingLazyImage
          src={image}
          alt={
            decorativeImage ? '' : getServiceCoverImageAlt(image, title)
          }
          sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
        />
        <div className="wedding-highlight-tiles__scrim" aria-hidden />
        <span className="wedding-highlight-tiles__index" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="wedding-highlight-tiles__caption">
        <span className="wedding-highlight-tiles__rail" aria-hidden />
        {kicker ? <p className="wedding-highlight-tiles__kicker">{kicker}</p> : null}
        <ServiceTitle title={title} />
        <span className="wedding-highlight-tiles__title-rule" aria-hidden />
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
  const { isBrandDomain } = useSiteContext()
  const [detailTile, setDetailTile] = useState<WeddingHighlightTile | null>(null)

  function resolveGroupPageHref(path: string): { href: string; external: boolean } {
    if (isBrandDomain && !import.meta.env.DEV) {
      return { href: `${GROUP_SITE_URL}${path}`, external: true }
    }
    return { href: path, external: false }
  }

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
            const opensDetail = Boolean(tile.detail)
            const isLink = Boolean(
              tile.contact || tile.hashHref || tile.serviceSlug || tile.pageHref,
            )
            /* No per-tile reveal — 50+ transform/opacity layers crash Safari on scroll */
            const body = (
              <TileContent
                index={index}
                kicker={tile.kicker ? t(tile.kicker) : undefined}
                title={t(tile.title)}
                image={tile.image}
                imageFit={tile.imageFit}
                decorativeImage={isLink || opensDetail}
                interactive={isLink || opensDetail}
                exploreLabel={t(
                  opensDetail ? weddingTilesSectionCopy.discover : weddingTilesSectionCopy.explore,
                )}
              />
            )
            const style = { ['--tile-i' as string]: String(index) }
            const className = [
              'wedding-highlight-tiles__tile',
              isLink || opensDetail ? 'wedding-highlight-tiles__tile--link' : '',
              opensDetail ? 'wedding-highlight-tiles__tile--detail' : '',
            ]
              .filter(Boolean)
              .join(' ')

            if (tile.serviceSlug) {
              const href = getServicePageHref(tile.serviceSlug)
              const external = isExternalServiceHref(tile.serviceSlug)
              const ariaLabel = t(weddingTilesSectionCopy.openServiceAria).replace(
                '{{title}}',
                t(tile.title),
              )

              if (external) {
                return (
                  <a
                    key={tile.id}
                    href={href}
                    className={className}
                    style={style}
                    aria-label={ariaLabel}
                    rel="noopener noreferrer"
                  >
                    {body}
                  </a>
                )
              }

              return (
                <Link
                  key={tile.id}
                  to={href}
                  className={className}
                  style={style}
                  aria-label={ariaLabel}
                >
                  {body}
                </Link>
              )
            }

            if (tile.pageHref) {
              const { href, external } = resolveGroupPageHref(tile.pageHref)
              const ariaLabel = t(weddingTilesSectionCopy.openServiceAria).replace(
                '{{title}}',
                t(tile.title),
              )

              if (external) {
                return (
                  <a
                    key={tile.id}
                    href={href}
                    className={className}
                    style={style}
                    aria-label={ariaLabel}
                    rel="noopener noreferrer"
                  >
                    {body}
                  </a>
                )
              }

              return (
                <Link
                  key={tile.id}
                  to={href}
                  className={className}
                  style={style}
                  aria-label={ariaLabel}
                >
                  {body}
                </Link>
              )
            }

            if (tile.contact) {
              return (
                <Link
                  key={tile.id}
                  to="/contact"
                  state={{ serviceInterest: 'Wedding Services' }}
                  className={className}
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
                  className={className}
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

            if (opensDetail) {
              return (
                <button
                  key={tile.id}
                  type="button"
                  className={className}
                  style={style}
                  aria-label={t(weddingTilesSectionCopy.openDetailAria).replace(
                    '{{title}}',
                    t(tile.title),
                  )}
                  onClick={() => setDetailTile(tile)}
                >
                  {body}
                </button>
              )
            }

            return (
              <article
                key={tile.id}
                className="wedding-highlight-tiles__tile"
                style={style}
              >
                {body}
              </article>
            )
          })}
      </div>

      <WeddingHighlightDetailModal tile={detailTile} onClose={() => setDetailTile(null)} />
    </section>
  )
}
