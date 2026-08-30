import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingDifferenceTone =
  | 'gold'
  | 'azure'
  | 'champagne'
  | 'sapphire'
  | 'rose'
  | 'pearl'
  | 'teal'
  | 'amber'
  | 'sky'
  | 'orchid'
  | 'mint'
  | 'copper'
  | 'ice'
  | 'lavender'
  | 'emerald'
  | 'coral'
  | 'platinum'
  | 'midnight'

export type WeddingDifferenceReason = {
  id: string
  tone: WeddingDifferenceTone
  title: LocalizedText
  paragraphs: ReadonlyArray<LocalizedText>
}

export const weddingDifferenceCopy = {
  pageTitle: {
    en: 'The Wedding Sky Difference',
    el: 'The Wedding Sky Difference',
    ru: 'The Wedding Sky Difference',
  } satisfies LocalizedText,
  eyebrow: {
    en: 'Why Wedding Sky',
    el: 'Γιατί Wedding Sky',
    ru: 'Почему Wedding Sky',
  } satisfies LocalizedText,
  lead: {
    en: 'Because the most beautiful day of your life deserves the best choice.',
    el: 'Γιατί η ομορφότερη ημέρα της ζωής σας αξίζει την καλύτερη επιλογή.',
    ru: 'Потому что самый прекрасный день вашей жизни заслуживает лучшего выбора.',
  } satisfies LocalizedText,
  intro: [
    {
      en: 'Your wedding is not simply an event. It is one of the most important moments of your life. And when it comes to a day that never repeats, the people you entrust it to truly matter.',
      el: 'Ο γάμος σας δεν είναι απλώς μία εκδήλωση. Είναι μία από τις σημαντικότερες στιγμές της ζωής σας. Και όταν πρόκειται για μία ημέρα που δεν επαναλαμβάνεται, η επιλογή των ανθρώπων που θα την αναλάβουν έχει σημασία.',
      ru: 'Ваша свадьба — не просто мероприятие. Это один из самых важных моментов вашей жизни. И когда речь о дне, который не повторяется, выбор людей, которым вы его доверите, действительно имеет значение.',
    },
    {
      en: 'At Wedding Sky, we created a complete service system that gives you more choice, greater control, ease, security — and above all, the confidence that everything rests in the hands of one organised, experienced team.',
      el: 'Στη Wedding Sky, δημιουργήσαμε ένα ολοκληρωμένο σύστημα υπηρεσιών που σας προσφέρει περισσότερες επιλογές, μεγαλύτερο έλεγχο, ευκολία, ασφάλεια και, πάνω απ’ όλα, τη σιγουριά ότι όλα βρίσκονται στα χέρια μίας οργανωμένης και έμπειρης ομάδας.',
      ru: 'В Wedding Sky мы создали целостную систему услуг: больше выбора, больше контроля, удобства и безопасности — и прежде всего уверенность, что всё в руках одной организованной и опытной команды.',
    },
  ] as const satisfies ReadonlyArray<LocalizedText>,
  reasons: [
    {
      id: '01',
      tone: 'gold',
      title: {
        en: 'The greatest force in wedding events',
        el: 'Η μεγαλύτερη δύναμη στον χώρο των γαμήλιων εκδηλώσεων',
        ru: 'Ведущая сила в мире свадебных событий',
      },
      paragraphs: [
        {
          en: 'Wedding Sky is the largest wedding events company in Cyprus, offering one of the most complete portfolios of services for every aspect of a wedding.',
          el: 'Η Wedding Sky αποτελεί τη μεγαλύτερη εταιρεία γαμήλιων εκδηλώσεων στην Κύπρο, προσφέροντας ένα από τα πληρέστερα portfolio υπηρεσιών για κάθε πτυχή ενός γάμου.',
          ru: 'Wedding Sky — крупнейшая компания свадебных событий на Кипре с одним из самых полных портфолио услуг для каждой грани свадьбы.',
        },
        {
          en: 'From planning and decoration to photography, entertainment, and the most distinctive details, the entire experience can be organised through one company.',
          el: 'Από τον σχεδιασμό και τη διακόσμηση μέχρι τη φωτογραφία, την ψυχαγωγία και τις πιο ιδιαίτερες λεπτομέρειες, ολόκληρη η εμπειρία μπορεί να οργανωθεί μέσα από μία εταιρεία.',
          ru: 'От планирования и декора до фотографии, развлечений и самых особых деталей — весь опыт можно организовать через одну компанию.',
        },
      ],
    },
    {
      id: '02',
      tone: 'azure',
      title: {
        en: 'Over 50 services. One destination.',
        el: 'Πάνω από 50 υπηρεσίες. Ένας προορισμός.',
        ru: 'Более 50 услуг. Один адрес.',
      },
      paragraphs: [
        {
          en: 'At Wedding Sky you have access to more than 50 different wedding services — without searching for separate professionals for every need.',
          el: 'Στη Wedding Sky έχετε πρόσβαση σε περισσότερες από 50 διαφορετικές υπηρεσίες γάμου, χωρίς να χρειάζεται να αναζητάτε ξεχωριστούς επαγγελματίες για κάθε ανάγκη.',
          ru: 'В Wedding Sky вам доступны более 50 свадебных услуг — без поиска отдельных специалистов под каждую задачу.',
        },
        {
          en: 'One destination. One team. One complete wedding experience.',
          el: 'Ένας προορισμός. Μία ομάδα. Ένα ολοκληρωμένο wedding experience.',
          ru: 'Один адрес. Одна команда. Один целостный свадебный опыт.',
        },
      ],
    },
    {
      id: '03',
      tone: 'champagne',
      title: {
        en: 'Over 90% of our services are in-house',
        el: 'Πάνω από το 90% των υπηρεσιών μας είναι in-house',
        ru: 'Более 90% наших услуг — in-house',
      },
      paragraphs: [
        {
          en: 'One of Wedding Sky’s greatest advantages is that over 90% of the services we offer are owned and managed directly by us.',
          el: 'Ένα από τα σημαντικότερα πλεονεκτήματα της Wedding Sky είναι ότι πάνω από το 90% των υπηρεσιών που προσφέρουμε ανήκουν και διαχειρίζονται απευθείας από εμάς.',
          ru: 'Одно из главных преимуществ Wedding Sky: более 90% предлагаемых услуг принадлежат нам и управляются напрямую.',
        },
        {
          en: 'That means better quality control, faster communication, quicker response, greater flexibility, and a significantly smaller margin for error.',
          el: 'Αυτό σημαίνει καλύτερο έλεγχο ποιότητας, αμεσότερη επικοινωνία, ταχύτερη ανταπόκριση, μεγαλύτερη ευελιξία και σημαντικά μικρότερο περιθώριο λάθους.',
          ru: 'Это значит лучший контроль качества, более быструю связь и реакцию, большую гибкость и заметно меньший риск ошибок.',
        },
        {
          en: 'No unnecessary middlemen. No complicated coordination between different companies.',
          el: 'Χωρίς αχρείαστους μεσάζοντες. Χωρίς πολύπλοκες συνεννοήσεις μεταξύ διαφορετικών εταιρειών.',
          ru: 'Без лишних посредников. Без сложных согласований между разными компаниями.',
        },
      ],
    },
    {
      id: '04',
      tone: 'sapphire',
      title: {
        en: 'A team of 75 people behind your day',
        el: 'Μία ομάδα 75 ανθρώπων πίσω από τη δική σας ημέρα',
        ru: 'Команда из 75 человек за вашим днём',
      },
      paragraphs: [
        {
          en: 'Behind every wedding stands an organised team of 75 people, with different specialties and one shared goal: everything works exactly as designed.',
          el: 'Πίσω από κάθε γάμο βρίσκεται μία οργανωμένη ομάδα 75 ανθρώπων, με διαφορετικές ειδικότητες και έναν κοινό στόχο: όλα να λειτουργήσουν όπως ακριβώς έχουν σχεδιαστεί.',
          ru: 'За каждой свадьбой — организованная команда из 75 человек с разными специальностями и одной целью: всё работает ровно так, как задумано.',
        },
        {
          en: 'Instead of ten different vendors trying to coordinate with each other, Wedding Sky centrally handles the planning, communication, and coordination of your services.',
          el: 'Αντί να προσπαθούν δέκα διαφορετικοί προμηθευτές να συντονιστούν μεταξύ τους, η Wedding Sky αναλαμβάνει κεντρικά τον σχεδιασμό, την επικοινωνία και τον συντονισμό των υπηρεσιών σας.',
          ru: 'Вместо десяти разных поставщиков, которые пытаются согласоваться друг с другом, Wedding Sky централизованно ведёт планирование, коммуникацию и координацию ваших услуг.',
        },
      ],
    },
    {
      id: '05',
      tone: 'rose',
      title: {
        en: 'Save time, money, and stress',
        el: 'Εξοικονομήστε χρόνο, χρήμα και άγχος',
        ru: 'Экономьте время, деньги и нервы',
      },
      paragraphs: [
        {
          en: 'Imagine not having to search for, visit, and coordinate ten or more different professionals.',
          el: 'Φανταστείτε να μη χρειάζεται να αναζητάτε, να επισκέπτεστε και να συντονίζετε δέκα ή περισσότερους διαφορετικούς επαγγελματίες.',
          ru: 'Представьте, что не нужно искать, посещать и координировать десять и более разных специалистов.',
        },
        {
          en: 'With Wedding Sky, you have one central point of contact for your entire wedding. Fewer calls. Fewer appointments. Less hassle. More time to truly enjoy preparing for your day.',
          el: 'Με τη Wedding Sky, έχετε ένα κεντρικό σημείο επικοινωνίας για ολόκληρο τον γάμο σας. Λιγότερα τηλεφωνήματα. Λιγότερα ραντεβού. Λιγότερη ταλαιπωρία. Περισσότερος χρόνος για να απολαύσετε πραγματικά την προετοιμασία του γάμου σας.',
          ru: 'С Wedding Sky у вас одна центральная точка связи на всю свадьбу. Меньше звонков. Меньше встреч. Меньше хлопот. Больше времени по-настоящему наслаждаться подготовкой.',
        },
      ],
    },
    {
      id: '06',
      tone: 'pearl',
      title: {
        en: 'One deposit instead of many',
        el: 'Μία προκαταβολή αντί για πολλαπλές προκαταβολές',
        ru: 'Один депозит вместо многих',
      },
      paragraphs: [
        {
          en: 'A complete Wedding Sky package means you do not need to pay separate deposits to many different vendors.',
          el: 'Ένα ολοκληρωμένο πακέτο Wedding Sky σημαίνει ότι δεν χρειάζεται να καταβάλλετε ξεχωριστές προκαταβολές σε πολλούς διαφορετικούς προμηθευτές.',
          ru: 'Цельный пакет Wedding Sky означает, что не нужно вносить отдельные депозиты множеству разных поставщиков.',
        },
        {
          en: 'The process becomes simpler, more organised, and far easier to manage.',
          el: 'Η διαδικασία γίνεται πιο απλή, πιο οργανωμένη και πολύ πιο εύκολη στη διαχείριση.',
          ru: 'Процесс становится проще, организованнее и гораздо удобнее в управлении.',
        },
      ],
    },
    {
      id: '07',
      tone: 'teal',
      title: {
        en: 'Date change? You do not start from scratch.',
        el: 'Αλλάζει η ημερομηνία; Δεν χρειάζεται να ξεκινήσετε από την αρχή.',
        ru: 'Меняется дата? Не начинайте с нуля.',
      },
      paragraphs: [
        {
          en: 'A date change can create enormous disruption when a wedding has been organised through many different professionals.',
          el: 'Μία αλλαγή ημερομηνίας μπορεί να δημιουργήσει τεράστια αναστάτωση όταν ο γάμος έχει οργανωθεί μέσω πολλών διαφορετικών επαγγελματιών.',
          ru: 'Смена даты может вызвать огромный хаос, если свадьба собрана через множество разных специалистов.',
        },
        {
          en: 'With Wedding Sky, as long as the new date is available, one phone call is enough to begin coordinating the change across your services.',
          el: 'Με τη Wedding Sky, εφόσον η νέα ημερομηνία είναι διαθέσιμη, ένα τηλεφώνημα αρκεί για να ξεκινήσει ο συντονισμός της αλλαγής των υπηρεσιών σας.',
          ru: 'С Wedding Sky, если новая дата свободна, одного звонка достаточно, чтобы начать координацию изменений по всем услугам.',
        },
        {
          en: 'You do not need to contact every partner separately and hunt for availability all over again.',
          el: 'Δεν χρειάζεται να επικοινωνήσετε ξεχωριστά με κάθε συνεργάτη και να αναζητάτε ξανά διαθεσιμότητα από την αρχή.',
          ru: 'Не нужно отдельно писать каждому партнёру и заново искать доступность.',
        },
      ],
    },
    {
      id: '08',
      tone: 'amber',
      title: {
        en: 'The package adapts to you — not the other way around',
        el: 'Το πακέτο προσαρμόζεται σε εσάς — όχι εσείς στο πακέτο',
        ru: 'Пакет подстраивается под вас — не наоборот',
      },
      paragraphs: [
        {
          en: 'No wedding is the same. So why should packages be?',
          el: 'Κανένας γάμος δεν είναι ίδιος. Γιατί λοιπόν να είναι ίδια και τα πακέτα;',
          ru: 'Нет двух одинаковых свадеб. Почему тогда пакеты должны быть одинаковыми?',
        },
        {
          en: 'Wedding Sky’s complete packages can be shaped around your needs and preferences. You can add, remove, or change services — and the price adjusts accordingly.',
          el: 'Τα ολοκληρωμένα πακέτα της Wedding Sky μπορούν να διαμορφωθούν σύμφωνα με τις δικές σας ανάγκες και προτιμήσεις. Μπορείτε να προσθέσετε, να αφαιρέσετε ή να αλλάξετε υπηρεσίες και η τιμή προσαρμόζεται ανάλογα.',
          ru: 'Цельные пакеты Wedding Sky формируются под ваши нужды и предпочтения. Можно добавить, убрать или заменить услуги — и цена подстроится.',
        },
        {
          en: 'Your wedding. Your choices.',
          el: 'Ο δικός σας γάμος. Οι δικές σας επιλογές.',
          ru: 'Ваша свадьба. Ваш выбор.',
        },
      ],
    },
    {
      id: '09',
      tone: 'sky',
      title: {
        en: 'Want only one service? Of course.',
        el: 'Θέλετε μόνο μία υπηρεσία; Φυσικά.',
        ru: 'Нужна только одна услуга? Конечно.',
      },
      paragraphs: [
        {
          en: 'You do not need to choose a complete package to work with us.',
          el: 'Δεν χρειάζεται να επιλέξετε ολοκληρωμένο πακέτο για να συνεργαστείτε μαζί μας.',
          ru: 'Не обязательно выбирать полный пакет, чтобы работать с нами.',
        },
        {
          en: 'You can select even a single individual service, with no obligation to purchase a set number of services.',
          el: 'Μπορείτε να επιλέξετε ακόμη και μία μόνο μεμονωμένη υπηρεσία, χωρίς υποχρέωση αγοράς συγκεκριμένου αριθμού υπηρεσιών.',
          ru: 'Можно выбрать даже одну отдельную услугу — без обязательства покупать фиксированный набор.',
        },
        {
          en: 'Wedding Sky adapts to the needs of your wedding.',
          el: 'Η Wedding Sky προσαρμόζεται στις ανάγκες του δικού σας γάμου.',
          ru: 'Wedding Sky подстраивается под нужды именно вашей свадьбы.',
        },
      ],
    },
    {
      id: '10',
      tone: 'orchid',
      title: {
        en: 'More choice. No compromise.',
        el: 'Περισσότερες επιλογές. Χωρίς συμβιβασμούς.',
        ru: 'Больше выбора. Без компромиссов.',
      },
      paragraphs: [
        {
          en: 'The scale and breadth of our in-house services let us offer enormous variety in every category.',
          el: 'Η μεγάλη δυναμική και το εύρος των in-house υπηρεσιών μας επιτρέπουν να σας προσφέρουμε τεράστια ποικιλία επιλογών σε κάθε κατηγορία.',
          ru: 'Масштаб и широта наших in-house услуг позволяют предлагать огромное разнообразие в каждой категории.',
        },
        {
          en: 'We do not believe in packages where everything is pre-set and the couple is asked to choose among limited options.',
          el: 'Δεν πιστεύουμε στα πακέτα όπου όλα είναι προκαθορισμένα και το ζευγάρι απλώς καλείται να επιλέξει ανάμεσα σε περιορισμένες λύσεις.',
          ru: 'Мы не верим в пакеты, где всё заранее задано, а паре остаётся выбирать из ограниченных вариантов.',
        },
        {
          en: 'We want you to create a wedding that carries your own identity.',
          el: 'Θέλουμε να δημιουργήσετε έναν γάμο που να έχει τη δική σας ταυτότητα.',
          ru: 'Мы хотим, чтобы вы создали свадьбу со своей идентичностью.',
        },
      ],
    },
    {
      id: '11',
      tone: 'mint',
      title: {
        en: 'Know what you choose before you choose it',
        el: 'Ξέρετε τι επιλέγετε πριν το επιλέξετε',
        ru: 'Знайте, что выбираете, до выбора',
      },
      paragraphs: [
        {
          en: 'Before you decide, we want you to truly know what you are about to receive.',
          el: 'Πριν αποφασίσετε, θέλουμε να γνωρίζετε πραγματικά τι πρόκειται να αποκτήσετε.',
          ru: 'До решения мы хотим, чтобы вы по-настоящему понимали, что получите.',
        },
        {
          en: 'That is why the Wedding Sky experience includes a full personal presentation of our services and real samples of our work.',
          el: 'Γι’ αυτό η εμπειρία της Wedding Sky περιλαμβάνει ολοκληρωμένη προσωπική παρουσίαση των υπηρεσιών μας και πραγματικών δειγμάτων της δουλειάς μας.',
          ru: 'Поэтому опыт Wedding Sky включает полную личную презентацию услуг и реальных образцов нашей работы.',
        },
        {
          en: 'Depending on the services that interest you, you can review photography and videography portfolios in detail, discover florals and decoration options, see more than 500 invitation choices, taste selected treats, explore bridal gowns and suits, and speak personally with the specialists on our team.',
          el: 'Θα μπορείτε, ανάλογα με τις υπηρεσίες που σας ενδιαφέρουν, να δείτε αναλυτικά portfolios φωτογραφίας και βιντεογραφίας, να γνωρίσετε επιλογές ανθοστολισμού και διακόσμησης, να δείτε περισσότερες από 500 επιλογές προσκλητηρίων, να δοκιμάσετε επιλεγμένα κεράσματα, να εξερευνήσετε επιλογές νυφικών και κοστουμιών και να συζητήσετε προσωπικά με τους εξειδικευμένους ανθρώπους της ομάδας μας.',
          ru: 'В зависимости от интересующих услуг вы сможете подробно увидеть портфолио фото и видео, варианты флористики и декора, более 500 вариантов приглашений, попробовать избранные угощения, изучить свадебные платья и костюмы и лично поговорить со специалистами нашей команды.',
        },
        {
          en: 'We want you to know every detail before you say “yes” to Wedding Sky.',
          el: 'Θέλουμε να γνωρίζετε κάθε λεπτομέρεια πριν πείτε το “ναι” στη Wedding Sky.',
          ru: 'Мы хотим, чтобы вы знали каждую деталь, прежде чем сказать «да» Wedding Sky.',
        },
      ],
    },
    {
      id: '12',
      tone: 'copper',
      title: {
        en: 'Clear pricing. No unpleasant surprises.',
        el: 'Ξεκάθαρη τιμή. Χωρίς δυσάρεστες εκπλήξεις.',
        ru: 'Прозрачная цена. Без неприятных сюрпризов.',
      },
      paragraphs: [
        {
          en: 'Managing the vast majority of our services in-house allows us to create complete proposals with clear costing and agreed prices.',
          el: 'Η δυνατότητα να διαχειριζόμαστε εσωτερικά τη μεγάλη πλειονότητα των υπηρεσιών μας μάς επιτρέπει να δημιουργούμε ολοκληρωμένες προτάσεις με ξεκάθαρη κοστολόγηση και συμφωνημένες τιμές.',
          ru: 'Возможность управлять большинством услуг внутри компании позволяет создавать цельные предложения с ясной калькуляцией и согласованными ценами.',
        },
        {
          en: 'Our goal is for you to know from the start what you have chosen and what you are paying — without unexpected surprises along the way.',
          el: 'Στόχος μας είναι να γνωρίζετε από την αρχή τι έχετε επιλέξει και τι πληρώνετε, χωρίς απρόβλεπτες εκπλήξεις στην πορεία.',
          ru: 'Наша цель — чтобы вы с самого начала знали, что выбрали и за что платите, без непредвиденных сюрпризов по ходу.',
        },
      ],
    },
    {
      id: '13',
      tone: 'ice',
      title: {
        en: 'Premium quality with real value',
        el: 'Premium ποιότητα με πραγματική αξία',
        ru: 'Премиум-качество с реальной ценностью',
      },
      paragraphs: [
        {
          en: 'For us, luxury does not simply mean “expensive”.',
          el: 'Για εμάς, luxury δεν σημαίνει απλώς «ακριβό».',
          ru: 'Для нас luxury — это не просто «дорого».',
        },
        {
          en: 'It means quality, aesthetic, consistency, professionalism, service, and attention to detail.',
          el: 'Σημαίνει ποιότητα, αισθητική, συνέπεια, επαγγελματισμός, εξυπηρέτηση και προσοχή στη λεπτομέρεια.',
          ru: 'Это качество, эстетика, последовательность, профессионализм, сервис и внимание к детали.',
        },
        {
          en: 'Thanks to the size of our company and our in-house operating model, we can offer an exceptional quality-to-price relationship without sacrificing the level of the experience.',
          el: 'Χάρη στο μέγεθος της εταιρείας μας και στο in-house μοντέλο λειτουργίας μας, μπορούμε να προσφέρουμε εξαιρετική σχέση ποιότητας και τιμής, χωρίς να θυσιάζουμε το επίπεδο της εμπειρίας.',
          ru: 'Благодаря масштабу компании и in-house модели мы предлагаем исключительное соотношение качества и цены, не жертвуя уровнем опыта.',
        },
      ],
    },
    {
      id: '14',
      tone: 'lavender',
      title: {
        en: 'Four decades of experience make the difference',
        el: 'Η εμπειρία τεσσάρων δεκαετιών κάνει τη διαφορά',
        ru: 'Опыт четырёх десятилетий меняет всё',
      },
      paragraphs: [
        {
          en: 'With more than 40 years of knowledge and experience in weddings, we know that the details are what ultimately create the big picture.',
          el: 'Με περισσότερα από 40 χρόνια γνώσης και εμπειρίας στον χώρο του γάμου, γνωρίζουμε ότι οι λεπτομέρειες είναι αυτές που τελικά δημιουργούν τη μεγάλη εικόνα.',
          ru: 'С более чем 40 годами знаний и опыта в свадьбах мы знаем: именно детали в итоге создают большую картину.',
        },
        {
          en: 'Experience has taught us to anticipate, organise, and address situations before they become problems.',
          el: 'Η εμπειρία μάς έχει διδάξει να προβλέπουμε, να οργανώνουμε και να αντιμετωπίζουμε καταστάσεις πριν αυτές γίνουν προβλήματα.',
          ru: 'Опыт научил нас предвидеть, организовывать и решать ситуации до того, как они станут проблемами.',
        },
        {
          en: 'And that experience stands behind every wedding we take on.',
          el: 'Και αυτή η εμπειρία βρίσκεται πίσω από κάθε γάμο που αναλαμβάνουμε.',
          ru: 'И этот опыт стоит за каждой свадьбой, которую мы берём.',
        },
      ],
    },
    {
      id: '15',
      tone: 'emerald',
      title: {
        en: 'The security of a strong group of companies',
        el: 'Η ασφάλεια ενός ισχυρού ομίλου εταιρειών',
        ru: 'Надёжность сильной группы компаний',
      },
      paragraphs: [
        {
          en: 'Wedding Sky is a member of the Komodromos Group of Companies — an organised and financially strong business group.',
          el: 'Η Wedding Sky αποτελεί μέλος του Komodromos Group of Companies, ενός οργανωμένου και οικονομικά ισχυρού επιχειρηματικού ομίλου.',
          ru: 'Wedding Sky — часть Komodromos Group of Companies, организованной и финансово сильной бизнес-группы.',
        },
        {
          en: 'For such an important day, you are not choosing based on a pretty social-media photo alone. You choose based on reliability, infrastructure, professional consistency, and the confidence that the company you trust can truly deliver what it promises.',
          el: 'Για μία τόσο σημαντική ημέρα, δεν επιλέγετε απλώς με βάση μία όμορφη φωτογραφία στα social media. Επιλέγετε με βάση την αξιοπιστία, την υποδομή, την επαγγελματική συνέπεια και τη σιγουριά ότι η εταιρεία που εμπιστεύεστε μπορεί πραγματικά να υποστηρίξει όσα σας υπόσχεται.',
          ru: 'Для такого важного дня вы выбираете не только по красивому фото в соцсетях. Вы выбираете надёжность, инфраструктуру, профессиональную последовательность и уверенность, что компания действительно выполнит обещанное.',
        },
      ],
    },
    {
      id: '16',
      tone: 'coral',
      title: {
        en: 'Close to you in Cyprus and Greece',
        el: 'Κοντά σας σε Κύπρο και Ελλάδα',
        ru: 'Рядом с вами на Кипре и в Греции',
      },
      paragraphs: [
        {
          en: 'We can welcome and serve you personally at our offices in Larnaca, Limassol, and central Athens — offering the same high-level experience and personal care.',
          el: 'Μπορούμε να σας υποδεχθούμε και να σας εξυπηρετήσουμε προσωπικά στα γραφεία μας σε Λάρνακα, Λεμεσό και στο κέντρο της Αθήνας, προσφέροντας την ίδια υψηλού επιπέδου εμπειρία και προσωπική εξυπηρέτηση.',
          ru: 'Мы можем лично принять вас в офисах в Ларнаке, Лимасоле и центре Афин — с тем же высоким уровнем опыта и персонального сервиса.',
        },
      ],
    },
    {
      id: '17',
      tone: 'platinum',
      title: {
        en: 'Luxury is not only what you see. It is what you feel.',
        el: 'Luxury δεν είναι μόνο αυτό που βλέπετε. Είναι αυτό που αισθάνεστε.',
        ru: 'Luxury — не только то, что вы видите. Это то, что вы чувствуете.',
      },
      paragraphs: [
        {
          en: 'Wedding Sky was created for couples seeking more than simple wedding services.',
          el: 'Η Wedding Sky έχει δημιουργηθεί για ζευγάρια που αναζητούν κάτι περισσότερο από απλές υπηρεσίες γάμου.',
          ru: 'Wedding Sky создана для пар, которым нужно больше, чем просто свадебные услуги.',
        },
        {
          en: 'They seek aesthetic. Organisation. Choice. Service. Confidence.',
          el: 'Αναζητούν αισθητική. Οργάνωση. Επιλογές. Εξυπηρέτηση. Σιγουριά.',
          ru: 'Они ищут эстетику. Организацию. Выбор. Сервис. Уверенность.',
        },
        {
          en: 'Our goal is to create weddings that are not only beautiful in photographs, but unique in experience.',
          el: 'Στόχος μας είναι να δημιουργούμε γάμους που δεν είναι απλώς όμορφοι στις φωτογραφίες, αλλά μοναδικοί στην εμπειρία.',
          ru: 'Наша цель — создавать свадьбы, которые прекрасны не только на фото, но и уникальны в опыте.',
        },
      ],
    },
    {
      id: '18',
      tone: 'midnight',
      title: {
        en: 'From the first presentation to your complete wedding',
        el: 'Από την πρώτη παρουσίαση στον ολοκληρωμένο γάμο σας',
        ru: 'От первой презентации до вашей полной свадьбы',
      },
      paragraphs: [
        {
          en: 'In one complete presentation of about 90 minutes, you can discover our services, see real samples, discuss your needs, and create a complete package for your wedding.',
          el: 'Μέσα σε μία ολοκληρωμένη παρουσίαση περίπου 90 λεπτών, μπορείτε να γνωρίσετε τις υπηρεσίες μας, να δείτε πραγματικά δείγματα, να συζητήσετε τις ανάγκες σας και να δημιουργήσετε ένα ολοκληρωμένο πακέτο για τον γάμο σας.',
          ru: 'За одну цельную презентацию около 90 минут вы можете узнать наши услуги, увидеть реальные образцы, обсудить потребности и собрать полный пакет для свадьбы.',
        },
        {
          en: 'Where otherwise you would need days or weeks of calls and meetings with many different professionals, at Wedding Sky you can organise everything through one company and one team.',
          el: 'Εκεί όπου διαφορετικά θα χρειαζόσασταν ημέρες ή εβδομάδες επικοινωνίας και συναντήσεων με πολλούς διαφορετικούς επαγγελματίες, στη Wedding Sky μπορείτε να οργανώσετε τα πάντα μέσα από μία εταιρεία και μία ομάδα.',
          ru: 'Там, где иначе понадобились бы дни или недели общения и встреч с множеством специалистов, в Wedding Sky вы организуете всё через одну компанию и одну команду.',
        },
      ],
    },
  ] as const satisfies ReadonlyArray<WeddingDifferenceReason>,
  closingEyebrow: {
    en: 'And these are only 18 reasons.',
    el: 'ΚΑΙ ΑΥΤΟΙ ΕΙΝΑΙ ΜΟΝΟ 18 ΛΟΓΟΙ.',
    ru: 'И это только 18 причин.',
  } satisfies LocalizedText,
  closingLead: {
    en: 'There are many more.',
    el: 'Υπάρχουν πολλοί περισσότεροι.',
    ru: 'Их гораздо больше.',
  } satisfies LocalizedText,
  closingBody: {
    en: 'Book your personal Wedding Experience Appointment and let us show you even more reasons why so many couples trust Wedding Sky with one of the most important days of their lives.',
    el: 'Κλείστε το προσωπικό σας Wedding Experience Appointment και αφήστε μας να σας παρουσιάσουμε ακόμη περισσότερους λόγους για τους οποίους τόσα ζευγάρια εμπιστεύονται τη Wedding Sky για μία από τις σημαντικότερες ημέρες της ζωής τους.',
    ru: 'Запишитесь на личный Wedding Experience Appointment — и мы покажем ещё больше причин, почему столько пар доверяют Wedding Sky один из важнейших дней своей жизни.',
  } satisfies LocalizedText,
  brandName: {
    en: 'WEDDING SKY',
    el: 'WEDDING SKY',
    ru: 'WEDDING SKY',
  } satisfies LocalizedText,
  brandTagline: {
    en: 'Luxury Weddings. One Team. Endless Possibilities.',
    el: 'Luxury Weddings. One Team. Endless Possibilities.',
    ru: 'Luxury Weddings. One Team. Endless Possibilities.',
  } satisfies LocalizedText,
  brandCtaLine: {
    en: 'Your entire wedding — just one click away.',
    el: 'Ολόκληρος ο γάμος σας, μόνο με ένα κλικ!',
    ru: 'Вся свадьба — в один клик!',
  } satisfies LocalizedText,
  bookCta: {
    en: 'Book a consultation',
    el: 'Κλείστε ραντεβού',
    ru: 'Записаться на консультацию',
  } satisfies LocalizedText,
  backToAtelier: {
    en: 'Back to Wedding Sky',
    el: 'Πίσω στη Wedding Sky',
    ru: 'Назад к Wedding Sky',
  } satisfies LocalizedText,
}
