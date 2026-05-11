/**
 * Greek marketing copy aligned with TaxNex Cyprus (taxnexcy.com) —
 * combines on-site meta/schema text with section fragments from the reference layout.
 */

/** English income tax calculator (mirrors TaxNex «Υπολογισμός Φόρου Εισοδήματος» flow). */
export const TAX_INCOME_CALCULATOR_PATH = '/services/tax/income-tax-calculator'

export const TAX_NEX_ADDRESS_LINE = 'Γρίβα Διγενή 51, 6036, Λάρνακα'

export const TAX_NEX_META_LEAD =
  'Είμαστε μια εξειδικευμένη και έμπειρη ομάδα επαγγελματιών που καλύπτει όλες τις ανάγκες σας για φορολογικές συμβουλές, λογιστικές υπηρεσίες, νομική υποστήριξη και τεχνολογική καινοτομία. Με έδρα την Κύπρο και την Ελλάδα, προσφέρουμε ολοκληρωμένες λύσεις που ανταποκρίνονται στα υψηλότερα πρότυπα της αγοράς.'

/** Σύντομο κείμενο ήρωα — το πλήρες κείμενο εμφανίζεται στην ενότητα «Υπηρεσίες». */
export const TAX_NEX_HERO_LEAD_SHORT =
  'Εξειδικευμένη ομάδα για φορολογική υποστήριξη, λογιστική και ψηφιακές λύσεις — Κύπρος & Ελλάδα.'

export const TAX_NEX_HERO = {
  title: 'TaxNex App · TAXISnet Κύπρου',
  subtitle:
    'Αξιόπιστη καθοδήγηση για την υποβολή της φορολογικής σας δήλωσης, με ανθρώπινη υποστήριξη και τεχνολογία που απλοποιεί τη διαδικασία.',
}

export type TaxNexServiceStage = {
  stage: string
  title: string
  body: string
}

/** «Οι Υπηρεσίες Μας» — στάδια όπως στο reference (Στάδιο 2 με πλήρες κείμενο από τη σελίδα) */
export const TAX_NEX_SERVICE_STAGES: TaxNexServiceStage[] = [
  {
    stage: 'ΣΤΑΔΙΟ 1',
    title: 'Συμβουλευτική & προετοιμασία φακέλου',
    body:
      'Αξιολόγηση της φορολογικής σας κατάστασης, συλλογή δικαιολογητικών και σαφής οδηγός για τα επόμενα βήματα πριν από την υποβολή.',
  },
  {
    stage: 'ΣΤΑΔΙΟ 2',
    title: 'Υποβολή φορολογικής δήλωσης\n(Εύκολα & Γρήγορα)',
    body:
      'Απαντήστε σε λίγες απλές ερωτήσεις και θα σας καθοδηγήσουμε στην υποβολή των φόρων σας, με τελικό έλεγχο από εξειδικευμένο συνεργάτη πριν την υποβολή.',
  },
  {
    stage: 'ΣΤΑΔΙΟ 3',
    title: 'Υποστήριξη μετά την υποβολή',
    body:
      'Διαθέσιμοι για διευκρινίσεις, διορθώσεις και παρακολούθηση των υποχρεώσεών σας όλη τη χρονιά.',
  },
]

export const TAX_NEX_MISSION = {
  title: 'Στόχος μας είναι να σας βοηθήσουμε να υποβάλετε σωστά τη φορολογική σας δήλωση',
  lines: ['Ασφαλείς και αξιόπιστες συμβουλές για τη φορολογική σας δήλωση.'],
}

export type TaxNexStep = {
  step: string
  title: string
  lead: string
  cta: string
  href: string
}

export const TAX_NEX_STEPS: TaxNexStep[] = [
  {
    step: 'Βήμα 1',
    title: 'αποκτήστε ΑΦΜ',
    lead: 'Επικοινωνήστε μαζί μας για βοήθεια.',
    cta: 'ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ',
    href: '/services/tax/how-to-get-a-tic',
  },
  {
    step: 'Βήμα 2',
    title: 'αποκτήστε TAXISnet',
    lead: 'Επικοινωνήστε μαζί μας για βοήθεια.',
    cta: 'ΔΙΑΒΑΣΤΕ ΠΕΡΙΣΣΟΤΕΡΑ',
    href: '/services/tax/how-to-register-to-taxisnet',
  },
  {
    step: 'Βήμα 3',
    title: 'αποκτήστε TaxNex',
    lead: 'Ολοκληρώστε την εγγραφή και ξεκινήστε την απλή ροή υποβολής με την ομάδα μας.',
    cta: 'ΕΠΙΚΟΙΝΩΝΗΣΤΕ',
    href: '/contact',
  },
]

export type TaxNexToolCard = {
  title: string
  description: string
  cta: string
  href: string
}

export const TAX_NEX_TOOL_CARDS: TaxNexToolCard[] = [
  {
    title: 'ΥΠΟΛΟΓΙΣΜΟΣ ΦΟΡΟΥ ΕΙΣΟΔΗΜΑΤΟΣ',
    description:
      'Εισάγετε τον ετήσιο ή μηνιαίο μικτό μισθό (με 13ο, 14ο, μπόνους). Ο πλήρης υπολογιστής είναι στα αγγλικά για ακρίβεια.',
    cta: 'ΥΠΟΛΟΓΙΣΤΕ ΤΟΝ ΦΟΡΟ ΣΑΣ',
    href: TAX_INCOME_CALCULATOR_PATH,
  },
  {
    title: 'ΥΠΟΛΟΓΙΣΜΟΣ ΜΕΤΑΒΙΒΑΣΤΙΚΩΝ ΤΕΛΩΝ',
    description:
      'Θα αγοράσεις ακίνητο στην Κύπρο; Μάθε πόσα μεταβιβαστικά τέλη θα πληρώσεις, πριν από την αγορά.',
    cta: 'ΥΠΟΛΟΓΙΣΜΟΣ',
    href: '/services/tax/transfer-fees-calculator',
  },
  {
    title: 'ΥΠΟΛΟΓΙΣΜΟΣ DOMICILE TEST',
    description: 'Είσαι «Non-Dom» φορολογικός κάτοικος Κύπρου; Γρήγορος έλεγχος με βάση τα κριτήρια διαμονής.',
    cta: 'ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ',
    href: '/contact',
  },
]

/** ΦΠΑ — εμφάνιση όπως στο TaxNex (τιμές +19%). */
export const TAX_NEX_VAT_PCT = 19

export type TaxNexPricingPlan = {
  id: 'diy' | 'advisor' | 'self-employed'
  /** Short label e.g. image / product line */
  kicker: string
  title: string
  description: string
  priceEur: number
  /** Extra lines for the self-employed card */
  includes?: string[]
  image: string
  imageAlt: string
}

/**
 * Πακέτα υποβολής φορολογικής δήλωσης — στοχεύουν σε Stripe (ή JCC) checkout URL ανά πακέτο.
 */
export const TAX_NEX_PRICING_PLANS: TaxNexPricingPlan[] = [
  {
    id: 'diy',
    kicker: 'ΥΠΟΒΑΛΕΤΕ ΜΟΝΟΙ ΣΑΣ',
    title: 'Υποβολή φορολογικής δήλωσης\n(Εύκολα & Γρήγορα)',
    description:
      'Απαντήστε σε λίγες απλές ερωτήσεις και θα σας καθοδηγήσουμε στην υποβολή των φόρων σας, με τελικό έλεγχο από ειδικούς πριν την αποστολή.',
    priceEur: 29,
    image: '/images/services/tax-services/tax-thumb.webp',
    imageAlt: 'Υποβολή μόνοι σας',
  },
  {
    id: 'advisor',
    kicker: 'ΜΕ ΦΟΡΟΛΟΓΙΚΟ ΣΥΜΒΟΥΛΟ',
    title: 'Υποβολή φορολογικής δήλωσης με φορολογικό σύμβουλο.\n(Δίπλα σας σε κάθε βήμα)',
    description:
      'Αναλαμβάνουμε όλη τη διαδικασία για εσάς. Χωρίς ταλαιπωρία, χωρίς εμπλοκή — απλώς μας στέλνετε τα απαραίτητα έγγραφα.',
    priceEur: 65,
    image: '/images/services/tax-services/tax-body.webp',
    imageAlt: 'Με σύμβουλο',
  },
  {
    id: 'self-employed',
    kicker: 'ΑΥΤΟΕΡΓΟΔΟΤΟΥΜΕΝΟΙ',
    title: 'ΑΥΤΟΕΡΓΟΔΟΤΟΥΜΕΝΟΙ',
    description:
      '(Κερδίστε Χρόνο και Χρήμα) Ένας αφοσιωμένος φοροτεχνικός φροντίζει για την υποβολή των φόρων σας 95,00 € +19% ΦΠΑ',
    priceEur: 95,
    includes: ['υποβολή Δήλωσης Εισοδήματος', 'υπολογισμός προσωρινής φορολογίας'],
    image: '/images/services/tax-services/tax-hero.webp',
    imageAlt: 'Αυτοεργοδοτούμενοι',
  },
]

export const TAX_NEX_NEWSLETTER = {
  title: 'Το ενημερωτικό μας δελτίο',
  description:
    'Εγγραφείτε για να λαμβάνετε τις τελευταίες ενημερώσεις για χρηματοοικονομικές και επιχειρηματικές υπηρεσίες.',
  altLine: 'Alternative: επικοινωνήστε απευθείας για εξατομικευμένη συμβουλή.',
}

export type TaxNexLocale = 'en' | 'el'

const TAX_NEX_ADDRESS_LINE_EN = '51 Griva Digeni, 6036, Larnaca'
const TAX_NEX_META_LEAD_EN =
  'We are a specialized and experienced team of professionals covering all your needs for tax advisory, accounting services, legal support, and technology innovation. Based in Cyprus and Greece, we deliver integrated solutions aligned with the highest market standards.'

const TAX_NEX_SERVICE_STAGES_EN: TaxNexServiceStage[] = [
  {
    stage: 'STAGE 1',
    title: 'Advisory & file preparation',
    body:
      'Assessment of your tax profile, document collection, and a clear guide for the next steps before submission.',
  },
  {
    stage: 'STAGE 2',
    title: 'Tax return submission\n(Easy & Fast)',
    body:
      'Answer a few simple questions and we guide you through submission, with a final review by a specialist before filing.',
  },
  {
    stage: 'STAGE 3',
    title: 'Post-submission support',
    body: 'Available for clarifications, corrections, and ongoing compliance monitoring throughout the year.',
  },
]

const TAX_NEX_MISSION_EN = {
  title: 'Our mission is to help you submit your tax return correctly',
  lines: ['Secure and reliable advice for your tax declaration.'],
}

const TAX_NEX_STEPS_EN: TaxNexStep[] = [
  {
    step: 'Step 1',
    title: 'Get a TIN',
    lead: 'Contact us for support.',
    cta: 'READ MORE',
    href: '/services/tax/how-to-get-a-tic',
  },
  {
    step: 'Step 2',
    title: 'Get TAXISnet',
    lead: 'Contact us for support.',
    cta: 'READ MORE',
    href: '/services/tax/how-to-register-to-taxisnet',
  },
  {
    step: 'Step 3',
    title: 'Get TaxNex',
    lead: 'Complete registration and start the simple filing flow with our team.',
    cta: 'CONTACT',
    href: '/contact',
  },
]

const TAX_NEX_TOOL_CARDS_EN: TaxNexToolCard[] = [
  {
    title: 'INCOME TAX CALCULATOR',
    description:
      'Enter annual or monthly gross salary (including 13th, 14th, bonuses). Full calculator is in English for precision.',
    cta: 'CALCULATE YOUR TAX',
    href: TAX_INCOME_CALCULATOR_PATH,
  },
  {
    title: 'TRANSFER FEES CALCULATOR',
    description: 'Buying property in Cyprus? Estimate transfer fees before your purchase.',
    cta: 'CALCULATE',
    href: '/services/tax/transfer-fees-calculator',
  },
  {
    title: 'DOMICILE TEST',
    description: 'Are you a Cyprus Non-Dom tax resident? Quick check based on residency criteria.',
    cta: 'LEARN MORE',
    href: '/contact',
  },
]

const TAX_NEX_PRICING_PLANS_EN: TaxNexPricingPlan[] = [
  {
    id: 'diy',
    kicker: 'DO IT YOURSELF',
    title: 'Tax return submission\n(Easy & Fast)',
    description:
      'Answer a few simple questions and we guide your filing, with final specialist review before submission.',
    priceEur: 29,
    image: '/images/services/tax-services/tax-thumb.webp',
    imageAlt: 'Submit by yourself',
  },
  {
    id: 'advisor',
    kicker: 'WITH TAX ADVISOR',
    title: 'Tax return submission with a tax advisor\n(By your side at every step)',
    description:
      'We handle the whole process for you. No hassle, no complexity — simply send us the required documents.',
    priceEur: 65,
    image: '/images/services/tax-services/tax-body.webp',
    imageAlt: 'With advisor',
  },
  {
    id: 'self-employed',
    kicker: 'SELF-EMPLOYED',
    title: 'SELF-EMPLOYED',
    description:
      '(Save Time and Money) A dedicated tax specialist handles your filing. 95.00 EUR + 19% VAT',
    priceEur: 95,
    includes: ['income tax return filing', 'provisional tax computation'],
    image: '/images/services/tax-services/tax-hero.webp',
    imageAlt: 'Self-employed',
  },
]

const TAX_NEX_NEWSLETTER_EN = {
  title: 'Our newsletter',
  description: 'Subscribe to receive the latest updates on financial and business services.',
  altLine: 'Alternative: contact us directly for personalized guidance.',
}

function normalizeTaxLocale(locale: string): TaxNexLocale {
  return locale === 'en' ? 'en' : 'el'
}

export function getTaxNexAddressLine(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_ADDRESS_LINE_EN : TAX_NEX_ADDRESS_LINE
}

export function getTaxNexMetaLead(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_META_LEAD_EN : TAX_NEX_META_LEAD
}

export function getTaxNexServiceStages(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_SERVICE_STAGES_EN : TAX_NEX_SERVICE_STAGES
}

export function getTaxNexMission(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_MISSION_EN : TAX_NEX_MISSION
}

export function getTaxNexSteps(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_STEPS_EN : TAX_NEX_STEPS
}

export function getTaxNexToolCards(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_TOOL_CARDS_EN : TAX_NEX_TOOL_CARDS
}

export function getTaxNexPricingPlans(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_PRICING_PLANS_EN : TAX_NEX_PRICING_PLANS
}

export function getTaxNexNewsletter(locale: string) {
  return normalizeTaxLocale(locale) === 'en' ? TAX_NEX_NEWSLETTER_EN : TAX_NEX_NEWSLETTER
}
