import { useEffect, useRef, useState, type ImgHTMLAttributes } from 'react'

type WeddingLazyImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'onLoad' | 'loading' | 'decoding'
> & {
  src: string
  alt: string
  /** Hero / LCP images should load eagerly; everything else stays lazy. */
  priority?: boolean
}

/**
 * Smooth fade + un-blur once the image has painted.
 * Uses native lazy loading for below-the-fold media.
 */
export default function WeddingLazyImage({
  src,
  alt,
  className,
  priority = false,
  ...rest
}: WeddingLazyImageProps) {
  const ref = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    const img = ref.current
    if (img?.complete && img.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [src])

  return (
    <img
      {...rest}
      ref={ref}
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={[
        className,
        'wedding-lazy-img',
        loaded ? 'wedding-lazy-img--loaded' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onLoad={() => setLoaded(true)}
    />
  )
}
