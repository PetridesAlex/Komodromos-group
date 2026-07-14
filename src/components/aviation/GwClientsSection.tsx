import { useMemo, type CSSProperties } from 'react'
import { useReducedMotion } from 'motion/react'
import GwSectionHeader from './GwSectionHeader'
import { AVIATION_SECTIONS, gwClientLogos, type GwClientLogo } from '../../data/globalWingsPage'

function MarqueeRow({
  logos,
  reverse = false,
  rowLabel,
}: {
  logos: readonly GwClientLogo[]
  reverse?: boolean
  rowLabel: string
}) {
  const reducedMotion = useReducedMotion()
  const trackLogos = useMemo(
    () => (reducedMotion ? logos : [...logos, ...logos]),
    [logos, reducedMotion],
  )

  if (logos.length === 0) return null

  return (
    <div
      className={`gw-clients-marquee__row${reverse ? ' gw-clients-marquee__row--reverse' : ''}`}
      aria-label={rowLabel}
    >
      <div
        className={`gw-clients-marquee__viewport${reducedMotion ? ' gw-clients-marquee__viewport--static' : ''}`}
      >
        <div
          className={`gw-clients-marquee__track${reducedMotion ? '' : ' gw-clients-marquee__track--animate'}`}
          style={
            reducedMotion
              ? undefined
              : ({ '--marquee-duration': `${Math.max(logos.length * 5.5, 42)}s` } as CSSProperties)
          }
        >
          {trackLogos.map((logo, index) => (
            <figure
              key={`${logo.src}-${index}`}
              className="gw-clients-marquee__item reveal revealed"
            >
              <div className="gw-clients-marquee__card">
                <img
                  src={logo.src}
                  alt={reducedMotion || index < logos.length ? `${logo.name} logo` : ''}
                  width={240}
                  height={96}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
              {(reducedMotion || index < logos.length) && (
                <figcaption className="gw-clients-marquee__caption">{logo.name}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function GwClientsSection() {
  const midpoint = Math.ceil(gwClientLogos.length / 2)
  const topRow = gwClientLogos.slice(0, midpoint)
  const bottomRow = gwClientLogos.slice(midpoint)

  return (
    <section id={AVIATION_SECTIONS.clients} className="gw-section gw-section--clients">
      <div className="container">
        <GwSectionHeader
          className="gw-clients-section__header reveal"
          eyebrow="Trusted partnerships"
          title="Our Clients"
          intro="Leading airlines and aviation operators who rely on Global Wings for recruitment, staffing, and career programmes worldwide."
        />
      </div>

      <div className="gw-clients-marquee" aria-label="Global Wings client partners">
        <div className="gw-clients-marquee__stage">
          <MarqueeRow logos={topRow} rowLabel="Global Wings clients — row one" />
          {bottomRow.length > 0 ? (
            <MarqueeRow
              logos={bottomRow}
              reverse
              rowLabel="Global Wings clients — row two"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
