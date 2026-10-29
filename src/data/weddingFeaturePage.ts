import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingFeatureImage = {
  src: string
  width: number
  height: number
}

export type WeddingFeatureGalleryItem = WeddingFeatureImage & {
  id: string
  caption: LocalizedText
}

export type WeddingFeaturePillar = {
  id: string
  title: LocalizedText
  body: LocalizedText
}

/** Content for a premium single-service Wedding Sky page (hero, story, details, gallery, closing). */
export type WeddingFeaturePageContent = {
  /** Used for the DOM id prefix and class hooks. */
  key: string
  hero: WeddingFeatureImage & {
    /** CSS object-position for the hero photo. */
    position?: string
    monochrome?: boolean
  }
  story: {
    image: WeddingFeatureImage
    imageAlt: LocalizedText
  }
  /** Optional full-bleed backdrop behind the pull-quote. */
  quoteBackdrop?: WeddingFeatureImage

  eyebrow: LocalizedText
  pageTitle: LocalizedText
  lead: LocalizedText
  intro: ReadonlyArray<LocalizedText>

  storyEyebrow: LocalizedText
  storyTitle: LocalizedText
  storyParagraphs: ReadonlyArray<LocalizedText>

  pillarsEyebrow: LocalizedText
  pillarsTitle: LocalizedText
  pillars: ReadonlyArray<WeddingFeaturePillar>

  galleryEyebrow: LocalizedText
  galleryTitle: LocalizedText
  galleryIntro: LocalizedText
  gallery: ReadonlyArray<WeddingFeatureGalleryItem>

  quote: LocalizedText

  closingEyebrow: LocalizedText
  closingLead: LocalizedText
  closingBody: LocalizedText
  brandTagline: LocalizedText
}

/** UI strings shared by every feature page. */
export const weddingFeatureLabels = {
  backToWedding: {
    en: 'Back to Wedding Sky',
    el: 'Πίσω στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  } satisfies LocalizedText,
  openImage: {
    en: 'Open image',
    el: 'Άνοιγμα εικόνας',
    ru: 'Открыть изображение',
  } satisfies LocalizedText,
  close: { en: 'Close', el: 'Κλείσιμο', ru: 'Закрыть' } satisfies LocalizedText,
  prev: {
    en: 'Previous image',
    el: 'Προηγούμενη εικόνα',
    ru: 'Предыдущее изображение',
  } satisfies LocalizedText,
  next: {
    en: 'Next image',
    el: 'Επόμενη εικόνα',
    ru: 'Следующее изображение',
  } satisfies LocalizedText,
  brandName: { en: 'WEDDING SKY', el: 'WEDDING SKY', ru: 'WEDDING SKY' } satisfies LocalizedText,
  bookCta: {
    en: 'Book a consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
} as const

/**
 * Split gallery items into `columns` columns of near-equal rendered height.
 * Greedy placement followed by move/swap refinement; items stay in source order within a column.
 */
export function balanceGalleryColumns<T extends WeddingFeatureImage>(
  items: ReadonlyArray<T>,
  columns: number,
  gapRatio = 0.04,
): T[][] {
  const heights = items.map((item) => item.height / item.width)
  const assign = new Array<number>(items.length).fill(0)
  const colHeights = new Array<number>(columns).fill(0)
  const colCounts = new Array<number>(columns).fill(0)

  items.forEach((_, i) => {
    let target = 0
    for (let c = 1; c < columns; c += 1) {
      if (colHeights[c] < colHeights[target]) target = c
    }
    assign[i] = target
    colHeights[target] += heights[i]
    colCounts[target] += 1
  })

  const columnHeight = (c: number, hs: number[], counts: number[]) =>
    hs[c] + gapRatio * Math.max(0, counts[c] - 1)
  const spread = (hs: number[], counts: number[]) => {
    const all = hs.map((_, c) => columnHeight(c, hs, counts))
    return Math.max(...all) - Math.min(...all)
  }

  let current = spread(colHeights, colCounts)
  for (let pass = 0; pass < 60; pass += 1) {
    let improved = false

    for (let i = 0; i < items.length; i += 1) {
      const from = assign[i]
      for (let to = 0; to < columns; to += 1) {
        if (to === from || colCounts[from] <= 1) continue
        const hs = [...colHeights]
        const counts = [...colCounts]
        hs[from] -= heights[i]
        hs[to] += heights[i]
        counts[from] -= 1
        counts[to] += 1
        const next = spread(hs, counts)
        if (next + 1e-9 < current) {
          assign[i] = to
          colHeights[from] = hs[from]
          colHeights[to] = hs[to]
          colCounts[from] = counts[from]
          colCounts[to] = counts[to]
          current = next
          improved = true
          break
        }
      }
    }

    for (let i = 0; i < items.length; i += 1) {
      for (let j = i + 1; j < items.length; j += 1) {
        if (assign[i] === assign[j]) continue
        const a = assign[i]
        const b = assign[j]
        const hs = [...colHeights]
        hs[a] += heights[j] - heights[i]
        hs[b] += heights[i] - heights[j]
        const next = spread(hs, colCounts)
        if (next + 1e-9 < current) {
          assign[i] = b
          assign[j] = a
          colHeights[a] = hs[a]
          colHeights[b] = hs[b]
          current = next
          improved = true
        }
      }
    }

    if (!improved) break
  }

  const result: T[][] = Array.from({ length: columns }, () => [])
  items.forEach((item, i) => result[assign[i]].push(item))
  return result
}
