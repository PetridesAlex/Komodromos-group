import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GwSectionHeader from './GwSectionHeader'
import { getAviationBlogPosts, type AviationBlogPost } from '../../data/globalWingsPage'

function GwAviationLink({
  to,
  className,
  children,
}: {
  to: string
  className?: string
  children: ReactNode
}) {
  if (to.startsWith('/')) {
    const hashIndex = to.indexOf('#')
    if (hashIndex !== -1) {
      return (
        <Link
          to={{ pathname: to.slice(0, hashIndex), hash: to.slice(hashIndex + 1) }}
          className={className}
        >
          {children}
        </Link>
      )
    }
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

function GwBlogPhoto({
  image,
  eager = false,
}: {
  image: AviationBlogPost['images'][number]
  eager?: boolean
}) {
  return (
    <img
      className="gw-blog-feature__photo"
      src={image.src}
      alt={image.alt}
      width={1680}
      height={720}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      draggable={false}
      style={image.imagePosition ? { objectPosition: image.imagePosition } : undefined}
    />
  )
}

function GwBlogMedia({
  post,
  reduceMotion,
  eager = false,
}: {
  post: AviationBlogPost
  reduceMotion: boolean | null
  eager?: boolean
}) {
  const [activeSlide, setActiveSlide] = useState(0)
  const images = post.images

  if (images.length <= 1) {
    return images[0] ? <GwBlogPhoto image={images[0]} eager={eager} /> : null
  }

  return (
    <div className="gw-blog-feature__carousel">
      <div className="gw-blog-feature__carousel-track">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeSlide}
            className="gw-blog-feature__carousel-slide"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <GwBlogPhoto image={images[activeSlide]} eager={eager && activeSlide === 0} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="gw-blog-feature__carousel-controls">
        <button
          type="button"
          className="gw-blog-feature__carousel-btn"
          aria-label="Previous image"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setActiveSlide((s) => (s - 1 + images.length) % images.length)
          }}
        >
          <ChevronLeft size={18} strokeWidth={2} aria-hidden />
        </button>
        <div className="gw-blog-feature__carousel-dots" aria-hidden>
          {images.map((image, i) => (
            <span
              key={image.src}
              className={`gw-blog-feature__carousel-dot${i === activeSlide ? ' is-active' : ''}`}
            />
          ))}
        </div>
        <button
          type="button"
          className="gw-blog-feature__carousel-btn"
          aria-label="Next image"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setActiveSlide((s) => (s + 1) % images.length)
          }}
        >
          <ChevronRight size={18} strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  )
}

function GwBlogFeature({
  post,
  index,
  isActive,
  reduceMotion,
}: {
  post: AviationBlogPost
  index: number
  isActive: boolean
  reduceMotion: boolean | null
}) {
  return (
    <motion.article
      className={`gw-blog-feature${isActive ? ' gw-blog-feature--active' : ''}`}
      aria-hidden={!isActive}
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0.42,
        scale: isActive ? 1 : 0.94,
        filter: isActive ? 'blur(0px)' : 'blur(1px)',
      }}
      transition={{ duration: reduceMotion ? 0.01 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <GwAviationLink to={post.to} className="gw-blog-feature__link">
        <div className="gw-blog-feature__media">
          <GwBlogMedia post={post} reduceMotion={reduceMotion} eager={index === 0 && isActive} />
          <div className="gw-blog-feature__overlay" aria-hidden />
          <div className="gw-blog-feature__shine" aria-hidden />
          <span className="gw-blog-feature__index" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="gw-blog-feature__content">
          <span className="gw-blog-feature__tag">{post.tag}</span>
          <h3 className="gw-blog-feature__title">{post.title.trim()}</h3>
          <p className="gw-blog-feature__excerpt">{post.excerpt}</p>
          <span className="gw-blog-feature__cta">
            Read article
            <ArrowUpRight className="gw-blog-feature__cta-icon" size={16} strokeWidth={2} aria-hidden />
          </span>
        </div>
      </GwAviationLink>
    </motion.article>
  )
}

export default function GwBlogSection({ sectionId }: { sectionId: string }) {
  const reduceMotion = useReducedMotion()
  const aviationBlogPosts = getAviationBlogPosts()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [trackOffset, setTrackOffset] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const total = aviationBlogPosts.length

  const updateTrackOffset = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const slide = track.children[active] as HTMLElement | undefined
    const viewport = track.parentElement
    if (!slide || !viewport) return

    const centerOffset = viewport.clientWidth / 2 - slide.offsetWidth / 2
    setTrackOffset(-slide.offsetLeft + centerOffset)
  }, [active])

  useEffect(() => {
    updateTrackOffset()
    window.addEventListener('resize', updateTrackOffset)
    return () => window.removeEventListener('resize', updateTrackOffset)
  }, [updateTrackOffset])

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total)
    },
    [total],
  )

  const goNext = useCallback(() => goTo(active + 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo])

  useEffect(() => {
    if (reduceMotion || paused || total <= 1) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [reduceMotion, paused, total])

  return (
    <section
      id={sectionId}
      className="gw-section gw-section--blog"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="gw-blog-section__bg" aria-hidden />

      <div className="container">
        <GwSectionHeader
          className="gw-blog-section__header"
          variant="dark"
          eyebrow="Latest insights"
          title="Blog Posts"
          intro="Industry perspectives, service updates, and guidance from the Global Wings team."
        />
      </div>

      <div className="gw-blog-showcase" aria-roledescription="carousel" aria-label="Blog posts">
        <div className="gw-blog-showcase__controls">
          <button
            type="button"
            className="gw-blog-showcase__nav gw-blog-showcase__nav--prev"
            aria-label="Previous article"
            onClick={goPrev}
          >
            <ArrowLeft size={20} strokeWidth={1.75} aria-hidden />
          </button>
          <button
            type="button"
            className="gw-blog-showcase__nav gw-blog-showcase__nav--next"
            aria-label="Next article"
            onClick={goNext}
          >
            <ArrowRight size={20} strokeWidth={1.75} aria-hidden />
          </button>
        </div>

        <div className="gw-blog-showcase__viewport">
          <motion.div
            ref={trackRef}
            className="gw-blog-showcase__track"
            animate={{ x: trackOffset }}
            transition={{ duration: reduceMotion ? 0.01 : 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {aviationBlogPosts.map((post, i) => (
              <GwBlogFeature
                key={post.to}
                post={post}
                index={i}
                isActive={i === active}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </div>

        <div className="container gw-blog-showcase__footer">
          <div className="gw-blog-showcase__progress" aria-hidden>
            <motion.span
              className="gw-blog-showcase__progress-bar"
              animate={{ scaleX: (active + 1) / total }}
              transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="gw-blog-showcase__thumbs-shell">
            <div className="gw-blog-showcase__thumbs" role="tablist" aria-label="Select article">
              {aviationBlogPosts.map((post, i) => (
                <button
                  key={post.to}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className={`gw-blog-showcase__thumb${i === active ? ' is-active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {i === active ? (
                    <motion.span
                      layoutId="gw-blog-thumb-indicator"
                      className="gw-blog-showcase__thumb-indicator"
                      transition={{ duration: reduceMotion ? 0.01 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                      aria-hidden
                    />
                  ) : null}
                  <span className="gw-blog-showcase__thumb-index" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="gw-blog-showcase__thumb-copy">
                    <span className="gw-blog-showcase__thumb-tag">{post.tag}</span>
                    <span className="gw-blog-showcase__thumb-title">{post.title.trim()}</span>
                  </span>
                  <ArrowUpRight className="gw-blog-showcase__thumb-arrow" aria-hidden size={16} strokeWidth={2} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
