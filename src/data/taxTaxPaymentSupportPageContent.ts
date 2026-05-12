/**
 * TaxNex-style inner guide: Βοήθεια φορολογικών πληρωμών.
 * Greek aligned with https://taxnexcy.com; English parallel; premium article layout.
 */

import type { TaxGuideArticleBlock } from './taxHowToTicPageContent'
import { TAX_TIC_HERO_IMAGE } from './taxHowToTicPageContent'

export const TAX_PAYMENT_SUPPORT_HERO_IMAGE = TAX_TIC_HERO_IMAGE

export const TAX_PAYMENT_SUPPORT_PAGE_TITLES = {
  el: {
    sidebar: 'Οι Υπηρεσίες Μας',
    h1: 'Βοήθεια φορολογικών πληρωμών',
    intro:
      'Πότε πληρώνετε φόρους στην Κύπρο, πώς γίνονται οι εμπρόθεσμες και οι εκπρόθεσμες πληρωμές μέσω τραπεζικής και Πύλης Φόρων — με τη δομή του taxnexcy.com.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Βοήθεια φορολογικών πληρωμών',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
  },
  en: {
    sidebar: 'Our services',
    h1: 'Tax payment support',
    intro:
      'When Cyprus taxes fall due, how to pay on time via banking and the Tax Portal, and how late payments work — aligned with TaxNex Cyprus.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Tax payment support',
    primaryCta: 'Contact us',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
  },
} as const

export const TAX_PAYMENT_SUPPORT_ARTICLE_BLOCKS: TaxGuideArticleBlock[] = [
  {
    type: 'h2',
    el: 'Διαδικασία',
    en: 'Process',
  },
  {
    type: 'h3',
    el: 'Πότε πρέπει να πληρώσετε τους φόρους σας;',
    en: 'When do you need to pay your taxes?',
  },
  {
    type: 'p',
    el: 'Η απάντηση εξαρτάται από τον «τύπο» του εισοδήματος που αποκτάτε. Ανάλογα με τον «τύπο», οι φορολογούμενοι συνήθως πρέπει να καταβάλλουν το σχετικό ποσό του οφειλόμενου φόρου (στη φορολογική υπηρεσία) σε μηνιαία, τριμηνιαία ή ετήσια βάση — ή ακόμη και κατά την υποβολή της φορολογικής δήλωσης.',
    en: 'The answer depends on the type of income you earn. Depending on that type, taxpayers are generally required to pay the relevant amount of tax due (to the tax authorities) on a monthly, quarterly, or annual basis — or even at the time the tax return is filed.',
  },
  {
    type: 'h3',
    el: 'Πώς να πληρώσω τους φόρους μου;',
    en: 'How do I pay my taxes?',
  },
  {
    type: 'p',
    el: 'Οι φορολογικές πληρωμές «εντός της προθεσμίας» μπορούν να γίνουν μέσω των ακόλουθων τρόπων:',
    en: 'Tax payments made within the statutory deadline can be completed through the following channels:',
  },
  {
    type: 'ul',
    el: [
      'Προσωπικό internet banking: χρειάζεστε τον αριθμό αναφοράς πληρωμής που εμφανίζεται στις Καταστάσεις Οφειλόμενων Ποσών στην Πύλη Φόρων.',
      'Σε ορισμένες περιπτώσεις πρέπει να δημιουργήσετε την «εκτίμηση» στην Πύλη Φόρων μόνοι σας — το οφειλόμενο ποσό ενδέχεται να μην εμφανίζεται αυτόματα.',
      'Πύλη JCC Smart web (όπου εφαρμόζεται για εμπρόθεσμες πληρωμές).',
    ],
    en: [
      'Personal internet banking: you need the payment reference number shown on the Amounts Due statements in the Tax Portal.',
      'In some cases you must create the “estimate” in the Tax Portal yourself — the amount due may not appear automatically.',
      'JCC Smart web portal (where applicable for on-time payments).',
    ],
  },
  {
    type: 'h3',
    el: 'Εκπρόθεσμες πληρωμές',
    en: 'Late payments',
  },
  {
    type: 'p',
    el: 'Οι εκπρόθεσμες πληρωμές μπορούν να εξοφληθούν μόνο μέσω internet banking, χρησιμοποιώντας τον αριθμό αναφοράς πληρωμής που εμφανίζεται στις Καταστάσεις Οφειλόμενων Ποσών στην Πύλη Φόρων (βλέπε παραπάνω). Σε αυτή την περίπτωση επιβάλλονται τόκοι και πρόστιμα.',
    en: 'Late payments can only be settled via internet banking, using the payment reference number shown on the Amounts Due statements in the Tax Portal (see above). In that case interest and penalties apply.',
  },
  {
    type: 'p',
    el: 'Η TaxNex Cyprus μπορεί να σας καθοδηγήσει στην ανάγνωση των υποχρεώσεών σας στην Πύλη Φόρων, στην προετοιμασία πληρωμών και στην αποφυγή εκπροθέσμων καταστάσεων — επικοινωνήστε μαζί μας για εξατομικευμένη υποστήριξη.',
    en: 'TaxNex Cyprus can help you interpret your liabilities in the Tax Portal, prepare payments, and avoid falling into arrears — contact us for tailored support.',
  },
]
