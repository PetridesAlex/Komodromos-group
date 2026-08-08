/** Auto-mapped WebP galleries under public/images/.../vip-limousine-location/{id}/ */

import { vipTourImageAlts } from './seo/vipTourImageAlts'

const BASE = '/images/services/vip-service/vip-limousine-location'

export type VipTourGalleryImage = {
  src: string
  file: string
  alt: string
}

function galleryFiles(count: number): string[] {
  return Array.from({ length: count }, (_, i) => String(i + 1).padStart(2, '0') + '.webp')
}

const COUNTS: Record<string, number> = {
  'aggeloxtisti-kiti': 11,
  'aphrodites-rock': 5,
  'apollo-hylates': 7,
  'avakas-gorge': 6,
  'ayia-napa-nightlife': 15,
  'baths-of-adonis': 7,
  'baths-of-aphrodite': 7,
  'camel-park-mazotos': 14,
  'cape-greco': 11,
  'carob-mill-museum': 14,
  'edro-iii-shipwreck': 13,
  'kamares-larnaca': 10,
  'kolossi-castle': 18,
  'larnaca-salt-lake': 12,
  'lefkara-cyprus': 13,
  'limassol-marina': 14,
  'limassol-medieval-castle': 8,
  'medieval-castle-paphos': 8,
  'nissi-beach': 10,
  'saint-lazaros': 10,
  'tombs-of-the-kings': 10,
}

/**
 * Destinations that share another folder's assets until a dedicated set is added.
 * Limassol Medieval Castle Area currently uses the medieval-castle-paphos set.
 */
const GALLERY_SOURCE: Record<string, string> = {
  'limassol-medieval-castle': 'medieval-castle-paphos',
}

function fallbackAlt(destinationId: string, file: string, index: number): string {
  const label = destinationId
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
  return `${label}, Cyprus — photo ${index + 1} (${file})`
}

export function getVipTourLocationGalleryItems(destinationId: string): VipTourGalleryImage[] {
  const sourceId = GALLERY_SOURCE[destinationId] ?? destinationId
  const count = COUNTS[destinationId] ?? COUNTS[sourceId]
  if (!count) return []

  const files = galleryFiles(count)
  const altMap = vipTourImageAlts[destinationId] ?? vipTourImageAlts[sourceId] ?? {}

  return files.map((file, index) => ({
    src: `${BASE}/${sourceId}/${file}`,
    file,
    alt: altMap[file]?.trim() || fallbackAlt(destinationId, file, index),
  }))
}

/** @deprecated Prefer getVipTourLocationGalleryItems for alt-aware galleries */
export function getVipTourLocationGallery(destinationId: string): string[] {
  return getVipTourLocationGalleryItems(destinationId).map((item) => item.src)
}

export function getVipTourLocationCover(destinationId: string): string | undefined {
  return getVipTourLocationGalleryItems(destinationId)[0]?.src
}

export function getVipTourLocationCoverAlt(destinationId: string): string | undefined {
  return getVipTourLocationGalleryItems(destinationId)[0]?.alt
}
