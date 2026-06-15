export type StoragePageContact = {
  id: string
  label: string
  display: string
  tel: string
  whatsapp: string
}

/** Storage2Rent direct lines — shown on `/services/storage` only */
export const STORAGE_PAGE_CONTACTS: ReadonlyArray<StoragePageContact> = [
  {
    id: 'office',
    label: 'Office line',
    display: '24 333 305',
    tel: '+35724333305',
    whatsapp: '35724333305',
  },
  {
    id: 'mobile',
    label: 'Mobile line',
    display: '96 000 336',
    tel: '+35796000336',
    whatsapp: '35796000336',
  },
]

export function getStorageWhatsAppUrl(whatsappDigits: string): string {
  const text = encodeURIComponent('Hello Storage2Rent, I would like to enquire about storage.')
  return `https://wa.me/${whatsappDigits}?text=${text}`
}
