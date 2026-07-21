/**
 * Onassis — bespoke premium experience content.
 *
 * Powers the dedicated landing page (`/services/yacht-charters/onassis`) and its
 * category detail pages (`/services/yacht-charters/onassis/:categoryId`).
 *
 * Images live under `public/images/services/maritime-services/yacht-cards/onassis/`.
 * The shipped photos are premium placeholders — drop the real Onassis photography in
 * with the same filenames (or edit the paths below) to update the pages.
 */

const ONASSIS_DIR = '/images/services/maritime-services/yacht-cards/onassis'
const asset = (file: string) => `${ONASSIS_DIR}/${file}`

export type OnassisStat = { label: string; value: string }

export type OnassisCategory = {
  /** URL segment used in `/services/yacht-charters/onassis/:categoryId`. */
  id: string
  /** Short label shown on the category card (uppercase in the UI). */
  label: string
  /** Editorial title on the category detail page. */
  title: string
  /** One-line summary shown on the landing card and detail hero. */
  tagline: string
  /** Cover image for the landing card + detail hero. */
  cover: string
  /** Body copy for the detail page. */
  paragraphs: string[]
  /** Quick facts / feature bullets. */
  highlights: string[]
  /** Optional key/value spec rows. */
  specs?: OnassisStat[]
  /** Optional photo gallery for the detail page. */
  gallery?: string[]
}

export const onassisHero = {
  eyebrow: 'Private Charter · By Invitation',
  name: 'Onassis',
  headline: 'A Legendary Yacht for the Few Who Expect Everything',
  lead: 'Onassis is our flagship charter — a vessel with a storied past, sailed by celebrated names and discerning principals. Every deck, cabin and detail is crafted for those who measure luxury in privacy, provenance and impeccable service.',
  image: asset('onassis-hero.webp'),
}

export const onassisIntro = {
  title: 'Where Provenance Meets Modern Luxury',
  paragraphs: [
    'Few yachts carry a name — and a legacy — like Onassis. She has hosted celebrities, dignitaries and private families across the Mediterranean, becoming as much a part of the story as the destinations she sails to.',
    'Explore the yacht through five perspectives below. Step across her sun-drenched decks, discover the craftsmanship within, trace her history, and imagine the lifestyle that unfolds on board.',
  ],
}

export const onassisStats: OnassisStat[] = [
  { label: 'Guests (day)', value: 'Up to 12' },
  { label: 'En-suite cabins', value: '5' },
  { label: 'Professional crew', value: 'Full complement' },
  { label: 'Home port', value: 'Limassol' },
]

export const onassisCategories: OnassisCategory[] = [
  {
    id: 'exterior',
    label: 'Exterior',
    title: 'The Exterior',
    tagline: 'Sweeping decks, sun terraces and an unmistakable silhouette.',
    cover: asset('exterior-cover.webp'),
    paragraphs: [
      'Onassis presents a commanding profile on the water — clean lines, brilliant white topsides and generous exterior volume across multiple levels. From the moment she comes into view, her presence sets the tone for the experience ahead.',
      'Expansive sun decks, a shaded al-fresco dining area and a spacious aft platform invite guests to move effortlessly between sunshine and shade, from morning coffee to golden-hour cocktails. A swim platform and space for tenders and water toys extend the day well beyond the deck.',
    ],
    highlights: [
      'Multi-level sun and lounge decks',
      'Shaded al-fresco dining for the full party',
      'Sunpads, wet bar and panoramic seating',
      'Swim platform with tenders & water toys',
    ],
    gallery: [asset('exterior-1.webp'), asset('exterior-2.webp'), asset('exterior-3.webp')],
  },
  {
    id: 'general',
    label: 'General',
    title: 'General Overview',
    tagline: 'The essentials — layout, capacity and what makes her special.',
    cover: asset('general-cover.webp'),
    paragraphs: [
      'Onassis balances scale with intimacy. She accommodates up to twelve guests by day and five en-suite cabins overnight, supported by a full professional crew dedicated to discreet, five-star service throughout your charter.',
      'Every itinerary is tailored — from a serene day cruise along the Cyprus coast to a landmark celebration at anchor or a multi-day passage across the eastern Mediterranean. Provisioning, catering, entertainment and transfers are coordinated through a single concierge line.',
    ],
    highlights: [
      'Up to 12 guests by day, 5 en-suite cabins overnight',
      'Full professional crew & concierge coordination',
      'Bespoke itineraries across the Mediterranean',
      'Home port: Limassol Marina',
    ],
    specs: [
      { label: 'Type', value: 'Luxury Motor Yacht' },
      { label: 'Guests (cruising)', value: 'Up to 12' },
      { label: 'Cabins', value: '5 en-suite' },
      { label: 'Crew', value: 'Full complement' },
      { label: 'Home port', value: 'Limassol Marina' },
      { label: 'Charters', value: 'Day · Overnight · Weekly' },
    ],
  },
  {
    id: 'history',
    label: 'History',
    title: 'History & Provenance',
    tagline: 'A storied past sailed by celebrated names.',
    cover: asset('history-cover.webp'),
    paragraphs: [
      'Onassis carries a legacy that few vessels can claim. Over the years she has welcomed celebrities, public figures and private families, hosting unforgettable moments across the Mediterranean’s most sought-after anchorages.',
      'That provenance is felt in every detail — a yacht that has been maintained, refined and cared for to preserve both her character and her comfort. To charter Onassis is to become part of a continuing story of elegance at sea.',
    ],
    highlights: [
      'Sailed by celebrities and distinguished guests',
      'A recognised name across the Mediterranean',
      'Meticulously maintained and refined over the years',
      'A living legacy of yachting elegance',
    ],
  },
  {
    id: 'interior',
    label: 'Interior',
    title: 'The Interior',
    tagline: 'Light-filled saloons and refined en-suite accommodation.',
    cover: asset('interior-cover.webp'),
    paragraphs: [
      'Step inside to a light-filled main saloon with panoramic glazing, refined finishes and a layout that flows naturally between lounging and dining. The interior balances warmth and grandeur — a home away from home for the most discerning guests.',
      'Five elegantly appointed en-suite cabins offer privacy and rest, each finished with premium materials and considered detail. Climate-controlled comfort, discreet service and thoughtful amenities complete the experience.',
    ],
    highlights: [
      'Light-filled main saloon with panoramic views',
      'Five en-suite cabins with premium finishes',
      'Formal dining and relaxed lounge areas',
      'Climate-controlled comfort throughout',
    ],
    gallery: [asset('interior-1.webp'), asset('interior-2.webp'), asset('interior-3.webp')],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    title: 'The Lifestyle',
    tagline: 'Fine dining, celebrations and unforgettable days at sea.',
    cover: asset('lifestyle-cover.webp'),
    paragraphs: [
      'Life aboard Onassis is defined by effortless indulgence. Long lunches at anchor, sunset champagne, swim stops in hidden bays and evenings under the stars — each moment is choreographed by a crew devoted to anticipating your every wish.',
      'Whether celebrating a milestone, hosting distinguished guests, or simply escaping in complete privacy, Onassis transforms a day on the water into a memory worth keeping. Fine dining, curated entertainment and bespoke experiences are arranged to your taste.',
    ],
    highlights: [
      'Fine dining & signature cocktails on board',
      'Celebrations, proposals and executive hosting',
      'Swim stops, water toys and hidden-bay itineraries',
      'Curated entertainment tailored to you',
    ],
    gallery: [asset('lifestyle-1.webp'), asset('lifestyle-2.webp'), asset('lifestyle-3.webp')],
  },
]

export function findOnassisCategory(id: string | undefined): OnassisCategory | undefined {
  if (!id) return undefined
  return onassisCategories.find((c) => c.id === id)
}
