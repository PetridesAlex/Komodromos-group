/**
 * SEO-editable image alt text — storageGalleryImageAlts
 * Edit the strings only. Keys are image URL paths used on the site.
 */

export const storageGalleryImageAlts: Record<string, string> = {
  '/images/services/storage-services/storage-1-hero.webp': 'Storage2Rent facility photography, Cyprus',
  '/images/services/storage-services/storage-1.png': 'Storage2Rent facility, Cyprus — gallery photo 1',
  '/images/services/storage-services/storage-10.png': 'Storage2Rent facility, Cyprus — gallery photo 10',
  '/images/services/storage-services/storage-11.png': 'Storage2Rent facility, Cyprus — gallery photo 11',
  '/images/services/storage-services/storage-12.png': 'Storage2Rent facility, Cyprus — gallery photo 12',
  '/images/services/storage-services/storage-13.png': 'Storage2Rent facility, Cyprus — gallery photo 13',
  '/images/services/storage-services/storage-14.png': 'Storage2Rent facility, Cyprus — gallery photo 14',
  '/images/services/storage-services/storage-16.png': 'Storage2Rent facility, Cyprus — gallery photo 15',
  '/images/services/storage-services/storage-17.png': 'Storage2Rent facility, Cyprus — gallery photo 16',
  '/images/services/storage-services/storage-18.png': 'Storage2Rent facility, Cyprus — gallery photo 17',
  '/images/services/storage-services/storage-19.png': 'Storage2Rent facility, Cyprus — gallery photo 18',
  '/images/services/storage-services/storage-2-hero.webp': 'Storage2Rent facility photography, Cyprus',
  '/images/services/storage-services/storage-2.png': 'Storage2Rent facility, Cyprus — gallery photo 2',
  '/images/services/storage-services/storage-20.png': 'Storage2Rent facility, Cyprus — gallery photo 19',
  '/images/services/storage-services/storage-21.png': 'Storage2Rent facility, Cyprus — gallery photo 20',
  '/images/services/storage-services/storage-22.png': 'Storage2Rent facility, Cyprus — gallery photo 21',
  '/images/services/storage-services/storage-23.png': 'Storage2Rent facility, Cyprus — gallery photo 22',
  '/images/services/storage-services/storage-24.png': 'Storage2Rent facility, Cyprus — gallery photo 23',
  '/images/services/storage-services/storage-25.png': 'Storage2Rent facility, Cyprus — gallery photo 24',
  '/images/services/storage-services/storage-26.png': 'Storage2Rent facility, Cyprus — gallery photo 25',
  '/images/services/storage-services/storage-27.png': 'Storage2Rent facility, Cyprus — gallery photo 26',
  '/images/services/storage-services/storage-28.png': 'Storage2Rent facility, Cyprus — gallery photo 27',
  '/images/services/storage-services/storage-29.png': 'Storage2Rent facility, Cyprus — gallery photo 28',
  '/images/services/storage-services/storage-3-hero.webp': 'Storage2Rent facility photography, Cyprus',
  '/images/services/storage-services/storage-3.png': 'Storage2Rent facility, Cyprus — gallery photo 3',
  '/images/services/storage-services/storage-30.png': 'Storage2Rent facility, Cyprus — gallery photo 29',
  '/images/services/storage-services/storage-31.png': 'Storage2Rent facility, Cyprus — gallery photo 30',
  '/images/services/storage-services/storage-32.png': 'Storage2Rent facility, Cyprus — gallery photo 31',
  '/images/services/storage-services/storage-33.png': 'Storage2Rent facility, Cyprus — gallery photo 32',
  '/images/services/storage-services/storage-34.png': 'Storage2Rent facility, Cyprus — gallery photo 33',
  '/images/services/storage-services/storage-35.png': 'Storage2Rent facility, Cyprus — gallery photo 34',
  '/images/services/storage-services/storage-36.png': 'Storage2Rent facility, Cyprus — gallery photo 35',
  '/images/services/storage-services/storage-37.png': 'Storage2Rent facility, Cyprus — gallery photo 36',
  '/images/services/storage-services/storage-38.png': 'Storage2Rent facility, Cyprus — gallery photo 37',
  '/images/services/storage-services/storage-39.png': 'Storage2Rent facility, Cyprus — gallery photo 38',
  '/images/services/storage-services/storage-4.png': 'Storage2Rent facility, Cyprus — gallery photo 4',
  '/images/services/storage-services/storage-40.png': 'Storage2Rent facility, Cyprus — gallery photo 39',
  '/images/services/storage-services/storage-41.png': 'Storage2Rent facility, Cyprus — gallery photo 40',
  '/images/services/storage-services/storage-42.png': 'Storage2Rent facility, Cyprus — gallery photo 41',
  '/images/services/storage-services/storage-43.png': 'Storage2Rent facility, Cyprus — gallery photo 42',
  '/images/services/storage-services/storage-44.png': 'Storage2Rent facility, Cyprus — gallery photo 43',
  '/images/services/storage-services/storage-5.png': 'Storage2Rent facility, Cyprus — gallery photo 5',
  '/images/services/storage-services/storage-51.png': 'Storage2Rent facility, Cyprus — gallery photo 44',
  '/images/services/storage-services/storage-52.png': 'Storage2Rent facility, Cyprus — gallery photo 45',
  '/images/services/storage-services/storage-53.png': 'Storage2Rent facility, Cyprus — gallery photo 46',
  '/images/services/storage-services/storage-54.png': 'Storage2Rent facility, Cyprus — gallery photo 47',
  '/images/services/storage-services/storage-55.png': 'Storage2Rent facility, Cyprus — gallery photo 48',
  '/images/services/storage-services/storage-56.png': 'Storage2Rent facility, Cyprus — gallery photo 49',
  '/images/services/storage-services/storage-57.png': 'Storage2Rent facility, Cyprus — gallery photo 50',
  '/images/services/storage-services/storage-6.png': 'Storage2Rent facility, Cyprus — gallery photo 6',
  '/images/services/storage-services/storage-7.png': 'Storage2Rent facility, Cyprus — gallery photo 7',
  '/images/services/storage-services/storage-8.png': 'Storage2Rent facility, Cyprus — gallery photo 8',
  '/images/services/storage-services/storage-9.png': 'Storage2Rent facility, Cyprus — gallery photo 9',
  '/images/services/storage-services/storage50.png': 'Storage2Rent facility, Cyprus — gallery photo 51',
}

export function getStorageGalleryImageAlt(src: string, fallback: string): string {
  const direct = storageGalleryImageAlts[src]?.trim()
  if (direct) return direct
  try {
    const decoded = storageGalleryImageAlts[decodeURIComponent(src)]?.trim()
    if (decoded) return decoded
  } catch {
    /* ignore */
  }
  const file = src.split('/').pop() ?? ''
  const byFile = storageGalleryImageAlts[file]?.trim()
  if (byFile) return byFile
  try {
    const decodedFile = decodeURIComponent(file)
    const byDecodedFile = storageGalleryImageAlts[decodedFile]?.trim()
    if (byDecodedFile) return byDecodedFile
  } catch {
    /* ignore */
  }
  return fallback
}
