import { motion, useReducedMotion } from 'motion/react'
import { STORAGE_SPOTLIGHT_GALLERY } from '../data/storagePageImages'

const EASE = [0.22, 1, 0.36, 1] as const

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
} as const

const tileVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.52, ease: EASE },
  },
} as const

export default function StorageSpotlightGallery() {
  const reduceMotion = useReducedMotion()

  const headerMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-48px' },
        transition: { duration: 0.55, ease: EASE },
      }

  const gridMotion = reduceMotion
    ? {}
    : {
        variants: gridVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-60px', amount: 0.12 },
      }

  return (
    <section
      className="storage-spotlight"
      aria-labelledby="storage-spotlight-heading"
    >
      <div className="storage-spotlight__ambient" aria-hidden />

      <motion.header className="storage-spotlight__head" {...headerMotion}>
        <p className="storage-spotlight__eyebrow">
          <span className="storage-spotlight__eyebrow-line" aria-hidden />
          <span className="storage-spotlight__eyebrow-text">Facility gallery</span>
          <span className="storage-spotlight__eyebrow-line" aria-hidden />
        </p>
        <h3 id="storage-spotlight-heading" className="storage-spotlight__title">
          <span className="storage-spotlight__title-main">See the site</span>
          <span className="storage-spotlight__title-accent">before you book</span>
        </h3>
        <p className="storage-spotlight__lead">
          Real views of our units, containers, and secure yard — the same locations featured across
          our services, collected here for a closer look.
        </p>
      </motion.header>

      <motion.ul
        className="storage-spotlight__grid"
        role="list"
        {...gridMotion}
      >
        {STORAGE_SPOTLIGHT_GALLERY.map((item, index) => (
          <motion.li
            key={item.file}
            role="listitem"
            className="storage-spotlight__tile"
            variants={reduceMotion ? undefined : tileVariants}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -6, transition: { type: 'spring', stiffness: 400, damping: 24 } }
            }
          >
            <div className="storage-spotlight__frame">
              <motion.img
                src={item.src}
                alt={item.alt}
                className="storage-spotlight__img"
                loading="lazy"
                decoding="async"
                whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                transition={{ duration: 0.5, ease: EASE }}
              />
              <div className="storage-spotlight__scrim" aria-hidden />
              <span className="storage-spotlight__index" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
              <figcaption className="storage-spotlight__caption">{item.caption}</figcaption>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
