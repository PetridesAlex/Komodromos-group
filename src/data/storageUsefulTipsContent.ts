import { storageImage } from './storagePageImages'

export type StorageUsefulTip = {
  id: string
  title: string
  excerpt: string
  body: string[]
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
    title: 'What can businesses keep in self-storage?',
    excerpt:
      'More industries use off-site units than you might expect — archived paperwork, promotional stock, tools, spare parts, and seasonal inventory all belong here when office or shop floor space gets tight.',
    body: [
      'Self-storage is no longer only for house moves. Trades, retailers, e-commerce sellers, and professional offices routinely rent units to hold stock, equipment, and archives that do not need to sit in premium workspace every day.',
      'Typical business items include marketing materials, spare furniture, IT hardware awaiting deployment, seasonal product lines, and compliance records you must retain but rarely open. Containers and warehouse bays at Storage2Rent are especially useful when deliveries arrive on pallets or when you need drive-up access for vans.',
      'The key is matching unit size and access hours to how your team works. If staff visit weekly, choose a layout that keeps aisles clear; if you mainly add inventory month by month, prioritise height and depth over a wide frontage.',
      'Talk to us about short-term overflow during refits or longer stays while you scale — we help you avoid paying for square metres you will never use.',
    ],
    image: storageImage('storage-22.png'),
    imageAlt: 'Business and logistics storage at Storage2Rent',
  },
  {
    id: 'flexible-storage',
    title: 'Secure space that adapts with you',
    excerpt:
      'From household clear-outs to growing company stock, Storage2Rent offers monitored units and yards sized for everyday use — short stays, rolling contracts, or longer partnerships as your needs evolve.',
    body: [
      'Storage requirements rarely stay the same for years. A family might need a small unit during a renovation, then downsize once furniture returns home. A business might expand into a larger bay after a strong season, or switch from boxes to pallet racking as logistics mature.',
      'Flexible terms matter as much as flexible space. Look for providers who allow reasonable access, clear security standards, and straightforward changes when you outgrow a room or want to consolidate.',
      'At Storage2Rent, units and containers are positioned for practical loading — not just catalogue photos. Monitored yards, defined access routes, and on-site professionalism reduce the friction of using storage as an extension of your home or operation.',
      'Whether you are between properties, staging a move, or building buffer stock, choose a partner that treats storage as an ongoing service, not a one-off locker rental.',
    ],
    image: storageImage('storage50.png'),
    imageAlt: 'Modern storage units and container yard',
  },
  {
    id: 'tailored-plans',
    title: 'Storage matched to how you live and work',
    excerpt:
      'Access hours, unit dimensions, and contract length should fit your routine. We help you choose container or warehouse space based on what you store and how often you need to reach it.',
    body: [
      'The right plan starts with an honest list of what you are storing, how fragile it is, and how frequently you will visit. Weekly access to seasonal sports gear suggests a different setup than quarterly visits to archived files.',
      'Container storage suits robust goods, vehicles, and palletised stock. Indoor units favour furniture, electronics, and anything sensitive to dust or weather during loading. Insulated warehouse space bridges both when temperature stability matters.',
      'Contract length should reflect your project timeline — a three-month renovation, a six-month office transition, or an open-ended business buffer each deserve a different conversation about cost and notice periods.',
      'Our team maps your items to realistic square metres so you are not pushed into oversized units. Personal visits are welcome if you want to walk the site before you commit.',
    ],
    image: storageImage('storage-42.png'),
    imageAlt: 'Personal storage corridors at the facility',
  },
  {
    id: 'clothes-long-term',
    title: 'Looking after clothing over many months',
    excerpt:
      'Fabrics last longer in clean, stable conditions with sensible packing. Store seasonal wardrobes so they stay reachable whenever the weather turns — without crowding cupboards at home.',
    body: [
      'Clothing storage fails when items are crushed, damp, or left in direct plastic without airflow. Clean garments thoroughly before packing, ensure they are fully dry, and use breathable covers rather than sealed bags for long durations.',
      'Structured boxes or wardrobe cartons keep shapes intact. Heavier knitwear belongs at the bottom; delicate pieces should be folded with tissue rather than hung on weak rails for months on end.',
      'Seasonal rotation works best when your unit is organised like a small wardrobe aisle — labelled containers, a clear path, and a habit of swapping summer and winter bundles twice a year.',
      'A dry, accessible facility makes the difference between “out of sight” and “forgotten and damaged.” Storage2Rent units are suited to frequent visits so your wardrobe stays a practical extension of home, not a last resort.',
    ],
    image: storageImage('storage-41.png'),
    imageAlt: 'Indoor storage units suitable for personal belongings',
  },
  {
    id: 'office-move',
    title: 'Organising an office or business move',
    excerpt:
      'Relocating premises takes planning before the upside appears. Phased storage keeps desks, files, and kit safe while fit-out, handover dates, and transport schedules fall into place.',
    body: [
      'Office moves go wrong when everything travels on the same day with nowhere to land. Staged storage lets you decant meeting rooms first, hold furniture while floors are refurbished, and keep client files accessible in labelled bays.',
      'Start with a floor plan of the new space and mark what must arrive in week one versus what can wait. IT kit, signage, and kitchen areas often have different timelines — your storage layout should mirror those phases.',
      'Use colour-coded labels by department and photograph cable setups before desks are broken down. The small admin cost upfront saves days of confusion when you reopen.',
      'Storage2Rent can hold desks, chairs, archiving boxes, and palletised supplies until your fit-out completes. Combine container space for bulky items with indoor units for documents that must stay dry and secure.',
    ],
    image: storageImage('storage-30.png'),
    imageAlt: 'Industrial and pallet-ready warehouse space',
  },
  {
    id: 'home-space',
    title: 'Smart ways to free up room at home',
    excerpt:
      'Homes fill quickly regardless of square metres. Rotating seldom-used furniture, sports gear, and boxes into secure storage can unlock living areas without committing to a bigger property.',
    body: [
      "Most households own items used only part of the year — holiday decorations, camping gear, children's outgrown sizes, or furniture kept \"just in case.\" Those pieces consume closets and spare rooms until space feels permanently tight.",
      'Decluttering without discarding is valid. If you are likely to need items again, off-site storage is often cheaper than moving to a larger home solely for extra cupboards.',
      'Create a simple rule: anything not used in twelve months moves to a labelled box in storage unless it is genuinely sentimental or high value. Review twice a year so units do not become unmanaged dumping grounds.',
      'A nearby, secure facility turns storage into active space management — visit when seasons change, swap sports equipment, and keep daily living areas calm without ruthless throwing away.',
    ],
    image: storageImage('storage-13.png'),
    imageAlt: 'Secure Storage2Rent facility standards',
  },
]
