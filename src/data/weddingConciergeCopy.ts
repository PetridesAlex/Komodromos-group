import type { LocalizedText } from '../lib/weddingLocale'
import type { WeddingDifferenceTone } from './weddingDifferenceCopy'

export type WeddingConciergeQuestion = {
  id: string
  tone: WeddingDifferenceTone
  title: LocalizedText
  paragraphs: ReadonlyArray<LocalizedText>
}

export const weddingConciergeCopy = {
  pageTitle: {
    en: 'The Wedding Concierge',
    el: 'The Wedding Concierge',
    ru: 'The Wedding Concierge',
  } satisfies LocalizedText,
  eyebrow: {
    en: 'Ask Wedding Sky',
    el: 'Ρωτήστε τη Wedding Sky',
    ru: 'Спросите Wedding Sky',
  } satisfies LocalizedText,
  lead: {
    en: 'Your Questions. Our Expertise. Your Perfect Day.',
    el: 'Your Questions. Our Expertise. Your Perfect Day.',
    ru: 'Your Questions. Our Expertise. Your Perfect Day.',
  } satisfies LocalizedText,
  intro: [
    {
      en: 'Every beautiful wedding begins with questions. And every important decision deserves clear answers.',
      el: 'Κάθε όμορφος γάμος ξεκινά με ερωτήσεις. Και κάθε σημαντική απόφαση αξίζει ξεκάθαρες απαντήσεις.',
      ru: 'Каждая прекрасная свадьба начинается с вопросов. И каждое важное решение заслуживает ясных ответов.',
    },
    {
      en: 'At The Wedding Concierge, we gathered everything you want to know before entrusting us with one of the most important days of your life.',
      el: 'Στο THE WEDDING CONCIERGE, συγκεντρώσαμε όσα θέλετε να γνωρίζετε πριν εμπιστευτείτε σε εμάς μία από τις σημαντικότερες ημέρες της ζωής σας.',
      ru: 'В THE WEDDING CONCIERGE мы собрали всё, что вы хотите знать, прежде чем доверить нам один из важнейших дней вашей жизни.',
    },
    {
      en: 'With transparency, experience, and personal guidance, we are here to offer you more than answers: the confidence that you are in the right hands.',
      el: 'Με διαφάνεια, εμπειρία και προσωπική καθοδήγηση, είμαστε εδώ για να σας προσφέρουμε κάτι περισσότερο από απαντήσεις: τη σιγουριά ότι βρίσκεστε στα σωστά χέρια.',
      ru: 'С прозрачностью, опытом и личным сопровождением мы здесь, чтобы дать вам больше, чем ответы: уверенность, что вы в надёжных руках.',
    },
  ] as const satisfies ReadonlyArray<LocalizedText>,
  questionsLabel: {
    en: 'answers for couples who want clarity',
    el: 'απαντήσεις για ζευγάρια που θέλουν σαφήνεια',
    ru: 'ответов для пар, которым нужна ясность',
  } satisfies LocalizedText,
  faqEyebrow: {
    en: 'Frequently asked questions',
    el: 'Συχνές ερωτήσεις',
    ru: 'Частые вопросы',
  } satisfies LocalizedText,
  faqTitle: {
    en: 'Your questions, answered',
    el: 'Οι ερωτήσεις σας, με απαντήσεις',
    ru: 'Ваши вопросы — с ответами',
  } satisfies LocalizedText,
  questions: [
    {
      id: '01',
      tone: 'gold',
      title: {
        en: 'What is Wedding Sky and what makes it stand out?',
        el: 'Τι είναι η Wedding Sky και τι την κάνει να ξεχωρίζει;',
        ru: 'Что такое Wedding Sky и чем она выделяется?',
      },
      paragraphs: [
        {
          en: 'Wedding Sky is one of the largest and most complete wedding design, organisation, and production companies in Cyprus, with presence in Larnaca, Limassol, and Athens.',
          el: 'Η Wedding Sky είναι μία από τις μεγαλύτερες και πλέον ολοκληρωμένες εταιρείες σχεδιασμού, οργάνωσης και δημιουργίας γαμήλιων εκδηλώσεων στην Κύπρο, με παρουσία σε Λάρνακα, Λεμεσό και Αθήνα.',
          ru: 'Wedding Sky — одна из крупнейших и самых цельных компаний дизайна, организации и создания свадебных событий на Кипре с присутствием в Ларнаке, Лимасоле и Афинах.',
        },
        {
          en: 'Behind every wedding stands an organised team of about 75 specialised professionals, with experience across different areas of the wedding industry.',
          el: 'Πίσω από κάθε γάμο βρίσκεται μία οργανωμένη ομάδα περίπου 75 εξειδικευμένων επαγγελματιών, με εμπειρία και εξειδίκευση σε διαφορετικούς τομείς της γαμήλιας βιομηχανίας.',
          ru: 'За каждой свадьбой — организованная команда около 75 специалистов с опытом в разных областях свадебной индустрии.',
        },
        {
          en: 'We offer more than 50 wedding services — through complete Wedding Packages or as individual services — so every couple can create the wedding they truly want.',
          el: 'Προσφέρουμε περισσότερες από 50 υπηρεσίες γάμου, είτε μέσα από ολοκληρωμένα Wedding Packages είτε ως μεμονωμένες υπηρεσίες, δίνοντας σε κάθε ζευγάρι τη δυνατότητα να δημιουργήσει τον γάμο που πραγματικά επιθυμεί.',
          ru: 'Мы предлагаем более 50 свадебных услуг — через цельные Wedding Packages или по отдельности — чтобы каждая пара создала именно ту свадьбу, которую хочет.',
        },
        {
          en: 'What sets us apart is the strength of our infrastructure: over 90% of our services are owned or managed in-house by Wedding Sky.',
          el: 'Αυτό που μας διαφοροποιεί είναι η δυναμική της υποδομής μας: πάνω από το 90% των υπηρεσιών μας ανήκουν ή διαχειρίζονται in-house από τη Wedding Sky.',
          ru: 'Нас отличает сила инфраструктуры: более 90% услуг принадлежат Wedding Sky или управляются in-house.',
        },
        {
          en: 'That gives us greater quality control, better coordination, faster communication, and the ability to deliver a truly complete wedding experience through one company, one team, and one shared vision.',
          el: 'Αυτό μας προσφέρει μεγαλύτερο έλεγχο στην ποιότητα, καλύτερο συντονισμό, άμεση επικοινωνία και τη δυνατότητα να προσφέρουμε μία πραγματικά ολοκληρωμένη wedding experience μέσα από μία εταιρεία, μία ομάδα και ένα κοινό όραμα.',
          ru: 'Это даёт больший контроль качества, лучшую координацию, быструю связь и возможность дать по-настоящему цельный wedding experience через одну компанию, одну команду и одно общее видение.',
        },
      ],
    },
    {
      id: '02',
      tone: 'azure',
      title: {
        en: 'How much experience does Wedding Sky have in weddings?',
        el: 'Πόση εμπειρία διαθέτει η Wedding Sky στον χώρο του γάμου;',
        ru: 'Какой опыт у Wedding Sky в сфере свадеб?',
      },
      paragraphs: [
        {
          en: 'Our story did not begin yesterday.',
          el: 'Η ιστορία μας δεν ξεκίνησε χθες.',
          ru: 'Наша история началась не вчера.',
        },
        {
          en: 'Our roots in wedding events reach about 50 years back, when the first generation of our family began providing wedding services in Cyprus.',
          el: 'Οι ρίζες μας στον χώρο των γαμήλιων εκδηλώσεων φτάνουν περίπου 50 χρόνια πίσω, όταν η πρώτη γενιά της οικογένειάς μας δραστηριοποιήθηκε στην παροχή υπηρεσιών γάμου στην Κύπρο.',
          ru: 'Наши корни в свадебных событиях уходят примерно на 50 лет назад, когда первое поколение нашей семьи начало предоставлять свадебные услуги на Кипре.',
        },
        {
          en: 'Knowledge passed from generation to generation — from grandparents to parents and today to the new generation — creating a valuable legacy of experience in photography and videography, wedding equipment and catering, organisation and coordination, as well as florals and decoration.',
          el: 'Η γνώση πέρασε από γενιά σε γενιά — από τους παππούδες, στους γονείς και σήμερα στη νέα γενιά — δημιουργώντας μία πολύτιμη παρακαταθήκη εμπειρίας στη φωτογραφία και βιντεογραφία, στον εξοπλισμό γάμου και catering, στην οργάνωση και τον συντονισμό, καθώς και στις ανθοδημιουργίες και τη διακόσμηση.',
          ru: 'Знания передавались из поколения в поколение — от дедов к родителям и сегодня к новому поколению — создавая ценное наследие опыта в фото и видео, свадебном оборудовании и кейтеринге, организации и координации, а также во флористике и декоре.',
        },
        {
          en: 'Today, we honour that heritage without staying in the past.',
          el: 'Σήμερα, τιμούμε αυτή την κληρονομιά χωρίς να μένουμε στο παρελθόν.',
          ru: 'Сегодня мы чтим это наследие, не оставаясь в прошлом.',
        },
        {
          en: 'We evolve continuously, following international trends, fashion, technology, and the new expectations of the modern luxury wedding.',
          el: 'Εξελισσόμαστε συνεχώς, παρακολουθώντας τις διεθνείς τάσεις, τη μόδα, την τεχνολογία και τις νέες απαιτήσεις του σύγχρονου luxury wedding.',
          ru: 'Мы постоянно развиваемся, следя за международными трендами, модой, технологиями и новыми требованиями современной luxury-свадьбы.',
        },
        {
          en: 'With more than 150 wedding events each year, every new celebration adds experience to our team, and every detail becomes part of knowledge that has been evolving for decades.',
          el: 'Με περισσότερες από 150 γαμήλιες εκδηλώσεις ετησίως, κάθε νέος γάμος προσθέτει εμπειρία στην ομάδα μας και κάθε λεπτομέρεια γίνεται μέρος μιας γνώσης που εξελίσσεται εδώ και δεκαετίες.',
          ru: 'Более 150 свадебных событий в год: каждая новая свадьба добавляет опыт команде, а каждая деталь становится частью знаний, которые развиваются десятилетиями.',
        },
        {
          en: '50 years of heritage. One new generation. One contemporary vision for the wedding.',
          el: '50 χρόνια κληρονομιάς. Μία νέα γενιά. Ένα σύγχρονο όραμα για τον γάμο.',
          ru: '50 лет наследия. Одно новое поколение. Одно современное видение свадьбы.',
        },
      ],
    },
    {
      id: '03',
      tone: 'champagne',
      title: {
        en: 'How do you offer such competitive pricing at such a high service level?',
        el: 'Πώς καταφέρνετε να προσφέρετε τόσο ανταγωνιστικές τιμές σε ένα τόσο υψηλό επίπεδο υπηρεσιών;',
        ru: 'Как вы предлагаете такие конкурентные цены при столь высоком уровне сервиса?',
      },
      paragraphs: [
        {
          en: 'Our philosophy is not simply to offer “low prices”.',
          el: 'Η φιλοσοφία μας δεν είναι να προσφέρουμε απλώς «χαμηλές τιμές».',
          ru: 'Наша философия — не просто предлагать «низкие цены».',
        },
        {
          en: 'It is to offer the greatest possible value at the highest quality standard we demand from our work.',
          el: 'Είναι να προσφέρουμε τη μεγαλύτερη δυνατή αξία στο υψηλότερο επίπεδο ποιότητας που απαιτούμε από τη δουλειά μας.',
          ru: 'Это предлагать максимальную ценность при самом высоком уровне качества, который мы требуем от своей работы.',
        },
        {
          en: 'Because over 90% of our services are in-house, we reduce the need for middlemen and multiple external hand-offs.',
          el: 'Το γεγονός ότι πάνω από το 90% των υπηρεσιών μας είναι in-house μάς επιτρέπει να περιορίζουμε την ανάγκη για μεσάζοντες και πολλαπλές εξωτερικές αναθέσεις.',
          ru: 'То, что более 90% услуг in-house, позволяет нам сокращать посредников и множественные внешние передачи.',
        },
        {
          en: 'That means greater quality control, better coordination, and more direct management of cost.',
          el: 'Έτσι έχουμε μεγαλύτερο έλεγχο στην ποιότητα, καλύτερο συντονισμό και πιο άμεση διαχείριση του κόστους.',
          ru: 'Так мы лучше контролируем качество, координацию и управление стоимостью.',
        },
        {
          en: 'For us, true luxury is not simply a high price.',
          el: 'Για εμάς, πραγματική πολυτέλεια δεν είναι απλώς μία υψηλή τιμή.',
          ru: 'Для нас настоящая роскошь — не просто высокая цена.',
        },
        {
          en: 'It is knowing that behind what you choose there is quality, organisation, infrastructure, consistency, and an entire team that can deliver what it has promised.',
          el: 'Είναι να γνωρίζετε ότι πίσω από αυτό που επιλέγετε υπάρχει ποιότητα, οργάνωση, υποδομή, συνέπεια και μία ολόκληρη ομάδα που μπορεί να υποστηρίξει όσα σας έχει υποσχεθεί.',
          ru: 'Это знать, что за вашим выбором стоят качество, организация, инфраструктура, последовательность и целая команда, способная выполнить обещанное.',
        },
        {
          en: 'You are not only investing in services.',
          el: 'Δεν επενδύετε απλώς σε υπηρεσίες.',
          ru: 'Вы инвестируете не только в услуги.',
        },
        {
          en: 'You are investing in the confidence of the result.',
          el: 'Επενδύετε στη σιγουριά του αποτελέσματος.',
          ru: 'Вы инвестируете в уверенность результата.',
        },
      ],
    },
    {
      id: '04',
      tone: 'sapphire',
      title: {
        en: 'What are the advantages of a complete Wedding Package?',
        el: 'Ποια είναι τα πλεονεκτήματα ενός ολοκληρωμένου Wedding Package;',
        ru: 'Каковы преимущества цельного Wedding Package?',
      },
      paragraphs: [
        {
          en: 'A complete Wedding Package does not mean less quality or limited choices.',
          el: 'Ένα ολοκληρωμένο Wedding Package δεν σημαίνει λιγότερη ποιότητα ή περιορισμένες επιλογές.',
          ru: 'Цельный Wedding Package не означает меньше качества или ограниченный выбор.',
        },
        {
          en: 'At Wedding Sky it means the opposite: more control, better coordination, less stress, and significant time saved.',
          el: 'Στη Wedding Sky σημαίνει ακριβώς το αντίθετο: περισσότερος έλεγχος, καλύτερος συντονισμός, λιγότερο άγχος και σημαντική εξοικονόμηση χρόνου.',
          ru: 'В Wedding Sky это ровно наоборот: больше контроля, лучше координация, меньше стресса и заметная экономия времени.',
        },
        {
          en: 'Instead of searching for, meeting, coordinating, and managing ten or more different professionals, you can have one central point of contact for your entire wedding.',
          el: 'Αντί να χρειάζεται να αναζητήσετε, να συναντήσετε, να συντονίσετε και να διαχειριστείτε δέκα ή περισσότερους διαφορετικούς επαγγελματίες, μπορείτε να έχετε ένα κεντρικό σημείο επικοινωνίας για ολόκληρο τον γάμο σας.',
          ru: 'Вместо поиска, встреч, координации и управления десятью и более специалистами у вас одна центральная точка связи на всю свадьбу.',
        },
        {
          en: 'Our team organises the services, follows the progress of preparation, and keeps you fully informed at every stage.',
          el: 'Η ομάδα μας αναλαμβάνει να οργανώσει τις υπηρεσίες, να παρακολουθεί την πορεία της προετοιμασίας και να σας κρατά πλήρως ενημερωμένους σε κάθε στάδιο.',
          ru: 'Наша команда организует услуги, следит за подготовкой и держит вас в курсе на каждом этапе.',
        },
        {
          en: 'With a complete package you can also have one central deposit, instead of managing many separate deposits to different vendors.',
          el: 'Με ένα ολοκληρωμένο πακέτο μπορείτε επίσης να έχετε μία κεντρική προκαταβολή, αντί να διαχειρίζεστε πολλαπλές ξεχωριστές προκαταβολές προς διαφορετικούς προμηθευτές.',
          ru: 'С цельным пакетом возможен один центральный депозит вместо множества отдельных взносов разным поставщикам.',
        },
        {
          en: 'And when the big day arrives?',
          el: 'Και όταν φτάσει η μεγάλη ημέρα;',
          ru: 'А когда наступает большой день?',
        },
        {
          en: 'You should not have to coordinate anything.',
          el: 'Εσείς δεν πρέπει να συντονίζετε τίποτα.',
          ru: 'Вам не нужно ничего координировать.',
        },
        {
          en: 'From the first hours of preparation to the close of the celebration, our team is there to coordinate everything we have taken on.',
          el: 'Από τις πρώτες ώρες της προετοιμασίας μέχρι την ολοκλήρωση της γαμήλιας εκδήλωσης, η ομάδα μας βρίσκεται εκεί για να συντονίσει όσα έχουμε αναλάβει.',
          ru: 'С первых часов подготовки до завершения торжества наша команда координирует всё, что мы взяли на себя.',
        },
        {
          en: 'You have only one obligation:',
          el: 'Εσείς έχετε μία μόνο υποχρέωση:',
          ru: 'У вас одна обязанность:',
        },
        {
          en: 'To live your day.',
          el: 'Να ζήσετε την ημέρα σας.',
          ru: 'Прожить свой день.',
        },
      ],
    },
    {
      id: '05',
      tone: 'rose',
      title: {
        en: 'Is my deposit and financial transaction with Wedding Sky secure?',
        el: 'Είναι ασφαλής η προκαταβολή και η οικονομική μου συναλλαγή με τη Wedding Sky;',
        ru: 'Безопасны ли депозит и финансовая сделка с Wedding Sky?',
      },
      paragraphs: [
        {
          en: 'A couple’s trust is as important to us as the quality of the wedding we create.',
          el: 'Η εμπιστοσύνη ενός ζευγαριού είναι για εμάς εξίσου σημαντική με την ποιότητα του γάμου που δημιουργούμε.',
          ru: 'Доверие пары для нас так же важно, как качество свадьбы, которую мы создаём.',
        },
        {
          en: 'Wedding Sky is a member of the Komodromos Group of Companies — an organised and financially strong group of 11 different companies.',
          el: 'Η Wedding Sky αποτελεί μέλος του Komodromos Group of Companies, ενός οργανωμένου και οικονομικά ισχυρού ομίλου που αποτελείται από 11 διαφορετικές εταιρείες.',
          ru: 'Wedding Sky входит в Komodromos Group of Companies — организованную и финансово сильную группу из 11 компаний.',
        },
        {
          en: 'That means behind Wedding Sky is not simply a wedding brand, but a broader business infrastructure with presence, organisation, and financial foundation.',
          el: 'Αυτό σημαίνει ότι πίσω από τη Wedding Sky δεν βρίσκεται απλώς ένα wedding brand, αλλά μία ευρύτερη επιχειρηματική υποδομή με παρουσία, οργάνωση και οικονομική βάση.',
          ru: 'Это значит, что за Wedding Sky стоит не просто свадебный бренд, а более широкая бизнес-инфраструктура с присутствием, организацией и финансовой базой.',
        },
        {
          en: 'Especially when a wedding is planned one, two, or even more years ahead, choosing a company with real infrastructure and business continuity is a meaningful factor of trust.',
          el: 'Ιδιαίτερα όταν ένας γάμος προγραμματίζεται έναν, δύο ή ακόμη και περισσότερα χρόνια νωρίτερα, η επιλογή μιας εταιρείας με πραγματική υποδομή και επιχειρηματική συνέχεια αποτελεί σημαντικό παράγοντα εμπιστοσύνης.',
          ru: 'Особенно когда свадьба планируется за год, два или больше, выбор компании с реальной инфраструктурой и преемственностью — важный фактор доверия.',
        },
        {
          en: 'Because ultimately you are not only choosing flowers, music, or photography.',
          el: 'Γιατί τελικά δεν επιλέγετε μόνο λουλούδια, μουσική ή φωτογραφία.',
          ru: 'Потому что в итоге вы выбираете не только цветы, музыку или фотографию.',
        },
        {
          en: 'You are choosing the people you will trust with a day that never repeats.',
          el: 'Επιλέγετε τους ανθρώπους στους οποίους θα εμπιστευτείτε μία ημέρα που δεν επαναλαμβάνεται.',
          ru: 'Вы выбираете людей, которым доверите день, который не повторяется.',
        },
      ],
    },
    {
      id: '06',
      tone: 'pearl',
      title: {
        en: 'Can I customise a Wedding Package to my own needs?',
        el: 'Μπορώ να προσαρμόσω ένα Wedding Package στις δικές μου ανάγκες;',
        ru: 'Можно ли адаптировать Wedding Package под мои нужды?',
      },
      paragraphs: [
        {
          en: 'Absolutely.',
          el: 'Απολύτως.',
          ru: 'Абсолютно.',
        },
        {
          en: 'At Wedding Sky we do not believe the couple should adapt to the package. The package should adapt to the couple.',
          el: 'Στη Wedding Sky δεν πιστεύουμε ότι το ζευγάρι πρέπει να προσαρμόζεται στο πακέτο. Το πακέτο πρέπει να προσαρμόζεται στο ζευγάρι.',
          ru: 'В Wedding Sky мы не считаем, что пара должна подстраиваться под пакет. Пакет должен подстраиваться под пару.',
        },
        {
          en: 'You can add, remove, upgrade, or modify services according to the needs, style, and budget of your wedding.',
          el: 'Μπορείτε να προσθέσετε, να αφαιρέσετε, να αναβαθμίσετε ή να τροποποιήσετε υπηρεσίες σύμφωνα με τις ανάγκες, το ύφος και το budget του γάμου σας.',
          ru: 'Можно добавить, убрать, повысить или изменить услуги под нужды, стиль и бюджет вашей свадьбы.',
        },
        {
          en: 'You can even combine services from different Wedding Packages, creating a proposal that truly responds to you.',
          el: 'Μπορείτε ακόμη να συνδυάσετε υπηρεσίες από διαφορετικά Wedding Packages, δημιουργώντας μία πρόταση που ανταποκρίνεται πραγματικά σε εσάς.',
          ru: 'Можно даже сочетать услуги из разных Wedding Packages, создавая предложение именно под вас.',
        },
        {
          en: 'And of course, the final price adjusts according to your choices.',
          el: 'Και φυσικά, η τελική τιμή προσαρμόζεται ανάλογα με τις επιλογές σας.',
          ru: 'И конечно, итоговая цена подстраивается под ваш выбор.',
        },
        {
          en: 'Your Wedding. Your Choices. Your Way.',
          el: 'Your Wedding. Your Choices. Your Way.',
          ru: 'Your Wedding. Your Choices. Your Way.',
        },
      ],
    },
    {
      id: '07',
      tone: 'teal',
      title: {
        en: 'Can I choose only one service?',
        el: 'Μπορώ να επιλέξω μόνο μία υπηρεσία;',
        ru: 'Можно ли выбрать только одну услугу?',
      },
      paragraphs: [
        {
          en: 'Of course.',
          el: 'Βεβαίως.',
          ru: 'Конечно.',
        },
        {
          en: 'There is no obligation to choose a complete Wedding Package, and no minimum number of services.',
          el: 'Δεν υπάρχει υποχρέωση να επιλέξετε ολοκληρωμένο Wedding Package ούτε ελάχιστος αριθμός υπηρεσιών.',
          ru: 'Нет обязательства выбирать полный Wedding Package и нет минимума услуг.',
        },
        {
          en: 'You can work with Wedding Sky even for a single service, enjoying the same level of professionalism, service, and attention to detail.',
          el: 'Μπορείτε να συνεργαστείτε με τη Wedding Sky ακόμη και για μία μόνο υπηρεσία, απολαμβάνοντας το ίδιο επίπεδο επαγγελματισμού, εξυπηρέτησης και προσοχής στη λεπτομέρεια.',
          ru: 'Можно работать с Wedding Sky даже по одной услуге — с тем же уровнем профессионализма, сервиса и внимания к детали.',
        },
      ],
    },
    {
      id: '08',
      tone: 'amber',
      title: {
        en: 'If I remove a service from the Wedding Package, does the price decrease?',
        el: 'Αν αφαιρέσω μία υπηρεσία από το Wedding Package, μειώνεται η τιμή;',
        ru: 'Если убрать услугу из Wedding Package, цена снижается?',
      },
      paragraphs: [
        {
          en: 'Naturally.',
          el: 'Φυσικά.',
          ru: 'Разумеется.',
        },
        {
          en: 'Our philosophy is built on flexibility and transparency.',
          el: 'Η φιλοσοφία μας βασίζεται στην ευελιξία και στη διαφάνεια.',
          ru: 'Наша философия строится на гибкости и прозрачности.',
        },
        {
          en: 'If a service is removed, the package price adjusts downward. Likewise, if services are added or upgraded, the price is shaped accordingly.',
          el: 'Εάν αφαιρεθεί μία υπηρεσία, η τιμή του πακέτου προσαρμόζεται προς τα κάτω. Αντίστοιχα, εάν προστεθούν ή αναβαθμιστούν υπηρεσίες, η τιμή διαμορφώνεται ανάλογα.',
          ru: 'Если услугу убрать, цена пакета снижается. Если услуги добавить или повысить — цена формируется соответственно.',
        },
        {
          en: 'So you pay for what you truly choose for your own wedding.',
          el: 'Έτσι πληρώνετε για αυτό που πραγματικά επιλέγετε για τον δικό σας γάμο.',
          ru: 'Так вы платите за то, что действительно выбираете для своей свадьбы.',
        },
      ],
    },
    {
      id: '09',
      tone: 'sky',
      title: {
        en: 'Do I have to book all my wedding services from Wedding Sky?',
        el: 'Πρέπει να κλείσω όλες τις υπηρεσίες του γάμου μου από τη Wedding Sky;',
        ru: 'Нужно ли бронировать все свадебные услуги у Wedding Sky?',
      },
      paragraphs: [
        {
          en: 'No — and that is part of the flexibility we want to offer you.',
          el: 'Όχι — και αυτό είναι μέρος της ευελιξίας που θέλουμε να σας προσφέρουμε.',
          ru: 'Нет — и это часть гибкости, которую мы хотим вам дать.',
        },
        {
          en: 'If you have already chosen a photographer, music, venue, or any other professional, we can take on only the services you still need.',
          el: 'Εάν έχετε ήδη επιλέξει φωτογράφο, μουσική, venue ή οποιονδήποτε άλλο επαγγελματία, μπορούμε να αναλάβουμε μόνο τις υπηρεσίες που εξακολουθείτε να χρειάζεστε.',
          ru: 'Если вы уже выбрали фотографа, музыку, площадку или другого специалиста, мы можем взять только те услуги, которые вам ещё нужны.',
        },
        {
          en: 'At the same time, our team works professionally with the external partners you have chosen, so everyone moves toward one shared goal:',
          el: 'Παράλληλα, η ομάδα μας συνεργάζεται επαγγελματικά με τους εξωτερικούς συνεργάτες που έχετε επιλέξει, ώστε όλοι να λειτουργούν προς έναν κοινό στόχο:',
          ru: 'При этом наша команда профессионально сотрудничает с выбранными вами внешними партнёрами, чтобы все шли к одной цели:',
        },
        {
          en: 'a finely coordinated and unforgettable wedding experience.',
          el: 'μία άρτια συντονισμένη και αξέχαστη γαμήλια εμπειρία.',
          ru: 'безупречно скоординированный и незабываемый свадебный опыт.',
        },
      ],
    },
    {
      id: '10',
      tone: 'orchid',
      title: {
        en: 'In which areas does Wedding Sky organise weddings?',
        el: 'Σε ποιες περιοχές διοργανώνει γάμους η Wedding Sky;',
        ru: 'В каких регионах Wedding Sky организует свадьбы?',
      },
      paragraphs: [
        {
          en: 'Wedding Sky undertakes wedding events across Cyprus — in cities, villages, and selected destinations across the island.',
          el: 'Η Wedding Sky αναλαμβάνει γαμήλιες εκδηλώσεις σε ολόκληρη την Κύπρο, σε πόλεις, χωριά και επιλεγμένους προορισμούς σε όλο το νησί.',
          ru: 'Wedding Sky проводит свадебные события по всему Кипру — в городах, деревнях и выбранных локациях острова.',
        },
        {
          en: 'From 1 January 2027, we expand our presence in Greece, undertaking weddings in Athens, Mykonos, and Santorini.',
          el: 'Από την 1η Ιανουαρίου 2027, επεκτείνουμε την παρουσία μας στην Ελλάδα, αναλαμβάνοντας γάμους στην Αθήνα, τη Μύκονο και τη Σαντορίνη.',
          ru: 'С 1 января 2027 мы расширяем присутствие в Греции — свадьбы в Афинах, на Миконосе и Санторини.',
        },
        {
          en: 'From an elegant city wedding to an impressive Mediterranean destination wedding, the philosophy remains the same:',
          el: 'Από έναν elegant city wedding μέχρι ένα εντυπωσιακό Mediterranean destination wedding, η φιλοσοφία παραμένει η ίδια:',
          ru: 'От элегантной городской свадьбы до впечатляющего Mediterranean destination wedding философия та же:',
        },
        {
          en: 'One vision. One team. One unforgettable celebration.',
          el: 'One vision. One team. One unforgettable celebration.',
          ru: 'One vision. One team. One unforgettable celebration.',
        },
      ],
    },
    {
      id: '11',
      tone: 'mint',
      title: {
        en: 'Where are the Wedding Sky offices?',
        el: 'Πού βρίσκονται τα γραφεία της Wedding Sky;',
        ru: 'Где находятся офисы Wedding Sky?',
      },
      paragraphs: [
        {
          en: 'Wedding Sky has presence in Larnaca, Limassol, and Athens, so our couples can enjoy personal service and direct communication with our team.',
          el: 'Η Wedding Sky έχει παρουσία σε Λάρνακα, Λεμεσό και Αθήνα, ώστε τα ζευγάρια μας να μπορούν να απολαμβάνουν προσωπική εξυπηρέτηση και άμεση επικοινωνία με την ομάδα μας.',
          ru: 'У Wedding Sky есть присутствие в Ларнаке, Лимасоле и Афинах, чтобы пары получали персональный сервис и прямую связь с командой.',
        },
        {
          en: 'For us, luxury service begins long before the wedding day — from the very first meeting.',
          el: 'Για εμάς, το luxury service ξεκινά πολύ πριν από την ημέρα του γάμου — από την πρώτη κιόλας συνάντηση.',
          ru: 'Для нас luxury-сервис начинается задолго до дня свадьбы — с самой первой встречи.',
        },
      ],
    },
    {
      id: '12',
      tone: 'copper',
      title: {
        en: 'Can I book services without a complete presentation first?',
        el: 'Μπορώ να κλείσω υπηρεσίες χωρίς να προηγηθεί ολοκληρωμένη παρουσίαση;',
        ru: 'Можно ли забронировать услуги без полной презентации?',
      },
      paragraphs: [
        {
          en: 'Our policy is that a complete presentation and personal briefing come before services are finalised.',
          el: 'Η πολιτική μας είναι να προηγείται ολοκληρωμένη παρουσίαση και προσωπική ενημέρωση πριν από την οριστικοποίηση των υπηρεσιών.',
          ru: 'Наша политика: полная презентация и личный брифинг предшествуют финализации услуг.',
        },
        {
          en: 'And there is a very important reason.',
          el: 'Και υπάρχει ένας πολύ σημαντικός λόγος.',
          ru: 'И на то есть очень важная причина.',
        },
        {
          en: 'We want you to know exactly what you are choosing before you trust us.',
          el: 'Θέλουμε να γνωρίζετε ακριβώς τι επιλέγετε πριν μας εμπιστευτείτε.',
          ru: 'Мы хотим, чтобы вы точно знали, что выбираете, прежде чем довериться нам.',
        },
        {
          en: 'During the presentation, you can explore the services that interest you in detail, see real samples of our work, discuss your choices, and clearly understand what is included in your proposal.',
          el: 'Κατά την παρουσίαση, έχετε τη δυνατότητα να γνωρίσετε αναλυτικά τις υπηρεσίες που σας ενδιαφέρουν, να δείτε πραγματικά δείγματα της δουλειάς μας, να συζητήσετε τις επιλογές σας και να κατανοήσετε ξεκάθαρα τι περιλαμβάνεται στην πρότασή σας.',
          ru: 'На презентации вы подробно знакомитесь с интересующими услугами, видите реальные образцы работы, обсуждаете выбор и ясно понимаете, что входит в предложение.',
        },
        {
          en: 'We do not want a couple to choose Wedding Sky based only on a photograph or a promise.',
          el: 'Δεν θέλουμε ένα ζευγάρι να επιλέξει τη Wedding Sky βασισμένο μόνο σε μία φωτογραφία ή μία υπόσχεση.',
          ru: 'Мы не хотим, чтобы пара выбирала Wedding Sky только по фотографии или обещанию.',
        },
        {
          en: 'We want them to choose us because they saw, learned, compared, and felt confident in their decision.',
          el: 'Θέλουμε να μας επιλέξει επειδή είδε, γνώρισε, σύγκρινε και αισθάνθηκε σίγουρο για την απόφασή του.',
          ru: 'Мы хотим, чтобы нас выбрали потому, что увидели, узнали, сравнили и почувствовали уверенность в решении.',
        },
        {
          en: 'That, for us, is the true meaning of professional transparency.',
          el: 'Αυτή είναι για εμάς η πραγματική έννοια της επαγγελματικής διαφάνειας.',
          ru: 'Для нас это и есть истинный смысл профессиональной прозрачности.',
        },
      ],
    },
    {
      id: '13',
      tone: 'ice',
      title: {
        en: 'Can we meet Wedding Sky at a wedding exhibition?',
        el: 'Μπορούμε να γνωρίσουμε τη Wedding Sky σε κάποια έκθεση γάμου;',
        ru: 'Можно ли познакомиться с Wedding Sky на свадебной выставке?',
      },
      paragraphs: [
        {
          en: 'Yes — but in a way that differs from a conventional wedding fair.',
          el: 'Ναι — αλλά με έναν τρόπο διαφορετικό από μία συμβατική έκθεση γάμου.',
          ru: 'Да — но иначе, чем на обычной свадебной ярмарке.',
        },
        {
          en: 'Every November in Limassol, Wedding Sky creates its own exclusive VIP Wedding Tour Exhibition, dedicated solely to Wedding Sky’s services, people, and experience.',
          el: 'Κάθε Νοέμβριο στη Λεμεσό, η Wedding Sky δημιουργεί το δικό της αποκλειστικό VIP Wedding Tour Exhibition, αφιερωμένο αποκλειστικά στις υπηρεσίες, στους ανθρώπους και στην εμπειρία της Wedding Sky.',
          ru: 'Каждый ноябрь в Лимасоле Wedding Sky создаёт собственную эксклюзивную VIP Wedding Tour Exhibition, посвящённую только услугам, людям и опыту Wedding Sky.',
        },
        {
          en: 'It is not a classic fair where you simply walk between stands and collect brochures.',
          el: 'Δεν πρόκειται για μία κλασική έκθεση όπου απλώς περπατάτε ανάμεσα σε περίπτερα και συλλέγετε διαφημιστικά φυλλάδια.',
          ru: 'Это не классическая выставка, где вы просто ходите между стендами и собираете буклеты.',
        },
        {
          en: 'It is a curated wedding experience, designed to guide you through the different services of a wedding and let you discover them more meaningfully.',
          el: 'Είναι μία curated wedding experience, σχεδιασμένη ώστε να σας ταξιδεύει μέσα στις διαφορετικές υπηρεσίες του γάμου και να σας δίνει τη δυνατότητα να τις γνωρίσετε πιο ουσιαστικά.',
          ru: 'Это curated wedding experience, созданный, чтобы провести вас через разные свадебные услуги и дать узнать их глубже.',
        },
        {
          en: 'During the VIP Tour, specialised members of our team present the services, explain your options, and answer your questions personally.',
          el: 'Κατά τη διάρκεια του VIP Tour, τα εξειδικευμένα μέλη της ομάδας μας παρουσιάζουν τις υπηρεσίες, εξηγούν τις δυνατότητες και τις επιλογές σας και απαντούν προσωπικά στις ερωτήσεις σας.',
          ru: 'Во время VIP Tour специалисты нашей команды представляют услуги, объясняют возможности и варианты и лично отвечают на ваши вопросы.',
        },
        {
          en: 'You are not simply visiting an exhibition.',
          el: 'Δεν επισκέπτεστε απλώς μία έκθεση.',
          ru: 'Вы не просто посещаете выставку.',
        },
        {
          en: 'You experience a first taste of the world of Wedding Sky.',
          el: 'Ζείτε μία πρώτη γεύση από τον κόσμο της Wedding Sky.',
          ru: 'Вы получаете первый вкус мира Wedding Sky.',
        },
      ],
    },
  ] as const satisfies ReadonlyArray<WeddingConciergeQuestion>,
  closingEyebrow: {
    en: 'Still have questions?',
    el: 'STILL HAVE QUESTIONS?',
    ru: 'Остались вопросы?',
  } satisfies LocalizedText,
  closingLead: {
    en: 'Every wedding is different. And some questions deserve a personal answer.',
    el: 'Κάθε γάμος είναι διαφορετικός. Και κάποιες ερωτήσεις αξίζουν μία προσωπική απάντηση.',
    ru: 'Каждая свадьба уникальна. И некоторые вопросы заслуживают личного ответа.',
  } satisfies LocalizedText,
  closingBody: {
    en: 'Book Your Private Wedding Consultation and discuss with our team the vision, needs, and choices for your own day.',
    el: 'Book Your Private Wedding Consultation και συζητήστε με την ομάδα μας το όραμα, τις ανάγκες και τις επιλογές για τη δική σας ημέρα.',
    ru: 'Запишитесь на Private Wedding Consultation и обсудите с нашей командой видение, нужды и выбор для вашего дня.',
  } satisfies LocalizedText,
  brandName: {
    en: 'WEDDING SKY',
    el: 'WEDDING SKY',
    ru: 'WEDDING SKY',
  } satisfies LocalizedText,
  brandTagline: {
    en: 'Your Questions. Our Expertise. Your Perfect Day.',
    el: 'Your Questions. Our Expertise. Your Perfect Day.',
    ru: 'Your Questions. Our Expertise. Your Perfect Day.',
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
