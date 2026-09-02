import type { LocalizedText } from '../lib/weddingLocale'

type WeddingPillar = {
  id: string
  label: LocalizedText
  labelSecondary?: LocalizedText
  href: string
}

type WeddingOffering = {
  title: LocalizedText
  desc: LocalizedText
  image: string
}

export const weddingHeroCopy: {
  located: LocalizedText
  atelier: LocalizedText
  title: LocalizedText
  lead: LocalizedText
  ownedBy: LocalizedText
  exploreServices: LocalizedText
  enquire: LocalizedText
} = {
  located: {
    en: 'Located in Cyprus',
    el: 'Με έδρα την Κύπρο',
    ru: 'На Кипре',
  },
  atelier: {
    en: 'Luxury Wedding Planning Experiences',
    el: 'Πολυτελείς Εμπειρίες Διοργάνωσης Γάμου',
    ru: 'Премиальная организация свадеб',
  },
  title: {
    en: 'Make your dream wedding come true',
    el: 'Κάντε τον γάμο των ονείρων σας πραγματικότητα',
    ru: 'Воплотите свадьбу своей мечты',
  },
  lead: {
    en: 'From intimate vows to grand celebrations, we design refined experiences in Cyprus — guided by taste, precision, and love stories that feel unmistakably yours.',
    el: 'Από μια λιτή, προσωπική τελετή μέχρι μια λαμπερή δεξίωση, δημιουργούμε εκλεπτυσμένες εμπειρίες στην Κύπρο — με αισθητική, ακρίβεια και επίκεντρο τη δική σας μοναδική ιστορία αγάπης.',
    ru: 'От камерной церемонии до масштабного торжества — мы создаём изысканные события на Кипре, где безупречный вкус, точность и ваша неповторимая история любви соединяются в единое целое.',
  },
  ownedBy: {
    en: 'Owned by',
    el: 'Μέλος του',
    ru: 'В составе',
  },
  exploreServices: {
    en: 'Explore services',
    el: 'Ανακαλύψτε τις υπηρεσίες',
    ru: 'Узнать об услугах',
  },
  enquire: {
    en: 'Enquire',
    el: 'Επικοινωνήστε μαζί μας',
    ru: 'Оставить запрос',
  },
}

export const weddingPillarsCopy: ReadonlyArray<WeddingPillar> = [
  {
    id: 'wedding-services',
    label: {
      en: 'Wedding Services',
      el: 'Υπηρεσίες Γάμου',
      ru: 'Свадебные услуги',
    },
    href: '#wedding-services',
  },
  {
    id: 'wedding-packages',
    label: {
      en: 'Wedding Experience',
      el: 'Εμπειρία Γάμου',
      ru: 'Свадебный опыт',
    },
    labelSecondary: {
      en: 'Packages',
      el: 'Πακέτα',
      ru: 'Пакеты',
    },
    href: '/services/wedding/wedding-packages',
  },
  {
    id: 'christening-packages',
    label: {
      en: 'Christening Packages',
      el: 'Πακέτα Βάπτισης',
      ru: 'Пакеты для крещения',
    },
    href: '/services/wedding/categories/christian',
  },
]

type WeddingEditorialPillar = {
  id: string
  title: LocalizedText
  tagline: LocalizedText
  href: string
}

export const weddingEditorialPillarsCopy: {
  sectionAria: LocalizedText
  eyebrow: LocalizedText
  items: ReadonlyArray<WeddingEditorialPillar>
} = {
  sectionAria: {
    en: 'Wedding Sky editorial',
    el: 'Editorial Wedding Sky',
    ru: 'Редакция Wedding Sky',
  },
  eyebrow: {
    en: 'Explore the atelier',
    el: 'Εξερευνήστε το atelier',
    ru: 'Откройте atelier',
  },
  items: [
    {
      id: 'wedding-edit',
      title: {
        en: 'The Wedding Edit',
        el: 'The Wedding Edit',
        ru: 'The Wedding Edit',
      },
      tagline: {
        en: 'Inspiration, Expert Advice & Ideas for Your Perfect Day',
        el: 'Έμπνευση, συμβουλές ειδικών και ιδέες για την τέλεια μέρα σας',
        ru: 'Вдохновение, экспертные советы и идеи для вашего идеального дня',
      },
      href: '/services/wedding/edit',
    },
    {
      id: 'wedding-concierge',
      title: {
        en: 'The Wedding Concierge',
        el: 'The Wedding Concierge',
        ru: 'The Wedding Concierge',
      },
      tagline: {
        en: 'Your Questions. Our Expertise. Your Perfect Day.',
        el: 'Οι ερωτήσεις σας. Η εμπειρία μας. Η τέλεια μέρα σας.',
        ru: 'Ваши вопросы. Наш опыт. Ваш идеальный день.',
      },
      href: '/services/wedding/concierge',
    },
    {
      id: 'wedding-sky-difference',
      title: {
        en: 'The Wedding Sky Difference',
        el: 'The Wedding Sky Difference',
        ru: 'The Wedding Sky Difference',
      },
      tagline: {
        en: 'More than a wedding. An experience designed entirely around you.',
        el: 'Περισσότερο από ένας γάμος. Μια εμπειρία σχεδιασμένη εξ ολοκλήρου γύρω από εσάς.',
        ru: 'Больше, чем свадьба. Опыт, созданный целиком вокруг вас.',
      },
      href: '/services/wedding/difference',
    },
  ],
}

export const weddingIntroCopy: {
  imageAlt: LocalizedText
  captionStrong: LocalizedText
  eyebrow: LocalizedText
  title: LocalizedText
  lead: LocalizedText
  leadSecondary: LocalizedText
  contactAria: LocalizedText
  speakAtelier: LocalizedText
  cyprusCode: LocalizedText
  cyprusLabel: LocalizedText
  officeLabel: LocalizedText
  mobileLabel: LocalizedText
  call: LocalizedText
  revealNumber: LocalizedText
  follow: LocalizedText
  socialAria: LocalizedText
} = {
  imageAlt: {
    en: 'A refined Wedding Sky celebration setting in Cyprus',
    el: 'Ένα εκλεπτυσμένο σκηνικό δεξίωσης της Wedding Sky στην Κύπρο',
    ru: 'Изысканное оформление торжества Wedding Sky на Кипре',
  },
  captionStrong: {
    en: 'Composed in Cyprus',
    el: 'Δημιουργημένο στην Κύπρο',
    ru: 'Создано на Кипре',
  },
  eyebrow: {
    en: 'The Wedding Sky standard',
    el: 'Η φιλοσοφία της Wedding Sky',
    ru: 'Стандарт Wedding Sky',
  },
  title: {
    en: 'Cyprus celebrations, composed with care.',
    el: 'Γαμήλιες εκδηλώσεις σχεδιασμένες με φροντίδα.',
    ru: 'Торжества на Кипре — созданные с заботой.',
  },
  lead: {
    en: 'From first concept to the last farewell, we compose celebrations that feel intentional — guided by hospitality, precise timing, and the quiet rhythm of a wedding week.',
    el: 'Από την πρώτη ιδέα μέχρι τον αποχαιρετισμό, συνθέτουμε γιορτές με πρόθεση — με φιλοξενία, ακριβή συγχρονισμό και τον ήρεμο ρυθμό μιας εβδομάδας γάμου.',
    ru: 'От первой идеи до последнего прощания мы создаём торжества с замыслом — с гостеприимством, точным таймингом и спокойным ритмом свадебной недели.',
  },
  leadSecondary: {
    en: 'Every detail follows your story: atmospheric venues, vendors who hold under pressure, and a run of show that stays composed when the room is full.',
    el: 'Κάθε λεπτομέρεια ακολουθεί τη δική σας ιστορία: χώροι με ατμόσφαιρα, συνεργάτες που αντέχουν την πίεση και μια ροή ημέρας που μένει ήρεμη όταν η αίθουσα γεμίζει.',
    ru: 'Каждая деталь следует вашей истории: атмосферные площадки, подрядчики, которые держат удар, и сценарий дня, остающийся спокойным, когда зал уже полон.',
  },
  contactAria: {
    en: 'Wedding Sky contact numbers',
    el: 'Τηλέφωνα επικοινωνίας Wedding Sky',
    ru: 'Контактные телефоны Wedding Sky',
  },
  speakAtelier: {
    en: 'Speak with the atelier',
    el: 'Μιλήστε με το ατελιέ μας',
    ru: 'Связаться с ателье',
  },
  cyprusCode: {
    en: 'Cyprus · +357',
    el: 'Κύπρος · +357',
    ru: 'Кипр · +357',
  },
  cyprusLabel: {
    en: 'Cyprus atelier lines',
    el: 'Γραμμές ατελιέ Κύπρου',
    ru: 'Линии ателье на Кипре',
  },
  officeLabel: {
    en: 'Office',
    el: 'Γραφείο',
    ru: 'Офис',
  },
  mobileLabel: {
    en: 'Mobile',
    el: 'Κινητό',
    ru: 'Мобильный',
  },
  call: {
    en: 'Call',
    el: 'Καλέστε',
    ru: 'Позвонить',
  },
  revealNumber: {
    en: 'Tap to reveal number',
    el: 'Πατήστε για εμφάνιση αριθμού',
    ru: 'Нажмите, чтобы показать номер',
  },
  follow: {
    en: 'Follow Wedding Sky',
    el: 'Ακολουθήστε τη Wedding Sky',
    ru: 'Следите за Wedding Sky',
  },
  socialAria: {
    en: 'Wedding Sky social media',
    el: 'Μέσα κοινωνικής δικτύωσης Wedding Sky',
    ru: 'Wedding Sky в социальных сетях',
  },
}

export const weddingTilesSectionCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  intro: LocalizedText
  explore: LocalizedText
  openContactAria: LocalizedText
  jumpSectionAria: LocalizedText
  openServiceAria: LocalizedText
  discover: LocalizedText
  closeDetail: LocalizedText
  detailEyebrow: LocalizedText
  enquireService: LocalizedText
  openDetailAria: LocalizedText
} = {
  eyebrow: {
    en: 'The atelier catalogue',
    el: 'Ο κατάλογος του atelier',
    ru: 'Каталог atelier',
  },
  title: {
    en: 'Curated services',
    el: 'Επιλεγμένες υπηρεσίες γάμου',
    ru: 'Кураторские услуги',
  },
  intro: {
    en: 'Bridal couture, live entertainment, transport, décor, and full wedding coordination — a composed network of specialists for every moment of your Cyprus celebration.',
    el: 'Πολυτελή νυφικά, ζωντανή διασκέδαση, μετακινήσεις, διακόσμηση και πλήρης συντονισμός — ένα οργανωμένο δίκτυο ειδικών για κάθε στιγμή της γιορτής σας στην Κύπρο.',
    ru: 'Свадебные платья, живая музыка, транспорт, декор и полная координация — продуманная сеть специалистов для каждого момента вашего торжества на Кипре.',
  },
  explore: {
    en: 'Explore',
    el: 'Ανακαλύψτε',
    ru: 'Подробнее',
  },
  openContactAria: {
    en: '{{title}} — open contact page',
    el: '{{title}} — άνοιγμα σελίδας επικοινωνίας',
    ru: '{{title}} — открыть страницу контактов',
  },
  jumpSectionAria: {
    en: '{{title}} — jump to section',
    el: '{{title}} — μετάβαση στην ενότητα',
    ru: '{{title}} — перейти к разделу',
  },
  openServiceAria: {
    en: '{{title}} — open page',
    el: '{{title}} — άνοιγμα σελίδας',
    ru: '{{title}} — открыть страницу',
  },
  discover: {
    en: 'Discover',
    el: 'Ανακαλύψτε',
    ru: 'Узнать больше',
  },
  closeDetail: {
    en: 'Close service details',
    el: 'Κλείσιμο λεπτομερειών υπηρεσίας',
    ru: 'Закрыть описание услуги',
  },
  detailEyebrow: {
    en: 'Wedding Sky atelier',
    el: 'Wedding Sky atelier',
    ru: 'Atelier Wedding Sky',
  },
  enquireService: {
    en: 'Enquire about this service',
    el: 'Ενδιαφέρομαι για την υπηρεσία',
    ru: 'Узнать об услуге',
  },
  openDetailAria: {
    en: '{{title}} — read service details',
    el: '{{title}} — ανάγνωση λεπτομερειών υπηρεσίας',
    ru: '{{title}} — прочитать об услуге',
  },
}

export const weddingPackagesSectionCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  intro: LocalizedText
  viewPackages: LocalizedText
  enquire: LocalizedText
  openCategoryAria: LocalizedText
} = {
  eyebrow: {
    en: 'INVESTMENT LEVELS',
    el: 'ΕΠΙΠΕΔΑ ΕΠΕΝΔΥΣΗΣ',
    ru: 'УРОВНИ БЮДЖЕТА',
  },
  title: {
    en: 'Package collections',
    el: 'Συλλογές πακέτων',
    ru: 'Коллекции пакетов',
  },
  intro: {
    en: 'Choose a collection to explore its tiers — Wedding packages for celebration planning, or Christening packages shaped around sacred rites and extended styling.',
    el: 'Επιλέξτε συλλογή για να δείτε τα επίπεδά της — πακέτα γάμου για τον σχεδιασμό της γιορτής, ή πακέτα βάπτισης με έμφαση στην ιερή τελετή και το styling.',
    ru: 'Выберите коллекцию и познакомьтесь с её уровнями: свадебные пакеты для организации торжества или пакеты для крещения с акцентом на таинство и расширенное оформление.',
  },
  viewPackages: {
    en: 'View packages',
    el: 'Δείτε τα πακέτα',
    ru: 'Смотреть пакеты',
  },
  enquire: {
    en: 'Enquire',
    el: 'Επικοινωνήστε μαζί μας',
    ru: 'Оставить запрос',
  },
  openCategoryAria: {
    en: 'Open {{title}}',
    el: 'Άνοιγμα {{title}}',
    ru: 'Открыть {{title}}',
  },
}

export const weddingKnowledgeCopy: {
  sectionAria: LocalizedText
  srLabel: LocalizedText
  phraseKnow: LocalizedText
  phraseFaq: LocalizedText
  phraseAnswers: LocalizedText
} = {
  sectionAria: {
    en: 'Everything you need to know for your wedding Day',
    el: 'Όλα όσα χρειάζεται να γνωρίζετε για την ημέρα του γάμου σας',
    ru: 'Всё, что нужно знать о дне вашей свадьбы',
  },
  srLabel: {
    en: 'Everything you need to know for your wedding Day — enquire with Wedding Sky',
    el: 'Όλα όσα χρειάζεται να γνωρίζετε για την ημέρα του γάμου σας — επικοινωνήστε με τη Wedding Sky',
    ru: 'Всё, что нужно знать о дне вашей свадьбы — свяжитесь с Wedding Sky',
  },
  phraseKnow: {
    en: 'Everything you need to know for your wedding Day',
    el: 'Όλα όσα χρειάζεται να γνωρίζετε για την ημέρα του γάμου σας',
    ru: 'Всё, что нужно знать о дне вашей свадьбы',
  },
  phraseFaq: {
    en: 'Wedding Sky FAQ',
    el: 'Συχνές ερωτήσεις Wedding Sky',
    ru: 'Вопросы и ответы Wedding Sky',
  },
  phraseAnswers: {
    en: 'Open for answers',
    el: 'Ανοίξτε για απαντήσεις',
    ru: 'Открыть ответы',
  },
}

export const weddingServicesCopy: {
  title: LocalizedText
  intro: LocalizedText
  offerings: ReadonlyArray<WeddingOffering>
} = {
  title: {
    en: 'Our services',
    el: 'Οι υπηρεσίες μας',
    ru: 'Наши услуги',
  },
  intro: {
    en: 'Planning, creative direction, and on-site production under one disciplined structure — calibrated to your vision, traditions, and the experience you want every guest to remember.',
    el: 'Σχεδιασμός, δημιουργική διεύθυνση και παραγωγή στον χώρο, μέσα από μία άρτια οργανωμένη δομή — προσαρμοσμένη στο όραμα, τις παραδόσεις σας και την εμπειρία που θέλετε να μείνει αξέχαστη σε κάθε καλεσμένο.',
    ru: 'Планирование, креативное руководство и координация на площадке в рамках единой выверенной системы — с учётом вашего видения, традиций и впечатлений, которые вы хотите подарить каждому гостю.',
  },
  offerings: [
    {
      title: {
        en: 'Full-service planning',
        el: 'Πλήρης διοργάνωση',
        ru: 'Организация под ключ',
      },
      desc: {
        en: 'Timeline, vendors, and creative direction from first sketch to farewell.',
        el: 'Χρονοδιάγραμμα, συνεργάτες και δημιουργική διεύθυνση από την πρώτη ιδέα μέχρι τον αποχαιρετισμό.',
        ru: 'Тайминг, подрядчики и креативное руководство — от первого эскиза до проводов гостей.',
      },
      image: '/images/services/wedding-highlights/planning.webp',
    },
    {
      title: {
        en: 'Venue & production',
        el: 'Χώρος & παραγωγή',
        ru: 'Площадка и продакшн',
      },
      desc: {
        en: 'Scenic Cyprus locations, staging, lighting, and flawless run-of-show.',
        el: 'Μαγευτικές τοποθεσίες στην Κύπρο, σκηνικά, φωτισμός και άψογη ροή προγράμματος.',
        ru: 'Живописные площадки Кипра, сценография, свет и безупречно выстроенная программа.',
      },
      image: '/images/services/wedding-highlights/production.webp',
    },
    {
      title: {
        en: 'Guest experience',
        el: 'Εμπειρία καλεσμένων',
        ru: 'Впечатления гостей',
      },
      desc: {
        en: 'Travel, hospitality, and seating crafted for every attendee.',
        el: 'Μετακινήσεις, φιλοξενία και πλάνο καθισμάτων με φροντίδα για κάθε καλεσμένο.',
        ru: 'Трансферы, гостеприимство и рассадка, продуманные для каждого приглашённого.',
      },
      image: '/images/services/wedding-highlights/guests.webp',
    },
    {
      title: {
        en: 'Styling & florals',
        el: 'Styling & ανθοστολισμός',
        ru: 'Стилистика и флористика',
      },
      desc: {
        en: 'Cohesive palettes, florals, and detail styling for photography-ready moments.',
        el: 'Αρμονικές παλέτες, ανθοστολισμοί και επιμελημένες λεπτομέρειες για στιγμές έτοιμες να αποτυπωθούν στον φακό.',
        ru: 'Гармоничные палитры, флористика и безупречные детали для кадров, к которым хочется возвращаться.',
      },
      image: '/images/services/wedding-highlights/bridal.webp',
    },
    {
      title: {
        en: 'Destination weddings',
        el: 'Γάμοι προορισμού',
        ru: 'Свадьбы за границей',
      },
      desc: {
        en: 'Local expertise and discreet coordination for international couples.',
        el: 'Τοπική τεχνογνωσία και διακριτικός συντονισμός για ζευγάρια από το εξωτερικό.',
        ru: 'Знание местной специфики и деликатная координация для пар из разных стран.',
      },
      image: '/images/services/wedding-highlights/destinations.webp',
    },
    {
      title: {
        en: 'Day-of coordination',
        el: 'Συντονισμός ημέρας γάμου',
        ru: 'Координация в день свадьбы',
      },
      desc: {
        en: 'Calm leadership on the day so you can stay present and celebrate.',
        el: 'Ήρεμος, έμπειρος συντονισμός την ημέρα του γάμου, ώστε εσείς να απολαύσετε κάθε στιγμή.',
        ru: 'Спокойное и уверенное руководство в день свадьбы, чтобы вы могли быть в моменте и праздновать.',
      },
      image: '/images/services/wedding-highlights/consultation.webp',
    },
  ],
}

export const weddingWhyCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  intro: LocalizedText
  items: ReadonlyArray<{
    title: LocalizedText
    body: LocalizedText
  }>
} = {
  eyebrow: {
    en: 'Our approach',
    el: 'Η προσέγγισή μας',
    ru: 'Наш подход',
  },
  title: {
    en: 'Why couples choose Wedding Sky',
    el: 'Γιατί τα ζευγάρια επιλέγουν τη Wedding Sky',
    ru: 'Почему пары выбирают Wedding Sky',
  },
  intro: {
    en: 'Standards we apply to every mandate — whether your celebration is intimate or full-scale.',
    el: 'Οι αρχές που εφαρμόζουμε σε κάθε διοργάνωση — είτε πρόκειται για μια προσωπική τελετή είτε για μια γιορτή μεγάλης κλίμακας.',
    ru: 'Стандарты, которых мы придерживаемся в каждом проекте — независимо от масштаба вашего торжества.',
  },
  items: [
    {
      title: {
        en: 'Transparent investment',
        el: 'Διαφανής επένδυση',
        ru: 'Прозрачные инвестиции',
      },
      body: {
        en: 'Disciplined planning and clear accountability across every budget line — no surprises, no hidden scope.',
        el: 'Προσεκτικός σχεδιασμός και σαφής ευθύνη σε κάθε γραμμή του προϋπολογισμού — χωρίς εκπλήξεις και κρυφές χρεώσεις.',
        ru: 'Дисциплинированное планирование и ясная ответственность по каждой статье бюджета — без сюрпризов и скрытых расходов.',
      },
    },
    {
      title: {
        en: 'Dedicated stewardship',
        el: 'Αφοσιωμένη φροντίδα',
        ru: 'Персональное сопровождение',
      },
      body: {
        en: 'One accountable team from first enquiry through your wedding week — consistent counsel, calm execution.',
        el: 'Μία υπεύθυνη ομάδα από την πρώτη επικοινωνία μέχρι την εβδομάδα του γάμου σας — σταθερή καθοδήγηση, ήρεμη υλοποίηση.',
        ru: 'Одна команда от первого запроса до свадебной недели — последовательные рекомендации и спокойная реализация.',
      },
    },
    {
      title: {
        en: 'Contingency by design',
        el: 'Προετοιμασία με εναλλακτικά πλάνα',
        ru: 'Продуманные запасные сценарии',
      },
      body: {
        en: 'Thorough preparation and scenario planning so the unexpected never derails your timeline or guest experience.',
        el: 'Ενδελεχής προετοιμασία και σενάρια, ώστε το απρόοπτο να μην επηρεάζει τη ροή ή την εμπειρία των καλεσμένων σας.',
        ru: 'Тщательная подготовка и проработка сценариев, чтобы неожиданности не нарушили тайминг и впечатления гостей.',
      },
    },
    {
      title: {
        en: 'Bespoke execution',
        el: 'Εξατομικευμένη υλοποίηση',
        ru: 'Индивидуальное воплощение',
      },
      body: {
        en: 'Discreet luxury shaped to your culture, guest list, and vision — never template, always considered.',
        el: 'Διακριτική πολυτέλεια προσαρμοσμένη στην κουλτούρα σας, στους καλεσμένους και στο όραμά σας — ποτέ πρότυπο, πάντα μεθοδική.',
        ru: 'Сдержанная роскошь с учётом вашей культуры, гостей и видения — никогда по шаблону, всегда продуманно.',
      },
    },
  ],
}

export const weddingTestimonialsCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  intro: LocalizedText
  googleRating: LocalizedText
  googleReviewsCount: LocalizedText
  reviewedOnGoogle: LocalizedText
  reviewedOnFacebook: LocalizedText
  viewOnGoogle: LocalizedText
  viewOnFacebook: LocalizedText
  carouselAria: LocalizedText
  prev: LocalizedText
  next: LocalizedText
  prevAria: LocalizedText
  nextAria: LocalizedText
  pageLabel: LocalizedText
  pageAria: LocalizedText
  reviewsShown: LocalizedText
  verifiedClient: LocalizedText
} = {
  eyebrow: {
    en: 'Your entire wedding… with just one click!',
    el: 'Ολόκληρος ο γάμος σας… μόνο με ένα κλικ!',
    ru: 'Вся свадьба… в один клик!',
  },
  title: {
    en: 'Reviews from real couples',
    el: 'Κριτικές από πραγματικά ζευγάρια',
    ru: 'Отзывы реальных пар',
  },
  intro: {
    en: 'Genuine words from Google and Facebook — from couples who trusted Wedding Sky with their celebration in Cyprus.',
    el: 'Αληθινά λόγια από το Google και το Facebook — από ζευγάρια που εμπιστεύτηκαν τη Wedding Sky για τον γάμο τους στην Κύπρο.',
    ru: 'Настоящие отзывы из Google и Facebook — от пар, доверивших Wedding Sky свой праздник на Кипре.',
  },
  googleRating: {
    en: '4.7',
    el: '4.7',
    ru: '4.7',
  },
  googleReviewsCount: {
    en: '45 Google reviews',
    el: '45 κριτικές στο Google',
    ru: '45 отзывов в Google',
  },
  reviewedOnGoogle: {
    en: 'Google review',
    el: 'Κριτική Google',
    ru: 'Отзыв Google',
  },
  reviewedOnFacebook: {
    en: 'Facebook review',
    el: 'Κριτική Facebook',
    ru: 'Отзыв Facebook',
  },
  viewOnGoogle: {
    en: 'Read on Google',
    el: 'Δείτε στο Google',
    ru: 'Читать в Google',
  },
  viewOnFacebook: {
    en: 'See on Facebook',
    el: 'Δείτε στο Facebook',
    ru: 'Смотреть в Facebook',
  },
  carouselAria: {
    en: 'Browse couple reviews',
    el: 'Περιήγηση στις κριτικές ζευγαριών',
    ru: 'Просмотр отзывов пар',
  },
  prev: {
    en: 'Previous',
    el: 'Προηγούμενες',
    ru: 'Назад',
  },
  next: {
    en: 'Next',
    el: 'Επόμενες',
    ru: 'Далее',
  },
  prevAria: {
    en: 'Show previous reviews',
    el: 'Εμφάνιση προηγούμενων κριτικών',
    ru: 'Показать предыдущие отзывы',
  },
  nextAria: {
    en: 'Show next reviews',
    el: 'Εμφάνιση επόμενων κριτικών',
    ru: 'Показать следующие отзывы',
  },
  pageLabel: {
    en: '{current} / {total}',
    el: '{current} / {total}',
    ru: '{current} / {total}',
  },
  pageAria: {
    en: 'Go to review page {n}',
    el: 'Μετάβαση στη σελίδα κριτικών {n}',
    ru: 'Перейти к странице отзывов {n}',
  },
  reviewsShown: {
    en: '{count} couple reviews',
    el: '{count} κριτικές ζευγαριών',
    ru: '{count} отзывов пар',
  },
  verifiedClient: {
    en: 'Verified client',
    el: 'Επαληθευμένος πελάτης',
    ru: 'Подтверждённый клиент',
  },
}

export const weddingAboutCopy: {
  eyebrow: LocalizedText
  pageTitle: LocalizedText
  lead: LocalizedText
  cta: LocalizedText
  photoLabel: LocalizedText
  backToAtelier: LocalizedText
  servicesCarouselEyebrow: LocalizedText
  servicesCarouselTitle: LocalizedText
  servicesCarouselLead: LocalizedText
  servicesCarouselHint: LocalizedText
} = {
  eyebrow: {
    en: 'Our story',
    el: 'Η ιστορία μας',
    ru: 'Наша история',
  },
  pageTitle: {
    en: 'Where Your Dream Wedding Becomes Reality.',
    el: 'Where Your Dream Wedding Becomes Reality.',
    ru: 'Where Your Dream Wedding Becomes Reality.',
  },
  lead: {
    en: 'There are moments in life that pass.\nAnd there are moments that remain forever.\nYour wedding is one of them.',
    el: 'Υπάρχουν στιγμές στη ζωή που περνούν.\nΚαι υπάρχουν στιγμές που μένουν για πάντα.\nΟ γάμος σας είναι μία από αυτές.',
    ru: 'Есть мгновения, которые проходят.\nИ есть мгновения, которые остаются навсегда.\nВаша свадьба — одно из них.',
  },
  cta: {
    en: 'Read our story',
    el: 'Διαβάστε την ιστορία μας',
    ru: 'Читать нашу историю',
  },
  photoLabel: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  },
  backToAtelier: {
    en: 'Back to Wedding Sky',
    el: 'Επιστροφή στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  },
  servicesCarouselEyebrow: {
    en: 'Services & experiences',
    el: 'Υπηρεσίες & εμπειρίες',
    ru: 'Услуги и впечатления',
  },
  servicesCarouselTitle: {
    en: 'Every detail. Every emotion. Every unforgettable moment.',
    el: 'Κάθε λεπτομέρεια. Κάθε συναίσθημα. Κάθε αξέχαστη στιγμή.',
    ru: 'Каждая деталь. Каждая эмоция. Каждый незабываемый момент.',
  },
  servicesCarouselLead: {
    en: 'A living gallery of Wedding Sky signatures — from island vows and yacht celebrations to cinematic production, florals, and show-stopping reception moments.',
    el: 'Ζωντανή γκαλερί με τις υπογραφές της Wedding Sky — από νησιώτικους γάμους και γιορτές σε σκάφος, μέχρι κινηματογραφική παραγωγή, ανθοστολισμό και στιγμές που κλέβουν την παράσταση.',
    ru: 'Живая галерея фирменных решений Wedding Sky — от островных церемоний и праздников на яхте до кинематографичной съёмки, флористики и ярких моментов банкета.',
  },
  servicesCarouselHint: {
    en: 'Drag or scroll to explore',
    el: 'Σύρετε ή κυλήστε για να εξερευνήσετε',
    ru: 'Прокрутите или перетащите',
  },
}

export type WeddingOfficeLocation = {
  id: string
  city: LocalizedText
  addressLines: ReadonlyArray<LocalizedText>
  phone?: string
  phoneHref?: string
  mapQuery: string
  mapTitle: LocalizedText
}

export const weddingVisitCopy: {
  title: LocalizedText
  intro: LocalizedText
  studiosLabel: LocalizedText
  phoneLabel: LocalizedText
  emailLabel: LocalizedText
  offices: ReadonlyArray<WeddingOfficeLocation>
  mapTitle: LocalizedText
} = {
  title: {
    en: 'Location & contact',
    el: 'Τοποθεσία & επικοινωνία',
    ru: 'Адрес и контакты',
  },
  intro: {
    en: 'Visit our studios in Larnaca or Limassol, or reach the Wedding Sky team by phone and email.',
    el: 'Επισκεφθείτε τα ατελιέ μας στη Λάρνακα ή τη Λεμεσό, ή επικοινωνήστε με την ομάδα της Wedding Sky τηλεφωνικά και μέσω email.',
    ru: 'Посетите наши студии в Ларнаке или Лимасоле или свяжитесь с командой Wedding Sky по телефону и email.',
  },
  studiosLabel: {
    en: 'Our studios',
    el: 'Τα ατελιέ μας',
    ru: 'Наши студии',
  },
  phoneLabel: {
    en: 'Telephone',
    el: 'Τηλέφωνο',
    ru: 'Телефон',
  },
  emailLabel: {
    en: 'E-mail',
    el: 'E-mail',
    ru: 'Электронная почта',
  },
  offices: [
    {
      id: 'larnaca',
      city: {
        en: 'Larnaca',
        el: 'Λάρνακα',
        ru: 'Ларнака',
      },
      addressLines: [
        {
          en: 'Ioannou Gladstonos 10',
          el: 'Ioannou Gladstonos 10',
          ru: 'Ioannou Gladstonos 10',
        },
        {
          en: 'Larnaca, Larnaka 6023',
          el: 'Λάρνακα, Larnaka 6023',
          ru: 'Ларнака, Larnaka 6023',
        },
        {
          en: 'Cyprus',
          el: 'Κύπρος',
          ru: 'Кипр',
        },
      ],
      phone: '+357 99 243100',
      phoneHref: 'tel:+35799243100',
      mapQuery: 'Ioannou+Gladstonos+10+Larnaca+6023+Cyprus',
      mapTitle: {
        en: 'Wedding Sky — Larnaca studio',
        el: 'Wedding Sky — ατελιέ Λάρνακας',
        ru: 'Wedding Sky — студия в Ларнаке',
      },
    },
    {
      id: 'limassol',
      city: {
        en: 'Limassol',
        el: 'Λεμεσός',
        ru: 'Лимасол',
      },
      addressLines: [
        {
          en: 'John Kennedy Street, Iris House, 4th Floor, 440A',
          el: 'John Kennedy Street, Iris House, 4th Floor, 440A',
          ru: 'John Kennedy Street, Iris House, 4th Floor, 440A',
        },
        {
          en: 'Neapolis, 3106 Limassol',
          el: 'Neapolis, 3106 Limassol',
          ru: 'Neapolis, 3106 Limassol',
        },
        {
          en: 'Cyprus',
          el: 'Κύπρος',
          ru: 'Кипр',
        },
      ],
      phone: '+357 99 243100',
      phoneHref: 'tel:+35799243100',
      mapQuery: 'Iris+House+John+Kennedy+Limassol+Cyprus',
      mapTitle: {
        en: 'Wedding Sky — Limassol studio',
        el: 'Wedding Sky — ατελιέ Λεμεσού',
        ru: 'Wedding Sky — студия в Лимасоле',
      },
    },
  ],
  mapTitle: {
    en: 'Wedding Sky — studio locations',
    el: 'Wedding Sky — τοποθεσίες ατελιέ',
    ru: 'Wedding Sky — расположение студий',
  },
}

export const weddingContactCopy = {
  eyebrow: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  title: {
    en: 'Enquire with Wedding Sky',
    el: 'Επικοινωνήστε με τη Wedding Sky',
    ru: 'Свяжитесь с Wedding Sky',
  } satisfies LocalizedText,
  intro: {
    en: 'Share a few details about your celebration — our planners will reply with care and next steps.',
    el: 'Μοιραστείτε λίγες λεπτομέρειες για τη γιορτή σας — οι planners μας θα απαντήσουν με φροντίδα και επόμενα βήματα.',
    ru: 'Расскажите немного о вашем торжестве — наши планировщики ответят внимательно и предложат следующие шаги.',
  } satisfies LocalizedText,
  optional: {
    en: 'optional',
    el: 'προαιρετικό',
    ru: 'необязательно',
  } satisfies LocalizedText,
  selectPlaceholder: {
    en: 'Select…',
    el: 'Επιλέξτε…',
    ru: 'Выберите…',
  } satisfies LocalizedText,
  fields: {
    name: {
      en: 'Your name',
      el: 'Το όνομά σας',
      ru: 'Ваше имя',
    } satisfies LocalizedText,
    email: {
      en: 'Email',
      el: 'Email',
      ru: 'Email',
    } satisfies LocalizedText,
    phone: {
      en: 'Phone',
      el: 'Τηλέφωνο',
      ru: 'Телефон',
    } satisfies LocalizedText,
    service: {
      en: 'Interest',
      el: 'Ενδιαφέρον',
      ru: 'Интерес',
    } satisfies LocalizedText,
    message: {
      en: 'Message',
      el: 'Μήνυμα',
      ru: 'Сообщение',
    } satisfies LocalizedText,
  },
  placeholders: {
    name: {
      en: 'Full name',
      el: 'Ονοματεπώνυμο',
      ru: 'Полное имя',
    } satisfies LocalizedText,
    email: {
      en: 'you@example.com',
      el: 'you@example.com',
      ru: 'you@example.com',
    } satisfies LocalizedText,
    phone: {
      en: '+357 …',
      el: '+357 …',
      ru: '+357 …',
    } satisfies LocalizedText,
    message: {
      en: 'Date ideas, guest count, venue preferences, or anything we should know…',
      el: 'Ιδέες ημερομηνίας, αριθμός καλεσμένων, προτιμήσεις χώρου ή οτιδήποτε πρέπει να γνωρίζουμε…',
      ru: 'Идеи по дате, число гостей, предпочтения по площадке или всё, что нам важно знать…',
    } satisfies LocalizedText,
  },
  serviceOptions: [
    {
      value: 'wedding-planning',
      label: {
        en: 'Wedding planning',
        el: 'Οργάνωση γάμου',
        ru: 'Организация свадьбы',
      } satisfies LocalizedText,
    },
    {
      value: 'packages',
      label: {
        en: 'Wedding packages',
        el: 'Πακέτα γάμου',
        ru: 'Свадебные пакеты',
      } satisfies LocalizedText,
    },
    {
      value: 'christening',
      label: {
        en: 'Christening',
        el: 'Βάπτιση',
        ru: 'Крестины',
      } satisfies LocalizedText,
    },
    {
      value: 'general',
      label: {
        en: 'General enquiry',
        el: 'Γενική ερώτηση',
        ru: 'Общий запрос',
      } satisfies LocalizedText,
    },
  ] as const,
  submit: {
    en: 'Send enquiry',
    el: 'Αποστολή αιτήματος',
    ru: 'Отправить запрос',
  } satisfies LocalizedText,
  submitting: {
    en: 'Sending…',
    el: 'Αποστολή…',
    ru: 'Отправка…',
  } satisfies LocalizedText,
  note: {
    en: 'We typically reply within 1–2 business days.',
    el: 'Συνήθως απαντάμε εντός 1–2 εργάσιμων ημερών.',
    ru: 'Обычно отвечаем в течение 1–2 рабочих дней.',
  } satisfies LocalizedText,
  successTitle: {
    en: 'Enquiry received',
    el: 'Το αίτημα ελήφθη',
    ru: 'Запрос получен',
  } satisfies LocalizedText,
  successBody: {
    en: 'Thank you — the Wedding Sky team will be in touch shortly.',
    el: 'Ευχαριστούμε — η ομάδα της Wedding Sky θα επικοινωνήσει σύντομα.',
    ru: 'Спасибо — команда Wedding Sky скоро свяжется с вами.',
  } satisfies LocalizedText,
  sendAnother: {
    en: 'Send another message',
    el: 'Νέο μήνυμα',
    ru: 'Отправить ещё',
  } satisfies LocalizedText,
  errors: {
    name: {
      en: 'Please enter your name.',
      el: 'Παρακαλώ εισάγετε το όνομά σας.',
      ru: 'Пожалуйста, укажите ваше имя.',
    } satisfies LocalizedText,
    email: {
      en: 'Please enter your email address.',
      el: 'Παρακαλώ εισάγετε το email σας.',
      ru: 'Пожалуйста, укажите email.',
    } satisfies LocalizedText,
    message: {
      en: 'Please enter a message.',
      el: 'Παρακαλώ εισάγετε ένα μήνυμα.',
      ru: 'Пожалуйста, напишите сообщение.',
    } satisfies LocalizedText,
    generic: {
      en: 'Could not send your enquiry. Please try again or email weddingskycy@gmail.com.',
      el: 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή στείλτε email στο weddingskycy@gmail.com.',
      ru: 'Не удалось отправить запрос. Попробуйте снова или напишите на weddingskycy@gmail.com.',
    } satisfies LocalizedText,
  },
}

export const weddingVideoCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  lead: LocalizedText
  handle: LocalizedText
  cta: LocalizedText
  watchAria: LocalizedText
} = {
  eyebrow: {
    en: 'On YouTube',
    el: 'Στο YouTube',
    ru: 'На YouTube',
  },
  title: {
    en: 'Wedding films & celebrations',
    el: 'Ταινίες γάμου & δεξιώσεις',
    ru: 'Свадебные фильмы и торжества',
  },
  lead: {
    en: 'Explore real Wedding Sky days in Cyprus — atmosphere, vows, and refined production.',
    el: 'Εξερευνήστε πραγματικές ημέρες Wedding Sky στην Κύπρο — ατμόσφαιρα, όρκοι και εκλεπτυσμένη παραγωγή.',
    ru: 'Смотрите настоящие дни Wedding Sky на Кипре — атмосфера, клятвы и изысканная постановка.',
  },
  handle: {
    en: 'Wedding Sky channel',
    el: 'Κανάλι Wedding Sky',
    ru: 'Канал Wedding Sky',
  },
  cta: {
    en: 'Visit channel',
    el: 'Μετάβαση στο κανάλι',
    ru: 'Открыть канал',
  },
  watchAria: {
    en: 'Open the Wedding Sky YouTube channel',
    el: 'Άνοιγμα του καναλιού Wedding Sky στο YouTube',
    ru: 'Открыть YouTube-канал Wedding Sky',
  },
}

export const weddingCategoryPageCopy: {
  collectionEyebrow: LocalizedText
  allCollections: LocalizedText
  enquire: LocalizedText
  enquireShort: LocalizedText
  tiersEyebrow: LocalizedText
  chooseTitle: LocalizedText
  chooseTitleLine1: LocalizedText
  chooseTitleLine2: LocalizedText
  chooseIntro: LocalizedText
  viewPackage: LocalizedText
  openPackageAria: LocalizedText
  includesLabel: LocalizedText
  includedServices: LocalizedText
  featuredBadge: LocalizedText
  previewFlyer: LocalizedText
  previewHint: LocalizedText
  catalogueNote: LocalizedText
} = {
  collectionEyebrow: {
    en: 'Wedding Sky collection',
    el: 'Συλλογή Wedding Sky',
    ru: 'Коллекция Wedding Sky',
  },
  allCollections: {
    en: 'All collections',
    el: 'Όλες οι συλλογές',
    ru: 'Все коллекции',
  },
  enquire: {
    en: 'Private enquiry',
    el: 'Ιδιωτική επικοινωνία',
    ru: 'Частный запрос',
  },
  enquireShort: {
    en: 'Enquire now',
    el: 'Εκδήλωση ενδιαφέροντος',
    ru: 'Оставить заявку',
  },
  tiersEyebrow: {
    en: 'TIERS',
    el: 'ΕΠΙΠΕΔΑ',
    ru: 'УРОВНИ',
  },
  chooseTitle: {
    en: 'Choose your package',
    el: 'Επιλέξτε το πακέτο σας',
    ru: 'Выберите свой пакет',
  },
  chooseTitleLine1: {
    en: 'Choose your',
    el: 'Επιλέξτε το',
    ru: 'Выберите',
  },
  chooseTitleLine2: {
    en: 'Wedding tier',
    el: 'επίπεδο γάμου',
    ru: 'уровень свадьбы',
  },
  chooseIntro: {
    en: 'Three investment levels in this collection. Open a package for full scope and inclusions.',
    el: 'Τρία επίπεδα επένδυσης σε αυτή τη συλλογή. Ανοίξτε ένα πακέτο για να δείτε αναλυτικά το εύρος και όσα περιλαμβάνει.',
    ru: 'Три уровня бюджета в этой коллекции. Откройте пакет, чтобы ознакомиться с полным объёмом услуг и наполнением.',
  },
  viewPackage: {
    en: 'View package',
    el: 'Δείτε το πακέτο',
    ru: 'Смотреть пакет',
  },
  openPackageAria: {
    en: 'Open {{title}} package details',
    el: 'Άνοιγμα λεπτομερειών πακέτου {{title}}',
    ru: 'Открыть подробности пакета {{title}}',
  },
  includesLabel: {
    en: 'What is included',
    el: 'Τι περιλαμβάνεται',
    ru: 'Что входит',
  },
  includedServices: {
    en: 'Core services',
    el: 'Βασικές υπηρεσίες',
    ru: 'Основные услуги',
  },
  featuredBadge: {
    en: 'Signature tier',
    el: 'Υπογραφή επιλογή',
    ru: 'Фирменный уровень',
  },
  previewFlyer: {
    en: 'View package cover',
    el: 'Προβολή εξωφύλλου πακέτου',
    ru: 'Открыть обложку пакета',
  },
  previewHint: {
    en: 'Tap to preview',
    el: 'Πατήστε για προβολή',
    ru: 'Нажмите для просмотра',
  },
  catalogueNote: {
    en: 'Every programme can be tailored with additional Wedding Sky services.',
    el: 'Κάθε πρόγραμμα μπορεί να προσαρμοστεί με επιπλέον υπηρεσίες Wedding Sky.',
    ru: 'Каждую программу можно дополнить услугами Wedding Sky.',
  },
}

export const weddingDetailPageCopy: {
  packageEyebrow: LocalizedText
  investmentFrom: LocalizedText
  bookConsultation: LocalizedText
  backTo: LocalizedText
  idealFor: LocalizedText
  includedScope: LocalizedText
  previous: LocalizedText
  next: LocalizedText
  explorePackage: LocalizedText
  previousPackageAria: LocalizedText
  nextPackageAria: LocalizedText
  packageIncludes: LocalizedText
  contactPrefix: LocalizedText
  contactLink: LocalizedText
  contactSuffix: LocalizedText
  important: LocalizedText
  packageOverview: LocalizedText
  atAGlance: LocalizedText
} = {
  packageEyebrow: {
    en: 'Wedding package',
    el: 'Πακέτο γάμου',
    ru: 'Свадебный пакет',
  },
  investmentFrom: {
    en: 'Indicative investment from',
    el: 'Ενδεικτική επένδυση από',
    ru: 'Ориентировочная стоимость от',
  },
  bookConsultation: {
    en: 'Book consultation',
    el: 'Κλείστε συμβουλευτική συνάντηση',
    ru: 'Записаться на консультацию',
  },
  backTo: {
    en: 'Back to {{title}}',
    el: 'Επιστροφή στο {{title}}',
    ru: 'Вернуться к {{title}}',
  },
  idealFor: {
    en: 'Ideal for',
    el: 'Ιδανικό για',
    ru: 'Идеально для',
  },
  includedScope: {
    en: 'Included scope',
    el: 'Περιλαμβανόμενο εύρος υπηρεσιών',
    ru: 'Объём включённых услуг',
  },
  previous: {
    en: 'Previous',
    el: 'Προηγούμενο',
    ru: 'Предыдущий',
  },
  next: {
    en: 'Next',
    el: 'Επόμενο',
    ru: 'Следующий',
  },
  explorePackage: {
    en: 'Explore package',
    el: 'Δείτε το πακέτο',
    ru: 'Смотреть пакет',
  },
  previousPackageAria: {
    en: 'View previous package: {{title}}',
    el: 'Προηγούμενο πακέτο: {{title}}',
    ru: 'Предыдущий пакет: {{title}}',
  },
  nextPackageAria: {
    en: 'View next package: {{title}}',
    el: 'Επόμενο πακέτο: {{title}}',
    ru: 'Следующий пакет: {{title}}',
  },
  packageIncludes: {
    en: 'Package includes',
    el: 'Το πακέτο περιλαμβάνει',
    ru: 'В пакет входит',
  },
  contactPrefix: {
    en: 'For a private consultation or bespoke proposal, ',
    el: 'Για ιδιωτική συνάντηση ή εξατομικευμένη πρόταση, ',
    ru: 'Для частной консультации или индивидуального предложения ',
  },
  contactLink: {
    en: 'connect with our Wedding Sky atelier',
    el: 'επικοινωνήστε με το atelier της Wedding Sky',
    ru: 'свяжитесь с нашим atelier Wedding Sky',
  },
  contactSuffix: {
    en: '.',
    el: '.',
    ru: '.',
  },
  important: {
    en: 'Important',
    el: 'Σημαντικό',
    ru: 'Важно',
  },
  packageOverview: {
    en: 'Package overview',
    el: 'Επισκόπηση πακέτου',
    ru: 'Обзор пакета',
  },
  atAGlance: {
    en: 'At a glance',
    el: 'Εν συντομία',
    ru: 'Кратко',
  },
}

export const weddingPlanEnquiryCopy = {
  eyebrow: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  title: {
    en: 'Plan your wedding',
    el: 'Οργανώστε τον γάμο σας',
    ru: 'Спланировать свадьбу',
  } satisfies LocalizedText,
  subtitle: {
    en: 'Tell us a little about your celebration — our planners will follow up with tailored ideas and next steps.',
    el: 'Πείτε μας λίγα για τη γιορτή σας — οι planners μας θα επικοινωνήσουν με εξατομικευμένες ιδέες και επόμενα βήματα.',
    ru: 'Расскажите немного о вашем торжестве — наши планировщики свяжутся с персональными идеями и следующими шагами.',
  } satisfies LocalizedText,
  optional: {
    en: 'optional',
    el: 'προαιρετικό',
    ru: 'необязательно',
  } satisfies LocalizedText,
  selectPlaceholder: {
    en: 'Select…',
    el: 'Επιλέξτε…',
    ru: 'Выберите…',
  } satisfies LocalizedText,
  fields: {
    name: {
      en: 'Your name',
      el: 'Το όνομά σας',
      ru: 'Ваше имя',
    } satisfies LocalizedText,
    partnerName: {
      en: 'Partner’s name',
      el: 'Όνομα συντρόφου',
      ru: 'Имя партнёра',
    } satisfies LocalizedText,
    email: {
      en: 'Email',
      el: 'Email',
      ru: 'Email',
    } satisfies LocalizedText,
    phone: {
      en: 'Phone',
      el: 'Τηλέφωνο',
      ru: 'Телефон',
    } satisfies LocalizedText,
    preferredDate: {
      en: 'Preferred date',
      el: 'Επιθυμητή ημερομηνία',
      ru: 'Желаемая дата',
    } satisfies LocalizedText,
    guestCount: {
      en: 'Estimated guests',
      el: 'Εκτιμώμενοι καλεσμένοι',
      ru: 'Ориентировочное число гостей',
    } satisfies LocalizedText,
    ceremonyType: {
      en: 'Ceremony type',
      el: 'Τύπος τελετής',
      ru: 'Тип церемонии',
    } satisfies LocalizedText,
    venue: {
      en: 'Venue preference',
      el: 'Προτίμηση χώρου',
      ru: 'Предпочтения по площадке',
    } satisfies LocalizedText,
    packageInterest: {
      en: 'Package interest',
      el: 'Ενδιαφέρον για πακέτο',
      ru: 'Интерес к пакету',
    } satisfies LocalizedText,
    budget: {
      en: 'Budget range',
      el: 'Εύρος προϋπολογισμού',
      ru: 'Бюджет',
    } satisfies LocalizedText,
    notes: {
      en: 'Planning notes',
      el: 'Σημειώσεις οργάνωσης',
      ru: 'Заметки по организации',
    } satisfies LocalizedText,
  },
  placeholders: {
    name: {
      en: 'Full name',
      el: 'Ονοματεπώνυμο',
      ru: 'Полное имя',
    } satisfies LocalizedText,
    partnerName: {
      en: 'Partner’s full name',
      el: 'Ονοματεπώνυμο συντρόφου',
      ru: 'Полное имя партнёра',
    } satisfies LocalizedText,
    email: {
      en: 'you@example.com',
      el: 'you@example.com',
      ru: 'you@example.com',
    } satisfies LocalizedText,
    phone: {
      en: '+357 …',
      el: '+357 …',
      ru: '+357 …',
    } satisfies LocalizedText,
    guestCount: {
      en: 'e.g. 80',
      el: 'π.χ. 80',
      ru: 'напр. 80',
    } satisfies LocalizedText,
    venue: {
      en: 'Beach, hotel, estate, still deciding…',
      el: 'Παραλία, ξενοδοχείο, κτήμα, ακόμη αποφασίζουμε…',
      ru: 'Пляж, отель, усадьба, ещё выбираем…',
    } satisfies LocalizedText,
    packageInterest: {
      en: 'Wedding, christening, or a specific package',
      el: 'Γάμος, βάπτιση ή συγκεκριμένο πακέτο',
      ru: 'Свадьба, крестины или конкретный пакет',
    } satisfies LocalizedText,
    notes: {
      en: 'Style, must-haves, timing, or anything we should know…',
      el: 'Στυλ, must-haves, timing ή οτιδήποτε πρέπει να γνωρίζουμε…',
      ru: 'Стиль, обязательные детали, сроки или всё, что нам важно знать…',
    } satisfies LocalizedText,
  },
  ceremonyOptions: [
    {
      value: 'wedding',
      label: { en: 'Wedding', el: 'Γάμος', ru: 'Свадьба' } satisfies LocalizedText,
    },
    {
      value: 'christening',
      label: { en: 'Christening', el: 'Βάπτιση', ru: 'Крестины' } satisfies LocalizedText,
    },
    {
      value: 'civil',
      label: {
        en: 'Civil ceremony',
        el: 'Πολιτική τελετή',
        ru: 'Гражданская церемония',
      } satisfies LocalizedText,
    },
    {
      value: 'other',
      label: { en: 'Other celebration', el: 'Άλλη εκδήλωση', ru: 'Другое торжество' } satisfies LocalizedText,
    },
  ] as const,
  budgetOptions: [
    {
      value: 'under-5k',
      label: { en: 'Under €5,000', el: 'Κάτω από €5.000', ru: 'До €5 000' } satisfies LocalizedText,
    },
    {
      value: '5-10k',
      label: { en: '€5,000 – €10,000', el: '€5.000 – €10.000', ru: '€5 000 – €10 000' } satisfies LocalizedText,
    },
    {
      value: '10-20k',
      label: { en: '€10,000 – €20,000', el: '€10.000 – €20.000', ru: '€10 000 – €20 000' } satisfies LocalizedText,
    },
    {
      value: '20k-plus',
      label: { en: '€20,000+', el: '€20.000+', ru: '€20 000+' } satisfies LocalizedText,
    },
    {
      value: 'undecided',
      label: {
        en: 'Still deciding',
        el: 'Ακόμη αποφασίζουμε',
        ru: 'Ещё решаем',
      } satisfies LocalizedText,
    },
  ] as const,
  submit: {
    en: 'Send enquiry',
    el: 'Αποστολή αιτήματος',
    ru: 'Отправить запрос',
  } satisfies LocalizedText,
  submitting: {
    en: 'Sending…',
    el: 'Αποστολή…',
    ru: 'Отправка…',
  } satisfies LocalizedText,
  note: {
    en: 'We’ll reply by email within 1–2 business days.',
    el: 'Θα απαντήσουμε με email εντός 1–2 εργάσιμων ημερών.',
    ru: 'Ответим по email в течение 1–2 рабочих дней.',
  } satisfies LocalizedText,
  successTitle: {
    en: 'Enquiry received',
    el: 'Το αίτημα ελήφθη',
    ru: 'Запрос получен',
  } satisfies LocalizedText,
  successBody: {
    en: 'Thank you — the Wedding Sky team will be in touch shortly to begin planning your celebration.',
    el: 'Ευχαριστούμε — η ομάδα της Wedding Sky θα επικοινωνήσει σύντομα για να ξεκινήσουμε τον σχεδιασμό της γιορτής σας.',
    ru: 'Спасибо — команда Wedding Sky скоро свяжется с вами, чтобы начать планирование вашего торжества.',
  } satisfies LocalizedText,
  done: {
    en: 'Done',
    el: 'Έτοιμο',
    ru: 'Готово',
  } satisfies LocalizedText,
  close: {
    en: 'Close',
    el: 'Κλείσιμο',
    ru: 'Закрыть',
  } satisfies LocalizedText,
  errors: {
    name: {
      en: 'Please enter your name.',
      el: 'Παρακαλώ εισάγετε το όνομά σας.',
      ru: 'Пожалуйста, укажите ваше имя.',
    } satisfies LocalizedText,
    email: {
      en: 'Please enter your email address.',
      el: 'Παρακαλώ εισάγετε το email σας.',
      ru: 'Пожалуйста, укажите email.',
    } satisfies LocalizedText,
    phone: {
      en: 'Please enter a contact number.',
      el: 'Παρακαλώ εισάγετε αριθμό επικοινωνίας.',
      ru: 'Пожалуйста, укажите номер телефона.',
    } satisfies LocalizedText,
    generic: {
      en: 'Could not send your enquiry. Please try again or email weddingskycy@gmail.com.',
      el: 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή στείλτε email στο weddingskycy@gmail.com.',
      ru: 'Не удалось отправить запрос. Попробуйте снова или напишите на weddingskycy@gmail.com.',
    } satisfies LocalizedText,
  },
}

export const weddingConsultationCopy = {
  eyebrow: {
    en: 'Private consultation',
    el: 'Ιδιωτική συνάντηση',
    ru: 'Частная консультация',
  } satisfies LocalizedText,
  headline: {
    en: 'Book your next wedding appointment',
    el: 'Κλείστε το επόμενο ραντεβού για τον γάμο σας',
    ru: 'Запишитесь на свадебную консультацию',
  } satisfies LocalizedText,
  subline: {
    en: 'Share your first ideas with our planners — a complimentary consultation to explore style, packages, and the day you imagine.',
    el: 'Μοιραστείτε τις πρώτες σας ιδέες με τους planners μας — μια δωρεάν συνάντηση για στυλ, πακέτα και την ημέρα που ονειρεύεστε.',
    ru: 'Поделитесь первыми идеями с нашими планировщиками — бесплатная консультация о стиле, пакетах и дне вашей мечты.',
  } satisfies LocalizedText,
  benefits: [
    {
      en: 'Free first consultation',
      el: 'Δωρεάν πρώτη συνάντηση',
      ru: 'Бесплатная первая консультация',
    } satisfies LocalizedText,
    {
      en: 'Tailored ideas',
      el: 'Εξατομικευμένες ιδέες',
      ru: 'Персональные идеи',
    } satisfies LocalizedText,
    {
      en: 'No obligation',
      el: 'Χωρίς δέσμευση',
      ru: 'Без обязательств',
    } satisfies LocalizedText,
  ] as const,
  cta: {
    en: 'Book a consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
  ctaSub: {
    en: 'Takes under a minute',
    el: 'Χρειάζεται λιγότερο από ένα λεπτό',
    ru: 'Займёт меньше минуты',
  } satisfies LocalizedText,
  trustLine: {
    en: 'Limited consultation slots this month',
    el: 'Περιορισμένα ραντεβού αυτόν τον μήνα',
    ru: 'Ограниченное число слотов в этом месяце',
  } satisfies LocalizedText,
  fabLabel: {
    en: 'Book consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться',
  } satisfies LocalizedText,
  fabAria: {
    en: 'Open wedding consultation booking form',
    el: 'Άνοιγμα φόρμας κράτησης ραντεβού γάμου',
    ru: 'Открыть форму записи на свадебную консультацию',
  } satisfies LocalizedText,
  modalEyebrow: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  title: {
    en: 'Book a consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
  subtitle: {
    en: 'Tell us when you would like to meet. We will confirm a time to discuss your first ideas.',
    el: 'Πείτε μας πότε θα θέλατε να συναντηθούμε. Θα επιβεβαιώσουμε μια ώρα για να συζητήσουμε τις πρώτες σας ιδέες.',
    ru: 'Укажите удобное время. Мы подтвердим встречу чтобы обсудить ваши первые идеи.',
  } satisfies LocalizedText,
  optional: {
    en: 'optional',
    el: 'προαιρετικό',
    ru: 'необязательно',
  } satisfies LocalizedText,
  selectPlaceholder: {
    en: 'Please select',
    el: 'Επιλέξτε',
    ru: 'Выберите',
  } satisfies LocalizedText,
  fields: {
    name: {
      en: 'Your name',
      el: 'Το όνομά σας',
      ru: 'Ваше имя',
    } satisfies LocalizedText,
    partnerName: {
      en: 'Partner name',
      el: 'Το όνομα του συντρόφου σας',
      ru: 'Имя партнёра',
    } satisfies LocalizedText,
    email: {
      en: 'Email address',
      el: 'Ηλεκτρονική διεύθυνση',
      ru: 'Электронная почта',
    } satisfies LocalizedText,
    phone: {
      en: 'Phone number',
      el: 'Αριθμός τηλεφώνου',
      ru: 'Номер телефона',
    } satisfies LocalizedText,
    preferredDate: {
      en: 'Preferred date',
      el: 'Ημερομηνία που προτιμάτε',
      ru: 'Желаемая дата',
    } satisfies LocalizedText,
    timeSlot: {
      en: 'Preferred time',
      el: 'Ώρα που προτιμάτε',
      ru: 'Удобное время',
    } satisfies LocalizedText,
    meetingType: {
      en: 'How would you like to meet',
      el: 'Πώς θα θέλατε να συναντηθούμε',
      ru: 'Как вам удобнее встретиться',
    } satisfies LocalizedText,
    message: {
      en: 'Your message',
      el: 'Το μήνυμά σας',
      ru: 'Ваше сообщение',
    } satisfies LocalizedText,
  },
  placeholders: {
    name: {
      en: 'Full name',
      el: 'Ονοματεπώνυμο',
      ru: 'Полное имя',
    } satisfies LocalizedText,
    partnerName: {
      en: 'Partner full name',
      el: 'Ονοματεπώνυμο συντρόφου',
      ru: 'Полное имя партнёра',
    } satisfies LocalizedText,
    email: {
      en: 'you@example.com',
      el: 'you@example.com',
      ru: 'you@example.com',
    } satisfies LocalizedText,
    phone: {
      en: '+357 …',
      el: '+357 …',
      ru: '+357 …',
    } satisfies LocalizedText,
    message: {
      en: 'Share your first ideas or any questions you may have',
      el: 'Μοιραστείτε τις πρώτες σας ιδέες ή όποιες ερωτήσεις έχετε',
      ru: 'Поделитесь первыми идеями или любыми вопросами',
    } satisfies LocalizedText,
  },
  timeSlotOptions: [
    {
      value: 'morning',
      label: { en: 'Morning', el: 'Πρωί', ru: 'Утро' } satisfies LocalizedText,
    },
    {
      value: 'afternoon',
      label: { en: 'Afternoon', el: 'Απόγευμα', ru: 'День' } satisfies LocalizedText,
    },
    {
      value: 'evening',
      label: { en: 'Evening', el: 'Βράδυ', ru: 'Вечер' } satisfies LocalizedText,
    },
  ] as const,
  meetingTypeOptions: [
    {
      value: 'studio',
      label: {
        en: 'Visit our studio',
        el: 'Επίσκεψη στο στούντιό μας',
        ru: 'Визит в нашу студию',
      } satisfies LocalizedText,
    },
    {
      value: 'video',
      label: {
        en: 'Video call',
        el: 'Βιντεοκλήση',
        ru: 'Видеозвонок',
      } satisfies LocalizedText,
    },
    {
      value: 'phone',
      label: {
        en: 'Phone call',
        el: 'Τηλεφωνική επικοινωνία',
        ru: 'Телефонный звонок',
      } satisfies LocalizedText,
    },
  ] as const,
  submit: {
    en: 'Request appointment',
    el: 'Αίτημα για ραντεβού',
    ru: 'Запросить встречу',
  } satisfies LocalizedText,
  submitting: {
    en: 'Sending…',
    el: 'Αποστολή…',
    ru: 'Отправка…',
  } satisfies LocalizedText,
  note: {
    en: 'We will confirm your appointment by email within 1–2 business days.',
    el: 'Θα επιβεβαιώσουμε το ραντεβού σας με email εντός 1–2 εργάσιμων ημερών.',
    ru: 'Мы подтвердим встречу по email в течение 1–2 рабочих дней.',
  } satisfies LocalizedText,
  successTitle: {
    en: 'Request received',
    el: 'Το αίτημά σας καταχωρήθηκε',
    ru: 'Запрос получен',
  } satisfies LocalizedText,
  successBody: {
    en: 'Thank you. The Wedding Sky team will confirm your consultation shortly.',
    el: 'Ευχαριστούμε. Η ομάδα της Wedding Sky θα επιβεβαιώσει σύντομα το ραντεβού σας.',
    ru: 'Спасибо. Команда Wedding Sky скоро подтвердит вашу консультацию.',
  } satisfies LocalizedText,
  done: {
    en: 'Done',
    el: 'Έτοιμο',
    ru: 'Готово',
  } satisfies LocalizedText,
  close: {
    en: 'Close',
    el: 'Κλείσιμο',
    ru: 'Закрыть',
  } satisfies LocalizedText,
  errors: {
    name: {
      en: 'Please enter your name.',
      el: 'Παρακαλώ εισάγετε το όνομά σας.',
      ru: 'Пожалуйста, укажите ваше имя.',
    } satisfies LocalizedText,
    email: {
      en: 'Please enter your email address.',
      el: 'Παρακαλώ εισάγετε το email σας.',
      ru: 'Пожалуйста, укажите email.',
    } satisfies LocalizedText,
    phone: {
      en: 'Please enter a contact number.',
      el: 'Παρακαλώ εισάγετε αριθμό επικοινωνίας.',
      ru: 'Пожалуйста, укажите номер телефона.',
    } satisfies LocalizedText,
    generic: {
      en: 'Could not send your request. Please try again or email weddingskycy@gmail.com.',
      el: 'Δεν ήταν δυνατή η αποστολή. Δοκιμάστε ξανά ή στείλτε email στο weddingskycy@gmail.com.',
      ru: 'Не удалось отправить запрос. Попробуйте снова или напишите на weddingskycy@gmail.com.',
    } satisfies LocalizedText,
  },
}
