import { useMemo } from 'react'
import { useReducedMotion } from 'motion/react'
import type {
  ServiceGalleryMarquee as ServiceGalleryMarqueeData,
  ServiceGalleryImage,
} from '../data/servicePageSections'

type Props = {
  section: ServiceGalleryMarqueeData
}

function MarqueeRow({
  images,
  reverse = false,
  rowLabel,
}: {
  images: readonly ServiceGalleryImage[]
  reverse?: boolean
  rowLabel: string
}) {
  const reducedMotion = useReducedMotion()
  const trackImages = useMemo(
    () => (reducedMotion ? images : [...images, ...images]),
    [images, reducedMotion],
  )

  if (images.length === 0) return null

  return (
    <div
      className={`service-gallery-marquee__row${reverse ? ' service-gallery-marquee__row--reverse' : ''}`}
      aria-label={rowLabel}
    >
      <div
        className={`service-gallery-marquee__viewport${reducedMotion ? ' service-gallery-marquee__viewport--static' : ''}`}
      >
        <div
          className={`service-gallery-marquee__track${reducedMotion ? '' : ' service-gallery-marquee__track--animate'}`}
          style={
            reducedMotion
              ? undefined
              : ({ '--marquee-duration': `${Math.max(images.length * 4.5, 48)}s` } as React.CSSProperties)
          }
        >
          {trackImages.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="service-gallery-marquee__item"
            >
              <img
                src={image.src}
                alt={
                  reducedMotion || index < images.length
                    ? image.alt ?? ''
                    : ''
                }
                width={960}
                height={640}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ServiceGalleryMarquee({ section }: Props) {
  const midpoint = Math.ceil(section.images.length / 2)
  const topRow = section.images.slice(0, midpoint)
  const bottomRow = section.images.slice(midpoint)

  return (
    <section
      className="service-gallery-marquee"
      aria-labelledby="service-gallery-marquee-title"
    >
      <div className="container service-gallery-marquee__head-wrap">
        <header className="service-gallery-marquee__head reveal">
          <p className="service-gallery-marquee__eyebrow">{section.eyebrow}</p>
          <h2 id="service-gallery-marquee-title" className="service-gallery-marquee__title">
            {section.title}
          </h2>
          {section.intro ? (
            <p className="service-gallery-marquee__intro">{section.intro}</p>
          ) : null}
        </header>
      </div>

      <div className="service-gallery-marquee__stage">
        <MarqueeRow images={topRow} rowLabel={`${section.title} — row one`} />
        {bottomRow.length > 0 ? (
          <MarqueeRow
            images={bottomRow}
            reverse
            rowLabel={`${section.title} — row two`}
          />
        ) : null}
      </div>
    </section>
  )
}
