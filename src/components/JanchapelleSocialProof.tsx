import { motion, useReducedMotion, type Variants } from 'motion/react'
import { BadgeCheck, Heart, MessageCircle, Repeat2, Star } from 'lucide-react'
import { JANCHAPELLE_SOCIAL_PROOF } from '../data/janchapellePage'

const panel: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const grid: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function JanchapelleSocialProof() {
  const reduceMotion = useReducedMotion()
  const { featured, wordmarks, wordmarksLabel, posts, eyebrow } = JANCHAPELLE_SOCIAL_PROOF

  return (
    <section
      id="jc-reviews"
      className="jc-social-proof"
      aria-labelledby="jc-reviews-heading"
    >
      <div className="jc-social-proof__glow" aria-hidden />
      <div className="jc-social-proof__inner">
        <header className="jc-social-proof__head">
          <p className="jc-social-proof__eyebrow">{eyebrow}</p>
          <h2 id="jc-reviews-heading" className="jc-social-proof__title">
            Words from the dressing room
          </h2>
          <span className="jc-ornament" aria-hidden />
        </header>

        <div className="jc-social-proof__layout">
          <motion.div
            variants={reduceMotion ? undefined : panel}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
            className="jc-social-proof__featured"
          >
            <div
              role="img"
              aria-label="Rated 5 out of 5 stars"
              className="jc-social-proof__stars"
            >
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="jc-social-proof__star" aria-hidden />
              ))}
            </div>

            <blockquote className="jc-social-proof__quote">
              <p>&ldquo;{featured.quote}&rdquo;</p>
            </blockquote>

            <div className="jc-social-proof__author">
              <img
                src={featured.avatar}
                alt=""
                width={48}
                height={48}
                className="jc-social-proof__avatar"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="jc-social-proof__name">{featured.name}</p>
                <p className="jc-social-proof__role">{featured.role}</p>
              </div>
            </div>

            <div className="jc-social-proof__houses">
              <p className="jc-social-proof__houses-label">{wordmarksLabel}</p>
              <ul className="jc-social-proof__wordmarks">
                {wordmarks.map((mark) => (
                  <li key={mark}>{mark}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={reduceMotion ? undefined : grid}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
            className="jc-social-proof__grid"
          >
            {posts.map((post) => (
              <motion.article
                key={post.handle}
                variants={reduceMotion ? undefined : card}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
                      }
                }
                className="jc-social-proof__card"
              >
                <div className="jc-social-proof__card-top">
                  <div className="jc-social-proof__card-person">
                    <img
                      src={post.avatar}
                      alt=""
                      width={40}
                      height={40}
                      className="jc-social-proof__card-avatar"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="jc-social-proof__card-name">
                        {post.name}
                        <BadgeCheck className="jc-social-proof__verified" aria-hidden />
                      </p>
                      <p className="jc-social-proof__card-handle">{post.handle}</p>
                    </div>
                  </div>
                  <time className="jc-social-proof__card-date">{post.date}</time>
                </div>

                <p className="jc-social-proof__card-text">{post.text}</p>

                <div className="jc-social-proof__card-meta" aria-hidden>
                  <span>
                    <MessageCircle />
                    {post.replies}
                  </span>
                  <span>
                    <Repeat2 />
                    {post.reposts}
                  </span>
                  <span>
                    <Heart />
                    {post.likes}
                  </span>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
