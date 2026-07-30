export type VipTourDestination = {
  id: string
  title: string
  /** Optional cover when assets are added under public/images/... */
  image?: string
  region: 'Paphos' | 'Limassol' | 'Larnaca' | 'Ayia Napa' | 'Island'
  blurb: string
}

/** VIP Tour Around the Island — one card per destination folder. */
export const vipTourDestinations: VipTourDestination[] = [
  {
    id: 'aggeloxtisti-kiti',
    title: 'Aggeloxtisti Kiti Village',
    region: 'Larnaca',
    blurb: 'Historic village charm and sacred heritage near Larnaca’s coastal plain.',
  },
  {
    id: 'aphrodites-rock',
    title: "Aphrodite's Rock (Petra tou Romiou)",
    region: 'Paphos',
    blurb: 'The legendary birthplace of Aphrodite — iconic cliffs and turquoise shore.',
  },
  {
    id: 'avakas-gorge',
    title: 'Avakas Gorge',
    region: 'Paphos',
    blurb: 'A dramatic limestone canyon walk through one of Cyprus’s wildest landscapes.',
  },
  {
    id: 'ayia-napa-nightlife',
    title: 'Ayia Napa Night Life',
    region: 'Ayia Napa',
    blurb: 'Exclusive evening energy — clubs, coastal evenings, and VIP nightlife access.',
  },
  {
    id: 'baths-of-adonis',
    title: 'Baths of Adonis',
    region: 'Paphos',
    blurb: 'Mythic pools and waterfall scenery framed by lush Akamas greenery.',
  },
  {
    id: 'camel-park-mazotos',
    title: 'Camel Park Mazotos',
    region: 'Larnaca',
    blurb: 'A memorable countryside experience with camel rides and family leisure.',
  },
  {
    id: 'limassol-marina',
    title: 'Limassol Marina',
    region: 'Limassol',
    blurb: 'Waterfront elegance — yachts, dining, and contemporary Mediterranean style.',
  },
  {
    id: 'limassol-medieval-castle',
    title: 'Limassol Medieval Castle Area',
    region: 'Limassol',
    blurb: 'Old town atmosphere around the medieval castle and harbour streets.',
  },
  {
    id: 'carob-mill-museum',
    title: 'Carob Mill Museum',
    region: 'Limassol',
    blurb: 'Industrial heritage and curated culture beside the old harbour quarter.',
  },
  {
    id: 'tombs-of-the-kings',
    title: 'Tombs of the Kings',
    region: 'Paphos',
    blurb: 'UNESCO necropolis of rock-cut tombs carved into the Paphos coastline.',
  },
  {
    id: 'medieval-castle-paphos',
    title: 'Medieval Castle of Paphos',
    region: 'Paphos',
    blurb: 'Harbour fortress views at sunset — history overlooking the Mediterranean.',
  },
  {
    id: 'baths-of-aphrodite',
    title: 'Baths of Aphrodite',
    region: 'Paphos',
    blurb: 'Legendary spring and Akamas gateway for refined nature excursions.',
  },
  {
    id: 'cape-greco',
    title: 'Cape Greco National Park',
    region: 'Ayia Napa',
    blurb: 'Clifftop trails, sea caves, and panoramic eastern-coast vistas.',
  },
  {
    id: 'nissi-beach',
    title: 'Nissi Beach',
    region: 'Ayia Napa',
    blurb: 'Cyprus’s signature turquoise bay — VIP beachside leisure and staging.',
  },
  {
    id: 'larnaca-salt-lake',
    title: 'Larnaca Salt Lake & Hala Sultan Tekke',
    region: 'Larnaca',
    blurb: 'Flamingo horizons and sacred lakeside architecture in one scenic circuit.',
  },
  {
    id: 'kamares-larnaca',
    title: 'Kamares Larnaca',
    region: 'Larnaca',
    blurb: 'The landmark aqueduct arches — a refined stop on the Larnaca route.',
  },
  {
    id: 'kolossi-castle',
    title: 'Kolossi Castle',
    region: 'Limassol',
    blurb: 'Crusader stronghold and Commandaria heritage in the Limassol countryside.',
  },
  {
    id: 'edro-iii-shipwreck',
    title: 'EDRO III Shipwreck',
    region: 'Paphos',
    blurb: 'Striking coastal wreck photography and dramatic shoreline stops.',
  },
  {
    id: 'apollo-hylates',
    title: 'Sanctuary of Apollo Hylates (Kourion)',
    region: 'Limassol',
    blurb: 'Ancient sanctuary ruins within the wider Kourion archaeological landscape.',
  },
  {
    id: 'saint-lazaros',
    title: 'Saint Lazaros',
    region: 'Larnaca',
    blurb: 'The Byzantine church of Saint Lazarus — a spiritual landmark in Larnaca.',
  },
]
