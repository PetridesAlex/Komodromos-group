export type WeddingPackageLongContent = {
  title: string
  subtitle: string
  priceDisplay: string
  includes: string[]
  aboutTitle: string
  aboutCopy: string
  sections: Array<{
    title: string
    intro?: string
    items?: string[]
    groups?: Array<{
      title: string
      items: string[]
    }>
  }>
  importantNote: string
}

export const weddingBasicPackageContent: WeddingPackageLongContent = {
  title: '"BASIC" Wedding Package',
  subtitle: 'The Essentials for a Unique Wedding Experience in Cyprus',
  priceDisplay: 'EUR6,900',
  includes: [
    'Floral Design and Decoration',
    'Photography and Videography',
    'Wedding Invitations',
    'Wedding Favors and Cake',
    'Music Entertainment (DJ)',
    'Traditional Allamata (Violarides)',
    'Ground Fireworks',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'My Special Event in Cyprus works with carefully selected professionals, each highly experienced in wedding planning, ensuring top-quality services combined with excellent value.',
  sections: [
    {
      title: 'Floral Design and Decoration (Fresh Flowers)',
      intro:
        'All arrangements are created using fresh flowers such as roses, lisianthus, gerberas, chrysanthemums, gypsophila, seasonal flowers, eucalyptus, and greenery.',
      groups: [
        {
          title: 'Church Decoration',
          items: [
            '2 floral columns placed beside the couple',
            '10 floral aisle or chair arrangements',
            '4 flower stands at the church entrance',
            'Table with 30 rice/petal cones',
            'Bridal bouquet plus second bouquet for tossing',
            '10 boutonnieres',
            'Decoration of 2 wedding cars with ribbons',
          ],
        },
        {
          title: 'Reception Decoration',
          items: [
            'Transfer of floral columns to reception area',
            'Welcome aisle with flowers and candles',
            "Floral setup for couple's table",
            'Decoration of 10 guest tables',
          ],
        },
      ],
    },
    {
      title: 'Floral Design and Decoration (Mixed Flowers)',
      intro:
        'High-quality artificial flowers are used, with selected elements upgraded to fresh flowers where specified.',
      groups: [
        {
          title: 'Church Decoration',
          items: [
            '2 floral columns beside the couple',
            'Floral arch at the entrance',
            '2 decorative stands at entrance',
            'Bridal bouquet (fresh flowers)',
            'Second bouquet for tossing (fresh)',
            '10 boutonnieres (fresh)',
            '30 rice/petal cones (with real flowers)',
            '10 aisle arrangements',
            'Decoration of 2 cars with ribbons',
          ],
        },
        {
          title: 'Reception Decoration',
          items: [
            'Transfer of floral columns to reception',
            'Arch behind the couple',
            'Welcome aisle with 10 decorative stands',
            'Floral and candle setup for main table',
            'Decoration of 15 guest tables',
          ],
        },
      ],
    },
    {
      title: 'Photography and Videography',
      items: [
        'Full wedding day photo and video coverage',
        '3 albums (1 large plus 2 for parents)',
        'Full-length wedding video',
        'Highlight video',
        'Outdoor photoshoot',
        'Gift: 1 canvas',
        'Gift: 50 printed photos',
        'All files delivered in high-resolution on USB',
      ],
      groups: [
        {
          title: 'Optional Upgrades',
          items: [
            'Drone coverage (+EUR300)',
            'Extra photographer/videographer',
            'Same-day video',
            'Pre-wedding shoot',
          ],
        },
      ],
    },
    {
      title: 'Wedding Invitations',
      items: [
        'Up to 1000 invitation cards',
        'A5 size format',
        'Fully customizable design',
        'Printed on premium 350g Bristol paper',
        'Single-sided printing',
        'Envelopes not included',
      ],
      groups: [
        {
          title: 'Optional Upgrades',
          items: [
            'Envelopes',
            'Alternative paper types',
            'Custom invitation formats',
            'Embossed printing',
          ],
        },
      ],
    },
    {
      title: 'Wedding Favors and Cake',
      items: [
        'Up to 1000 sweet favors',
        'Various flavor options available',
        'Custom color wrapping',
        'Gift: 2-tier wedding cake',
        'Gift: fresh flower cake decoration',
      ],
      groups: [
        {
          title: 'Optional Desserts',
          items: [
            'Loukoumi varieties',
            'Alepiano pastries',
            'Roditiko sweets',
            'Brownies and praline options',
          ],
        },
      ],
    },
    {
      title: 'Music and DJ',
      items: [
        'Professional sound system',
        'Music from dinner until end of event',
        'No time restrictions',
      ],
      groups: [
        {
          title: 'Optional',
          items: ['Lighting and smoke effects (+EUR150)'],
        },
      ],
    },
    {
      title: 'Traditional Allamata',
      items: ['Traditional outfits for bride and groom'],
      groups: [
        {
          title: 'Optional',
          items: ['Bride escort to church (+EUR50)'],
        },
      ],
    },
    {
      title: 'Ground Fireworks',
      items: [
        '6 fountain fireworks',
        '45 seconds duration each',
        'Smokeless and odor-free',
        'Height: 3-4 meters',
        'Setup and removal included',
      ],
      groups: [
        {
          title: 'Optional Upgrade',
          items: ['Sparkler machines for key moments (+EUR150)'],
        },
      ],
    },
  ],
  importantNote:
    'Any additional decoration by third parties must be approved in advance. Custom upgrades and changes are available with price adjustments.',
}

export const weddingBasicPlusPackageContent: WeddingPackageLongContent = {
  title: '"BASIC PLUS+" Wedding Package',
  subtitle: 'Complete Wedding Experience with Premium Additions',
  priceDisplay: 'EUR8,950',
  includes: [
    'Floral Design and Decoration',
    'Photography and Videography',
    'Wedding Invitations',
    'Wedding Favors and Cake',
    'Music Entertainment (DJ)',
    'Traditional Allamata (Violarides)',
    'Sparkler Fireworks',
    'Wedding Day Coordination',
    'Groom Suit Package',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'My Special Event in Cyprus works with highly experienced professionals, carefully selected to deliver outstanding quality and excellent value.',
  sections: [
    {
      title: 'Floral Design and Decoration',
      intro:
        'Elegant floral styling using a combination of fresh flowers or mixed options, tailored to match your wedding theme and preferences.',
    },
    {
      title: 'Photography and Videography',
      items: [
        'Full wedding day photo and video coverage',
        '3 albums (1 main plus 2 for parents)',
        'Full wedding film plus highlight video',
        'Outdoor photoshoot session',
        'Gift: Canvas print',
        'Gift: 50 printed photos',
        'All media delivered in high-resolution on USB',
        'Drone coverage (weather permitting)',
      ],
    },
    {
      title: 'Wedding Invitations',
      items: [
        'Up to 1000 invitations',
        'A5 format with custom design',
        'Printed on premium 350g paper',
        'Single-sided printing',
      ],
    },
    {
      title: 'Wedding Favors and Cake',
      items: [
        'Up to 1000 sweet favors',
        'Multiple flavor options available',
        'Custom wrapping to match your theme',
        'Gift: 3-tier wedding cake',
        'Gift: fresh flower decoration for cake',
      ],
    },
    {
      title: 'Music and DJ',
      items: [
        'Professional DJ with full equipment',
        'Music coverage from dinner to party end',
        'No time limitations',
        'Dance floor lighting included',
        'Smoke machine included',
      ],
    },
    {
      title: 'Traditional Allamata',
      items: [
        'Traditional outfits for bride and groom',
        'Bride escort to the church',
      ],
    },
    {
      title: 'Sparkler Fireworks',
      items: [
        '4 sparkler machines for key moments',
        'Used at entrance, cake cutting, champagne and first dance',
        'Smokeless and odor-free',
        'Professional setup included',
      ],
    },
    {
      title: 'Wedding Day Coordination',
      items: [
        'Dedicated coordinator throughout the day',
        'Support during preparations',
        'Full coordination at church and reception',
        'Vendor and timeline management',
        'Supervision of all arrangements',
      ],
    },
    {
      title: 'Groom Suit Package',
      items: [
        'Complete suit set (jacket, trousers, vest)',
        'Shirt, tie or bow tie',
        'Belt, shoes and cufflinks',
      ],
    },
  ],
  importantNote:
    'Any additional services or custom requests can be arranged upon approval, with pricing adjusted according to your preferences.',
}

export const weddingClassicPackageContent: WeddingPackageLongContent = {
  title: '"CLASSIC" Wedding Package',
  subtitle: 'Everything You Need for a Dream Wedding in Cyprus',
  priceDisplay: 'EUR11,350',
  includes: [
    'Floral Design and Decoration',
    'Photography and Videography',
    'Wedding Invitations',
    'Wedding Favors and Cake',
    'Music Entertainment (DJ)',
    'Traditional Allamata (Violarides)',
    'Sparkler Fireworks',
    'Groom Suit Package',
    'Bridal Package',
    'Wedding Day Coordination',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'My Special Event in Cyprus partners with experienced and trusted professionals, each specializing in their field. Our team is carefully selected to ensure exceptional service quality combined with competitive pricing.',
  sections: [
    {
      title: 'Floral Design and Decoration',
      intro:
        'Elegant floral arrangements using premium fresh flowers such as roses, mini roses, lisianthus, hydrangeas, seasonal blooms, gypsophila, eucalyptus, greenery, and pampas grass where suitable.',
      groups: [
        {
          title: 'Church Decoration',
          items: [
            '2 floral columns placed beside the couple',
            '10 aisle or chair floral arrangements',
            '4 decorative flower stands at the entrance',
            'Table with 40 rice/petal cones for guests',
            'Bridal bouquet plus second bouquet for tossing',
            '10 boutonnieres',
            'Decoration of 2 wedding cars with ribbons and floral accents',
          ],
        },
        {
          title: 'Reception Decoration',
          items: [
            'Transfer of floral columns to reception greeting area',
            'Welcome aisle styling with flowers and candles',
            "Floral arrangement for the couple's table",
            'Decoration of 5 guest tables with premium centerpieces',
            'Decoration of 15 guest tables with elegant low arrangements',
            'Total styling for up to 20 guest tables',
          ],
        },
      ],
    },
    {
      title: 'Photography and Videography',
      items: [
        'Full wedding day coverage (photo and video)',
        '3 albums (1 premium plus 2 smaller copies)',
        'Full wedding film plus highlight video',
        'Outdoor photoshoot session',
        'Gift: Canvas print',
        'Gift: 50 printed photos',
        'All media delivered in high-resolution on USB',
      ],
      groups: [
        {
          title: 'Optional Upgrades',
          items: [
            'Drone coverage (+EUR300)',
            'Extra photographer or videographer',
            'Same-day video editing',
            'Pre-wedding video shoot',
          ],
        },
      ],
    },
    {
      title: 'Wedding Invitations',
      items: [
        'Up to 1000 invitations',
        'A5 format',
        'Fully customizable design',
        'Printed on premium 350g paper',
        'Single-sided printing',
      ],
      groups: [
        {
          title: 'Optional Upgrades',
          items: [
            'Envelopes',
            'Alternative materials or finishes',
            'Custom formats or embossed printing',
          ],
        },
      ],
    },
    {
      title: 'Wedding Favors and Cake',
      items: [
        'Up to 1000 sweet favors',
        'Wide selection of flavor options',
        'Custom wrapping to match your theme',
        'Gift: 3-tier wedding cake',
        'Gift: fresh flower cake decoration',
      ],
      groups: [
        {
          title: 'Optional Desserts',
          items: [
            'Loukoumi varieties',
            'Alepiano pastries',
            'Roditiko sweets',
            'Chocolate and praline desserts',
          ],
        },
      ],
    },
    {
      title: 'Music and DJ',
      items: [
        'Professional DJ with full sound system',
        'Music coverage from dinner until the end of the party',
        'No time restrictions',
        'Dance floor lighting included',
        'Smoke machine included',
      ],
    },
    {
      title: 'Traditional Allamata',
      items: ['Traditional outfits for bride and groom'],
      groups: [
        {
          title: 'Optional',
          items: ['Bride escort to the church (+EUR50)'],
        },
      ],
    },
    {
      title: 'Sparkler Fireworks',
      items: [
        '4 sparkler machines for multiple key moments',
        'Used at entrance, cake cutting, champagne and first dances',
        'Smokeless and odor-free',
        'Height reach: 3-4 meters',
        'Professional setup and removal included',
      ],
    },
    {
      title: 'Groom Suit Package',
      items: [
        'Complete suit set (jacket, trousers, vest)',
        'Shirt, tie or bow tie',
        'Belt, shoes and cufflinks',
      ],
      groups: [
        {
          title: 'Optional Upgrade',
          items: ['Upgrade to premium boutique suit (+EUR300)'],
        },
      ],
    },
    {
      title: 'Bridal Package',
      items: [
        'Wedding dress (included up to EUR2000 value)',
        'Veil',
        'Crowns (stefana)',
        'Personalized robe',
        'Decorated champagne glasses',
        'Ring box',
        'Stefana pillow (rental)',
        'Gift: 2 flower girl dresses (rental)',
      ],
    },
    {
      title: 'Wedding Day Coordination',
      items: [
        'Dedicated coordinator present throughout the entire day',
        'Support during bride and groom preparations',
        'Full coordination at church and reception',
        'Management of vendors and schedule',
        'Ensuring everything runs as planned',
        'Coordination of special moments and surprises',
      ],
    },
  ],
  importantNote:
    'Any additional decoration or third-party services must be approved in advance. Customizations and upgrades are available with price adjustments based on your preferences.',
}

export const weddingClassicPlusPackageContent: WeddingPackageLongContent = {
  title: '"CLASSIC PLUS+" Wedding Package',
  subtitle: 'The Ultimate Luxury Wedding Experience in Cyprus',
  priceDisplay: 'EUR17,350',
  includes: [
    'Floral Design and Decoration',
    'Photography and Videography',
    'Wedding Invitations',
    'Wedding Favors and Cake',
    'Live Band and DJ Entertainment',
    'Traditional Allamata (Violarides)',
    'Sparkler Fireworks',
    'Groom Suit Package',
    'Bridal Package',
    'Live Saxophone or Electric Violin',
    'Wedding Day Coordination',
    'Professional Lighting Setup',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'My Special Event in Cyprus brings together highly experienced professionals, each carefully selected to deliver exceptional quality services and a premium wedding experience tailored to your needs.',
  sections: [
    {
      title: 'Floral Design and Decoration',
      intro:
        'Luxury floral styling using fresh flowers such as roses, mini roses, lisianthus, hydrangeas, seasonal blooms, gypsophila, eucalyptus, greenery, and pampas grass when suitable.',
      groups: [
        {
          title: 'Church Decoration',
          items: [
            '2 floral columns placed beside the couple',
            'Floral arch at the church entrance',
            '10 aisle or chair arrangements',
            '4 decorative stands at the entrance',
            'Table with 40 rice/petal cones',
            'Bridal bouquet plus second bouquet',
            '10 boutonnieres',
            'Decoration of 2 wedding cars with ribbons and floral details',
          ],
        },
        {
          title: 'Reception Decoration',
          items: [
            'Personalized welcome sign or seating plan display',
            'Transfer of floral columns to reception greeting area',
            'Floral arch behind the couple',
            'Welcome aisle with flower arrangements and candles',
            "Floral setup for couple's table",
            'Decoration of 5 premium guest tables with elevated styling',
            'Decoration of 15 guest tables with elegant low arrangements',
            'Total styling for up to 20 tables',
          ],
        },
      ],
    },
    {
      title: 'Photography and Videography',
      items: [
        'Full-day photo and video coverage',
        '3 albums (1 main plus 2 copies)',
        'Complete wedding film plus highlight video',
        'Outdoor photoshoot session',
        'Gift: Canvas print',
        'Gift: 50 printed photos',
        'All media delivered in high-resolution on USB',
        'Drone footage included (weather permitting)',
      ],
    },
    {
      title: 'Wedding Invitations',
      items: [
        'Up to 1000 invitations',
        'A5 format',
        'Fully customizable design',
        'Printed on premium 350g paper',
        'Single-sided print',
      ],
    },
    {
      title: 'Wedding Favors and Cake',
      items: [
        'Up to 1000 sweet favors',
        'Wide selection of flavors',
        'Custom color wrapping',
        'Gift: 3-tier wedding cake',
        'Gift: fresh flower cake decoration',
      ],
      groups: [
        {
          title: 'Optional Upgrade',
          items: ['Live dessert setup (tart or mille-feuille station)'],
        },
      ],
    },
    {
      title: 'Live Band and DJ',
      items: [
        '6-piece live band (drums, keyboard, guitar/vocals, bouzouki, singers)',
        'Professional DJ',
        'Full sound system included',
        'Music from dinner until the end of the event',
      ],
    },
    {
      title: 'Professional Lighting',
      items: [
        '6m truss setup',
        'Beam, wash and retro lights',
        'Hazer machine',
        'Lighting technician',
        'Setup and transport included',
      ],
    },
    {
      title: 'Traditional Allamata',
      items: [
        'Traditional outfits for bride and groom',
        'Bride escort to the church',
      ],
    },
    {
      title: 'Sparkler Fireworks',
      items: [
        '4 sparkler machines used during key moments',
        'Smokeless and odor-free',
        'Height reach 3-4 meters',
        'Professional setup included',
      ],
    },
    {
      title: 'Groom Suit Package',
      items: [
        'Full suit set (jacket, trousers, vest)',
        '2 shirts',
        'Tie or bow tie',
        'Shoes, belt and cufflinks',
      ],
    },
    {
      title: 'Bridal Package',
      items: [
        'Wedding dress (included up to EUR2500)',
        'Veil and crowns (stefana)',
        'Personalized robe',
        'Decorated champagne glasses',
        'Ring box and stefana pillow',
        'Gift: 2 flower girl dresses',
      ],
    },
    {
      title: 'Live Saxophone or Electric Violin',
      items: [
        'Up to 2 hours live performance',
        'Ideal for cocktail or welcome reception',
      ],
    },
    {
      title: 'Wedding Day Coordination',
      items: [
        'Dedicated coordinator throughout the day',
        'Support during preparations',
        'Full coordination at ceremony and reception',
        'Vendor and timeline management',
        'Supervision of all details and special moments',
      ],
    },
  ],
  importantNote:
    'Any additional services or custom requests can be arranged upon approval, with pricing adjusted according to your preferences.',
}

export const weddingPremiumPackageContent: WeddingPackageLongContent = {
  title: '"PREMIUM" Wedding Package',
  subtitle: 'A Truly Luxury Wedding Experience in Cyprus',
  priceDisplay: 'EUR28,950',
  includes: [
    'Floral Design and Decoration',
    'Photography and Videography',
    'Wedding Invitations',
    'Wedding Favors and Cake',
    'Live Band and DJ',
    'Traditional Allamata (Violarides)',
    'Special Effects and Fireworks',
    'Wedding Day Coordination',
    'Photo Booth / 360 / Retro / Audio Guest Book',
    'Groom Suit Package',
    'Bridal Package',
    'Live Saxophone or Electric Violin',
    'Mobile Bar',
    'Wedding Content Creator',
    'Preparation Equipment Setup',
    'Professional Lighting',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'Our team consists of highly skilled and experienced professionals, carefully selected to deliver exceptional service quality and a luxury wedding experience tailored to your vision.',
  sections: [
    {
      title: 'Floral Design and Decoration',
      intro:
        'Premium floral arrangements using fresh flowers such as roses, peonies, hydrangeas, lisianthus, seasonal blooms, greenery, and pampas grass where suitable.',
      groups: [
        {
          title: 'Church Decoration',
          items: [
            '2 large and 2 smaller floral columns around the couple',
            'Double floral arches at the entrance',
            '10 aisle or chair arrangements',
            'Table with 50 rice/petal cones',
            'Bridal bouquet plus second bouquet',
            '10 boutonnieres',
            'Decoration of 2 wedding cars with floral accents',
          ],
        },
        {
          title: 'Reception Decoration',
          items: [
            'Personalized welcome mirror display',
            'Large seating plan boards',
            'Transfer of arches and floral elements to reception',
            'Decorative aisle with flowers and candles',
            'Luxury bridal table styling with chandeliers',
            'Decoration for up to 40-50 guest tables',
          ],
        },
      ],
    },
    {
      title: 'Photography and Videography',
      items: [
        '1 photographer and 2 cinematographers',
        'Full wedding coverage',
        'Drone footage (weather permitting)',
        'Cinematic film (45-60 min) or classic video',
        'Highlight trailer (~3 min)',
        'Premium album included',
        'Gift: pre or post wedding photoshoot',
        'Online gallery with private access',
      ],
    },
    {
      title: 'Wedding Content Creator',
      items: [
        '2-person content team',
        '400+ photos',
        '4 ready-to-use social media videos (Reels)',
        'Drone content included',
      ],
    },
    {
      title: 'Wedding Invitations',
      items: [
        'Up to 300 invitations',
        'Luxury embossed names (gold/silver/rose gold foil)',
        'A5 format with custom design',
        'Premium 350g paper',
        'Handmade envelopes included',
      ],
    },
    {
      title: 'Wedding Favors and Cake',
      items: [
        'Up to 500 premium favors',
        'Full selection of luxury sweets available',
        'Custom wrapping',
        '5-tier wedding cake or live dessert setup',
        'Fresh flower cake decoration',
      ],
    },
    {
      title: 'Live Band and DJ',
      items: [
        '6-piece live band',
        'Professional DJ',
        'Full sound system',
        'Music from dinner until end of event',
      ],
    },
    {
      title: 'Professional Lighting',
      items: [
        '8m truss setup',
        'Beam, wash and retro lighting',
        'Hazer machine',
        'Lighting technician included',
      ],
    },
    {
      title: 'Special Effects and Fireworks',
      items: [
        'Ground fireworks',
        'Sparkler machines for key moments',
        'Dry ice effect for dance floor',
        'Professional setup and handling',
      ],
    },
    {
      title: 'Live Saxophone or Electric Violin',
      items: [
        'Up to 2 hours live performance',
        'Perfect for cocktail or reception',
      ],
    },
    {
      title: 'Interactive Photo Experience',
      items: [
        'Choice of Photo Booth, 360, Retro or Audio Guest Book',
        '3 hours operation',
        'Unlimited photos/videos/messages',
        'Guest book and accessories included',
      ],
    },
    {
      title: 'Mobile Bar',
      items: [
        '4 cocktail options',
        'Professional bartenders',
        'Unlimited drinks',
        'Glassware service',
        'Up to 400 guests',
      ],
    },
    {
      title: 'Groom Suit Package',
      items: [
        'Designer suit collection included',
        '2 shirts, tie/bow tie',
        'Shoes, belt and cufflinks',
      ],
    },
    {
      title: 'Bridal Package',
      items: [
        'Full bridal collection included',
        'Custom-made dress option available',
        'Accessories and decor items included',
        'Gift: 2 flower girl dresses',
      ],
    },
    {
      title: 'Preparation Setup',
      items: [
        'Full equipment setup at both homes',
        'Tents, cooling systems, tables and chairs',
        'Fridge, stools and decorative elements',
      ],
    },
    {
      title: 'Wedding Day Coordination',
      items: [
        'Full-day coordinator support',
        'Vendor and timeline management',
        'Supervision of all arrangements',
        'Coordination of special moments',
      ],
    },
  ],
  importantNote:
    'Any additional services or custom requests can be arranged upon approval, with pricing adjusted according to your preferences.',
}

export const weddingCustomisedPackageContent: WeddingPackageLongContent = {
  title: '"CUSTOMISED" Wedding Package',
  subtitle:
    'Create a Wedding Package Designed Around Your Style, Needs, and Preferences',
  priceDisplay: 'Quoted on request',
  includes: [
    'Custom service architecture around your event goals',
    'Flexible vendor stack based on your priorities',
    'Personalized timeline and production flow',
    'Creative direction tailored to your style',
    'Budget-aware planning with transparent options',
    'One-to-one strategy meetings with our team',
  ],
  aboutTitle: 'About Our Team',
  aboutCopy:
    'At My Special Event in Cyprus, we work with carefully selected professionals who are highly experienced in their field and have many years of expertise in wedding planning across Cyprus. Every collaborator has been chosen after extensive market research, allowing us to offer exceptional quality together with excellent value.',
  sections: [
    {
      title: 'Custom Wedding Experience',
      intro:
        'This package gives you the flexibility to build your own wedding plan by selecting the services that best match your vision. It is the ideal option for couples who want a more personalized experience and prefer to choose exactly what they need for their special day.',
    },
    {
      title: 'How It Works',
      intro:
        'You may choose from all of the wedding services offered by My Special Event in Cyprus and combine them into a package tailored specifically to your event.',
      items: [
        'To create a custom wedding package, a minimum of 5 wedding services must be selected.',
      ],
    },
    {
      title: 'How to Create Your Package',
      intro:
        'To begin, simply contact our team to arrange an appointment at our office in Larnaca. During the meeting, we will discuss every detail of your wedding, explore your ideas, and build your package together based on your preferences, style, and budget.',
      items: [
        'Once your selections are finalized, we will prepare a personalized quotation for you.',
        'Alternatively, you may complete the contact form and our team will get in touch with you.',
      ],
    },
  ],
  importantNote:
    'Custom packages are created only when at least five wedding services are included. All services are subject to availability, and final pricing depends on the combination of options selected.',
}

export const weddingPackageLongContentById: Partial<Record<string, WeddingPackageLongContent>> = {
  basic: weddingBasicPackageContent,
  'basic-plus': weddingBasicPlusPackageContent,
  classic: weddingClassicPackageContent,
  'classic-plus': weddingClassicPlusPackageContent,
  premium: weddingPremiumPackageContent,
  customised: weddingCustomisedPackageContent,
}
