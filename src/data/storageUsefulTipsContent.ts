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
  {
    id: 'packing-furniture',
    title: 'Protecting furniture during storage',
    excerpt:
      'Sofas, tables, and beds need more than a quick cover. Proper wrapping, elevation, and aisle space prevent scratches, warping, and compression damage while units stay closed for months.',
    body: [
      'Furniture is vulnerable when legs sit directly on concrete, edges rub against walls, and heavy items stack on upholstery. Disassemble where sensible, bag hardware in labelled pouches, and keep fixings taped to the frame they belong to.',
      'Breathable furniture covers beat sealed plastic for long stays — they reduce condensation while still keeping dust off. Place pallets or boards under sofas and mattresses so air can circulate underneath.',
      'Store tables vertically only when stable; otherwise lay protective blankets between surfaces and avoid placing cartons on glass or veneer. Mirror and artwork belong upright, clearly marked, and away from high-traffic paths through the unit.',
      'A well-packed unit costs less in replacements than a rushed one. Visit once after the first week to confirm nothing has shifted during loading — small adjustments early prevent expensive damage later.',
    ],
    image: storageImage('storage-53.png'),
    imageAlt: 'Drive-up access for loading furniture at Storage2Rent',
  },
  {
    id: 'container-vs-warehouse',
    title: 'Containers or warehouse bays — which fits?',
    excerpt:
      'Drive-up containers and indoor warehouse space solve different problems. Match your goods, access pattern, and sensitivity to weather when you choose between yard units and insulated bays.',
    body: [
      'Containers suit robust goods, pallet loads, trade tools, and situations where you want your own lockable volume with direct vehicle access. They work well for construction materials, spare equipment, and overflow that tolerates outdoor loading in normal weather.',
      'Indoor warehouse bays favour furniture, archives, electronics, and anything you prefer to handle under cover. Insulated options add value when temperature swings could affect adhesives, fabrics, or stored liquids.',
      'Frequency of visits matters: daily or weekly access to mixed items often suits an organised indoor bay; monthly bulk deliveries may lean container-side with careful stacking and weather-aware scheduling.',
      'We walk through what you store, how you load, and how long you stay before recommending a size — many clients combine both formats as projects evolve rather than forcing everything into one type of space.',
    ],
    image: storageImage('storage-44.png'),
    imageAlt: 'Colour-coded container rows at the facility',
  },
  {
    id: 'document-archives',
    title: 'Storing documents and records safely',
    excerpt:
      'Compliance files, contracts, and operational archives must stay dry, findable, and secure. Simple shelving habits and indoor units protect paper far better than spare rooms or unsecured outbuildings.',
    body: [
      'Paper storage fails in damp garages and overheated lofts. Choose dry indoor space, keep boxes off the floor on shelving or pallets, and use archive cartons designed for uniform stacking rather than mixed shopping bags.',
      'Label by year, department, or retention category — not only by room name from an old office move. A single index sheet at the front of each bay saves hours when auditors or solicitors ask for a specific file.',
      'Sensitive material deserves locked units and minimal sharing of access codes. Rotate who holds keys or PINs when staff change, and avoid writing full client details on external box labels visible from the aisle.',
      'Retention policies differ by sector; storage is not a substitute for lawful destruction dates. Use off-site space as part of a clear records plan — hold what you must, retrieve what you need, and dispose on schedule elsewhere.',
    ],
    image: storageImage('storage-57.png'),
    imageAlt: 'On-site operations and secure indoor storage',
  },
  {
    id: 'renovation-storage',
    title: 'Storage during home renovations',
    excerpt:
      'Refits move faster when rooms are cleared properly. Temporary storage keeps furniture safe from dust and trades while you stay in the property or move out for a few weeks.',
    body: [
      'Renovations damage furniture through plaster dust, accidental knocks, and humidity from wet trades. Move bulky pieces out early rather than shuffling them room to room as work progresses — it reduces labour and protects finishes.',
      'Pack room by room and label for the return journey. Kitchen boxes, bedroom textiles, and living-area electronics should not share fragile items without clear markers for which contractor phase they belong to.',
      'Timeline your unit to the build schedule: a three-month kitchen refit may need only eight weeks of storage if delivery dates are firm. Build in a buffer week for snagging before items return home.',
      'Drive-up access helps when sofas and appliances must go back in quickly. Coordinate delivery windows with your builder so the unit is loaded in reverse order of how rooms will be reinstated.',
    ],
    image: storageImage('storage-54.png'),
    imageAlt: 'Storage units suitable for renovation clear-outs',
  },
  {
    id: 'pallet-logistics',
    title: 'Pallet storage for stock and logistics',
    excerpt:
      'Palletised goods need level ground, clear lanes, and realistic height limits. Yard and warehouse options at Storage2Rent support inbound deliveries and staged outbound dispatch.',
    body: [
      'Pallet storage is not only about square metres — aisle width for forklifts or pallet trucks, turning space, and safe stacking limits define whether a bay actually works for your operation.',
      'Standardise on one or two pallet types where possible so stacks stay stable. Wrap mixed cartons securely, keep heavy loads low, and never block sprinklers or structural paths marked on site plans.',
      'Inbound and outbound rhythm should drive location choice: high-turnover lines benefit from positions near main access routes; slow-moving archive stock can sit deeper in the layout with clear floor maps.',
      'Combine storage with realistic dispatch planning — we discuss access hours, peak seasonal volumes, and whether you need occasional repalletising space rather than treating the unit as a static warehouse photo.',
    ],
    image: storageImage('storage-28.png'),
    imageAlt: 'Pallet-ready industrial storage space',
  },
  {
    id: 'seasonal-inventory',
    title: 'Managing seasonal stock cycles',
    excerpt:
      'Retailers and hospitality businesses rotate summer and winter lines, event stock, and promotional materials. Off-site storage turns seasonal peaks into manageable cycles instead of cramped back rooms.',
    body: [
      'Seasonal inventory punishes businesses that only think about floor space during the busy month. Planning storage in the quiet season secures better unit sizes and avoids premium rush decisions when everyone else is moving stock too.',
      'Group by campaign or season, not only by SKU count. Colour-coded wraps, bay diagrams, and a simple spreadsheet of pallet positions reduce pick errors when the first warm weekend or holiday rush arrives.',
      'Inspect goods when they return to storage — damp display items, damaged packaging, or expired promotional material should be sorted before restacking rather than buried until next year.',
      'Flexible terms help when a season runs long or finishes early. Treat storage as part of merchandising strategy: what stays on-site for daily touchpoints versus what waits securely off-site until demand returns.',
    ],
    image: storageImage('storage-55.png'),
    imageAlt: 'Secure units at golden hour — seasonal stock storage',
  },
  {
    id: 'access-security',
    title: 'Making the most of secure site access',
    excerpt:
      'Monitored yards and controlled entry protect your goods — but good habits on your side matter too. Keys, visit logs, and tidy units turn security features into everyday peace of mind.',
    body: [
      'Secure facilities work best when customers treat access seriously: do not share codes broadly, report damaged locks promptly, and close doors fully even during quick visits. Your diligence complements CCTV, lighting, and on-site procedures.',
      'Keep aisles clear inside the unit so nothing blocks visibility during inspections or your own checks. Valuable items belong away from the door line and out of sight from casual pass-through angles.',
      'Maintain a simple visit log for business units — who entered, when, and why — especially when multiple staff or contractors hold access. It resolves discrepancies faster than reconstructing movements from memory.',
      'Insurance and inventory lists should reflect what is actually stored. Update coverage when stock value rises, photograph high-value equipment on intake, and store copies of policies elsewhere — not only inside the same unit they describe.',
    ],
    image: storageImage('storage-52.png'),
    imageAlt: 'Secure monitored Storage2Rent yard and access routes',
  },
]
