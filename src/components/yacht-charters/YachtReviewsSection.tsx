import { motion } from 'motion/react'

type Review = { quote: string; name: string; context: string }

type Props = {
  title: string
  reviews: Review[]
  reduceMotion: boolean | null
}

export default function YachtReviewsSection({ title, reviews, reduceMotion }: Props) {
  return (
    <section className="yacht-section yacht-reviews" aria-labelledby="yacht-reviews-title">
      <div className="container">
        <header className="yacht-section__head yacht-section__head--center">
          <p className="yacht-section__eyebrow">Testimonials</p>
          <motion.h2
            id="yacht-reviews-title"
            className="yacht-section__title yacht-section__title--center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0.01 : 0.5 }}
          >
            {title}
          </motion.h2>
        </header>
        <div className="yacht-reviews__grid">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name + i}
              className="yacht-reviews__card"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.5,
                delay: reduceMotion ? 0 : i * 0.08,
              }}
            >
              <span className="yacht-reviews__mark" aria-hidden>
                “
              </span>
              <p className="yacht-reviews__quote">{r.quote}</p>
              <footer className="yacht-reviews__foot">
                <cite className="yacht-reviews__name">{r.name}</cite>
                <span className="yacht-reviews__ctx">{r.context}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
