import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Play } from 'lucide-react'
import { AVIATION_YOUTUBE_WATCH_URL, gwAboutSection } from '../../data/globalWingsPage'

const EASE = [0.22, 1, 0.36, 1] as const

type Props = {
  sectionId: string
}

export default function GwAboutSection({ sectionId }: Props) {
  const reduceMotion = useReducedMotion()

  const fadeUp = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.75, ease: EASE },
        },
      }

  const shell = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 48 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.85, ease: EASE, staggerChildren: 0.1, delayChildren: 0.08 },
        },
      }

  const statItem = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24, scale: 0.96 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.55, ease: EASE },
        },
      }

  return (
    <section id={sectionId} className="gw-section gw-section--about">
      <div className="gw-about__bg" aria-hidden />

      <div className="gw-section__bleed gw-about__bleed">
        <motion.article
          className="gw-about__shell"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px -6% 0px' }}
          variants={shell}
        >
          <span className="gw-about__shell-accent" aria-hidden />
          <span className="gw-about__shell-glow" aria-hidden />

          <div className="gw-about__shell-inner">
            <header className="gw-about__head">
              <motion.span className="gw-about__eyebrow" variants={fadeUp}>
                {gwAboutSection.eyebrow}
              </motion.span>
              <motion.h2 className="gw-about__title" variants={fadeUp}>
                {gwAboutSection.title}
              </motion.h2>
              <motion.span className="gw-about__rule" variants={fadeUp} aria-hidden />
              <motion.p className="gw-about__intro" variants={fadeUp}>
                {gwAboutSection.intro}
              </motion.p>
              <motion.p className="gw-about__body" variants={fadeUp}>
                {gwAboutSection.body}
              </motion.p>
            </header>

            <motion.ul
              className="gw-about__highlights"
              aria-label="Company highlights"
              variants={fadeUp}
            >
              {gwAboutSection.highlights.map((item, index) => (
                <motion.li
                  key={item.label}
                  variants={statItem}
                  custom={index}
                  transition={{ delay: reduceMotion ? 0 : index * 0.08 }}
                >
                  <span className="gw-about__highlight-value">{item.value}</span>
                  <span className="gw-about__highlight-label">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.ul
              className="gw-about__capabilities"
              aria-label="Core capabilities"
              variants={fadeUp}
            >
              {gwAboutSection.capabilities.map((item) => (
                <motion.li key={item} variants={statItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div className="gw-about__film-strip" variants={fadeUp}>
              <div className="gw-about__film-strip-visual" aria-hidden>
                <span className="gw-about__film-strip-glow" />
                <span className="gw-about__film-strip-ring" />
                <span className="gw-about__film-strip-icon">
                  <Play strokeWidth={1.75} aria-hidden />
                </span>
              </div>
              <div className="gw-about__film-strip-copy">
                <span className="gw-about__film-badge">{gwAboutSection.filmBadge}</span>
                <p className="gw-about__film-lead">{gwAboutSection.filmLead}</p>
              </div>
              <div className="gw-about__film-strip-action">
                <a
                  href={AVIATION_YOUTUBE_WATCH_URL}
                  className="gw-about__film-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="gw-about__film-link-fill" aria-hidden />
                  <Play className="gw-about__film-link-icon" aria-hidden size={15} strokeWidth={2.25} />
                  <span className="gw-about__film-link-label">{gwAboutSection.filmLinkLabel}</span>
                  <ArrowUpRight className="gw-about__film-link-arrow" aria-hidden size={15} strokeWidth={2.25} />
                </a>
                <span className="gw-about__film-hint">{gwAboutSection.filmLinkHint}</span>
              </div>
            </motion.div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
