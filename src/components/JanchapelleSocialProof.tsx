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
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}

const card: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

const GoogleGlyph = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} focusable="false" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
)

const FacebookGlyph = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} focusable="false" aria-hidden>
    <path
      fill="#1877F2"
      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
    />
  </svg>
)

type SocialPost = (typeof JANCHAPELLE_SOCIAL_PROOF.posts)[number]

function hasReviewText(post: SocialPost): post is SocialPost & { text: string } {
  return 'text' in post && typeof post.text === 'string' && post.text.length > 0
}

function postInitials(post: SocialPost): string {
  return post.initials
}

export default function JanchapelleSocialProof() {
  const reduceMotion = useReducedMotion()
  const {
    featured,
    wordmarks,
    wordmarksLabel,
    posts,
    eyebrow,
    title,
    ratingsLead,
    ratings,
  } = JANCHAPELLE_SOCIAL_PROOF
  const writtenPosts = posts.filter(hasReviewText)
  const ratingPosts = posts.filter((post) => !hasReviewText(post))

  const renderCard = (post: SocialPost) => {
    const withText = hasReviewText(post)
    return (
      <motion.article
        key={post.name}
        variants={reduceMotion ? undefined : card}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -4,
                transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
              }
        }
        className={`jc-social-proof__card${
          withText ? '' : ' jc-social-proof__card--rating'
        }`}
      >
        <div className="jc-social-proof__card-top">
          <div className="jc-social-proof__card-person">
            <span className="jc-social-proof__card-initials" aria-hidden>
              {postInitials(post)}
            </span>
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

        {withText ? (
          <p className="jc-social-proof__card-text">{post.text}</p>
        ) : (
          <div
            className="jc-social-proof__card-rating"
            role="img"
            aria-label="Rated 5 out of 5 stars on Google"
          >
            <span className="jc-social-proof__card-rating-stars" aria-hidden>
              {[0, 1, 2, 3, 4].map((star) => (
                <Star key={star} className="jc-social-proof__card-rating-star" />
              ))}
            </span>
            <span className="jc-social-proof__card-rating-label">5/5 Google rating</span>
          </div>
        )}

        {withText && 'replies' in post ? (
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
        ) : null}
      </motion.article>
    )
  }

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
            {title}
          </h2>
          <p className="jc-social-proof__ratings-lead">{ratingsLead}</p>
          <div className="jc-social-proof__ratings" aria-label="Platform ratings">
            {ratings.map((rating) => (
              <div
                key={rating.platform}
                className={`jc-social-proof__rating jc-social-proof__rating--${rating.platform}`}
              >
                <span className="jc-social-proof__rating-icon" aria-hidden>
                  {rating.platform === 'google' ? (
                    <GoogleGlyph size={22} />
                  ) : (
                    <FacebookGlyph size={22} />
                  )}
                </span>
                <span className="jc-social-proof__rating-body">
                  <span className="jc-social-proof__rating-row">
                    <span className="jc-social-proof__rating-score">
                      <span className="jc-social-proof__rating-score-value">{rating.score}</span>
                      <span className="jc-social-proof__rating-score-den">/5</span>
                    </span>
                    <span className="jc-social-proof__rating-stars" aria-hidden>
                      {[0, 1, 2, 3, 4].map((star) => (
                        <Star key={star} className="jc-social-proof__rating-star" />
                      ))}
                    </span>
                  </span>
                  <span className="jc-social-proof__rating-label">{rating.label}</span>
                </span>
              </div>
            ))}
          </div>
          <span className="jc-ornament" aria-hidden />
        </header>

        <div className="jc-social-proof__layout">
          <div className="jc-social-proof__lead">
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
                <span className="jc-social-proof__avatar jc-social-proof__avatar--initials" aria-hidden>
                  {featured.initials}
                </span>
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

            {ratingPosts.length > 0 ? (
              <motion.div
                variants={reduceMotion ? undefined : grid}
                initial={reduceMotion ? false : 'hidden'}
                whileInView={reduceMotion ? undefined : 'visible'}
                viewport={{ once: true, margin: '-80px' }}
                className="jc-social-proof__ratings-grid"
              >
                {ratingPosts.map(renderCard)}
              </motion.div>
            ) : null}
          </div>

          <motion.div
            variants={reduceMotion ? undefined : grid}
            initial={reduceMotion ? false : 'hidden'}
            whileInView={reduceMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-80px' }}
            className="jc-social-proof__grid"
          >
            {writtenPosts.map(renderCard)}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
