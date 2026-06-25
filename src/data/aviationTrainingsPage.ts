export const trainingsHero = {
  title: 'Training & Aviation Services',
  subtitle:
    'Professional pilot training, aviation certifications, career development, and specialist aviation services designed to help aviation professionals advance their careers worldwide.',
}

export const trainingsIntro = {
  title: 'Professional Aviation Training',
  paragraphs: [
    'Global Wings Ltd offers a comprehensive range of aviation training programmes and professional services for pilots, airlines, and aviation professionals.',
    'Our experienced instructors and airline partners provide internationally recognised training, career guidance, and operational support to help pilots achieve the highest industry standards.',
    'Whether you are beginning your aviation career, upgrading your qualifications, or preparing for airline recruitment, we provide the expertise and support needed to help you succeed.',
  ],
}

export const trainingsServiceCategories = [
  {
    title: 'Flight Training',
    items: [
      'PPL Training',
      'CPL Training',
      'Multi Engine (ME)',
      'Instrument Rating (IR)',
      'MCC Courses',
      'CRM Training',
      'ATPL Theory',
      'Type Ratings',
      'Airbus A320 Type Rating',
      'Boeing 737NG Type Rating',
      'Type Rating Renewals',
      'Type Rating Revalidations',
    ],
  },
  {
    title: 'Instructor Qualifications',
    items: ['TRI Ratings', 'TRE Ratings', 'Flight Instructor Ratings'],
  },
  {
    title: 'Pilot Assessment Preparation',
    items: [
      'Airline Interview Preparation',
      'Simulator Assessment Preparation',
      'Airline Assessment Coaching',
    ],
  },
  {
    title: 'Medical & Licensing',
    items: [
      'Class 1 Medical Initial',
      'Class 1 Medical Renewals',
      'License Renewals',
      'License Revalidations',
    ],
  },
  {
    title: 'Additional Aviation Services',
    items: [
      'Ferry Flights Worldwide',
      'ACMI Services',
      'Professional CV Creation',
      'Career Consultancy',
      'Aviation Recruitment Support',
    ],
  },
] as const

export const lineTrainingProgram = {
  eyebrow: 'Airbus A320 / Boeing 737 Line Training Program',
  title: 'Build Airline Experience While Securing Your Future',
  paragraphs: [
    'Global Wings offers one of the most comprehensive line training programmes for newly type-rated First Officers.',
    'Our programme provides up to 500 hours of line flying experience combined with a guaranteed one-year First Officer employment contract after successful completion.',
    'This programme is specifically designed to help commercial pilots transition into airline operations with confidence.',
  ],
  includes: [
    '500 Hours Line Training',
    'One-Year First Officer Contract',
    'Free Accommodation',
    'Free Transportation',
    'Company Uniform',
    'Crew Identification',
    'Security Clearance',
    'Company Manuals',
    'Airline Induction Course',
  ],
  location: 'Europe',
  requirements: [
    'Commercial Pilot Licence (CPL)',
    'Multi Engine Rating (ME)',
    'Instrument Rating (IR)',
    'Frozen EASA ATPL',
    'Airbus A320 Type Rating with Base Training',
    'ICAO English Level 4 or higher',
    'Valid Class 1 Medical Certificate',
  ],
}

export type TrainingTimelineStep = {
  step: string
  title: string
  items: string[]
}

export const trainingsTimeline: TrainingTimelineStep[] = [
  {
    step: '01',
    title: 'Airline Selection',
    items: [
      'Airbus A320 Type Rating',
      'Airline Chief Pilot Interview',
      'Simulator Assessment with TRE',
      'Official Programme Acceptance',
    ],
  },
  {
    step: '02',
    title: 'Ground School',
    items: [
      'Safety & Emergency Procedures (SEP)',
      'Crew Resource Management (CRM)',
      'Aviation Security',
      'Dangerous Goods Regulations (DGR)',
      'Aircraft Performance',
      'Weight & Balance',
    ],
  },
  {
    step: '03',
    title: 'Cruise Phase',
    items: [
      '100 Flight Hours',
      'Minimum 40 Flight Sectors',
      'Flying with LFI / TRI',
      'PF & PM Duties',
      'Real Airline Operations',
    ],
  },
  {
    step: '04',
    title: 'Full Flight Training',
    items: [
      'Additional 100 Flight Hours',
      'Minimum 40 Flight Sectors',
      'Supervised by Line Training Captains',
      'Safety Pilot during Initial Sectors',
    ],
  },
  {
    step: '05',
    title: 'Line Check',
    items: [
      'Official evaluation conducted by an authorised TRE before progressing to operational line flying.',
    ],
  },
  {
    step: '06',
    title: 'First Officer Employment',
    items: [
      'Complete the remaining hours to achieve 500 hours total line experience while working as a First Officer under a guaranteed one-year airline contract.',
    ],
  },
]

export const captainProgram = {
  eyebrow: 'Direct Entry Captain Conversion Programme',
  title: 'Upgrade Your Career to Captain',
  paragraphs: [
    'Designed for experienced First Officers wishing to upgrade to Captain on Airbus A320 or Boeing 737 aircraft.',
    'Following successful selection, pilots enter a structured Commander Upgrade Programme with one of our airline partners.',
    'Upon successful completion, pilots receive a guaranteed Captain employment contract with the same airline.',
  ],
  benefits: [
    'Commander Upgrade Programme',
    '500 Hours Command Experience',
    'Accommodation Included',
    'Transportation Included',
    'Daily Per Diems',
    'Guaranteed Employment Contract',
    'Airline Career Progression',
  ],
  requirements: [
    'Valid Airbus A320 Type Rating',
    'EASA ATPL Licence',
    'Valid Class 1 Medical',
    'ICAO English Level 4+',
    'European Union Passport',
    'Minimum 4,000 Total Flight Hours',
    'Minimum 3,000 Hours on Type',
  ],
}

export const trainingsWhyCards = [
  {
    title: 'Airline Partnerships',
    text: 'Training opportunities with trusted international airlines.',
  },
  {
    title: 'Experienced Instructors',
    text: 'Learn from experienced airline captains and certified instructors.',
  },
  {
    title: 'Career Support',
    text: 'Recruitment assistance before and after training.',
  },
  {
    title: 'International Standards',
    text: 'Training aligned with EASA and international aviation regulations.',
  },
  {
    title: 'Worldwide Opportunities',
    text: 'Access to employment opportunities across Europe, the Middle East, Asia, and beyond.',
  },
  {
    title: 'Complete Career Path',
    text: 'From student pilot to Captain, Global Wings supports every stage of your aviation career.',
  },
] as const

export const trainingsClosing = {
  title: 'Ready to Advance Your Aviation Career?',
  paragraphs: [
    'Whether you\'re preparing for your first airline position, upgrading your qualifications, or pursuing a Captain command upgrade, Global Wings Ltd provides the training, expertise, and international connections to help you achieve your goals.',
  ],
  primaryCta: 'Apply for Training',
  secondaryCta: 'Speak with an Aviation Advisor',
}
