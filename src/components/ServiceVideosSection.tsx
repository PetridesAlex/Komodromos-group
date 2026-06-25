import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import type {
  ServiceVideo,
  ServiceVideosSection as ServiceVideosSectionData,
} from '../data/servicePageSections'

const EASE = [0.22, 1, 0.36, 1] as const
const CARD_VIEW = { once: true, margin: '-40px 0px -80px 0px' } as const

type Props = {
  section: ServiceVideosSectionData
}

function youtubeEmbedSrc(id: string, autoplay = false) {
  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  return `https://www.youtube-nocookie.com/embed/${id}?${params}`
}

function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`
}

function VideoPoster({ coverImage }: { coverImage?: string }) {
  const [failed, setFailed] = useState(false)

  if (coverImage && !failed) {
    return (
      <span className="service-video-play__thumb-media" aria-hidden>
        <img
          className="service-video-play__thumb"
          src={coverImage}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </span>
    )
  }

  return (
    <span
      className="service-video-play__thumb-media service-video-play__thumb-media--fallback"
      aria-hidden
    />
  )
}

function ServiceVideoCard({ video, index }: { video: ServiceVideo; index: number }) {
  const [playing, setPlaying] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const inView = useInView(cardRef, CARD_VIEW)
  const reducedMotion = useReducedMotion()

  return (
    <motion.article
      ref={cardRef}
      className="service-video-card service-video-card--premium"
      role="listitem"
      initial={reducedMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
      animate={
        reducedMotion || inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 32, scale: 0.98 }
      }
      transition={{
        duration: reducedMotion ? 0.2 : 0.58,
        delay: reducedMotion ? 0 : index * 0.1,
        ease: EASE,
      }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <div className="service-video-card__frame">
        <div className="service-video-embed">
          {playing ? (
            <iframe
              title={`${video.label} — YouTube video`}
              src={youtubeEmbedSrc(video.youtubeId, true)}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button
              type="button"
              className="service-video-play"
              onClick={() => setPlaying(true)}
              aria-label={`Play ${video.label}`}
            >
              <VideoPoster coverImage={video.coverImage} />
              <span className="service-video-play__shade" aria-hidden />
              <span className="service-video-play__vignette" aria-hidden />
              <span className="service-video-play__icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none">
                  <path fill="currentColor" d="M9.5 7.5v9L18 12l-8.5-4.5Z" />
                </svg>
              </span>
              <span className="service-video-play__hint">Play session</span>
            </button>
          )}

          <motion.h3
            className="service-video-card__label"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={reducedMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{
              duration: 0.5,
              delay: reducedMotion ? 0 : 0.12 + index * 0.1,
              ease: EASE,
            }}
          >
            {video.label}
          </motion.h3>
        </div>
      </div>

      {video.caption ? (
        <motion.div
          className="service-video-card__footer"
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={reducedMotion || inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{
            duration: 0.45,
            delay: reducedMotion ? 0 : 0.22 + index * 0.1,
            ease: EASE,
          }}
        >
          <p className="service-video-card__caption">{video.caption}</p>
          {!playing ? (
            <a
              href={youtubeWatchUrl(video.youtubeId)}
              target="_blank"
              rel="noopener noreferrer"
              className="service-video-card__watch-link"
            >
              Watch on YouTube
            </a>
          ) : null}
        </motion.div>
      ) : null}
    </motion.article>
  )
}

export default function ServiceVideosSection({ section }: Props) {
  return (
    <section
      className="service-videos-section service-videos-section--premium"
      aria-labelledby="service-videos-heading"
    >
      <div className="container service-videos-inner">
        <header className="service-videos-head reveal">
          <p className="eyebrow service-videos-eyebrow">{section.eyebrow}</p>
          <h2 id="service-videos-heading" className="service-videos-title">
            {section.title}
          </h2>
          {section.intro ? (
            <p className="service-videos-intro">{section.intro}</p>
          ) : null}
        </header>
      </div>

      <div className="service-videos-bleed">
        <div
          className="service-videos-grid"
          role="list"
          aria-label={`${section.eyebrow} videos`}
        >
          {section.videos.map((video, index) => (
            <ServiceVideoCard key={video.youtubeId} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
