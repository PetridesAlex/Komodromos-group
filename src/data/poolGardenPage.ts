const POOL_PAGE_ASSETS = '/images/services/swimming-pool-garden-services'

/** Pool Categories strip — dedicated art per type */
const POOL_CATEGORY_OVERFLOW = `${POOL_PAGE_ASSETS}/Overflow.webp`
const POOL_CATEGORY_SKIMMER = `${POOL_PAGE_ASSETS}/Skimmer.webp`
const POOL_CATEGORY_INFINITY = `${POOL_PAGE_ASSETS}/infinity.webp`

/** Pool internal linings — dedicated art */
const POOL_LINING_LINER = `${POOL_PAGE_ASSETS}/Liner.webp`
const POOL_LINING_MOSAIC = `${POOL_PAGE_ASSETS}/Mosaic.webp`
const POOL_LINING_CERAMIC = `${POOL_PAGE_ASSETS}/Ceramic.webp`

/** Service, renovation & repair — dedicated art */
const POOL_REPAIR_FOUNTAIN = `${POOL_PAGE_ASSETS}/Fountain.webp`
const POOL_REPAIR_COOLING = `${POOL_PAGE_ASSETS}/Cooling%20and%20Heating.webp`
const POOL_REPAIR_BAR = `${POOL_PAGE_ASSETS}/Bar-stools.webp`
const POOL_REPAIR_SWIM_SPAS = `${POOL_PAGE_ASSETS}/Swim-Spas.webp`
const POOL_REPAIR_SERVICE = `${POOL_PAGE_ASSETS}/Service-maintenance.webp`

export type PoolGardenShowcaseItem = {
  label: string
  imageSrc: string
}

/** Pool Categories — primary hydraulic / form types */
export const poolCategories: PoolGardenShowcaseItem[] = [
  {
    label: 'Overflow',
    imageSrc: POOL_CATEGORY_OVERFLOW,
  },
  {
    label: 'Skimmer',
    imageSrc: POOL_CATEGORY_SKIMMER,
  },
  {
    label: 'Infinity',
    imageSrc: POOL_CATEGORY_INFINITY,
  },
]

export type PoolServiceRepairItem = {
  label: string
  imageSrc: string
}

/** Service, renovation & repair — full capability matrix */
export const poolServiceRenovationRepair: PoolServiceRepairItem[] = [
  {
    label: 'Fountains',
    imageSrc: POOL_REPAIR_FOUNTAIN,
  },
  {
    label: 'Cooling and heating',
    imageSrc: POOL_REPAIR_COOLING,
  },
  {
    label: 'Swim spas',
    imageSrc: POOL_REPAIR_SWIM_SPAS,
  },
  {
    label: 'Bar and stools',
    imageSrc: POOL_REPAIR_BAR,
  },
  {
    label: 'Service and maintenance',
    imageSrc: POOL_REPAIR_SERVICE,
  },
]

/** Pool internal linings — finishes */
export const poolInternalLinings: PoolGardenShowcaseItem[] = [
  {
    label: 'Liners',
    imageSrc: POOL_LINING_LINER,
  },
  {
    label: 'Mosaic',
    imageSrc: POOL_LINING_MOSAIC,
  },
  {
    label: 'Ceramic',
    imageSrc: POOL_LINING_CERAMIC,
  },
]

export const poolGardenPillars = [
  {
    key: 'residential',
    title: 'Residential pool & garden',
    body:
      'Private homes, villas, and estates — from first concept to handover, with outdoor living, lighting, and planting in one coherent plan.',
  },
  {
    key: 'commercial',
    title: 'Commercial & hospitality',
    body:
      'Pools, spas, and exterior amenities for hotels, clubs, and developments — engineered for duty cycles, compliance, and guest experience.',
  },
  {
    key: 'construction',
    title: 'Construction & renewal',
    body:
      'New builds, renovations, and structural interventions — coordinated with shell, MEP, and landscape so timelines and quality stay aligned.',
  },
]
