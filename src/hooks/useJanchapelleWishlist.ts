import { useCallback, useEffect, useState } from 'react'
import { janchapelleBrandHref, weddingSkyHref } from '../lib/brandPaths'
import {
  JANCHAPELLE_COLLECTIONS,
  JANCHAPELLE_DONT_MISS,
  JANCHAPELLE_FEATURED,
  JANCHAPELLE_HOUSES,
  type JanchapelleDressCard,
} from '../data/janchapellePage'

export type JanchapelleWishlistItem = {
  id: string
  type: 'dress' | 'gallery'
  image: string
  title: string
  subtitle: string
  href: string
}

const STORAGE_KEY = 'jc-wishlist-items'
const LEGACY_KEY = 'jc-wishlist'
const SYNC_EVENT = 'jc-wishlist-updated'

const LOOKBOOK: readonly JanchapelleDressCard[] = [
  ...JANCHAPELLE_FEATURED,
  ...JANCHAPELLE_DONT_MISS,
]

function isWishlistItem(value: unknown): value is JanchapelleWishlistItem {
  if (!value || typeof value !== 'object') return false
  const item = value as Record<string, unknown>
  return (
    typeof item.id === 'string' &&
    typeof item.image === 'string' &&
    typeof item.title === 'string' &&
    typeof item.subtitle === 'string' &&
    typeof item.href === 'string' &&
    (item.type === 'dress' || item.type === 'gallery')
  )
}

export function dressToWishlistItem(dress: JanchapelleDressCard): JanchapelleWishlistItem {
  const collection = JANCHAPELLE_COLLECTIONS.find((entry) => entry.id === dress.id)
  const house = JANCHAPELLE_HOUSES.find((entry) => entry.id === dress.id)

  let href = janchapelleBrandHref('/services/janchapelle#jc-featured')
  if (dress.href) {
    href = weddingSkyHref(dress.href)
  } else if (collection) {
    href = janchapelleBrandHref(`/services/janchapelle/collections/${collection.id}`)
  } else if (house) {
    href = janchapelleBrandHref(`/services/janchapelle/houses/${house.id}`)
  }

  return {
    id: dress.id,
    type: 'dress',
    image: dress.image,
    title: dress.name,
    subtitle: dress.house || collection?.name || house?.name || (dress.href ? 'Wedding Sky' : 'Janchapelle'),
    href,
  }
}

export function makeGalleryWishlistId(parentId: string, src: string) {
  return `gallery:${parentId}:${src}`
}

export function galleryToWishlistItem(params: {
  parentId: string
  parentName: string
  parentKind: 'collection' | 'house'
  src: string
  alt: string
}): JanchapelleWishlistItem {
  const href =
    params.parentKind === 'collection'
      ? janchapelleBrandHref(`/services/janchapelle/collections/${params.parentId}`)
      : janchapelleBrandHref(`/services/janchapelle/houses/${params.parentId}`)

  const title = params.alt.split(' — ')[0]?.trim() || params.parentName

  return {
    id: makeGalleryWishlistId(params.parentId, params.src),
    type: 'gallery',
    image: params.src,
    title,
    subtitle: params.parentName,
    href,
  }
}

function loadFromStorage(): JanchapelleWishlistItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as unknown
      if (Array.isArray(parsed)) {
        return parsed.filter(isWishlistItem)
      }
    }

    const legacyRaw = window.localStorage.getItem(LEGACY_KEY)
    if (legacyRaw) {
      const legacyIds = JSON.parse(legacyRaw) as unknown
      if (Array.isArray(legacyIds)) {
        const migrated = legacyIds
          .filter((id): id is string => typeof id === 'string')
          .map((id) => LOOKBOOK.find((dress) => dress.id === id))
          .filter((dress): dress is JanchapelleDressCard => Boolean(dress))
          .map(dressToWishlistItem)

        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated))
        window.localStorage.removeItem(LEGACY_KEY)
        return migrated
      }
    }
  } catch {
    /* ignore corrupt storage */
  }

  return []
}

function persist(items: JanchapelleWishlistItem[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(SYNC_EVENT))
}

export function useJanchapelleWishlist() {
  const [items, setItems] = useState<JanchapelleWishlistItem[]>(() => loadFromStorage())

  useEffect(() => {
    const sync = () => setItems(loadFromStorage())
    window.addEventListener(SYNC_EVENT, sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(SYNC_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const isSaved = useCallback((id: string) => items.some((item) => item.id === id), [items])

  const toggle = useCallback((item: JanchapelleWishlistItem) => {
    const current = loadFromStorage()
    const next = current.some((entry) => entry.id === item.id)
      ? current.filter((entry) => entry.id !== item.id)
      : [...current, item]
    persist(next)
    setItems(next)
  }, [])

  const remove = useCallback((id: string) => {
    const next = loadFromStorage().filter((entry) => entry.id !== id)
    persist(next)
    setItems(next)
  }, [])

  return {
    items,
    count: items.length,
    isSaved,
    toggle,
    remove,
  }
}
