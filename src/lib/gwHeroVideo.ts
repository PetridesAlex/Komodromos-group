export const GW_HERO_VIDEO_SRC = '/images/services/global-wings/global-wings-hero.mp4'

let prefetchStarted = false

/** Start fetching the hero video as early as possible (idempotent). */
export function prefetchGwHeroVideo() {
  if (prefetchStarted || typeof document === 'undefined') return
  prefetchStarted = true

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'video'
  link.href = GW_HERO_VIDEO_SRC
  link.type = 'video/mp4'
  document.head.appendChild(link)
}
