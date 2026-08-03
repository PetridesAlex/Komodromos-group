import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getServiceCoverImageAlt } from '../data/seo/serviceCoverImageAlts'

const FALLBACK_IMAGE = '/images/services/vip-service/luxury-travel.webp'

/** Two-line layout when it stays readable (avoids splitting phrases with "&"). */
function splitDisplayTitle(title: string): { kicker: string; main: string } | null {
  if (title.includes('&')) return null
  const words = title.trim().split(/\s+/)
  if (words.length < 2 || words.length > 3) return null
  return { kicker: words[0], main: words.slice(1).join(' ') }
}

export type ServiceCardProps = {
  title: string
  image: string
  to?: string
  state?: Record<string, unknown>
  className?: string
  /** Rotates three distinct title treatments (0–2). */
  tone?: 0 | 1 | 2
  /** When both set, used instead of automatic split from `title`. */
  kicker?: string
  nameLine?: string
}

export function ServiceCard({
  title,
  image,
  to = '/contact',
  state,
  className = '',
  tone = 0,
  kicker: kickerProp,
  nameLine: nameLineProp,
}: ServiceCardProps) {
  const [src, setSrc] = useState(image)
  useEffect(() => {
    setSrc(image)
  }, [image])
  const split =
    kickerProp && nameLineProp
      ? { kicker: kickerProp, main: nameLineProp }
      : splitDisplayTitle(title)
  const toneClass = `vip-service-card--tone-${tone}`

  return (
    <Link
      to={to}
      state={state}
      className={`vip-service-card ${toneClass} ${className}`.trim()}
    >
      <span className="vip-service-card__media">
        <img
          className="vip-service-card__img"
          src={src}
          alt={getServiceCoverImageAlt(image, title)}
          loading="lazy"
          decoding="async"
          onError={() => {
            if (src !== FALLBACK_IMAGE) setSrc(FALLBACK_IMAGE)
          }}
        />
      </span>
      <span className="vip-service-card__overlay" aria-hidden />
      <span className="vip-service-card__title">
        {split ? (
          <>
            <span className="vip-service-card__kicker">{split.kicker}</span>
            <span className="vip-service-card__name">{split.main}</span>
          </>
        ) : (
          <span className="vip-service-card__name vip-service-card__name--full">
            {title}
          </span>
        )}
      </span>
    </Link>
  )
}
