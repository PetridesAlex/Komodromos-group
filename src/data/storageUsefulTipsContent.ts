import { storageImage } from './storagePageImages'

const SMART_STORAGE_TIP_FILES = [
  'smart-storage/smarter-storage-1.webp',
  'smart-storage/smarter-storage-2.webp',
  'smart-storage/smarter-storage-3.webp',
  'smart-storage/smarter-storage-4.webp',
  'smart-storage/smarter-storage-6.webp',
  'smart-storage/smarter-storage-7.webp',
  'smart-storage/smarter-storage-8.webp',
  'smart-storage/smarter-storage-9.webp',
  'smart-storage/smarter-storage-10.webp',
  'smart-storage/smarter-storage-11.webp',
  'smart-storage/smarter-storage-12.webp',
  'smart-storage/smarter-storage-13.webp',
] as const

function smartStorageTipImage(index: number) {
  return storageImage(SMART_STORAGE_TIP_FILES[index] ?? SMART_STORAGE_TIP_FILES[0]!)
}

export type StorageUsefulTipSection =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'ul'; items: string[] }

export type StorageUsefulTip = {
  id: string
  title: string
  excerpt: string
  body: string[]
  sections?: StorageUsefulTipSection[]
  image: string
  imageAlt: string
}

export function storageTipDetailPath(tipId: string) {
  return `/services/storage/tips/${tipId}`
}

export function getStorageTipById(tipId: string | undefined) {
  if (!tipId) return undefined
  return STORAGE_USEFUL_TIPS.find((tip) => tip.id === tipId)
}

/** Paraphrased storage guidance — original copy for Storage2Rent */
export const STORAGE_USEFUL_TIPS: StorageUsefulTip[] = [
  {
    id: 'business-items',
    title: 'Moving Away for University: Practical Tips for a Smooth Transition',
    excerpt:
      'Starting university marks an exciting new chapter in life, bringing with it a sense of independence, opportunity, and new experiences. However, it also requires careful planning and organisation. With the right preparation, moving into student accommodation can be a much smoother and less stressful experience.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'Create a Plan',
      },
      {
        kind: 'p',
        text: 'Before you begin packing, divide your belongings into three categories:',
      },
      {
        kind: 'ul',
        items: [
          'Items you will take to your new accommodation.',
          'Items that will remain at the family home.',
          'Items that will be stored for future use.',
        ],
      },
      {
        kind: 'p',
        text: 'A well-organised approach will save time, reduce stress, and make the moving process far more manageable.',
      },
      {
        kind: 'h2',
        text: 'Organise Your Packing',
      },
      {
        kind: 'p',
        text: 'Use sturdy packing boxes and clearly label their contents. Keeping a simple checklist will help you monitor each stage of the move and ensure that nothing is overlooked.',
      },
      {
        kind: 'h2',
        text: 'Take Only What You Need',
      },
      {
        kind: 'p',
        text: 'Most student accommodation offers limited storage space. Focus on bringing items that you will genuinely use and avoid transporting unnecessary belongings.',
      },
      {
        kind: 'h2',
        text: 'Declutter Before You Move',
      },
      {
        kind: 'p',
        text: 'Moving provides the perfect opportunity to sort through your possessions and remove anything you no longer need. Clothing, books, furniture, and equipment can be donated, recycled, or stored for future use.',
      },
      {
        kind: 'h2',
        text: 'Store Valuable Belongings Safely',
      },
      {
        kind: 'p',
        text: 'Personal belongings, furniture, keepsakes, family heirlooms, and other valuable items that cannot be accommodated in your new residence can be safely stored in a Storage2Rent storage unit.',
      },
      {
        kind: 'p',
        text: 'Our modern facilities provide secure and flexible storage solutions for personal belongings, seasonal equipment, business inventory, and important records, ensuring they remain in excellent condition for as long as required.',
      },
      {
        kind: 'p',
        text: 'For added peace of mind, you can also determine who has access to your storage unit, giving you complete control over your possessions at all times.',
      },
      {
        kind: 'h2',
        text: 'Begin Your New Journey with Confidence',
      },
      {
        kind: 'p',
        text: 'With careful planning and the right storage solution, the transition to university life becomes significantly easier and more enjoyable. You can focus on settling into your new routine, knowing that your belongings are safe, secure, and readily available whenever you need them.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Secure and flexible storage solutions for students, families, and every new beginning.',
      },
    ],
    image: smartStorageTipImage(0),
    imageAlt: 'Student storage and university move preparation at Storage2Rent',
  },
  {
    id: 'flexible-storage',
    title: 'Create a More Sustainable and Organised Living Space',
    excerpt:
      'At Storage2Rent, we believe that a well-organised home can also contribute to a more sustainable way of life. Small changes to our daily habits can significantly reduce our environmental impact while creating a healthier and more comfortable living environment.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'Choose Environmentally Friendly Products',
      },
      {
        kind: 'p',
        text: 'Opt for natural personal care products, eco-friendly cleaning solutions, and biodegradable detergents whenever possible. These choices help reduce environmental pollution while creating a healthier home for you and your family.',
      },
      {
        kind: 'h2',
        text: 'Reduce Energy Consumption',
      },
      {
        kind: 'p',
        text: 'Using energy-efficient appliances and avoiding unnecessary energy usage can significantly lower household energy consumption. Even simple habits, such as setting your refrigerator to the correct temperature and limiting the use of electrical devices when not needed, can make a meaningful difference.',
      },
      {
        kind: 'h2',
        text: 'Make the Most of Natural Light',
      },
      {
        kind: 'p',
        text: 'Open curtains and blinds during the day to maximise natural daylight and reduce reliance on artificial lighting. Proper shading and insulation can also help maintain a comfortable indoor temperature throughout the year, reducing heating and cooling demands.',
      },
      {
        kind: 'h2',
        text: 'Minimise Water Waste',
      },
      {
        kind: 'p',
        text: 'Installing water-saving devices and adopting more responsible water-use habits can play a vital role in conserving one of our planet’s most valuable natural resources.',
      },
      {
        kind: 'h2',
        text: 'Keep Your Space Organised',
      },
      {
        kind: 'p',
        text: 'Seasonal items and belongings that are only used occasionally do not need to occupy valuable space in your home. Storage2Rent’s secure storage units provide a practical and reliable solution for storing furniture, equipment, business inventory, and personal possessions, helping you maintain a more organised and functional living environment.',
      },
      {
        kind: 'h2',
        text: 'Small Changes, Lasting Benefits',
      },
      {
        kind: 'p',
        text: 'The choices we make every day can have a significant positive impact on the environment. By managing resources responsibly and keeping our living spaces organised, we contribute to a more sustainable, efficient, and enjoyable future for everyone.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Smart storage solutions for a more organised, functional, and sustainable lifestyle.',
      },
    ],
    image: smartStorageTipImage(1),
    imageAlt: 'Sustainable and organised living with Storage2Rent',
  },
  {
    id: 'tailored-plans',
    title: 'Flexible Storage Solutions for Students',
    excerpt:
      'Student life brings exciting new experiences, but it often comes with limited living space. Whether you are moving away for university or temporarily returning to your family home, having the right storage solution can make everyday life far more convenient. At Storage2Rent, we provide secure and affordable storage solutions tailored to the needs of students and young professionals.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'Store What You Don’t Need Every Day',
      },
      {
        kind: 'p',
        text: 'Clothing, books, furniture, sports equipment, and personal belongings can quickly take up valuable space. Storage2Rent’s storage units allow you to keep your possessions safe, organised, and easily accessible whenever you need them.',
      },
      {
        kind: 'h2',
        text: 'Flexible Space to Suit Your Needs',
      },
      {
        kind: 'p',
        text: 'As your requirements change, you can choose the storage unit size that best suits you, ensuring that you only pay for the space you genuinely need.',
      },
      {
        kind: 'h2',
        text: 'Ideal for Projects and Equipment',
      },
      {
        kind: 'p',
        text: 'From architectural models and creative projects to study materials and specialist equipment, our units provide a secure and organised environment for storing valuable items.',
      },
      {
        kind: 'h2',
        text: 'Transparent Pricing',
      },
      {
        kind: 'p',
        text: 'We offer clear and straightforward pricing with no hidden charges, allowing you to know exactly what you are paying for from the outset.',
      },
      {
        kind: 'h2',
        text: 'Security and Protection',
      },
      {
        kind: 'p',
        text: 'Our facilities are equipped with advanced CCTV surveillance, controlled access systems, and modern security measures to ensure maximum protection for your personal belongings.',
      },
      {
        kind: 'h2',
        text: 'Packing Materials Available',
      },
      {
        kind: 'p',
        text: 'We supply cardboard boxes, bubble wrap, protective covers, stretch film, and all the essential packing materials required for safe transportation and storage.',
      },
      {
        kind: 'h2',
        text: 'More Space, Less Stress',
      },
      {
        kind: 'p',
        text: 'With Storage2Rent’s flexible storage solutions, you can enjoy student life without worrying about space limitations or the safety of your belongings.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Secure and flexible storage solutions for students, young professionals, and every new beginning.',
      },
    ],
    image: smartStorageTipImage(2),
    imageAlt: 'Flexible student storage solutions at Storage2Rent',
  },
  {
    id: 'clothes-long-term',
    title: 'How to Organise Your Wardrobe Effectively',
    excerpt:
      'Many people assume they need more storage space when, in reality, they simply need better organisation. With a few practical steps, you can maximise your wardrobe space and keep your clothing and accessories neatly arranged at all times.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'Start with a Clear-Out',
      },
      {
        kind: 'p',
        text: 'Empty your wardrobe completely and give it a thorough clean. This is the perfect opportunity to remove clothing and items you no longer use, creating valuable additional space.',
      },
      {
        kind: 'h2',
        text: 'Organise Your Clothing',
      },
      {
        kind: 'p',
        text: 'Sort your clothes by season, purpose, or colour. This will make it easier to find what you need while helping you maintain a more organised daily routine.',
      },
      {
        kind: 'h2',
        text: 'Choose the Right Hangers',
      },
      {
        kind: 'p',
        text: 'Quality hangers help maintain the shape of your clothing while creating a cleaner and more uniform appearance. Consider using matching hangers for a more organised and visually appealing wardrobe.',
      },
      {
        kind: 'h2',
        text: 'Make Use of Every Available Space',
      },
      {
        kind: 'p',
        text: 'Keep everyday clothing within easy reach and move seasonal items to higher shelves or storage boxes. Additional organisers, shelf dividers, and hanging accessories can significantly increase your wardrobe’s storage capacity.',
      },
      {
        kind: 'h2',
        text: 'Organise Your Accessories',
      },
      {
        kind: 'p',
        text: 'Belts, ties, handbags, jewellery, and other accessories can be neatly arranged using dedicated organisers, hooks, and drawer dividers, helping you save both time and space.',
      },
      {
        kind: 'h2',
        text: 'When You Need Extra Space',
      },
      {
        kind: 'p',
        text: 'Seasonal clothing, suitcases, and items that are only used occasionally can be safely stored in a Storage2Rent unit, allowing you to keep your home organised without parting with belongings that matter to you.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — More space, better organisation, and secure storage solutions for every requirement.',
      },
    ],
    image: smartStorageTipImage(3),
    imageAlt: 'Wardrobe organisation and secure clothing storage at Storage2Rent',
  },
  {
    id: 'office-move',
    title: 'Smart Ways to Store Your Sports Equipment Properly',
    excerpt:
      'Sports equipment often represents a significant investment, both financially and personally. Whether you own bicycles, gym equipment, water sports gear, racquets, or valuable sports memorabilia, proper storage is essential for preserving their condition and keeping your space organised. Here are three practical ways to protect your equipment while making the most of your available space.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: '1. Keep Only the Equipment You Actually Use',
      },
      {
        kind: 'p',
        text: 'Before organising your equipment, take some time to assess what you genuinely need. Many people accumulate sporting equipment that is no longer used, either because their interests have changed or because the equipment has been replaced with newer alternatives.',
      },
      {
        kind: 'p',
        text: 'Separate the items you still use from those you no longer need. Consider donating, selling, or recycling unused equipment. This simple step can significantly reduce the amount of storage space required while helping you maintain a more organised environment.',
      },
      {
        kind: 'h2',
        text: '2. Organise Your Equipment Properly',
      },
      {
        kind: 'p',
        text: 'A well-organised storage system makes everyday life easier and allows you to find what you need quickly and efficiently. Store frequently used items in easily accessible locations, while seasonal equipment can be placed in less accessible areas.',
      },
      {
        kind: 'p',
        text: 'For even better organisation:',
      },
      {
        kind: 'ul',
        items: [
          'Label boxes and storage containers clearly.',
          'Store balls and smaller accessories in dedicated bags or containers.',
          'Keep racquets, clubs, and similar equipment stored upright where possible.',
          'Avoid placing heavy items on top of delicate equipment.',
          'Organise equipment by sport or season.',
        ],
      },
      {
        kind: 'p',
        text: 'Proper organisation not only protects your equipment but also saves valuable time whenever you need it.',
      },
      {
        kind: 'h2',
        text: '3. Protect Your Memorabilia and Collectibles',
      },
      {
        kind: 'p',
        text: 'For many sports enthusiasts, memorabilia can be just as valuable as the equipment itself. Medals, trophies, signed shirts, autographed balls, trading cards, and other collectibles require special care during storage.',
      },
      {
        kind: 'p',
        text: 'To ensure their protection:',
      },
      {
        kind: 'ul',
        items: [
          'Use durable storage boxes.',
          'Add protective materials such as bubble wrap or foam padding.',
          'Store delicate items in waterproof containers.',
          'Clearly label boxes containing fragile contents.',
        ],
      },
      {
        kind: 'p',
        text: 'These simple precautions will help preserve your treasured memories and collectibles in excellent condition for many years to come.',
      },
      {
        kind: 'h2',
        text: 'Secure Storage for Equipment and Memories',
      },
      {
        kind: 'p',
        text: 'Effective storage is not simply about saving space—it is also about protecting your investment. Moisture, dust, and unsuitable storage conditions can cause significant damage to sports equipment and valuable collectibles.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent’s modern storage facilities provide a secure, clean, and professionally managed environment for storing sports equipment, seasonal items, personal collections, and valuable belongings, with convenient access whenever required.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — The ideal solution for the secure storage of sports equipment, collectibles, and personal belongings throughout the year.',
      },
    ],
    image: smartStorageTipImage(4),
    imageAlt: 'Secure sports equipment storage at Storage2Rent',
  },
  {
    id: 'home-space',
    title: 'Smart Tips for Safe and Efficient Storage',
    excerpt:
      'Proper storage does more than simply save space. It helps protect your belongings, keeps your home organised, and makes it easier to find what you need when you need it. Here are ten practical tips to help you store your items more safely and efficiently.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: '1. Choose Quality Packing Materials',
      },
      {
        kind: 'p',
        text: 'Use sturdy boxes, protective wrapping materials, and strong packing tape to ensure maximum protection for your belongings.',
      },
      {
        kind: 'h2',
        text: '2. Use the Right Box Size',
      },
      {
        kind: 'p',
        text: 'Heavy items should be packed in smaller boxes, while lighter items can be placed in larger boxes for easier handling and transportation.',
      },
      {
        kind: 'h2',
        text: '3. Protect Fragile Items',
      },
      {
        kind: 'p',
        text: 'Glassware, ceramics, collectibles, and other delicate belongings should be individually wrapped and clearly labelled as fragile.',
      },
      {
        kind: 'h2',
        text: '4. Store Items Strategically',
      },
      {
        kind: 'p',
        text: 'Items used less frequently can be stored towards the back of your unit, while everyday essentials should remain easily accessible.',
      },
      {
        kind: 'h2',
        text: '5. Create an Organised Labelling System',
      },
      {
        kind: 'p',
        text: 'Label all boxes clearly and organise them by room, category, or purpose to make locating items quick and effortless.',
      },
      {
        kind: 'h2',
        text: '6. Keep Similar Items Together',
      },
      {
        kind: 'p',
        text: 'Grouping related items simplifies organisation and significantly reduces the time spent searching for specific belongings.',
      },
      {
        kind: 'h2',
        text: '7. Avoid Overloading Boxes',
      },
      {
        kind: 'p',
        text: 'Excessively heavy boxes are more difficult to move and increase the risk of damage to both the contents and the packaging.',
      },
      {
        kind: 'h2',
        text: '8. Make Use of Vertical Space',
      },
      {
        kind: 'p',
        text: 'Proper stacking techniques and the use of shelving can greatly increase the capacity of your storage space.',
      },
      {
        kind: 'h2',
        text: '9. Clean Items Before Storage',
      },
      {
        kind: 'p',
        text: 'Clothing, furniture, and appliances should always be cleaned before storage to help preserve their condition and prevent unpleasant odours or damage.',
      },
      {
        kind: 'h2',
        text: '10. Choose a Secure Storage Facility',
      },
      {
        kind: 'p',
        text: 'The quality of your storage environment is just as important as proper packing. Select a facility with modern security systems and suitable storage conditions to ensure the best protection for your belongings.',
      },
      {
        kind: 'h2',
        text: 'Store with Confidence',
      },
      {
        kind: 'p',
        text: 'Storage2Rent’s modern storage units provide secure, clean, and flexible storage solutions for personal belongings, furniture, seasonal items, business equipment, and much more.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — The smart way to create more space while keeping your belongings safe, organised, and easily accessible.',
      },
    ],
    image: smartStorageTipImage(5),
    imageAlt: 'Safe and efficient storage solutions at Storage2Rent',
  },
  {
    id: 'packing-furniture',
    title: 'Changing Seasons? How to Store Your Clothes Properly',
    excerpt:
      'A change of season is the perfect opportunity to organise your wardrobe and free up valuable space in your home. With the right storage methods, your clothing can remain protected and in excellent condition until it is needed again.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: '1. Store Clothes Clean',
      },
      {
        kind: 'p',
        text: 'Before putting seasonal clothing into storage, ensure that all garments are clean and completely dry. Stains, moisture, and residue can cause damage, mould, or unpleasant odours during storage.',
      },
      {
        kind: 'h2',
        text: '2. Avoid Excessive Compression',
      },
      {
        kind: 'p',
        text: 'Vacuum storage bags can save space, but they are not always ideal for long-term storage. Delicate fabrics maintain their quality better when they are not compressed excessively.',
      },
      {
        kind: 'h2',
        text: '3. Use Suitable Storage Containers',
      },
      {
        kind: 'p',
        text: 'Choose durable storage boxes or containers with secure lids to protect your clothing from dust and moisture. Organising garments by season or category will make them easier to locate later.',
      },
      {
        kind: 'h2',
        text: '4. Protect Fabrics Naturally',
      },
      {
        kind: 'p',
        text: 'Cedar blocks and scented sachets can help protect clothing from insects while keeping fabrics fresh and pleasant-smelling for extended periods.',
      },
      {
        kind: 'h2',
        text: '5. Consider Professional Storage',
      },
      {
        kind: 'p',
        text: 'When space at home is limited, Storage2Rent’s storage units provide a safe and practical solution for clothing, linens, and seasonal belongings, offering high levels of security and convenient access.',
      },
      {
        kind: 'h2',
        text: 'More Space, Better Organisation',
      },
      {
        kind: 'p',
        text: 'With a little preparation and the right storage solution, you can keep your clothing in excellent condition while enjoying a more organised and clutter-free home throughout the year.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Secure and flexible storage solutions for every season and every storage requirement.',
      },
    ],
    image: smartStorageTipImage(6),
    imageAlt: 'Seasonal clothing storage at Storage2Rent',
  },
  {
    id: 'container-vs-warehouse',
    title: 'Moving Home? Temporary Storage Is the Perfect Solution',
    excerpt:
      'Moving can be a demanding and stressful process, particularly when your new home or office is not yet ready. In such situations, temporary storage provides the flexibility and peace of mind you need.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'When You Need Extra Space',
      },
      {
        kind: 'p',
        text: 'Temporary storage is the ideal solution when:',
      },
      {
        kind: 'ul',
        items: [
          'Your new property has not yet been completed or handed over.',
          'You are carrying out renovation or refurbishment works.',
          'You are relocating to another city or country.',
          'You need additional time to organise your new space.',
          'Your new property offers limited storage capacity.',
        ],
      },
      {
        kind: 'h2',
        text: 'Secure Storage for Every Requirement',
      },
      {
        kind: 'p',
        text: 'Storage2Rent provides modern storage solutions for:',
      },
      {
        kind: 'ul',
        items: [
          'Furniture and household contents',
          'Electrical appliances',
          'Clothing and personal belongings',
          'Books and archives',
          'Sports and business equipment',
          'Seasonal and valuable items',
        ],
      },
      {
        kind: 'p',
        text: 'Whether you need space for a few boxes or the entire contents of a property, we have a storage solution to suit your needs.',
      },
      {
        kind: 'h2',
        text: 'Protection and Flexibility',
      },
      {
        kind: 'p',
        text: 'Our facilities are equipped with advanced security systems, 24-hour CCTV monitoring, controlled access, and modern alarm systems, ensuring maximum protection for your belongings.',
      },
      {
        kind: 'p',
        text: 'At the same time, you can choose the unit size and rental duration that best suits your requirements, with convenient access to your possessions whenever needed.',
      },
      {
        kind: 'h2',
        text: 'Move Without the Stress',
      },
      {
        kind: 'p',
        text: 'With Storage2Rent’s secure and flexible storage solutions, you can focus on your new beginning with complete confidence, knowing that your belongings are safe, protected, and professionally cared for.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Secure and flexible storage solutions for every stage of your move.',
      },
    ],
    image: smartStorageTipImage(7),
    imageAlt: 'Temporary storage solutions for home moves at Storage2Rent',
  },
  {
    id: 'document-archives',
    title: 'Storage2Rent – Modern and Reliable Storage Solutions',
    excerpt:
      'At Storage2Rent, we provide secure, flexible, and professional storage solutions for both private individuals and businesses throughout Cyprus. Our mission is to offer high-quality storage facilities where customers can store their belongings with complete confidence and peace of mind.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: 'Storage, as It Should Be',
      },
      {
        kind: 'p',
        text: 'At Storage2Rent, we provide secure, flexible, and professional storage solutions for both private individuals and businesses throughout Cyprus. Our mission is to offer high-quality storage facilities where customers can store their belongings with complete confidence and peace of mind.',
      },
      {
        kind: 'h2',
        text: 'Solutions for Every Requirement',
      },
      {
        kind: 'p',
        text: 'Whether you are moving home, renovating a property, dealing with limited space, or seeking storage for business equipment, we have the right solution to meet your needs.',
      },
      {
        kind: 'p',
        text: 'Our facilities are ideal for storing:',
      },
      {
        kind: 'ul',
        items: [
          'Furniture and household contents',
          'Clothing and personal belongings',
          'Electrical appliances',
          'Documents and archives',
          'Sports equipment',
          'Professional tools and machinery',
          'Business inventory and stock',
        ],
      },
      {
        kind: 'h2',
        text: 'Security Without Compromise',
      },
      {
        kind: 'p',
        text: 'Protecting your belongings is our highest priority. Our facilities are equipped with:',
      },
      {
        kind: 'ul',
        items: [
          '24-hour high-definition CCTV surveillance',
          'Thermal cameras and motion detection sensors',
          'Intelligent alarm systems',
          'Controlled electronic access',
          'Extensive security lighting',
          'Backup operational systems',
        ],
      },
      {
        kind: 'p',
        text: 'These measures allow us to provide one of the highest levels of security within the self-storage industry.',
      },
      {
        kind: 'h2',
        text: 'Our Core Values',
      },
      {
        kind: 'p',
        text: 'The Storage2Rent philosophy is built upon six fundamental principles:',
      },
      {
        kind: 'ul',
        items: [
          'Security',
          'Reliability',
          'Professionalism',
          'Cleanliness',
          'Flexibility',
          'Personalised customer service',
        ],
      },
      {
        kind: 'h2',
        text: 'More Than Just Storage',
      },
      {
        kind: 'p',
        text: 'At Storage2Rent, we do more than simply provide storage space. We offer the reassurance and confidence that your personal and business belongings are being cared for in a safe and secure environment.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — Security, reliability, and complete peace of mind for the things that matter most.',
      },
    ],
    image: smartStorageTipImage(8),
    imageAlt: 'Modern and reliable Storage2Rent storage solutions',
  },
  {
    id: 'renovation-storage',
    title: 'Reasons to Choose a Storage Unit',
    excerpt:
      'As storage requirements continue to grow, more individuals and businesses are turning to professional storage solutions to create additional space and protect their valuable belongings. If you are considering whether a storage unit is the right choice for you, here are ten compelling reasons why it may be the perfect solution.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: '1. Create More Space at Home',
      },
      {
        kind: 'p',
        text: 'Remove items that are not needed on a daily basis and enjoy a more comfortable, organised, and functional living environment.',
      },
      {
        kind: 'h2',
        text: '2. The Ideal Solution During a Move',
      },
      {
        kind: 'p',
        text: 'A storage unit provides valuable flexibility while relocating, allowing you to store your belongings safely until you are fully settled into your new property.',
      },
      {
        kind: 'h2',
        text: '3. Protection During Renovations',
      },
      {
        kind: 'p',
        text: 'Keep furniture, appliances, and personal possessions protected from dust, damage, and disruption while renovation works are underway.',
      },
      {
        kind: 'h2',
        text: '4. Safe Storage for Seasonal Items',
      },
      {
        kind: 'p',
        text: 'Christmas decorations, winter equipment, summer accessories, and other seasonal belongings can be stored safely without taking up valuable space at home.',
      },
      {
        kind: 'h2',
        text: '5. Perfect for Students',
      },
      {
        kind: 'p',
        text: 'Students can safely store furniture, books, and personal belongings during holidays, relocations, or periods of study abroad.',
      },
      {
        kind: 'h2',
        text: '6. Better Organisation for Businesses',
      },
      {
        kind: 'p',
        text: 'Documents, archives, inventory, office equipment, and merchandise can be stored securely, freeing up valuable space within business premises.',
      },
      {
        kind: 'h2',
        text: '7. Protection for Valuable Belongings',
      },
      {
        kind: 'p',
        text: 'Collections, family heirlooms, sports equipment, and other valuable possessions remain secure and well protected.',
      },
      {
        kind: 'h2',
        text: '8. Ideal for Hobbies and Leisure Equipment',
      },
      {
        kind: 'p',
        text: 'Bicycles, water sports equipment, tools, musical instruments, and other bulky items can be stored safely and conveniently.',
      },
      {
        kind: 'h2',
        text: '9. Flexible Rental Terms',
      },
      {
        kind: 'p',
        text: 'Choose the storage space and rental duration that best suits your needs, whether for a few weeks or long-term storage.',
      },
      {
        kind: 'h2',
        text: '10. Complete Security and Peace of Mind',
      },
      {
        kind: 'p',
        text: 'Storage2Rent’s modern facilities feature advanced security systems, 24-hour CCTV monitoring, controlled access, and comprehensive protection measures, ensuring your belongings remain secure at all times.',
      },
      {
        kind: 'h2',
        text: 'The Smart Choice for Every Storage Requirement',
      },
      {
        kind: 'p',
        text: 'Whether you need additional space at home or a secure storage solution for your business, Storage2Rent offers flexible, secure, and cost-effective storage options tailored to your specific requirements.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — More space, better organisation, and complete security for the things that matter most to you.',
      },
    ],
    image: smartStorageTipImage(9),
    imageAlt: 'Reasons to choose a Storage2Rent storage unit',
  },
  {
    id: 'pallet-logistics',
    title: 'Things You Can Store in a Storage Unit',
    excerpt:
      'Many people assume that storage units are only useful for storing furniture during a house move. In reality, modern storage solutions can accommodate almost any type of personal or business item, helping you create more space, improve organisation, and enjoy a more comfortable lifestyle. Here are ten of the most common items that Storage2Rent customers choose to store.',
    body: [],
    sections: [
      {
        kind: 'h2',
        text: '1. Seasonal Decorations and Holiday Items',
      },
      {
        kind: 'p',
        text: 'Christmas trees, ornaments, festive lighting, and seasonal decorations are only used for a few weeks each year. Instead of taking up valuable space at home, they can be safely stored until the next festive season.',
      },
      {
        kind: 'h2',
        text: '2. Archives and Important Documents',
      },
      {
        kind: 'p',
        text: 'Contracts, tax records, business files, and personal documents often need to be retained for many years. A storage unit provides a secure and organised solution without overcrowding your office or home storage areas.',
      },
      {
        kind: 'h2',
        text: '3. Furniture',
      },
      {
        kind: 'p',
        text: 'From dining tables and sofas to bedroom furniture and office desks, furniture is among the most commonly stored items during relocations, renovations, or temporary changes in living arrangements.',
      },
      {
        kind: 'h2',
        text: '4. Electrical and Electronic Equipment',
      },
      {
        kind: 'p',
        text: 'Appliances and electronic devices that are not used regularly but still retain value can be safely stored until they are needed again.',
      },
      {
        kind: 'h2',
        text: '5. Antiques and Collectibles',
      },
      {
        kind: 'p',
        text: 'Items with sentimental or financial value require additional care and protection. Storage2Rent’s secure facilities provide the ideal environment for preserving valuable antiques and collectibles.',
      },
      {
        kind: 'h2',
        text: '6. Clothing and Seasonal Wardrobes',
      },
      {
        kind: 'p',
        text: 'Winter clothing, summer wardrobes, special occasion outfits, and other garments that are not required year-round can be stored conveniently, freeing up valuable wardrobe space.',
      },
      {
        kind: 'h2',
        text: '7. Toys and Children’s Equipment',
      },
      {
        kind: 'p',
        text: 'Toys, children’s furniture, bicycles, and equipment that are no longer in daily use can be safely stored for future use or passed on to younger family members.',
      },
      {
        kind: 'h2',
        text: '8. Baby Equipment',
      },
      {
        kind: 'p',
        text: 'Pushchairs, cots, car seats, changing tables, and baby accessories often occupy significant space within a home. Secure storage provides the perfect solution until they are required again.',
      },
      {
        kind: 'h2',
        text: '9. Sports and Leisure Equipment',
      },
      {
        kind: 'p',
        text: 'Bicycles, diving equipment, water sports gear, camping equipment, fishing equipment, and other hobby-related items can require considerable storage space. Keeping them in a storage unit helps maintain a more organised and functional home.',
      },
      {
        kind: 'h2',
        text: '10. Business Equipment and Inventory',
      },
      {
        kind: 'p',
        text: 'Many businesses utilise storage units to store tools, machinery, stock, exhibition equipment, and seasonal inventory without incurring the expense of larger commercial premises.',
      },
      {
        kind: 'h2',
        text: 'More Space for the Things That Matter',
      },
      {
        kind: 'p',
        text: 'Effective storage does not mean parting with your belongings. It means keeping them safe, organised, and readily available whenever you need them.',
      },
      {
        kind: 'p',
        text: 'At Storage2Rent, we provide secure, insulated storage units equipped with advanced security systems and flexible storage options, helping you find the perfect solution for your needs.',
      },
      {
        kind: 'p',
        text: 'Storage2Rent — The smart solution for more space, better organisation, and complete peace of mind.',
      },
    ],
    image: smartStorageTipImage(10),
    imageAlt: 'Items you can store in a Storage2Rent unit',
  },
  {
    id: 'seasonal-inventory',
    title: 'Does Your New Apartment Lack Storage Space? Discover the Best Solutions',
    excerpt:
      'Retailers and hospitality businesses rotate summer and winter lines, event stock, and promotional materials. Off-site storage turns seasonal peaks into manageable cycles instead of cramped back rooms.',
    body: [
      'Seasonal inventory punishes businesses that only think about floor space during the busy month. Planning storage in the quiet season secures better unit sizes and avoids premium rush decisions when everyone else is moving stock too.',
      'Group by campaign or season, not only by SKU count. Colour-coded wraps, bay diagrams, and a simple spreadsheet of pallet positions reduce pick errors when the first warm weekend or holiday rush arrives.',
      'Inspect goods when they return to storage — damp display items, damaged packaging, or expired promotional material should be sorted before restacking rather than buried until next year.',
      'Flexible terms help when a season runs long or finishes early. Treat storage as part of merchandising strategy: what stays on-site for daily touchpoints versus what waits securely off-site until demand returns.',
    ],
    image: smartStorageTipImage(11),
    imageAlt: 'Secure units at golden hour — seasonal stock storage',
  },
]
