/** Highlight grid for Wedding Sky — curated tiles with distinct imagery and actions. */

export type WeddingHighlightTile = {
  id: string
  /** Short label above the title */
  kicker: string
  title: string
  titleEl: string
  image: string
  /** Optional in-page anchor (e.g. #wedding-packages-heading) */
  hashHref?: string
  /** Navigate to contact with prefilled interest */
  contact?: boolean
}

const TILE_IMG = '/images/services/wedding-highlights'

export const weddingHighlightTiles: WeddingHighlightTile[] = [
  {
    id: 'cyprus-destinations',
    kicker: 'Destinations',
    title: 'Island-wide ceremonies & receptions',
    titleEl: 'Τελετές και δεξιώσεις σε όλη την Κύπρο',
    image: `${TILE_IMG}/destinations.webp`,
  },
  {
    id: 'planning',
    kicker: 'Planning',
    title: 'Concept, timeline & vendor orchestration',
    titleEl: 'Κονσεπτ, χρονοδιάγραμμα και συντονισμός συνεργατών',
    image: `${TILE_IMG}/planning.webp`,
  },
  {
    id: 'bridal-style',
    kicker: 'Style',
    title: 'Bridal couture & partner ateliers',
    titleEl: 'Νυφικό στυλ και συνεργαζόμενα ατελιέ',
    image: `${TILE_IMG}/bridal.webp`,
  },
  {
    id: 'production',
    kicker: 'Production',
    title: 'Venue design, lighting & run of show',
    titleEl: 'Χώρος, φωτισμός και ροή εκδήλωσης',
    image: `${TILE_IMG}/production.webp`,
  },
  {
    id: 'guests',
    kicker: 'Guests',
    title: 'Hospitality, travel cues & seating craft',
    titleEl: 'Φιλοξενία, μετακινήσεις και καθίσματα',
    image: `${TILE_IMG}/guests.webp`,
  },
  {
    id: 'stories',
    kicker: 'Stories',
    title: 'Words from couples we walked beside',
    titleEl: 'Λόγια ζευγαριών που μας εμπιστεύτηκαν',
    image: `${TILE_IMG}/stories.webp`,
    hashHref: '#wedding-testimonials-heading',
  },
  {
    id: 'packages',
    kicker: 'Packages',
    title: 'Tiers from essential to fully bespoke',
    titleEl: 'Επίπεδα από το βασικό έως το πλήρως προσαρμοσμένο',
    image: `${TILE_IMG}/packages.webp`,
    hashHref: '#wedding-packages-heading',
  },
  {
    id: 'start',
    kicker: 'Start',
    title: 'Book a private consultation',
    titleEl: 'Κλείστε ιδιωτική συνάντηση',
    image: `${TILE_IMG}/consultation.webp`,
    contact: true,
  },
]
