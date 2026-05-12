/**
 * TaxNex-style inner guide: Φορολογικές εκκαθαρίσεις (tax clearance certificate).
 * Substance aligned with taxnexcy.com; copy and structure tuned for a premium editorial layout.
 */

import type { TaxGuideArticleBlock } from './taxHowToTicPageContent'
import { TAX_TIC_HERO_IMAGE } from './taxHowToTicPageContent'

export const TAX_CLEARANCES_HERO_IMAGE = TAX_TIC_HERO_IMAGE

export const TAX_CLEARANCES_PAGE_TITLES = {
  el: {
    sidebar: 'Οι Υπηρεσίες Μας',
    h1: 'Φορολογικές εκκαθαρίσεις',
    intro:
      'Επίσημη βεβαίωση φορολογικής ενημερότητας, διεθνής χρησιμότητα και οργανωμένη υποστήριξη για την αίτησή σας στο Τμήμα Φορολογίας.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Φορολογικές εκκαθαρίσεις',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
  },
  en: {
    sidebar: 'Our services',
    h1: 'Tax clearances',
    intro:
      'Official proof of tax compliance, how it supports cross-border filings, and discreet support through your Cyprus Tax Department application.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Tax clearances',
    primaryCta: 'Contact us',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
  },
} as const

export const TAX_CLEARANCES_ARTICLE_BLOCKS: TaxGuideArticleBlock[] = [
  {
    type: 'h2',
    el: 'Διαδικασία',
    en: 'Process',
  },
  {
    type: 'h3',
    el: 'Τι είναι το πιστοποιητικό φορολογικής ενημερότητας;',
    en: 'What is a tax clearance certificate?',
  },
  {
    type: 'p',
    el: 'Το πιστοποιητικό φορολογικής ενημερότητας εκδίδεται από το Τμήμα Φορολογίας της Κύπρου αφού ελεγχθούν τα φορολογικά σας έντυπα και στοιχεία· βεβαιώνει ότι οι σχετικές υποχρεώσεις έχουν υποβληθεί και διευθετηθεί για την περίοδο που καλύπτει το αίτημα. Αποτελεί την επίσημη απόδειξη συμμόρφωσής σας έναντι της κυπριακής φορολογικής διοίκησης και χρησιμοποιείται όταν τρίτοι ζητούν διασταυρωμένη επιβεβαίωση από τις αρχές.',
    en: 'A tax clearance certificate is issued by the Cyprus Tax Department after your tax returns and records are reviewed. It confirms that the obligations covered by the application have been filed and settled. It is the formal proof of your standing with the Cyprus tax administration, commonly supplied when counterparties or authorities ask for verified confirmation from the source.',
  },
  {
    type: 'h3',
    el: 'Γιατί χρειάζεται;',
    en: 'Why is it needed?',
  },
  {
    type: 'p',
    el: 'Σύμφωνα με την κυπριακή φορολογική νομοθεσία, οι φορολογικοί κάτοικοι Κύπρου υπόκεινται σε φορολόγηση στην Κύπρο επί παγκόσμιου εισοδήματος. Το πιστοποιητικό ενημερότητας τεκμηριώνει ότι έχετε εκπληρώσει τις αντίστοιχες υποχρεώσεις στην Κύπρο και διευκολύνει διαδικασίες όπου απαιτείται διαφανής απόδειξη κατάστασης πριν από επόμενα βήματα στο εξωτερικό ή σε χρηματοπιστωτικούς φορείς.',
    en: 'Under Cyprus tax law, Cyprus tax residents are within scope for Cyprus taxation on worldwide income. A clearance certificate documents that you have met the relevant Cyprus obligations. That evidence is often requested before institutions or authorities abroad will accept relief, reduced withholding, or the next step in a cross-border compliance chain.',
  },
  {
    type: 'h3',
    el: 'Διεθνής διάσταση & διπλή φορολόγηση',
    en: 'International use & double taxation',
  },
  {
    type: 'p',
    el: 'Για να αποφευχθεί η επιβολή φόρου επί του ίδιου εισοδήματος περισσότερες από μία φορές (στην Κύπρο και σε άλλη χώρα), πολλές αλλοδαπές φορολογικές αρχές ζητούν το πιστοποιητικό ώστε να διαπιστώσουν ότι οι φορολογικές σας υποχρεώσεις στην Κύπρο έχουν εξοφληθεί ή ρυθμιστεί σύμφωνα με το ισχύον πλαίσιο — πρόκειται για τυπικό, αλλά κρίσιμο, στοιχείο τεκμηρίωσης σε διεθνείς συναλλαγές και δηλώσεις.',
    en: 'To mitigate the risk of the same income being taxed more than once—in Cyprus and elsewhere—foreign tax authorities often ask for this certificate so they can see that Cyprus liabilities have been paid or appropriately arranged. It is a standard yet pivotal piece of documentation in international reporting, financing, and treaty-related workflows.',
  },
  {
    type: 'h3',
    el: 'Πώς μπορώ να κάνω αίτηση;',
    en: 'How can I apply?',
  },
  {
    type: 'p',
    el: 'Η αίτηση υποβάλλεται στο Τμήμα Φορολογίας με τα προβλεπόμενα έντυπα και συνημμένα. Μπορούμε να οργανώσουμε τον φάκελό σας, να ελέγξουμε πληρότητα και συνέπεια, να συντονίσουμε την επικοινωνία με τις αρμόδιες υπηρεσίες και να σας καθοδηγήσουμε σε κάθε στάδιο μέχρι την έκδοση του πιστοποιητικού — επικοινωνήστε μαζί μας για να ξεκινήσουμε χωρίς καθυστέρηση.',
    en: 'Applications are submitted to the Cyprus Tax Department with the prescribed forms and attachments. We can assemble and review your file for completeness, coordinate with the competent services, and guide you through each stage to issuance—contact us when you are ready to move forward without friction.',
  },
]
