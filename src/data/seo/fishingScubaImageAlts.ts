/**
 * SEO-editable image alt text — fishingScubaImageAlts
 * Edit the strings only. Keys are image URL paths used on the site.
 */

export const fishingScubaImageAlts: Record<string, string> = {
  '/images/services/vip-service/fishing-scuba-diving.webp': 'Fishing and scuba diving VIP experiences hero, Cyprus',
  '/images/services/vip-service/water-activities': 'VIP water experience, Cyprus — photo 2',
  '/images/services/vip-service/water-activities/fishing': 'VIP water experience, Cyprus — photo 3',
  '/images/services/vip-service/water-activities/fishing/fishing-1.png': 'VIP water experience, Cyprus — photo 4',
  '/images/services/vip-service/water-activities/fishing/fishing-10.png': 'VIP water experience, Cyprus — photo 5',
  '/images/services/vip-service/water-activities/fishing/fishing-11.png': 'VIP water experience, Cyprus — photo 6',
  '/images/services/vip-service/water-activities/fishing/fishing-12.png': 'VIP water experience, Cyprus — photo 7',
  '/images/services/vip-service/water-activities/fishing/fishing-14.png': 'VIP water experience, Cyprus — photo 8',
  '/images/services/vip-service/water-activities/fishing/fishing-15.webp': 'VIP water experience, Cyprus — photo 9',
  '/images/services/vip-service/water-activities/fishing/fishing-16.jpg': 'VIP water experience, Cyprus — photo 10',
  '/images/services/vip-service/water-activities/fishing/fishing-17.jpg': 'VIP water experience, Cyprus — photo 11',
  '/images/services/vip-service/water-activities/fishing/fishing-18.jpg': 'VIP water experience, Cyprus — photo 12',
  '/images/services/vip-service/water-activities/fishing/fishing-19.webp': 'VIP water experience, Cyprus — photo 13',
  '/images/services/vip-service/water-activities/fishing/fishing-2.png': 'VIP water experience, Cyprus — photo 14',
  '/images/services/vip-service/water-activities/fishing/fishing-20.jpg': 'VIP water experience, Cyprus — photo 15',
  '/images/services/vip-service/water-activities/fishing/fishing-21.jpg': 'VIP water experience, Cyprus — photo 16',
  '/images/services/vip-service/water-activities/fishing/fishing-22.jpg': 'VIP water experience, Cyprus — photo 17',
  '/images/services/vip-service/water-activities/fishing/fishing-23.jpg': 'VIP water experience, Cyprus — photo 18',
  '/images/services/vip-service/water-activities/fishing/fishing-24.webp': 'Fishing, Cyprus — photo 1',
  '/images/services/vip-service/water-activities/fishing/fishing-25.jpg': 'VIP water experience, Cyprus — photo 19',
  '/images/services/vip-service/water-activities/fishing/fishing-26.jpeg': 'VIP water experience, Cyprus — photo 20',
  '/images/services/vip-service/water-activities/fishing/fishing-27.jpg': 'VIP water experience, Cyprus — photo 21',
  '/images/services/vip-service/water-activities/fishing/fishing-28.jpg': 'VIP water experience, Cyprus — photo 22',
  '/images/services/vip-service/water-activities/fishing/fishing-3.png': 'VIP water experience, Cyprus — photo 23',
  '/images/services/vip-service/water-activities/fishing/fishing-4.png': 'VIP water experience, Cyprus — photo 24',
  '/images/services/vip-service/water-activities/fishing/fishing-5.png': 'VIP water experience, Cyprus — photo 25',
  '/images/services/vip-service/water-activities/fishing/fishing-6.png': 'VIP water experience, Cyprus — photo 26',
  '/images/services/vip-service/water-activities/fishing/fishing-7.png': 'VIP water experience, Cyprus — photo 27',
  '/images/services/vip-service/water-activities/fishing/fishing-8.png': 'VIP water experience, Cyprus — photo 28',
  '/images/services/vip-service/water-activities/fishing/fishing-9.png': 'VIP water experience, Cyprus — photo 29',
  '/images/services/vip-service/water-activities/fishing/fishing-cover.png': 'VIP water experience, Cyprus — photo 30',
  '/images/services/vip-service/water-activities/scuba-diving': 'VIP water experience, Cyprus — photo 31',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-1.png': 'VIP water experience, Cyprus — photo 32',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-10.png': 'VIP water experience, Cyprus — photo 33',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-2.png': 'VIP water experience, Cyprus — photo 34',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-3.png': 'VIP water experience, Cyprus — photo 35',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-4.png': 'VIP water experience, Cyprus — photo 36',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-5.png': 'VIP water experience, Cyprus — photo 37',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-6.png': 'VIP water experience, Cyprus — photo 38',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-7.png': 'VIP water experience, Cyprus — photo 39',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-8.png': 'VIP water experience, Cyprus — photo 40',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-9.png': 'Scuba Diving, Cyprus — photo 1',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-eight.webp': 'VIP water experience, Cyprus — photo 41',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-fitfth.webp': 'VIP water experience, Cyprus — photo 42',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-forth.webp': 'VIP water experience, Cyprus — photo 43',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-one.webp': 'VIP water experience, Cyprus — photo 44',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-seven.webp': 'VIP water experience, Cyprus — photo 45',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-six.webp': 'VIP water experience, Cyprus — photo 46',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-three.webp': 'VIP water experience, Cyprus — photo 47',
  '/images/services/vip-service/water-activities/scuba-diving/scuba-diving-two.webp': 'VIP water experience, Cyprus — photo 48',
}

export function getFishingScubaImageAlt(src: string, fallback: string): string {
  const direct = fishingScubaImageAlts[src]?.trim()
  if (direct) return direct
  try {
    const decoded = fishingScubaImageAlts[decodeURIComponent(src)]?.trim()
    if (decoded) return decoded
  } catch {
    /* ignore */
  }
  const file = src.split('/').pop() ?? ''
  const byFile = fishingScubaImageAlts[file]?.trim()
  if (byFile) return byFile
  try {
    const decodedFile = decodeURIComponent(file)
    const byDecodedFile = fishingScubaImageAlts[decodedFile]?.trim()
    if (byDecodedFile) return byDecodedFile
  } catch {
    /* ignore */
  }
  return fallback
}
