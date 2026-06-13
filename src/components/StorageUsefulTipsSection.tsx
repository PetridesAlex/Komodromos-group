import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { STORAGE_USEFUL_TIPS, storageTipDetailPath } from '../data/storageUsefulTipsContent'

const EASE = [0.22, 1, 0.36, 1] as const

export default function StorageUsefulTipsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="storage-tips" id="storage-tips" aria-labelledby="storage-tips-heading">
      <header className="storage-tips__head">
        <p className="storage-tips__eyebrow">Useful tips</p>
        <h3 id="storage-tips-heading" className="storage-tips__title">
          Practical advice for smarter storage
        </h3>
      </header>

      <ul className="storage-tips__grid" role="list">
        {STORAGE_USEFUL_TIPS.map((tip, index) => (
          <motion.li
            key={tip.id}
            role="listitem"
            className="storage-tips__item"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-48px' }}
            transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
          >
            <article className="storage-tips__card">
              <Link
                to={storageTipDetailPath(tip.id)}
                className="storage-tips__media"
                tabIndex={-1}
                aria-hidden
              >
                <div className="storage-tips__media-frame">
                  <img
                    src={tip.image}
                    alt=""
                    className="storage-tips__img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Link>

              <div className="storage-tips__body">
                <span className="storage-tips__card-index" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <Link to={storageTipDetailPath(tip.id)} className="storage-tips__title-link">
                  <h4 className="storage-tips__card-title">{tip.title}</h4>
                </Link>
                <Link to={storageTipDetailPath(tip.id)} className="storage-tips__read-more group">
                  <span>Read more</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2.25}
                    className="storage-tips__read-more-icon"
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
