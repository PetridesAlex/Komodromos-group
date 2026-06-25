/**
 * Default body content for /services/:slug when no bespoke block exists (not vip/storage).
 */

export type ServiceOffering = {
  title: string
  description: string
}

export type ServiceVideo = {
  label: string
  youtubeId: string
  caption?: string
  coverImage?: string
}

export type ServiceVideosSection = {
  eyebrow: string
  title: string
  intro?: string
  videos: ServiceVideo[]
}

export type ServiceGalleryImage = {
  src: string
  alt?: string
}

export type ServiceGalleryMarquee = {
  eyebrow: string
  title: string
  intro?: string
  images: readonly ServiceGalleryImage[]
}

const HR_GALLERY_BASE = '/images/services/human-resources-management'

const HR_GALLERY_FILENAMES = [
  'IMG-106.webp',
  'IMG-108.webp',
  'IMG-125.webp',
  'IMG-127.webp',
  'IMG-130.webp',
  'IMG-134.webp',
  'IMG-135.webp',
  'IMG-136.webp',
  'IMG-137.webp',
  'IMG-142.webp',
  'IMG-143.webp',
  'IMG-153.webp',
  'IMG-160.webp',
  'IMG-163.webp',
  'IMG-165.webp',
  'IMG-166.webp',
  'IMG-168.webp',
  'IMG-169.webp',
  'IMG-170.webp',
  'IMG-171.webp',
  'IMG-173.webp',
  'IMG-175.webp',
  'IMG-177.webp',
  'IMG-179.webp',
  'IMG-180.webp',
  'IMG-184.webp',
  'IMG-187.webp',
  'IMG-190.webp',
  'IMG-194.webp',
  'IMG-198.webp',
  'IMG-203.webp',
  'IMG-209.webp',
  'IMG-235.webp',
  'IMG-238.webp',
  'IMG-239.webp',
  'IMG-258.webp',
  'IMG-260.webp',
  'IMG-264.webp',
  'IMG-270.webp',
  'IMG-279.webp',
  'IMG-283.webp',
] as const

function hrGalleryImages(): ServiceGalleryImage[] {
  return HR_GALLERY_FILENAMES.map((filename) => ({
    src: `${HR_GALLERY_BASE}/${filename}`,
    alt: 'The Circle™ programme — session photography',
  }))
}

export type ServiceProgrammeIntro = {
  eyebrow: string
  title: string
  tagline: string
  paragraphs: readonly string[]
  learnTitle: string
  learnItems: readonly string[]
  audienceTitle: string
  audience: string
  resultTitle: string
  result: string
  closing: string
}

export type ServiceOfferingsSection = {
  eyebrow: string
  title: string
  intro?: string
}

export type ServicePageContent = {
  leadTitle: string
  lead: string
  programmeIntro?: ServiceProgrammeIntro
  galleryMarquee?: ServiceGalleryMarquee
  offeringsTitle: string
  offeringsSection?: ServiceOfferingsSection
  offerings: ServiceOffering[]
  videosSection?: ServiceVideosSection
  bullets?: string[]
  closing?: string
}

export const SERVICE_PAGE_CONTENT: Partial<Record<string, ServicePageContent>> = {
  pool: {
    leadTitle: 'Outdoor environments that feel built to last',
    lead:
      'From private pools to hospitality-grade landscapes, we shape exterior spaces around how you live, host, and invest — with disciplined planning and premium finishes.',
    offeringsTitle: 'Where we add value',
    offerings: [
      {
        title: 'Concept & layout',
        description:
          'Hydraulics, circulation, and sightlines balanced with architecture and terrain.',
      },
      {
        title: 'Materials & detailing',
        description:
          'Finishes selected for climate performance, safety, and long-term upkeep.',
      },
      {
        title: 'Project coordination',
        description:
          'One accountable thread from specification through handover and aftercare.',
      },
    ],
    bullets: [
      'Design-led documentation for approvals and contractors',
      'Options for lighting, decking, and outdoor infrastructure',
      'Support for residential, boutique hospitality, and mixed portfolios',
    ],
    closing:
      'Tell us about your site and timeline — we will respond with a clear next step.',
  },
  astreal: {
    leadTitle: 'Development intelligence for serious capital',
    lead:
      'Astreal Developers combines opportunity analysis, structuring discipline, and delivery oversight — so projects advance with transparency and controlled risk.',
    offeringsTitle: 'How we partner',
    offerings: [
      {
        title: 'Opportunity screening',
        description:
          'Market, legal, and financial lenses before capital is committed.',
      },
      {
        title: 'Development strategy',
        description:
          'Phasing, partnerships, and exit clarity aligned to your mandate.',
      },
      {
        title: 'Asset oversight',
        description:
          'Reporting rhythms that keep stakeholders aligned through execution.',
      },
    ],
    bullets: [
      'Institutional-grade documentation habits',
      'Experience across residential, mixed-use, and strategic land',
      'Coordination with legal, tax, and financing advisors',
    ],
  },
  hr: {
    leadTitle: 'People strategy that matches commercial reality',
    lead:
      'Human Resources Management helps leadership teams align talent, culture, and governance — with programmes that are practical, measurable, and respectful.',
    programmeIntro: {
      eyebrow: 'Human Resources Management',
      title: 'The Circle™ – Human Performance & Leadership Programme',
      tagline: 'Master the Human Factor. Transform the Way You Think, Lead and Perform.',
      paragraphs: [
        'Success is rarely determined by technical knowledge alone. The greatest achievements—whether in business, leadership or everyday life—are built upon the ability to make sound decisions, communicate effectively, manage pressure and lead with confidence.',
        'The Circle™ is an advanced professional development programme that combines internationally recognised Human Factors principles with practical leadership, decision-making and performance strategies. Originally inspired by methodologies used in high-performance industries such as aviation, the programme translates these proven concepts into practical tools that can be applied by business leaders, entrepreneurs, managers, teams and professionals from every sector.',
        'Throughout this immersive experience, participants develop a deeper understanding of how people think, react and perform under pressure. They learn how to recognise threats before they become problems, minimise human error, improve situational awareness, strengthen teamwork and communication, and make better decisions even in demanding environments.',
        'The programme also focuses on wellbeing, resilience, stress management, workload management and time optimisation—essential skills for anyone seeking sustainable success in today\'s fast-moving world.',
        'Rather than simply delivering theory, The Circle™ provides practical techniques, real-life case studies and interactive discussions that empower participants to immediately apply what they learn to both their professional and personal lives.',
      ],
      learnTitle: 'What You Will Learn',
      learnItems: [
        'Human Factors & Human Performance',
        'Leadership & Decision Making',
        'Threat and Error Management (TEM)',
        'Situational Awareness',
        'Communication & Team Coordination',
        'Monitoring & Intervention Techniques',
        'Workload & Stress Management',
        'Time Management & Productivity',
        'SMART Goal Setting',
        'Resilience & Performance Under Pressure',
        'Personal Development & Wellbeing',
        'Organisational Culture & Professional Behaviour',
      ],
      audienceTitle: 'Who Should Attend',
      audience:
        'The Circle™ is designed for executives, managers, entrepreneurs, business owners, aviation professionals, corporate teams and individuals who are committed to developing stronger leadership, improving performance and creating safer, more effective working environments.',
      resultTitle: 'The Result',
      result:
        'Participants leave The Circle™ with practical strategies, a stronger mindset and a completely new perspective on human performance—enabling them to lead with confidence, improve productivity, strengthen teamwork and consistently make better decisions both professionally and personally.',
      closing:
        'The Circle™ is more than a seminar. It is a transformational journey into the science of human performance and exceptional leadership.',
    },
    galleryMarquee: {
      eyebrow: 'Programme in motion',
      title: 'Inside The Circle™',
      intro:
        'Moments from leadership sessions, workshops and professional development — a living record of how teams learn, connect and perform together.',
      images: hrGalleryImages(),
    },
    videosSection: {
      eyebrow: 'The Circle Theory',
      title: 'The Circle 1 & 2 — video library',
      intro:
        'Leadership and organisation insights from Giannos Komodromos — the same sessions featured on our established Circle programme.',
      videos: [
        {
          label: 'The Circle 1',
          youtubeId: 'gMCVGkQyYV0',
          coverImage: '/images/services/human-resources-management/IMG-106.webp',
          caption: 'Giannos Komodromos',
        },
        {
          label: 'The Circle 2',
          youtubeId: 'nDc-hWUs5XI',
          coverImage: '/images/services/human-resources-management/IMG-187.webp',
          caption:
            'Self-Development, Business Management & Organisation Factors',
        },
        {
          label: 'The Circle — Part 2',
          youtubeId: 'K2fa_qXjIDQ',
          coverImage: '/images/services/human-resources-management/IMG-194.webp',
          caption:
            'Self-Development, Business Management & Organisation Factors — continued',
        },
        {
          label: 'The Circle — Part 3',
          youtubeId: 'G_m5CRbOxpo',
          coverImage: '/images/services/human-resources-management/IMG-108.webp',
          caption:
            'Self-Development, Business Management & Organisation Factors — session three',
        },
      ],
    },
    offeringsTitle: 'Service lines',
    offeringsSection: {
      eyebrow: 'Service lines',
      title: 'Strategic human capital capability',
      intro:
        'Practical HR support aligned to how your organisation actually operates — from leadership transitions and policy architecture to measurable development pathways.',
    },
    offerings: [
      {
        title: 'Executive search & onboarding',
        description:
          'Discreet, structured processes for critical hires and leadership transitions — protecting culture, confidentiality, and momentum from day one.',
      },
      {
        title: 'Frameworks & policy',
        description:
          'HR architecture designed for scale and compliance without unnecessary bureaucracy — clear governance that teams can actually follow.',
      },
      {
        title: 'Leadership development',
        description:
          'Coaching and capability programmes tied to business outcomes — strengthening decision-making, communication, and performance under pressure.',
      },
    ],
    bullets: [
      'Support for regulated and cross-border teams',
      'Workshops and facilitation for sensitive conversations',
      'Metrics that leadership can actually use',
    ],
  },
  janchapelle: {
    leadTitle: 'Couture bridal with uncompromising craft',
    lead:
      'Janchapelle — All About Weddings brings atelier discipline to every fitting: fabrics, silhouette, and finishing chosen for how they read in motion and light.',
    offeringsTitle: 'What clients experience',
    offerings: [
      {
        title: 'Custom design',
        description:
          'Sketches and muslins that translate personality into form.',
      },
      {
        title: 'Alterations & finishing',
        description:
          'Precision work so the gown feels settled, not borrowed.',
      },
      {
        title: 'Private appointments',
        description:
          'Unhurried sessions with space for honest feedback.',
      },
    ],
    bullets: [
      'Access to premium textiles and artisan suppliers',
      'Collaboration with stylists and photographers when requested',
      'Care instructions and storage guidance for heirlooms',
    ],
  },
  'adr-mediation': {
    leadTitle: 'Resolution without unnecessary war',
    lead:
      'The A.D.R Dispute Mediation Center helps parties exit conflict through structured dialogue — confidential, impartial, and oriented to durable agreements.',
    offeringsTitle: 'Modalities',
    offerings: [
      {
        title: 'Mediation',
        description:
          'Facilitated negotiation with a neutral who keeps process and parity intact.',
      },
      {
        title: 'Arbitration pathways',
        description:
          'Where appropriate, frameworks that respect timelines and enforceability.',
      },
      {
        title: 'Pre-dispute design',
        description:
          'Clause and escalation patterns that reduce surprise later.',
      },
    ],
    bullets: [
      'Strict confidentiality protocols',
      'Experience across commercial, partnership, and sensitive personal matters',
      'Documentation that supports settlement or next steps',
    ],
  },
}

export function getServicePageContent(slug: string | undefined): ServicePageContent | undefined {
  if (!slug) return undefined
  return SERVICE_PAGE_CONTENT[slug]
}
