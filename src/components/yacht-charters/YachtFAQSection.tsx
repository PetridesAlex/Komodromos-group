import { useState } from 'react'
import { motion } from 'motion/react'

type FaqItem = { q: string; a: string }

type Props = {
  title?: string
  items: FaqItem[]
  reduceMotion: boolean | null
}

export default function YachtFAQSection({
  title = 'Frequently asked questions',
  items,
  reduceMotion,
}: Props) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="yacht-section yacht-faq" aria-labelledby="yacht-faq-title">
      <div className="container yacht-faq__inner">
        <header className="yacht-section__head">
          <p className="yacht-section__eyebrow">Clarity</p>
          <motion.h2
            id="yacht-faq-title"
            className="yacht-section__title"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {title}
          </motion.h2>
        </header>
        <div className="yacht-faq__list">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`yacht-faq__item ${isOpen ? 'yacht-faq__item--open' : ''}`}
              >
                <button
                  type="button"
                  className="yacht-faq__q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="yacht-faq__q-text">{item.q}</span>
                  <span className="yacht-faq__icon" aria-hidden />
                </button>
                <div className="yacht-faq__a-wrap">
                  <p className="yacht-faq__a">{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
