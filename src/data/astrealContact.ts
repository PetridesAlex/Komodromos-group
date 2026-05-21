/** Astreal / Komodromos Group contact — shared by project detail connect panel */
export type AstrealContactPhone = {
  label: string
  display: string
  tel: string
  /** Digits only for wa.me (e.g. 35724333305) */
  whatsapp: string
  /** E.164 for Viber (e.g. +35724333305) */
  viber: string
}

export const ASTREAL_CONTACT_EMAIL = 'info@komodromosgroup.com'

export const ASTREAL_CONTACT_PHONES: AstrealContactPhone[] = [
  {
    label: 'Office',
    display: '+357 24 333 305',
    tel: '+357243333305',
    whatsapp: '357243333305',
    viber: '+357243333305',
  },
  {
    label: 'Direct line',
    display: '+357 7000 3008',
    tel: '+35770003008',
    whatsapp: '35770003008',
    viber: '+35770003008',
  },
]

export function getAstrealInquiryMessage(projectTitle: string): string {
  return `Hello, I'm interested in ${projectTitle} by Astreal Developers (Komodromos Group). I would like to request details or book a private viewing.`
}

export function getAstrealWhatsAppUrl(projectTitle: string, phoneIndex = 0): string {
  const phone = ASTREAL_CONTACT_PHONES[phoneIndex] ?? ASTREAL_CONTACT_PHONES[0]
  return `https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(getAstrealInquiryMessage(projectTitle))}`
}

export function getAstrealViberUrl(phoneIndex = 0): string {
  const phone = ASTREAL_CONTACT_PHONES[phoneIndex] ?? ASTREAL_CONTACT_PHONES[0]
  return `viber://chat?number=${encodeURIComponent(phone.viber)}`
}
