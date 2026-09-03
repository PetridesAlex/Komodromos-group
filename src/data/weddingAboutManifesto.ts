import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingAboutFigureLayout = 'banner' | 'split-left' | 'split-right' | 'portrait'

export type WeddingAboutFigure = {
  src: string
  alt: string
  layout: WeddingAboutFigureLayout
  objectPosition?: string
  caption?: LocalizedText
}

export type WeddingAboutBlock =
  | { kind: 'section'; title: LocalizedText }
  | { kind: 'accent'; text: LocalizedText }
  | { kind: 'stanza'; lines: LocalizedText[] }
  | { kind: 'body'; text: LocalizedText }
  | { kind: 'figure'; figure: WeddingAboutFigure }

const ABOUT_US = '/images/services/wedding-highlights/about-us'

export const weddingAboutFigures = {
  intimate: {
    src: `${ABOUT_US}/intimate-bride-groom-under-veil-cyprus.webp`,
    alt: 'Intimate black-and-white portrait of bride and groom under a veil — Wedding Sky Cyprus',
    layout: 'banner',
    objectPosition: 'center 42%',
    caption: {
      en: 'Moments that remain forever',
      el: 'Στιγμές που μένουν για πάντα',
      ru: 'Мгновения, которые остаются навсегда',
    },
  },
  bride: {
    src: `${ABOUT_US}/luxury-cyprus-bride-veil-bouquet-portrait.webp`,
    alt: 'Smiling bride in a pearl veil with floral bouquet at a luxury Cyprus wedding — Wedding Sky',
    layout: 'portrait',
    objectPosition: 'center 22%',
    caption: {
      en: 'Luxury without limits',
      el: 'Πολυτέλεια χωρίς όρια',
      ru: 'Luxury without limits',
    },
  },
  rolls: {
    src: `${ABOUT_US}/luxury-wedding-couple-vintage-rolls-royce-cyprus.webp`,
    alt: 'Bride and groom posing with a vintage Rolls-Royce at a luxury Cyprus wedding — Wedding Sky',
    layout: 'split-right',
    objectPosition: 'center 34%',
    caption: {
      en: 'One company. One standard.',
      el: 'Μία εταιρεία. Ένα επίπεδο.',
      ru: 'One company. One standard.',
    },
  },
  sparklers: {
    src: `${ABOUT_US}/luxury-wedding-sparkler-sendoff-cyprus.webp`,
    alt: 'Guests holding sparklers around the couple at a luxury night wedding celebration in Cyprus — Wedding Sky',
    layout: 'banner',
    objectPosition: 'center 48%',
    caption: {
      en: 'Less stress. More celebration.',
      el: 'Λιγότερο άγχος. Περισσότερη γιορτή.',
      ru: 'Меньше стресса. Больше праздника.',
    },
  },
  vintageCar: {
    src: `${ABOUT_US}/vintage-wedding-car-floral-decoration-cyprus.webp`,
    alt: 'Vintage Packard wedding car decorated with roses and hydrangeas — Wedding Sky Cyprus',
    layout: 'split-left',
    objectPosition: 'center 52%',
    caption: {
      en: 'Perfection in every detail',
      el: 'Τελειότητα σε κάθε λεπτομέρεια',
      ru: 'Совершенство в каждой детали',
    },
  },
} as const satisfies Record<string, WeddingAboutFigure>

const L = {
  brand: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  tagline: {
    en: 'Where Your Dream Wedding Becomes Reality.',
    el: 'Εκεί που ο γάμος που ονειρεύεστε γίνεται πραγματικότητα.',
    ru: 'Where Your Dream Wedding Becomes Reality.',
  } satisfies LocalizedText,
  leadKicker: {
    en: 'A love story begins',
    el: 'Μια ιστορία αγάπης αρχίζει',
    ru: 'Начинается история любви',
  } satisfies LocalizedText,
  introLead: {
    en: 'There are moments in life that pass.\nAnd there are moments that remain forever.\nYour wedding is one of them.',
    el: 'Υπάρχουν στιγμές στη ζωή που περνούν.\nΚαι υπάρχουν στιγμές που μένουν για πάντα.\nΟ γάμος σας είναι μία από αυτές.',
    ru: 'Есть мгновения, которые проходят.\nИ есть мгновения, которые остаются навсегда.\nВаша свадьба — одно из них.',
  } satisfies LocalizedText,
  cta: {
    en: 'Book a private consultation',
    el: 'Κλείστε προσωπικό ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
  closingBrand: {
    en: 'Wedding Sky',
    el: 'Wedding Sky',
    ru: 'Wedding Sky',
  } satisfies LocalizedText,
  closingLine: {
    en: 'Your entire wedding — only one click away.',
    el: 'Ολόκληρος ο γάμος σας, μόνο με ένα κλικ!',
    ru: 'Вся свадьба — в одном клике.',
  } satisfies LocalizedText,
} as const

export const weddingAboutManifestoMeta = L

/** Editorial manifesto — Greek narrative with English brand accents (localized). */
export const weddingAboutManifestoBlocks: readonly WeddingAboutBlock[] = [
  {
    kind: 'stanza',
    lines: [
      {
        en: 'There are moments in life that pass.',
        el: 'Υπάρχουν στιγμές στη ζωή που περνούν.',
        ru: 'Есть мгновения, которые проходят.',
      },
      {
        en: 'And there are moments that remain forever.',
        el: 'Και υπάρχουν στιγμές που μένουν για πάντα.',
        ru: 'И есть мгновения, которые остаются навсегда.',
      },
      {
        en: 'Your wedding is one of them.',
        el: 'Ο γάμος σας είναι μία από αυτές.',
        ru: 'Ваша свадьба — одно из них.',
      },
    ],
  },
  {
    kind: 'body',
    text: {
      en: 'At Wedding Sky, we do not merely organise weddings. We create life experiences. We design that one singular day you will remember every time you look at each other, every time you open your album, every time you tell the story of your wedding.',
      el: 'Στη Wedding Sky, δεν οργανώνουμε απλώς γάμους. Δημιουργούμε εμπειρίες ζωής. Σχεδιάζουμε εκείνη τη μία, μοναδική ημέρα που θα θυμάστε κάθε φορά που θα κοιτάζετε ο ένας τον άλλον, κάθε φορά που θα ανοίγετε το άλμπουμ σας, κάθε φορά που θα διηγείστε την ιστορία του γάμου σας.',
      ru: 'В Wedding Sky мы не просто организуем свадьбы. Мы создаём жизненные переживания. Мы проектируем тот единственный день, который вы будете вспоминать каждый раз, глядя друг на друга, открывая альбом или рассказывая историю вашей свадьбы.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'For us, no dream is too ambitious — and no detail is too small.',
      el: 'Για εμάς, κανένα όνειρο δεν είναι υπερβολικό και καμία λεπτομέρεια δεν είναι μικρή.',
      ru: 'Для нас ни одна мечта не бывает слишком смелой — и ни одна деталь не бывает слишком мелкой.',
    },
  },
  {
    kind: 'section',
    title: {
      en: 'Luxury Without Limits',
      el: 'Πολυτέλεια χωρίς όρια',
      ru: 'Luxury Without Limits',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Wedding Sky is one of the largest and most luxurious wedding event companies in Cyprus, with presence across the island as well as in Mykonos and Santorini.',
      el: 'Η Wedding Sky αποτελεί μία από τις μεγαλύτερες και πιο πολυτελείς εταιρείες γαμήλιων εκδηλώσεων στην Κύπρο, με παρουσία σε ολόκληρο το νησί, καθώς και σε Μύκονο και Σαντορίνη.',
      ru: 'Wedding Sky — одна из крупнейших и самых роскошных компаний по организации свадебных событий на Кипре, с присутствием по всему острову, а также на Миконосе и Санторини.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Our philosophy is simple:',
      el: 'Η φιλοσοφία μας είναι απλή:',
      ru: 'Наша философия проста:',
    },
  },
  {
    kind: 'accent',
    text: {
      en: 'You dream it. We create it.',
      el: 'Εσείς το ονειρεύεστε. Εμείς το δημιουργούμε.',
      ru: 'You dream it. We create it.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'We want you to tell us what you dream. From an elegant romantic wedding to a spectacular high-demand luxury wedding, we shape every detail around you, your personality, and your story.',
      el: 'Θέλουμε να μας πείτε τι ονειρεύεστε. Από έναν κομψό και ρομαντικό γάμο μέχρι ένα εντυπωσιακό luxury wedding υψηλών απαιτήσεων, δημιουργούμε κάθε λεπτομέρεια γύρω από εσάς, την προσωπικότητά σας και τη δική σας ιστορία.',
      ru: 'Мы хотим, чтобы вы рассказали нам о своей мечте. От изящной романтической свадьбы до впечатляющего luxury-торжества высочайшего уровня — мы создаём каждую деталь вокруг вас, вашей личности и вашей истории.',
    },
  },
  {
    kind: 'accent',
    text: {
      en: 'We are the wedding company without limits.',
      el: 'We are the wedding company without limits.',
      ru: 'We are the wedding company without limits.',
    },
  },
  {
    kind: 'section',
    title: {
      en: '50+ Wedding Services. One Company. One Standard.',
      el: '50+ Wedding Services. One Company. One Standard.',
      ru: '50+ Wedding Services. One Company. One Standard.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'At Wedding Sky you will find more than 50 distinct wedding services, with over 90% delivered in-house through our own infrastructure, equipment, and specialist teams.',
      el: 'Στη Wedding Sky μπορείτε να βρείτε περισσότερες από 50 διαφορετικές υπηρεσίες γάμου, με πάνω από το 90% να παρέχεται in-house, μέσα από τις δικές μας υποδομές, τον δικό μας εξοπλισμό και τις εξειδικευμένες ομάδες μας.',
      ru: 'В Wedding Sky вас ждут более 50 различных свадебных услуг, причём свыше 90% оказываются in-house — нашими инфраструктурами, оборудованием и специализированными командами.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'That gives us direct control of quality, organisation, cost, and execution. For you it means better coordination, greater security, a higher standard of service, and a more competitive final price — without unnecessary costs from multiple intermediaries.',
      el: 'Αυτό μας επιτρέπει να έχουμε άμεσο έλεγχο της ποιότητας, της οργάνωσης, του κόστους και της εκτέλεσης. Για εσάς σημαίνει καλύτερο συντονισμό, μεγαλύτερη ασφάλεια, υψηλότερο επίπεδο υπηρεσιών και ανταγωνιστικότερη τελική τιμή — χωρίς περιττά κόστη από πολλαπλούς μεσάζοντες.',
      ru: 'Это даёт нам прямой контроль качества, организации, стоимости и исполнения. Для вас — лучшую координацию, большую надёжность, более высокий уровень сервиса и более конкурентоспособную итоговую цену без лишних затрат на посредников.',
    },
  },
  {
    kind: 'accent',
    text: {
      en: 'One company. One team. One vision. Your dream wedding.',
      el: 'Μία εταιρεία. Μία ομάδα. Ένα όραμα. Ο γάμος που ονειρεύεστε.',
      ru: 'One company. One team. One vision. Your dream wedding.',
    },
  },
  {
    kind: 'section',
    title: {
      en: 'Less Stress. More Time. Better Value.',
      el: 'Λιγότερο Άγχος. Περισσότερος Χρόνος. Καλύτερη Αξία.',
      ru: 'Меньше стресса. Больше времени. Лучшая ценность.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Planning a wedding can easily mean dozens of calls, meetings, quotes, deposits, and coordination with ten or more different professionals and services.',
      el: 'Η οργάνωση ενός γάμου μπορεί εύκολα να σημαίνει δεκάδες τηλεφωνήματα, συναντήσεις, προσφορές, προκαταβολές και συνεννοήσεις με 10 ή περισσότερους διαφορετικούς επαγγελματίες και υπηρεσίες.',
      ru: 'Организация свадьбы легко превращается в десятки звонков, встреч, коммерческих предложений, предоплат и согласований с десятью и более разными специалистами и службами.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'With Wedding Sky, you do not need that. By choosing one of our complete wedding packages, we take care of everything — from beginning to end, all in one.',
      el: 'Με τη Wedding Sky, δεν χρειάζεται! Επιλέγοντας ένα από τα ολοκληρωμένα πακέτα γάμου μας, τα αναλαμβάνουμε όλα εμείς — από την αρχή μέχρι το τέλος, όλα σε ένα.',
      ru: 'С Wedding Sky это не нужно. Выбрав один из наших комплексных wedding packages, мы берём всё на себя — от начала до конца, all in one.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'One company. One team. One complete coordination. You save money, precious time and energy, significantly reduce preparation stress, and limit the risk of mistakes, omissions, delays, and miscommunication between different suppliers.',
      el: 'Μία εταιρεία. Μία ομάδα. Ένας ολοκληρωμένος συντονισμός. Έτσι εξοικονομείτε χρήματα, πολύτιμο χρόνο και ενέργεια, μειώνετε σημαντικά το άγχος της προετοιμασίας και περιορίζετε τις πιθανότητες για λάθη, παραλείψεις, καθυστερήσεις και ασυνεννοησίες μεταξύ διαφορετικών προμηθευτών.',
      ru: 'Одна компания. Одна команда. Одна целостная координация. Вы экономите деньги, драгоценное время и силы, заметно снижаете стресс подготовки и уменьшаете риск ошибок, упущений, задержек и недопонимания между разными подрядчиками.',
    },
  },
  {
    kind: 'stanza',
    lines: [
      {
        en: 'Fewer calls. Fewer meetings. Fewer errands. Less stress.',
        el: 'Λιγότερα τηλέφωνα. Λιγότερες συναντήσεις. Λιγότερες μετακινήσεις. Λιγότερο άγχος.',
        ru: 'Меньше звонков. Меньше встреч. Меньше поездок. Меньше стресса.',
      },
      {
        en: 'More time for you.',
        el: 'Περισσότερος χρόνος για εσάς.',
        ru: 'Больше времени для вас.',
      },
    ],
  },
  {
    kind: 'body',
    text: {
      en: 'A complete Wedding Sky package can cover nearly every aspect of your wedding, with all services operating as one seamless, perfectly coordinated whole.',
      el: 'Ένα ολοκληρωμένο Wedding Sky package μπορεί να καλύψει σχεδόν κάθε πτυχή του γάμου σας, με όλες τις υπηρεσίες να λειτουργούν ως ένα ενιαίο, άψογα συντονισμένο σύνολο.',
      ru: 'Комплексный Wedding Sky package может охватить почти каждую грань вашей свадьбы — все услуги работают как единое, безупречно согласованное целое.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Because we believe wedding preparation should be part of the beautiful experience — not a source of stress.',
      el: 'Γιατί πιστεύουμε ότι η προετοιμασία του γάμου σας πρέπει να είναι μέρος της όμορφης εμπειρίας — όχι πηγή άγχους.',
      ru: 'Потому что мы верим: подготовка к свадьбе должна быть частью прекрасного опыта — а не источником стресса.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'At Wedding Sky you may choose a single service, one of our complete wedding packages, or create with us a fully personalised package tailored to your style, wishes, needs, and budget.',
      el: 'Στη Wedding Sky μπορείτε να επιλέξετε μία μόνο υπηρεσία, ένα από τα ολοκληρωμένα wedding packages μας ή να δημιουργήσουμε μαζί ένα πλήρως εξατομικευμένο πακέτο, προσαρμοσμένο στο ύφος, τις επιθυμίες, τις ανάγκες και το budget σας.',
      ru: 'В Wedding Sky вы можете выбрать одну услугу, один из комплексных wedding packages или создать вместе с нами полностью персональный пакет под ваш стиль, желания, потребности и бюджет.',
    },
  },
  {
    kind: 'section',
    title: {
      en: '75+ People. One Goal: Perfection.',
      el: '75+ Άνθρωποι. Ένας Στόχος: Η Τελειότητα.',
      ru: '75+ человек. Одна цель: совершенство.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Behind every enchanting wedding celebration stands a team of more than 75 people — beside you from the first idea to the final moment of your great day.',
      el: 'Πίσω από κάθε μαγευτική γαμήλια εκδήλωση βρίσκεται μία ομάδα περισσότερων από 75 ανθρώπων, δίπλα σας από την πρώτη ιδέα μέχρι την τελευταία στιγμή της μεγάλης σας ημέρας.',
      ru: 'За каждым завораживающим свадебным торжеством стоит команда более чем из 75 человек — рядом с вами от первой идеи до последнего мгновения вашего большого дня.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'With experience spanning more than 40 years in wedding events and over 11 years of specialisation in complete wedding packages, we know true luxury is not only in what your guests see.',
      el: 'Με εμπειρία που ξεπερνά τα 40 χρόνια στον χώρο των γαμήλιων εκδηλώσεων και περισσότερα από 11 χρόνια εξειδίκευσης στα ολοκληρωμένα wedding packages, γνωρίζουμε ότι η πραγματική πολυτέλεια δεν βρίσκεται μόνο σε όσα βλέπουν οι καλεσμένοι σας.',
      ru: 'С опытом более 40 лет в свадебных событиях и свыше 11 лет специализации на комплексных wedding packages мы знаем: настоящая роскошь — не только в том, что видят ваши гости.',
    },
  },
  {
    kind: 'stanza',
    lines: [
      {
        en: 'It is feeling that someone has already thought of everything for you.',
        el: 'Βρίσκεται στο να αισθάνεστε ότι κάποιος έχει ήδη σκεφτεί τα πάντα για εσάς.',
        ru: 'Она в ощущении, что кто-то уже продумал всё за вас.',
      },
      {
        en: 'Being able to enjoy the moment without stress.',
        el: 'Να μπορείτε να απολαύσετε τη στιγμή χωρίς άγχος.',
        ru: 'В возможности наслаждаться моментом без стресса.',
      },
      {
        en: 'Looking around and seeing your dream become reality.',
        el: 'Να κοιτάξετε γύρω σας και να δείτε το όνειρό σας να έχει γίνει πραγματικότητα.',
        ru: 'В том, чтобы оглянуться и увидеть, как мечта стала реальностью.',
      },
    ],
  },
  {
    kind: 'section',
    title: {
      en: 'The Security Behind the Wedding Sky Name',
      el: 'Η Ασφάλεια Πίσω από το Όνομα Wedding Sky',
      ru: 'Надёжность имени Wedding Sky',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Wedding Sky is proudly part of the Komodromos Group of Companies — a dynamic and financially strong group of companies in Cyprus.',
      el: 'Η Wedding Sky αποτελεί περήφανα μέρος του Komodromos Group of Companies, ενός δυναμικού και οικονομικά ισχυρού ομίλου εταιρειών στην Κύπρο.',
      ru: 'Wedding Sky с гордостью входит в Komodromos Group of Companies — динамичную и финансово устойчивую группу компаний на Кипре.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Because when you entrust a company with one of the most important days of your life, reliability, consistency, and security matter enormously.',
      el: 'Γιατί όταν εμπιστεύεστε σε μία εταιρεία μία από τις σημαντικότερες ημέρες της ζωής σας, η αξιοπιστία, η συνέπεια και η ασφάλεια έχουν τεράστια σημασία.',
      ru: 'Потому что, доверяя компании один из важнейших дней вашей жизни, вы особенно цените надёжность, последовательность и безопасность.',
    },
  },
  {
    kind: 'stanza',
    lines: [
      {
        en: 'You are not merely entrusting us with a wedding…',
        el: 'Δεν μας εμπιστεύεστε απλώς έναν γάμο…',
        ru: 'Вы доверяете нам не просто свадьбу…',
      },
      {
        en: 'You are entrusting us with one of the most important memories of your life.',
        el: 'Μας εμπιστεύεστε μία από τις σημαντικότερες αναμνήσεις της ζωής σας!',
        ru: 'Вы доверяете одну из важнейших памятей всей вашей жизни.',
      },
    ],
  },
  {
    kind: 'section',
    title: {
      en: 'You Are Not Simply Choosing a Wedding Package. You Are Choosing Wedding Sky.',
      el: 'Δεν Επιλέγετε Απλώς Ένα Wedding Package. Επιλέγετε Wedding Sky.',
      ru: 'Вы выбираете не просто wedding package. Вы выбираете Wedding Sky.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'When you choose Wedding Sky, you are not simply choosing wedding services. You choose certainty, security, luxury, and absolute care for one of the most important days of your life.',
      el: 'Όταν επιλέγετε τη Wedding Sky, δεν επιλέγετε απλώς υπηρεσίες για τον γάμο σας. Επιλέγετε σιγουριά, ασφάλεια, πολυτέλεια και απόλυτη φροντίδα για μία από τις σημαντικότερες ημέρες της ζωής σας.',
      ru: 'Выбирая Wedding Sky, вы выбираете не просто услуги для свадьбы. Вы выбираете уверенность, безопасность, роскошь и абсолютную заботу об одном из важнейших дней вашей жизни.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'You choose one of the largest and most prestigious wedding event companies in Cyprus — with the experience, infrastructure, and specialist team to handle every detail to the highest standards.',
      el: 'Επιλέγετε μία από τις μεγαλύτερες και πιο καταξιωμένες εταιρείες γαμήλιων εκδηλώσεων στην Κύπρο, με την εμπειρία, την υποδομή και την εξειδικευμένη ομάδα που μπορεί να αναλάβει κάθε λεπτομέρεια με τα υψηλότερα πρότυπα.',
      ru: 'Вы выбираете одну из крупнейших и самых престижных свадебных компаний Кипра — с опытом, инфраструктурой и специализированной командой, способной взять на себя каждую деталь по высочайшим стандартам.',
    },
  },
  {
    kind: 'accent',
    text: {
      en: 'Luxury is the feeling of knowing that everything is taken care of.',
      el: 'Luxury is the feeling of knowing that everything is taken care of.',
      ru: 'Luxury is the feeling of knowing that everything is taken care of.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'True luxury is knowing your wedding is in safe, experienced hands. That every detail has been anticipated, every service coordinated, and everything designed with care.',
      el: 'Πραγματική πολυτέλεια είναι να γνωρίζετε ότι ο γάμος σας βρίσκεται σε ασφαλή και έμπειρα χέρια. Ότι κάθε λεπτομέρεια έχει προβλεφθεί, κάθε υπηρεσία έχει συντονιστεί και όλα έχουν σχεδιαστεί με προσοχή.',
      ru: 'Настоящая роскошь — знать, что свадьба в надёжных и опытных руках. Что каждая деталь предусмотрена, каждая услуга согласована, и всё создано с вниманием.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'It is arriving at your great day without the stress of organisation and without anxiety about what might go wrong. Feeling only joy, excitement, and anticipation.',
      el: 'Είναι να φτάσετε στη μεγάλη σας ημέρα χωρίς το άγχος της οργάνωσης και χωρίς την αγωνία για το τι μπορεί να πάει λάθος. Να αισθάνεστε μόνο χαρά, ενθουσιασμό και προσμονή.',
      ru: 'Это прийти к большому дню без стресса организации и без тревоги о том, что может пойти не так. Чувствовать только радость, воодушевление и предвкушение.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'And when your moment arrives, to look around and say: “This is the wedding we dreamed of.”',
      el: 'Και όταν φτάσει η δική σας στιγμή, να κοιτάξετε γύρω σας και να πείτε: «Αυτός είναι ο γάμος που ονειρευτήκαμε.»',
      ru: 'И когда наступит ваш момент — оглянуться и сказать: «Это свадьба, о которой мы мечтали».',
    },
  },
  {
    kind: 'stanza',
    lines: [
      {
        en: 'The quality you see. The security you feel. The happiness you live.',
        el: 'Η ποιότητα που βλέπετε. Η ασφάλεια που αισθάνεστε. Η ευτυχία που ζείτε.',
        ru: 'Качество, которое вы видите. Надёжность, которую чувствуете. Счастье, которое проживаете.',
      },
    ],
  },
  {
    kind: 'body',
    text: {
      en: 'Because true luxury is knowing we have taken care of everything — so you can live everything.',
      el: 'Γιατί πραγματική πολυτέλεια είναι να γνωρίζετε ότι εμείς έχουμε αναλάβει τα πάντα, ώστε εσείς να ζήσετε τα πάντα.',
      ru: 'Потому что настоящая роскошь — знать, что мы взяли на себя всё, чтобы вы могли прожить всё.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'And that is our promise: to create a wedding so distinctive that it is not merely the most beautiful day of your life — but a memory you will want to relive forever.',
      el: 'Και αυτή είναι η υπόσχεσή μας: Να δημιουργήσουμε έναν γάμο τόσο ξεχωριστό, ώστε να μην είναι απλώς η ομορφότερη ημέρα της ζωής σας — αλλά μία ανάμνηση που θα θέλετε να ξαναζήσετε για πάντα.',
      ru: 'И это наше обещание: создать свадьбу настолько особенную, чтобы она была не просто самым прекрасным днём вашей жизни — а воспоминанием, которое вы захотите проживать снова и снова.',
    },
  },
  {
    kind: 'accent',
    text: {
      en: 'Your Dream. Your Story. Your Wedding Sky.',
      el: 'Your Dream. Your Story. Your Wedding Sky.',
      ru: 'Your Dream. Your Story. Your Wedding Sky.',
    },
  },
  {
    kind: 'body',
    text: {
      en: 'Contact Wedding Sky today for a personal appointment and discover our services, capabilities, and complete wedding packages.',
      el: 'Επικοινωνήστε σήμερα με τη Wedding Sky για ένα προσωπικό ραντεβού και ανακαλύψτε τις υπηρεσίες, τις δυνατότητες και τα ολοκληρωμένα wedding packages μας.',
      ru: 'Свяжитесь с Wedding Sky сегодня для личной встречи и откройте для себя наши услуги, возможности и комплексные wedding packages.',
    },
  },
]


/** Insert editorial figures between prose blocks for the standalone About page. */
export function buildWeddingAboutStoryBlocks(): WeddingAboutBlock[] {
  const prose = weddingAboutManifestoBlocks
  const inserts: Record<number, WeddingAboutFigure> = {
    2: weddingAboutFigures.intimate,
    8: weddingAboutFigures.bride,
    12: weddingAboutFigures.rolls,
    20: weddingAboutFigures.sparklers,
    28: weddingAboutFigures.vintageCar,
  }

  const out: WeddingAboutBlock[] = []
  prose.forEach((block, index) => {
    out.push(block)
    const figure = inserts[index]
    if (figure) out.push({ kind: 'figure', figure })
  })
  return out
}
