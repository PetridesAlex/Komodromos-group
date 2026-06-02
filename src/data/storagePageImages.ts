/** Storage2Rent page — facility photography (public/images/services/storage-services) */

export const STORAGE_IMG = '/images/services/storage-services' as const

export function storageImage(file: string) {
  return `${STORAGE_IMG}/${file}`
}

/** Full set of new facility photos (ordered for gallery) */
export const STORAGE_GALLERY_FILES = [
  'storage-1.png',
  'storage-2.png',
  'storage-3.png',
  'storage-4.png',
  'storage-5.png',
  'storage-6.png',
  'storage-7.png',
  'storage-8.png',
  'storage-9.png',
  'storage-10.png',
  'storage-11.png',
  'storage-12.png',
  'storage-13.png',
  'storage-14.png',
  'storage-16.png',
  'storage-17.png',
  'storage-18.png',
  'storage-19.png',
  'storage-20.png',
  'storage-21.png',
  'storage-22.png',
  'storage-23.png',
  'storage-24.png',
  'storage-25.png',
  'storage-26.png',
  'storage-27.png',
  'storage-28.png',
  'storage-29.png',
  'storage-30.png',
  'storage-31.png',
  'storage-32.png',
  'storage-33.png',
  'storage-34.png',
  'storage-35.png',
  'storage-36.png',
  'storage-37.png',
  'storage-38.png',
  'storage-39.png',
  'storage-40.png',
  'storage-41.png',
  'storage-42.png',
  'storage-43.png',
  'storage-44.png',
  'storage-51.png',
  'storage-52.png',
  'storage-53.png',
  'storage-54.png',
  'storage-55.png',
  'storage-56.png',
  'storage-57.png',
  'storage50.png',
] as const

/** Featured elsewhere on the page — excluded from parallax strip to avoid repeats */
const FEATURED_FILES = new Set<string>([
  'storage-55.png',
  'storage-44.png',
  'storage50.png',
  'storage-42.png',
  'storage-22.png',
  'storage-30.png',
  'storage-53.png',
  'storage-57.png',
  'storage-28.png',
  'storage-13.png',
])

const PARALLAX_FEATURE_TITLES = [
  'FLEXIBLE STORAGE',
  'YOUR OWN SPACE',
  'LOCAL & EASY TO FIND',
  'PERSONAL, FRIENDLY & PROFESSIONAL',
  '24 HR ACCESS',
  'BUSINESS STORAGE',
  'SECURE CONTAINERS',
  'MODERN STORAGE UNITS',
  'CONTAINER YARD',
  'SITE ACCESS',
  'PROFESSIONAL FACILITY',
  'KOMODROMOS STORAGE',
] as const

function parallaxTitle(index: number): string {
  if (index < PARALLAX_FEATURE_TITLES.length) {
    return PARALLAX_FEATURE_TITLES[index]!
  }
  return 'PREMIUM STORAGE'
}

export const STORAGE_HERO_FAN = [
  {
    rotate: -12,
    translateY: 40,
    src: storageImage('storage-55.png'),
    alt: 'Storage2Rent units at sunset — secure outdoor facility',
  },
  {
    rotate: 0,
    translateY: 0,
    src: storageImage('storage-44.png'),
    alt: 'Colour-coded container storage row at Komodromos facility',
  },
  {
    rotate: 12,
    translateY: 40,
    src: storageImage('storage50.png'),
    alt: 'Modern white storage units with container yard',
  },
] as const

export const STORAGE_OFFER_IMAGES = {
  personal: storageImage('storage-42.png'),
  business: storageImage('storage-22.png'),
  pallet: storageImage('storage-30.png'),
} as const

export const STORAGE_EXTRA_SERVICE_IMAGES = [
  { title: 'Removal Storage', image: storageImage('storage-53.png') },
  { title: 'Man with Van for Hire', image: storageImage('storage-57.png') },
  { title: 'Pallet Storage', image: storageImage('storage-28.png') },
  { title: 'Documents Storage', image: storageImage('storage-13.png') },
] as const

export const STORAGE_PARALLAX_SLIDES = STORAGE_GALLERY_FILES.filter(
  (file) => !FEATURED_FILES.has(file),
).map((file, index) => ({
  title: parallaxTitle(index),
  image: storageImage(file),
}))

/** Hero / offers / services — uniform gallery below monthly rates */
export const STORAGE_SPOTLIGHT_GALLERY = [
  { file: 'storage-55.png', caption: 'Secure units at golden hour' },
  { file: 'storage-44.png', caption: 'Colour-coded container rows' },
  { file: 'storage50.png', caption: 'Modern units & container yard' },
  { file: 'storage-42.png', caption: 'Personal storage corridors' },
  { file: 'storage-22.png', caption: 'Business & logistics capacity' },
  { file: 'storage-30.png', caption: 'Pallet-ready industrial space' },
  { file: 'storage-53.png', caption: 'Easy drive-up access' },
  { file: 'storage-57.png', caption: 'On-site office & operations' },
  { file: 'storage-28.png', caption: 'Flexible container storage' },
  { file: 'storage-13.png', caption: 'Safety-first facility standards' },
].map((item) => ({
  ...item,
  src: storageImage(item.file),
  alt: `Storage2Rent — ${item.caption}`,
}))
