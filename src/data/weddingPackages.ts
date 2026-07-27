/**
 * Wedding Sky package tiers — single source for homepage + /services/wedding.
 * Prices are placeholders until confirmed; tier order increases Basic → Premium.
 */

export type WeddingPackageTier = {
  id: string
  name: string
  nameEl: string
  tagline: string
  taglineEl: string
  /** Display e.g. "from €8,500" or "Quoted on request" */
  priceDisplay: string
  /** Sort / value order (1 = entry tier) */
  sortOrder: number
  image: string
}

const PKG_IMG = '/images/services/wedding-packages'

/** Package card / detail hero imagery (distinct cover per tier). */
export const weddingPackages: WeddingPackageTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    nameEl: 'Basic',
    tagline: 'Essential planning and coordination for an elegant Cyprus celebration.',
    taglineEl: 'Βασικός σχεδιασμός και συντονισμός για μια κομψή τελετή στην Κύπρο.',
    priceDisplay: 'from €8,500',
    sortOrder: 1,
    image: `${PKG_IMG}/tier-basic.webp`,
  },
  {
    id: 'basic-plus',
    name: 'Basic Plus',
    nameEl: 'Basic Plus',
    tagline: 'Expanded vendor access and styling support beyond the essentials.',
    taglineEl: 'Εκτεταμένη υποστήριξη styling και συνεργατών πέρα από τα βασικά.',
    priceDisplay: 'from €12,000',
    sortOrder: 2,
    image: `${PKG_IMG}/tier-basic-plus.webp`,
  },
  {
    id: 'classic',
    name: 'Classic',
    nameEl: 'Classic',
    tagline: 'Full creative direction with refined production and guest care.',
    taglineEl: 'Πλήρης δημιουργική κατεύθυνση με παραγωγή και φροντίδα καλεσμένων.',
    priceDisplay: 'from €17,500',
    sortOrder: 3,
    image: `${PKG_IMG}/tier-classic.webp`,
  },
  {
    id: 'classic-plus',
    name: 'Classic Plus',
    nameEl: 'Classic Plus',
    tagline: 'Premium staging, extended hours, and bespoke detail programming.',
    taglineEl: 'Υψηλό staging, εκτεταμένο ωράριο και λεπτομερή προγράμματα.',
    priceDisplay: 'from €24,000',
    sortOrder: 4,
    image: `${PKG_IMG}/tier-classic-plus.webp`,
  },
  {
    id: 'premium',
    name: 'Premium',
    nameEl: 'Premium',
    tagline: 'Our signature tier — maximum craft, discretion, and white-glove execution.',
    taglineEl: 'Η κορυφαία επιλογή — μέγιστη τέχνη, διακριτικότητα και υποστήριξη VIP.',
    priceDisplay: 'from €35,000',
    sortOrder: 5,
    image: `${PKG_IMG}/tier-premium.webp`,
  },
  {
    id: 'customised',
    name: 'Customised',
    nameEl: 'Customised',
    tagline: 'A fully tailored programme built around your vision and investment level.',
    taglineEl: 'Πλήρως προσαρμοσμένο πρόγραμμα σύμφωνα με το όραμά σας.',
    priceDisplay: 'Quoted on request',
    sortOrder: 6,
    image: `${PKG_IMG}/tier-customised.webp`,
  },
]
