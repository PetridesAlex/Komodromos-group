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
}

export type ServiceVideosSection = {
  eyebrow: string
  title: string
  intro?: string
  videos: ServiceVideo[]
}

export type ServicePageContent = {
  leadTitle: string
  lead: string
  offeringsTitle: string
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
    videosSection: {
      eyebrow: 'The Circle Theory',
      title: 'The Circle 1 & 2 — video library',
      intro:
        'Leadership and organisation insights from Giannos Komodromos — the same sessions featured on our established Circle programme.',
      videos: [
        {
          label: 'The Circle 1',
          youtubeId: 'gMCVGkQyYV0',
          caption: 'Giannos Komodromos',
        },
        {
          label: 'The Circle 2',
          youtubeId: 'nDc-hWUs5XI',
          caption:
            'Self-Development, Business Management & Organisation Factors',
        },
        {
          label: 'The Circle — Part 2',
          youtubeId: 'K2fa_qXjIDQ',
          caption:
            'Self-Development, Business Management & Organisation Factors — continued',
        },
        {
          label: 'The Circle — Part 3',
          youtubeId: 'G_m5CRbOxpo',
          caption:
            'Self-Development, Business Management & Organisation Factors — session three',
        },
      ],
    },
    offeringsTitle: 'Service lines',
    offerings: [
      {
        title: 'Executive search & onboarding',
        description:
          'Discreet processes for critical hires and leadership transitions.',
      },
      {
        title: 'Frameworks & policy',
        description:
          'HR architecture that supports scale without bureaucracy for its own sake.',
      },
      {
        title: 'Development',
        description:
          'Coaching and capability paths tied to business outcomes.',
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
