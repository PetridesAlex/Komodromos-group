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
  prestige: {
    summary: {
      en: 'A composed Prestige programme — photography, décor, entertainment, VIP transfer, and day coordination in one clear investment.',
      el: 'Ένα ολοκληρωμένο πρόγραμμα Prestige — φωτογραφία, διακόσμηση, ψυχαγωγία, VIP μεταφορά και συντονισμός ημέρας σε μία καθαρή επένδυση.',
      ru: 'Составленная программа Prestige — фото, декор, развлечения, VIP-трансфер и координация дня в одной ясной инвестиции.',
    },
    idealFor: {
      en: 'Couples seeking a polished all-in foundation with Wedding Sky signature inclusions.',
      el: 'Ζευγάρια που θέλουν μια κομψή all-in βάση με signature παροχές Wedding Sky.',
      ru: 'Пары, которым нужна отточенная all-in основа с signature inclusions Wedding Sky.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 4–8 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 4–8 μήνες',
      ru: 'Рекомендуемый срок подготовки: 4–8 месяцев',
    },
    inclusions: [
      { en: 'Artistic photography & 4K cinematography programme', el: 'Πρόγραμμα καλλιτεχνικής φωτογραφίας & 4K κινηματογράφησης', ru: 'Программа художественной фотографии и 4K-кинематографии' },
      { en: 'Luxury invitations and full event décor styling', el: 'Πολυτελείς προσκλήσεις και πλήρες styling διακόσμησης', ru: 'Роскошные приглашения и полное styling декора' },
      { en: 'Entertainment, reception effects & audio-video guest book', el: 'Ψυχαγωγία, εφέ δεξίωσης & τηλέφωνο ευχών', ru: 'Развлечения, эффекты приёма и аудио-видео книга пожеланий' },
      { en: 'VIP newlywed transfer and personal day-of coordination', el: 'VIP μεταφορά νεονύμφων και προσωπικός συντονισμός ημέρας', ru: 'VIP-трансфер молодожёнов и персональная координация дня' },
    ],
  },
  grand: {
    summary: {
      en: 'An elevated Grand Experience with bridal & groom attire, enriched media, treats & cake, and fuller décor architecture.',
      el: 'Αναβαθμισμένη εμπειρία Grand με νυφικό & γαμπριάτικο, enriched media, κεράσματα & τούρτα και fuller διακόσμηση.',
      ru: 'Расширенный Grand Experience с нарядами, enriched media, угощениями и тортом и fuller архитектурой декора.',
    },
    idealFor: {
      en: 'Couples ready for a richer programme spanning wardrobe, hospitality, and styling.',
      el: 'Ζευγάρια έτοιμα για richer πρόγραμμα που καλύπτει γκαρνταρόμπα, φιλοξενία και styling.',
      ru: 'Пары, готовые к richer программе: гардероб, гостеприимство и стиль.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 6–10 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 6–10 μήνες',
      ru: 'Рекомендуемый срок подготовки: 6–10 месяцев',
    },
    inclusions: [
      { en: 'Haute couture bridal selection and tailored groom suit', el: 'Νυφικό υψηλής ραπτικής και εφαρμοστό κοστούμι γαμπρού', ru: 'Haute couture платье и сшитый костюм жениха' },
      { en: 'Expanded album, film, and invitation programme', el: 'Εμπλουτισμένο πρόγραμμα άλμπουμ, film και προσκλήσεων', ru: 'Расширенная программа альбомов, film и приглашений' },
      { en: 'Premium treats, signature cake, and elevated décor', el: 'Premium κεράσματα, signature τούρτα και elevated διακόσμηση', ru: 'Premium-угощения, signature-торт и elevated-декор' },
      { en: 'Reception effects, VIP transfer, and wedding planner', el: 'Εφέ δεξίωσης, VIP μεταφορά και wedding planner', ru: 'Эффекты приёма, VIP-трансфер и wedding planner' },
    ],
  },
  elite: {
    summary: {
      en: 'Refined Elite luxury — curated couture, elevated hospitality, and seamless one-team Wedding Sky production.',
      el: 'Εκλεπτυσμένη πολυτέλεια Elite — curated couture, elevated φιλοξενία και απρόσκοπτη παραγωγή από μία ομάδα Wedding Sky.',
      ru: 'Изысканная роскошь Elite — curated couture, elevated-гостеприимство и безупречная постановка одной команды Wedding Sky.',
    },
    idealFor: {
      en: 'Couples seeking something truly special with elevated couture and hospitality.',
      el: 'Ζευγάρια που αναζητούν κάτι πραγματικά ξεχωριστό με elevated couture και φιλοξενία.',
      ru: 'Пары, ищущие нечто особенное с elevated couture и гостеприимством.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 6–12 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 6–12 μήνες',
      ru: 'Рекомендуемый срок подготовки: 6–12 месяцев',
    },
    inclusions: [
      { en: 'Bridal couture from up to 150 designs or bespoke', el: 'Νυφικό από έως 150 σχέδια ή bespoke', ru: 'Платье из до 150 дизайнов или bespoke' },
      { en: '500 premium treats and 3-tier signature cake', el: '500 premium κεράσματα και τούρτα 3 επιπέδων', ru: '500 premium-угощений и 3-ярусный signature-торт' },
      { en: 'Comprehensive décor with LOVE letters and fairy lights', el: 'Ολοκληρωμένη διακόσμηση με LOVE και fairy lights', ru: 'Полный декор с LOVE и fairy lights' },
      { en: 'VIP transfer and personal wedding planner', el: 'VIP μεταφορά και προσωπικός wedding planner', ru: 'VIP-трансфер и персональный wedding planner' },
    ],
  },
  exclusive: {
    summary: {
      en: 'Exclusive signature care — expanded couture, jewellery programme, richer décor, and hospitality effects.',
      el: 'Υπογραφή Exclusive — εμπλουτισμένη couture, πρόγραμμα κοσμημάτων, richer διακόσμηση και εφέ φιλοξενίας.',
      ru: 'Фирменная забота Exclusive — расширенный couture, ювелирная программа, richer-декор и эффекты гостеприимства.',
    },
    idealFor: {
      en: 'Couples wanting a distinctive day with jewellery and statement styling.',
      el: 'Ζευγάρια που θέλουν μια ξεχωριστή ημέρα με κοσμήματα και statement styling.',
      ru: 'Пары, желающие особенный день с украшениями и statement-стилем.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 8–12 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 8–12 μήνες',
      ru: 'Рекомендуемый срок подготовки: 8–12 месяцев',
    },
    inclusions: [
      { en: 'Bridal selection from 1,100 designs or bespoke', el: 'Νυφικό από 1.100 σχέδια ή bespoke', ru: 'Платье из 1 100 дизайнов или bespoke' },
      { en: 'Wedding rings from 600 designs and jewellery discounts', el: 'Βέρες από 600 σχέδια και εκπτώσεις κοσμημάτων', ru: 'Кольца из 600 дизайнов и скидки на украшения' },
      { en: '600 treats, 3-tier cake, and full décor programme', el: '600 κεράσματα, τούρτα 3 επιπέδων και πλήρες πρόγραμμα διακόσμησης', ru: '600 угощений, 3-ярусный торт и полная программа декора' },
      { en: 'DJ/live entertainment, effects, and VIP transfer', el: 'DJ/live ψυχαγωγία, εφέ και VIP μεταφορά', ru: 'DJ/live, эффекты и VIP-трансфер' },
    ],
  },
  imperial: {
    summary: {
      en: 'Imperial aristocratic elegance — same-day edit film, drone 4K, pyrotechnics, and richer floral architecture.',
      el: 'Αριστοκρατική κομψότητα Imperial — same-day edit film, drone 4K, πυροτεχνήματα και richer ανθοστολισμός.',
      ru: 'Аристократическая элегантность Imperial — same-day edit, дрон 4K, пиротехника и richer флористика.',
    },
    idealFor: {
      en: 'Couples drawn to timeless grandeur with elevated media and effects.',
      el: 'Ζευγάρια που εμπνέονται από διαχρονικό μεγαλείο με elevated media και εφέ.',
      ru: 'Пары, вдохновлённые вневременным величием с elevated media и эффектами.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 9–14 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 9–14 μήνες',
      ru: 'Рекомендуемый срок подготовки: 9–14 месяцев',
    },
    inclusions: [
      { en: 'Bridal couture from 1,200+ designs and flower-girl outfits', el: 'Νυφικό από 1.200+ σχέδια και φορέματα παρανυφάκιων', ru: 'Платье из 1 200+ дизайнов и наряды для подружек' },
      { en: 'Same Day Edit, drone 4K, and luxury invitation suite', el: 'Same Day Edit, drone 4K και luxury προσκλήσεις', ru: 'Same Day Edit, дрон 4K и luxury-приглашения' },
      { en: '650 treats, signature cake, and 13-variety florals', el: '650 κεράσματα, signature τούρτα και άνθη από 13 ποικιλίες', ru: '650 угощений, signature-торт и цветы из 13 сортов' },
      { en: 'Pyrotechnics, guest book, and full planning', el: 'Πυροτεχνήματα, τηλέφωνο ευχών και πλήρης οργάνωση', ru: 'Пиротехника, книга пожеланий и полное планирование' },
    ],
  },
  crown: {
    summary: {
      en: 'Crown exclusivity — designer couture, 5-tier cake, flower wall, fireworks, and a hotel or adrenaline experience.',
      el: 'Αποκλειστικότητα Crown — designer couture, τούρτα 5 επιπέδων, flower wall, πυροτεχνήματα και εμπειρία ξενοδοχείου ή adrenaline.',
      ru: 'Эксклюзивность Crown — designer couture, 5-ярусный торт, flower wall, фейерверк и отель или adrenaline.',
    },
    idealFor: {
      en: 'Couples seeking prestige-level exclusivity with statement experiences.',
      el: 'Ζευγάρια που αναζητούν αποκλειστικότητα prestige με statement εμπειρίες.',
      ru: 'Пары, ищущие prestige-эксклюзивность со statement-опытами.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 10–16 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 10–16 μήνες',
      ru: 'Рекомендуемый срок подготовки: 10–16 месяцев',
    },
    inclusions: [
      { en: 'Designer bridal gown from 1,300 designs or bespoke', el: 'Designer νυφικό από 1.300 σχέδια ή bespoke', ru: 'Designer-платье из 1 300 дизайнов или bespoke' },
      { en: '800 luxury treats and 5-tier bespoke cake', el: '800 luxury κεράσματα και τούρτα 5 επιπέδων', ru: '800 luxury-угощений и 5-ярусный торт' },
      { en: '3.4m flower wall and fireworks programme', el: 'Flower wall 3.4μ και πρόγραμμα πυροτεχνημάτων', ru: 'Flower wall 3,4 м и программа фейерверков' },
      { en: '5-star hotel with spa or adrenaline experience', el: 'Ξενοδοχείο 5* με spa ή adrenaline εμπειρία', ru: '5★ отель со spa или adrenaline-опыт' },
    ],
  },
  royal: {
    summary: {
      en: 'Royal magnificence — imperial-scale décor, yacht or adrenaline hospitality, spa retreat, and fully orchestrated production.',
      el: 'Μεγαλοπρέπεια Royal — imperial-scale διακόσμηση, φιλοξενία yacht ή adrenaline, spa retreat και πλήρως ενορχηστρωμένη παραγωγή.',
      ru: 'Великолепие Royal — imperial-масштаб декора, yacht или adrenaline, spa retreat и полностью оркестрованная постановка.',
    },
    idealFor: {
      en: 'Couples wanting the ultimate Wedding Sky expression of luxury.',
      el: 'Ζευγάρια που θέλουν την απόλυτη έκφραση πολυτέλειας της Wedding Sky.',
      ru: 'Пары, желающие абсолютное выражение роскоши Wedding Sky.',
    },
    planningWindow: {
      en: 'Suggested preparation lead time: 12–18 months',
      el: 'Προτεινόμενος χρόνος προετοιμασίας: 12–18 μήνες',
      ru: 'Рекомендуемый срок подготовки: 12–18 месяцев',
    },
    inclusions: [
      { en: 'Luxury designer bridal collections and tailored groom wardrobe', el: 'Luxury designer νυφικά και εφαρμοστή γκαρνταρόμπα γαμπρού', ru: 'Luxury designer-платья и сшитый гардероб жениха' },
      { en: 'Full 4K media with Same Day Edit and aerial drone', el: 'Πλήρες 4K media με Same Day Edit και aerial drone', ru: 'Полное 4K media с Same Day Edit и aerial-дроном' },
      { en: 'Imperial décor, fireworks, and yacht or adrenaline hospitality', el: 'Imperial διακόσμηση, πυροτεχνήματα και φιλοξενία yacht ή adrenaline', ru: 'Imperial-декор, фейерверк и yacht или adrenaline' },
      { en: 'VIP limousine options and dedicated wedding planner', el: 'Επιλογές VIP λιμουζίνας και αφοσιωμένος wedding planner', ru: 'Варианты VIP-лимузина и выделенный wedding planner' },
    ],
  },
  customised: {
    summary: {
      en: 'A fully bespoke Wedding Sky programme — composed with you around location, décor, florals, catering, photography, music, and more.',
      el: 'Ένα πλήρως bespoke πρόγραμμα Wedding Sky — συντεθειμένο μαζί σας γύρω από τοποθεσία, διακόσμηση, άνθη, catering, φωτογραφία, μουσική και άλλα.',
      ru: 'Полностью bespoke программа Wedding Sky — вместе с вами вокруг локации, декора, цветов, catering, фото, музыки и другого.',
    },
    idealFor: {
      en: 'Couples who want every element shaped to their exact brief.',
      el: 'Ζευγάρια που θέλουν κάθε στοιχείο να διαμορφωθεί στο ακριβές brief τους.',
      ru: 'Пары, которые хотят сформировать каждый элемент под свой brief.',
    },
    planningWindow: {
      en: 'Timeline composed after consultation',
      el: 'Χρονοδιάγραμμα μετά από συνάντηση',
      ru: 'Таймлайн после консультации',
    },
    inclusions: [
      { en: 'Private consultation to define priorities and investment', el: 'Ιδιωτική συνάντηση για προτεραιότητες και επένδυση', ru: 'Частная консультация по приоритетам и инвестиции' },
      { en: 'Bespoke composition across décor, media, hospitality, and entertainment', el: 'Bespoke σύνθεση σε διακόσμηση, media, φιλοξενία και ψυχαγωγία', ru: 'Bespoke-композиция декора, media, гостеприимства и развлечений' },
      { en: 'Clear written proposal with transparent inclusions', el: 'Καθαρή γραπτή πρόταση με διαφανείς παροχές', ru: 'Ясное письменное предложение с прозрачными inclusions' },
      { en: 'Dedicated Wedding Sky coordination through the wedding day', el: 'Αφοσιωμένος συντονισμός Wedding Sky έως την ημέρα του γάμου', ru: 'Выделенная координация Wedding Sky до дня свадьбы' },
    ],
  },


  'photoway-1': {
    summary: {
      en: 'Essential PhotoWay coverage — digital albums, reception film, Hollywood trailer, and 4-day delivery.',
      el: 'Essential κάλυψη PhotoWay — ψηφιακά άλμπουμ, φιλμ δεξίωσης, Hollywood trailer και παράδοση σε 4 ημέρες.',
      ru: 'Essential-съёмка PhotoWay — digital-альбомы, фильм приёма, Hollywood trailer и сдача за 4 дня.',
    },
    idealFor: {
      en: 'Couples wanting a polished photography foundation with cinematic highlights.',
      el: 'Ζευγάρια που θέλουν κομψή βάση φωτογραφίας με cinematic highlights.',
      ru: 'Пары, которым нужна отточенная основа фотографии с cinematic highlights.',
    },
    planningWindow: {
      en: 'Book ideally 3–6 months ahead',
      el: 'Κλείστε ιδανικά 3–6 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 3–6 месяцев',
    },
    inclusions: [
      { en: '200-photo luxury album plus 2 mini albums', el: 'Luxury άλμπουμ 200 φωτογραφιών και 2 mini άλμπουμ', ru: 'Luxury-альбом на 200 фото и 2 mini-альбома' },
      { en: 'HD reception film, interviews, and Hollywood trailer', el: 'HD φιλμ δεξίωσης, συνεντεύξεις και Hollywood trailer', ru: 'HD-фильм приёма, интервью и Hollywood trailer' },
      { en: 'Unlimited HD photos, prints, and canvas', el: 'Απεριόριστες φωτογραφίες HD, εκτυπώσεις και καμβάς', ru: 'Безлимитные HD-фото, отпечатки и холст' },
      { en: 'Next-day location shoot and crystal USB in 4 days', el: 'Φωτογράφιση άλλης ημέρας και κρυστάλλινο USB σε 4 ημέρες', ru: 'Съёмка в другой день и crystal USB за 4 дня' },
    ],
  },
  'photoway-2': {
    summary: {
      en: 'Elevated PhotoWay storytelling with drone panoramas, GoPro, and a dedicated photo–video crew.',
      el: 'Αναβαθμισμένο storytelling PhotoWay με drone panoramas, GoPro και αφοσιωμένο πλήρωμα φωτο–video.',
      ru: 'Расширенный storytelling PhotoWay с drone panoramas, GoPro и выделенной фото–видео командой.',
    },
    idealFor: {
      en: 'Celebrations that want aerial film and fuller print deliverables.',
      el: 'Γιορτές που θέλουν aerial film και fuller παραδοτέα εκτυπώσεων.',
      ru: 'Торжества, которым нужны aerial film и fuller-отпечатки.',
    },
    planningWindow: {
      en: 'Book ideally 4–7 months ahead',
      el: 'Κλείστε ιδανικά 4–7 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 4–7 месяцев',
    },
    inclusions: [
      { en: '200-photo album programme with premium cover options', el: 'Πρόγραμμα άλμπουμ 200 φωτογραφιών με premium εξώφυλλα', ru: 'Программа альбома на 200 фото с premium-обложками' },
      { en: 'Drone panoramas, Instagram video, and 1 GoPro', el: 'Drone panoramas, Instagram video και 1 GoPro', ru: 'Drone panoramas, Instagram-видео и 1 GoPro' },
      { en: '1 photographer and 2 videographers', el: '1 φωτογράφος και 2 βιντεογράφοι', ru: '1 фотограф и 2 видеографа' },
      { en: 'Expanded prints and next-day location shoot', el: 'Εμπλουτισμένες εκτυπώσεις και φωτογράφιση άλλης ημέρας', ru: 'Расширенные отпечатки и съёмка в другой день' },
    ],
  },
  'photoway-3': {
    summary: {
      en: 'Signature PhotoWay depth — 250-photo albums, same-day video, dual GoPros, and richer canvases.',
      el: 'Υπογραφή βάθους PhotoWay — άλμπουμ 250 φωτογραφιών, same-day video, δύο GoPro και richer καμβάδες.',
      ru: 'Фирменная глубина PhotoWay — альбомы на 250 фото, same-day video, два GoPro и richer-холсты.',
    },
    idealFor: {
      en: 'Couples seeking the balanced cinematic signature with same-day film energy.',
      el: 'Ζευγάρια που θέλουν την ισορροπημένη cinematic υπογραφή με same-day film energy.',
      ru: 'Пары, которым нужна сбалансированная cinematic-подпись с энергией same-day film.',
    },
    planningWindow: {
      en: 'Book ideally 5–8 months ahead',
      el: 'Κλείστε ιδανικά 5–8 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 5–8 месяцев',
    },
    inclusions: [
      { en: '250-photo album plus larger matching mini albums', el: 'Άλμπουμ 250 φωτογραφιών και μεγαλύτερα mini άλμπουμ', ru: 'Альбом на 250 фото и увеличенные mini-альбомы' },
      { en: 'Same-day video, drone, and Hollywood + Instagram trailers', el: 'Same-day video, drone και Hollywood + Instagram trailers', ru: 'Same-day video, дрон и Hollywood + Instagram trailers' },
      { en: '2 GoPro cameras with 1 photographer and 2 videographers', el: '2 κάμερες GoPro με 1 φωτογράφο και 2 βιντεογράφους', ru: '2 камеры GoPro, 1 фотограф и 2 видеографа' },
      { en: 'Richer print suite including 2 canvases', el: 'Richer σειρά εκτυπώσεων με 2 καμβάδες', ru: 'Richer-набор отпечатков включая 2 холста' },
    ],
  },
  'photoway-4': {
    summary: {
      en: 'Full PhotoWay production — 300-photo album, dual photographers, three videographers, and expanded cinematography.',
      el: 'Πλήρης παραγωγή PhotoWay — άλμπουμ 300 φωτογραφιών, δύο φωτογράφοι, τρεις βιντεογράφοι και εμπλουτισμένο cinematography.',
      ru: 'Полная постановка PhotoWay — альбом на 300 фото, два фотографа, три видеографа и расширенная cinematography.',
    },
    idealFor: {
      en: 'Large celebrations wanting maximum storytelling scale and crew.',
      el: 'Μεγάλες γιορτές που θέλουν μέγιστη κλίμακα storytelling και πλήρωμα.',
      ru: 'Крупные торжества с максимальным масштабом storytelling и командой.',
    },
    planningWindow: {
      en: 'Book ideally 6–10 months ahead',
      el: 'Κλείστε ιδανικά 6–10 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 6–10 месяцев',
    },
    inclusions: [
      { en: '300-photo luxury album with large companion albums', el: 'Luxury άλμπουμ 300 φωτογραφιών με μεγάλα companion άλμπουμ', ru: 'Luxury-альбом на 300 фото с крупными companion-альбомами' },
      { en: 'Same-day video, cinematography, drone, and dual GoPros', el: 'Same-day video, cinematography, drone και δύο GoPro', ru: 'Same-day video, cinematography, дрон и два GoPro' },
      { en: '2 photographers and 3 videographers', el: '2 φωτογράφοι και 3 βιντεογράφοι', ru: '2 фотографа и 3 видеографа' },
      { en: 'Expanded print suite with 3 canvases and 4-day delivery', el: 'Εμπλουτισμένες εκτυπώσεις με 3 καμβάδες και παράδοση σε 4 ημέρες', ru: 'Расширенные отпечатки с 3 холстами и сдачей за 4 дня' },
    ],
  },

  'decoway-1': {
    summary: {
      en: 'A polished DecoWay foundation — church, cars, illuminated LOVE letters, and reception tablescapes for up to 15 tables.',
      el: 'Κομψή βάση DecoWay — εκκλησία, αυτοκίνητα, φωτιζόμενα LOVE και tablescapes δεξίωσης έως 15 τραπέζια.',
      ru: 'Отточенная основа DecoWay — храм, авто, светящиеся LOVE и tablescapes зала до 15 столов.',
    },
    idealFor: {
      en: 'Couples wanting complete floral coverage with a refined reception atmosphere.',
      el: 'Ζευγάρια που θέλουν πλήρη ανθοστολισμό με refined ατμόσφαιρα δεξίωσης.',
      ru: 'Пары, которым нужно полное флористическое покрытие с refined атмосферой приёма.',
    },
    planningWindow: {
      en: 'Book ideally 3–6 months ahead',
      el: 'Κλείστε ιδανικά 3–6 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 3–6 месяцев',
    },
    inclusions: [
      { en: 'Church, car, and aisle floral architecture', el: 'Ανθοστολισμός εκκλησίας, αυτοκινήτων και διαδρόμου', ru: 'Флористика храма, авто и прохода' },
      { en: 'Illuminated LOVE letters and candy table styling', el: 'Φωτιζόμενα LOVE και styling candy table', ru: 'Светящиеся LOVE и styling candy table' },
      { en: 'Newlywed table, wish table, and up to 15 guest tables', el: 'Τραπέζι νεονύμφων, τραπέζι ευχών και έως 15 τραπέζια καλεσμένων', ru: 'Стол молодожёнов, стол пожеланий и до 15 гостевых столов' },
      { en: 'Only real flowers unless paper flowers are requested', el: 'ΜΟΝΟ αληθινά λουλούδια, εκτός αν ζητηθούν χάρτινα', ru: 'ТОЛЬКО живые цветы, если не запрошены бумажные' },
    ],
  },
  'decoway-exclusive': {
    summary: {
      en: 'Signature Deco Exclusive styling with personal wedding planner, flower wall, and curated hospitality tables.',
      el: 'Υπογραφή Deco Exclusive με προσωπικό wedding planner, flower wall και curated τραπέζια φιλοξενίας.',
      ru: 'Фирменный Deco Exclusive с персональным wedding planner, flower wall и curated-столами гостеприимства.',
    },
    idealFor: {
      en: 'Couples seeking a distinctive décor path with day-of coordination included.',
      el: 'Ζευγάρια που θέλουν ξεχωριστή διαδρομή διακόσμησης με συντονισμό ημέρας.',
      ru: 'Пары, ищущие особый путь декора с координацией дня.',
    },
    planningWindow: {
      en: 'Book ideally 4–7 months ahead',
      el: 'Κλείστε ιδανικά 4–7 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 4–7 месяцев',
    },
    inclusions: [
      { en: 'Decoration of 2 houses, church, and two wedding cars', el: 'Διακόσμηση 2 σπιτιών, εκκλησίας και δύο γαμήλιων αυτοκινήτων', ru: 'Декор 2 домов, храма и двух свадебных авто' },
      { en: 'Dual flower arches, handmade flower wall, and royal fairy lights', el: 'Δύο ανθοστολισμένες αψίδες, χειροποίητος flower wall και royal fairy lights', ru: 'Две цветочные арки, handmade flower wall и royal fairy lights' },
      { en: 'Candy table, pool décor, and up to 18 guest tables', el: 'Candy table, διακόσμηση πισίνας και έως 18 τραπέζια καλεσμένων', ru: 'Candy table, декор бассейна и до 18 гостевых столов' },
      { en: 'Personal wedding planner for organisation and day coordination', el: 'Προσωπικός wedding planner για οργάνωση και συντονισμό ημέρας', ru: 'Персональный wedding planner для организации и координации дня' },
    ],
  },
  'decoway-2': {
    summary: {
      en: 'Elevated DecoWay florals with house styling, bridal flower wall, and décor for up to 26 tables.',
      el: 'Αναβαθμισμένος ανθοστολισμός DecoWay με στολισμό σπιτιών, bridal flower wall και διακόσμηση έως 26 τραπεζιών.',
      ru: 'Расширенная флористика DecoWay с декором домов, bridal flower wall и оформлением до 26 столов.',
    },
    idealFor: {
      en: 'Celebrations wanting richer ceremony architecture and planner support.',
      el: 'Γιορτές που θέλουν richer αρχιτεκτονική τελετής και υποστήριξη planner.',
      ru: 'Торжества с richer архитектурой церемонии и поддержкой planner.',
    },
    planningWindow: {
      en: 'Book ideally 4–8 months ahead',
      el: 'Κλείστε ιδανικά 4–8 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 4–8 месяцев',
    },
    inclusions: [
      { en: 'Two-home décor, church florals, and dual-car styling', el: 'Διακόσμηση δύο σπιτιών, ανθοστολισμός εκκλησίας και δύο αυτοκινήτων', ru: 'Декор двух домов, флористика храма и двух авто' },
      { en: 'Three grand arches, bridal flower wall, and illuminated LOVE', el: 'Τρεις μεγάλες αψίδες, bridal flower wall και φωτιζόμενα LOVE', ru: 'Три крупные арки, bridal flower wall и светящиеся LOVE' },
      { en: 'Candy table with chocolate fountain and up to 26 tables', el: 'Candy table με συντριβάνι σοκολάτας και έως 26 τραπέζια', ru: 'Candy table с шоколадным фонтаном и до 26 столов' },
      { en: 'Wedding planner included', el: 'Περιλαμβάνεται wedding planner', ru: 'Wedding planner включён' },
    ],
  },
  'decoway-3': {
    summary: {
      en: 'Statement DecoWay florals — 3.4m flower wall, multi-car styling, dual chocolate fountains, and up to 35 tables.',
      el: 'Statement ανθοστολισμός DecoWay — flower wall 3.4μ, στόλισμα πολλών αυτοκινήτων, δύο συντριβάνια σοκολάτας και έως 35 τραπέζια.',
      ru: 'Statement-флористика DecoWay — flower wall 3,4 м, декор многих авто, два шоколадных фонтана и до 35 столов.',
    },
    idealFor: {
      en: 'Couples seeking the balanced DecoWay signature with immersive reception presence.',
      el: 'Ζευγάρια που θέλουν την ισορροπημένη υπογραφή DecoWay με immersive παρουσία στη δεξίωση.',
      ru: 'Пары, которым нужна сбалансированная подпись DecoWay с immersive присутствием на приёме.',
    },
    planningWindow: {
      en: 'Book ideally 5–9 months ahead',
      el: 'Κλείστε ιδανικά 5–9 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 5–9 месяцев',
    },
    inclusions: [
      { en: 'Large flower wall and illuminated LOVE letters', el: 'Μεγάλος flower wall και φωτιζόμενα LOVE', ru: 'Крупный flower wall и светящиеся LOVE' },
      { en: 'Fleet styling for bride, groom, and 10 guest cars', el: 'Στόλισμα στόλου για νύφη, γαμπρό και 10 αυτοκίνητα καλεσμένων', ru: 'Стилизация флота для невесты, жениха и 10 гостевых авто' },
      { en: 'Candy table with 14 cylinders and 2 chocolate fountains', el: 'Candy table με 14 κυλίνδρους και 2 συντριβάνια σοκολάτας', ru: 'Candy table с 14 цилиндрами и 2 шоколадными фонтанами' },
      { en: 'Planner and coordinator included', el: 'Περιλαμβάνεται planner και coordinator', ru: 'Planner и coordinator включены' },
    ],
  },
  'decoway-4': {
    summary: {
      en: 'Crystal DecoWay hospitality — floor chandeliers, guest-list mirror, cake styling, and décor for 40 tables.',
      el: 'Κρυστάλλινη φιλοξενία DecoWay — πολυέλεοι εδάφους, καθρέφτης λίστας, styling τούρτας και διακόσμηση 40 τραπεζιών.',
      ru: 'Кристальное гостеприимство DecoWay — напольные люстры, зеркало списка, styling торта и декор 40 столов.',
    },
    idealFor: {
      en: 'Larger celebrations wanting crystal moments and fuller table presence.',
      el: 'Μεγαλύτερες γιορτές που θέλουν κρυστάλλινες στιγμές και fuller παρουσία τραπεζιών.',
      ru: 'Более крупные торжества с кристальными акцентами и fuller присутствием столов.',
    },
    planningWindow: {
      en: 'Book ideally 6–10 months ahead',
      el: 'Κλείστε ιδανικά 6–10 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 6–10 месяцев',
    },
    inclusions: [
      { en: 'Carpet, candle cylinders, and crystal ceremony arrangements', el: 'Χαλί, κύλινδροι κεριών και κρυστάλλινα arrangements τελετής', ru: 'Ковёр, цилиндры со свечами и кристальные arrangements церемонии' },
      { en: 'Crystal floor chandeliers at the newlywed table', el: 'Κρυστάλλινοι πολυέλεοι εδάφους στο τραπέζι νεονύμφων', ru: 'Напольные кристальные люстры у стола молодожёнов' },
      { en: '40 tables, mirrors, cake base, and guest-list mirror', el: '40 τραπέζια, καθρέφτες, βάση τούρτας και καθρέφτης λίστας καλεσμένων', ru: '40 столов, зеркала, база торта и зеркало списка гостей' },
      { en: 'Wedding planner and day coordinator', el: 'Wedding planner και συντονιστής ημέρας', ru: 'Wedding planner и координатор дня' },
    ],
  },
  'decoway-5': {
    summary: {
      en: 'Grand DecoWay atmosphere — flower ceiling, champagne reveal, crystal chandeliers, and immersive aisle creation.',
      el: 'Μεγάλη ατμόσφαιρα DecoWay — οροφή λουλουδιών, champagne reveal, κρυστάλλινοι πολυέλεοι και immersive δημιουργία διαδρόμου.',
      ru: 'Большая атмосфера DecoWay — цветочный потолок, champagne reveal, кристальные люстры и immersive создание прохода.',
    },
    idealFor: {
      en: 'Couples wanting a highly immersive floral production with statement ceiling moments.',
      el: 'Ζευγάρια που θέλουν ιδιαίτερα immersive παραγωγή ανθοστολισμού με statement στιγμές οροφής.',
      ru: 'Пары, которым нужна особенно immersive флористическая постановка со statement-моментами на потолке.',
    },
    planningWindow: {
      en: 'Book ideally 7–12 months ahead',
      el: 'Κλείστε ιδανικά 7–12 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 7–12 месяцев',
    },
    inclusions: [
      { en: 'Outdoor aisle creation and five grand arches', el: 'Δημιουργία εξωτερικού διαδρόμου και πέντε μεγάλες αψίδες', ru: 'Создание внешнего прохода и пять крупных арок' },
      { en: 'Flower ceiling 4×4m and crystal floor chandeliers', el: 'Οροφή λουλουδιών 4×4μ και κρυστάλλινοι πολυέλεοι εδάφους', ru: 'Цветочный потолок 4×4 м и напольные кристальные люстры' },
      { en: 'Champagne opening outside the church', el: 'Άνοιγμα σαμπάνιας έξω από την εκκλησία', ru: 'Открытие шампанского у храма' },
      { en: 'Full planning and coordination team', el: 'Πλήρης ομάδα οργάνωσης και συντονισμού', ru: 'Полная команда планирования и координации' },
    ],
  },
  'decoway-6': {
    summary: {
      en: 'The fullest DecoWay production — ceiling chandeliers, fireworks, fairy-light tunnels, and décor for 45 tables.',
      el: 'Η πληρέστερη παραγωγή DecoWay — πολυέλεοι οροφής, πυροτεχνήματα, τούνελ fairy lights και διακόσμηση 45 τραπεζιών.',
      ru: 'Самая полная постановка DecoWay — потолочные люстры, пиротехника, тоннели fairy lights и декор 45 столов.',
    },
    idealFor: {
      en: 'Large celebrations wanting maximum atmospheric scale and fully orchestrated décor.',
      el: 'Μεγάλες γιορτές που θέλουν μέγιστη ατμοσφαιρική κλίμακα και πλήρως ενορχηστρωμένη διακόσμηση.',
      ru: 'Крупные торжества с максимальным атмосферным масштабом и полностью оркестрованным декором.',
    },
    planningWindow: {
      en: 'Book ideally 9–14 months ahead',
      el: 'Κλείστε ιδανικά 9–14 μήνες νωρίτερα',
      ru: 'Идеально бронировать за 9–14 месяцев',
    },
    inclusions: [
      { en: 'Ceiling chandeliers, fairy lights, and ground fireworks', el: 'Πολυέλεοι οροφής, fairy lights και πυροτεχνήματα εδάφους', ru: 'Потолочные люстры, fairy lights и наземные фейерверки' },
      { en: 'Popcorn hospitality and dual chocolate fountains', el: 'Φιλοξενία popcorn και δύο συντριβάνια σοκολάτας', ru: 'Popcorn-гостеприимство и два шоколадных фонтана' },
      { en: 'Two fairy-light tunnels and décor for 45 tables', el: 'Δύο τούνελ fairy lights και διακόσμηση 45 τραπεζιών', ru: 'Два тоннеля fairy lights и декор 45 столов' },
      { en: 'Dedicated wedding planner and day coordinator', el: 'Αφοσιωμένος wedding planner και συντονιστής ημέρας', ru: 'Выделенный wedding planner и координатор дня' },
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
