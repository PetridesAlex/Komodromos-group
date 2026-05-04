/** Yacht charters — fleet cards use assets under `public/images/services/maritime-services/yacht-cards/`. */
const img = (path: string) => path

const YACHT_CARD_DIR = '/images/services/maritime-services/yacht-cards'

export type YachtType = 'Motor Yacht' | 'Sailing Yacht' | 'Catamaran'

/** Rows for “Information”-style tables on dedicated yacht pages (see diamantides-style layout). */
export type YachtDetailRow = { label: string; value: string }

export type YachtDetailPageContent = {
  paragraphs: string[]
  /** Half day / full day / weekly style rows */
  charterRates: YachtDetailRow[]
  /** Accommodation, passengers, home port, etc. */
  vesselSpecs: YachtDetailRow[]
  ratesFootnote?: string
}

export type YachtCharter = {
  id: string
  name: string
  type: YachtType
  location: string
  guests: number
  price4h: string
  price6h: string
  priceFullDay: string
  image: string
  gallery: string[]
  description: string
  included: string[]
  durations: string[]
  /** When set, vessel detail page uses this rich copy and tables instead of generic defaults. */
  detailPage?: YachtDetailPageContent
}

/** Portfolio mirror — charter fleet names from diamantidesyachting.com/services/yacht-charter/ */
export const DIAMANTIDES_STYLE_FLEET_NAMES = [
  'Princess 30M',
  'Azimut 27 Grande',
  'Princess 88',
  'Falcon 86',
  'Fairline 75',
  'Ferretti 69',
  'Azimut Magellano 66',
  'Azimut 64',
  'Sunseeker 64',
  'Princess 62',
  'Sacs Strider 18',
  'Cranchi Fifty 8 Fly',
  'Ferretti 550',
  'Beneteau Monte Carlo 50 Fly',
  'Fairline Targa 48V',
  'Fairline Targa 48',
  'Atlantis 47',
  'Searay 425',
  'Beneteau Monte Carlo 42',
  'Four Winns 378 Vista',
] as const

/** Card filenames (Azimut 27 Grande → `Azimut-47-grande.webp`; Fairline Targa 48 → `Fairline-trarga-48.webp` on disk). */
const FLEET_CARD_IMAGE_FILE: Record<(typeof DIAMANTIDES_STYLE_FLEET_NAMES)[number], string> = {
  'Princess 30M': 'Princess-30m.webp',
  'Azimut 27 Grande': 'Azimut-47-grande.webp',
  'Princess 88': 'Princess-88.webp',
  'Falcon 86': 'Falcon-86.webp',
  'Fairline 75': 'Fairline-75.webp',
  'Ferretti 69': 'Ferretti-69.webp',
  'Azimut Magellano 66': 'Azimut-magellano-66.webp',
  'Azimut 64': 'Azimut-64.webp',
  'Sunseeker 64': 'Sunseeker-64.webp',
  'Princess 62': 'Princess-62.webp',
  'Sacs Strider 18': 'Sacs-strider-18.webp',
  'Cranchi Fifty 8 Fly': 'Cranchi-fifty-8-Fly.webp',
  'Ferretti 550': 'Ferretti-550.webp',
  'Beneteau Monte Carlo 50 Fly': 'Beneteau-monte-carlo-50-Fly.webp',
  'Fairline Targa 48V': 'Fairline-targa-48V.webp',
  'Fairline Targa 48': 'Fairline-trarga-48.webp',
  'Atlantis 47': 'Atlantis-47.webp',
  'Searay 425': 'Searay-425.webp',
  'Beneteau Monte Carlo 42': 'Beneteau-monte-carlo-42.webp',
  'Four Winns 378 Vista': 'Four-winns-378-Vista.webp',
}

function fleetCardImage(name: (typeof DIAMANTIDES_STYLE_FLEET_NAMES)[number]): string {
  return img(`${YACHT_CARD_DIR}/${FLEET_CARD_IMAGE_FILE[name]}`)
}

/** Hero strip on `/services/yacht-charter` */
export const yachtChartersHeroImage = img('/images/services/maritime-services/yacht-marine-hero.webp')

const DEFAULT_INCLUDED = [
  'Professional skipper & crew (as required)',
  'Safety equipment & briefing',
  'Standard fuel for agreed itinerary',
  'Soft drinks & water',
  'Concierge coordination',
] as const

function slugifyFleetId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const TEN_GUEST_VESSELS = new Set([
  'Princess 30M',
  'Fairline Targa 48V',
  'Fairline Targa 48',
  'Atlantis 47',
  'Searay 425',
  'Beneteau Monte Carlo 42',
  'Four Winns 378 Vista',
])

function guestsForVessel(name: string): number {
  return TEN_GUEST_VESSELS.has(name) ? 10 : 12
}

function descriptionForVessel(name: string): string {
  const n = name
  if (/30M|27 Grande|^Princess 88|Falcon 86|Fairline 75/.test(n)) {
    return `${name} — flagship-scale entertaining, extended passages, and full-service hospitality suitable for principal guests and bespoke itineraries from Limassol.`
  }
  if (/Strider|425|Targa|Atlantis|Monte Carlo 42|378 Vista/.test(n)) {
    return `${name} — nimble day-cruiser format for coastal hops, swim stops, and flexible skippered charters tailored to your timetable.`
  }
  return `${name} — refined flybridge motor yacht experience for private cruises, corporate hosting, and celebration charters with discreet crew coordination.`
}

/** Princess 30M — editorial detail inspired by classic charter vessel pages (hero + Information blocks). */
const PRINCESS_30M_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Princess 30M presents flagship motor-yacht living: a long, light-filled saloon with wraparound glazing for panoramic sea views, refined interior finishes, and multiple deck levels for dining, lounging, and sunset entertaining. From the main seating area, doors open onto generous exterior spaces — including a well-appointed flybridge with further seating and sun lounging — making her a natural fit for sunshine cruising along the Cyprus coast and beyond.',
    'Accommodation is arranged for up to ten guests across three doubles and two twins that can convert where needed, supported by professional crew and space for tenders and water toys. Whether you picture a relaxed family escape or a high-touch celebration at anchor, this layout balances privacy, hospitality, and adventure in one cohesive platform.',
  ],
  charterRates: [
    { label: 'Half day', value: 'On request' },
    { label: 'Full day', value: 'On request' },
    { label: 'Overnight', value: 'On request' },
    { label: 'Weekly', value: 'On request' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '3 double, 2 twin (convertible to double)' },
    { label: 'Passengers', value: '10' },
    { label: 'Home port', value: 'Limassol Marina' },
  ],
  ratesFootnote:
    'Charter rates depend on season, itinerary, and provisioning. Ask us for a written quote covering crew, standard operational fuel where applicable, and any APA or catering preferences.',
}

/** Azimut 27 Grande — dedicated vessel story + tables on `/services/yacht-charters/azimut-27-grande`. */
const AZIMUT_27_GRANDE_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Azimut 27 Grande is built around relaxed grandeur: a generous main-deck saloon with refined finishes, panoramic hull-sided glazing, and a flowing layout that moves easily from dining to lounge seating. On deck, the flybridge adds another full living level — sun pads, dining, and helm — so guests can follow the light from morning coffee to golden-hour drinks without ever feeling crowded.',
    'Underway, her hull form and engineering priorities comfort on passage, whether you are island-hopping the Cyprus coast or staging a longer eastern Mediterranean itinerary. Overnight, multiple en-suite cabins give principals and guests privacy; by day, the open decks and swim platform invite long lunches, swim stops, and seamless crew-led hospitality from Limassol outward.',
  ],
  charterRates: [
    { label: 'Half day', value: 'On request' },
    { label: 'Full day', value: 'On request' },
    { label: 'Overnight', value: 'On request' },
    { label: 'Weekly', value: 'On request' },
  ],
  vesselSpecs: [
    {
      label: 'Accommodation',
      value: '4 en-suite guest cabins + crew quarters',
    },
    { label: 'Passengers', value: 'Up to 12' },
    { label: 'Home port', value: 'Limassol Marina' },
  ],
  ratesFootnote:
    'Charter rates depend on season, itinerary, and provisioning. Ask us for a written quote covering crew, standard operational fuel where applicable, and any APA or catering preferences.',
}

/** Princess 88 — source-aligned copy from diamantidesyachting.com Princess 88 listing (Trinity). */
const PRINCESS_88_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Princess 88, named Trinity, provides outstanding efficiency and incredibly luxurious style by combining exceptional engineering and craftsmanship. With a drop down balcony, which unfolds over the sea, it provides one of a kind, magnificent sunset views. Her distinctive deep-V hull design balances incredible fuel efficiency with spectacular performance and agility while meeting the highest industry standards. Featuring a spacious saloon with panoramic views and a formal dining area, it is the ideal yacht to entertain guests, for formal or social occasions. The flybridge includes generous seating as well as a dining area, large sun pad, wet bar and sociable helm side with companion seating, making the yacht the perfect fit for large groups during the day and eight guests overnight in four luxuriously furnished cabins.',
  ],
  charterRates: [
    { label: 'Half Day', value: '€8,300' },
    { label: 'Full Day', value: '€8,800' },
    { label: 'Overnight', value: '€10,500' },
    { label: 'Weekly', value: 'Upon Request' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '3 Double, 1 Twin' },
    { label: 'Passengers', value: '12' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Falcon 86 — source-aligned copy from diamantidesyachting.com Falcon 86 listing. */
const FALCON_86_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'Welcome to Falcon 86, a yacht built in 2000 and comprehensively refitted in 2018. The yacht can comfortably accommodate up to 12 guests for a day charter and 8 guests for an overnight stay, in its 4 elegantly appointed cabins. There are 3 double cabins and 1 twin cabin, all with en-suite facilities, ensuring privacy and convenience.',
    'The main salon is the heart of the yacht, with an open layout that seamlessly connects it with the formal dining area. The space is bathed in natural light, creating a warm and welcoming ambiance. The salon is equipped with modern amenities, including a large flat-screen TV, DVD player, and stereo system, ensuring you have everything you need to enjoy your time onboard.',
    "The flybridge is the perfect spot for outdoor entertainment, offering ample space for sunbathing, al fresco dining, and socializing with guests. With stunning views of the surroundings, it's the perfect place to relax and unwind while cruising the seas.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€7,200' },
    { label: 'Full Day', value: '€7,800' },
    { label: 'Overnight', value: '€9,500' },
    { label: 'Weekly', value: '€49,000*' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '3 double, 1 twin' },
    { label: 'Passengers', value: '12' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Fairline 75 — source-aligned copy from diamantidesyachting.com Fairline 75 listing (Phantom). */
const FAIRLINE_75_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Fairline 75, named Phantom, is the ideal yacht for both day charters and overnight charters. The extravagant interior with wooden elements makes it feel warm and welcoming, like a home away from home. Whether you want to host a corporate event for your employees or organize an extravagant birthday party for your dearest family member, the Fairline 75 is the perfect choice. With a spacious flybridge area where you can enjoy a cocktail under the sunshine and flat screen TV it is ideal for entertainment. If you are looking for culture, gastronomic delights, sun, sea and sand, this yacht will help you create the memories of a lifetime.',
  ],
  charterRates: [
    { label: 'Half Day', value: '€5,900' },
    { label: 'Full Day', value: '€6,300' },
    { label: 'Overnight', value: '€7,000' },
    { label: 'Weekly', value: '€42,000*' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 1 twin' },
    { label: 'Passengers', value: '15' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Ferretti 69 — source-aligned copy from diamantidesyachting.com Ferretti 69 listing (Caramel). */
const FERRETTI_69_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    "The Ferretti 69, named Caramel, is a vessel that embodies the epitome of luxury and sophistication on the open waters. The Ferretti 69's sleek and timeless design captivates all who lay eyes upon it. Step aboard, and you will be transported into a world of refined opulence and indulgence. Every corner exudes elegance and comfort, with lavish furnishings, high-end materials, and a harmonious blend of aesthetics and functionality. Accommodating up to twelve guests, the Ferretti 69 features beautifully appointed cabins that provide an oasis of tranquility. Outside, the Ferretti 69 offers an array of alfresco areas to savor the beauty of the outdoors. Powered by cutting-edge technology, the Ferretti 69 delivers exceptional performance and a smooth cruising experience. Its advanced engineering ensures stability and efficiency, while its powerful engines allow for swift and effortless navigation through the water. Immerse yourself in the world of unparalleled luxury, personalized service, and breathtaking adventures. Whether you seek a romantic getaway, a family vacation, or a corporate retreat, the Ferretti 69 promises an unparalleled charter experience that will surpass all expectations.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€4,700' },
    { label: 'Full Day', value: '€5,200' },
    { label: 'Overnight', value: 'Only with request' },
    { label: 'Weekly', value: 'N/A' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 2 twin' },
    { label: 'Passengers', value: '12' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Azimut Magellano 66 — source-aligned copy from diamantidesyachting.com Azimut Magellano 66 listing (2020 build). */
const AZIMUT_MAGELLANO_66_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    "Experience the epitome of comfort and spaciousness aboard the Azimut Magellano 66 yacht, meticulously crafted in 2020. With its expansive layout and versatile design, this magnificent vessel is perfectly suited for hosting memorable parties and events at sea. Featuring four opulent cabins, the Azimut Magellano 66 can comfortably accommodate up to 15 guests for day charters and 8 for overnight stays. Whether you're celebrating a special occasion or simply gathering with friends and family, this yacht provides an ideal setting for creating cherished memories on the water. Indulge in the luxury of the Azimut Magellano 66 as you sail the open sea, creating unforgettable moments with your loved ones.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€5,000' },
    { label: 'Full Day', value: '€5,800' },
    { label: 'Overnight', value: '€7,000' },
    { label: 'Weekly', value: 'Upon Request' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 2 twin' },
    { label: 'Passengers', value: '15' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Azimut 64 — source-aligned copy from diamantidesyachting.com Azimut 64 listing (2014 build). */
const AZIMUT_64_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    "Welcome to the Azimut 64 – a yacht available for charter that seamlessly combines elegance and comfort. Crafted in the year 2014, it offers three cozy cabins, two bathrooms, and graciously accommodates up to 12 guests for daily charters and up to 6 guests for overnight stays. The expansive flybridge provides panoramic views and boasts sunbeds for your ultimate relaxation. Whether you're entranced by the horizon from the flybridge, luxuriating in the sun on the comfortable sunbeds, or unwinding in the welcoming cabins, the Azimut 64 promises an unforgettable yachting experience.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€4,900' },
    { label: 'Full Day', value: '€5,300' },
    { label: 'Overnight', value: '€6,000' },
    { label: 'Weekly', value: 'Upon Request' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '3 Cabins' },
    { label: 'Passengers', value: '12' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Sunseeker 64 — source-aligned copy from diamantidesyachting.com Sunseeker 64 listing (Roslana). */
const SUNSEEKER_64_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Sunseeker 64, named Roslana, is the ideal yacht for those seeking a thrilling adventure. Reaching up to 35 knots, the impressive hull and deck design ensure a spectacular soft ride sensation. With a luxurious interior full of light and open-air exhilaration provided by the saloon roof, your guests are bound to be dazzled. This yacht is enhanced with sunbathing cushions, ensuring endless hours of sunbathing at the most sought after destinations. The Sunseeker 64 can pleasantly accommodate ten guests for day charters or four overnight in three extravagant cabins, elegantly decorated with your ultimate comfort and relaxation in mind. Enjoy the exhilarating experience of cruising or just grab a cocktail, put your feet up and marvel at the view during this one of a kind yacht charter.',
  ],
  charterRates: [
    { label: 'Half Day', value: '€3,500' },
    { label: 'Full Day', value: '€4,000' },
    { label: 'Overnight', value: '€4,500' },
    { label: 'Weekly', value: '€27,000*' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 1 twin' },
    { label: 'Passengers', value: '10' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Princess 62 — source-aligned copy from diamantidesyachting.com Princess 62 listing (Calypso Jazz). */
const PRINCESS_62_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    'The Princess 62, named Calypso Jazz, is designed for socializing and is one of the most extraordinarily elegant yachts of her size. Available only for day charters, Calypso Jazz combines high performance with incredible attention to detail. Featuring four immaculate cabins, a galley located on the main deck as well as a separate dining area and a large and comfortable aft saloon, this Princess 62 provides guests with the ideal space to entertain. The wide beam results in plenty of room in the aft cockpit and the flybridge. With comfortable seating areas, a separate sunbed as well as a wet bar with a barbeque, this yacht has been created to exude an environment that is modern, luxurious and elegant, perfect for a holiday getaway.',
  ],
  charterRates: [
    { label: 'Half Day', value: '€4,300' },
    { label: 'Full Day', value: '€4,750' },
    { label: 'Overnight', value: '€5,700' },
    { label: 'Weekly', value: 'N/A*' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 2 twin' },
    { label: 'Passengers', value: '12' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Sacs Strider 18 — source-aligned copy from diamantidesyachting.com Sacs Strider 18 listing. */
const SACS_STRIDER_18_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    "The Sacs Strider 18 is the perfect choice for an exhilarating day on the water. This amazing speedboat combines sleek design with powerful performance, making it ideal for daily charters. With its spacious and stylish exterior, there's plenty of room to relax and enjoy the sun in total comfort. Whether you're cruising along the coast or anchoring at a hidden beach, the Sacs Strider 18 offers both luxury and adventure, ensuring an unforgettable experience for all aboard.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€3,000' },
    { label: 'Full Day', value: '€3,400' },
    { label: 'Overnight', value: 'Upon Request' },
    { label: 'Weekly', value: 'Upon Request' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '1 Double, 1 Twin' },
    { label: 'Passengers', value: '8' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Cranchi Fifty 8 Fly — source-aligned copy from diamantidesyachting.com Cranchi Fifty 8 Fly listing (Synergia). */
const CRANCHI_FIFTY_8_FLY_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    "The Cranchi Fifty 8 Fly, named Synergia, is at its core a yacht designed for entertainment. At first glance, the Cranchi Fifty 8 Fly is your typical Riviera rocket with European styling and every luxury fabric and modern system you can imagine. Out on the water, however, you will discover its power, as it is one of only just a few boats in its LOA class that is offered with Volvo's IPS 800. Available only for day charters it can comfortably accommodate 10 passengers who will undoubtedly enjoy sipping their cocktails and tanning on the foredeck sunpad. The focal point of the Cranchi Fifty 8 Fly, though, is the flybridge, which features sun lounges forward and aft along with settees, modern furniture, a wet bar as well as a grill for those times when you just want to enjoy a fancy dinner under the moonlight. With two double and one twin bed, perfect for a mid afternoon nap, you will be perfectly rested to fully enjoy the beautiful Cyprus coastline.",
  ],
  charterRates: [
    { label: 'Half Day', value: '€3,500' },
    { label: 'Full Day', value: '€4,000' },
    { label: 'Overnight', value: '€4,500' },
    { label: 'Weekly', value: '€27,000' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 1 twin' },
    { label: 'Passengers', value: '10' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Ferretti 550 — source-aligned copy from diamantidesyachting.com Ferretti 550 listing (LA CALMA). */
const FERRETTI_550_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    `The Ferretti 550, the Italian masterpiece named "LA CALMA" , as its name suggests, guarantees the much needed tranquility a charterer is looking for when on an escape at the foot of the busy and vibrant Limassol city. The Ferretti 550 is an exquisite yacht that redefines luxury on the water, offering an unparalleled yachting experience. With its elegant design, meticulous craftsmanship, and exceptional performance, this vessel is a masterpiece in its own right. From the lavish living spaces to the state-of-the-art galley and luxurious accommodations, every aspect has been thoughtfully designed to cater to discerning tastes. Powered by top-tier engines and equipped with advanced navigation systems, the Ferretti 550 delivers an exhilarating on-water experience. Featuring 3 cabins – 1 double and 2 twin, each with their own en-suite facility, it is the perfect family yacht, ideal for 6 guests' overnight stay. Its spacious flybridge, panoramic views, and inviting outdoor areas provide the perfect backdrop for relaxation and entertainment. Cease the opportunity to sunbathe in privacy on the comfortable exterior sundeck or enjoy a quiet dinner at its comfortable dining area at the background of the beautiful Limassol skyline!`,
  ],
  charterRates: [
    { label: 'Half Day', value: '€3,700' },
    { label: 'Full Day', value: '€4,000' },
    { label: 'Overnight', value: '€4,500' },
    { label: 'Weekly', value: '€27,000*' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '1 double, 2 twin' },
    { label: 'Passengers', value: '10' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

/** Beneteau Monte Carlo 50 Fly — source-aligned copy from diamantidesyachting.com beneteau-monte-carlo-50 listing. */
const BENETEAU_MONTE_CARLO_50_FLY_DETAIL: YachtDetailPageContent = {
  paragraphs: [
    `Welcome aboard the Beneteau Monte Carlo Flybridge 50, a luxurious yacht built in 2010 and available for day charters in Limassol. With a striking red hull, this yacht is sure to turn heads as you cruise along the Mediterranean coastline. Step onto the spacious flybridge and take in the panoramic views from above. Enjoy a refreshing drink and soak up the sun on the comfortable seating area, or relax in the shade of the bimini. Inside, the Monte Carlo's elegant interior is finished in high-quality materials and designed for comfort. The salon features a comfortable seating area, a dining table, and a fully equipped galley. Below deck, you'll find three stylish cabins with ensuite bathrooms, providing plenty of space for you and your guests to relax in privacy. Whether you want to spend the day swimming in the crystal-clear waters of the Mediterranean, exploring hidden coves and beaches, or simply cruising along the coast, the Beneteau Monte Carlo Flybridge 50 is the perfect yacht for your day charter in Limassol. Contact us today to book your unforgettable yacht charter experience.`,
  ],
  charterRates: [
    { label: 'Half Day', value: '€2,300' },
    { label: 'Full Day', value: '€2,800' },
    { label: 'Overnight', value: 'N/A' },
    { label: 'Weekly', value: 'N/A' },
  ],
  vesselSpecs: [
    { label: 'Accommodation', value: '2 double, 1 twin' },
    { label: 'Passengers', value: '10' },
    { label: 'Home port', value: 'Limassol' },
  ],
  ratesFootnote:
    '*Plus 35% APA. Fuel for day charters in the same city as the home port is included in the charter price. For fuel prices in other locations, please contact one of our charter experts.',
}

function buildCharterForFleetName(name: (typeof DIAMANTIDES_STYLE_FLEET_NAMES)[number]): YachtCharter {
  const cardImage = fleetCardImage(name)
  const base: YachtCharter = {
    id: slugifyFleetId(name),
    name,
    type: 'Motor Yacht',
    location: 'Limassol Marina',
    guests: guestsForVessel(name),
    price4h: 'On request',
    price6h: 'On request',
    priceFullDay: 'On request',
    image: cardImage,
    gallery: [cardImage],
    description: descriptionForVessel(name),
    included: [...DEFAULT_INCLUDED],
    durations: ['4 hours', '6 hours', 'Full day'],
  }
  if (name === 'Princess 30M') {
    return { ...base, detailPage: PRINCESS_30M_DETAIL }
  }
  if (name === 'Azimut 27 Grande') {
    return { ...base, detailPage: AZIMUT_27_GRANDE_DETAIL }
  }
  if (name === 'Princess 88') {
    return { ...base, detailPage: PRINCESS_88_DETAIL }
  }
  if (name === 'Falcon 86') {
    return { ...base, detailPage: FALCON_86_DETAIL }
  }
  if (name === 'Fairline 75') {
    return { ...base, guests: 15, detailPage: FAIRLINE_75_DETAIL }
  }
  if (name === 'Ferretti 69') {
    return { ...base, detailPage: FERRETTI_69_DETAIL }
  }
  if (name === 'Ferretti 550') {
    return { ...base, guests: 10, detailPage: FERRETTI_550_DETAIL }
  }
  if (name === 'Azimut Magellano 66') {
    return { ...base, guests: 15, detailPage: AZIMUT_MAGELLANO_66_DETAIL }
  }
  if (name === 'Azimut 64') {
    return { ...base, detailPage: AZIMUT_64_DETAIL }
  }
  if (name === 'Sunseeker 64') {
    return { ...base, guests: 10, detailPage: SUNSEEKER_64_DETAIL }
  }
  if (name === 'Princess 62') {
    return { ...base, detailPage: PRINCESS_62_DETAIL }
  }
  if (name === 'Sacs Strider 18') {
    return { ...base, guests: 8, detailPage: SACS_STRIDER_18_DETAIL }
  }
  if (name === 'Cranchi Fifty 8 Fly') {
    return { ...base, guests: 10, detailPage: CRANCHI_FIFTY_8_FLY_DETAIL }
  }
  if (name === 'Beneteau Monte Carlo 50 Fly') {
    return { ...base, guests: 10, detailPage: BENETEAU_MONTE_CARLO_50_FLY_DETAIL }
  }
  return base
}

/** Resolved copy + tables for `/services/yacht-charters/:id` (falls back from fleet card fields). */
export function getYachtDetailContent(yacht: YachtCharter): YachtDetailPageContent {
  if (yacht.detailPage) return yacht.detailPage
  return {
    paragraphs: [yacht.description],
    charterRates: [
      { label: '4 hours', value: yacht.price4h },
      { label: '6 hours', value: yacht.price6h },
      { label: 'Full day', value: yacht.priceFullDay },
    ],
    vesselSpecs: [
      { label: 'Guests', value: `Up to ${yacht.guests}` },
      { label: 'Home port', value: yacht.location },
      { label: 'Vessel type', value: yacht.type },
    ],
  }
}

export function findYachtCharterById(id: string): YachtCharter | undefined {
  return yachtFleet.find((y) => y.id === id)
}

export const YACHT_TYPES: YachtType[] = ['Motor Yacht', 'Sailing Yacht', 'Catamaran']

export const YACHT_LOCATIONS = [
  'Limassol Marina',
  'Larnaca Marina',
  'Ayia Napa',
  'Protaras',
  'Latchi',
  'Paphos Harbour',
] as const

export type YachtLocation = (typeof YACHT_LOCATIONS)[number]

export const yachtChartersHero = {
  title: 'Luxury Yacht Charters in Cyprus',
  subtitle:
    'Private cruises, catamaran experiences, and bespoke sea journeys across Cyprus',
}

export type YachtCharterIntroParagraph = string | { text: string; emphasis?: boolean }

/** Editorial introduction — shown below the hero on the yacht charters page */
export const yachtCharterIntro: {
  title: string
  lead: string
  paragraphs: YachtCharterIntroParagraph[]
} = {
  title: 'Luxury Yacht Charter Experiences',
  lead: 'Step into a world where elegance meets freedom at sea.',
  paragraphs: [
    'Our luxury yacht charter services are designed for those who seek more than just a journey — they seek an experience. From serene day escapes along the breathtaking coastline of Cyprus to unforgettable sunset celebrations and exclusive private events, every moment on board is crafted with precision, comfort and sophistication.',
    'Whether you dream of swimming in crystal-clear waters, discovering hidden beaches, enjoying fine dining under the stars or hosting a stylish private gathering, our fleet offers the perfect setting to transform your vision into reality. Each charter can be fully tailored to your preferences, allowing you to create a truly personalised maritime experience.',
    'Our yachts are available for romantic getaways, birthday celebrations, bachelor and hen parties, corporate events, weddings, christenings and prestigious social occasions. With curated entertainment options, premium hospitality and exceptional onboard service, we ensure that every detail contributes to a seamless and memorable journey.',
    {
      text: 'Safety is not simply a requirement — it is the foundation of everything we do. Our professional crews, meticulously maintained yachts and commitment to the highest operational standards allow you to relax completely and enjoy the sea with confidence.',
      emphasis: true,
    },
    'From intimate dinners for two to vibrant celebrations beneath the full moon, your time on board becomes more than an event — it becomes a story worth remembering.',
  ],
}

export const yachtFleet: YachtCharter[] = DIAMANTIDES_STYLE_FLEET_NAMES.map((name) =>
  buildCharterForFleetName(name),
)

export type CharterHub = {
  title: string
  text: string
  /** Optional cover under `public/` — omit until assets are ready */
  image?: string
  imageAlt?: string
}

export const charteringCyprus = {
  title: 'Chartering a Yacht in Cyprus',
  intro:
    'From world-class marinas to sheltered bays, Cyprus offers one of the Mediterranean’s most rewarding coastlines — best experienced from the water, on your schedule.',
  hubs: [
    {
      title: 'Limassol Marina',
      text: 'A flagship superyacht address with refined dining and provisioning steps from your berth — ideal for corporate hospitality and weekend escapes.',
    },
    {
      title: 'Larnaca Marina',
      text: 'Straightforward access and open-sea reach toward the east coast — flexible for longer coastal passages and multi-stop days.',
    },
    {
      title: 'Ayia Napa & Protaras',
      text: 'Iconic blues, sea caves, and postcard beaches — perfect for swim stops, DJ-led sunsets, and celebration charters.',
    },
    {
      title: 'Latchi',
      text: 'Gateway to the Akamas — dramatic cliffs, hidden coves, and some of the island’s clearest water.',
    },
    {
      title: 'Paphos Harbour',
      text: 'Historic coastline and golden-hour light — tailored for romantic cruises and intimate gatherings.',
    },
  ] as CharterHub[],
  closing:
    'Explore crystal-clear waters, hidden bays, beaches, and coastal villages. Plan sunset cruises, private events, birthdays, corporate outings, or a quiet escape for two — every itinerary is storyboarded with you.',
}

export const whyChooseUs = {
  title: 'Why Choose Us',
  items: [
    {
      title: 'Curated fleet',
      text: 'Every vessel is vetted for maintenance, crew calibre, and onboard comfort — no surprises at the dock.',
    },
    {
      title: 'One concierge line',
      text: 'Provisioning, timing, transfers, and special requests flow through a single point of contact.',
    },
    {
      title: 'Discretion by default',
      text: 'From principal travel to high-profile celebrations, protocols match the sensitivity of the mission.',
    },
    {
      title: 'Transparent pricing',
      text: 'Clear structure for hours, crew, and inclusions — upgrades and catering quoted upfront.',
    },
  ],
}

export const popularExperiences = {
  title: 'Popular Experiences',
  items: [
    'Sunset champagne cruise',
    'Full-day Akamas & Blue Lagoon',
    'Family catamaran with swim stops',
    'Proposal & anniversary at sea',
    'Corporate team afternoon',
    'Birthday deck party with DJ',
  ],
}

export const privateEvents = {
  title: 'Private Events & Celebrations',
  text: 'Birthdays, proposals, anniversaries, pre-wedding parties, and executive hosting — we coordinate timing, catering partners, floral touches, photography referrals, and on-water ceremony logistics where required.',
}

export const yachtReviews = [
  {
    quote: 'Flawless from first call to disembarkation. The crew anticipated everything — our guests are still talking about the sunset.',
    name: 'Elena M.',
    context: 'Corporate hosting, Limassol',
  },
  {
    quote: 'The catamaran was immaculate and the route felt bespoke. Exactly the calm luxury we wanted for our anniversary.',
    name: 'James & Sarah K.',
    context: 'Private cruise, Protaras',
  },
  {
    quote: 'Professional, discreet, and beautifully organised. The perfect day on the water for our principals.',
    name: 'Private Office',
    context: 'Motor yacht charter',
  },
]

export const yachtFaq = [
  {
    q: 'What is included in the charter rate?',
    a: 'Typically captain/crew, standard fuel for agreed itinerary, safety equipment, and listed inclusions. Catering, premium beverages, extended hours, and special equipment are quoted separately.',
  },
  {
    q: 'Can we customise the route?',
    a: 'Yes — routes are planned around weather, time window, and your priorities (swim stops, quiet bays, sunset positioning).',
  },
  {
    q: 'How far in advance should we book?',
    a: 'Peak summer weekends fill early. For best selection, we recommend several weeks ahead — shorter notice may still be possible subject to fleet availability.',
  },
  {
    q: 'Do you arrange transfers and provisioning?',
    a: 'We coordinate ground transfers, champagne, cakes, floral, and approved catering partners — brief us once and we handle the choreography.',
  },
]
