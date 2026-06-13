import { useRef, type CSSProperties } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import type { StorageUnitSpecification } from '../data/storageUnitSpecifications'

const EASE = [0.22, 1, 0.36, 1] as const

const LAZY_VIEW = { once: true, margin: '180px 0px' } as const
const REVEAL_VIEW = { once: true, margin: '-40px' } as const

const cardShellVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.62,
      ease: EASE,
      when: 'beforeChildren',
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
} as const

const cardShellVariantsReduced = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2 },
  },
} as const

const cardPartVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: EASE },
  },
} as const

const tablesVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
} as const

type StorageUnitSpecCardProps = {
  unit: StorageUnitSpecification
  index: number
}

export default function StorageUnitSpecCard({ unit, index }: StorageUnitSpecCardProps) {
  const reduceMotion = useReducedMotion()
  const rootRef = useRef<HTMLElement>(null)
  const isNearView = useInView(rootRef, LAZY_VIEW)
  const isRevealed = useInView(rootRef, REVEAL_VIEW)

  const shellVariants = reduceMotion ? cardShellVariantsReduced : cardShellVariants
  const shouldAnimate = isRevealed || reduceMotion

  return (
    <motion.section
      ref={rootRef}
      id={unit.id}
      className="storage-unit-specs__card"
      aria-labelledby={`storage-unit-spec-${unit.id}`}
      initial={false}
      animate={shouldAnimate ? 'visible' : 'hidden'}
      variants={shellVariants}
      style={{ '--spec-card-index': index } as CSSProperties}
    >
      {!isNearView ? (
        <div className="storage-unit-specs__card-skeleton" aria-hidden>
          <span className="storage-unit-specs__card-skeleton-line storage-unit-specs__card-skeleton-line--short" />
          <span className="storage-unit-specs__card-skeleton-line storage-unit-specs__card-skeleton-line--title" />
          <span className="storage-unit-specs__card-skeleton-line" />
          <span className="storage-unit-specs__card-skeleton-line" />
          <div className="storage-unit-specs__card-skeleton-grid">
            <span className="storage-unit-specs__card-skeleton-block" />
            <span className="storage-unit-specs__card-skeleton-block" />
          </div>
        </div>
      ) : (
        <>
          <motion.div
            className="storage-unit-specs__card-accent"
            aria-hidden
            variants={reduceMotion ? undefined : cardPartVariants}
          />

          <motion.header className="storage-unit-specs__card-head" variants={reduceMotion ? undefined : cardPartVariants}>
            <div className="storage-unit-specs__card-head-top">
              <p className="storage-unit-specs__card-eyebrow">{unit.eyebrow}</p>
              <span className="storage-unit-specs__card-index" aria-hidden>
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <div className="storage-unit-specs__card-title-wrap">
              <span className="storage-unit-specs__card-title-rule" aria-hidden />
              <h2 id={`storage-unit-spec-${unit.id}`} className="storage-unit-specs__card-title">
                <span className="storage-unit-specs__card-title-main">{unit.titleMain}</span>
                <span className="storage-unit-specs__card-title-accent">{unit.titleAccent}</span>
              </h2>
            </div>
            <p className="storage-unit-specs__card-lead">{unit.lead}</p>
            {unit.note ? <p className="storage-unit-specs__card-note">{unit.note}</p> : null}
          </motion.header>

          <motion.div
            className="storage-unit-specs__tables"
            variants={reduceMotion ? undefined : tablesVariants}
          >
            {unit.sections.map((section) => (
              <motion.div
                key={section.title}
                className="storage-unit-specs__table-block"
                variants={reduceMotion ? undefined : cardPartVariants}
              >
                <h3 className="storage-unit-specs__table-title">{section.title}</h3>
                <table className="storage-unit-specs__table">
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            ))}
          </motion.div>

          {unit.summary?.length ? (
            <motion.div
              className="storage-unit-specs__summary"
              variants={reduceMotion ? undefined : cardPartVariants}
            >
              <p className="storage-unit-specs__summary-label">Summary</p>
              <ul className="storage-unit-specs__summary-list">
                {unit.summary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ) : null}
        </>
      )}
    </motion.section>
  )
}
