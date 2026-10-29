import type { LocalizedText } from '../lib/weddingLocale'
import type { WeddingFeaturePageContent } from './weddingFeaturePage'

const IMG = '/images/services/wedding-highlights/mocktail-bar-card'

export const weddingMobileCocktailBarCopy = {
  key: 'cocktail-bar',
  hero: {
    src: `${IMG}/sparkler-crowd-cart.webp`,
    width: 1538,
    height: 1022,
    position: '50% 45%',
    monochrome: true,
  },
  story: {
    image: { src: `${IMG}/moscow-mule-apples.webp`, width: 1148, height: 1371 },
    imageAlt: {
      en: 'Copper mugs being garnished with apple, pomegranate and fresh mint',
      el: 'Χάλκινες κούπες με garnish από μήλο, ρόδι και φρέσκια μέντα',
      ru: 'Медные кружки с украшением из яблока, граната и свежей мяты',
    } satisfies LocalizedText,
  },
  quoteBackdrop: {
    src: `${IMG}/sparkler-crowd-celebration.webp`,
    width: 1538,
    height: 1022,
  },

  eyebrow: {
    en: 'Signature bar experience',
    el: 'Signature εμπειρία bar',
    ru: 'Фирменный бар-опыт',
  } satisfies LocalizedText,
  pageTitle: {
    en: 'Mobile Cocktail Bar',
    el: 'Mobile Cocktail Bar',
    ru: 'Mobile Cocktail Bar',
  } satisfies LocalizedText,
  lead: {
    en: 'An entire experience in a glass.',
    el: 'Μια ολόκληρη εμπειρία σε ένα ποτήρι.',
    ru: 'Целый опыт в одном бокале.',
  } satisfies LocalizedText,
  intro: [
    {
      en: 'An exceptional cocktail is not simply a drink. It is taste, presentation, atmosphere — an entire experience in a glass.',
      el: 'Ένα εξαιρετικό cocktail δεν είναι απλώς ένα ποτό. Είναι γεύση, παρουσίαση, ατμόσφαιρα — μια ολόκληρη εμπειρία σε ένα ποτήρι.',
      ru: 'Исключительный cocktail — не просто напиток. Это вкус, подача, атмосфера — целый опыт в бокале.',
    },
  ],

  storyEyebrow: {
    en: 'The experience',
    el: 'Η εμπειρία',
    ru: 'Впечатление',
  } satisfies LocalizedText,
  storyTitle: {
    en: 'A premium cocktail bar, brought to your reception',
    el: 'Ένα premium cocktail bar, στη δεξίωσή σας',
    ru: 'Premium cocktail bar прямо на вашем приёме',
  } satisfies LocalizedText,
  storyParagraphs: [
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
  ],

  pillarsEyebrow: {
    en: 'Signature details',
    el: 'Χαρακτηριστικές λεπτομέρειες',
    ru: 'Фирменные детали',
  } satisfies LocalizedText,
  pillarsTitle: {
    en: 'Every serve, composed with care',
    el: 'Κάθε σερβίρισμα, φτιαγμένο με φροντίδα',
    ru: 'Каждая подача — с вниманием к деталям',
  } satisfies LocalizedText,
  pillars: [
    {
      id: 'signature',
      title: { en: 'Signature Cocktails', el: 'Signature Cocktails', ru: 'Авторские коктейли' },
      body: {
        en: 'A cocktail inspired by the two of you — named, flavoured and styled to become part of your wedding identity.',
        el: 'Ένα cocktail εμπνευσμένο από εσάς τους δύο — με όνομα, γεύση και στυλ που γίνονται μέρος της ταυτότητας του γάμου σας.',
        ru: 'Коктейль, вдохновлённый вами двоими — с названием, вкусом и стилем, ставшими частью идентичности вашей свадьбы.',
      },
    },
    {
      id: 'classics',
      title: { en: 'Beloved Classics', el: 'Αγαπημένα Κλασικά', ru: 'Любимая классика' },
      body: {
        en: 'Timeless favourites, balanced and served with fresh garnishes, so every guest finds a glass that feels like theirs.',
        el: 'Διαχρονικά αγαπημένα, ισορροπημένα και σερβιρισμένα με φρέσκο garnish, ώστε κάθε καλεσμένος να βρει ένα ποτήρι που τον εκφράζει.',
        ru: 'Вечные фавориты в идеальном балансе, со свежим декором — чтобы каждый гость нашёл бокал по душе.',
      },
    },
    {
      id: 'presentation',
      title: { en: 'Copper & Glass', el: 'Χαλκός & Γυαλί', ru: 'Медь и стекло' },
      body: {
        en: 'Copper mugs, polished coupes and crystal glassware create a warm, luxurious look that photographs beautifully.',
        el: 'Χάλκινες κούπες, γυαλισμένα coupes και κρυστάλλινα ποτήρια δημιουργούν μια ζεστή, πολυτελή εικόνα που φωτογραφίζεται υπέροχα.',
        ru: 'Медные кружки, отполированные купе и хрусталь создают тёплый, роскошный образ, прекрасно смотрящийся на фото.',
      },
    },
    {
      id: 'atmosphere',
      title: { en: 'A Social Centrepiece', el: 'Ένα Κοινωνικό Επίκεντρο', ru: 'Центр общения' },
      body: {
        en: 'A stylish gathering point where guests meet, celebrate and raise a glass to the couple, from first toast to last dance.',
        el: 'Ένα κομψό σημείο συνάντησης όπου οι καλεσμένοι γνωρίζονται, γιορτάζουν και σηκώνουν το ποτήρι τους για το ζευγάρι, από το πρώτο τσούγκρισμα μέχρι τον τελευταίο χορό.',
        ru: 'Стильная точка притяжения, где гости знакомятся, празднуют и поднимают бокалы за пару — от первого тоста до последнего танца.',
      },
    },
  ],

  galleryEyebrow: {
    en: 'Gallery',
    el: 'Γκαλερί',
    ru: 'Галерея',
  } satisfies LocalizedText,
  galleryTitle: {
    en: 'The bar, in moments',
    el: 'Το bar, σε στιγμές',
    ru: 'Бар в деталях',
  } satisfies LocalizedText,
  galleryIntro: {
    en: 'From copper and crystal to the toast that brings everyone together.',
    el: 'Από τον χαλκό και το κρύσταλλο μέχρι το τσούγκρισμα που ενώνει όλους.',
    ru: 'От меди и хрусталя до тоста, который объединяет всех.',
  } satisfies LocalizedText,
  gallery: [
    {
      id: 'sparkler-crowd-cart',
      src: `${IMG}/sparkler-crowd-cart.webp`,
      width: 1538,
      height: 1022,
      caption: {
        en: 'The bar at the heart of the celebration',
        el: 'Το bar στην καρδιά της γιορτής',
        ru: 'Бар в самом сердце праздника',
      },
    },
    {
      id: 'champagne-tower',
      src: `${IMG}/champagne-tower.webp`,
      width: 1086,
      height: 1448,
      caption: {
        en: 'A champagne tower of pink coupes',
        el: 'Πύργος σαμπάνιας με ροζ κούπες',
        ru: 'Башня из шампанского в розовых купе',
      },
    },
    {
      id: 'copper-shaker-dried-citrus',
      src: `${IMG}/copper-shaker-dried-citrus.webp`,
      width: 1128,
      height: 1394,
      caption: {
        en: 'Copper shaker and dried citrus',
        el: 'Χάλκινο shaker και αποξηραμένα εσπεριδοειδή',
        ru: 'Медный шейкер и сушёные цитрусы',
      },
    },
    {
      id: 'ruby-cocktails-tray',
      src: `${IMG}/ruby-cocktails-tray.webp`,
      width: 1122,
      height: 1402,
      caption: {
        en: 'Ruby cocktails, ready to serve',
        el: 'Ρουμπινί cocktails, έτοιμα για σερβίρισμα',
        ru: 'Рубиновые коктейли, готовые к подаче',
      },
    },
    {
      id: 'copper-tumblers-rosemary',
      src: `${IMG}/copper-tumblers-rosemary.webp`,
      width: 1122,
      height: 1402,
      caption: {
        en: 'Copper tumblers with rosemary and lime',
        el: 'Χάλκινα ποτήρια με δεντρολίβανο και lime',
        ru: 'Медные стаканы с розмарином и лаймом',
      },
    },
    {
      id: 'champagne-coupes-shelf',
      src: `${IMG}/champagne-coupes-shelf.webp`,
      width: 1134,
      height: 1387,
      caption: {
        en: 'Champagne coupes among fresh florals',
        el: 'Κούπες σαμπάνιας ανάμεσα σε φρέσκα λουλούδια',
        ru: 'Бокалы-купе для шампанского среди свежих цветов',
      },
    },
    {
      id: 'hands-copper-goblets',
      src: `${IMG}/hands-copper-goblets.webp`,
      width: 1126,
      height: 1397,
      caption: {
        en: 'Copper goblets, freshly garnished',
        el: 'Χάλκινα κύπελλα με φρέσκο garnish',
        ru: 'Медные бокалы со свежим декором',
      },
    },
    {
      id: 'julep-cups-grapefruit',
      src: `${IMG}/julep-cups-grapefruit.webp`,
      width: 1112,
      height: 1414,
      caption: {
        en: 'Julep cups with grapefruit and mint',
        el: 'Julep cups με γκρέιπφρουτ και μέντα',
        ru: 'Стаканы-джулеп с грейпфрутом и мятой',
      },
    },
    {
      id: 'copper-ice-trough',
      src: `${IMG}/copper-ice-trough.webp`,
      width: 1128,
      height: 1394,
      caption: {
        en: 'A copper trough of chilled cocktails',
        el: 'Χάλκινη σκάφη με παγωμένα cocktails',
        ru: 'Медное корыто с охлаждёнными коктейлями',
      },
    },
    {
      id: 'spritz-pour-jigger',
      src: `${IMG}/spritz-pour-jigger.webp`,
      width: 1114,
      height: 1412,
      caption: {
        en: 'The perfect pour, measured by hand',
        el: 'Η τέλεια δόση, μετρημένη με το χέρι',
        ru: 'Идеальная порция, отмеренная вручную',
      },
    },
    {
      id: 'copper-coupe-hand',
      src: `${IMG}/copper-coupe-hand.webp`,
      width: 1122,
      height: 1402,
      caption: {
        en: 'A copper coupe, held with grace',
        el: 'Μια χάλκινη κούπα, με χάρη',
        ru: 'Медное купе, изящно удерживаемое в руке',
      },
    },
    {
      id: 'moscow-mule-apples',
      src: `${IMG}/moscow-mule-apples.webp`,
      width: 1148,
      height: 1371,
      caption: {
        en: 'Mixing a fresh seasonal mule',
        el: 'Φρέσκο εποχιακό mule στο shaker',
        ru: 'Свежий сезонный мюль в процессе создания',
      },
    },
    {
      id: 'red-cocktail-glasses',
      src: `${IMG}/red-cocktail-glasses.webp`,
      width: 1086,
      height: 1448,
      caption: {
        en: 'A wall of crimson cocktails',
        el: 'Ένας τοίχος από κόκκινα cocktails',
        ru: 'Ряд алых коктейлей',
      },
    },
    {
      id: 'copper-mugs-pomegranate',
      src: `${IMG}/copper-mugs-pomegranate.webp`,
      width: 1150,
      height: 1368,
      caption: {
        en: 'Copper mugs, pomegranate and fresh mint',
        el: 'Χάλκινες κούπες, ρόδι και φρέσκια μέντα',
        ru: 'Медные кружки, гранат и свежая мята',
      },
    },
    {
      id: 'copper-coupe-white-dress',
      src: `${IMG}/copper-coupe-white-dress.webp`,
      width: 1122,
      height: 1402,
      caption: {
        en: 'Elegance in copper and white',
        el: 'Κομψότητα σε χαλκό και λευκό',
        ru: 'Элегантность в меди и белом',
      },
    },
    {
      id: 'champagne-copper-cooler',
      src: `${IMG}/champagne-copper-cooler.webp`,
      width: 1127,
      height: 1396,
      caption: {
        en: 'Champagne chilled in copper',
        el: 'Σαμπάνια παγωμένη σε χαλκό',
        ru: 'Шампанское, охлаждённое в меди',
      },
    },
    {
      id: 'cranberry-gin-bar',
      src: `${IMG}/cranberry-gin-bar.webp`,
      width: 1126,
      height: 1397,
      caption: {
        en: 'Cranberry and gin, styled for the bar',
        el: 'Cranberry και gin, στημένα για το bar',
        ru: 'Клюква и джин на барной стойке',
      },
    },
    {
      id: 'cranberry-mule',
      src: `${IMG}/cranberry-mule.webp`,
      width: 1125,
      height: 1398,
      caption: {
        en: 'A sparkling cranberry mule',
        el: 'Ένα αφρώδες cranberry mule',
        ru: 'Игристый клюквенный мюль',
      },
    },
    {
      id: 'mule-pomegranate-lime',
      src: `${IMG}/mule-pomegranate-lime.webp`,
      width: 1126,
      height: 1397,
      caption: {
        en: 'Pomegranate, lime and mint',
        el: 'Ρόδι, lime και μέντα',
        ru: 'Гранат, лайм и мята',
      },
    },
    {
      id: 'shaker-and-highball',
      src: `${IMG}/shaker-and-highball.webp`,
      width: 1192,
      height: 1319,
      caption: {
        en: 'The shaker and the finished serve',
        el: 'Το shaker και το έτοιμο cocktail',
        ru: 'Шейкер и готовый коктейль',
      },
    },
    {
      id: 'dessert-cups-service',
      src: `${IMG}/dessert-cups-service.webp`,
      width: 1086,
      height: 1448,
      caption: {
        en: 'Elegant cups prepared for service',
        el: 'Κομψά ποτήρια έτοιμα για σερβίρισμα',
        ru: 'Элегантные стаканы, подготовленные к подаче',
      },
    },
    {
      id: 'sundae-copper-coupe',
      src: `${IMG}/sundae-copper-coupe.webp`,
      width: 1089,
      height: 1445,
      caption: {
        en: 'A decadent dessert in copper',
        el: 'Ένα γλυκό σε χάλκινη κούπα',
        ru: 'Десерт в медной креманке',
      },
    },
    {
      id: 'beer-copper-tankard',
      src: `${IMG}/beer-copper-tankard.webp`,
      width: 1087,
      height: 1446,
      caption: {
        en: 'A frothy pour in a copper tankard',
        el: 'Αφρώδες ποτό σε χάλκινη κούπα',
        ru: 'Пенный напиток в медной кружке',
      },
    },
    {
      id: 'ice-bucket-seaside',
      src: `${IMG}/ice-bucket-seaside.webp`,
      width: 1088,
      height: 1445,
      caption: {
        en: 'Seaside serve on ice',
        el: 'Σερβίρισμα δίπλα στη θάλασσα',
        ru: 'Подача у моря на льду',
      },
    },
    {
      id: 'bartender-straining',
      src: `${IMG}/bartender-straining.webp`,
      width: 1125,
      height: 1398,
      caption: {
        en: 'Crafted to order, behind the bar',
        el: 'Φτιάχνεται επί τόπου, πίσω από το bar',
        ru: 'Создаётся на ваших глазах за стойкой',
      },
    },
    {
      id: 'pomegranate-copper-vessel',
      src: `${IMG}/pomegranate-copper-vessel.webp`,
      width: 1097,
      height: 1434,
      caption: {
        en: 'A sculpted copper vessel',
        el: 'Ένα σμιλευμένο χάλκινο σκεύος',
        ru: 'Скульптурный медный сосуд',
      },
    },
    {
      id: 'mug-candlelit-table',
      src: `${IMG}/mug-candlelit-table.webp`,
      width: 1089,
      height: 1444,
      caption: {
        en: 'Candlelit tables and copper detail',
        el: 'Τραπέζια με κεριά και χάλκινες λεπτομέρειες',
        ru: 'Столы при свечах и медные детали',
      },
    },
    {
      id: 'hot-chocolate-coupe',
      src: `${IMG}/hot-chocolate-coupe.webp`,
      width: 1087,
      height: 1446,
      caption: {
        en: 'A warm winter indulgence',
        el: 'Μια ζεστή χειμωνιάτικη απόλαυση',
        ru: 'Тёплое зимнее удовольствие',
      },
    },
    {
      id: 'coupe-bracelet-hand',
      src: `${IMG}/coupe-bracelet-hand.webp`,
      width: 1084,
      height: 1451,
      caption: {
        en: 'A toast in the details',
        el: 'Ένα τσούγκρισμα στις λεπτομέρειες',
        ru: 'Тост в деталях',
      },
    },
    {
      id: 'aperol-sunset',
      src: `${IMG}/aperol-sunset.webp`,
      width: 1089,
      height: 1444,
      caption: {
        en: 'A spritz at golden hour',
        el: 'Spritz την ώρα του ηλιοβασιλέματος',
        ru: 'Спритц в золотой час',
      },
    },
    {
      id: 'hammered-copper-orange',
      src: `${IMG}/hammered-copper-orange.webp`,
      width: 1088,
      height: 1445,
      caption: {
        en: 'A twist of fresh orange',
        el: 'Μια πινελιά φρέσκου πορτοκαλιού',
        ru: 'Нотка свежего апельсина',
      },
    },
    {
      id: 'vintage-cart-copper-cups',
      src: `${IMG}/vintage-cart-copper-cups.webp`,
      width: 1090,
      height: 1443,
      caption: {
        en: 'A vintage cart set for service',
        el: 'Ένα vintage καρότσι έτοιμο για σερβίρισμα',
        ru: 'Винтажная тележка, готовая к подаче',
      },
    },
    {
      id: 'sparkler-crowd-celebration',
      src: `${IMG}/sparkler-crowd-celebration.webp`,
      width: 1538,
      height: 1022,
      caption: {
        en: 'Sparklers, joy and a toast',
        el: 'Sparklers, χαρά και ένα τσούγκρισμα',
        ru: 'Бенгальские огни, радость и тост',
      },
    },
  ],

  quote: {
    en: 'Your love story deserves its own signature cocktail.',
    el: 'Η ιστορία αγάπης σας αξίζει το δικό της ιδιαίτερο cocktail.',
    ru: 'История вашей любви заслуживает собственного signature cocktail.',
  } satisfies LocalizedText,

  closingEyebrow: {
    en: 'Raise a glass',
    el: 'Σηκώστε το ποτήρι σας',
    ru: 'Поднимем бокалы',
  } satisfies LocalizedText,
  closingLead: {
    en: 'Let us create the cocktail of your story.',
    el: 'Ας δημιουργήσουμε το cocktail της δικής σας ιστορίας.',
    ru: 'Создадим коктейль вашей истории.',
  } satisfies LocalizedText,
  closingBody: {
    en: 'Speak with our team to add the Mobile Cocktail Bar to your wedding and shape the menu around your venue, guests and style.',
    el: 'Μιλήστε με την ομάδα μας για να προσθέσετε το Mobile Cocktail Bar στον γάμο σας και να διαμορφώσετε το μενού με βάση τον χώρο, τους καλεσμένους και το στυλ σας.',
    ru: 'Свяжитесь с нашей командой, чтобы добавить Mobile Cocktail Bar на вашу свадьбу и составить меню под площадку, гостей и стиль.',
  } satisfies LocalizedText,
  brandTagline: {
    en: 'Every detail, beautifully considered.',
    el: 'Κάθε λεπτομέρεια, προσεκτικά σχεδιασμένη.',
    ru: 'Каждая деталь продумана.',
  } satisfies LocalizedText,
} satisfies WeddingFeaturePageContent
