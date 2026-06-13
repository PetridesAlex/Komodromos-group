export type StorageSpecRow = {
  label: string
  value: string
}

export type StorageSpecSection = {
  title: string
  rows: StorageSpecRow[]
}

export type StorageUnitSpecification = {
  id: string
  eyebrow: string
  title: string
  lead: string
  sections: StorageSpecSection[]
  summary?: string[]
  note?: string
}

export const STORAGE_UNIT_SPECS_PATH = '/services/storage/unit-specifications' as const

export const STORAGE_UNIT_SPECIFICATIONS: StorageUnitSpecification[] = [
  {
    id: 'container-20ft',
    eyebrow: 'Standard container',
    title: '20ft Container',
    lead: 'Standard external and internal dimensions for a 20-foot shipping container unit.',
    sections: [
      {
        title: 'External dimensions',
        rows: [
          { label: 'Length (external)', value: '6.058 m (20 ft)' },
          { label: 'Width (external)', value: '2.438 m (8 ft)' },
          { label: 'Height (external)', value: '2.591 m (8 ft 6 in)' },
        ],
      },
      {
        title: 'Internal dimensions',
        rows: [
          { label: 'Length (internal)', value: '5.898 m' },
          { label: 'Width (internal)', value: '2.352 m' },
          { label: 'Height (internal)', value: '2.393 m' },
        ],
      },
      {
        title: 'Door opening',
        rows: [
          { label: 'Width', value: '2.340 m' },
          { label: 'Height', value: '2.280 m' },
        ],
      },
      {
        title: 'Capacity',
        rows: [{ label: 'Internal volume', value: '33.2 m³' }],
      },
    ],
  },
  {
    id: 'container-40ft',
    eyebrow: 'Standard container',
    title: '40ft Container',
    lead: 'Double the length of a 20ft unit — ideal for larger storage requirements and business inventory.',
    sections: [
      {
        title: 'External dimensions',
        rows: [
          { label: 'Length (external)', value: '12.192 m (40 ft)' },
          { label: 'Width (external)', value: '2.438 m (8 ft)' },
          { label: 'Height (external)', value: '2.591 m (8 ft 6 in)' },
        ],
      },
      {
        title: 'Internal dimensions',
        rows: [
          { label: 'Length (internal)', value: '12.032 m' },
          { label: 'Width (internal)', value: '2.352 m' },
          { label: 'Height (internal)', value: '2.393 m' },
        ],
      },
      {
        title: 'Door opening',
        rows: [
          { label: 'Width', value: '2.340 m' },
          { label: 'Height', value: '2.280 m' },
        ],
      },
      {
        title: 'Capacity',
        rows: [{ label: 'Internal volume', value: '67.7 m³' }],
      },
    ],
  },
  {
    id: 'warehouse-20ft-insulated',
    eyebrow: 'Insulated warehouse',
    title: '20ft Insulated Warehouse Unit',
    lead: 'Thermally insulated warehouse space with the footprint of a standard 20ft container.',
    sections: [
      {
        title: 'External dimensions',
        rows: [
          { label: 'Length (external)', value: '6.058 m (20 ft)' },
          { label: 'Width (external)', value: '2.438 m (8 ft)' },
          { label: 'Height (external)', value: '2.591 m (8 ft 6 in)' },
        ],
      },
      {
        title: 'Internal dimensions',
        rows: [
          { label: 'Length (internal)', value: '5.898 m' },
          { label: 'Width (internal)', value: '2.352 m' },
          { label: 'Height (internal)', value: '2.393 m' },
        ],
      },
      {
        title: 'Door opening',
        rows: [
          { label: 'Width', value: '2.340 m' },
          { label: 'Height', value: '2.280 m' },
        ],
      },
      {
        title: 'Capacity',
        rows: [{ label: 'Internal volume', value: '33.2 m³' }],
      },
    ],
  },
  {
    id: 'warehouse-30ft-insulated',
    eyebrow: 'Thermal insulated warehouse',
    title: '30ft Thermal Insulated Warehouse Unit',
    lead: 'Extended insulated warehouse unit with increased height and usable internal volume.',
    note: 'Approximate internal dimensions use normal container wall, floor, and roof deductions.',
    sections: [
      {
        title: 'External dimensions',
        rows: [
          { label: 'External length', value: '8.058 m' },
          { label: 'External width', value: '2.438 m' },
          { label: 'External height', value: '2.800 m' },
          { label: 'Ground footprint', value: '19.65 m²' },
          { label: 'External volume', value: '55.01 m³' },
        ],
      },
      {
        title: 'Approximate internal dimensions',
        rows: [
          { label: 'Internal length', value: '7.898 m' },
          { label: 'Internal width', value: '2.352 m' },
          { label: 'Internal height', value: '2.602 m' },
          { label: 'Internal volume', value: '48.34 m³' },
        ],
      },
      {
        title: 'Approximate door opening',
        rows: [
          { label: 'Door width', value: '2.340 m' },
          { label: 'Door height', value: '2.489 m' },
        ],
      },
    ],
    summary: [
      'Approximately 8.06 m × 2.44 m × 2.80 m external size',
      'About 19.65 m² floor area',
      'Approximately 48.34 m³ usable internal volume',
    ],
  },
] as const
