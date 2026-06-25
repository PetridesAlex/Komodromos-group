export const contactHero = {
  title: 'Contact Us',
  subtitle: "Let's take your aviation journey to new heights.",
  lead:
    "Whether you're an airline looking for recruitment solutions, a pilot seeking your next career opportunity, or an aviation professional interested in our services, our team is ready to help.",
}

export const contactWelcome = {
  title: "Let's Connect",
  paragraphs: [
    'At Global Wings Ltd, we believe every successful partnership begins with a conversation.',
    'Our experienced aviation consultants are available to answer your questions, discuss recruitment requirements, provide career guidance, or assist with our aviation training programmes.',
    "Whether you're an employer or a candidate, we're here to support your aviation journey.",
  ],
}

export type ContactPhoneEntry = {
  label: string
  display: string
  href: string
}

export type ContactOffice = {
  id: string
  name: string
  address: string[]
  telephones: ContactPhoneEntry[]
  mobiles: ContactPhoneEntry[]
  email: string
}

export const contactOffices: ContactOffice[] = [
  {
    id: 'limassol',
    name: 'Headquarters – Limassol',
    address: [
      'John Kennedy Street',
      'Iris House, 4th Floor, Office 440A',
      'Neapolis, 3106',
      'Limassol, Cyprus',
    ],
    telephones: [{ label: 'Telephone', display: '+357 7000 2009', href: 'tel:+35770002009' }],
    mobiles: [
      { label: 'Mobile', display: '+357 99 047978', href: 'tel:+35799047978' },
      { label: 'Mobile', display: '+357 96 000380', href: 'tel:+35796000380' },
      { label: 'Mobile', display: '+357 96 000236', href: 'tel:+35796000236' },
    ],
    email: 'info@global-wings.co',
  },
  {
    id: 'larnaca',
    name: 'Larnaca Office',
    address: ['9 Ioannou Gladstonos Street', '6023 Larnaca', 'Cyprus'],
    telephones: [{ label: 'Telephone', display: '+357 7000 3008', href: 'tel:+35770003008' }],
    mobiles: [
      { label: 'Mobile', display: '+357 99 576174', href: 'tel:+35799576174' },
      { label: 'Mobile', display: '+44 7880 992004', href: 'tel:+447880992004' },
    ],
    email: 'info@global-wings.co',
  },
]

export const contactForm = {
  title: 'Send Us a Message',
  intro:
    'Complete the form below and a member of our aviation team will respond as soon as possible.',
  successTitle: 'Message Sent',
  successMessage:
    'Thank you for contacting Global Wings Ltd. Our team will be in touch shortly.',
  defaultService: 'Aviation Agency Services',
}
