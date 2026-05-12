/**
 * TaxNex-style inner guide: Non-Dom certificates.
 * Greek and English text aligned with https://taxnexcy.com (Πιστοποιητικά Non-Dom / Non-Dom Certificates).
 */

import type { TaxGuideArticleBlock } from './taxHowToTicPageContent'
import { TAX_TIC_HERO_IMAGE } from './taxHowToTicPageContent'

export const TAX_NON_DOM_HERO_IMAGE = TAX_TIC_HERO_IMAGE

export const TAX_NON_DOM_PAGE_TITLES = {
  el: {
    sidebar: 'Οι Υπηρεσίες Μας',
    h1: 'Πιστοποιητικά Non-Dom',
    intro:
      'Τι είναι το πιστοποιητικό "μη κατοίκου", ποιος το δικαιούται, ποια είναι τα οφέλη και πώς υποβάλλεται η αίτηση — όπως στο taxnexcy.com.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Πιστοποιητικά Non-Dom',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
  },
  en: {
    sidebar: 'Our services',
    h1: 'Non-Dom certificates',
    intro:
      'What a non-dom certificate is, who qualifies, the benefits, and how to apply — aligned with TaxNex Cyprus.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Non-Dom certificates',
    primaryCta: 'Contact us',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
  },
} as const

export const TAX_NON_DOM_ARTICLE_BLOCKS: TaxGuideArticleBlock[] = [
  {
    type: 'h2',
    el: 'Διαδικασία',
    en: 'Process',
  },
  {
    type: 'h3',
    el: 'Τι είναι πιστοποιητικό "μη κατοίκου";',
    en: 'What is a “non-dom” certificate?',
  },
  {
    type: 'p',
    el: 'Ένα πιστοποιητικό "μη κατοίκου" είναι ένα πιστοποιητικό που εκδίδεται από το Τμήμα Φορολογίας της Κύπρου το οποίο επιβεβαιώνει ότι ένα άτομο είναι "μη κάτοικος" Κύπρου (γνωστός και ως "non-dom"). Οι "μη κάτοικοι" Κύπρου απαλλάσσονται από την υποχρέωση καταβολής Ειδικής Αμυντικής Εισφοράς (ΕΑΕ) επί παθητικών εισοδημάτων (δηλαδή τόκοι, μερίσματα και εισόδημα από ενοίκια) για περίοδο 17 ετών!',
    en: 'A “non-dom certificate” is a certificate issued by the Cyprus Tax Department which confirms that an individual is a Cyprus “non-domiciled” (aka “non-dom”) person. Cyprus non-doms are exempt from the obligation to pay Special Defence Contribution (SDC) on passive income (i.e. interest, dividends and rental income) for a period of 17 years!',
  },
  {
    type: 'h3',
    el: 'Ποιος είναι μη κάτοικος;',
    en: 'Who is a non-dom?',
  },
  {
    type: 'p',
    el: 'Υπάρχουν δύο τύποι κατοικίας:',
    en: 'There are two types of domicility:',
  },
  {
    type: 'p',
    el: 'Κατοικία καταγωγής – δηλαδή η κατοικία που λαμβάνεται κατά τη γέννηση (συνήθως εξαρτάται από την πλευρά του πατέρα). Με άλλα λόγια, το Τμήμα Φορολογίας της Κύπρου θα εξετάσει τον τόπο γέννησής σας και επίσης τον τόπο γέννησης του πατέρα σας (ή της μητέρας σας σε ορισμένες περιπτώσεις).',
    en: 'Domicile of origin – i.e. the domicile received at birth (usually dependent on the father’s side). In other words, the Cyprus Tax Department will be looking at your place of birth and also your father’s (or mother’s in certain cases) place of birth.',
  },
  {
    type: 'p',
    el: 'Κατοικία επιλογής – δηλαδή η χώρα στην οποία έχει εγκατασταθεί το μόνιμο σπίτι σας (και επίσης του πατέρα ή της μητέρας σας).',
    en: 'Domicile of choice – i.e. the country in which your permanent home (and also your father’s, or mother’s) is established.',
  },
  {
    type: 'p',
    el: 'Εάν δεν έχετε κατοικία στην Κύπρο (είτε από καταγωγή / επιλογή) τότε μπορείτε να υποβάλετε αίτηση για πιστοποιητικό "μη κατοίκου" (βλέπε παρακάτω).',
    en: 'If you are not domiciled in Cyprus (whether by origin or choice) then you may apply for a “non-dom” certificate (see below).',
  },
  {
    type: 'p',
    el: 'Ανεξάρτητα από τα παραπάνω, άτομα που έχουν υπάρξει φορολογικοί κάτοικοι Κύπρου για τουλάχιστον 17 έτη από τα τελευταία 20 έτη πριν από το εν λόγω φορολογικό έτος, θα θεωρούνται ότι έχουν κατοικία στην Κύπρο και δεν μπορούν να υποβάλουν αίτηση για πιστοποιητικό "μη κατοίκου" και απαλλαγή.',
    en: 'Irrespective of the above, individuals who have been Cyprus tax residents for at least 17 years out of the last 20 years prior to the tax year in question will be deemed to be domiciled in Cyprus and cannot apply for a “non-dom” certificate and exemption.',
  },
  {
    type: 'p',
    el: 'Άτομα που έχουν την κατοικία καταγωγής τους στην Κύπρο (όπως ορίζεται παραπάνω), μπορούν να υποβάλουν αίτηση για απαλλαγή μη κατοίκου εάν:',
    en: 'Individuals who have their domicile of origin in Cyprus (as defined above) can apply for non-dom exemption if:',
  },
  {
    type: 'ul',
    el: [
      'Ήταν μη φορολογικοί κάτοικοι Κύπρου για συνεχή περίοδο τουλάχιστον 20 διαδοχικών ετών πριν από το εν λόγω φορολογικό έτος και',
      'Έχουν αποκτήσει και διατηρήσει κατοικία επιλογής εκτός Κύπρου.',
    ],
    en: [
      'They were non–Cyprus tax residents for a continuous period of at least 20 consecutive years prior to the tax year in question, and',
      'They have acquired and maintained a domicile of choice outside Cyprus.',
    ],
  },
  {
    type: 'h3',
    el: 'Ποια είναι τα οφέλη από την υποβολή αίτησης για πιστοποιητικό "μη κατοίκου";',
    en: 'What are the benefits from applying for a “non-dom” certificate?',
  },
  {
    type: 'p',
    el: 'Φορολογικοί κάτοικοι Κύπρου με πιστοποιητικό "μη κατοίκου" απαλλάσσονται από την υποχρέωση καταβολής ΕΑΕ για περίοδο 17 ετών.',
    en: 'Cyprus tax resident individuals with a “non-dom” certificate are exempt from the obligation to pay SDC for a period of 17 years.',
  },
  {
    type: 'p',
    el: 'Επομένως, τα μερίσματα (φορολογούνται με 17% ΕΑΕ), οι τόκοι (φορολογούνται με 17% ΕΑΕ) και το εισόδημα από ενοίκια (φορολογούνται με πραγματικό συντελεστή 2,25% ΕΑΕ) θα είναι αφορολόγητα στην Κύπρο!',
    en: 'Therefore, dividends (taxed at 17% SDC), interest (taxed at 17% SDC) and rental income (taxed at an effective rate of 2.25% SDC) will be tax free in Cyprus!',
  },
  {
    type: 'h3',
    el: 'Πώς μπορώ να υποβάλω αίτηση για πιστοποιητικό "μη κατοίκου";',
    en: 'How can I apply for a “non-dom” certificate?',
  },
  {
    type: 'p',
    el: 'Πρέπει να υποβληθεί αίτηση στο Τμήμα Φορολογίας της Κύπρου.',
    en: 'An application needs to be submitted to the Cyprus Tax Department.',
  },
  {
    type: 'h3',
    el: 'Πώς μπορώ να υποβάλω την αίτηση;',
    en: 'How can I submit the application?',
  },
  {
    type: 'p',
    el: 'Θα χαρούμε να σας βοηθήσουμε να υποβάλετε αίτηση για «πιστοποιητικό μη κατοίκου». Το μόνο που έχετε να κάνετε είναι να επικοινωνήσετε μαζί μας!',
    en: 'We would be happy to help you apply for a “non-dom certificate”. All you have to do is get in touch!',
  },
]
