/**
 * Christina O — bespoke premium experience content.
 *
 * Powers the dedicated landing page (`/services/yacht-charters/onassis`) and its
 * category detail pages (`/services/yacht-charters/onassis/:categoryId`).
 *
 * Photography lives under `public/images/services/maritime-services/Christina-O/`.
 * Legacy placeholder covers remain under `yacht-cards/onassis/` where noted.
 */

const CHRISTINA_O_DIR = '/images/services/maritime-services/Christina-O'
/** Build a public URL for a Christina O asset (encodes spaces & special characters). */
const christinaAsset = (folder: string, file: string) =>
  `${CHRISTINA_O_DIR}/${folder}/${encodeURIComponent(file)}`

const EXTERIOR_IMAGES = [
  "CHRISTINA O aerial 1.jpg",
  "CHRISTINA O aerial Aft 2022.jpg",
  "CHRISTINA O aerial Aft.jpg",
  "DJI_0851-3.jpg",
  "DJI_0871.jpg",
  "DJI_0881.jpg",
  "DJI_0888.jpg",
  "DJI_0935-2.jpg",
  "DJI_0944-2.jpg",
  "Drone_Christina_O_03 18-07-2024 14_14_07_924.jpg",
  "Drone_Christina_O_04.jpg",
  "Drone_Christina_O_12.jpg",
  "Drone_Christina_O_28.jpg",
  "Hacker Craft aerial.jpg",
  "CHRISTINA O at night.jpg",
  "CHRISTINA O in SOF 2022.jpg",
  "Christina_O_115_©_Stef-Bravin.JPG",
  "Christina_O_30_©_Stef-Bravin.JPG",
  "CHRISTINA_O_credits_James _McNaught.jpg",
  "Aft deck.jpg",
  "Chrurchill's Favourite spot_credits_James_McNaught.jpg",
  "Compass deck 1.JPG",
  "Compass deck 2.JPG",
  "Compass deck 3.JPG",
  "Compass deck 5.jpg",
  "FR3I0234.jpg",
  "Hacker controls.jpg",
  "Hacker Craft docking 1.jpg",
  "Hacker Craft docking 2.jpg",
  "Hacker crafts_credits_James_McNaught.jpg",
  "Jacuzzi deck 3.JPG",
  "Jacuzzi Deck 5.jpg",
  "Jacuzzi deck 6.jpg",
  "Jacuzzi deck.JPG",
  "New Jacuzzi bar 2.JPG",
  "Sport tender and Hacker Craft.jpg",
  "Swimming pool.jpg",
  "View from Hackers.jpg",
] as const

const exteriorGallery = EXTERIOR_IMAGES.map((file) => christinaAsset('exterior', file))

const HISTORY_IMAGES = [
  "C-O-juin2018_244_stef-bravin.jpg",
  "C-O-juin2018_243_stef-bravin.jpg",
  "C-O-juin2018_242_stef-bravin.jpg",
  "C-O-juin2018_240_stef-bravin.jpg",
  "C-O-juin2018_239_stef-bravin.jpg",
  "C-O-juin2018_238_stef-bravin.jpg",
  "C-O-juin2018_154_stef-bravin.jpg",
  "C-O-juin2018_146_stef-bravin.jpg",
  "1955 05 22 in Monaco gettyimages-515257348-2048x2048.jpg",
  "1956 03 Onassis in Ari's bar gettyimages-545942177-2048x2048.jpg",
  "1956 Onassis by the pool note shine on metal gettyimages-545066665-2048x2048.jpg",
  "1959 07 30 Delphi gettyimages-517256898-1024x1024.webp",
  "1959 07 With Churchill's parrot   gettyimages-56209445-2048x2048 2.jpg",
  "1959 3am wearing chinchilla offered by Onassis Maria leaves a party given for her at the Dorchester after her performance in Medea behind is Alexis Minottis the Director.jpg",
  "1961 06 In the Hudson gettyimages-514901370-2048x2048.jpg",
  "1961 06 Onassis in Lapis Lounge GettyImages-141568688.width-2560.jpg",
  "1961 Callas lounge stage gettyimages-141568708-2048x2048.jpg",
  "1968 10 18 On Skorpios dock with helicopter gettyimages-515542744-2048x2048.jpg",
  "1968 10 21 Onassis wedding to Jackie on board.png",
  "1968 11 13 Letter from Jackie to Lord Harlech David Ormsby-Gore (1).webp",
  "1969 Onassis and Jackie 'heading to the Caribbean'_ (1).webp",
  "Aristóteles Onassis (1).webp",
  "CHRISTINA O history.jpg",
  "Jackie in Lapis Lounge (1).webp",
  "Liz Taylor Richard Burton on CHRISTINA O_LOW.jpg",
  "Onassis family with car on Skorpios dock with Jackie's children JFK Junior and Caroline (1).webp",
] as const

const historyGallery = HISTORY_IMAGES.map((file) => christinaAsset('History', file))

const LIFESTYLE_IMAGES = [
  "C-O-juin2018_65_stef-bravin.jpg",
  "CHRISTINA O party 2.jpg",
  "christina_o_06_©_stef-bravin.jpg",
  "christina_o_09_©_stef-bravin.jpg",
  "christina_o_34_©_stef-bravin.jpg",
  "Christina_O_37-©-stef-bravin.JPG",
  "christina_o_50_©_stef-bravin.jpg",
  "Christina_O_51-©-stef-bravin.JPG",
  "Christina_O_62_©_Stef-Bravin.JPG",
  "Christina_O_65_©_Stef-Bravin.JPG",
  "Christina_O_77_©_Stef-Bravin.JPG",
  "Christina_O_78_©_Stef-Bravin.JPG",
  "Christina-O_party_89_©_stef-bravin.jpg",
  "Party.jpg",
  "Wedding onboard .jpeg",
  "Wedding onboard 2.jpeg",
  "Wedding onboard.jpeg",
  "Dj on board.jpg",
  "Jacuzzi deck 2.jpg",
  "Relaxing on Churchill's chair.jpg",
  "Table.jpg",
  "Birthday cake.jpg",
  "FR3I0300.jpg",
  "FR3I0369.jpg",
  "From Christina O with love.jpg",
] as const

const lifestyleGallery = LIFESTYLE_IMAGES.map((file) => christinaAsset('Lifestyle', file))

const GENERAL_IMAGES = [
  "CHRISTINA O overhead.jpg",
  "CHRISTINA O.jpg",
  "CHRISTINA O pool.jpg",
  "CHRISTINA O swimming pool improved.jpg",
  "Christina_O_35-©-stef-bravin.JPG",
  "CHRISTINA_O_CARD1_0096 1.jpg",
  "CHRISTINA_O_CARD6_0279.jpg",
  "Christina-O_134_©_stef-bravin.jpg",
  "Christina-O_138_©_stef-bravin.jpg",
  "Christina-O_party_16_©_stef-bravin.jpg",
  "Christina-O_party_89_©_stef-bravin.jpg",
  "CHRISTINA O Churchill terrace.jpg",
  "New Jacuzzi bar 2.JPG",
] as const

const generalGallery = GENERAL_IMAGES.map((file) => christinaAsset('GENERAL', file))

const INTERIOR_IMAGES = [
  "Ari's bar 1.JPG",
  "Ari's bar 3.JPG",
  "Ari's bar 4.JPG",
  "Callas Lounge 1.jpg",
  "Callas Lounge 2.jpg",
  "Christina_O_04-©-stef-bravin.JPG",
  "Christina_O_07_©_Stef-Bravin.JPG",
  "Christina_O_12_©_Stef-Bravin.JPG",
  "Christina_O_194_©_Stef-Bravin.JPG",
  "Christina_O_31_©_Stef-Bravin.JPG",
  "Christina_O_57_©_Stef-Bravin.JPG",
  "Christina_O_86_©_Stef-Bravin.JPG",
  "Christina_O_91_©_Stef-Bravin.JPG",
  "Christina_O_92_©_Stef-Bravin(1).JPG",
  "Steinway piano in Callas Lounge.jpg",
  "Games table.jpg",
  "Lapis Lounge 1.jpg",
  "Lapis Lounge 3.jpg",
  "Main stairs.jpg",
  "New cinema screen.jpg",
  "Sir Winston Churchill library 1.JPG",
  "Sir Winston Churchill library 6.JPG",
  "Spa Hairdresser.JPG",
  "Spa massage room 1.JPG",
  "Spa nail salon.JPG",
  "Spa shower.JPG",
  "Ari's bar 1_credits_James_McNaught.jpg.jpg",
] as const

const interiorGallery = INTERIOR_IMAGES.map((file) => christinaAsset('Interior', file))

export type OnassisStat = { label: string; value: string }

export type OnassisListItem =
  | string
  | {
      name: string
      image: string
    }

export type OnassisListBlock = {
  title?: string
  items: OnassisListItem[]
  /** Visual treatment for the list. */
  presentation?: 'checklist' | 'tiles' | 'roster'
}

export function onassisListItemName(item: OnassisListItem): string {
  return typeof item === 'string' ? item : item.name
}

export function onassisListItemImage(item: OnassisListItem): string | undefined {
  return typeof item === 'string' ? undefined : item.image
}

export type OnassisHighlight = {
  text: string
  icon:
    | 'suite'
    | 'office'
    | 'bath'
    | 'view'
    | 'stool'
    | 'footrest'
    | 'craft'
    | 'atmosphere'
    | 'dining'
    | 'outdoor'
    | 'cocktail'
    | 'lounge'
    | 'pool'
}

export type OnassisStorySection = {
  id: string
  eyebrow?: string
  title: string
  /** Short label for the sticky jump navigation. */
  navLabel: string
  paragraphs: string[]
  quote?: { text: string; attribution?: string }
  lists?: OnassisListBlock[]
  highlights?: OnassisHighlight[]
}

export type OnassisAmenityGroup = {
  id: string
  title: string
  lead?: string
  items: string[]
  nested?: OnassisListBlock[]
}

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
  eyebrow: 'Private Charter · Legendary Superyacht',
  name: 'Christina O',
  headline: 'The Legendary Superyacht of Aristotle Onassis',
  lead: 'A timeless icon of prestige, luxury and history — step aboard one of the most legendary superyachts ever created.',
  image: '/images/services/maritime-services/Christina-O/cover/DJI_0935-2.webp',
}

export const onassisIntro = {
  eyebrow: 'The Experience',
  title: 'A Floating Palace of Prestige',
  paragraphs: [
    'Step aboard Christina O, one of the most legendary superyachts ever created — a floating palace that redefined luxury and hosted the world’s most influential leaders, celebrities, and royalty.',
    'Originally owned by the legendary Greek shipping magnate Aristotle Onassis, Christina O is far more than a yacht. She is a symbol of elegance, power, exclusivity, and timeless sophistication. Every deck tells a story, every suite reflects exceptional craftsmanship, and every voyage recreates an era when only the world’s elite were invited aboard.',
    'Whether you are planning an unforgettable private escape, a prestigious corporate event, or an extraordinary celebration, Christina O offers an experience unlike any other on the water.',
  ],
}

export const onassisStats: OnassisStat[] = [
  { label: 'Overnight guests', value: '34' },
  { label: 'Staterooms', value: '17' },
  { label: 'Up to · at anchor', value: '157' },
  { label: 'From / week', value: '€750,000' },
]

/**
 * Featured film section (placed after History).
 * Set `src` to a local mp4/webm path or stream URL when the video is ready.
 * Optional `youtubeId` can be used instead for an embed.
 */
export const onassisVideo = {
  eyebrow: 'Cinematic',
  title: 'Aboard Christina O',
  lead: 'A private glimpse of life on the legendary yacht — decks, suites, and the unmistakable atmosphere of Christina O at sea.',
  poster: '/images/services/maritime-services/Christina-O/cover/DJI_0935-2.webp',
  /** Drop your video file under `public/` and set the path here, e.g. `/videos/christina-o.mp4`. */
  src: '',
  /** Alternative: YouTube video id (used only when `src` is empty). */
  youtubeId: '',
  ctaLabel: 'Video arriving soon',
}

export const onassisStorySections: OnassisStorySection[] = [
  {
    id: 'history',
    eyebrow: 'Provenance',
    title: 'A Legendary History',
    navLabel: 'History',
    paragraphs: [
      'Built in 1943 as a Canadian Navy frigate, Christina O proudly served during the Normandy Landings of World War II before beginning an entirely new life.',
      'In 1952, Aristotle Onassis acquired the vessel and commissioned one of the most ambitious yacht transformations ever undertaken. The former warship was meticulously rebuilt into what would become the most glamorous private yacht of its generation.',
      'For decades, the yacht became Onassis’ private residence at sea, where politics, business, entertainment, and luxury blended in unforgettable style.',
    ],
    quote: {
      text: 'The height of opulence.',
      attribution: 'Former King Farouk of Egypt',
    },
  },
  {
    id: 'accommodation',
    eyebrow: 'Suites',
    title: 'Luxury Accommodation',
    navLabel: 'Suites',
    paragraphs: [
      'Christina O accommodates up to 34 guests in 17 beautifully appointed staterooms, each named after one of the magnificent Greek islands.',
      'Every suite showcases handcrafted woodwork, exquisite marble, and bespoke finishes inspired by the beauty and heritage of Greece.',
    ],
    lists: [
      {
        title: 'Island-named staterooms include',
        presentation: 'tiles',
        items: [
          {
            name: 'Santorini',
            image: christinaAsset('islands/tiles', 'santorini-onassis.webp'),
          },
          {
            name: 'Mykonos',
            image: christinaAsset('islands/tiles', 'mykonos-onassis.webp'),
          },
          {
            name: 'Rhodes',
            image: christinaAsset('islands/tiles', 'rhodes-onassis.webp'),
          },
          {
            name: 'Crete',
            image: christinaAsset('islands/tiles', 'crete-onassis.webp'),
          },
          {
            name: 'Corfu',
            image: christinaAsset('islands/tiles', 'corfu-onassis.webp'),
          },
          {
            name: 'Lesbos',
            image: christinaAsset('islands/tiles', 'lesvos-onassis.webp'),
          },
          {
            name: 'Andros',
            image: christinaAsset('islands/tiles', 'andros-onassis.webp'),
          },
        ],
      },
    ],
    highlights: [
      { text: 'Onassis Suite — elegant master stateroom', icon: 'suite' },
      { text: 'Private office', icon: 'office' },
      { text: 'Luxurious marble bathroom', icon: 'bath' },
      { text: 'Exceptional panoramic sea views', icon: 'view' },
    ],
  },
  {
    id: 'aris-bar',
    eyebrow: 'Signature Space',
    title: 'Ari’s Bar',
    navLabel: 'Ari’s Bar',
    paragraphs: [
      'No visit to Christina O is complete without experiencing the legendary Ari’s Bar — one of the world’s most famous yacht bars.',
      'Created personally for Aristotle Onassis and his distinguished guests, the bar became the setting for countless historic conversations and unforgettable evenings.',
      'During Onassis’ ownership, Christina O also featured remarkable innovations including a private elevator, a fully equipped operating theatre, and a 42-line telephone communication system — an extraordinary level of luxury decades ahead of its time.',
    ],
    highlights: [
      { text: 'Unique bar stools upholstered with authentic whale leather', icon: 'stool' },
      { text: 'Whale tooth footrests', icon: 'footrest' },
      {
        text: 'Handcrafted ivory armrests engraved with scenes from Homer’s Iliad and Odyssey',
        icon: 'craft',
      },
      { text: 'An atmosphere unlike any other yacht in the world', icon: 'atmosphere' },
    ],
  },
  {
    id: 'guests',
    eyebrow: 'Legacy',
    title: 'A Guest List Like No Other',
    navLabel: 'Guests',
    paragraphs: [
      'Few yachts in history have welcomed such an extraordinary collection of global icons.',
      'Sir Winston Churchill became one of Christina O’s most frequent guests, enjoying eight separate cruises aboard the yacht. In a gesture reserved exclusively for him, Aristotle Onassis would personally vacate his own master suite whenever Churchill was on board.',
    ],
    lists: [
      {
        title: 'Entertainment & cinema',
        presentation: 'roster',
        items: [
          'Marilyn Monroe',
          'Elizabeth Taylor',
          'Richard Burton',
          'Frank Sinatra',
          'Liza Minnelli',
          'Rudolf Nureyev',
        ],
      },
      {
        title: 'Political leaders & royalty',
        presentation: 'roster',
        items: [
          'President John F. Kennedy',
          'Sir Winston Churchill',
          'Prince Rainier III of Monaco',
          'Princess Grace Kelly',
        ],
      },
      {
        title: 'Influential business families',
        presentation: 'roster',
        items: ['Rockefeller Family', 'Rothschild Family', 'J. Paul Getty'],
      },
    ],
  },
  {
    id: 'entertainment',
    eyebrow: 'On Board',
    title: 'Entertainment & Social Spaces',
    navLabel: 'Entertainment',
    paragraphs: [
      'Christina O was designed to impress. Her magnificent social spaces are perfect for both intimate gatherings and spectacular celebrations.',
      'One of the yacht’s most famous features is the spectacular swimming pool, decorated with a stunning Minoan Minotaur mosaic. At the touch of a button, the pool floor rises, transforming into a magnificent dance floor beneath the stars — an engineering masterpiece that continues to amaze guests today.',
    ],
    highlights: [
      { text: 'Elegant formal dining room for up to 40 guests', icon: 'dining' },
      { text: 'Expansive outdoor entertainment areas', icon: 'outdoor' },
      { text: 'Cocktail lounges & Outdoor Jacuzzi Bar', icon: 'cocktail' },
      { text: 'Large sun decks and luxurious lounges', icon: 'lounge' },
      { text: 'Transforming mosaic pool / dance floor', icon: 'pool' },
    ],
  },
  {
    id: 'living-legend',
    eyebrow: 'Today',
    title: 'A Living Legend',
    navLabel: 'Legacy',
    paragraphs: [
      'More than seventy years after her launch, Christina O remains one of the most recognised and admired superyachts in the world.',
      'Her legendary reputation continues today, including appearances in Netflix’s “The Crown”, where she proudly appears alongside the iconic Royal Yacht Britannia.',
      'Few yachts have influenced the history of luxury travel quite like Christina O. She is not simply a yacht — she is a masterpiece, a living history, and the ultimate expression of prestige at sea.',
    ],
  },
]

export const onassisAmenityGroups: OnassisAmenityGroup[] = [
  {
    id: 'capacity',
    title: 'Charter Capacity',
    items: [
      '34 overnight guests',
      '17 luxurious staterooms',
      'Up to 157 guests while at anchor for exclusive events',
    ],
    nested: [
      {
        title: 'Ideal for',
        items: [
          'VIP celebrations',
          'Corporate events',
          'Luxury receptions',
          'Cocktail parties',
          'Weddings',
          'Private dinners',
          'Special occasions',
        ],
      },
    ],
  },
  {
    id: 'amenities',
    title: 'Luxury Amenities',
    lead: 'Experience world-class comfort with premium onboard facilities.',
    items: [
      'Private cinema',
      'Fully equipped fitness area',
      'Deck Jacuzzi',
      'Advanced stabilisation system',
      'Luxury sun loungers',
      'High-speed Wi-Fi throughout the yacht',
    ],
  },
  {
    id: 'watersports',
    title: 'Water Sports & Adventure',
    lead: 'An impressive collection of premium water toys for guests seeking excitement on the water. Professional diving experiences are also available by prior arrangement.',
    items: [
      'Jet Surf',
      'Waverunner',
      'Paddleboards',
      'Wakeboard',
      'Adult water skis',
      'Banana boat',
      'Inflatable water toys',
    ],
  },
  {
    id: 'tenders',
    title: 'Tenders',
    lead: 'Elegant transportation between the yacht and shore with comfort and style.',
    items: ['29ft (9m) luxury tender', '23ft (7.3m) RIB tender'],
  },
]

export const onassisCta = {
  title: 'Charter Christina O',
  rate: 'From €750,000 per week',
  rateNote: 'Plus applicable expenses (APA & VAT where applicable).',
  text: 'Experience one of the most extraordinary superyachts ever built and discover why Christina O continues to captivate the world’s most discerning travellers.',
}

export const onassisCategories: OnassisCategory[] = [
  {
    id: 'exterior',
    label: 'Exterior',
    title: 'The Exterior',
    tagline: 'Sun decks, entertainment terraces and an unmistakable silhouette.',
    cover: exteriorGallery[0],
    paragraphs: [
      'Christina O presents a commanding profile on the water — a floating palace whose presence sets the tone for the experience ahead.',
      'Expansive outdoor entertainment areas, cocktail lounges, an Outdoor Jacuzzi Bar, large sun decks and luxurious lounges invite guests to move effortlessly between sunshine and shade. Her spectacular swimming pool, decorated with a Minoan Minotaur mosaic, transforms at the touch of a button into a magnificent dance floor beneath the stars.',
    ],
    highlights: [
      'Expansive outdoor entertainment areas',
      'Outdoor Jacuzzi Bar & large sun decks',
      'Minoan Minotaur mosaic pool / dance floor',
      'Tenders for elegant shore transfers',
    ],
    gallery: exteriorGallery,
  },
  {
    id: 'general',
    label: 'Overview',
    title: 'General Overview',
    tagline: 'Capacity, charter formats and what makes her extraordinary.',
    cover: christinaAsset('GENERAL', 'CHRISTINA O pool.jpg'),
    paragraphs: [
      'Christina O accommodates up to 34 overnight guests in 17 luxurious staterooms, and up to 157 guests while at anchor for exclusive events — ideal for VIP celebrations, corporate receptions, weddings and private dinners.',
      'Charter from €750,000 per week, plus applicable expenses (APA & VAT where applicable). Every itinerary is tailored through a single concierge line — provisioning, catering, entertainment and transfers included in the planning.',
    ],
    highlights: [
      '34 overnight guests · 17 staterooms',
      'Up to 157 guests at anchor for events',
      'From €750,000 per week',
      'Bespoke Mediterranean itineraries',
    ],
    specs: [
      { label: 'Type', value: 'Legendary Motor Yacht' },
      { label: 'Overnight guests', value: '34' },
      { label: 'Staterooms', value: '17' },
      { label: 'Events at anchor', value: 'Up to 157' },
      { label: 'Charter rate', value: 'From €750,000 / week' },
      { label: 'Charters', value: 'Weekly · Events · Bespoke' },
    ],
    gallery: generalGallery,
  },
  {
    id: 'history',
    label: 'History',
    title: 'History & Provenance',
    tagline: 'From wartime frigate to the height of opulence.',
    cover: christinaAsset('History', 'CHRISTINA O history.jpg'),
    paragraphs: [
      'Built in 1943 as a Canadian Navy frigate, Christina O served during the Normandy Landings before Aristotle Onassis acquired her in 1952 and commissioned one of the most ambitious yacht transformations ever undertaken.',
      'Former King Farouk of Egypt famously described her as “the height of opulence.” For decades she was Onassis’ private residence at sea — later welcoming icons from Marilyn Monroe and Frank Sinatra to President Kennedy, Churchill, and Grace Kelly. Today she remains a living legend, including appearances in Netflix’s “The Crown”.',
    ],
    highlights: [
      'Built 1943 · rebuilt by Onassis in 1952',
      'Served at the Normandy Landings',
      'Hosted royalty, cinema and world leaders',
      'Featured in Netflix’s “The Crown”',
    ],
    gallery: historyGallery,
  },
  {
    id: 'interior',
    label: 'Interior',
    title: 'The Interior',
    tagline: 'Seventeen island-named suites and the legendary Ari’s Bar.',
    cover: interiorGallery[0],
    paragraphs: [
      'Seventeen beautifully appointed staterooms — each named after magnificent Greek islands such as Santorini, Mykonos, Rhodes, Crete, Corfu, Lesbos and Andros — showcase handcrafted woodwork, exquisite marble and bespoke finishes.',
      'The crown jewel remains the Onassis Suite, with an elegant master stateroom, private office, luxurious marble bathroom and exceptional panoramic sea views. No visit is complete without Ari’s Bar — one of the world’s most famous yacht bars, created personally for Onassis and his distinguished guests.',
    ],
    highlights: [
      '17 island-named staterooms',
      'Onassis Suite with private office & panoramic views',
      'Legendary Ari’s Bar',
      'Private cinema & formal dining for 40',
    ],
    gallery: interiorGallery,
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    title: 'The Lifestyle',
    tagline: 'Celebrations, water toys and unforgettable evenings at sea.',
    cover: lifestyleGallery[0],
    paragraphs: [
      'Life aboard Christina O is defined by effortless prestige — private escapes, corporate events and extraordinary celebrations in spaces designed for both intimacy and spectacle.',
      'Premium water toys including Jet Surf, waverunner, paddleboards, wakeboard, water skis and more await on the water, with professional diving available by prior arrangement. High-speed Wi-Fi, a private cinema, fitness area and deck Jacuzzi complete a world-class onboard experience.',
    ],
    highlights: [
      'VIP celebrations, weddings & corporate events',
      'Premium water toys & diving by arrangement',
      'Private cinema, fitness & deck Jacuzzi',
      'Luxury tenders for shore transfers',
    ],
    gallery: lifestyleGallery,
  },
]

export function findOnassisCategory(id: string | undefined): OnassisCategory | undefined {
  if (!id) return undefined
  return onassisCategories.find((c) => c.id === id)
}
