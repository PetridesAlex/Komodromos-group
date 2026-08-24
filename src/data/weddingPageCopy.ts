import type { LocalizedText } from '../lib/weddingLocale'

type WeddingPillar = {
  id: string
  label: LocalizedText
  href: string
}

type WeddingFaqItem = {
  title: LocalizedText
  body: LocalizedText
}

type WeddingOffering = {
  title: LocalizedText
  desc: LocalizedText
  image: string
}

type WeddingAboutCard = {
  title: LocalizedText
  tagline?: LocalizedText
  copy: LocalizedText
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
    id: 'wedding-packages',
    label: {
      en: 'Wedding Packages',
      el: 'Πακέτα Γάμου',
      ru: 'Свадебные пакеты',
    },
    href: '/services/wedding/categories/wedding',
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
  {
    id: 'wedding-services',
    label: {
      en: 'Wedding Services',
      el: 'Υπηρεσίες Γάμου',
      ru: 'Свадебные услуги',
    },
    href: '#wedding-services',
  },
]

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
    el: 'Γιορτές στην Κύπρο, σχεδιασμένες με φροντίδα.',
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
} = {
  eyebrow: {
    en: 'The atelier catalogue',
    el: 'Ο κατάλογος του atelier',
    ru: 'Каталог atelier',
  },
  title: {
    en: 'Curated services',
    el: 'Επιλεγμένες υπηρεσίες',
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
  srOpen: LocalizedText
  phraseKnow: LocalizedText
  phraseFaq: LocalizedText
  phraseAnswers: LocalizedText
  modalTitle: LocalizedText
  close: LocalizedText
  closeBackdrop: LocalizedText
} = {
  sectionAria: {
    en: 'Wedding package FAQ access',
    el: 'Πρόσβαση στις συχνές ερωτήσεις για τα πακέτα γάμου',
    ru: 'Доступ к вопросам о свадебных пакетах',
  },
  srOpen: {
    en: 'Everything you need to know for your wedding Day — open FAQ',
    el: 'Όλα όσα χρειάζεται να γνωρίζετε για την ημέρα του γάμου σας — άνοιγμα συχνών ερωτήσεων',
    ru: 'Всё, что нужно знать о дне вашей свадьбы — открыть частые вопросы',
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
  modalTitle: {
    en: 'Everything you need to know for your wedding Day',
    el: 'Όλα όσα χρειάζεται να γνωρίζετε για την ημέρα του γάμου σας',
    ru: 'Всё, что нужно знать о дне вашей свадьбы',
  },
  close: {
    en: 'Close',
    el: 'Κλείσιμο',
    ru: 'Закрыть',
  },
  closeBackdrop: {
    en: 'Close information popup',
    el: 'Κλείσιμο αναδυόμενου παραθύρου πληροφοριών',
    ru: 'Закрыть информационное окно',
  },
}

export const weddingFaqItems: ReadonlyArray<WeddingFaqItem> = [
  {
    title: {
      en: '1. Already Booked Some Services?',
      el: '1. Έχετε ήδη κλείσει κάποιες υπηρεσίες;',
      ru: '1. Вы уже забронировали некоторые услуги?',
    },
    body: {
      en: 'Absolutely. Many couples come to us after already arranging some parts of their wedding, whether through other suppliers, friends, or family contacts. We can create a package that includes only the remaining services you still need, ensuring everything works together seamlessly.',
      el: 'Βεβαίως. Πολλά ζευγάρια απευθύνονται σε εμάς έχοντας ήδη διευθετήσει ορισμένα μέρη του γάμου τους, είτε μέσω άλλων προμηθευτών είτε μέσω φίλων ή οικογενειακών γνωριμιών. Μπορούμε να δημιουργήσουμε ένα πακέτο που περιλαμβάνει μόνο τις υπόλοιπες υπηρεσίες που χρειάζεστε, διασφαλίζοντας ότι όλα θα συνδυαστούν αρμονικά.',
      ru: 'Конечно. Многие пары обращаются к нам, уже организовав часть свадьбы самостоятельно, через других подрядчиков, друзей или родственников. Мы составим пакет только из тех услуг, которые вам ещё необходимы, и обеспечим их безупречную согласованность.',
    },
  },
  {
    title: {
      en: '2. Can I Combine Different Package Options?',
      el: '2. Μπορώ να συνδυάσω επιλογές από διαφορετικά πακέτα;',
      ru: '2. Можно ли объединить услуги из разных пакетов?',
    },
    body: {
      en: 'Yes, of course. Our packages are flexible and can be adjusted to suit your preferences. You can mix services from different packages or even build a completely new package from scratch based on your own style, needs, and priorities.',
      el: 'Ναι, φυσικά. Τα πακέτα μας είναι ευέλικτα και μπορούν να προσαρμοστούν στις προτιμήσεις σας. Μπορείτε να συνδυάσετε υπηρεσίες από διαφορετικά πακέτα ή ακόμη και να δημιουργήσετε ένα εντελώς νέο πακέτο από την αρχή, σύμφωνα με το προσωπικό σας ύφος, τις ανάγκες και τις προτεραιότητές σας.',
      ru: 'Да, разумеется. Наши пакеты гибкие и адаптируются под ваши пожелания. Вы можете объединить услуги из разных пакетов или создать совершенно новый пакет с нуля, исходя из своего стиля, потребностей и приоритетов.',
    },
  },
  {
    title: {
      en: '3. What Happens If I Remove a Service?',
      el: '3. Τι συμβαίνει αν αφαιρέσω μια υπηρεσία;',
      ru: '3. Что произойдёт, если исключить услугу?',
    },
    body: {
      en: 'The price is always adjusted based on the services included. Removing a service will reduce the overall cost, while adding extra services will increase it accordingly. A valid wedding package must include at least 5 services.',
      el: 'Η τιμή προσαρμόζεται πάντοτε ανάλογα με τις υπηρεσίες που περιλαμβάνονται. Η αφαίρεση μιας υπηρεσίας μειώνει το συνολικό κόστος, ενώ η προσθήκη επιπλέον υπηρεσιών το αυξάνει αναλόγως. Για να θεωρείται ολοκληρωμένο, ένα πακέτο γάμου πρέπει να περιλαμβάνει τουλάχιστον 5 υπηρεσίες.',
      ru: 'Стоимость всегда рассчитывается с учётом включённых услуг. Если исключить услугу, общая сумма уменьшится; при добавлении дополнительных услуг она соответственно возрастёт. Полноценный свадебный пакет должен включать не менее 5 услуг.',
    },
  },
  {
    title: {
      en: '4. Why Choose an All-in-One Wedding Package?',
      el: '4. Γιατί να επιλέξω ένα ολοκληρωμένο πακέτο γάμου;',
      ru: '4. Почему стоит выбрать комплексный свадебный пакет?',
    },
    body: {
      en: 'An all-in-one package helps you save valuable time, reduce costs, and avoid unnecessary stress. You benefit from professional planning, continuous support, and access to trusted suppliers. Everything is handled in one place, ensuring consistency, quality, and excellent value for money.',
      el: 'Ένα ολοκληρωμένο πακέτο σας βοηθά να εξοικονομήσετε πολύτιμο χρόνο, να περιορίσετε το κόστος και να αποφύγετε το περιττό άγχος. Επωφελείστε από επαγγελματικό σχεδιασμό, συνεχή υποστήριξη και πρόσβαση σε έμπιστους προμηθευτές. Όλα συντονίζονται από ένα σημείο, εξασφαλίζοντας συνέπεια, ποιότητα και άριστη σχέση ποιότητας-τιμής.',
      ru: 'Комплексный пакет экономит ваше время, помогает оптимизировать расходы и избежать лишнего стресса. Вы получаете профессиональное планирование, постоянную поддержку и доступ к проверенным подрядчикам. Всё координируется в одном месте, что обеспечивает согласованность, качество и оптимальное соотношение цены и результата.',
    },
  },
  {
    title: {
      en: '5. How Does the Company Operate Financially?',
      el: '5. Πώς λειτουργεί οικονομικά η εταιρεία;',
      ru: '5. Как устроена финансовая модель компании?',
    },
    body: {
      en: 'Wedding Sky works through strong partnerships with experienced professionals. These partners provide commission arrangements, meaning clients do not pay anything extra. This structure allows us to offer premium services at competitive prices while maintaining high standards.',
      el: 'Η Wedding Sky συνεργάζεται στενά με έμπειρους επαγγελματίες. Οι συνεργασίες αυτές βασίζονται σε συμφωνίες προμήθειας, γεγονός που σημαίνει ότι οι πελάτες δεν επιβαρύνονται με επιπλέον κόστος. Αυτή η δομή μάς επιτρέπει να προσφέρουμε υπηρεσίες υψηλού επιπέδου σε ανταγωνιστικές τιμές, διατηρώντας παράλληλα αυστηρά πρότυπα ποιότητας.',
      ru: 'Wedding Sky работает в тесном партнёрстве с опытными специалистами. Партнёры предоставляют компании комиссионные условия, поэтому клиенты не несут дополнительных расходов. Такая модель позволяет предлагать услуги премиального уровня по конкурентным ценам, сохраняя высокие стандарты качества.',
    },
  },
  {
    title: {
      en: '6. Are Wedding Packages Flexible?',
      el: '6. Είναι ευέλικτα τα πακέτα γάμου;',
      ru: '6. Можно ли менять состав свадебных пакетов?',
    },
    body: {
      en: 'Yes. While we offer ready-made packages, all options can be modified, combined, or fully customized. Each couple can create a package that perfectly matches their vision and requirements.',
      el: 'Ναι. Παρόλο που προσφέρουμε έτοιμα πακέτα, όλες οι επιλογές μπορούν να τροποποιηθούν, να συνδυαστούν ή να εξατομικευτούν πλήρως. Κάθε ζευγάρι μπορεί να δημιουργήσει ένα πακέτο που ανταποκρίνεται απόλυτα στο όραμα και τις απαιτήσεις του.',
      ru: 'Да. Помимо готовых пакетов, мы предлагаем возможность изменить, объединить или полностью персонализировать любой вариант. Каждая пара может создать пакет, который в точности соответствует её видению и требованиям.',
    },
  },
  {
    title: {
      en: '7. Do I Need to Book Everything Through You?',
      el: '7. Πρέπει να κλείσω όλες τις υπηρεσίες μέσω εσάς;',
      ru: '7. Обязательно ли заказывать все услуги через вас?',
    },
    body: {
      en: 'Not at all. You can choose only the services you need. If you already have some arrangements in place, we can build a package using the remaining services. A minimum of 5 services is required to form a complete package.',
      el: 'Καθόλου. Μπορείτε να επιλέξετε μόνο τις υπηρεσίες που χρειάζεστε. Αν έχετε ήδη διευθετήσει ορισμένες παροχές, μπορούμε να δημιουργήσουμε ένα πακέτο με τις υπηρεσίες που απομένουν. Για τη διαμόρφωση ενός ολοκληρωμένου πακέτου απαιτούνται τουλάχιστον 5 υπηρεσίες.',
      ru: 'Нет. Вы можете выбрать только необходимые вам услуги. Если часть подготовки уже организована, мы составим пакет из оставшихся услуг. Для формирования полноценного пакета необходимо выбрать не менее 5 услуг.',
    },
  },
  {
    title: {
      en: '8. Where Do You Provide Wedding Services?',
      el: '8. Σε ποιες περιοχές παρέχετε υπηρεσίες γάμου;',
      ru: '8. Где вы оказываете свадебные услуги?',
    },
    body: {
      en: 'We organize weddings across the entire island of Cyprus, covering all cities and regions.',
      el: 'Διοργανώνουμε γάμους σε ολόκληρη την Κύπρο, καλύπτοντας όλες τις πόλεις και επαρχίες.',
      ru: 'Мы организуем свадьбы по всему Кипру — во всех городах и регионах острова.',
    },
  },
  {
    title: {
      en: '9. Is the Quotation Binding?',
      el: '9. Είναι δεσμευτική η προσφορά;',
      ru: '9. Обязывает ли вас полученное предложение?',
    },
    body: {
      en: 'No. All quotations are provided without any obligation. The final decision to proceed with our services is entirely up to you.',
      el: 'Όχι. Όλες οι προσφορές παρέχονται χωρίς καμία δέσμευση. Η τελική απόφαση για το αν θα προχωρήσετε με τις υπηρεσίες μας ανήκει αποκλειστικά σε εσάς.',
      ru: 'Нет. Все предложения предоставляются без каких-либо обязательств. Окончательное решение о сотрудничестве всегда остаётся за вами.',
    },
  },
  {
    title: {
      en: '10. Where Is Your Office Located?',
      el: '10. Πού βρίσκεται το γραφείο σας;',
      ru: '10. Где находится ваш офис?',
    },
    body: {
      en: 'Our office is located in Larnaca, Cyprus.',
      el: 'Το γραφείο μας βρίσκεται στη Λάρνακα, Κύπρος.',
      ru: 'Наш офис находится в Ларнаке, Кипр.',
    },
  },
  {
    title: {
      en: '11. Is an Office Visit Required for a Quote?',
      el: '11. Απαιτείται επίσκεψη στο γραφείο για να λάβω προσφορά;',
      ru: '11. Нужно ли посещать офис, чтобы получить предложение?',
    },
    body: {
      en: 'Not necessarily. While we recommend meeting in person at our Larnaca office for a more detailed discussion, consultations can also be arranged via phone, Viber, or Skype. This allows us to understand your needs and provide a personalized offer wherever you are.',
      el: 'Όχι απαραίτητα. Παρόλο που προτείνουμε μια προσωπική συνάντηση στο γραφείο μας στη Λάρνακα για πιο αναλυτική συζήτηση, μπορούν επίσης να διευθετηθούν συμβουλευτικές συναντήσεις μέσω τηλεφώνου, Viber ή Skype. Έτσι μπορούμε να κατανοήσουμε τις ανάγκες σας και να σας ετοιμάσουμε μια εξατομικευμένη προσφορά, όπου κι αν βρίσκεστε.',
      ru: 'Необязательно. Для более подробного обсуждения мы рекомендуем личную встречу в нашем офисе в Ларнаке, однако консультацию также можно провести по телефону, Viber или Skype. Это позволяет нам понять ваши потребности и подготовить персональное предложение, где бы вы ни находились.',
    },
  },
]

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
} = {
  eyebrow: {
    en: 'Love stories',
    el: 'Ιστορίες αγάπης',
    ru: 'Истории любви',
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
}

export const weddingAboutCopy: {
  eyebrow: LocalizedText
  pageTitle: LocalizedText
  lead: LocalizedText
  story: LocalizedText
  cta: LocalizedText
  photoLabel: LocalizedText
  pillars: ReadonlyArray<WeddingAboutCard>
} = {
  eyebrow: {
    en: 'Luxury weddings in Cyprus',
    el: 'Πολυτελείς γάμοι στην Κύπρο',
    ru: 'Роскошные свадьбы на Кипре',
  },
  pageTitle: {
    en: 'About Wedding Sky',
    el: 'Σχετικά με τη Wedding Sky',
    ru: 'О Wedding Sky',
  },
  lead: {
    en: 'We plan celebrations that feel personal, polished, and unmistakably yours — from intimate ceremonies to grand Cyprus weddings.',
    el: 'Σχεδιάζουμε γιορτές που αισθάνονται προσωπικές, εκλεπτυσμένες και απολύτως δικές σας — από ιδιαίτερες τελετές μέχρι μεγαλοπρεπείς γάμους στην Κύπρο.',
    ru: 'Мы создаём торжества, которые ощущаются личными, безупречными и по-настоящему вашими — от камерных церемоний до масштабных свадеб на Кипре.',
  },
  story: {
    en: 'Wedding Sky is a leading luxury wedding and event planning studio in Cyprus. Born from a genuine love for weddings, we bring creativity, precision, and devoted care to every couple — crafting spectacular celebrations with warmth and discretion.',
    el: 'Η Wedding Sky είναι ένα κορυφαίο studio πολυτελών γάμων και διοργάνωσης εκδηλώσεων στην Κύπρο. Γεννημένη από την αγάπη μας για τους γάμους, φέρνουμε δημιουργικότητα, ακρίβεια και αφοσιωμένη φροντίδα σε κάθε ζευγάρι — δημιουργώντας εντυπωσιακές γιορτές με ζεστασιά και διακριτικότητα.',
    ru: 'Wedding Sky — ведущая студия организации роскошных свадеб и мероприятий на Кипре. Вдохновлённые любовью к свадьбам, мы сочетаем креативность, точность и искреннюю заботу о каждой паре, создавая впечатляющие торжества с теплотой и деликатностью.',
  },
  cta: {
    en: 'Plan your wedding',
    el: 'Οργανώστε τον γάμο σας',
    ru: 'Спланировать свадьбу',
  },
  photoLabel: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  },
  pillars: [
    {
      title: {
        en: 'Our approach',
        el: 'Η προσέγγισή μας',
        ru: 'Наш подход',
      },
      tagline: {
        en: 'Precision. Warmth. Discretion.',
        el: 'Ακρίβεια. Ζεστασιά. Διακριτικότητα.',
        ru: 'Точность. Теплота. Деликатность.',
      },
      copy: {
        en: 'We believe in clear timelines, honest counsel, and calm leadership on the day. Every celebration is built around your story — with vendors, venues, and production aligned to one coherent plan.',
        el: 'Πιστεύουμε στα σαφή χρονοδιαγράμματα, την ειλικρινή καθοδήγηση και τον ήρεμο συντονισμό την ημέρα της εκδήλωσης. Κάθε γιορτή χτίζεται γύρω από τη δική σας ιστορία — με συνεργάτες, χώρους και παραγωγή ευθυγραμμισμένα σε ένα ενιαίο, συνεκτικό πλάνο.',
        ru: 'Мы ценим чёткие сроки, честные рекомендации и спокойное руководство в день торжества. Каждое событие строится вокруг вашей истории, а подрядчики, площадки и продакшн объединяются единым продуманным планом.',
      },
    },
    {
      title: {
        en: 'Production & creative',
        el: 'Παραγωγή & δημιουργικό',
        ru: 'Продакшн и креатив',
      },
      copy: {
        en: 'From styling and florals to lighting and run-of-show, our producers and partners work to one standard: seamless execution so you can stay present with family and guests.',
        el: 'Από το styling και τον ανθοστολισμό μέχρι τον φωτισμό και τη ροή του προγράμματος, οι παραγωγοί και οι συνεργάτες μας υπηρετούν ένα κοινό πρότυπο: άψογη υλοποίηση, ώστε εσείς να είστε πραγματικά παρόντες με την οικογένεια και τους καλεσμένους σας.',
        ru: 'От стилистики и флористики до света и сценария — наши продюсеры и партнёры работают по единому стандарту: безупречное воплощение, позволяющее вам провести этот день рядом с близкими и гостями.',
      },
    },
    {
      title: {
        en: 'Our team',
        el: 'Η ομάδα μας',
        ru: 'Наша команда',
      },
      copy: {
        en: 'Planners, coordinators, and specialists across Cyprus — supported by a trusted network of venues, artisans, and hospitality partners who share our commitment to quality.',
        el: 'Wedding planners, συντονιστές και εξειδικευμένοι επαγγελματίες σε όλη την Κύπρο — με τη στήριξη ενός έμπιστου δικτύου χώρων, δημιουργών και συνεργατών φιλοξενίας που μοιράζονται τη δέσμευσή μας στην ποιότητα.',
        ru: 'Организаторы, координаторы и профильные специалисты по всему Кипру, а также проверенная сеть площадок, мастеров и партнёров в сфере гостеприимства, разделяющих нашу приверженность качеству.',
      },
    },
  ],
}

export const weddingVisitCopy: {
  title: LocalizedText
  intro: LocalizedText
  addressLabel: LocalizedText
  emailLabel: LocalizedText
  addressLines: ReadonlyArray<LocalizedText>
  mapTitle: LocalizedText
} = {
  title: {
    en: 'Location & contact',
    el: 'Τοποθεσία & επικοινωνία',
    ru: 'Адрес и контакты',
  },
  intro: {
    en: 'Visit us in Limassol or reach the Wedding Sky team by email.',
    el: 'Επισκεφθείτε μας στη Λεμεσό ή επικοινωνήστε με την ομάδα της Wedding Sky μέσω email.',
    ru: 'Посетите нас в Лимасоле или свяжитесь с командой Wedding Sky по электронной почте.',
  },
  addressLabel: {
    en: 'Address',
    el: 'Διεύθυνση',
    ru: 'Адрес',
  },
  emailLabel: {
    en: 'E-mail',
    el: 'E-mail',
    ru: 'Электронная почта',
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
  mapTitle: {
    en: 'Wedding Sky — map',
    el: 'Wedding Sky — χάρτης',
    ru: 'Wedding Sky — карта',
  },
}

export const weddingVideoCopy: {
  eyebrow: LocalizedText
  title: LocalizedText
  lead: LocalizedText
  cta: LocalizedText
  iframeTitle: LocalizedText
  watchAria: LocalizedText
} = {
  eyebrow: {
    en: 'Wedding film',
    el: 'Ταινία γάμου',
    ru: 'Свадебный фильм',
  },
  title: {
    en: 'Watch the day unfold',
    el: 'Δείτε την ημέρα να ξετυλίγεται',
    ru: 'Смотрите, как раскрывается день',
  },
  lead: {
    en: 'Real Wedding Sky celebrations in Cyprus — vows, atmosphere, and the refined production behind every moment.',
    el: 'Πραγματικές δεξιώσεις Wedding Sky στην Κύπρο — όρκοι, ατμόσφαιρα και η εκλεπτυσμένη παραγωγή πίσω από κάθε στιγμή.',
    ru: 'Настоящие торжества Wedding Sky на Кипре — клятвы, атмосфера и изысканная постановка каждого момента.',
  },
  cta: {
    en: 'Watch on YouTube',
    el: 'Δείτε στο YouTube',
    ru: 'Смотреть на YouTube',
  },
  iframeTitle: {
    en: 'Wedding Sky — showcase video',
    el: 'Wedding Sky — βίντεο παρουσίασης',
    ru: 'Wedding Sky — презентационное видео',
  },
  watchAria: {
    en: 'Open Wedding Sky showcase video on YouTube',
    el: 'Άνοιγμα βίντεο παρουσίασης της Wedding Sky στο YouTube',
    ru: 'Открыть презентационное видео Wedding Sky на YouTube',
  },
}

export const weddingCategoryPageCopy: {
  collectionEyebrow: LocalizedText
  allCollections: LocalizedText
  enquire: LocalizedText
  tiersEyebrow: LocalizedText
  chooseTitle: LocalizedText
  chooseIntro: LocalizedText
  viewPackage: LocalizedText
  openPackageAria: LocalizedText
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
  packageIncludes: LocalizedText
  contactPrefix: LocalizedText
  contactLink: LocalizedText
  contactSuffix: LocalizedText
  important: LocalizedText
} = {
  packageEyebrow: {
    en: 'Wedding package',
    el: 'Πακέτο γάμου',
    ru: 'Свадебный пакет',
  },
  investmentFrom: {
    en: 'Investment from',
    el: 'Επένδυση από',
    ru: 'Стоимость от',
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
  packageIncludes: {
    en: 'Package includes',
    el: 'Το πακέτο περιλαμβάνει',
    ru: 'В пакет входит',
  },
  contactPrefix: {
    en: 'For appointments or more information, ',
    el: 'Για ραντεβού ή περισσότερες πληροφορίες, ',
    ru: 'Для записи на встречу или получения дополнительной информации ',
  },
  contactLink: {
    en: 'contact our team',
    el: 'επικοινωνήστε με την ομάδα μας',
    ru: 'свяжитесь с нашей командой',
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
