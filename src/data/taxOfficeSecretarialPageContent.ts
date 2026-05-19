import {
  TAX_COMPANY_REGISTRATION_STATS,
  TAX_COMPANY_REGISTRATION_TAXNEX,
} from './taxCompanyRegistrationPageContent'

const IMG = (n: number) =>
  `/images/services/tax-services/office-registration/tax-office-work-${n}.webp`

export const TAX_OFFICE_SECRETARIAL_IMAGES = {
  hero: IMG(1),
  intro: IMG(1),
  conference: IMG(3),
  flexPack: IMG(2),
} as const

export const TAX_OFFICE_SECRETARIAL_FLEX_IMAGE_ALT = {
  el: 'Custom Flex Pack — ευέλικτες γραφειακές υπηρεσίες TaxNex',
  en: 'Custom Flex Pack — flexible TaxNex office services',
} as const

export const TAX_OFFICE_SECRETARIAL_PAGE_TITLES = {
  el: {
    breadcrumbCurrent: 'Γραφειακές υπηρεσίες',
    h1: 'Γραφειακές & Γραμματειακές Υπηρεσίες',
    intro:
      'Η επιχείρησή σας χωρίς το κόστος ενός γραφείου — οργανώστε την επιχείρησή σας χωρίς να ξοδέψετε μία περιουσία στο Business Center του TaxNex.',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    secureCta: 'Κλείστε επίσκεψη',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
    contactHeading: 'Επικοινωνήστε μαζί μας',
    contactBody: 'Κλείστε επίσκεψη ή τηλεφωνήστε μας σήμερα για προσωποποιημένη προσφορά.',
    planCta: 'Μάθε Περισσότερα',
    flexCta: 'Επικοινωνήστε μαζί μας',
  },
  en: {
    breadcrumbCurrent: 'Office services',
    h1: 'Office & secretarial services',
    intro:
      'Your business without the cost of a full office — organise your company without overspending at the TaxNex Business Center.',
    primaryCta: 'Contact us',
    secureCta: 'Book a visit',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
    contactHeading: 'Contact us',
    contactBody: 'Book a visit or call us today for a tailored quote.',
    planCta: 'Learn more',
    flexCta: 'Contact us',
  },
} as const

/** Section 1 — main title & Custom Flex intro (taxnexcy row_1) */
export const TAX_OFFICE_SECRETARIAL_MAIN = {
  sectionTitle: {
    el: 'Γραφειακές & Γραμματειακές Υπηρεσίες',
    en: 'Office & secretarial services',
  },
  lead: {
    el: 'Η επιχείρησή σας χωρίς το κόστος ενός γραφείου!',
    en: 'Your business without the cost of a full office!',
  },
  paragraphs: {
    el: [
      'Οργανώστε την επιχείρησή σας χωρίς να ξοδέψετε μία περιουσία!',
      'Το Business Center παρουσιάζει το νέο Custom Flex Pack – το πακέτο που προσαρμόζεται ακριβώς στις ανάγκες σας από 150 ευρώ το μήνα!',
    ],
    en: [
      'Organise your business without overspending!',
      'The Business Center introduces the new Custom Flex Pack — tailored to your needs from €150 per month!',
    ],
  },
  servicesHeading: {
    el: 'Επιλέξτε από 15 διαθέσιμες υπηρεσίες',
    en: 'Choose from 15 available services',
  },
  selectableServices: {
    el: [
      'Διαχείριση τηλεφωνικών κλήσεων / τηλεφωνικό κέντρο',
      'Τιμολόγηση, εισπράξεις και πληρωμές',
      'Διαχείριση ραντεβού πελατών',
      'Δημιουργία και αποστολή προσφορών',
      'Πληρωμές κοινωνικών ασφαλίσεων',
      'Πληρωμές Φ.Π.Α. και φόρου εισοδήματος',
      'Υποβολή φορολογικών δηλώσεων',
      'Διαχείριση e-mail',
      'Παροχή συνεδριακού χώρου',
      'Υποστήριξη marketing και social media',
      'Δημιουργία συμβολαίων',
      'Λογιστικές υπηρεσίες και audit',
      'Νομικές και λογιστικές συμβουλές',
      'Εγγραφή εταιρείας ή εμπορικής επωνυμίας',
      'Branding στην ηλεκτρονική ταμπέλα',
    ],
    en: [
      'Phone answering / call centre',
      'Invoicing, collections and payments',
      'Client appointment management',
      'Quote creation and dispatch',
      'Social insurance payments',
      'VAT and income tax payments',
      'Tax return submission',
      'Email management',
      'Meeting room provision',
      'Marketing and social media support',
      'Contract drafting',
      'Accounting services and audit',
      'Legal and accounting advice',
      'Company or trade name registration',
      'Branding on the digital signboard',
    ],
  },
  tagline: {
    el: '👉 Εσείς επιλέγετε τις υπηρεσίες. Εμείς τις παρέχουμε επαγγελματικά.',
    en: '👉 You choose the services. We deliver them professionally.',
  },
  visitCta: {
    el: 'Κλείσε επίσκεψη ή τηλεφώνησέ μας σήμερα!',
    en: 'Book a visit or call us today!',
  },
} as const

/** Before pricing tables */
export const TAX_OFFICE_SECRETARIAL_CONFERENCE = {
  title: {
    el: 'Επαγγελματικός Χώρος (Conference Room) και Πακέτα Υπηρεσιών – Business Center',
    en: 'Professional space (Conference Room) and service packages – Business Center',
  },
  body: {
    el: 'Online κράτηση μέσω πλατφόρμας για τον συνεδριακό χώρο, με εύκολη διαχείριση διαθεσιμότητας, ωρών και επιλογής επιπλέον υπηρεσιών.',
    en: 'Online booking via platform for the meeting room, with easy management of availability, hours and additional services.',
  },
} as const

export type TaxOfficePricingPlan = {
  id: string
  featured?: boolean
  priceEur: number
  period: { el: string; en: string }
  name: { el: string; en: string }
  tagline: { el: string; en: string }
  features: { el: string[]; en: string[] }
  footnote?: { el: string; en: string }
}

export const TAX_OFFICE_SECRETARIAL_PRICING_PLANS: TaxOfficePricingPlan[] = [
  {
    id: 'starter-pack',
    priceEur: 100,
    period: { el: '/Μήνα', en: '/month' },
    name: { el: 'Starter Pack', en: 'Starter Pack' },
    tagline: {
      el: 'Ιδανικό για freelancers ή startups που χρειάζονται έναν επαγγελματικό χώρο για τα βασικά τους ραντεβού.',
      en: 'Ideal for freelancers or startups that need a professional space for essential meetings.',
    },
    features: {
      el: [
        '4 ώρες χρήσης meeting room / μήνα',
        'Πρόσβαση σε: Καφέ, νερό, γλυκά',
        'Τουαλέτες & κλιματισμό',
        'Projector, HDMI, κάμερα, notepads',
        'Χρήση της επαγγελματικής διεύθυνσης του Business Center',
        'Πρόσβαση σε ασφαλές Wi-Fi δίκτυο επαγγελματικού επιπέδου',
        'Ηλεκτρονική ταμπέλα με δυνατότητα προβολής λογότυπου, υπηρεσιών ή οποιουδήποτε άλλου branding επιθυμεί ο πελάτης κατά την επίσκεψη',
      ],
      en: [
        '4 hours meeting room use per month',
        'Access to: coffee, water, refreshments',
        'Restrooms & air conditioning',
        'Projector, HDMI, camera, notepads',
        'Use of the Business Center professional address',
        'Secure professional-grade Wi‑Fi',
        'Digital signboard with logo, services or branding on visit',
      ],
    },
  },
  {
    id: 'pro-pack',
    featured: true,
    priceEur: 190,
    period: { el: '/Μήνα', en: '/month' },
    name: { el: 'Pro Pack', en: 'Pro Pack' },
    tagline: {
      el: 'Για μικρές επιχειρήσεις που χρειάζονται ένα επαγγελματικό «back-office» χωρίς τα πάγια έξοδα γραφείου.',
      en: 'For small businesses that need a professional back-office without fixed office costs.',
    },
    features: {
      el: [
        '10 ώρες χρήσης meeting room / μήνα',
        'Όλες οι παροχές του Starter Pack',
        'Διαχείριση ραντεβού & τηλεφωνικό κέντρο',
        'Έκδοση & αποστολή τιμολογίων (έως 15/μήνα)',
        'Παρακολούθηση πληρωμών και εισπράξεων',
        'Βασική διαχείριση e-mail (1 επαγγελματικό email)',
        'Χρήση φωτοτυπικής έως 15 σελίδες/μήνα',
      ],
      en: [
        '10 hours meeting room use per month',
        'All Starter Pack amenities',
        'Appointment management & call centre',
        'Invoice issue & dispatch (up to 15/month)',
        'Payment and collection tracking',
        'Basic email management (1 business email)',
        'Photocopying up to 15 pages/month',
      ],
    },
    footnote: {
      el: 'Η τιμή μπορεί να προσαρμοστεί σε εξαιρετικές περιπτώσεις ανάλογα με τον φόρτο εργασίας',
      en: 'Price may be adjusted in exceptional cases depending on workload',
    },
  },
  {
    id: 'premium-business-pack',
    priceEur: 390,
    period: { el: '/Μήνα', en: '/month' },
    name: { el: 'Premium Business Pack', en: 'Premium Business Pack' },
    tagline: {
      el: 'Η ολοκληρωμένη λύση για τις εταιρείες που χρειάζονται χώρο, υποστήριξη και επαγγελματική εικόνα.',
      en: 'The complete solution for companies that need space, support and a professional image.',
    },
    features: {
      el: [
        'Απεριόριστη χρήση meeting room (κατόπιν διαθεσιμότητας)',
        'Όλες οι παροχές του Pro Pack',
        'Δημιουργία προσφορών & πελατολογίου',
        'Φορολογικές, λογιστικές, νομικές και business συμβουλευτικές υπηρεσίες',
        'Μηνιαία οικονομική παρακολούθηση',
        'Επιχειρησιακά & επενδυτικά πλάνα',
        'Πρόσβαση σε ασφαλές Wi-Fi δίκτυο επαγγελματικού επιπέδου',
        'Ηλεκτρονική ταμπέλα με πλήρη προβολή λογότυπου, παροχών, tagline ή οποιασδήποτε παρουσίασης επιθυμεί ο πελάτης',
        'Χρήση φωτοτυπικής έως 30 σελίδες/μήνα',
      ],
      en: [
        'Unlimited meeting room use (subject to availability)',
        'All Pro Pack amenities',
        'Quote creation & client lists',
        'Tax, accounting, legal and business advisory services',
        'Monthly financial monitoring',
        'Business & investment plans',
        'Secure professional-grade Wi‑Fi',
        'Digital signboard with full logo, services, tagline or custom presentation',
        'Photocopying up to 30 pages/month',
      ],
    },
    footnote: {
      el: 'Η τιμή μπορεί να προσαρμοστεί σε εξαιρετικές περιπτώσεις ανάλογα με τον φόρτο εργασίας',
      en: 'Price may be adjusted in exceptional cases depending on workload',
    },
  },
]

/** Section 2 — Custom Flex Pack (taxnexcy section_2) */
export const TAX_OFFICE_SECRETARIAL_FLEX = {
  title: {
    el: 'CUSTOM FLEX PACK – Τιμή βάσει επιλογών',
    en: 'CUSTOM FLEX PACK – Price based on your choices',
  },
  intro: {
    el: 'Το πιο ευέλικτο πακέτο, για επιχειρήσεις που θέλουν προσωποποιημένη λύση, επιλέγοντας μόνο τις υπηρεσίες που χρειάζονται.',
    en: 'The most flexible package for businesses that want a tailored solution, choosing only the services they need.',
  },
  highlights: {
    el: [
      'Ενοικίαση συνεδριακού χώρου με €90/ώρα, με πλήρη πρόσβαση σε όλες τις παροχές',
      'Επιλογή υπηρεσιών με χρέωση ανάλογα με τις ανάγκες του κάθε πελάτη',
    ],
    en: [
      'Meeting room rental at €90/hour with full access to all amenities',
      'Choose services charged according to each client’s needs',
    ],
  },
  servicesHeading: {
    el: 'Διαθέσιμες υπηρεσίες προς επιλογή:',
    en: 'Available services to choose from:',
  },
  selectableServices: {
    el: [
      'Διαχείριση τηλεφωνικών κλήσεων / τηλεφωνικό κέντρο',
      'Τιμολόγηση, εισπράξεις και πληρωμές',
      'Διαχείριση e-mail',
      'Διαχείριση ραντεβού πελατών',
      'Δημιουργία και αποστολή προσφορών',
      'Πληρωμές κοινωνικών ασφαλίσεων',
      'Πληρωμές Φ.Π.Α. και φόρου εισοδήματος',
      'Υποβολή φορολογικών δηλώσεων',
      'Παροχή συνεδριακού χώρου',
      'Δημιουργία συμβολαίων',
      'Λογιστικές υπηρεσίες και audit',
      'Διαχείριση και μείωσης στο ΦΠΑ',
      'Νομικές και λογιστικές συμβουλές',
      'Εγγραφή εταιρείας ή εμπορικής επωνυμίας',
      'Branding στην ηλεκτρονική ταμπέλα',
    ],
    en: [
      'Phone answering / call centre',
      'Invoicing, collections and payments',
      'Email management',
      'Client appointment management',
      'Quote creation and dispatch',
      'Social insurance payments',
      'VAT and income tax payments',
      'Tax return submission',
      'Meeting room provision',
      'Contract drafting',
      'Accounting services and audit',
      'VAT management and reduction',
      'Legal and accounting advice',
      'Company or trade name registration',
      'Branding on the digital signboard',
    ],
  },
  pricingNote: {
    el: 'Η τελική τιμολόγηση διαμορφώνεται βάσει των υπηρεσιών που θα επιλεγούν. Παρέχεται προσωποποιημένη προσφορά.',
    en: 'Final pricing is based on the services selected. A personalised quote is provided.',
  },
} as const

/** Same stats & TaxNex block as taxnexcy company registration page */
export const TAX_OFFICE_SECRETARIAL_STATS = TAX_COMPANY_REGISTRATION_STATS
export const TAX_OFFICE_SECRETARIAL_TAXNEX = TAX_COMPANY_REGISTRATION_TAXNEX
