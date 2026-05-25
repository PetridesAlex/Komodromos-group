import type { ServiceVideosSection as ServiceVideosSectionData } from '../data/servicePageSections'

type Props = {
  section: ServiceVideosSectionData
}

function youtubeEmbedSrc(id: string) {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`
}

export default function ServiceVideosSection({ section }: Props) {
  return (
    <section
      className="service-videos-section"
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

        <div
          className="service-videos-grid"
          role="list"
          aria-label={`${section.eyebrow} videos`}
        >
          {section.videos.map((video, index) => (
            <article
              key={video.youtubeId}
              className={`service-video-card reveal ${
                ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'][
                  Math.min(index, 3)
                ]
              }`}
              role="listitem"
            >
              <h3 className="service-video-card__label">{video.label}</h3>
              <div className="service-video-card__frame">
                <div className="service-video-embed">
                  <iframe
                    title={`${video.label} — YouTube video`}
                    src={youtubeEmbedSrc(video.youtubeId)}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              {video.caption ? (
                <p className="service-video-card__caption">{video.caption}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
