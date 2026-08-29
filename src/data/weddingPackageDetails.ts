import {
  pickLocalized,
  type LocalizedText,
  type WeddingLocale,
} from '../lib/weddingLocale'

export type WeddingPackageDetailCopy = {
  summary: LocalizedText
  idealFor: LocalizedText
  planningWindow: LocalizedText
  inclusions: LocalizedText[]
}

export type ResolvedWeddingPackageDetailCopy = {
  summary: string
  idealFor: string
  planningWindow: string
  inclusions: string[]
}

export const weddingPackageDetails: Record<string, WeddingPackageDetailCopy> = {
  basic: {
    summary: {
      en: 'A composed entry point for couples who value clarity, trusted coordination, and an impeccably managed wedding day — shaped with precision, calm, and quiet luxury.',
      el: 'Μια ολοκληρωμένη αφετηρία για ζευγάρια που εκτιμούν τη σαφήνεια, τον αξιόπιστο συντονισμό και μια άψογα διαχειριζόμενη ημέρα γάμου — με ακρίβεια, ηρεμία και διακριτική πολυτέλεια.',
      ru: 'Продуманная отправная точка для пар, которым важны ясность, надёжная координация и безупречно организованный свадебный день — с точностью, спокойствием и сдержанной роскошью.',
    },
    idealFor: {
      en: 'Couples planning an intimate or medium-scale celebration who prefer a structured programme and a clear, confident planning rhythm.',
      el: 'Για ζευγάρια που οργανώνουν μια οικεία ή μεσαίας κλίμακας γιορτή και επιθυμούν δομημένο πρόγραμμα με σαφή και σταθερό ρυθμό προετοιμασίας.',
      ru: 'Для пар, планирующих камерное или среднее по масштабу торжество и предпочитающих структурированную программу с понятным уверенным темпом подготовки.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 4–6 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 4–6 μήνες',
      ru: 'Рекомендуемый срок подготовки: 4–6 месяцев',
    },
    inclusions: [
      {
        en: 'Structured planning roadmap with monthly progress reviews',
        el: 'Δομημένο χρονοδιάγραμμα σχεδιασμού με μηνιαίους ελέγχους προόδου',
        ru: 'Структурированная дорожная карта подготовки с ежемесячным контролем прогресса',
      },
      {
        en: 'Curated supplier recommendations across core categories',
        el: 'Επιλεγμένες προτάσεις συνεργατών στις βασικές κατηγορίες',
        ru: 'Отобранные рекомендации поставщиков по ключевым категориям',
      },
      {
        en: 'Ceremony and reception timeline blueprint',
        el: 'Αναλυτικό χρονοδιάγραμμα τελετής και δεξίωσης',
        ru: 'Подробный план-график церемонии и приёма',
      },
      {
        en: 'Guest movement and hospitality guidance',
        el: 'Καθοδήγηση για τη ροή και φιλοξενία των καλεσμένων',
        ru: 'Рекомендации по перемещению гостей и организации гостеприимства',
      },
      {
        en: 'Final-week confirmations and rehearsal sequencing',
        el: 'Τελικές επιβεβαιώσεις και ροή πρόβας την τελευταία εβδομάδα',
        ru: 'Финальные подтверждения и сценарий репетиции на последней неделе',
      },
      {
        en: 'Lead planner coordination on the wedding day',
        el: 'Συντονισμός από τον επικεφαλής οργανωτή την ημέρα του γάμου',
        ru: 'Координация ведущего организатора в день свадьбы',
      },
    ],
  },
  'basic-plus': {
    summary: {
      en: 'Builds on Basic with richer styling guidance, expanded partner curation, and tighter guest-flow orchestration from arrival to after-party.',
      el: 'Επεκτείνει το Basic με πιο ολοκληρωμένο styling, επιλεγμένους συνεργάτες και καλύτερη ροή εμπειρίας για τους καλεσμένους.',
      ru: 'Расширяет пакет Basic: более глубокая стилистическая проработка, широкий выбор партнёров и точная координация перемещений гостей от прибытия до афтепати.',
    },
    idealFor: {
      en: 'Couples wanting stronger visual direction and support while keeping the production scope controlled.',
      el: 'Για ζευγάρια που θέλουν πιο έντονη αισθητική κατεύθυνση χωρίς μεγάλη αύξηση παραγωγής.',
      ru: 'Для пар, которым нужны более выразительная визуальная концепция и дополнительная поддержка при сохранении контролируемого масштаба.',
    },
    planningWindow: {
      en: 'Recommended planning window: 6-8 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 6-8 μήνες',
      ru: 'Рекомендуемый срок подготовки: 6–8 месяцев',
    },
    inclusions: [
      {
        en: 'Everything in Basic',
        el: 'Όλα όσα περιλαμβάνονται στο Basic',
        ru: 'Всё, что входит в Basic',
      },
      {
        en: 'Enhanced styling moodboards and palette curation',
        el: 'Εμπλουτισμένα moodboards styling και επιμέλεια χρωματικής παλέτας',
        ru: 'Расширенные стилистические мудборды и подбор цветовой палитры',
      },
      {
        en: 'Expanded vendor negotiation support',
        el: 'Εκτεταμένη υποστήριξη στις διαπραγματεύσεις με συνεργάτες',
        ru: 'Расширенная поддержка в переговорах с подрядчиками',
      },
      {
        en: 'Refined ceremony transitions and cue sheets',
        el: 'Λεπτομερής επιμέλεια των μεταβάσεων και των cue sheets της τελετής',
        ru: 'Тщательно проработанные переходы церемонии и листы технических сигналов',
      },
      {
        en: 'Guest transport and hospitality touchpoint planning',
        el: 'Σχεδιασμός μεταφορών και σημείων φιλοξενίας των καλεσμένων',
        ru: 'Планирование трансферов и ключевых этапов обслуживания гостей',
      },
      {
        en: 'Extended on-site coordination window',
        el: 'Διευρυμένο ωράριο επιτόπιου συντονισμού',
        ru: 'Расширенное время координации на площадке',
      },
    ],
  },
  classic: {
    summary: {
      en: 'A full creative-and-production tier where concept, guest experience, and execution are managed as one coherent luxury narrative.',
      el: 'Πλήρες πακέτο δημιουργικού σχεδιασμού και παραγωγής, με ενιαία εμπειρία και αρμονική εκτέλεση.',
      ru: 'Полный пакет креативного руководства и организации, в котором концепция, впечатления гостей и реализация объединены в цельную роскошную историю.',
    },
    idealFor: {
      en: 'Destination couples and larger celebrations requiring structured collaboration across many partners.',
      el: 'Ιδανικό για destination γάμους και μεγαλύτερες εκδηλώσεις με πολλούς συνεργάτες.',
      ru: 'Для свадеб за рубежом и масштабных торжеств, требующих системной работы множества партнёров.',
    },
    planningWindow: {
      en: 'Recommended planning window: 8-10 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 8-10 μήνες',
      ru: 'Рекомендуемый срок подготовки: 8–10 месяцев',
    },
    inclusions: [
      {
        en: 'Everything in Basic Plus',
        el: 'Όλα όσα περιλαμβάνονται στο Basic Plus',
        ru: 'Всё, что входит в Basic Plus',
      },
      {
        en: 'Full creative direction and styling architecture',
        el: 'Πλήρης δημιουργική κατεύθυνση και αρχιτεκτονική styling',
        ru: 'Полное творческое руководство и разработка стилистической концепции',
      },
      {
        en: 'Lighting and atmosphere concept supervision',
        el: 'Επίβλεψη της ιδέας φωτισμού και ατμόσφαιρας',
        ru: 'Контроль концепции освещения и атмосферы',
      },
      {
        en: 'Detailed guest journey mapping',
        el: 'Λεπτομερής σχεδιασμός της διαδρομής των καλεσμένων',
        ru: 'Детальная проработка пути гостя',
      },
      {
        en: 'Multi-vendor production meetings and sign-off',
        el: 'Συναντήσεις παραγωγής με όλους τους συνεργάτες και τελική έγκριση',
        ru: 'Организационные встречи со всеми подрядчиками и финальное согласование',
      },
      {
        en: 'Dual coordinator presence on event day',
        el: 'Παρουσία δύο συντονιστών την ημέρα της εκδήλωσης',
        ru: 'Работа двух координаторов в день мероприятия',
      },
    ],
  },
  'classic-plus': {
    summary: {
      en: 'Advanced production for elevated celebrations with deeper personalization, technical staging precision, and extended hosting coverage.',
      el: 'Αναβαθμισμένη παραγωγή για πιο απαιτητικές εκδηλώσεις με εξατομίκευση, τεχνική ακρίβεια και εκτεταμένη υποστήριξη.',
      ru: 'Организация торжеств высокого уровня с глубокой персонализацией, технически точной постановкой и расширенным сопровождением гостей.',
    },
    idealFor: {
      en: 'Couples hosting multi-part wedding weekends or high-touch guest programmes.',
      el: 'Για ζευγάρια που οργανώνουν πολυήμερο γαμήλιο πρόγραμμα με υψηλές απαιτήσεις φιλοξενίας.',
      ru: 'Для пар, планирующих свадебный уикенд из нескольких событий или программу с повышенным вниманием к гостям.',
    },
    planningWindow: {
      en: 'Recommended planning window: 10-12 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 10-12 μήνες',
      ru: 'Рекомендуемый срок подготовки: 10–12 месяцев',
    },
    inclusions: [
      {
        en: 'Everything in Classic',
        el: 'Όλα όσα περιλαμβάνονται στο Classic',
        ru: 'Всё, что входит в Classic',
      },
      {
        en: 'Expanded run-of-show with technical sequencing',
        el: 'Διευρυμένο πρόγραμμα εκδήλωσης με τεχνική αλληλουχία',
        ru: 'Расширенный сценарный план с технической последовательностью',
      },
      {
        en: 'Bespoke detail program and stationery alignment',
        el: 'Εξατομικευμένο πρόγραμμα λεπτομερειών και εναρμόνιση εντύπων',
        ru: 'Индивидуальная проработка деталей и единый стиль полиграфии',
      },
      {
        en: 'Pre-event hosting experiences and briefings',
        el: 'Εμπειρίες φιλοξενίας και ενημερώσεις πριν από την εκδήλωση',
        ru: 'Приветственные мероприятия и инструктажи перед торжеством',
      },
      {
        en: 'Extended supplier quality control',
        el: 'Εκτεταμένος ποιοτικός έλεγχος προμηθευτών',
        ru: 'Расширенный контроль качества работы поставщиков',
      },
      {
        en: 'Post-event wrap-down and vendor closure',
        el: 'Ολοκλήρωση παραγωγής και διευθέτηση συνεργατών μετά την εκδήλωση',
        ru: 'Завершение работ на площадке и закрытие вопросов с подрядчиками после события',
      },
    ],
  },
  premium: {
    summary: {
      en: 'Our signature white-glove tier: complete discretion, maximum craftsmanship, and executive-level oversight from first brief to final farewell.',
      el: 'Η κορυφαία επιλογή μας: απόλυτη διακριτικότητα, υψηλή αισθητική και πλήρης επίβλεψη μέχρι την τελευταία λεπτομέρεια.',
      ru: 'Наш фирменный пакет безупречного персонального сервиса: полная конфиденциальность, высочайшее мастерство и руководство экспертного уровня от первого брифа до финального прощания.',
    },
    idealFor: {
      en: 'Luxury celebrations where privacy, personalization, and flawless timing are non-negotiable.',
      el: 'Για πολυτελείς γάμους όπου η ιδιωτικότητα, η εξατομίκευση και το άψογο timing είναι απαραίτητα.',
      ru: 'Для роскошных торжеств, где конфиденциальность, персонализация и безупречный тайминг являются обязательными.',
    },
    planningWindow: {
      en: 'Recommended planning window: 12+ months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 12+ μήνες',
      ru: 'Рекомендуемый срок подготовки: от 12 месяцев',
    },
    inclusions: [
      {
        en: 'Everything in Classic Plus',
        el: 'Όλα όσα περιλαμβάνονται στο Classic Plus',
        ru: 'Всё, что входит в Classic Plus',
      },
      {
        en: 'Executive creative leadership and final approvals',
        el: 'Δημιουργική ηγεσία ανώτατου επιπέδου και τελικές εγκρίσεις',
        ru: 'Творческое руководство экспертного уровня и финальные согласования',
      },
      {
        en: 'VIP hospitality and protocol handling',
        el: 'VIP φιλοξενία και διαχείριση πρωτοκόλλου',
        ru: 'VIP-гостеприимство и соблюдение протокола',
      },
      {
        en: 'Priority vendor network and premium access',
        el: 'Δίκτυο συνεργατών προτεραιότητας και premium πρόσβαση',
        ru: 'Приоритетная сеть подрядчиков и премиальный доступ',
      },
      {
        en: 'High-touch contingency and risk planning',
        el: 'Ενισχυμένος σχεδιασμός εναλλακτικών σεναρίων και διαχείρισης κινδύνων',
        ru: 'Детальная проработка резервных сценариев и управление рисками',
      },
      {
        en: 'Full white-glove team coverage',
        el: 'Πλήρης κάλυψη από ομάδα white-glove εξυπηρέτησης',
        ru: 'Полное сопровождение командой персонального сервиса',
      },
    ],
  },
  customised: {
    summary: {
      en: 'A fully bespoke engagement shaped around your vision, cultural needs, timeline, and investment parameters with custom scoping.',
      el: 'Πλήρως προσαρμοσμένο πρόγραμμα με βάση το όραμα, το ύφος, το χρονοδιάγραμμα και το budget σας.',
      ru: 'Полностью индивидуальное сотрудничество, выстроенное вокруг вашего видения, культурных особенностей, сроков и бюджета.',
    },
    idealFor: {
      en: 'Couples with unique requirements, multi-location concepts, or non-standard production structures.',
      el: 'Για ζευγάρια με μοναδικές απαιτήσεις, πολλαπλές τοποθεσίες ή μη τυπικές παραγωγικές ανάγκες.',
      ru: 'Для пар с особыми требованиями, концепцией на нескольких площадках или нестандартной структурой организации.',
    },
    planningWindow: {
      en: 'Planning window and scope defined after private consultation',
      el: 'Χρονοδιάγραμμα και εύρος ορίζονται μετά από ιδιωτική συνάντηση',
      ru: 'Сроки подготовки и объём работ определяются после индивидуальной консультации',
    },
    inclusions: [
      {
        en: 'Private strategic briefing and discovery workshop',
        el: 'Ιδιωτικό στρατηγικό briefing και εργαστήριο διερεύνησης αναγκών',
        ru: 'Индивидуальный стратегический брифинг и установочная сессия',
      },
      {
        en: 'Custom scope architecture and phased budget model',
        el: 'Εξατομικευμένη δομή έργου και σταδιακό μοντέλο προϋπολογισμού',
        ru: 'Индивидуальная структура проекта и поэтапная модель бюджета',
      },
      {
        en: 'Tailored vendor ecosystem and contract strategy',
        el: 'Προσαρμοσμένο δίκτυο συνεργατών και στρατηγική συμβάσεων',
        ru: 'Персонально подобранная сеть подрядчиков и договорная стратегия',
      },
      {
        en: 'Bespoke production design and guest-experience flow',
        el: 'Εξατομικευμένος σχεδιασμός παραγωγής και ροής εμπειρίας καλεσμένων',
        ru: 'Индивидуальный дизайн события и сценарий взаимодействия с гостями',
      },
      {
        en: 'Flexible team structure aligned to project complexity',
        el: 'Ευέλικτη δομή ομάδας προσαρμοσμένη στην πολυπλοκότητα του έργου',
        ru: 'Гибкая структура команды с учётом сложности проекта',
      },
      {
        en: 'Executive oversight and premium delivery governance',
        el: 'Επίβλεψη ανώτατου επιπέδου και premium διαχείριση υλοποίησης',
        ru: 'Экспертный контроль и управление реализацией премиального уровня',
      },
    ],
  },

  'christening-1': {
    summary: {
      en: 'An elegant décor foundation for church and reception — themed styling, arches, table décor, and refined baptism-day details.',
      el: 'Κομψή βάση διακόσμησης για εκκλησία και δεξίωση — θεματικός στολισμός, αψίδες, τραπέζια και εκλεπτυσμένες λεπτομέρειες βάπτισης.',
      ru: 'Элегантная основа декора для храма и приёма — тематическое оформление, арки, столы и изысканные детали дня крещения.',
    },
    idealFor: {
      en: 'Families seeking a beautifully composed baptism with complete decorative coverage.',
      el: 'Για οικογένειες που θέλουν μια όμορφα συντεθειμένη βάπτιση με πλήρη κάλυψη διακόσμησης.',
      ru: 'Для семей, которым важно гармоничное крещение с полным декоративным сопровождением.',
    },
    planningWindow: {
      en: 'Recommended planning window: 6–10 weeks',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 6–10 εβδομάδες',
      ru: 'Рекомендуемый срок подготовки: 6–10 недель',
    },
    inclusions: [
      { en: 'Full church & reception décor programme', el: 'Πλήρες πρόγραμμα διακόσμησης εκκλησίας και δεξίωσης', ru: 'Полная программа декора храма и приёма' },
      { en: 'Themed arches, fairy lights, and favour styling', el: 'Θεματικές αψίδες, fairy lights και styling μπομπονιέρων', ru: 'Тематические арки, гирлянды и оформление бонбоньерок' },
      { en: '15 table décors and parents’ & godparents’ table', el: 'Στολισμός 15 τραπεζιών και τραπεζιού γονέων/νονού', ru: 'Декор 15 столов и стола родителей/крёстных' },
      { en: 'Welcome frame and secure envelope box', el: 'Κορνίζα υποδοχής και ασφαλές κουτί φακέλων', ru: 'Рамка приветствия и ящик для конвертов' },
    ],
  },
  'christening-2': {
    summary: {
      en: 'Package 1 elevated with floral architecture, decorative columns, and themed guest-list presentation.',
      el: 'Το Πακέτο 1 αναβαθμισμένο με ανθοστολισμό, διακοσμητικές κολώνες και θεματική λίστα καλεσμένων.',
      ru: 'Пакет 1 с цветочной архитектурой, декоративными колоннами и тематическим списком гостей.',
    },
    idealFor: {
      en: 'Celebrations that want richer floral presence and guest presentation.',
      el: 'Για γιορτές που θέλουν πιο πλούσιο ανθοστολισμό και παρουσίαση καλεσμένων.',
      ru: 'Для торжеств с более насыщенным цветочным оформлением и презентацией гостей.',
    },
    planningWindow: {
      en: 'Recommended planning window: 8–12 weeks',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 8–12 εβδομάδες',
      ru: 'Рекомендуемый срок подготовки: 8–12 недель',
    },
    inclusions: [
      { en: 'Everything in Package 1', el: 'Όλα του Πακέτου 1', ru: 'Всё из Пакета 1' },
      { en: 'Flower arch and floral columns', el: 'Αψίδα με λουλούδια και κολώνες με βάσεις λουλουδιών', ru: 'Цветочная арка и колонны' },
      { en: 'Themed guest list styling', el: 'Λίστα καλεσμένων με βάση το θέμα', ru: 'Оформление списка гостей по теме' },
    ],
  },
  'christening-3': {
    summary: {
      en: 'A complete baptism day — décor, photography & albums, treats, candy bar, invitations, and full coordination.',
      el: 'Ολοκληρωμένη ημέρα βάπτισης — διακόσμηση, φωτογραφία και άλμπουμ, κεράσματα, candy bar, προσκλήσεις και πλήρης συντονισμός.',
      ru: 'Полный день крещения — декор, фото и альбомы, угощения, candy bar, приглашения и координация.',
    },
    idealFor: {
      en: 'Families who want memory-making and hospitality handled in one composed programme.',
      el: 'Για οικογένειες που θέλουν αναμνήσεις και φιλοξενία σε ένα ενιαίο πρόγραμμα.',
      ru: 'Для семей, которым важны воспоминания и гостеприимство в одной программе.',
    },
    planningWindow: {
      en: 'Recommended planning window: 3–5 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 3–5 μήνες',
      ru: 'Рекомендуемый срок подготовки: 3–5 месяцев',
    },
    inclusions: [
      { en: 'Elevated décor from Packages 1–2', el: 'Αναβαθμισμένη διακόσμηση των Πακέτων 1–2', ru: 'Расширенный декор Пакетов 1–2' },
      { en: 'Leather albums, HD video, canvas & prints', el: 'Δερμάτινα άλμπουμ, HD βίντεο, καμβάς και εκτυπώσεις', ru: 'Кожаные альбомы, HD-видео, холст и отпечатки' },
      { en: 'Treats, themed cake, candy bar & drink fountains', el: 'Κεράσματα, θεματική τούρτα, candy bar και σιντριβάνια ποτών', ru: 'Угощения, торт, candy bar и фонтаны напитков' },
      { en: '60 invitations and full day coordination', el: '60 προσκλήσεις και πλήρης συντονισμός ημέρας', ru: '60 приглашений и полная координация дня' },
    ],
  },
  'christening-4': {
    summary: {
      en: 'Signature hospitality with expanded treats, 100 invitations, and entertainment — magician, clown, or DJ.',
      el: 'Υπογραφή φιλοξενίας με περισσότερα κεράσματα, 100 προσκλήσεις και ψυχαγωγία — μάγος, κλόουν ή DJ.',
      ru: 'Фирменное гостеприимство: больше угощений, 100 приглашений и развлечение — фокусник, клоун или DJ.',
    },
    idealFor: {
      en: 'Larger celebrations seeking a festive, fully hosted baptism experience.',
      el: 'Για μεγαλύτερες γιορτές που θέλουν εορταστική, πλήρως φιλοξενούμενη εμπειρία βάπτισης.',
      ru: 'Для более крупных торжеств с праздничным, полностью организованным крещением.',
    },
    planningWindow: {
      en: 'Recommended planning window: 4–6 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 4–6 μήνες',
      ru: 'Рекомендуемый срок подготовки: 4–6 месяцев',
    },
    inclusions: [
      { en: 'All of Package 3 inclusions', el: 'Όλες οι παροχές του Πακέτου 3', ru: 'Все позиции Пакета 3' },
      { en: '150 treats and expanded sweet selection', el: '150 κεράσματα και πλουσιότερη επιλογή γλυκών', ru: '150 угощений и расширенный выбор сладостей' },
      { en: '100 invitations from 150 designs', el: '100 προσκλήσεις από 150 σχέδια', ru: '100 приглашений из 150 дизайнов' },
      { en: 'Entertainment choice: magician, clown, or DJ', el: 'Επιλογή ψυχαγωγίας: μάγος, κλόουν ή DJ', ru: 'Развлечение: фокусник, клоун или DJ' },
    ],
  },

  'christening-oceanic': {
    summary: {
      en: 'A signature yacht baptism on the endless blue — luxury cruise hospitality, themed décor, photography, treats, and full coordination from Larnaca or Protaras.',
      el: 'Υπογραφή βάπτισης σε γιοτ στο απέραντο γαλάζιο — πολυτελής κρουαζιέρα, θεματικός στολισμός, φωτογραφία, κεράσματα και πλήρης συντονισμός από Λάρνακα ή Πρωταρά.',
      ru: 'Фирменное крещение на яхте в бескрайней синеве — роскошный круиз, тематический декор, фото, угощения и полная координация из Ларнаки или Протараса.',
    },
    idealFor: {
      en: 'Families who want an unforgettable ocean-themed baptism aboard a luxury yacht for up to 150 guests.',
      el: 'Για οικογένειες που θέλουν μια αξέχαστη βάπτιση με θέμα τη θάλασσα σε πολυτελές γιοτ για έως 150 καλεσμένους.',
      ru: 'Для семей, мечтающих о незабываемом крещении в морской теме на роскошной яхте до 150 гостей.',
    },
    planningWindow: {
      en: 'Recommended planning window: 5–8 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 5–8 μήνες',
      ru: 'Рекомендуемый срок подготовки: 5–8 месяцев',
    },
    inclusions: [
      { en: 'Luxury yacht cruise for up to 150 guests', el: 'Κρουαζιέρα σε πολυτελές γιοτ για έως 150 άτομα', ru: 'Круиз на роскошной яхте до 150 гостей' },
      { en: 'Themed yacht décor, photography & albums', el: 'Θεματικός στολισμός γιοτ, φωτογραφία & άλμπουμ', ru: 'Тематический декор яхты, фото и альбомы' },
      { en: '150 treats, themed cake, candy bar & drink fountains', el: '150 κεράσματα, θεματική τούρτα, candy bar & σιντριβάνια ποτών', ru: '150 угощений, торт, candy bar и фонтаны напитков' },
      { en: '100 invitations, entertainment & full day coordination', el: '100 προσκλήσεις, ψυχαγωγία & πλήρης συντονισμός ημέρας', ru: '100 приглашений, развлечения и координация дня' },
    ],
  },

}

export function getWeddingPackageDetail(
  id: string,
  locale: WeddingLocale,
): ResolvedWeddingPackageDetailCopy | undefined {
  const detail = weddingPackageDetails[id]
  if (!detail) return undefined

  return {
    summary: pickLocalized(locale, detail.summary),
    idealFor: pickLocalized(locale, detail.idealFor),
    planningWindow: pickLocalized(locale, detail.planningWindow),
    inclusions: detail.inclusions.map((inclusion) => pickLocalized(locale, inclusion)),
  }
}
