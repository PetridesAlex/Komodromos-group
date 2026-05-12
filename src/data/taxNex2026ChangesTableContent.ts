/**
 * Synoptic summary of headline Cyprus tax reform items from 01/01/2026,
 * aligned with bands in `cyprusIncomeTax.ts` (2026) and common reform summaries.
 * Illustrative only — not legal advice; clients should verify with the Tax Department.
 */

export type TaxNex2026ChangeRow = {
  id: string
  area: { el: string; en: string }
  before: { el: string; en: string }
  after: { el: string; en: string }
}

export const TAX_NEX_2026_CHANGES_ROWS: TaxNex2026ChangeRow[] = [
  {
    id: 'pit-threshold',
    area: {
      el: 'Αφορολόγητο όριο (φυσικά πρόσωπα)',
      en: 'Tax-free threshold (individuals)',
    },
    before: { el: '€19.500', en: '€19,500' },
    after: { el: '€22.000', en: '€22,000' },
  },
  {
    id: 'pit-bands',
    area: {
      el: 'Κλιμακωτός φόρος εισοδήματος — ανώτερο όριο πριν το 35%',
      en: 'Progressive income tax — top band before 35% rate',
    },
    before: {
      el: 'Κλίμακες με ανώτατο όριο €60.000 (35% για το υπερβάλλον)',
      en: 'Bands with ceiling €60,000 (35% on excess)',
    },
    after: {
      el: 'Νέες κλίμακες με ανώτατο όριο €72.000 (35% για το υπερβάλλον)',
      en: 'Revised bands with ceiling €72,000 (35% on excess)',
    },
  },
  {
    id: 'cit',
    area: {
      el: 'Φόρος εισοδήματος νομικών προσώπων',
      en: 'Corporate income tax',
    },
    before: { el: '12,5%', en: '12.5%' },
    after: { el: '15%', en: '15%' },
  },
  {
    id: 'sdc-dividends',
    area: {
      el: 'Έκτακτη αμυντική εισφορά — μερίσματα (ενδεικτικά)',
      en: 'Special Defence Contribution — dividends (indicative)',
    },
    before: { el: '17%', en: '17%' },
    after: { el: '5%', en: '5%' },
  },
  {
    id: 'ddd',
    area: {
      el: 'Θεωρούμενη διανομή μερισμάτων (DDD)',
      en: 'Deemed dividend distribution (DDD)',
    },
    before: { el: 'Ισχύει', en: 'Applied' },
    after: { el: 'Κατάργηση από 01/01/2026', en: 'Abolished from 01/01/2026' },
  },
  {
    id: 'loss-cf',
    area: {
      el: 'Μεταφορά ζημιών (ενδεικτικά)',
      en: 'Loss carry-forward (indicative)',
    },
    before: { el: 'Έως 5 έτη', en: 'Up to 5 years' },
    after: { el: 'Έως 7 έτη', en: 'Up to 7 years' },
  },
]
