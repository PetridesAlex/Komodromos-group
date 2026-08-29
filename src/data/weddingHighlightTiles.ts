/** Highlight grid for Wedding Sky — full services catalogue. */

import type { LocalizedText } from '../lib/weddingLocale'

export type WeddingHighlightTileDetail = {
  /** Modal headline — defaults to tile title when omitted */
  headline?: LocalizedText
  paragraphs: ReadonlyArray<LocalizedText>
}

export type WeddingHighlightTile = {
  id: string
  /** Optional short label above the service title. */
  kicker?: LocalizedText
  title: LocalizedText
  image: string
  /** Prefer contain for product mockups so the full subject stays visible. */
  imageFit?: 'cover' | 'contain'
  /** Premium detail overlay — opens on tile click */
  detail?: WeddingHighlightTileDetail
  hashHref?: string
  contact?: boolean
  /** Group / brand service slug — resolves via getServicePageHref (e.g. janchapelle). */
  serviceSlug?: string
  /** Absolute group SPA path (e.g. /services/limousines-experiences). */
  pageHref?: string
}

const TILE_IMG = '/images/services/wedding-highlights'
const SERVICE_IMG = `${TILE_IMG}/wedding-services`

/** Product mockups — use contain so the full artwork stays visible. */
const CONTAIN_COVER_IDS = new Set(['personalized-wedding-website'])

/**
 * Temporary cover paths when `{tile-id}.webp` is not in wedding-services/ yet.
 * mobile-platter-bar shares party-platters until a dedicated cover is supplied.
 */
const COVER_OVERRIDES: Partial<Record<string, string>> = {
  'mobile-platter-bar': `${SERVICE_IMG}/party-platters.webp`,
}

function coverForTile(id: string): { src: string; fit?: 'cover' | 'contain' } {
  const src = COVER_OVERRIDES[id] ?? `${SERVICE_IMG}/${id}.webp`
  return {
    src,
    fit: CONTAIN_COVER_IDS.has(id) ? 'contain' : undefined,
  }
}

type TileSeed = Omit<WeddingHighlightTile, 'image' | 'imageFit'>

/** Full Wedding Sky services — EN / EL from catalogue; RU aligned. */
const TILE_SEEDS: TileSeed[] = [
  {
    id: 'luxury-bridal-gowns',
    title: {
      en: 'Luxury Bridal Gowns',
      el: 'Πολυτελή Νυφικά',
      ru: 'Роскошные свадебные платья',
    },
    serviceSlug: 'janchapelle',
  },
  {
    id: 'bridal-makeup',
    title: {
      en: 'Bridal Make-up',
      el: 'Νυφικό Μακιγιάζ',
      ru: 'Свадебный макияж',
    },
    detail: {
      headline: {
        en: 'Bridal Make-up',
        el: 'Νυφικό Μακιγιάζ | Bridal Make-up',
        ru: 'Свадебный макияж | Bridal Make-up',
      },
      paragraphs: [
        {
          en: 'On your wedding day, we don’t want you to look like anyone else. We want you to be the most radiant version of yourself.',
          el: 'Την ημέρα του γάμου σας, δεν θέλουμε να μοιάζετε με κάποια άλλη. Θέλουμε να είστε η πιο λαμπερή εκδοχή του εαυτού σας.',
          ru: 'В день свадьбы мы не хотим, чтобы вы были похожи на кого-то другого. Мы хотим, чтобы вы были самой сияющей версией себя.',
        },
        {
          en: 'Bridal make-up is shaped around your features, your personal style, and the aesthetic of your wedding — enhancing your natural beauty with elegance, finesse, and timeless glow.',
          el: 'Το bridal make-up δημιουργείται γύρω από τα δικά σας χαρακτηριστικά, το προσωπικό σας στυλ και την αισθητική του γάμου σας, αναδεικνύοντας τη φυσική σας ομορφιά με κομψότητα, φινέτσα και διαχρονική λάμψη.',
          ru: 'Свадебный макияж создаётся вокруг ваших черт, личного стиля и эстетики торжества — подчёркивая естественную красоту с элегантностью, утончённостью и вечным сиянием.',
        },
        {
          en: 'From the first moment until the last glance of the evening, every detail is designed so you look exquisite up close and on camera.',
          el: 'Από την πρώτη στιγμή μέχρι το τελευταίο βλέμμα της βραδιάς, κάθε λεπτομέρεια σχεδιάζεται ώστε να δείχνετε υπέροχη τόσο από κοντά όσο και στον φωτογραφικό φακό.',
          ru: 'От первого момента до последнего взгляда вечера каждая деталь продумана так, чтобы вы выглядели безупречно и вблизи, и на фото.',
        },
        {
          en: 'Because the ideal bridal make-up shouldn’t change you. It should make you feel exactly as you dreamed: irresistible, radiant, and uniquely yourself.',
          el: 'Γιατί το ιδανικό νυφικό μακιγιάζ δεν πρέπει να σας αλλάζει. Πρέπει να σας κάνει να νιώθετε ακριβώς όπως ονειρευόσασταν: ακαταμάχητη, λαμπερή και μοναδική.',
          ru: 'Потому что идеальный свадебный макияж не должен менять вас. Он должен дарить именно то чувство, о котором вы мечтали: неотразимость, сияние и уникальность.',
        },
      ],
    },
  },
  {
    id: 'bridal-hairstyling',
    title: {
      en: 'Bridal Hairstyling',
      el: 'Νυφικό Χτένισμα',
      ru: 'Свадебная причёска',
    },
    detail: {
      headline: {
        en: 'Bridal Hairstyling',
        el: 'Νυφικό Χτένισμα | Bridal Hairstyling',
        ru: 'Свадебная причёска | Bridal Hairstyling',
      },
      paragraphs: [
        {
          en: 'Bridal hairstyling is the finishing touch that completes your entire bridal look — framing your face and giving character to every appearance.',
          el: 'Το νυφικό χτένισμα είναι η τελική πινελιά που ολοκληρώνει ολόκληρη τη bridal εικόνα σας — εκείνη που πλαισιώνει το πρόσωπό σας και χαρίζει χαρακτήρα σε κάθε σας εμφάνιση.',
          ru: 'Свадебная причёска — финальный штрих, завершающий ваш bridal-образ: она обрамляет лицо и придаёт характер каждому вашему появлению.',
        },
        {
          en: 'From timeless elegant updos and airy waves to modern, sophisticated creations, every bridal hairstyle is designed to highlight your features, your gown, and your personal style — with perfect balance between naturalness and luxury.',
          el: 'Από διαχρονικά elegant updos και αέρινους κυματισμούς μέχρι σύγχρονες, sophisticated δημιουργίες, κάθε bridal hairstyle σχεδιάζεται ώστε να αναδεικνύει τα χαρακτηριστικά, το νυφικό και το προσωπικό σας στυλ, με άψογη ισορροπία ανάμεσα στη φυσικότητα και την πολυτέλεια.',
          ru: 'От классических элегантных причёсок и лёгких волн до современных sophisticated-образов — каждая свадебная причёска создаётся, чтобы подчеркнуть ваши черты, платье и личный стиль, с безупречным балансом естественности и роскоши.',
        },
        {
          en: 'With attention to every detail, we create a result that stays elegant, flawless, and photogenic from the first photograph to the last moment of the evening.',
          el: 'Με προσοχή σε κάθε λεπτομέρεια, δημιουργούμε ένα αποτέλεσμα που παραμένει κομψό, αψεγάδιαστο και φωτογενές από την πρώτη φωτογραφία μέχρι την τελευταία στιγμή της βραδιάς.',
          ru: 'С вниманием к каждой детали мы создаём образ, который остаётся элегантным, безупречным и фотогеничным — от первого кадра до последнего момента вечера.',
        },
        {
          en: 'Because on the day when all eyes are on you, every detail matters.',
          el: 'Γιατί την ημέρα που όλα τα βλέμματα θα στραφούν πάνω σας, κάθε λεπτομέρεια έχει σημασία.',
          ru: 'Потому что в день, когда все взгляды прикованы к вам, каждая деталь имеет значение.',
        },
        {
          en: 'Your hair. Your style. Your unforgettable bridal moment.',
          el: 'Your hair. Your style. Your unforgettable bridal moment.',
          ru: 'Your hair. Your style. Your unforgettable bridal moment.',
        },
      ],
    },
  },
  {
    id: 'luxury-dance-floor',
    title: {
      en: 'Luxury Dance Floor',
      el: 'Πολυτελής Πίστα Χορού',
      ru: 'Роскошный танцпол',
    },
    detail: {
      headline: {
        en: 'Luxury Dance Floor',
        el: 'Πολυτελής Πίστα Χορού | Luxury Dance Floor',
        ru: 'Роскошный танцпол | Luxury Dance Floor',
      },
      paragraphs: [
        {
          en: 'Where you share your first dance as a married couple, it cannot be just a floor. It must be part of the magic.',
          el: 'Εκεί όπου θα κάνετε τον πρώτο σας χορό ως παντρεμένο ζευγάρι, δεν μπορεί να είναι απλώς μια πίστα. Πρέπει να είναι μέρος της μαγείας.',
          ru: 'Там, где вы танцуете первый танец как супруги, это не может быть просто пол. Это должно быть частью волшебства.',
        },
        {
          en: 'The Wedding Sky Luxury Dance Floor is designed to transform the heart of your reception into a striking statement — perfectly aligned with the aesthetic and atmosphere of your wedding.',
          el: 'Η Luxury Dance Floor της Wedding Sky σχεδιάζεται για να μεταμορφώνει το κέντρο της δεξίωσης σε ένα εντυπωσιακό statement, απόλυτα εναρμονισμένο με την αισθητική και την ατμόσφαιρα του γάμου σας.',
          ru: 'Роскошный танцпол Wedding Sky превращает центр вашего приёма в выразительный акцент — в полной гармонии с эстетикой и атмосферой свадьбы.',
        },
        {
          en: 'Elegant, commanding, and photogenic, it sets the perfect stage for your first dance — then becomes the heart of the evening, where music, energy, and the people you love come together in one unforgettable celebration.',
          el: 'Κομψή, επιβλητική και φωτογενής, δημιουργεί το ιδανικό σκηνικό για τον πρώτο σας χορό και στη συνέχεια γίνεται η καρδιά της βραδιάς — εκεί όπου η μουσική, η ενέργεια και οι άνθρωποι που αγαπάτε ενώνονται σε μία αξέχαστη γιορτή.',
          ru: 'Элегантный, выразительный и фотогеничный — он создаёт идеальную сцену для первого танца, а затем становится сердцем вечера, где музыка, энергия и близкие люди сливаются в незабываемое торжество.',
        },
        {
          en: 'Because some of the most beautiful memories of your wedding will be made on the dance floor.',
          el: 'Γιατί κάποιες από τις ομορφότερες αναμνήσεις του γάμου σας… θα δημιουργηθούν πάνω στην πίστα.',
          ru: 'Потому что некоторые из самых прекрасных воспоминаний о свадьбе рождаются на танцполе.',
        },
      ],
    },
  },
  {
    id: 'vintage-wedding-car',
    title: {
      en: 'Vintage Wedding Car',
      el: 'Αυτοκίνητο Αντίκα',
      ru: 'Винтажный свадебный автомобиль',
    },
    detail: {
      headline: {
        en: 'Vintage Wedding Car',
        el: 'Αυτοκίνητο Αντίκα | Vintage Wedding Car',
        ru: 'Винтажный автомобиль | Vintage Wedding Car',
      },
      paragraphs: [
        {
          en: 'Some arrivals do not simply pass unnoticed. They become part of the story of your day.',
          el: 'Υπάρχουν αφίξεις που δεν περνούν απλώς απαρατήρητες. Γίνονται μέρος της ιστορίας της ημέρας σας.',
          ru: 'Некоторые прибытия не остаются незамеченными. Они становятся частью истории вашего дня.',
        },
        {
          en: 'A Vintage Wedding Car brings timeless elegance from another era to your celebration — combining romance, character, and aristocratic finesse. From your departure to your grand arrival, it creates a unique scene that captures every gaze and photographs beautifully.',
          el: 'Ένα Vintage Wedding Car χαρίζει στον γάμο σας τη διαχρονική κομψότητα μιας άλλης εποχής, συνδυάζοντας ρομαντισμό, χαρακτήρα και αριστοκρατική φινέτσα. Από τη στιγμή της αναχώρησης μέχρι τη μεγάλη σας άφιξη, δημιουργεί ένα μοναδικό σκηνικό που μαγνητίζει τα βλέμματα και αποτυπώνεται υπέροχα στον φωτογραφικό φακό.',
          ru: 'Винтажный свадебный автомобиль дарит торжеству вневременную элегантность другой эпохи — романтику, характер и аристократическую утончённость. От выезда до торжественного прибытия он создаёт уникальную сцену, приковывающую взгляды и прекрасно смотрящуюся на фото.',
        },
        {
          en: 'It is not simply the car that carries you. It is part of the experience, the image, and the memory that stays with you forever.',
          el: 'Δεν είναι απλώς το αυτοκίνητο που θα σας μεταφέρει. Είναι μέρος της εμπειρίας, της εικόνας και της ανάμνησης που θα μείνει μαζί σας για πάντα.',
          ru: 'Это не просто автомобиль, который вас доставит. Это часть опыта, образа и воспоминания, которое останется с вами навсегда.',
        },
        {
          en: 'Because on your wedding day, even the journey to «I do» deserves to be unforgettable.',
          el: 'Γιατί την ημέρα του γάμου σας, ακόμη και η διαδρομή προς το «Ναι» αξίζει να είναι αξέχαστη.',
          ru: 'Потому что в день свадьбы даже путь к «Да» заслуживает быть незабываемым.',
        },
      ],
    },
  },
  {
    id: 'wedding-content-creator',
    title: {
      en: 'Wedding Content Creator',
      el: 'Δημιουργός Γαμήλιου Περιεχομένου',
      ru: 'Создание свадебного контента',
    },
    detail: {
      headline: {
        en: 'Wedding Content Creator',
        el: 'Δημιουργός Γαμήλιου Περιεχομένου | Wedding Content Creator',
        ru: 'Создатель контента | Wedding Content Creator',
      },
      paragraphs: [
        {
          en: 'Some of the most beautiful moments of your wedding happen between the formal photographs — a glance, a smile, an embrace, a spontaneous moment that deserves never to be lost.',
          el: 'Κάποιες από τις πιο όμορφες στιγμές του γάμου σας συμβαίνουν ανάμεσα στις επίσημες φωτογραφίες — ένα βλέμμα, ένα χαμόγελο, μια αγκαλιά, μια αυθόρμητη στιγμή που αξίζει να μη χαθεί ποτέ.',
          ru: 'Некоторые из самых прекрасных моментов свадьбы происходят между официальными фотографиями — взгляд, улыбка, объятие, спонтанный миг, который нельзя потерять.',
        },
        {
          en: 'Your Wedding Content Creator stays discreetly by your side, capturing authentic, spontaneous, and emotional moments in real time — creating elegant social content you can enjoy and share almost immediately.',
          el: 'Ο Wedding Content Creator βρίσκεται διακριτικά δίπλα σας, αποτυπώνοντας σε πραγματικό χρόνο τις αυθεντικές, αυθόρμητες και γεμάτες συναίσθημα στιγμές της ημέρας σας, δημιουργώντας elegant social content που μπορείτε να απολαύσετε και να μοιραστείτε σχεδόν αμέσως.',
          ru: 'Wedding Content Creator незаметно рядом с вами, фиксируя в реальном времени подлинные, спонтанные и эмоциональные моменты — создавая elegant social content, которым можно наслаждаться и делиться почти сразу.',
        },
        {
          en: 'Behind-the-scenes moments, preparations, arrivals, details, celebrations, and the full atmosphere of your wedding become a modern digital story created exclusively for you.',
          el: 'Behind-the-scenes στιγμές, preparations, arrivals, λεπτομέρειες, celebrations και όλη η ατμόσφαιρα του γάμου σας μετατρέπονται σε ένα σύγχρονο digital story, δημιουργημένο αποκλειστικά για εσάς.',
          ru: 'Закулисные моменты, подготовка, прибытия, детали, празднование и вся атмосфера свадьбы превращаются в современную digital story, созданную исключительно для вас.',
        },
        {
          en: 'Because your wedding day passes in a moment. We make sure its moments stay with you forever.',
          el: 'Γιατί η ημέρα του γάμου σας περνά σε μια στιγμή. Εμείς φροντίζουμε οι στιγμές της να μείνουν μαζί σας για πάντα.',
          ru: 'Потому что день свадьбы пролетает мгновенно. Мы позаботимся о том, чтобы его моменты остались с вами навсегда.',
        },
      ],
    },
  },
  {
    id: 'live-loukoumades',
    title: {
      en: 'Live Loukoumades Station',
      el: 'Ζωντανός Σταθμός Λουκουμάδων',
      ru: 'Живая станция лукумадес',
    },
    detail: {
      headline: {
        en: 'Live Loukoumades Station',
        el: 'Ζωντανός Σταθμός Λουκουμάδων | Live Loukoumades Station',
        ru: 'Живая станция лукумадес | Live Loukoumades Station',
      },
      paragraphs: [
        {
          en: 'A beloved Cypriot tradition takes on a modern, elegant presence — becoming a distinctive tasting experience for your guests.',
          el: 'Μια αγαπημένη κυπριακή παράδοση αποκτά σύγχρονη, elegant παρουσία και γίνεται μια ξεχωριστή γευστική εμπειρία για τους καλεσμένους σας.',
          ru: 'Любимая кипрская традиция обретает современную elegant-подачу — и становится особым гастрономическим опытом для ваших гостей.',
        },
        {
          en: 'At the Live Loukoumades Station, loukoumades are prepared fresh before your guests and served warm — creating a wonderful aroma and a sweet experience that adds character to the evening.',
          el: 'Στο Live Loukoumades Station, οι λουκουμάδες ετοιμάζονται φρέσκοι μπροστά στους καλεσμένους σας και σερβίρονται ζεστοί, δημιουργώντας ένα υπέροχο άρωμα και μια γλυκιά εμπειρία που προσθέτει χαρακτήρα στη βραδιά.',
          ru: 'На Live Loukoumades Station лукумадес готовятся свежими на глазах у гостей и подаются горячими — наполняя вечер ароматом и сладким характером.',
        },
        {
          en: 'More than a dessert station, it is a live wedding experience that combines taste, tradition, and hospitality in a beautiful, contemporary way.',
          el: 'Περισσότερο από ένα dessert station, είναι ένα live wedding experience που συνδυάζει γεύση, παράδοση και φιλοξενία με έναν όμορφο και σύγχρονο τρόπο.',
          ru: 'Больше, чем dessert station — это live wedding experience, объединяющее вкус, традицию и гостеприимство в красивой современной форме.',
        },
        {
          en: 'Because the most distinctive weddings hide small surprises that guests remember, savour, and talk about long after the last bite.',
          el: 'Γιατί οι πιο ξεχωριστοί γάμοι κρύβουν μικρές εκπλήξεις που οι καλεσμένοι θυμούνται, απολαμβάνουν και συζητούν ακόμα και μετά την τελευταία μπουκιά.',
          ru: 'Потому что самые особенные свадьбы хранят маленькие сюрпризы, которые гости помнят, смакуют и обсуждают ещё долго после последнего кусочка.',
        },
      ],
    },
  },
  {
    id: 'electric-violin',
    title: {
      en: 'Electric Violin',
      el: 'Ηλεκτρικό Βιολί',
      ru: 'Электроскрипка',
    },
    detail: {
      headline: {
        en: 'Electric Violin',
        el: 'Ηλεκτρικό Βιολί | Electric Violin',
        ru: 'Электроскрипка | Electric Violin',
      },
      paragraphs: [
        {
          en: 'When the timeless elegance of the violin meets modern energy, music is not simply heard. It becomes an experience.',
          el: 'Όταν η διαχρονική κομψότητα του βιολιού συναντά τη σύγχρονη ενέργεια, η μουσική δεν ακούγεται απλώς. Μετατρέπεται σε εμπειρία.',
          ru: 'Когда вневременная элегантность скрипки встречается с современной энергией, музыку не просто слышат — её переживают.',
        },
        {
          en: 'The Electric Violin delivers a striking live performance that fills the space with emotion, intensity, and sophisticated character. From atmospheric melodies to dynamic contemporary hits, every note adapts to the moment and elevates the energy of the evening.',
          el: 'Το Electric Violin δημιουργεί ένα εντυπωσιακό live performance που γεμίζει τον χώρο με συναίσθημα, ένταση και sophisticated χαρακτήρα. Από ατμοσφαιρικές μελωδίες μέχρι δυναμικές σύγχρονες επιτυχίες, κάθε νότα προσαρμόζεται στη στιγμή και ανεβάζει την ενέργεια της βραδιάς.',
          ru: 'Электроскрипка создаёт впечатляющее live performance, наполняя пространство эмоцией, интенсивностью и sophisticated-характером. От атмосферных мелодий до динамичных современных хитов — каждая нота подстраивается под момент и поднимает энергию вечера.',
        },
        {
          en: 'An elegant musical presence that can accompany your most romantic moments — or transform the reception into an electrifying wedding show that holds every gaze.',
          el: 'Μια elegant μουσική παρουσία που μπορεί να συνοδεύσει τις πιο ρομαντικές στιγμές ή να μεταμορφώσει τη δεξίωση σε ένα electrifying wedding show που μαγνητίζει τα βλέμματα.',
          ru: 'Elegant музыкальное присутствие, которое может сопровождать самые романтичные моменты — или превратить приём в electrifying wedding show, приковывающий все взгляды.',
        },
        {
          en: 'Because at your wedding, music should not simply accompany the moments. It should make them unforgettable.',
          el: 'Γιατί στον γάμο σας, η μουσική δεν πρέπει απλώς να συνοδεύει τις στιγμές. Πρέπει να τις κάνει αξέχαστες.',
          ru: 'Потому что на вашей свадьбе музыка не должна просто сопровождать моменты — она должна делать их незабываемыми.',
        },
      ],
    },
  },
  {
    id: 'personalized-wedding-website',
    title: {
      en: 'Personalized Wedding Website',
      el: 'Προσωποποιημένη Ιστοσελίδα Γάμου',
      ru: 'Персональный свадебный сайт',
    },
    detail: {
      headline: {
        en: 'Personalized Wedding Website',
        el: 'Προσωποποιημένη Ιστοσελίδα Γάμου | Personalized Wedding Website',
        ru: 'Персональный сайт | Personalized Wedding Website',
      },
      paragraphs: [
        {
          en: 'Your wedding story deserves its own digital space — refined, personal, and created exclusively for you.',
          el: 'Η ιστορία του γάμου σας αξίζει τον δικό της ψηφιακό χώρο — κομψό, προσωπικό και δημιουργημένο αποκλειστικά για εσάς.',
          ru: 'История вашей свадьбы заслуживает собственного цифрового пространства — изысканного, личного и созданного исключительно для вас.',
        },
        {
          en: 'Your Personalized Wedding Website brings together everything your guests need in one beautifully designed online destination: your story, the details of the day, locations and timings, schedule, useful information, photographs, and important announcements.',
          el: 'Η Personalized Wedding Website συγκεντρώνει όλα όσα χρειάζονται οι καλεσμένοι σας σε ένα beautifully designed online destination: την ιστορία σας, τις λεπτομέρειες της ημέρας, τοποθεσίες και ώρες, πρόγραμμα, χρήσιμες πληροφορίες, φωτογραφίες και σημαντικές ανακοινώσεις.',
          ru: 'Personalized Wedding Website объединяет всё необходимое для гостей в одном beautifully designed online destination: вашу историю, детали дня, локации и время, программу, полезную информацию, фотографии и важные объявления.',
        },
        {
          en: 'More than a website, it becomes the digital signature of your wedding — an elegant way to welcome guests into the world you are creating before the big day even arrives.',
          el: 'Περισσότερο από μια ιστοσελίδα, γίνεται το digital signature του γάμου σας — ένας elegant τρόπος να καλωσορίσετε τους καλεσμένους στον κόσμο που δημιουργείτε πριν ακόμη φτάσει η μεγάλη ημέρα.',
          ru: 'Больше, чем сайт — это digital signature вашей свадьбы: elegant способ пригласить гостей в мир, который вы создаёте, ещё до наступления большого дня.',
        },
        {
          en: 'Because your wedding experience does not begin at the ceremony. It begins the moment your guests discover your story.',
          el: 'Γιατί η εμπειρία του γάμου σας δεν ξεκινά στην τελετή. Ξεκινά από την πρώτη στιγμή που οι καλεσμένοι ανακαλύπτουν την ιστορία σας.',
          ru: 'Потому что опыт вашей свадьбы начинается не на церемонии — а с первого момента, когда гости открывают вашу историю.',
        },
      ],
    },
  },
  {
    id: 'luxury-supercars',
    title: {
      en: 'Luxury & Supercars',
      el: 'Πολυτελή & Σπορ Αυτοκίνητα',
      ru: 'Люксовые и суперкары',
    },
    pageHref: '/services/super-luxury-cars',
  },
  {
    id: 'wedding-invitations',
    title: {
      en: 'Wedding Invitations',
      el: 'Προσκλητήρια Γάμου',
      ru: 'Свадебные приглашения',
    },
    detail: {
      headline: {
        en: 'Wedding Invitations',
        el: 'Προσκλητήρια Γάμου | Wedding Invitations',
        ru: 'Свадебные приглашения | Wedding Invitations',
      },
      paragraphs: [
        {
          en: 'Before the ceremony, before the music, before your first entrance — there is the first moment your guests touch the world of your wedding.',
          el: 'Πριν από την τελετή, πριν από τη μουσική, πριν από την πρώτη σας είσοδο, υπάρχει η πρώτη στιγμή που οι καλεσμένοι σας αγγίζουν τον κόσμο του γάμου σας.',
          ru: 'До церемонии, до музыки, до вашего первого выхода — есть первый момент, когда гости прикасаются к миру вашей свадьбы.',
        },
        {
          en: 'Wedding Invitations are the first image of the day you are designing — an elegant preview of the aesthetic, tone, and atmosphere to follow.',
          el: 'Τα Wedding Invitations αποτελούν την πρώτη εικόνα της ημέρας που σχεδιάζετε — μια κομψή προαναγγελία της αισθητικής, του ύφους και της ατμόσφαιρας που πρόκειται να ακολουθήσει.',
          ru: 'Wedding Invitations — первый образ дня, который вы создаёте: elegant предвкушение эстетики, тона и атмосферы, что последует.',
        },
        {
          en: 'From minimal elegance and timeless designs to more striking luxury creations, every detail is chosen so your invitation expresses your story and the unique identity of your wedding.',
          el: 'Από minimal elegance και timeless designs μέχρι πιο εντυπωσιακές luxury δημιουργίες, κάθε λεπτομέρεια επιλέγεται ώστε το προσκλητήριό σας να εκφράζει τη δική σας ιστορία και τη μοναδική ταυτότητα του γάμου σας.',
          ru: 'От minimal elegance и timeless designs до более выразительных luxury-созданий — каждая деталь выбрана так, чтобы приглашение отражало вашу историю и уникальную идентичность свадьбы.',
        },
        {
          en: 'Because an invitation does not simply announce a date. It is the first page of the day you will remember forever.',
          el: 'Γιατί ένα προσκλητήριο δεν ανακοινώνει απλώς μια ημερομηνία. Είναι η πρώτη σελίδα της ημέρας που θα θυμάστε για πάντα.',
          ru: 'Потому что приглашение не просто объявляет дату — это первая страница дня, который вы будете помнить вечно.',
        },
      ],
    },
  },
  {
    id: '360-video-booth',
    title: {
      en: '360° Video Booth',
      el: 'Περιστρεφόμενος Βίντεο 360°',
      ru: 'Видеобудка 360°',
    },
    detail: {
      headline: {
        en: '360° Video Booth',
        el: 'Περιστρεφόμενος Βίντεο 360° | 360° Video Booth',
        ru: 'Видеобудка 360° | 360° Video Booth',
      },
      paragraphs: [
        {
          en: 'It is not simply a video. It is the moment your guests become part of the show.',
          el: 'Δεν είναι απλώς ένα video. Είναι η στιγμή που οι καλεσμένοι σας γίνονται μέρος του show.',
          ru: 'Это не просто video — это момент, когда ваши гости становятся частью show.',
        },
        {
          en: 'The 360° Video Booth turns every smile, movement, and spontaneous moment into a striking cinematic video — creating an interactive experience full of energy, glamour, and fun.',
          el: 'Το 360° Video Booth μετατρέπει κάθε χαμόγελο, κίνηση και αυθόρμητη στιγμή σε ένα εντυπωσιακό cinematic video, δημιουργώντας μια διαδραστική εμπειρία γεμάτη ενέργεια, glamour και διασκέδαση.',
          ru: '360° Video Booth превращает каждую улыбку, движение и спонтанный миг в впечатляющее cinematic video — интерактивный опыт, полный энергии, glamour и веселья.',
        },
        {
          en: 'Couples, friends, and family step onto the platform, surrender to the music, and create unique 360° moments — perfect for instant sharing and unforgettable social content.',
          el: 'Ζευγάρι, φίλοι και οικογένεια ανεβαίνουν στην πλατφόρμα, αφήνονται στη μουσική και δημιουργούν μοναδικά 360° moments, ιδανικά για άμεσο sharing και αξέχαστο social content.',
          ru: 'Пары, друзья и семья выходят на платформу, отдаются музыке и создают уникальные 360° moments — идеально для мгновенного sharing и незабываемого social content.',
        },
        {
          en: 'More than wedding entertainment, it is an experience within the experience — a detail that gives your reception a contemporary character and something your guests will truly want to live.',
          el: 'Περισσότερο από wedding entertainment, είναι ένα experience μέσα στο experience — μια λεπτομέρεια που δίνει στη δεξίωσή σας σύγχρονο χαρακτήρα και στους καλεσμένους σας κάτι που πραγματικά θέλουν να ζήσουν.',
          ru: 'Больше, чем wedding entertainment — это experience внутри experience: деталь, придающая приёму современный характер и то, чем гости действительно захотят жить.',
        },
        {
          en: 'Because the best memories are not only those we watch. They are those we live from every angle.',
          el: 'Γιατί οι καλύτερες αναμνήσεις δεν είναι μόνο αυτές που βλέπουμε. Είναι αυτές που ζούμε από κάθε γωνία.',
          ru: 'Потому что лучшие воспоминания — не только те, что мы смотрим. Это те, что мы проживаем с каждого ракурса.',
        },
      ],
    },
  },
  {
    id: 'wedding-orchestra',
    title: {
      en: 'Wedding Orchestra',
      el: 'Γαμήλια Ορχήστρα',
      ru: 'Свадебный оркестр',
    },
    detail: {
      headline: {
        en: 'Wedding Orchestra',
        el: 'Γαμήλια Ορχήστρα | Wedding Orchestra',
        ru: 'Свадебный оркестр | Wedding Orchestra',
      },
      paragraphs: [
        {
          en: 'There is a moment in the evening when music stops being simply part of the wedding and becomes the soul of the entire celebration.',
          el: 'Υπάρχει μια στιγμή στη βραδιά που η μουσική παύει να είναι απλώς μέρος του γάμου και γίνεται η ψυχή ολόκληρης της γιορτής.',
          ru: 'Есть момент вечера, когда музыка перестаёт быть просто частью свадьбы и становится душой всего торжества.',
        },
        {
          en: 'The Wedding Orchestra creates an authentic live musical experience, full of emotion, rhythm, and energy. From the first melodies to the moment the dance floor fills, every song becomes part of your story and every note brings the people you love even closer.',
          el: 'Η Wedding Orchestra δημιουργεί μια αυθεντική live μουσική εμπειρία, γεμάτη συναίσθημα, ρυθμό και ενέργεια. Από τις πρώτες μελωδίες μέχρι τη στιγμή που η πίστα γεμίζει, κάθε τραγούδι γίνεται μέρος της ιστορίας σας και κάθε νότα φέρνει τους ανθρώπους που αγαπάτε ακόμη πιο κοντά.',
          ru: 'Wedding Orchestra создаёт подлинный live музыкальный опыт, полный эмоции, ритма и энергии. От первых мелодий до момента, когда танцпол наполняется, каждая песня становится частью вашей истории, а каждая нота сближает близких.',
        },
        {
          en: 'With dynamic stage presence and a repertoire adapted to the atmosphere of the evening, the orchestra transforms your reception into an unforgettable live celebration where the couple and guests become one.',
          el: 'Με δυναμική σκηνική παρουσία και ρεπερτόριο που προσαρμόζεται στην ατμόσφαιρα της βραδιάς, η ορχήστρα μεταμορφώνει τη δεξίωσή σας σε ένα unforgettable live celebration, όπου το ζευγάρι και οι καλεσμένοι γίνονται ένα.',
          ru: 'С динамичным сценическим присутствием и репертуаром, адаптированным к атмосфере вечера, оркестр превращает приём в unforgettable live celebration, где пара и гости становятся единым целым.',
        },
        {
          en: 'Because a truly unforgettable wedding does not need music alone. It needs pulse, emotion, and an evening no one wants to end.',
          el: 'Γιατί ένας πραγματικά αξέχαστος γάμος δεν χρειάζεται απλώς μουσική. Χρειάζεται παλμό, συναίσθημα και μια βραδιά που κανείς δεν θέλει να τελειώσει.',
          ru: 'Потому что по-настоящему незабываемой свадьбе нужна не только музыка — нужны пульс, эмоция и вечер, который никто не хочет заканчивать.',
        },
      ],
    },
  },
  {
    id: 'honeymoon-planning',
    title: {
      en: 'Honeymoon Planning',
      el: 'Οργάνωση Ταξιδιού του Μέλιτος',
      ru: 'Организация медового месяца',
    },
    detail: {
      headline: {
        en: 'Honeymoon Planning',
        el: 'Οργάνωση Ταξιδιού του Μέλιτος | Honeymoon Planning',
        ru: 'Организация медового месяца | Honeymoon Planning',
      },
      paragraphs: [
        {
          en: 'When the lights of the reception dim and the most beautiful day of your life comes to a close, the first great adventure as a married couple begins.',
          el: 'Όταν σβήσουν τα φώτα της δεξίωσης και τελειώσει η πιο όμορφη ημέρα της ζωής σας, ξεκινά η πρώτη μεγάλη περιπέτεια ως παντρεμένο ζευγάρι.',
          ru: 'Когда гаснут огни приёма и завершается самый прекрасный день вашей жизни, начинается первое большое приключение супругов.',
        },
        {
          en: 'Honeymoon Planning turns your honeymoon into an experience designed around you — your wishes, your personal style, and the way you dream of celebrating your first days together.',
          el: 'Το Honeymoon Planning μετατρέπει το ταξίδι του μέλιτος σε μια εμπειρία σχεδιασμένη γύρω από εσάς — τις επιθυμίες σας, το προσωπικό σας στυλ και τον τρόπο που ονειρεύεστε να γιορτάσετε τις πρώτες σας ημέρες μαζί.',
          ru: 'Honeymoon Planning превращает медовый месяц в опыт, созданный вокруг вас — ваших желаний, личного стиля и того, как вы мечтаете отметить первые дни вместе.',
        },
        {
          en: 'From romantic destinations and luxury stays to distinctive experiences and small details that make a journey truly unforgettable, every element is organised so your only obligation is to enjoy every moment together.',
          el: 'Από ρομαντικούς προορισμούς και luxury stays μέχρι ξεχωριστές εμπειρίες και μικρές λεπτομέρειες που κάνουν ένα ταξίδι πραγματικά αξέχαστο, κάθε στοιχείο οργανώνεται ώστε εσείς να έχετε μόνο μία υποχρέωση: να απολαύσετε κάθε στιγμή μαζί.',
          ru: 'От романтичных направлений и luxury stays до особых впечатлений и мелочей, делающих путешествие по-настоящему незабываемым — всё организовано так, чтобы у вас была лишь одна обязанность: наслаждаться каждым моментом вместе.',
        },
        {
          en: 'Because the honeymoon is not simply a holiday after the wedding. It is the first journey of your new life together.',
          el: 'Γιατί το honeymoon δεν είναι απλώς οι διακοπές μετά τον γάμο. Είναι το πρώτο ταξίδι της νέας σας ζωής.',
          ru: 'Потому что медовый месяц — не просто отпуск после свадьбы. Это первое путешествие вашей новой жизни вместе.',
        },
      ],
    },
  },
  {
    id: 'wedding-christening-favours',
    title: {
      en: 'Wedding & Christening Favours',
      el: 'Μπομπονιέρες Γάμου & Βάπτισης',
      ru: 'Бонбоньерки для свадьбы и крестин',
    },
    detail: {
      headline: {
        en: 'Wedding & Christening Favours',
        el: 'Μπομπονιέρες Γάμου & Βάπτισης | Wedding & Christening Favours',
        ru: 'Бонбоньерки | Wedding & Christening Favours',
      },
      paragraphs: [
        {
          en: 'The most distinctive celebrations are hidden in the details — and some of those, your guests take home with them.',
          el: 'Οι πιο ξεχωριστές εκδηλώσεις κρύβονται στις λεπτομέρειες — και κάποιες από αυτές οι καλεσμένοι σας παίρνουν μαζί τους.',
          ru: 'Самые особенные торжества скрыты в деталях — и некоторые из них гости уносят с собой.',
        },
        {
          en: 'Wedding & Christening Favours are designed as an elegant expression of gratitude to the people who share such a significant day with you. From timeless and romantic choices to sophisticated luxury creations, each favour can harmonise with the aesthetic, colours, and personal tone of your celebration.',
          el: 'Οι Wedding & Christening Favours σχεδιάζονται ως μια κομψή έκφραση ευγνωμοσύνης προς τους ανθρώπους που μοιράζονται μαζί σας μια τόσο σημαντική ημέρα. Από timeless και romantic επιλογές μέχρι sophisticated luxury δημιουργίες, κάθε μπομπονιέρα μπορεί να εναρμονιστεί με την αισθητική, τα χρώματα και το προσωπικό ύφος της εκδήλωσής σας.',
          ru: 'Wedding & Christening Favours — elegant выражение благодарности людям, разделяющим с вами столь значимый день. От timeless и romantic вариантов до sophisticated luxury-созданий — каждая бонбоньерка гармонирует с эстетикой, цветами и личным тоном торжества.',
        },
        {
          en: 'More than a traditional treat, it is a small piece of your day — considered, beautiful, and full of meaning.',
          el: 'Περισσότερο από ένα παραδοσιακό κέρασμα, είναι ένα μικρό κομμάτι της ημέρας σας — προσεγμένο, όμορφο και γεμάτο συμβολισμό.',
          ru: 'Больше, чем традиционное угощение — это маленький фрагмент вашего дня: продуманный, красивый и полный символики.',
        },
        {
          en: 'Because guests may leave when the celebration ends — but they deserve to take a beautiful memory of it with them.',
          el: 'Γιατί οι καλεσμένοι μπορεί να φύγουν όταν τελειώσει η γιορτή… αλλά αξίζει να πάρουν μαζί τους μια όμορφη ανάμνησή της.',
          ru: 'Потому что гости могут уйти, когда праздник закончится — но они заслуживают унести с собой прекрасное воспоминание о нём.',
        },
      ],
    },
  },
  {
    id: 'mobile-cocktail-bar',
    title: {
      en: 'Mobile Cocktail Bar',
      el: 'Κινητό Μπαρ Κοκτέιλ',
      ru: 'Мобильный коктейль-бар',
    },
    detail: {
      headline: {
        en: 'Mobile Cocktail Bar',
        el: 'Κινητό Μπαρ Κοκτέιλ | Mobile Cocktail Bar',
        ru: 'Мобильный коктейль-бар | Mobile Cocktail Bar',
      },
      paragraphs: [
        {
          en: 'An exceptional cocktail is not simply a drink. It is taste, presentation, atmosphere — an entire experience in a glass.',
          el: 'Ένα εξαιρετικό cocktail δεν είναι απλώς ένα ποτό. Είναι γεύση, παρουσίαση, ατμόσφαιρα — μια ολόκληρη εμπειρία σε ένα ποτήρι.',
          ru: 'Исключительный cocktail — не просто напиток. Это вкус, подача, атмосфера — целый опыт в бокале.',
        },
        {
          en: 'The Mobile Cocktail Bar brings the sophisticated aesthetic of a premium cocktail bar directly to your reception — creating a stylish meeting point where guests can enjoy impressive cocktails in an atmosphere full of character and energy.',
          el: 'Το Mobile Cocktail Bar φέρνει τη sophisticated αισθητική ενός premium cocktail bar απευθείας στη δεξίωσή σας, δημιουργώντας ένα stylish σημείο συνάντησης όπου οι καλεσμένοι μπορούν να απολαύσουν εντυπωσιακά cocktails μέσα σε μια ατμόσφαιρα γεμάτη χαρακτήρα και ενέργεια.',
          ru: 'Mobile Cocktail Bar приносит sophisticated эстетику premium cocktail bar прямо на ваш приём — создавая stylish точку встречи, где гости наслаждаются впечатляющими cocktails в атмосфере характера и энергии.',
        },
        {
          en: 'From beloved classic choices to signature cocktails inspired by the couple, each creation can become part of your wedding identity and add another distinctive touch to the evening.',
          el: 'Από αγαπημένες κλασικές επιλογές μέχρι signature cocktails εμπνευσμένα από το ζευγάρι, κάθε δημιουργία μπορεί να γίνει μέρος της προσωπικής ταυτότητας του γάμου σας και να προσθέσει ακόμη μία ξεχωριστή πινελιά στη βραδιά.',
          ru: 'От любимой классики до signature cocktails, вдохновлённых парой — каждое творение может стать частью идентичности свадьбы и добавить ещё одну особую ноту вечеру.',
        },
        {
          en: 'More than a bar, it is a social experience that invites guests to meet, celebrate, and raise a glass to you.',
          el: 'Περισσότερο από ένα bar, είναι ένα social experience που προσκαλεί τους καλεσμένους να συναντηθούν, να γιορτάσουν και να σηκώσουν το ποτήρι τους για εσάς.',
          ru: 'Больше, чем bar — это social experience, приглашающее гостей встретиться, праздновать и поднять бокал за вас.',
        },
        {
          en: 'Your love story deserves its own signature cocktail.',
          el: 'Your love story deserves its own signature cocktail.',
          ru: 'Your love story deserves its own signature cocktail.',
        },
      ],
    },
  },
  {
    id: 'drone-videography',
    title: {
      en: 'Drone Videography',
      el: 'Εναέρια Βιντεοσκόπηση με Drone',
      ru: 'Аэросъёмка дроном',
    },
    detail: {
      headline: {
        en: 'Drone Videography',
        el: 'Εναέρια Βιντεοσκόπηση με Drone | Drone Videography',
        ru: 'Аэросъёмка дроном | Drone Videography',
      },
      paragraphs: [
        {
          en: 'There are moments worth seeing from a completely different perspective — where your wedding becomes cinematic imagery.',
          el: 'Υπάρχουν στιγμές που αξίζει να τις δείτε από μια εντελώς διαφορετική οπτική — εκεί όπου ο γάμος σας μετατρέπεται σε κινηματογραφική εικόνα.',
          ru: 'Есть моменты, которые стоит увидеть с совершенно иной перспективы — где ваша свадьба становится кинематографическим образом.',
        },
        {
          en: 'Drone Videography captures from above the unique atmosphere of your day: the striking setting, your arrival, the ceremony and reception venues, and those grand moments that gain another dimension when filmed from the sky.',
          el: 'Η Drone Videography αποτυπώνει από ψηλά τη μοναδική ατμόσφαιρα της ημέρας σας: το εντυπωσιακό σκηνικό, την άφιξή σας, τον χώρο της τελετής και της δεξίωσης και εκείνες τις μεγάλες στιγμές που αποκτούν άλλη διάσταση όταν κινηματογραφούνται από τον ουρανό.',
          ru: 'Drone Videography с высоты запечатлевает уникальную атмосферу дня: впечатляющий декор, ваше прибытие, площадки церемонии и приёма — и те grand моменты, которые обретают иное измерение при съёмке с неба.',
        },
        {
          en: 'With breathtaking aerial shots and cinematic aesthetic, the drone adds scale, emotion, and film character to your wedding film — creating images that are difficult to capture in any other way.',
          el: 'Με breathtaking εναέρια πλάνα και cinematic αισθητική, το drone προσθέτει κλίμακα, συναίσθημα και κινηματογραφικό χαρακτήρα στο wedding film σας, δημιουργώντας εικόνες που δύσκολα μπορούν να αποτυπωθούν με οποιονδήποτε άλλο τρόπο.',
          ru: 'С breathtaking аэрокадрами и cinematic эстетикой дрон добавляет масштаб, эмоцию и кинематографический характер вашему wedding film — создавая образы, которые трудно передать иначе.',
        },
        {
          en: 'Because the story of your day deserves to be captured from every angle.',
          el: 'Γιατί η ιστορία της ημέρας σας αξίζει να αποτυπωθεί από κάθε γωνία.',
          ru: 'Потому что история вашего дня заслуживает быть запечатлённой с каждого ракурса.',
        },
        {
          en: 'And some love stories deserve to be captured from above.',
          el: 'And some love stories deserve to be captured from above.',
          ru: 'And some love stories deserve to be captured from above.',
        },
      ],
    },
  },
  {
    id: 'daouli-toumperleki',
    title: {
      en: 'Daouli & Toumperleki Show',
      el: 'Νταούλι & Τουμπερλέκι',
      ru: 'Шоу с даули и тумберлеки',
    },
    detail: {
      headline: {
        en: 'Daouli & Toumperleki Show',
        el: 'Νταούλι & Τουμπερλέκι | Daouli & Toumperleki Show',
        ru: 'Шоу с даули и тумберлеки | Daouli & Toumperleki Show',
      },
      paragraphs: [
        {
          en: 'There is a moment when the rhythm changes everything. Energy rises, guests stand, and the celebration takes on a new pulse.',
          el: 'Υπάρχει μια στιγμή που ο ρυθμός αλλάζει τα πάντα. Η ενέργεια ανεβαίνει, οι καλεσμένοι σηκώνονται και η γιορτή αποκτά άλλον παλμό.',
          ru: 'Есть момент, когда ритм меняет всё. Энергия поднимается, гости встают, и праздник обретает новый пульс.',
        },
        {
          en: 'The Daouli & Toumperleki Show brings the power of tradition into a contemporary, striking live performance — full of intensity, rhythm, and authentic Mediterranean energy.',
          el: 'Το Daouli & Toumperleki Show φέρνει τη δύναμη της παράδοσης σε μια σύγχρονη, εντυπωσιακή live performance, γεμάτη ένταση, ρυθμό και αυθεντική μεσογειακή ενέργεια.',
          ru: 'Daouli & Toumperleki Show переносит силу традиции в современное, впечатляющее live performance — полное интенсивности, ритма и подлинной средиземноморской энергии.',
        },
        {
          en: 'The powerful sounds of the daouli and toumperleki create an electrifying wedding moment, sweeping the couple and guests into an explosive celebration where no one remains a mere spectator.',
          el: 'Οι δυνατοί ήχοι από το νταούλι και το τουμπερλέκι δημιουργούν ένα electrifying wedding moment, παρασύροντας το ζευγάρι και τους καλεσμένους σε μια εκρηκτική γιορτή όπου κανείς δεν μένει απλώς θεατής.',
          ru: 'Мощные звуки даули и тумберлеки создают electrifying wedding moment, увлекая пару и гостей во взрывное торжество, где никто не остаётся просто зрителем.',
        },
        {
          en: 'It is not simply music. It is rhythm that unites the room, creates emotion, and elevates the atmosphere.',
          el: 'Δεν είναι απλώς μουσική. Είναι ρυθμός που ενώνει τον κόσμο, δημιουργεί συναίσθημα και απογειώνει την ατμόσφαιρα.',
          ru: 'Это не просто музыка. Это ритм, который объединяет зал, создаёт эмоцию и поднимает атмосферу.',
        },
        {
          en: 'Feel the rhythm. Live the moment. Let the celebration begin.',
          el: 'Feel the rhythm. Live the moment. Let the celebration begin.',
          ru: 'Feel the rhythm. Live the moment. Let the celebration begin.',
        },
      ],
    },
  },
  {
    id: 'party-platters',
    title: {
      en: 'Party Platters',
      el: 'Πιατέλες για Πάρτι',
      ru: 'Праздничные плато',
    },
    detail: {
      headline: {
        en: 'Party Platters',
        el: 'Πιατέλες για Πάρτι | Party Platters',
        ru: 'Праздничные плато | Party Platters',
      },
      paragraphs: [
        {
          en: 'Hospitality lives in the details — and taste is one of those guests remember most.',
          el: 'Η φιλοξενία βρίσκεται στις λεπτομέρειες — και η γεύση είναι μία από εκείνες που οι καλεσμένοι θυμούνται περισσότερο.',
          ru: 'Гостеприимство живёт в деталях — и вкус — одна из тех, что гости запоминают больше всего.',
        },
        {
          en: 'Party Platters combine select flavours, considered presentation, and elegant aesthetic — creating an enjoyable choice for every moment of your celebration. Each platter is presented with emphasis on quality and detail, becoming part not only of the menu but of the overall experience.',
          el: 'Οι Party Platters συνδυάζουν εκλεκτές γεύσεις, προσεγμένη παρουσίαση και elegant αισθητική, δημιουργώντας μια απολαυστική επιλογή για κάθε στιγμή της γιορτής σας. Κάθε πιατέλα παρουσιάζεται με έμφαση στην ποιότητα και τη λεπτομέρεια, ώστε να αποτελεί μέρος όχι μόνο του menu, αλλά και της συνολικής εμπειρίας.',
          ru: 'Party Platters сочетают избранные вкусы, продуманную подачу и elegant эстетику — создавая приятный выбор для каждого момента торжества. Каждое platters подаётся с акцентом на качество и деталь, становясь частью не только menu, но и общего опыта.',
        },
        {
          en: 'Ideal for sharing and relaxed moments among guests, they add a generous touch of hospitality that makes the celebration warmer and more distinctive.',
          el: 'Ιδανικές για sharing και χαλαρές στιγμές ανάμεσα στους καλεσμένους, προσθέτουν μια generous touch of hospitality που κάνει τη γιορτή ακόμη πιο ζεστή και ξεχωριστή.',
          ru: 'Идеальны для sharing и непринуждённых моментов между гостями — добавляют generous touch of hospitality, делающий праздник теплее и особеннее.',
        },
        {
          en: 'Because true luxury is found not only in what you see. It is also in what you savour.',
          el: 'Γιατί η πραγματική πολυτέλεια δεν βρίσκεται μόνο σε όσα βλέπεις. Βρίσκεται και σε όσα απολαμβάνεις.',
          ru: 'Потому что настоящая роскошь — не только в том, что вы видите. Она и в том, что вы смакуете.',
        },
      ],
    },
  },
  {
    id: 'luxury-limousine',
    title: {
      en: 'Luxury Limousine',
      el: 'Πολυτελής Λιμουζίνα',
      ru: 'Роскошный лимузин',
    },
    pageHref: '/services/limousines-experiences',
  },
  {
    id: 'church-choir',
    title: {
      en: 'Church Choir',
      el: 'Εκκλησιαστική Χορωδία',
      ru: 'Церковный хор',
    },
    detail: {
      headline: {
        en: 'Church Choir',
        el: 'Εκκλησιαστική Χορωδία | Church Choir',
        ru: 'Церковный хор | Church Choir',
      },
      paragraphs: [
        {
          en: 'There are moments in a wedding that need nothing more than the power of the human voice to become deeply moving.',
          el: 'Υπάρχουν στιγμές στον γάμο που δεν χρειάζονται τίποτα περισσότερο από τη δύναμη της ανθρώπινης φωνής για να γίνουν συγκλονιστικές.',
          ru: 'В свадьбе бывают моменты, для которых не нужно ничего, кроме силы человеческого голоса — и они трогают до глубины души.',
        },
        {
          en: 'The Church Choir embraces the ceremony with harmony, devotion, and timeless grandeur — creating an atmosphere that elevates the meaning and emotion of the sacred moment.',
          el: 'Η Church Choir αγκαλιάζει την τελετή με αρμονία, κατάνυξη και διαχρονική μεγαλοπρέπεια, δημιουργώντας μια ατμόσφαιρα που αναδεικνύει τη σημασία και το συναίσθημα της ιερής στιγμής.',
          ru: 'Church Choir наполняет церемонию гармонией, благоговением и вневременным величием — создавая атмосферу, подчёркивающую значение и эмоцию священного момента.',
        },
        {
          en: 'The voices of the choir fill the space and accompany the most significant moments of the sacrament in a unique way — adding depth, emotion, and a sense of liturgical elegance that is hard to describe, yet unforgettable.',
          el: 'Οι φωνές της χορωδίας γεμίζουν τον χώρο και συνοδεύουν με μοναδικό τρόπο τις σημαντικότερες στιγμές του μυστηρίου, προσθέτοντας βάθος, συγκίνηση και μια αίσθηση τελετουργικής κομψότητας που δύσκολα περιγράφεται — αλλά μένει αξέχαστη.',
          ru: 'Голоса хора наполняют пространство и уникальным образом сопровождают важнейшие моменты таинства — добавляя глубину, волнение и ощущение литургической элегантности, которое трудно описать, но невозможно забыть.',
        },
        {
          en: 'Because some moments should not simply be seen. They should be felt.',
          el: 'Γιατί κάποιες στιγμές δεν πρέπει απλώς να τις βλέπεις. Πρέπει να τις αισθάνεσαι.',
          ru: 'Потому что некоторые моменты нельзя просто увидеть — их нужно почувствовать.',
        },
      ],
    },
  },
  {
    id: 'wedding-treats-cake',
    title: {
      en: 'Wedding Treats & Cake',
      el: 'Γαμήλια Κεράσματα & Τούρτα',
      ru: 'Свадебные угощения и торт',
    },
    detail: {
      headline: {
        en: 'Wedding Treats & Cake',
        el: 'Γαμήλια Κεράσματα & Τούρτα | Wedding Treats & Cake',
        ru: 'Свадебные угощения и торт | Wedding Treats & Cake',
      },
      paragraphs: [
        {
          en: 'The sweet side of your wedding deserves to be as impressive as the day itself.',
          el: 'Η γλυκιά πλευρά του γάμου σας αξίζει να είναι τόσο εντυπωσιακή όσο και η ίδια η ημέρα.',
          ru: 'Сладкая сторона свадьбы заслуживает быть столь же впечатляющей, как и сам день.',
        },
        {
          en: 'Wedding Treats & Cake combine refined flavours with elegant presentation — a gastronomic experience that impresses the eye first, then the palate. From considered wedding treats to the cake that becomes the centerpiece of the sweetest moment of the evening, every creation is part of your wedding aesthetic.',
          el: 'Τα Wedding Treats & Cake συνδυάζουν εκλεπτυσμένες γεύσεις με elegant παρουσίαση, δημιουργώντας μια γαστρονομική εμπειρία που εντυπωσιάζει πρώτα το βλέμμα και στη συνέχεια τον ουρανίσκο. Από προσεγμένα γαμήλια κεράσματα μέχρι την τούρτα που γίνεται το centerpiece της πιο γλυκιάς στιγμής της βραδιάς, κάθε δημιουργία αποτελεί μέρος της συνολικής αισθητικής του γάμου σας.',
          ru: 'Wedding Treats & Cake сочетают изысканные вкусы с elegant подачей — гастрономический опыт, который сначала поражает глаз, затем палитру. От продуманных угощений до торта — centerpiece самого сладкого момента вечера — каждое творение часть общей эстетики свадьбы.',
        },
        {
          en: 'Designed to harmonise with the tone, colours, and personality of the day, they add that final touch of luxury that turns the dessert experience into something truly distinctive.',
          el: 'Σχεδιασμένα ώστε να εναρμονίζονται με το ύφος, τα χρώματα και την προσωπικότητα της ημέρας, προσθέτουν εκείνη την τελευταία πινελιά πολυτέλειας που μετατρέπει το dessert experience σε κάτι πραγματικά ξεχωριστό.',
          ru: 'Созданные в гармонии с тоном, цветами и характером дня, они добавляют финальный штрих роскоши, превращая dessert experience в нечто по-настоящему особенное.',
        },
        {
          en: 'Because the cake is cut in a few minutes — but the taste and image of that moment stay in memory for years.',
          el: 'Γιατί η τούρτα κόβεται σε λίγα λεπτά… αλλά η γεύση και η εικόνα της στιγμής μένουν στη μνήμη για χρόνια.',
          ru: 'Потому что торт режут за несколько минут — а вкус и образ того момента остаются в памяти на годы.',
        },
      ],
    },
  },
  {
    id: 'photo-booth',
    title: {
      en: 'Photo Booth',
      el: 'Photo Booth',
      ru: 'Фотобудка',
    },
    detail: {
      headline: {
        en: 'Wedding Photo Experience',
        el: 'Photo Booth | Wedding Photo Experience',
        ru: 'Фотобудка | Wedding Photo Experience',
      },
      paragraphs: [
        {
          en: 'The most authentic photographs are often those no one planned — a spontaneous smile, a playful pose, an embrace between friends.',
          el: 'Οι πιο αυθεντικές φωτογραφίες είναι συχνά εκείνες που κανείς δεν σχεδίασε — ένα αυθόρμητο χαμόγελο, μια αστεία πόζα, μια αγκαλιά ανάμεσα σε φίλους.',
          ru: 'Самые подлинные фотографии — те, что никто не планировал: спontanная улыбка, шутливая поза, объятие друзей.',
        },
        {
          en: 'The Photo Booth creates a stylish space full of character and fun, where your guests can let go, be photographed, and create their own unique moments within the evening.',
          el: 'Το Photo Booth δημιουργεί έναν stylish χώρο γεμάτο χαρακτήρα και διασκέδαση, όπου οι καλεσμένοι σας μπορούν να αφεθούν, να φωτογραφηθούν και να δημιουργήσουν τις δικές τους μοναδικές στιγμές μέσα στη βραδιά.',
          ru: 'Photo Booth создаёт stylish пространство, полное характера и веселья, где гости могут расслабиться, сфотографироваться и создать свои уникальные моменты вечера.',
        },
        {
          en: 'More than wedding entertainment, it is an interactive photo experience that becomes a meeting point for friends and family — delivering authentic images full of personality, smiles, and emotion.',
          el: 'Περισσότερο από wedding entertainment, είναι ένα interactive photo experience που γίνεται σημείο συνάντησης για φίλους και οικογένεια και χαρίζει αυθεντικές εικόνες γεμάτες προσωπικότητα, χαμόγελα και συναίσθημα.',
          ru: 'Больше, чем wedding entertainment — это interactive photo experience, становящееся местом встречи друзей и семьи, дарящее подлинные образы, полные характера, улыбок и эмоций.',
        },
        {
          en: 'And when the evening ends, those photographs become small pieces of one great memory.',
          el: 'Και όταν η βραδιά τελειώσει, αυτές οι φωτογραφίες γίνονται μικρά κομμάτια μιας μεγάλης ανάμνησης.',
          ru: 'А когда вечер заканчивается, эти фотографии становятся маленькими частицами одного большого воспоминания.',
        },
        {
          en: 'Because the best moments are often the ones you never planned.',
          el: 'Because the best moments are often the ones you never planned.',
          ru: 'Because the best moments are often the ones you never planned.',
        },
      ],
    },
  },
  {
    id: 'cold-spark-fireworks',
    title: {
      en: 'Cold Spark Fireworks',
      el: 'Πυροτεχνήματα εδάφους',
      ru: 'Холодные искры',
    },
    detail: {
      headline: {
        en: 'Cold Spark Fireworks',
        el: 'Πυροτεχνήματα Εδάφους | Cold Spark Fireworks',
        ru: 'Холодные искры | Cold Spark Fireworks',
      },
      paragraphs: [
        {
          en: 'There are moments in a wedding that deserve a spectacular climax — the moment the music rises, the energy peaks, and the entire space fills with celebration.',
          el: 'Υπάρχουν στιγμές στον γάμο που αξίζουν μια εντυπωσιακή κορύφωση — εκείνη τη στιγμή που η μουσική ανεβαίνει, η ενέργεια εκτοξεύεται και ολόκληρος ο χώρος γεμίζει γιορτή.',
          ru: 'В свадьбе бывают моменты, заслуживающие зрелищной кульминации — когда музыка нарастает, энергия взлетает, и всё пространство наполняется праздником.',
        },
        {
          en: 'Cold Spark Fireworks create a dramatic burst of light and movement, turning the entrance, first dance, or peak of the party into a show-stopping wedding moment full of sparkle, emotion, and energy.',
          el: 'Τα Cold Spark Fireworks δημιουργούν ένα θεαματικό burst φωτός και κίνησης, μετατρέποντας την είσοδο, τον πρώτο χορό ή την κορύφωση του party σε ένα show-stopping wedding moment γεμάτο λάμψη, συναίσθημα και ενέργεια.',
          ru: 'Cold Spark Fireworks создают dramatic burst света и движения, превращая выход, первый танец или кульминацию вечеринки в show-stopping wedding moment, полный блеска, эмоций и энергии.',
        },
        {
          en: 'The effect is impressive both live and through the lens — delivering images that capture exactly what a grand celebration should feel like: joy, energy, and pure magic.',
          el: 'Το αποτέλεσμα είναι εντυπωσιακό τόσο ζωντανά όσο και στον φωτογραφικό φακό, χαρίζοντας εικόνες που αποτυπώνουν ακριβώς αυτό που πρέπει να αισθάνεται ένας μεγάλος εορτασμός: χαρά, ενέργεια και απόλυτη μαγεία.',
          ru: 'Эффект впечатляет и вживую, и в объективе — даря кадры, передающие то, чем должен ощущаться grand celebration: радость, энергию и чистую магию.',
        },
        {
          en: 'Because some moments are not made to pass quietly. They are made to make an entrance.',
          el: 'Γιατί κάποιες στιγμές δεν είναι φτιαγμένες για να περάσουν διακριτικά. They\'re made to make an entrance.',
          ru: 'Потому что некоторые моменты не созданы, чтобы пройти незаметно. They\'re made to make an entrance.',
        },
      ],
    },
  },
  {
    id: 'mobile-platter-bar',
    title: {
      en: 'Mobile Platter Bar',
      el: 'Κινητό Μπαρ με Πιατέλες',
      ru: 'Мобильный бар с плато',
    },
    detail: {
      headline: {
        en: 'Mobile Platter Bar',
        el: 'Κινητό Μπαρ με Πιατέλες | Mobile Platter Bar',
        ru: 'Мобильный бар с плато | Mobile Platter Bar',
      },
      paragraphs: [
        {
          en: 'Hospitality at a wedding is not only what is served — it is how it is offered.',
          el: 'Η φιλοξενία σε έναν γάμο δεν είναι μόνο αυτό που σερβίρεται — είναι και ο τρόπος που προσφέρεται.',
          ru: 'Гостеприимство на свадьбе — не только то, что подают, но и то, как это подают.',
        },
        {
          en: 'The Mobile Platter Bar brings a refined, dynamic culinary experience to the heart of the reception — with elegant platters that circulate among guests, creating a sense of abundance, movement, and generous hospitality.',
          el: 'Το Mobile Platter Bar φέρνει μια refined, dynamic culinary εμπειρία στο κέντρο της δεξίωσης, με elegant πιατέλες που κινούνται ανάμεσα στους καλεσμένους, δημιουργώντας αίσθηση αφθονίας, κίνησης και γενναιόδωρης φιλοξενίας.',
          ru: 'Mobile Platter Bar приносит refined, dynamic culinary experience в центр банкета — с elegant platters, которые циркулируют среди гостей, создавая ощущение изобилия, движения и щедрого гостеприимства.',
        },
        {
          en: 'From savoury selections to refined bites, the service adapts to the flow of the evening, allowing guests to enjoy exceptional flavours without interrupting the mood, conversation, or dance floor.',
          el: 'Από savoury επιλογές μέχρι refined bites, η υπηρεσία προσαρμόζεται στη ροή της βραδιάς, επιτρέποντας στους καλεσμένους να απολαύσουν exceptional γεύσεις χωρίς να διακόπτουν τη διάθεση, τη συζήτηση ή την πίστα.',
          ru: 'От savoury selections до refined bites сервис подстраивается под ритм вечера, позволяя гостям наслаждаться exceptional вкусами, не прерывая настроение, разговоры или танцпол.',
        },
        {
          en: 'Because true luxury in a wedding is not only what appears on the table. It is the experience created around it.',
          el: 'Γιατί η πραγματική πολυτέλεια σε έναν γάμο δεν είναι μόνο αυτό που εμφανίζεται στο τραπέζι. Είναι η εμπειρία που δημιουργείται γύρω του.',
          ru: 'Потому что настоящая роскошь свадьбы — не только то, что на столе. Это опыт, создаваемый вокруг него.',
        },
      ],
    },
  },
  {
    id: 'groom-suits',
    title: {
      en: 'Groom Suits',
      el: 'Κοστούμια Γαμπρού',
      ru: 'Костюмы для жениха',
    },
    detail: {
      headline: {
        en: 'Groom Suits',
        el: 'Κοστούμια Γαμπρού | Groom Suits',
        ru: 'Костюмы для жениха | Groom Suits',
      },
      paragraphs: [
        {
          en: 'The groom deserves to look just as impressive as the bride — with style that reflects his personality and the importance of the day.',
          el: 'Ο γαμπρός αξίζει να φαίνεται εξίσου εντυπωσιακός με τη νύφη — με style που αντικατοπτρίζει την προσωπικότητά του και τη σημασία της ημέρας.',
          ru: 'Жених заслуживает выглядеть столь же впечатляюще, как невеста — со style, отражающим его характер и значимость дня.',
        },
        {
          en: 'Groom Suits offer refined tailoring, premium fabrics, and a considered aesthetic that elevates the groom\'s presence from the first moment to the last photograph.',
          el: 'Τα Groom Suits προσφέρουν refined ραπτική, premium υφάσματα και μια προσεγμένη αισθητική που αναδεικνύει την παρουσία του γαμπρού από την πρώτη στιγμή μέχρι την τελευταία φωτογραφία.',
          ru: 'Groom Suits предлагают refined пошив, premium ткани и продуманную эстетику, подчёркивающую присутствие жениха от первого момента до последнего кадра.',
        },
        {
          en: 'From classic elegance to modern character, every look is designed to harmonise with the wedding\'s overall style — creating a complete, polished image that feels confident, distinctive, and truly his own.',
          el: 'Από classic elegance μέχρι modern character, κάθε look σχεδιάζεται ώστε να εναρμονίζεται με το συνολικό style του γάμου, δημιουργώντας μια ολοκληρωμένη, polished εικόνα που αισθάνεται confident, distinctive και πραγματικά δική του.',
          ru: 'От classic elegance до modern character каждый look создаётся в гармонии со style свадьбы — формируя цельный, polished образ, который ощущается confident, distinctive и по-настоящему его.',
        },
        {
          en: 'Because on this day, the groom is not just part of the celebration. He is part of the story.',
          el: 'Γιατί αυτή την ημέρα, ο γαμπρός δεν είναι απλώς μέρος της γιορτής. Είναι μέρος της ιστορίας.',
          ru: 'Потому что в этот день жених — не просто часть праздника. Он часть истории.',
        },
      ],
    },
  },
  {
    id: 'private-jet-honeymoon',
    title: {
      en: 'Private Jet Honeymoon',
      el: 'Ταξίδι του Μέλιτος με Ιδιωτικό Αεροσκάφος',
      ru: 'Медовый месяц на частном самолёте',
    },
    pageHref: '/services/air',
  },
  {
    id: 'luxury-shisha-lounge',
    title: {
      en: 'Luxury Shisha Lounge',
      el: 'Ναργιλές',
      ru: 'Лаунж с кальяном',
    },
    detail: {
      headline: {
        en: 'Luxury Shisha Lounge',
        el: 'Ναργιλές | Luxury Shisha Lounge',
        ru: 'Лаунж с кальяном | Luxury Shisha Lounge',
      },
      paragraphs: [
        {
          en: 'As the evening unfolds, create a space where your guests can relax, converse, and enjoy a different side of the wedding experience.',
          el: 'Καθώς η βραδιά εξελίσσεται, δημιουργήστε έναν χώρο όπου οι καλεσμένοι σας μπορούν να χαλαρώσουν, να συζητήσουν και να απολαύσουν μια διαφορετική πλευρά της γαμήλιας εμπειρίας.',
          ru: 'По мере развития вечера создайте пространство, где гости могут расслабиться, пообщаться и насладиться другой стороной свадебного опыта.',
        },
        {
          en: 'The Luxury Shisha Lounge adds a sophisticated lounge atmosphere to your reception — an elegant meeting point away from the rhythm of the dance floor. A distinctive setting where relaxation, company, and night-time ambience combine into a unique hospitality experience.',
          el: 'Το Luxury Shisha Lounge προσθέτει στη δεξίωσή σας μια sophisticated lounge ατμόσφαιρα, δημιουργώντας ένα elegant σημείο συνάντησης μακριά από τον ρυθμό της πίστας. Ένα ιδιαίτερο setting όπου η χαλάρωση, η παρέα και η νυχτερινή ατμόσφαιρα συνδυάζονται σε μια ξεχωριστή εμπειρία φιλοξενίας.',
          ru: 'Luxury Shisha Lounge добавляет sophisticated lounge атмосферу на банкет — elegant meeting point вдали от ритма танцпола. И distinctive setting, где расслабление, компания и ночная атмосфера сливаются в unique hospitality experience.',
        },
        {
          en: 'More than an extra amenity, it becomes an exclusive after-dark experience that adds character and an unexpected luxury touch to the evening.',
          el: 'Περισσότερο από μία επιπλέον παροχή, γίνεται ένα exclusive after-dark experience που προσθέτει χαρακτήρα και μια απρόσμενη luxury πινελιά στη βραδιά.',
          ru: 'Больше, чем дополнительная услуга — это exclusive after-dark experience, добавляющий характер и неожиданный luxury штрих вечеру.',
        },
        {
          en: 'Because an unforgettable wedding is not only made of moments that impress. It also has moments you simply want to last a little longer.',
          el: 'Γιατί ένας αξέχαστος γάμος δεν έχει μόνο στιγμές που εντυπωσιάζουν. Έχει και στιγμές που θέλεις απλώς να κρατήσουν λίγο περισσότερο.',
          ru: 'Потому что незабываемая свадьба — это не только моменты, которые впечатляют. Это и моменты, которые хочется просто продлить.',
        },
      ],
    },
  },
  {
    id: 'live-saxophone',
    title: {
      en: 'Live Saxophone',
      el: 'Ζωντανό Σαξόφωνο',
      ru: 'Живой саксофон',
    },
    detail: {
      headline: {
        en: 'Live Saxophone',
        el: 'Ζωντανό Σαξόφωνο | Live Saxophone',
        ru: 'Живой саксофон | Live Saxophone',
      },
      paragraphs: [
        {
          en: 'There are sounds that fill a space. And there are sounds that change its entire atmosphere.',
          el: 'Υπάρχουν ήχοι που γεμίζουν έναν χώρο. Και υπάρχουν ήχοι που αλλάζουν ολόκληρη την ατμόσφαιρά του.',
          ru: 'Есть звуки, которые наполняют пространство. И есть звуки, которые меняют всю его атмосферу.',
        },
        {
          en: 'Live Saxophone brings to your wedding a unique blend of elegance, sensuality, and contemporary energy. From sophisticated lounge melodies during cocktails to dynamic live sets that elevate the dance floor, the saxophone adapts to the pulse of every moment.',
          el: 'Το Live Saxophone φέρνει στον γάμο σας έναν μοναδικό συνδυασμό κομψότητας, αισθησιασμού και σύγχρονης ενέργειας. Από sophisticated lounge μελωδίες κατά τη διάρκεια του cocktail μέχρι δυναμικά live sets που απογειώνουν την πίστα, το σαξόφωνο προσαρμόζεται στον παλμό της κάθε στιγμής.',
          ru: 'Live Saxophone приносит на свадьбу unique blend элегантности, чувственности и contemporary energy. От sophisticated lounge мелодий на коктейле до dynamic live sets, поднимающих танцпол, саксофон подстраивается под pulse каждого момента.',
        },
        {
          en: 'With an impressive live presence and a distinctive sound, it creates a luxury music experience that does not simply accompany — it becomes part of the show, the atmosphere, and the memory.',
          el: 'Με εντυπωσιακή live παρουσία και χαρακτηριστικό ήχο, δημιουργεί ένα luxury music experience που δεν λειτουργεί απλώς ως μουσική συνοδεία — γίνεται μέρος του show, της ατμόσφαιρας και της ανάμνησης.',
          ru: 'С impressive live presence и distinctive звуком создаёт luxury music experience, который не просто сопровождает — он становится частью show, атмосферы и воспоминания.',
        },
        {
          en: 'Because the right music is not simply heard. It touches you, carries you away, and makes the moment unforgettable.',
          el: 'Γιατί η σωστή μουσική δεν ακούγεται απλώς. Σε αγγίζει, σε παρασύρει και κάνει τη στιγμή να μένει αξέχαστη.',
          ru: 'Потому что правильная музыка не просто слышна. Она трогает, уносит и делает момент незабываемым.',
        },
      ],
    },
  },
  {
    id: 'wedding-planning-coordination',
    title: {
      en: 'Wedding Planning & Coordination',
      el: 'Οργάνωση & Συντονισμός Γάμου',
      ru: 'Организация и координация свадьбы',
    },
    detail: {
      headline: {
        en: 'Wedding Planning & Coordination',
        el: 'Οργάνωση & Συντονισμός Γάμου | Wedding Planning & Coordination',
        ru: 'Организация и координация свадьбы | Wedding Planning & Coordination',
      },
      paragraphs: [
        {
          en: 'Your dream wedding should be a day you live — not a day you have to manage.',
          el: 'Ο γάμος των ονείρων σας πρέπει να είναι μια ημέρα που θα ζήσετε — όχι μια ημέρα που θα πρέπει να διαχειριστείτε.',
          ru: 'Свадьба мечты должна быть днём, который вы проживаете — а не днём, которым нужно управлять.',
        },
        {
          en: 'From the first idea to the final moment of the reception, Wedding Planning & Coordination brings every detail together into one complete, impeccably organised experience. Timeline, services, vendors, setup, and flow of the day are coordinated with precision so everything works exactly as designed.',
          el: 'Από την πρώτη ιδέα μέχρι την τελευταία στιγμή της δεξίωσης, το Wedding Planning & Coordination αναλαμβάνει να ενώσει κάθε λεπτομέρεια σε μία ολοκληρωμένη, άψογα οργανωμένη εμπειρία. Χρονοδιάγραμμα, υπηρεσίες, συνεργεία, στήσιμο και ροή της ημέρας συντονίζονται με ακρίβεια, ώστε όλα να λειτουργούν ακριβώς όπως έχουν σχεδιαστεί.',
          ru: 'От первой идеи до последнего момента банкета Wedding Planning & Coordination объединяет каждую деталь в одну complete, impeccably organised experience. Timeline, services, vendors, setup и flow дня координируются с precision — всё работает exactly as designed.',
        },
        {
          en: 'With central coordination, you do not need to communicate and organise dozens of different services separately. We take care of everything so you and your loved ones can truly enjoy every moment — without running around, unnecessary stress, or wasted time.',
          el: 'Με έναν κεντρικό συντονισμό, δεν χρειάζεται να επικοινωνείτε και να οργανώνετε ξεχωριστά δεκάδες διαφορετικές υπηρεσίες. Εμείς φροντίζουμε τα πάντα, ώστε εσείς και οι άνθρωποί σας να μπορείτε να απολαύσετε πραγματικά κάθε στιγμή — χωρίς τρέξιμο, περιττό άγχος και χαμένο χρόνο.',
          ru: 'С central coordination не нужно отдельно координировать десятки services. Мы берём всё на себя, чтобы вы и близкие могли truly enjoy каждый момент — без running around, unnecessary stress и wasted time.',
        },
        {
          en: 'Because true luxury is not only an impressive wedding. It is arriving on your big day and not having to think about anything — only to live it.',
          el: 'Γιατί η πραγματική πολυτέλεια δεν είναι μόνο ένας εντυπωσιακός γάμος. Είναι να φτάσετε στη μεγάλη σας ημέρα και να μην χρειάζεται να σκεφτείτε τίποτα — παρά μόνο να τη ζήσετε.',
          ru: 'Потому что настоящая роскошь — не только impressive wedding. Это прийти в свой big day и не думать ни о чём — только жить им.',
        },
      ],
    },
  },
  {
    id: 'vintage-wedding-bus',
    title: {
      en: 'Vintage Wedding Bus',
      el: 'Λεωφορειάκι Αντίκα',
      ru: 'Винтажный свадебный автобус',
    },
    detail: {
      headline: {
        en: 'Vintage Wedding Bus',
        el: 'Λεωφορειάκι Αντίκα | Vintage Wedding Bus',
        ru: 'Винтажный свадебный автобус | Vintage Wedding Bus',
      },
      paragraphs: [
        {
          en: 'Some journeys are not simply a way to reach your destination. They become part of the story you will remember.',
          el: 'Κάποιες διαδρομές δεν είναι απλώς ένας τρόπος να φτάσεις στον προορισμό σου. Γίνονται μέρος της ιστορίας που θα θυμάσαι.',
          ru: 'Некоторые пути — не просто способ добраться до места. Они становятся частью истории, которую вы будете помнить.',
        },
        {
          en: 'The Vintage Wedding Bus brings to your wedding the charm of another era — combining timeless character, romance, and a wonderful nostalgic aesthetic. With its distinctive presence, it becomes a unique element of the day and a one-of-a-kind photo backdrop that draws every eye.',
          el: 'Το Vintage Wedding Bus φέρνει στον γάμο σας τη γοητεία μιας άλλης εποχής, συνδυάζοντας διαχρονικό χαρακτήρα, ρομαντισμό και μια υπέροχη nostalgic αισθητική. Με την ιδιαίτερη παρουσία του, μετατρέπεται σε ένα ξεχωριστό στοιχείο της ημέρας και σε ένα μοναδικό φωτογραφικό σκηνικό που μαγνητίζει τα βλέμματα.',
          ru: 'Vintage Wedding Bus приносит на свадьбу charm другой эпохи — сочетая timeless character, романтику и wonderful nostalgic aesthetic. С distinctive presence он становится unique элементом дня и one-of-a-kind photo backdrop, притягивающим все взгляды.',
        },
        {
          en: 'Ideal for a memorable arrival or for sharing the journey with your loved ones, it adds personality, charm, and timeless elegance to the wedding.',
          el: 'Ιδανικό για μια memorable άφιξη ή για να μοιραστείτε τη διαδρομή με αγαπημένα σας πρόσωπα, προσθέτει στον γάμο μια νότα personality, charm & timeless elegance.',
          ru: 'Идеален для memorable arrival или совместной поездки с близкими — добавляет personality, charm и timeless elegance свадьбе.',
        },
        {
          en: 'Because at your wedding, even the journey can become a memory worth keeping forever.',
          el: 'Γιατί στον γάμο σας, ακόμη και η διαδρομή μπορεί να γίνει μια ανάμνηση που αξίζει να κρατήσετε για πάντα.',
          ru: 'Потому что на вашей свадьбе даже путь может стать воспоминанием, которое стоит хранить вечно.',
        },
      ],
    },
  },
  {
    id: 'ring-for-a-drink',
    title: {
      en: 'Ring for a Drink',
      el: 'Κουδούνι για Ποτό',
      ru: 'Колокольчик для напитка',
    },
    detail: {
      headline: {
        en: 'Ring for a Drink',
        el: 'Κουδούνι για Ποτό | Ring for a Drink',
        ru: 'Колокольчик для напитка | Ring for a Drink',
      },
      paragraphs: [
        {
          en: 'Sometimes the smallest detail becomes the most entertaining surprise of the evening.',
          el: 'Μερικές φορές, η πιο μικρή λεπτομέρεια γίνεται η πιο διασκεδαστική έκπληξη της βραδιάς.',
          ru: 'Иногда самая маленькая деталь становится самым entertaining surprise вечера.',
        },
        {
          en: 'Ring for a Drink adds a playful yet elegant touch to your reception — inviting guests to ring the bell and enjoy their drink in a way that turns even service into an experience.',
          el: 'Το Ring for a Drink προσθέτει μια playful αλλά elegant πινελιά στη δεξίωσή σας, προσκαλώντας τους καλεσμένους να χτυπήσουν το κουδούνι και να απολαύσουν το ποτό τους με έναν τρόπο που μετατρέπει ακόμη και το σερβίρισμα σε εμπειρία.',
          ru: 'Ring for a Drink добавляет playful yet elegant штрих на банкет — приглашая гостей ring the bell и насладиться напитком так, что даже service становится experience.',
        },
        {
          en: 'A small interactive detail that creates smiles, spontaneous moments, and quickly becomes one of the evening\'s favourite highlights.',
          el: 'Ένα μικρό interactive detail που δημιουργεί χαμόγελα, αυθόρμητες στιγμές και γίνεται γρήγορα ένα από τα πιο αγαπημένα σημεία της βραδιάς.',
          ru: 'Маленький interactive detail, создающий smiles, spontaneous moments — и быстро становящийся одним из favourite highlights вечера.',
        },
        {
          en: 'Because a truly unforgettable wedding does not need only big impressive moments. It also needs small surprises no one expects — but everyone wants to try.',
          el: 'Γιατί ένας πραγματικά αξέχαστος γάμος δεν χρειάζεται μόνο μεγάλες εντυπωσιακές στιγμές. Χρειάζεται και μικρές εκπλήξεις που κανείς δεν περιμένει — αλλά όλοι θέλουν να δοκιμάσουν.',
          ru: 'Потому что truly unforgettable wedding нуждается не только в big impressive moments. Нужны и small surprises, которых никто не ждёт — но все хотят попробовать.',
        },
      ],
    },
  },
  {
    id: 'wedding-photo-video',
    title: {
      en: 'Wedding Photography & Videography',
      el: 'Φωτογράφιση & Βιντεοσκόπηση Γάμου',
      ru: 'Свадебная фото- и видеосъёмка',
    },
    detail: {
      headline: {
        en: 'Wedding Photography & Videography',
        el: 'Φωτογράφιση & Βιντεοσκόπηση Γάμου | Wedding Photography & Videography',
        ru: 'Свадебная фото- и видеосъёмка | Wedding Photography & Videography',
      },
      paragraphs: [
        {
          en: 'Your wedding day will pass faster than you imagine. Its images, however, can remain forever.',
          el: 'Η ημέρα του γάμου σας θα περάσει πιο γρήγορα απ’ όσο φαντάζεστε. Οι εικόνες της, όμως, μπορούν να μείνουν για πάντα.',
          ru: 'День свадьбы пройдёт быстрее, чем вы думаете. Но его images могут остаться навсегда.',
        },
        {
          en: 'Wedding Photography & Videography does not simply record what happened. It tells your story through glances, touches, smiles, and those spontaneous moments that often happen without you even noticing.',
          el: 'Το Wedding Photography & Videography δεν αποτυπώνει απλώς όσα συνέβησαν. Αφηγείται την ιστορία σας μέσα από βλέμματα, αγγίγματα, χαμόγελα και εκείνες τις αυθόρμητες στιγμές που πολλές φορές συμβαίνουν χωρίς καν να τις αντιληφθείτε.',
          ru: 'Wedding Photography & Videography не просто фиксирует события. Рассказывает вашу историю через glances, touches, smiles и spontaneous moments, которые часто происходят незаметно.',
        },
        {
          en: 'With elegant aesthetic, cinematic approach, and attention to detail, we create a timeless visual record of your day — from the anticipation of preparation and the emotion of the ceremony to the energy and sparkle of the evening.',
          el: 'Με elegant αισθητική, cinematic προσέγγιση και προσοχή στη λεπτομέρεια, δημιουργούμε ένα διαχρονικό οπτικό αποτύπωμα της ημέρας σας — από την προσμονή της προετοιμασίας και τη συγκίνηση της τελετής μέχρι την ενέργεια και τη λάμψη της βραδιάς.',
          ru: 'С elegant aesthetic, cinematic approach и attention to detail создаём timeless visual record вашего дня — от anticipation подготовки и emotion церемонии до energy и sparkle вечера.',
        },
        {
          en: 'Because years later, you will not simply want to remember what your wedding looked like. You will want to feel again exactly as you did that day.',
          el: 'Γιατί χρόνια μετά, δεν θα θέλετε απλώς να θυμηθείτε πώς έμοιαζε ο γάμος σας. Θα θέλετε να αισθανθείτε ξανά ακριβώς όπως εκείνη την ημέρα.',
          ru: 'Потому что спустя годы вы захотите не просто вспомнить, как выглядела свадьба. Вы захотите снова feel exactly as you did that day.',
        },
      ],
    },
  },
  {
    id: 'confetti-machine',
    title: {
      en: 'Confetti Machine',
      el: 'Μηχανή Κομφετί',
      ru: 'Машина конфетти',
    },
    detail: {
      headline: {
        en: 'Confetti Machine',
        el: 'Μηχανή Κομφετί | Confetti Machine',
        ru: 'Машина конфетти | Confetti Machine',
      },
      paragraphs: [
        {
          en: 'There are moments that deserve an impressive climax — when the music rises, the energy explodes, and the entire space fills with celebration.',
          el: 'Υπάρχουν στιγμές που αξίζουν μια εντυπωσιακή κορύφωση — εκείνη τη στιγμή που η μουσική ανεβαίνει, η ενέργεια εκτοξεύεται και ολόκληρος ο χώρος γεμίζει γιορτή.',
          ru: 'Бывают моменты, заслуживающие impressive climax — когда музыка нарастает, energy explodes, и всё пространство наполняется праздником.',
        },
        {
          en: 'The Confetti Machine creates a dramatic burst of confetti, turning the entrance, first dance, or peak of the party into a show-stopping wedding moment full of movement, sparkle, and emotion.',
          el: 'Η Confetti Machine δημιουργεί ένα θεαματικό burst από κομφετί, μετατρέποντας την είσοδο, τον πρώτο χορό ή την κορύφωση του party σε ένα show-stopping wedding moment γεμάτο κίνηση, λάμψη και συναίσθημα.',
          ru: 'Confetti Machine создаёт dramatic burst confetti, превращая entrance, first dance или peak party в show-stopping wedding moment, полный movement, sparkle и emotion.',
        },
        {
          en: 'The result is impressive both live and through the lens — delivering images that capture exactly what a grand celebration should be: joy, energy, and pure magic.',
          el: 'Το αποτέλεσμα είναι εντυπωσιακό τόσο ζωντανά όσο και στον φωτογραφικό φακό, χαρίζοντας εικόνες που αποτυπώνουν ακριβώς αυτό που πρέπει να είναι ένας μεγάλος εορτασμός: χαρά, ενέργεια και απόλυτη μαγεία.',
          ru: 'Результат impressive и live, и в объективе — кадры передают exactly what a grand celebration should be: joy, energy и pure magic.',
        },
        {
          en: 'Because some moments are not made to pass quietly. They\'re made to make an entrance.',
          el: 'Γιατί κάποιες στιγμές δεν είναι φτιαγμένες για να περάσουν διακριτικά. They\'re made to make an entrance.',
          ru: 'Потому что некоторые моменты не созданы, чтобы пройти незаметно. They\'re made to make an entrance.',
        },
      ],
    },
  },
  {
    id: '3d-couple-figurines',
    title: {
      en: '3D Couple Figurines',
      el: 'Τρισδιάστατες Φιγούρες Ζευγαριού',
      ru: '3D-фигурки пары',
    },
    detail: {
      headline: {
        en: '3D Couple Figurines',
        el: 'Τρισδιάστατες Φιγούρες Ζευγαριού | 3D Couple Figurines',
        ru: '3D-фигурки пары | 3D Couple Figurines',
      },
      paragraphs: [
        {
          en: 'Your story is unique. Why should the detail that represents you be any less?',
          el: 'Η ιστορία σας είναι μοναδική. Γιατί να μην είναι μοναδική και η λεπτομέρεια που σας αντιπροσωπεύει;',
          ru: 'Ваша история unique. Почему detail, который вас представляет, должен быть иным?',
        },
        {
          en: '3D Couple Figurines are created inspired by you — transforming the couple into an impressive three-dimensional creation with personal character. A contemporary, distinctive touch that can be part of the wedding décor and simultaneously a special keepsake of the big day.',
          el: 'Οι 3D Couple Figurines δημιουργούνται με έμπνευση από εσάς, μετατρέποντας το ζευγάρι σε μια εντυπωσιακή τρισδιάστατη δημιουργία με προσωπικό χαρακτήρα. Μια σύγχρονη και ιδιαίτερη πινελιά που μπορεί να αποτελεί μέρος της γαμήλιας διακόσμησης και ταυτόχρονα ένα ξεχωριστό αναμνηστικό της μεγάλης ημέρας.',
          ru: '3D Couple Figurines создаются inspired by you — превращая пару в impressive three-dimensional creation с personal character. Contemporary, distinctive touch — часть wedding décor и special keepsake big day.',
        },
        {
          en: 'More than a decorative element, it is a small work dedicated to your story — personal, original, and made to stay with you long after the celebration ends.',
          el: 'Περισσότερο από ένα διακοσμητικό στοιχείο, είναι ένα μικρό έργο αφιερωμένο στη δική σας ιστορία — προσωπικό, πρωτότυπο και δημιουργημένο για να μείνει μαζί σας πολύ μετά το τέλος της γιορτής.',
          ru: 'Больше decorative element — small work, dedicated to your story: personal, original, made to stay with you long after the celebration ends.',
        },
        {
          en: 'Because the most beautiful details of a wedding are those that could belong to no one else. Created from you. Made only for you.',
          el: 'Γιατί οι πιο όμορφες λεπτομέρειες ενός γάμου είναι εκείνες που δεν θα μπορούσαν να ανήκουν σε κανέναν άλλον. Created from you. Made only for you.',
          ru: 'Потому что самые beautiful details свадьбы — те, что could belong to no one else. Created from you. Made only for you.',
        },
      ],
    },
  },
  {
    id: 'professional-wedding-dj',
    title: {
      en: 'Professional Wedding DJ',
      el: 'Επαγγελματίας DJ',
      ru: 'Профессиональный свадебный DJ',
    },
    detail: {
      headline: {
        en: 'Professional Wedding DJ',
        el: 'Επαγγελματίας DJ | Professional Wedding DJ',
        ru: 'Профессиональный свадебный DJ | Professional Wedding DJ',
      },
      paragraphs: [
        {
          en: 'The right music does not simply fill the dance floor. It creates the pulse of the entire evening.',
          el: 'Η σωστή μουσική δεν γεμίζει απλώς την πίστα. Δημιουργεί τον παλμό ολόκληρης της βραδιάς.',
          ru: 'Правильная музыка не просто наполняет танцпол. Она создаёт pulse всего вечера.',
        },
        {
          en: 'The Professional Wedding DJ reads the atmosphere, feels the energy of the guests, and creates the musical flow that guides the celebration from the first elegant moments to the ultimate wedding party.',
          el: 'Ο Professional Wedding DJ διαβάζει την ατμόσφαιρα, αισθάνεται την ενέργεια των καλεσμένων και δημιουργεί τη μουσική ροή που οδηγεί τη γιορτή από τις πρώτες elegant στιγμές μέχρι το απόλυτο wedding party.',
          ru: 'Professional Wedding DJ reads atmosphere, feels energy гостей и создаёт musical flow — от first elegant moments до ultimate wedding party.',
        },
        {
          en: 'With carefully selected music, seamless transitions, and the ability to know when a moment needs emotion and when it needs intensity, the reception becomes a dynamic music experience where every generation finds its rhythm and the dance floor stays alive.',
          el: 'Με προσεκτικά επιλεγμένη μουσική, άψογες μεταβάσεις και την ικανότητα να γνωρίζει πότε η στιγμή χρειάζεται συναίσθημα και πότε ένταση, μετατρέπει τη δεξίωση σε ένα dynamic music experience όπου κάθε γενιά βρίσκει τον δικό της ρυθμό και η πίστα παραμένει ζωντανή.',
          ru: 'С carefully selected music, seamless transitions и умением понять, когда moment needs emotion, а когда intensity, банкет становится dynamic music experience — каждое поколение находит rhythm, танцпол остаётся alive.',
        },
        {
          en: 'Because an exceptional DJ does not simply play your favourite songs. They create the evening no one wants to end.',
          el: 'Γιατί ένας εξαιρετικός DJ δεν παίζει απλώς τα αγαπημένα σας τραγούδια. Δημιουργεί τη βραδιά που κανείς δεν θέλει να τελειώσει.',
          ru: 'Потому что exceptional DJ не просто играет favourite songs. Он создаёт evening, который no one wants to end.',
        },
      ],
    },
  },
  {
    id: 'live-setup-cake-100cm',
    title: {
      en: '100 cm Live-Setup Cake',
      el: 'Τούρτα 100 εκ. με Ζωντανό Στήσιμο',
      ru: 'Торт 100 см с живой сборкой',
    },
    detail: {
      headline: {
        en: '100 cm Live-Setup Cake',
        el: 'Τούρτα 100 εκ. με Ζωντανό Στήσιμο | 100 cm Live-Setup Cake',
        ru: 'Торт 100 см с живой сборкой | 100 cm Live-Setup Cake',
      },
      paragraphs: [
        {
          en: 'It is not simply a wedding cake. It is an edible showpiece created before the eyes of your guests.',
          el: 'Δεν είναι απλώς μια γαμήλια τούρτα. Είναι ένα edible showpiece που δημιουργείται μπροστά στα μάτια των καλεσμένων σας.',
          ru: 'Это не просто wedding cake. Это edible showpiece, создаваемый before the eyes of your guests.',
        },
        {
          en: 'With an impressive 100 cm diameter, the cake is assembled and completed live at the reception — turning its preparation into part of the experience itself.',
          el: 'Με εντυπωσιακή διάμετρο 100 εκατοστών, η τούρτα στήνεται και ολοκληρώνεται live στον χώρο της δεξίωσης, μετατρέποντας την προετοιμασία της σε μέρος της ίδιας της εμπειρίας.',
          ru: 'С impressive diameter 100 cm торт assembled and completed live на банкете — preparation становится part of the experience itself.',
        },
        {
          en: 'The presentation, scale, and final decoration create a spectacular centerpiece that draws every eye before the moment of cutting even arrives.',
          el: 'Η παρουσίαση, η κλίμακα και η τελική διακόσμηση δημιουργούν ένα spectacular centerpiece που μαγνητίζει τα βλέμματα πριν ακόμη έρθει η στιγμή της κοπής.',
          ru: 'Presentation, scale и final decoration создают spectacular centerpiece, притягивающий взгляды ещё до moment of cutting.',
        },
        {
          en: 'More than dessert, it is a statement of creation, flavour, and spectacle — a signature moment designed to impress guests and be captured uniquely on camera.',
          el: 'Περισσότερο από dessert, είναι ένα statement δημιουργίας, γεύσης και θεάματος — μια signature στιγμή σχεδιασμένη για να εντυπωσιάσει τους καλεσμένους και να αποτυπωθεί μοναδικά στον φωτογραφικό φακό.',
          ru: 'Больше dessert — statement creation, flavour и spectacle: signature moment, designed to impress guests и be captured uniquely on camera.',
        },
        {
          en: 'Because at a truly distinctive wedding, even the cake can become part of the show.',
          el: 'Γιατί σε έναν πραγματικά ξεχωριστό γάμο, ακόμη και η τούρτα μπορεί να γίνει μέρος του show.',
          ru: 'Потому что на truly distinctive wedding даже cake может стать part of the show.',
        },
      ],
    },
  },
  {
    id: 'home-security',
    title: {
      en: 'Home Security',
      el: 'Φρουρός Ασφάλειας Κατοικίας',
      ru: 'Охрана дома',
    },
    detail: {
      headline: {
        en: 'Home Security',
        el: 'Φρουρός Ασφάλειας Κατοικίας | Home Security',
        ru: 'Охрана дома | Home Security',
      },
      paragraphs: [
        {
          en: 'On your wedding day, your mind should be on the moments you are living — not on what you left behind.',
          el: 'Την ημέρα του γάμου σας, το μυαλό σας πρέπει να βρίσκεται στις στιγμές που ζείτε — όχι σε όσα αφήσατε πίσω.',
          ru: 'В день свадьбы ваши мысли должны быть о moments you are living — а не о том, что вы left behind.',
        },
        {
          en: 'The Home Security service offers discreet professional guarding of your home during the wedding, so you can enjoy your most important day with greater peace of mind and a sense of security.',
          el: 'Η υπηρεσία Home Security προσφέρει διακριτική επαγγελματική φύλαξη της κατοικίας σας κατά τη διάρκεια του γάμου, ώστε να μπορείτε να απολαύσετε τη σημαντικότερη ημέρα σας με μεγαλύτερη ηρεμία και αίσθηση ασφάλειας.',
          ru: 'Home Security service предлагает discreet professional guarding вашего дома во время свадьбы — чтобы вы могли enjoy most important day с greater peace of mind и sense of security.',
        },
        {
          en: 'A professional guard remains on site for the agreed period, providing surveillance and a controlled presence while you are at the ceremony and reception with the people you love.',
          el: 'Ένας επαγγελματίας φρουρός παραμένει στον χώρο για το συμφωνημένο χρονικό διάστημα, προσφέροντας επιτήρηση και ελεγχόμενη παρουσία, ενώ εσείς βρίσκεστε στην τελετή και τη δεξίωση μαζί με τους ανθρώπους που αγαπάτε.',
          ru: 'Professional guard остаётся on site на agreed period — surveillance и controlled presence, пока вы на ceremony и reception с людьми, которых любите.',
        },
        {
          en: 'Because true luxury is not only what we add to your big day. It is also the peace of mind to enjoy it without unnecessary worry.',
          el: 'Γιατί η πραγματική πολυτέλεια δεν είναι μόνο όσα προσθέτουμε στη μεγάλη σας ημέρα. Είναι και η ηρεμία να μπορείτε να την απολαύσετε χωρίς περιττές ανησυχίες.',
          ru: 'Потому что true luxury — не только то, что мы добавляем к big day. Это и peace of mind enjoy it без unnecessary worry.',
        },
      ],
    },
  },
  {
    id: 'yacht-bachelor-hen',
    title: {
      en: 'Yacht Bachelor & Hen Party',
      el: 'Yacht Bachelor & Hen Party',
      ru: 'Мальчишник и девичник на яхте',
    },
    detail: {
      headline: {
        en: 'Yacht Bachelor & Hen Party',
        el: 'Yacht Bachelor & Hen Party',
        ru: 'Мальчишник и девичник на яхте | Yacht Bachelor & Hen Party',
      },
      paragraphs: [
        {
          en: 'Before the “I do”, there is one more story worth writing — at sea.',
          el: 'Πριν από το “I do”, υπάρχει μία ακόμη ιστορία που αξίζει να γραφτεί — στη θάλασσα.',
          ru: 'Перед «I do» есть ещё одна история, которую стоит написать — на море.',
        },
        {
          en: 'The Yacht Bachelor & Hen Party turns the pre-wedding celebration into an exclusive experience on the water — combining privacy, summer luxury, music, and endless moments with the people you want beside you before the big day.',
          el: 'Το Yacht Bachelor & Hen Party μετατρέπει το pre-wedding celebration σε μια exclusive εμπειρία πάνω στο νερό, συνδυάζοντας ιδιωτικότητα, καλοκαιρινή πολυτέλεια, μουσική και ατελείωτες στιγμές με τους ανθρώπους που θέλετε δίπλα σας πριν από τη μεγάλη ημέρα.',
          ru: 'Yacht Bachelor & Hen Party превращает pre-wedding celebration в exclusive experience на воде — с privacy, summer luxury, музыкой и endless moments с людьми, которых вы хотите рядом перед big day.',
        },
        {
          en: 'With endless blue as the backdrop, the yacht becomes your private floating celebration — ideal for champagne moments, music, swims, photographs, and an unforgettable party under the Mediterranean sun.',
          el: 'Με το απέραντο γαλάζιο ως σκηνικό, το yacht γίνεται το δικό σας private floating celebration — ιδανικό για champagne moments, μουσική, βουτιές, φωτογραφίες και ένα unforgettable party κάτω από τον μεσογειακό ήλιο.',
          ru: 'На фоне endless blue yacht становится вашим private floating celebration — идеален для champagne moments, музыки, swims, фотографий и unforgettable party под средиземным солнцем.',
        },
        {
          en: 'It is not simply a bachelor or hen party. It\'s your last celebration before forever — and it deserves an extraordinary setting.',
          el: 'Δεν είναι απλώς ένα bachelor ή hen party. It\'s your last celebration before forever — and it deserves an extraordinary setting.',
          ru: 'Это не просто bachelor или hen party. It\'s your last celebration before forever — and it deserves an extraordinary setting.',
        },
      ],
    },
  },
  {
    id: 'florals-decoration',
    title: {
      en: 'Florals & Decoration',
      el: 'Ανθοστολισμός & Διακόσμηση',
      ru: 'Цветы и декор',
    },
    detail: {
      headline: {
        en: 'Florals & Decoration',
        el: 'Ανθοστολισμός & Διακόσμηση | Florals & Decoration',
        ru: 'Цветы и декор | Florals & Decoration',
      },
      paragraphs: [
        {
          en: 'This is where a beautiful space is transformed into your own world.',
          el: 'Εδώ είναι που ένας όμορφος χώρος μεταμορφώνεται σε τον δικό σας κόσμο.',
          ru: 'Именно здесь beautiful space превращается в your own world.',
        },
        {
          en: 'Florals & Decoration is the artistic signature of your wedding. From the first floral arrangement to the last candle, every element is designed to create one unified, refined aesthetic that reflects your personal style and the atmosphere you dream of.',
          el: 'Το Florals & Decoration αποτελεί την καλλιτεχνική υπογραφή του γάμου σας. Από την πρώτη ανθοσύνθεση μέχρι το τελευταίο κερί, κάθε στοιχείο σχεδιάζεται ώστε να δημιουργεί μία ενιαία, εκλεπτυσμένη αισθητική που αντικατοπτρίζει το προσωπικό σας ύφος και την ατμόσφαιρα που ονειρεύεστε.',
          ru: 'Florals & Decoration — artistic signature вашей свадьбы. От first floral arrangement до last candle каждый элемент создаёт unified, refined aesthetic, отражающую personal style и atmosphere вашей мечты.',
        },
        {
          en: 'Impressive floral installations, elegant tablescapes, atmospheric lighting, and carefully curated details combine to create a breathtaking wedding setting that does not simply impress at first glance — it reveals new details with every look.',
          el: 'Εντυπωσιακές floral installations, elegant tablescapes, ατμοσφαιρικός φωτισμός και carefully curated details συνδυάζονται για να δημιουργήσουν ένα breathtaking wedding setting που δεν εντυπωσιάζει απλώς με την πρώτη ματιά — αποκαλύπτει νέες λεπτομέρειες σε κάθε βλέμμα.',
          ru: 'Impressive floral installations, elegant tablescapes, atmospheric lighting и carefully curated details создают breathtaking wedding setting — не только impress at first glance, но и reveal new details с каждым взглядом.',
        },
        {
          en: 'Because for us, decoration is not simply flowers and beautiful objects. It is the art of transforming a space into the setting of your love story.',
          el: 'Γιατί για εμάς, η διακόσμηση δεν είναι απλώς λουλούδια και όμορφα αντικείμενα. Είναι η τέχνη να μετατρέπουμε έναν χώρο στο σκηνικό της δικής σας ιστορίας αγάπης.',
          ru: 'Потому что для нас decoration — не просто flowers и beautiful objects. Это art превращения space в setting вашей love story.',
        },
      ],
    },
  },
  {
    id: 'audio-guest-book',
    title: {
      en: 'Audio Guest Book',
      el: 'Ηχητικό & βίντεο Βιβλίο Ευχών',
      ru: 'Аудиокнига пожеланий гостей',
    },
    detail: {
      headline: {
        en: 'Audio & Video Guest Book',
        el: 'Ηχητικό & Βίντεο Βιβλίο Ευχών | Audio & Video Guest Book',
        ru: 'Аудио- и видеокнига пожеланий | Audio & Video Guest Book',
      },
      paragraphs: [
        {
          en: 'Some wishes are too beautiful to remain only written. They deserve to be heard again — the voices, the laughter, and the emotion of the people who were there.',
          el: 'Κάποιες ευχές είναι πολύ όμορφες για να μείνουν μόνο γραμμένες. Αξίζει να ακούσετε ξανά τις φωνές, τα γέλια και το συναίσθημα των ανθρώπων που ήταν εκεί.',
          ru: 'Некоторые wishes слишком beautiful, чтобы остаться только written. Стоит снова услышать voices, laughter и emotion людей, которые были there.',
        },
        {
          en: 'The Audio & Video Guest Book transforms the traditional guest book into a living, personal experience. Your guests can leave their own audio or video wishes, spontaneous messages, and small confessions that capture the true feeling of the day.',
          el: 'Το Audio & Video Guest Book μετατρέπει το παραδοσιακό βιβλίο ευχών σε μια ζωντανή, προσωπική εμπειρία. Οι καλεσμένοι σας μπορούν να αφήσουν τις δικές τους ηχητικές ή βιντεοσκοπημένες ευχές, αυθόρμητα μηνύματα και μικρές εξομολογήσεις που αποτυπώνουν το πραγματικό συναίσθημα της ημέρας.',
          ru: 'Audio & Video Guest Book превращает traditional guest book в living, personal experience. Гости могут оставить audio или video wishes, spontaneous messages и small confessions, передающие true feeling дня.',
        },
        {
          en: 'Years later, you will not simply read what they wished you. You will hear their voice again, see their smile, and return for a moment to that evening.',
          el: 'Χρόνια αργότερα, δεν θα διαβάζετε απλώς τι σας ευχήθηκαν. Θα ακούτε ξανά τη φωνή τους, θα βλέπετε το χαμόγελό τους και θα επιστρέφετε για λίγο εκείνη τη βραδιά.',
          ru: 'Years later вы не просто прочитаете, что вам wished. Вы снова услышите their voice, увидите their smile и на мгновение вернётесь в that evening.',
        },
        {
          en: 'Because photographs keep the images. But voices keep the people close to us.',
          el: 'Γιατί οι φωτογραφίες κρατούν τις εικόνες. Οι φωνές, όμως, κρατούν τους ανθρώπους κοντά μας.',
          ru: 'Потому что photographs keep the images. Но voices keep the people close to us.',
        },
      ],
    },
  },
  {
    id: 'draft-beer-station',
    title: {
      en: 'Draft Beer Station',
      el: 'Βαρελίσια Μπύρα',
      ru: 'Станция разливного пива',
    },
    detail: {
      headline: {
        en: 'Draft Beer Station',
        el: 'Βαρελίσια Μπύρα | Draft Beer Station',
        ru: 'Станция разливного пива | Draft Beer Station',
      },
      paragraphs: [
        {
          en: 'Some of the best moments of a celebration begin very simply: with good company and a glass of freshly poured beer.',
          el: 'Μερικές από τις καλύτερες στιγμές μιας γιορτής ξεκινούν πολύ απλά: με καλή παρέα και ένα ποτήρι φρεσκοσερβιρισμένης μπύρας.',
          ru: 'Some of the best moments праздника начинаются very simply: с good company и glass freshly poured beer.',
        },
        {
          en: 'The Draft Beer Station adds a stylish, relaxed hospitality point to your reception — where guests can enjoy chilled draft beer freshly served throughout the evening.',
          el: 'Το Draft Beer Station προσθέτει στη δεξίωσή σας ένα stylish και χαλαρό σημείο φιλοξενίας, όπου οι καλεσμένοι μπορούν να απολαμβάνουν παγωμένη βαρελίσια μπύρα φρεσκοσερβιρισμένη καθ’ όλη τη διάρκεια της βραδιάς.',
          ru: 'Draft Beer Station добавляет stylish, relaxed hospitality point на банкет — где гости наслаждаются chilled draft beer, freshly served весь вечер.',
        },
        {
          en: 'With beautiful presentation and a social character, it becomes an effortlessly cool wedding experience that fits perfectly into the more relaxed moments of the celebration and adds one more option of enjoyment for your guests.',
          el: 'Με όμορφη παρουσίαση και social χαρακτήρα, γίνεται ένα effortlessly cool wedding experience που ταιριάζει ιδανικά στις πιο χαλαρές στιγμές της γιορτής και προσθέτει ακόμη μία επιλογή απόλαυσης για τους καλεσμένους σας.',
          ru: 'С beautiful presentation и social character это effortlessly cool wedding experience — идеально для relaxed moments праздника и ещё one more option enjoyment для гостей.',
        },
        {
          en: 'Because luxury does not always need to be formal. Sometimes it is simply enjoying exactly what you want, at the right moment.',
          el: 'Γιατί η πολυτέλεια δεν χρειάζεται πάντα να είναι επίσημη. Μερικές φορές, είναι απλώς να απολαμβάνεις ακριβώς αυτό που θέλεις, τη σωστή στιγμή.',
          ru: 'Потому что luxury не always needs to be formal. Sometimes это simply enjoying exactly what you want, at the right moment.',
        },
      ],
    },
  },
  {
    id: 'first-dance-choreography',
    title: {
      en: 'First Dance Choreography',
      el: 'Χορογραφία Πρώτου Χορού',
      ru: 'Хореография первого танца',
    },
    detail: {
      headline: {
        en: 'First Dance Choreography',
        el: 'Χορογραφία Πρώτου Χορού | First Dance Choreography',
        ru: 'Хореография первого танца | First Dance Choreography',
      },
      paragraphs: [
        {
          en: 'For a few minutes, the music begins, the lights dim, and the whole world around you seems to disappear. It is your first dance as a married couple.',
          el: 'Για λίγα λεπτά, η μουσική ξεκινά, τα φώτα χαμηλώνουν και ολόκληρος ο κόσμος γύρω σας μοιάζει να εξαφανίζεται. Είναι ο πρώτος σας χορός ως παντρεμένο ζευγάρι.',
          ru: 'На несколько минут музыка начинается, lights dim, и весь мир вокруг seems to disappear. Это your first dance as a married couple.',
        },
        {
          en: 'First Dance Choreography is created exclusively around you — your song, your personality, and the way you want to live this unique moment. From discreetly elegant steps to a more impressive performance, the choreography is designed so you feel natural, comfortable, and full of confidence.',
          el: 'Το First Dance Choreography δημιουργείται αποκλειστικά γύρω από εσάς — το τραγούδι σας, την προσωπικότητά σας και τον τρόπο που θέλετε να ζήσετε αυτή τη μοναδική στιγμή. Από διακριτικά elegant βήματα μέχρι μια πιο εντυπωσιακή performance, η χορογραφία σχεδιάζεται ώστε να αισθάνεστε φυσικοί, άνετοι και γεμάτοι αυτοπεποίθηση.',
          ru: 'First Dance Choreography создаётся exclusively around you — your song, personality и way you want to live this unique moment. От discreetly elegant steps до more impressive performance — choreography designed, чтобы вы felt natural, comfortable и full of confidence.',
        },
        {
          en: 'You do not need to be dancers. You simply need to be the two of you. We make sure every movement highlights your connection and turns your first dance into a moment full of emotion and cinematic beauty.',
          el: 'Δεν χρειάζεται να είστε χορευτές. Χρειάζεται απλώς να είστε εσείς οι δύο. Εμείς φροντίζουμε ώστε κάθε κίνηση να αναδεικνύει τη σύνδεσή σας και να μετατρέπει τον πρώτο σας χορό σε μια στιγμή γεμάτη συναίσθημα και κινηματογραφική ομορφιά.',
          ru: 'You do not need to be dancers. You simply need to be the two of you. Мы ensure every movement highlights your connection и turns first dance в moment full of emotion и cinematic beauty.',
        },
        {
          en: 'Because your first dance is not a performance for the guests. It is the first time you dance together in the new chapter of your life.',
          el: 'Γιατί ο πρώτος σας χορός δεν είναι μια παράσταση για τους καλεσμένους. Είναι η πρώτη φορά που χορεύετε μαζί στο καινούργιο κεφάλαιο της ζωής σας.',
          ru: 'Потому что first dance — не performance for the guests. Это first time you dance together в new chapter вашей жизни.',
        },
      ],
    },
  },
  {
    id: 'dancing-on-the-clouds',
    title: {
      en: 'Dancing on the Clouds',
      el: 'Χορός στα Σύννεφα',
      ru: 'Танец на облаках',
    },
    detail: {
      headline: {
        en: 'Dancing on the Clouds',
        el: 'Χορός στα Σύννεφα | Dancing on the Clouds',
        ru: 'Танец на облаках | Dancing on the Clouds',
      },
      paragraphs: [
        {
          en: 'For a few minutes, everything around you fades away. Only the music, your glances, and the feeling that you are truly dancing on the clouds remain.',
          el: 'Για λίγα λεπτά, όλα γύρω σας χάνονται. Μένουν μόνο η μουσική, τα βλέμματά σας και η αίσθηση ότι χορεύετε πραγματικά πάνω στα σύννεφα.',
          ru: 'На несколько минут всё вокруг fades away. Остаются only music, your glances и feeling, что you are truly dancing on the clouds.',
        },
        {
          en: 'Dancing on the Clouds transforms your first dance into a dreamy, cinematic moment as a soft veil of low fog embraces the dance floor and creates the illusion that you are floating above the clouds.',
          el: 'Το Dancing on the Clouds μεταμορφώνει τον πρώτο σας χορό σε μια ονειρική, κινηματογραφική στιγμή, καθώς ένα απαλό πέπλο χαμηλής ομίχλης αγκαλιάζει την πίστα και δημιουργεί την ψευδαίσθηση ότι αιωρείστε πάνω από τα σύννεφα.',
          ru: 'Dancing on the Clouds transforms first dance в dreamy, cinematic moment — soft veil low fog обнимает dance floor и создаёт illusion, что you are floating above the clouds.',
        },
        {
          en: 'Elegant, romantic, and breathtakingly photogenic, it creates a fairytale wedding moment that impresses guests and delivers unique images for your photography and wedding film.',
          el: 'Elegant, romantic και breathtakingly photogenic, δημιουργεί ένα fairytale wedding moment που εντυπωσιάζει τους καλεσμένους και χαρίζει μοναδικές εικόνες στη φωτογράφιση και το wedding film σας.',
          ru: 'Elegant, romantic и breathtakingly photogenic — fairytale wedding moment, impressing guests и delivering unique images для photography и wedding film.',
        },
        {
          en: 'It is not simply a special effect. It is the setting for one of the most emotional moments of your day. Because your first dance should feel exactly like love does — as if you\'re walking on air.',
          el: 'Δεν είναι απλώς ένα special effect. Είναι το σκηνικό για μία από τις πιο συναισθηματικές στιγμές της ημέρας σας. Because your first dance should feel exactly like love does — as if you\'re walking on air.',
          ru: 'Это не simply special effect. Это setting для one of the most emotional moments вашего дня. Because your first dance should feel exactly like love does — as if you\'re walking on air.',
        },
      ],
    },
  },
  {
    id: 'traditional-wedding-preparations',
    title: {
      en: 'Traditional Wedding Preparations',
      el: 'Παραδοσιακά Αλλάματα με Βιολάρηδες',
      ru: 'Традиционные свадебные приготовления',
    },
    detail: {
      headline: {
        en: 'Traditional Wedding Preparations',
        el: 'Παραδοσιακά Αλλάματα με Βιολάρηδες | Traditional Wedding Preparations',
        ru: 'Традиционные свадебные приготовления | Traditional Wedding Preparations',
      },
      paragraphs: [
        {
          en: 'Before the ceremony, there is a moment deeply rooted in Cypriot tradition. The Allamata — where family, music, and emotion become one.',
          el: 'Πριν από την τελετή, υπάρχει μια στιγμή βαθιά ριζωμένη στην κυπριακή παράδοση. Τα Αλλάματα — εκεί όπου η οικογένεια, η μουσική και η συγκίνηση γίνονται ένα.',
          ru: 'Перед ceremony есть moment, deeply rooted в кипрской tradition. Allamata — где family, music и emotion become one.',
        },
        {
          en: 'With the live accompaniment of traditional violinists, the preparation of the bride and groom becomes an authentic ritual full of melodies, blessings, smiles, and emotion. The people you love gather around you and take part in a custom passed from generation to generation.',
          el: 'Με τη ζωντανή συνοδεία παραδοσιακών βιολάρηδων, η προετοιμασία της νύφης και του γαμπρού μετατρέπεται σε μια αυθεντική τελετουργία γεμάτη μελωδίες, ευχές, χαμόγελα και συγκίνηση. Οι άνθρωποι που αγαπάτε συγκεντρώνονται γύρω σας και συμμετέχουν σε ένα έθιμο που περνά από γενιά σε γενιά.',
          ru: 'С live accompaniment traditional violinists подготовка bride и groom становится authentic ritual — melodies, blessings, smiles и emotion. Люди, которых вы love, gather around you в custom, passed from generation to generation.',
        },
        {
          en: 'More than a tradition, the Allamata is a piece of the Cypriot soul — an experience that connects today with our roots and creates images full of truth and emotion.',
          el: 'Περισσότερο από μια παράδοση, τα Αλλάματα είναι ένα κομμάτι της κυπριακής ψυχής — μια εμπειρία που συνδέει το σήμερα με τις ρίζες μας και δημιουργεί εικόνες γεμάτες αλήθεια και συναίσθημα.',
          ru: 'More than tradition, Allamata — piece of Cypriot soul: experience, connecting today с our roots и creating images full of truth и emotion.',
        },
        {
          en: 'Because before your new chapter begins, it is worth honouring the tradition that travelled through time to reach you.',
          el: 'Γιατί πριν ξεκινήσει το καινούργιο σας κεφάλαιο, αξίζει να τιμήσετε την παράδοση που ταξίδεψε μέσα στον χρόνο για να φτάσει μέχρι εσάς.',
          ru: 'Потому что before your new chapter begins стоит honour tradition, которая travelled through time, чтобы reach you.',
        },
      ],
    },
  },
  {
    id: 'co2-led-guns',
    title: {
      en: 'CO₂ LED Guns',
      el: 'Φωτιζόμενα Πιστόλια CO₂',
      ru: 'Светодиодные пистолеты CO₂',
    },
    detail: {
      headline: {
        en: 'CO₂ LED Guns',
        el: 'Φωτιζόμενα Πιστόλια CO₂ | CO₂ LED Guns',
        ru: 'Светодиодные пистолеты CO₂ | CO₂ LED Guns',
      },
      paragraphs: [
        {
          en: 'When the evening reaches its peak, it is time to take the energy to another level.',
          el: 'Όταν η βραδιά φτάσει στο αποκορύφωμά της, ήρθε η στιγμή να ανεβάσετε την ενέργεια σε άλλο επίπεδο.',
          ru: 'Когда evening reaches its peak — time to take energy to another level.',
        },
        {
          en: 'CO₂ LED Guns combine impressive CO₂ effects with dynamic LED lighting, creating a spectacular party moment that transforms the dance floor into a high-energy wedding show.',
          el: 'Τα CO₂ LED Guns συνδυάζουν εντυπωσιακά εφέ CO₂ με δυναμικό LED φωτισμό, δημιουργώντας ένα spectacular party moment που μεταμορφώνει την πίστα σε ένα high-energy wedding show.',
          ru: 'CO₂ LED Guns combine impressive CO₂ effects с dynamic LED lighting — spectacular party moment, transforming dance floor в high-energy wedding show.',
        },
        {
          en: 'To the rhythm of the music, the effects lift the atmosphere, energise the guests, and create unique images full of movement, light, and intensity — ideal for the moment the elegant wedding reception becomes the party of your life.',
          el: 'Στον ρυθμό της μουσικής, τα εφέ εκτοξεύουν την ατμόσφαιρα, ξεσηκώνουν τους καλεσμένους και δημιουργούν μοναδικές εικόνες γεμάτες κίνηση, φως και ένταση — ιδανικές για εκείνη τη στιγμή που το elegant wedding reception μετατρέπεται στο party της ζωής σας.',
          ru: 'To the rhythm of music effects lift atmosphere, energise guests и create unique images — movement, light, intensity — ideal for moment, когда elegant wedding reception becomes party of your life.',
        },
        {
          en: 'Because an unforgettable wedding also needs the moment when everyone lets go to the rhythm. Turn up the music. Feel the energy. Own the night.',
          el: 'Γιατί ένας αξέχαστος γάμος χρειάζεται και τη στιγμή που όλοι αφήνονται στον ρυθμό. Turn up the music. Feel the energy. Own the night.',
          ru: 'Потому что unforgettable wedding needs и moment, когда everyone lets go to the rhythm. Turn up the music. Feel the energy. Own the night.',
        },
      ],
    },
  },
  {
    id: 'proposal-in-the-air',
    title: {
      en: 'Proposal in the Air',
      el: 'Πρόταση Γάμου στον Αέρα',
      ru: 'Предложение руки в воздухе',
    },
    detail: {
      headline: {
        en: 'Proposal in the Air',
        el: 'Πρόταση Γάμου στον Αέρα | Proposal in the Air',
        ru: 'Предложение руки в воздухе | Proposal in the Air',
      },
      paragraphs: [
        {
          en: 'There are questions that change an entire life. And there are ways to make them truly unforgettable.',
          el: 'Υπάρχουν ερωτήσεις που αλλάζουν μια ολόκληρη ζωή. Και υπάρχουν τρόποι να τις κάνεις πραγματικά αξέχαστες.',
          ru: 'Есть вопросы, которые меняют целую жизнь. И есть способы сделать их truly unforgettable.',
        },
        {
          en: 'Proposal in the Air transforms the moment of “Will you marry me?” into an extraordinary experience above the clouds. With the horizon stretching before you and the world seeming to stay behind, the ultimate setting is created for one of the most important moments of your shared story.',
          el: 'Το Proposal in the Air μετατρέπει τη στιγμή του «Θα με παντρευτείς;» σε μια extraordinary εμπειρία πάνω από τα σύννεφα. Με τον ορίζοντα να απλώνεται μπροστά σας και τον κόσμο να μοιάζει να μένει πίσω, δημιουργείται το απόλυτο σκηνικό για μία από τις σημαντικότερες στιγμές της κοινής σας ιστορίας.',
          ru: 'Proposal in the Air превращает момент «Will you marry me?» в extraordinary experience above the clouds. С horizon перед вами и миром, остающимся позади, создаётся ultimate setting для one of the most important moments вашей shared story.',
        },
        {
          en: 'Romance, privacy, and the magic of flight combine in a once-in-a-lifetime proposal experience, designed to inspire surprise, emotion, and a “Yes” you will remember forever.',
          el: 'Ρομαντισμός, ιδιωτικότητα και η μαγεία της πτήσης συνδυάζονται σε μια once-in-a-lifetime proposal experience, σχεδιασμένη για να προκαλέσει έκπληξη, συγκίνηση και ένα «Ναι» που θα θυμάστε για πάντα.',
          ru: 'Romance, privacy и magic of flight сливаются в once-in-a-lifetime proposal experience — designed to inspire surprise, emotion и «Yes», который вы will remember forever.',
        },
        {
          en: 'Because such an important question does not need simply the right timing. Sometimes, love deserves the whole sky.',
          el: 'Γιατί μια τόσο σημαντική ερώτηση δεν χρειάζεται απλώς το σωστό timing. Sometimes, love deserves the whole sky.',
          ru: 'Потому что such important question не needs simply the right timing. Sometimes, love deserves the whole sky.',
        },
      ],
    },
  },
  {
    id: 'wedding-equipment',
    title: {
      en: 'Wedding Equipment',
      el: 'Γαμήλιος Εξοπλισμός',
      ru: 'Свадебное оборудование',
    },
    detail: {
      headline: {
        en: 'Wedding & Catering Equipment',
        el: 'Γαμήλιος Εξοπλισμός | Wedding & Catering Equipment',
        ru: 'Свадебное оборудование | Wedding & Catering Equipment',
      },
      paragraphs: [
        {
          en: 'Behind every impeccably set wedding reception is something guests may never notice — absolute attention to every detail.',
          el: 'Πίσω από κάθε άψογα στημένο wedding reception υπάρχει κάτι που οι καλεσμένοι ίσως δεν παρατηρήσουν ποτέ — η απόλυτη προσοχή σε κάθε λεπτομέρεια.',
          ru: 'Behind every impeccably set wedding reception есть something guests may never notice — absolute attention to every detail.',
        },
        {
          en: 'Wedding & Catering Equipment is the foundation on which a complete and elegant wedding experience is built. From essential catering and service equipment to the functional details that support the seamless flow of the reception, every element is selected and organised with professionalism and precision.',
          el: 'Το Wedding & Catering Equipment αποτελεί τη βάση πάνω στην οποία χτίζεται μια ολοκληρωμένη και elegant γαμήλια εμπειρία. Από τον απαραίτητο εξοπλισμό catering και σερβιρίσματος μέχρι τις λειτουργικές λεπτομέρειες που υποστηρίζουν την άψογη ροή της δεξίωσης, κάθε στοιχείο επιλέγεται και οργανώνεται με επαγγελματισμό και ακρίβεια.',
          ru: 'Wedding & Catering Equipment — foundation, на которой строится complete и elegant wedding experience. От essential catering и service equipment до functional details, supporting seamless flow банкета — every element selected и organised с professionalism и precision.',
        },
        {
          en: 'For us, luxury is not only in what impresses the eye. It is also in everything that works flawlessly behind the scenes, so you and your guests can enjoy the evening without having to think about a thing.',
          el: 'Για εμάς, η πολυτέλεια δεν βρίσκεται μόνο σε όσα εντυπωσιάζουν το βλέμμα. Βρίσκεται και σε όλα όσα λειτουργούν άψογα στο παρασκήνιο, ώστε εσείς και οι καλεσμένοι σας να απολαμβάνετε τη βραδιά χωρίς να χρειάζεται να σκεφτείτε τίποτα.',
          ru: 'For us luxury — не only in what impresses the eye. It is also in everything that works flawlessly behind the scenes, чтобы you и guests could enjoy evening без having to think about a thing.',
        },
        {
          en: 'Because true luxury is when everything simply works — beautifully.',
          el: 'Because true luxury is when everything simply works — beautifully.',
          ru: 'Because true luxury is when everything simply works — beautifully.',
        },
      ],
    },
  },
  {
    id: 'luxury-yacht-wedding',
    title: {
      en: 'Luxury Yacht Wedding',
      el: 'Γάμος σε Πολυτελές Σκάφος',
      ru: 'Свадьба на роскошной яхте',
    },
    pageHref: '/services/yacht-charters',
  },
  {
    id: 'greek-island-weddings',
    title: {
      en: 'Greek Island Weddings',
      el: 'Γάμοι στα Ελληνικά Νησιά',
      ru: 'Свадьбы на греческих островах',
    },
    detail: {
      headline: {
        en: 'Greek Island Weddings',
        el: 'Γάμοι στα Ελληνικά Νησιά | Greek Island Weddings',
        ru: 'Свадьбы на греческих островах | Greek Island Weddings',
      },
      paragraphs: [
        {
          en: 'There are destinations that host a wedding. And there are destinations that become part of the story itself.',
          el: 'Υπάρχουν προορισμοί που φιλοξενούν έναν γάμο. Και υπάρχουν προορισμοί που γίνονται μέρος της ιστορίας του.',
          ru: 'Есть destinations, которые host a wedding. И есть destinations, которые become part of the story itself.',
        },
        {
          en: 'Greek Island Weddings bring your big day to one of the most enchanting settings in the world — where the endless Aegean, dazzling white, Greek light, and unique sunsets create an atmosphere that is hard to match.',
          el: 'Τα Greek Island Weddings μεταφέρουν τη μεγάλη σας ημέρα σε ένα από τα πιο μαγευτικά σκηνικά του κόσμου — εκεί όπου το απέραντο Αιγαίο, το εκτυφλωτικό λευκό, το ελληνικό φως και τα μοναδικά ηλιοβασιλέματα δημιουργούν μια ατμόσφαιρα που δύσκολα μπορεί να συγκριθεί.',
          ru: 'Greek Island Weddings переносят big day в one of the most enchanting settings в мире — где endless Aegean, dazzling white, Greek light и unique sunsets создают atmosphere, которую hard to match.',
        },
        {
          en: 'From an intimate ceremony with sea views to an impressive luxury destination wedding, every detail can be designed around your personal vision — turning the wedding into a complete experience for you and your guests.',
          el: 'Από μια intimate τελετή με θέα τη θάλασσα μέχρι ένα εντυπωσιακό luxury destination wedding, κάθε λεπτομέρεια μπορεί να σχεδιαστεί γύρω από το προσωπικό σας όραμα, μετατρέποντας τον γάμο σε μια ολοκληρωμένη εμπειρία για εσάς και τους καλεσμένους σας.',
          ru: 'От intimate ceremony с sea views до impressive luxury destination wedding — every detail может быть designed around personal vision, turning wedding в complete experience для вас и guests.',
        },
        {
          en: 'It is not simply a wedding on a Greek island. It is days full of sun, sea, the people you love, and moments that feel straight out of a film.',
          el: 'Δεν είναι απλώς ένας γάμος σε ένα ελληνικό νησί. Είναι ημέρες γεμάτες ήλιο, θάλασσα, ανθρώπους που αγαπάτε και στιγμές που μοιάζουν βγαλμένες από κινηματογραφική ταινία.',
          ru: 'Это не simply wedding на Greek island. Это days full of sun, sea, people you love и moments, что feel straight out of a film.',
        },
        {
          en: 'Say “I do” where the blue has no end — and let Greece become part of your love story.',
          el: 'Say “I do” where the blue has no end — and let Greece become part of your love story.',
          ru: 'Say “I do” where the blue has no end — and let Greece become part of your love story.',
        },
      ],
    },
  },
  {
    id: 'venue-selection',
    title: {
      en: 'Venue Selection',
      el: 'Επιλογή Χώρου',
      ru: 'Подбор площадки',
    },
    detail: {
      headline: {
        en: 'Venue Selection',
        el: 'Επιλογή Χώρου Γάμου | Venue Selection',
        ru: 'Подбор площадки | Venue Selection',
      },
      paragraphs: [
        {
          en: 'The right venue does not simply host your wedding. It defines the entire experience.',
          el: 'Ο σωστός χώρος δεν φιλοξενεί απλώς τον γάμο σας. Καθορίζει ολόκληρη την εμπειρία του.',
          ru: 'The right venue не simply hosts your wedding. It defines the entire experience.',
        },
        {
          en: 'Through Venue Selection, we search for the setting that truly matches your vision — from elegant estates and luxury hotels to seaside venues and distinctive spaces with unique character.',
          el: 'Μέσα από το Venue Selection, αναζητούμε το σκηνικό που ταιριάζει πραγματικά στο όραμά σας — από elegant estates και luxury hotels μέχρι παραθαλάσσια venues και ξεχωριστούς χώρους με μοναδικό χαρακτήρα.',
          ru: 'Through Venue Selection мы ищем setting, который truly matches your vision — от elegant estates и luxury hotels до seaside venues и distinctive spaces с unique character.',
        },
        {
          en: 'We consider not only the beauty of the space, but also the location, capacity, functionality, atmosphere, and possibilities for customisation — so every subsequent wedding choice can be built harmoniously around it.',
          el: 'Λαμβάνουμε υπόψη όχι μόνο την ομορφιά του χώρου, αλλά και την τοποθεσία, τη χωρητικότητα, τη λειτουργικότητα, την ατμόσφαιρα και τις δυνατότητες διαμόρφωσης, ώστε κάθε επόμενη επιλογή του γάμου σας να μπορεί να χτιστεί αρμονικά γύρω από αυτόν.',
          ru: 'We consider не only beauty пространства, но и location, capacity, functionality, atmosphere и possibilities for customisation — чтобы every subsequent wedding choice мог быть built harmoniously around it.',
        },
        {
          en: 'Because before you choose flowers, lighting, or decoration, you must find the place where everything comes to life. The perfect wedding begins with the perfect setting.',
          el: 'Γιατί πριν επιλέξετε λουλούδια, φωτισμό ή διακόσμηση, πρέπει να βρείτε το μέρος όπου όλα θα αποκτήσουν ζωή. The perfect wedding begins with the perfect setting.',
          ru: 'Потому что before you choose flowers, lighting или decoration нужно find the place, где everything comes to life. The perfect wedding begins with the perfect setting.',
        },
      ],
    },
  },
]

export const weddingHighlightTiles: WeddingHighlightTile[] = TILE_SEEDS.map((seed) => {
  const cover = coverForTile(seed.id)
  return {
    ...seed,
    image: cover.src,
    imageFit: cover.fit,
  }
})
