export const pilotsIntro = {
  eyebrow: 'Company Introduction',
  title: 'Who We Are',
  paragraphs: [
    'Global Wings Ltd is an international aviation recruitment and aviation solutions company connecting airlines with highly qualified aviation professionals across Europe, the Middle East, Asia, and beyond.',
    'Founded by experienced aviation professionals, we understand the industry\'s demands and provide reliable recruitment, consulting, and aviation support services tailored to both airlines and candidates.',
    'Our mission is to create long-term partnerships built on professionalism, trust, and exceptional service.',
  ],
}

export type PilotsMissionCard = {
  id: string
  title: string
  text: string
  values?: string[]
}

export const pilotsMissionCards: PilotsMissionCard[] = [
  {
    id: 'mission',
    title: 'Mission',
    text: 'To provide world-class aviation recruitment and staffing solutions that help airlines grow while supporting aviation professionals in achieving successful international careers.',
  },
  {
    id: 'vision',
    title: 'Vision',
    text: 'To become one of Europe\'s most trusted aviation recruitment companies by connecting exceptional talent with leading airlines worldwide.',
  },
  {
    id: 'values',
    title: 'Values',
    text: '',
    values: ['Professionalism', 'Integrity', 'Reliability', 'Global Partnerships', 'Excellence'],
  },
]

export type PilotsWhyCard = {
  title: string
  text: string
}

export const pilotsWhyCards: PilotsWhyCard[] = [
  {
    title: 'Global Airline Network',
    text: 'Strong relationships with airlines across Europe, Asia, the Middle East and Africa.',
  },
  {
    title: 'Experienced Team',
    text: 'Industry experts with years of aviation recruitment experience.',
  },
  {
    title: 'Fast Recruitment',
    text: 'Efficient hiring process that reduces recruitment time.',
  },
  {
    title: 'Worldwide Opportunities',
    text: 'Jobs available with international airlines across multiple continents.',
  },
  {
    title: 'Personal Support',
    text: 'Dedicated consultants assisting candidates throughout every stage.',
  },
  {
    title: 'Long-Term Partnerships',
    text: 'Building sustainable relationships with airlines and aviation professionals.',
  },
]

export type PilotsStat = {
  value: number
  suffix: string
  label: string
}

export const pilotsStats: PilotsStat[] = [
  { value: 25, suffix: '+', label: 'Partner Airlines' },
  { value: 2500, suffix: '+', label: 'Successful Placements' },
  { value: 35, suffix: '+', label: 'Countries Served' },
  { value: 15, suffix: '+', label: 'Years Combined Experience' },
]

export const pilotsClosing = {
  title: 'Building Aviation Careers Worldwide',
  paragraphs: [
    'At Global Wings, we believe every successful flight begins with exceptional people.',
    'Our dedicated team works closely with airlines and aviation professionals to deliver recruitment solutions that create lasting value for everyone involved.',
    'Whether you are an airline searching for qualified crew or a professional looking for your next career opportunity, Global Wings is your trusted aviation partner.',
  ],
}
