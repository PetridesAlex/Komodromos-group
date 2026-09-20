export type GroupContactPhone = {
  id: string
  label: string
  digits: string
  display: string
}

export type GroupContactOffice = {
  id: string
  city: string
  addressLines: ReadonlyArray<string>
  phone: string
  phoneHref: string
}

export const GROUP_CONTACT_EMAIL = 'info@komodromosgroup.com'

export const GROUP_CONTACT_PHONES: ReadonlyArray<GroupContactPhone> = [
  {
    id: 'main',
    label: 'Main office',
    digits: '24333305',
    display: '+357 24 333 305',
  },
  {
    id: 'office-2',
    label: 'Office line',
    digits: '24333306',
    display: '+357 24 333 306',
  },
  {
    id: 'direct',
    label: 'Direct line',
    digits: '24047000',
    display: '+357 24 047 000',
  },
  {
    id: 'mobile',
    label: 'Mobile',
    digits: '96000336',
    display: '+357 96 000 336',
  },
  {
    id: 'mobile-2',
    label: 'Mobile',
    digits: '99243100',
    display: '+357 99 243 100',
  },
]

export const GROUP_CONTACT_OFFICES: ReadonlyArray<GroupContactOffice> = [
  {
    id: 'larnaca',
    city: 'Larnaca',
    addressLines: ['Ioannou Gladstonos 10', 'Larnaca, Larnaka 6023', 'Cyprus'],
    phone: '+357 99 243100',
    phoneHref: 'tel:+35799243100',
  },
  {
    id: 'limassol',
    city: 'Limassol',
    addressLines: ['John F. Kennedy 8', 'Limassol 3106', 'Cyprus'],
    phone: '+357 99 243100',
    phoneHref: 'tel:+35799243100',
  },
]

export const GROUP_BUSINESS_HOURS = {
  primary: 'Mon – Fri · 09:00 – 18:00',
  note: 'Saturday by appointment',
} as const
