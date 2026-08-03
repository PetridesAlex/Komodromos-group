/**
 * SEO-editable image alt text — limousineImageAlts
 * Edit the strings only. Keys are image URL paths used on the site.
 */

export const limousineImageAlts: Record<string, string> = {
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine1.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 1',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine2.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 2',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine3.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 3',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine4.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 4',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine5.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 5',
  '/images/services/vip-service/limousine-services/Lincoln-30ft/limousine6.webp': 'Lincoln 30ft stretch limousine, Cyprus — photo 6',
  '/images/services/vip-service/limousine-services/chrystler/chrysler1.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 1',
  '/images/services/vip-service/limousine-services/chrystler/chrysler2.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 2',
  '/images/services/vip-service/limousine-services/chrystler/chrysler3.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 4',
  '/images/services/vip-service/limousine-services/chrystler/chrysler4.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 3',
  '/images/services/vip-service/limousine-services/chrystler/chrysler5.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 5',
  '/images/services/vip-service/limousine-services/chrystler/chrysler6.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 6',
  '/images/services/vip-service/limousine-services/chrystler/chrysler7.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 7',
  '/images/services/vip-service/limousine-services/chrystler/chrysler8.webp': 'Chrysler 300 Super Stretch Limousine, Cyprus — photo 8',
}

export function getLimousineImageAlt(src: string, fallback: string): string {
  const direct = limousineImageAlts[src]?.trim()
  if (direct) return direct
  try {
    const decoded = limousineImageAlts[decodeURIComponent(src)]?.trim()
    if (decoded) return decoded
  } catch {
    /* ignore */
  }
  const file = src.split('/').pop() ?? ''
  const byFile = limousineImageAlts[file]?.trim()
  if (byFile) return byFile
  try {
    const decodedFile = decodeURIComponent(file)
    const byDecodedFile = limousineImageAlts[decodedFile]?.trim()
    if (byDecodedFile) return byDecodedFile
  } catch {
    /* ignore */
  }
  return fallback
}
