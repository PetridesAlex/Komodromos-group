import { useMemo, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import GwSectionHeader from './GwSectionHeader'
import { AVIATION_SECTIONS, gwClientLogos, type GwClientLogo } from '../../data/globalWingsPage'

function ClientCard({ logo }: { logo: GwClientLogo }) {
  const [imageFailed, setImageFailed] = useState(false)
  const cardLabel = logo.shortName ?? logo.name
  const useTextFallback = !logo.src || imageFailed

  return (
    <>
      <div
        className={`gw-clients-marquee__card${useTextFallback ? ' gw-clients-marquee__card--text' : ''}`}
      >
        <span className="gw-clients-marquee__card-glow" aria-hidden />
        {useTextFallback ? (
          <span className="gw-clients-marquee__card-name">{cardLabel}</span>
        ) : (
          <img
            src={logo.src}
            alt=""
            width={240}
            height={96}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <figcaption className="gw-clients-marquee__caption">
        <span className="gw-clients-marquee__caption-text">{logo.name}</span>
      </figcaption>
    </>
  )
}

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
              : ({ '--marquee-duration': `${Math.max(logos.length * 4.2, 36)}s` } as CSSProperties)
          }
        >
          {trackLogos.map((logo, index) => (
            <motion.figure
              key={`${logo.name}-${index}`}
              className="gw-clients-marquee__item reveal revealed"
              whileHover={reducedMotion ? undefined : { y: -6, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ClientCard logo={logo} />
            </motion.figure>
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
      <div className="gw-clients-section__bg" aria-hidden>
        <span className="gw-clients-section__aurora gw-clients-section__aurora--one" />
        <span className="gw-clients-section__aurora gw-clients-section__aurora--two" />
        <span className="gw-clients-section__grid" />
      </div>

      <div className="container gw-clients-section__head">
        <GwSectionHeader
          className="gw-clients-section__header"
          variant="dark"
          eyebrow="Trusted partnerships"
          title="Our Clients"
          intro="Leading airlines and aviation operators who rely on Global Wings for recruitment, staffing, and career programmes worldwide."
        />

        <div className="gw-clients-section__ribbon" aria-hidden>
          <span className="gw-clients-section__ribbon-stat">
            <strong>{gwClientLogos.length}+</strong> airline &amp; aviation partners
          </span>
          <span className="gw-clients-section__ribbon-divider" />
          <span className="gw-clients-section__ribbon-label">Global network</span>
        </div>
      </div>

      <div className="gw-clients-marquee" aria-label="Global Wings client partners">
        <div className="gw-clients-marquee__edge gw-clients-marquee__edge--left" aria-hidden />
        <div className="gw-clients-marquee__edge gw-clients-marquee__edge--right" aria-hidden />

        <div className="gw-clients-marquee__stage">
          <MarqueeRow logos={topRow} rowLabel="Global Wings clients — row one" />
          <div className="gw-clients-marquee__divider" aria-hidden />
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
