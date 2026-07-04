export const cadetProgrammesSection = {
  eyebrow: 'Career Pathways',
  title: 'Programmes We Offer',
  intro: 'Structured airline career pathways — from cadet employment through First Officer upgrade programmes.',
}

export const cadetWhySection = {
  eyebrow: 'Programme Benefits',
  title: 'Why Choose GlobalCadet?',
  intro: 'Global airline opportunities, sponsored development, and world-class training — built for long-term careers.',
}

export const cadetFaqSection = {
  eyebrow: 'Support',
  title: 'Frequently Asked Questions',
  intro: 'Answers to the most common questions about eligibility, training, and joining the GlobalCadet Programme.',
}

export const cadetHero = {
  eyebrow: 'GLOBALCADET Programme',
  title: 'Launch Your Aviation Career',
  tagline: 'From Cadet Pilot to First Officer—and beyond.',
  paragraphs: [
    'Global Wings Ltd offers internationally recognised airline career programmes designed to help aspiring and experienced pilots build successful careers with leading airlines worldwide.',
    "Whether you're a newly qualified cadet or an experienced First Officer looking to upgrade to Captain or transition to a wide-body aircraft, our programmes provide the training, experience, and career opportunities to help you reach your goals.",
  ],
  primaryCta: 'Apply Now',
  secondaryCta: 'Speak with an Aviation Advisor',
}

export type CadetProgramme = {
  id: string
  title: string
  description: string
  salaryLabel: string
  salary: string
}

export const cadetProgrammes: CadetProgramme[] = [
  {
    id: 'cadet-employment',
    title: 'Cadet Employment Programme',
    description:
      'Designed for graduate pilots with approximately 200 flight hours. Begin your airline career through structured training, line experience, and direct employment opportunities with partner airlines.',
    salaryLabel: 'Salary Potential',
    salary: 'Up to €65,000 per year',
  },
  {
    id: 'captain-upgrade',
    title: 'Direct Entry Captain Upgrade Programme',
    description:
      'For experienced First Officers with a minimum of 3,000 hours on Airbus A320. Upgrade directly to Captain through our structured command programme.',
    salaryLabel: 'Salary Potential',
    salary: 'Up to €115,000 per year',
  },
  {
    id: 'a330-transition',
    title: 'Airbus A330 Transition Programme',
    description:
      'For experienced A320 First Officers wishing to transition to wide-body operations. Continue your airline career on the Airbus A330 with international airline partners.',
    salaryLabel: 'Salary Potential',
    salary: 'Up to €115,000 per year',
  },
]

export const cadetWhyChoose = [
  'Worldwide Airline Opportunities',
  'Indefinite Employment Contracts',
  'Airline Sponsored Career Development',
  'World-Class Airline Training',
  'High Quality Accommodation',
  'Travel Tickets Provided',
  'Competitive Rosters',
  'Career Progression',
  'International Airline Network',
]

export const cadetPartnerBenefits = [
  'Indefinite employment contracts',
  'Stable year-round operations',
  'World-class airline training',
  'Premium accommodation',
  'Career development opportunities',
  'Security, safety and quality career pathways',
  'Airline travel provided',
  'Competitive roster patterns',
  'Excellent salary packages',
]

export type CadetTimelineStep = {
  step: string
  title: string
  intro?: string
  groups?: { label: string; items: string[] }[]
  items?: string[]
  note?: string
  duration?: string
}

export const cadetTimeline: CadetTimelineStep[] = [
  {
    step: '01',
    title: 'Type Rating Qualification',
    intro: 'Become qualified on either:',
    groups: [
      {
        label: 'Aircraft Types',
        items: ['Airbus A320 Family', 'Boeing 737 Family'],
      },
      {
        label: 'Training Includes',
        items: [
          'Computer Based Training (CBT)',
          'Flight Deck Mock-Up Training',
          'Classroom Instruction',
          'Aircraft Systems',
          'Performance Calculations',
          'Weight & Balance',
          'Operational Procedures',
          'UPRT',
          'PBN Theory',
        ],
      },
    ],
    duration: 'Approximately 5 weeks',
  },
  {
    step: '02',
    title: 'Procedure Trainer',
    groups: [
      {
        label: 'Training Includes',
        items: [
          'Airbus Procedure Trainer',
          'Fixed Base Simulator',
          '10 Instructor-led Sessions',
          'Airline Standard Operating Procedures',
        ],
      },
    ],
  },
  {
    step: '03',
    title: 'Full Flight Simulator',
    items: [
      '9 Full Flight Simulator Sessions',
      'LOFT Training',
      'Skill Test',
      'Pilot Flying & Pilot Monitoring Duties',
    ],
  },
  {
    step: '04',
    title: 'Base Training',
    note: 'Complete practical aircraft landings and take-offs under instructor supervision. Requirements vary depending on previous multi-pilot aircraft experience.',
  },
  {
    step: '05',
    title: 'Airline Line Training',
    intro: 'Build up to 500 flight hours while flying normal commercial airline operations.',
    duration: 'Expected programme duration: 8–10 months',
    note: 'Successful graduates continue directly into airline employment.',
  },
]

export type CadetPricingCard = {
  title: string
  price: string
  priceLabel?: string
  note?: string
}

export const cadetTypeRatings: CadetPricingCard[] = [
  { title: 'Airbus A320 Type Rating', price: 'Upon Request' },
  { title: 'Boeing 737NG Type Rating', price: 'Upon Request' },
]

export const cadetBaseTraining = {
  title: 'Base Training',
  priceLabel: 'Starting from',
  price: '€9,500',
}

export type CadetRequirementGroup = {
  title: string
  items: string[]
}

export const cadetRequirements: CadetRequirementGroup[] = [
  {
    title: 'Licence',
    items: ['Valid CPL', 'Frozen ATPL or ATPL'],
  },
  {
    title: 'Ratings',
    items: ['Multi Engine Rating (ME)', 'Instrument Rating (IR)', 'MCC', 'Advanced UPRT'],
  },
  {
    title: 'Medical',
    items: ['Valid Class 1 Medical'],
  },
  {
    title: 'English',
    items: ['ICAO Level 4 or Higher'],
  },
  {
    title: 'Flight Experience',
    items: ['Minimum 70 Hours Pilot in Command (PIC)'],
  },
  {
    title: 'Direct Entry Line Training',
    items: [
      'Valid A320 or B737 Type Rating',
      'Completed Base Training',
      'Global Wings Online Assessment',
    ],
  },
]

export const cadetAssessment = {
  title: 'Global Wings Online Assessment',
  paragraphs: [
    'Before joining the programme, candidates complete the mandatory Global Wings online assessment.',
  ],
  passScore: '75%',
  passLabel: 'Minimum passing score',
  outro: 'Successful candidates continue to the next recruitment stage.',
}

export const cadetWhyPilots = [
  {
    title: 'More Than 650 Successful Cadets',
    text: 'Our graduates now fly with airlines around the world as First Officers, Captains, Training Pilots, and wide-body flight crew.',
  },
  {
    title: 'Experienced Aviation Advisors',
    text: 'Many of our advisors are active airline pilots with thousands of hours of commercial flying experience. They understand exactly what airlines expect and provide practical guidance throughout your career journey.',
  },
  {
    title: 'Global Airline Network',
    text: 'Our recruitment partnerships span Europe, the Middle East, Asia, Africa, and beyond.',
  },
  {
    title: 'Career Support',
    text: "We don't simply provide training—we help you secure long-term airline employment.",
  },
]

export type CadetStat = {
  value: string
  numeric?: number
  suffix?: string
  label: string
}

export const cadetStats: CadetStat[] = [
  { value: '650+', numeric: 650, suffix: '+', label: 'Pilots Successfully Placed' },
  { value: '15+', numeric: 15, suffix: '+', label: 'Years of Aviation Recruitment' },
  { value: 'Worldwide', label: 'Airline Partnerships' },
  { value: '90+', numeric: 90, suffix: '+', label: 'Years Combined Aviation Experience' },
]

export type CadetFaq = {
  question: string
  answer: string
}

export const cadetFaqs: CadetFaq[] = [
  {
    question: 'Who can apply?',
    answer:
      'The GlobalCadet Programme welcomes newly qualified cadet pilots, graduate pilots with approximately 200 flight hours, and experienced First Officers seeking command upgrade or wide-body transition pathways. Candidates must meet licence, rating, medical, and experience requirements for their chosen programme.',
  },
  {
    question: 'Which licences are accepted?',
    answer:
      'Applicants must hold a valid CPL with a frozen ATPL or full ATPL, together with Multi Engine, Instrument Rating, MCC, and Advanced UPRT qualifications, plus a valid Class 1 medical certificate.',
  },
  {
    question: 'How long does the programme take?',
    answer:
      'Type rating qualification takes approximately five weeks, followed by procedure trainer, simulator, base training, and airline line training. The full line training phase typically runs for 8–10 months while building up to 500 flight hours.',
  },
  {
    question: 'Which aircraft types are available?',
    answer:
      'Programmes are available on the Airbus A320 family, Boeing 737 family, and Airbus A330 for qualified candidates progressing to wide-body operations.',
  },
  {
    question: 'Is employment guaranteed after successful completion?',
    answer:
      'Successful graduates who complete all training stages and meet airline partner requirements continue directly into airline employment through our partner network. Outcomes depend on programme completion, assessment results, and partner airline selection criteria.',
  },
  {
    question: 'What is included in the programme?',
    answer:
      'Programmes include structured type rating training, simulator sessions, base training, airline line training, career guidance, and access to our international airline partner network. Partner airlines may also provide accommodation, travel, and career development support.',
  },
  {
    question: 'Can non-EU passport holders apply?',
    answer:
      'Yes. Global Wings works with international airline partners across multiple regions. Eligibility depends on the specific airline, licence conversion requirements, and work permit regulations for the destination operator.',
  },
  {
    question: 'What are the payment options?',
    answer:
      'Type rating pricing is available upon request. Base training starts from €9,500. Our aviation advisors can discuss programme fees, payment structures, and financing options during your consultation.',
  },
]

export const cadetClosing = {
  title: 'Your Airline Career Starts Here',
  paragraphs: [
    "Whether you're a newly qualified cadet or an experienced pilot ready for your next challenge, Global Wings Ltd provides the training, experience, and international airline connections to help you achieve your ambitions.",
    'Join hundreds of successful pilots who have launched their careers through the GlobalCadet Programme.',
  ],
  primaryCta: 'Apply Now',
  secondaryCta: 'Speak with an Aviation Advisor',
}
