/**
 * TaxNex-style inner guide: Α.Φ.Μ. / TIC (Tax For All registration).
 * Structure mirrors taxnexcy.com service inner pages (sidebar + article).
 */

export type TaxGuideArticleBlock =
  | { type: 'p'; el: string; en: string }
  | { type: 'h2'; el: string; en: string }
  | { type: 'h3'; el: string; en: string }
  | { type: 'ul'; el: string[]; en: string[] }

export type TaxTicArticleBlock = TaxGuideArticleBlock

export type { TaxServiceGuideNavItem as TaxTicNavItem } from './taxTaxServiceGuideNav'

export const TAX_FOR_ALL_URL = 'https://taxforall.mof.gov.cy/Home'

export const TAX_TIC_HERO_IMAGE =
  'https://taxnexcy.com/wp-content/uploads/2025/06/px_blog_img_8.jpg'

export const TAX_TIC_PAGE_TITLES = {
  el: {
    sidebar: 'Οι Υπηρεσίες Μας',
    h1: 'Αριθμός Φορολογικού Μητρώου (Α.Φ.Μ.)',
    intro:
      'Οδηγός για την ηλεκτρονική εγγραφή σας στην πύλη Tax For All και την απόκτηση Α.Φ.Μ. — στο ίδιο πνεύμα με το taxnexcy.com.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Α.Φ.Μ. / TIC',
    portalCta: 'Άνοιγμα Tax For All',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
  },
  en: {
    sidebar: 'Our services',
    h1: 'Tax Identification Number (T.I.N.)',
    intro:
      'Step-by-step guidance for registering on the Tax For All e-portal and obtaining your Cyprus T.I.N., aligned with the TaxNex Cyprus service layout.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'T.I.N. / TIC',
    portalCta: 'Open Tax For All',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact us',
  },
} as const

export const TAX_TIC_ARTICLE_BLOCKS: TaxTicArticleBlock[] = [
  {
    type: 'p',
    el: 'Α. Δημιουργήστε λογαριασμό στην ηλεκτρονική Πύλη Tax For All (σύνδεσμος παρακάτω). Χρησιμοποιήστε προσωπικό e-mail που ελέγχετε τακτικά, ώστε να λαμβάνετε άμεσα τα μηνύματα ενεργοποίησης και επιβεβαίωσης.',
    en: 'A. Create an account on the Tax For All e-portal (link below). Use a personal email you check regularly so activation and confirmation messages reach you without delay.',
  },
  {
    type: 'h2',
    el: 'Βήματα εγγραφής',
    en: 'Registration steps',
  },
  {
    type: 'ul',
    el: [
      'Ανοίξτε την πύλη και επιλέξτε την επιλογή εγγραφής νέου χρήστη.',
      'Συμπληρώστε τα υποχρεωτικά στοιχεία ταυτότητας και επικοινωνίας ακριβώς όπως εμφανίζονται στα επίσημα έγγραφά σας.',
      'Υποβάλετε το αίτημα και ακολουθήστε τις οδηγίες στο email ενεργοποίησης (ελέγξτε και τον φάκελο ανεπιθύμητης αλληλογραφίας).',
      'Μετά την ενεργοποίηση, συνεχίστε με την επιλογή «Εγγραφή φυσικού προσώπου ως νέος φορολογούμενος» όπου ζητείται από τη ροή του συστήματος.',
    ],
    en: [
      'Open the portal and choose the new user registration option.',
      'Complete mandatory identity and contact fields exactly as they appear on your official documents.',
      'Submit the request and follow the activation email (check spam/junk as well).',
      'After activation, continue with “Register a natural person as a new taxpayer” when the system prompts you.',
    ],
  },
  {
    type: 'p',
    el: 'Η επιλογή «Εγγραφή φυσικού προσώπου ως νέος φορολογούμενος» οδηγεί στη συλλογή πρόσθετων στοιχείων που απαιτεί το Τμήμα Φορολογίας για την έκδοση Α.Φ.Μ. Ακολουθήστε τις οδηγίες της πύλης βήμα-βήμα και αποθηκεύστε τα επιβεβαιωτικά αρχεία που εκδίδονται μετά την υποβολή.',
    en: 'The “Register a natural person as a new taxpayer” path collects additional information required by the Tax Department for issuing a T.I.N. Follow the portal step-by-step and keep any confirmation documents issued after submission.',
  },
  {
    type: 'h2',
    el: 'Δικαιολογητικά (ενδεικτικά)',
    en: 'Supporting documents (indicative)',
  },
  {
    type: 'p',
    el: 'Πολίτες εκτός ΕΕ με κατοικία στην Κύπρο: συνήθως απαιτείται αντίγραφο του Πιστοποιητικού Μόνιμης Διαμονής από το Τμήμα Αρχείου Πληθυσμού και Μετανάστευσης (γνωστό και ως «ροζ χαρτί»), μαζί με τα λοιπά έγγραφα ταυτότητας που ζητά η πύλη για τον συγκεκριμένο τύπο εγγραφής.',
    en: 'Non–EU citizens residing in Cyprus: a copy of the Permanent Residence Certificate from the Civil Registry and Migration Department (commonly called the “pink slip”) is typically required, together with any identity documents the portal requests for your registration type.',
  },
  {
    type: 'p',
    el: 'Για πολίτες ΕΕ και λοιπές κατηγορίες, η πύλη εμφανίζει το ακριβές σύνολο δικαιολογητικών ανάλογα με την απάντησή σας στα ερωτηματολόγια. Σε περίπτωση αμφιβολίας, αποθηκεύστε το αίτημα ως πρόχειρο και ζητήστε έλεγχο από λογιστή πριν την οριστική υποβολή.',
    en: 'For EU citizens and other categories, the portal shows the exact document set based on your questionnaire answers. If unsure, save as draft and have an accountant review before final submission.',
  },
]
