import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { weddingTestimonialsCopy } from '../data/weddingPageCopy'
import { WEDDING_REVIEWS, type WeddingReview } from '../data/weddingReviews'
import { useWeddingLocale } from '../lib/weddingLocale'

const PAGE_SIZE = 4

const GoogleGlyph = ({ size = 12 }: { size?: number }) => (
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

const FacebookGlyph = ({ size = 12 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} focusable="false" aria-hidden>
    <path
      fill="currentColor"
      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
    />
  </svg>
)

function ReviewSourceBadge({ source }: { source: WeddingReview['source'] }) {
  const { t } = useWeddingLocale()
  return (
    <span className={`wedding-social-proof__source wedding-social-proof__source--${source}`}>
      <span className="wedding-social-proof__source-icon" aria-hidden>
        {source === 'google' ? <GoogleGlyph /> : <FacebookGlyph />}
      </span>
      {source === 'google'
        ? t(weddingTestimonialsCopy.reviewedOnGoogle)
        : t(weddingTestimonialsCopy.reviewedOnFacebook)}
    </span>
  )
}

function ReviewAuthor({
  review,
  size = 'md',
}: {
  review: WeddingReview
  size?: 'md' | 'lg'
}) {
  return (
    <div className={`wedding-social-proof__person wedding-social-proof__person--${size}`}>
      <span className="wedding-social-proof__avatar" aria-hidden>
        {review.initials}
      </span>
      <div>
        <cite className="wedding-social-proof__name">{review.author}</cite>
        <span className="wedding-social-proof__stars" aria-label="5 out of 5 stars">
          ★★★★★
        </span>
      </div>
    </div>
  )
}

function truncateQuote(quote: string, max = 220): string {
  if (quote.length <= max) return quote
  const cut = quote.slice(0, max)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 140 ? lastSpace : max).trim()}…`
}

export default function WeddingSocialProof() {
  const { t } = useWeddingLocale()
  const reduceMotion = useReducedMotion()
  const totalPages = Math.max(1, Math.ceil(WEDDING_REVIEWS.length / PAGE_SIZE))
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduceMotion || paused || totalPages < 2) return
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % totalPages)
    }, 9000)
    return () => window.clearInterval(id)
  }, [reduceMotion, paused, totalPages])

  const start = page * PAGE_SIZE
  const pageReviews = WEDDING_REVIEWS.slice(start, start + PAGE_SIZE)
  const [featured, ...supporting] = pageReviews

  const goPrev = () => {
    setPaused(true)
    setPage((current) => (current - 1 + totalPages) % totalPages)
  }

  const goNext = () => {
    setPaused(true)
    setPage((current) => (current + 1) % totalPages)
  }

  return (
    <div
      className="wedding-testimonials__grid wedding-social-proof"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="wedding-social-proof__toolbar" role="navigation" aria-label={t(weddingTestimonialsCopy.carouselAria)}>
        <button
          type="button"
          className="wedding-social-proof__nav"
          onClick={goPrev}
          aria-label={t(weddingTestimonialsCopy.prevAria)}
        >
          <ChevronLeft size={18} strokeWidth={2.25} aria-hidden />
          <span>{t(weddingTestimonialsCopy.prev)}</span>
        </button>

        <p className="wedding-social-proof__status" aria-live="polite">
          <span className="wedding-social-proof__status-page">
            {t(weddingTestimonialsCopy.pageLabel)
              .replace('{current}', String(page + 1))
              .replace('{total}', String(totalPages))}
          </span>
          <span className="wedding-social-proof__status-count">
            {t(weddingTestimonialsCopy.reviewsShown)
              .replace('{count}', String(WEDDING_REVIEWS.length))}
          </span>
        </p>

        <button
          type="button"
          className="wedding-social-proof__nav"
          onClick={goNext}
          aria-label={t(weddingTestimonialsCopy.nextAria)}
        >
          <span>{t(weddingTestimonialsCopy.next)}</span>
          <ChevronRight size={18} strokeWidth={2.25} aria-hidden />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="wedding-social-proof__stage"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.4 }}
        >
          {featured ? (
            <blockquote
              className={`wedding-social-proof__featured wedding-testimonial wedding-testimonial--${featured.source}`}
              lang={featured.lang}
            >
              <div className="wedding-social-proof__featured-top">
                <ReviewAuthor review={featured} size="lg" />
                <ReviewSourceBadge source={featured.source} />
              </div>
              <p className="wedding-social-proof__featured-quote">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </blockquote>
          ) : null}

          <div className="wedding-social-proof__cards">
            {supporting.map((review) => (
              <blockquote
                key={`${review.source}-${review.author}-${review.quote.slice(0, 24)}`}
                className={`wedding-social-proof__card wedding-testimonial wedding-testimonial--${review.source}`}
                lang={review.lang}
              >
                <p className="wedding-social-proof__card-quote">
                  &ldquo;{truncateQuote(review.quote)}&rdquo;
                </p>
                <footer className="wedding-social-proof__card-foot">
                  <ReviewAuthor review={review} />
                  <ReviewSourceBadge source={review.source} />
                </footer>
              </blockquote>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="wedding-social-proof__dots" role="tablist" aria-label={t(weddingTestimonialsCopy.carouselAria)}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={index === page}
            aria-label={t(weddingTestimonialsCopy.pageAria).replace('{n}', String(index + 1))}
            className={`wedding-social-proof__dot${index === page ? ' wedding-social-proof__dot--active' : ''}`}
            onClick={() => {
              setPaused(true)
              setPage(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}
