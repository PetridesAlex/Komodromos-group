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
      en: 'A clear and elegant foundation for couples who want trusted coordination, disciplined timelines, and a polished wedding day without overproduction.',
      el: 'Μια κομψή και ξεκάθαρη βάση για ζευγάρια που θέλουν αξιόπιστο συντονισμό και άψογη ημέρα γάμου χωρίς υπερβολές.',
      ru: 'Ясная и элегантная основа для пар, которым важны надёжная координация, точный график и безупречный свадебный день без излишней постановочности.',
    },
    idealFor: {
      en: 'Intimate to mid-size weddings with focused priorities and efficient decision making.',
      el: 'Ιδανικό για μικρούς ή μεσαίους γάμους με ξεκάθαρες προτεραιότητες και γρήγορες αποφάσεις.',
      ru: 'Для камерных и средних свадеб с чёткими приоритетами и оперативным принятием решений.',
    },
    planningWindow: {
      en: 'Recommended planning window: 4-6 months',
      el: 'Προτεινόμενο παράθυρο προετοιμασίας: 4-6 μήνες',
      ru: 'Рекомендуемый срок подготовки: 4–6 месяцев',
    },
    inclusions: [
      {
        en: 'Core planning timeline and monthly checkpoints',
        el: 'Βασικό χρονοδιάγραμμα σχεδιασμού και μηνιαίοι έλεγχοι προόδου',
        ru: 'Основной график подготовки и ежемесячные контрольные встречи',
      },
      {
        en: 'Vendor shortlist across key categories',
        el: 'Σύντομη λίστα συνεργατών στις βασικές κατηγορίες',
        ru: 'Подборка подрядчиков по ключевым категориям',
      },
      {
        en: 'Ceremony + reception run sheet',
        el: 'Αναλυτικό πρόγραμμα τελετής και δεξίωσης',
        ru: 'Сценарный план церемонии и приёма',
      },
      {
        en: 'Guest logistics baseline guidance',
        el: 'Βασική καθοδήγηση για τη μετακίνηση και εξυπηρέτηση των καλεσμένων',
        ru: 'Базовые рекомендации по логистике гостей',
      },
      {
        en: 'Final week confirmations and rehearsal flow',
        el: 'Τελικές επιβεβαιώσεις και ροή πρόβας την τελευταία εβδομάδα',
        ru: 'Финальные подтверждения и план репетиции в последнюю неделю',
      },
      {
        en: 'Day-of coordination by lead planner',
        el: 'Συντονισμός την ημέρα του γάμου από τον επικεφαλής διοργανωτή',
        ru: 'Координация свадебного дня ведущим организатором',
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
