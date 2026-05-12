/**
 * TaxNex-style inner guide: tax residence certificates (πιστοποιητικά φορολογικής κατοικίας).
 * Greek copy follows the structure and substance of taxnexcy.com service pages; English is a faithful parallel.
 */

import type { TaxGuideArticleBlock } from './taxHowToTicPageContent'
import { TAX_TIC_HERO_IMAGE } from './taxHowToTicPageContent'

export const TAX_RESIDENCE_HERO_IMAGE = TAX_TIC_HERO_IMAGE

export const TAX_RESIDENCE_PAGE_TITLES = {
  el: {
    sidebar: 'Οι Υπηρεσίες Μας',
    h1: 'Πιστοποιητικά φορολογικής κατοικίας',
    intro:
      'Πώς εκδίδεται το πιστοποιητικό φορολογικής κατοικίας από το Τμήμα Φορολογίας, ποιος θεωρείται φορολογικός κάτοικος Κύπρου και πώς μπορεί να σας βοηθήσει η TaxNex Cyprus.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Πιστοποιητικά φορολογικής κατοικίας',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
  },
  en: {
    sidebar: 'Our services',
    h1: 'Tax residence certificates',
    intro:
      'How the Tax Department issues a tax residence certificate, who qualifies as a Cyprus tax resident, and how TaxNex Cyprus can assist you.',
    breadcrumbParent: 'TaxNex Cyprus',
    breadcrumbCurrent: 'Tax residence certificates',
    primaryCta: 'Contact us',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
  },
} as const

export const TAX_RESIDENCE_ARTICLE_BLOCKS: TaxGuideArticleBlock[] = [
  {
    type: 'h2',
    el: 'Διαδικασία',
    en: 'Procedure',
  },
  {
    type: 'h3',
    el: 'Τι είναι το πιστοποιητικό φορολογικής κατοικίας;',
    en: 'What is a tax residence certificate?',
  },
  {
    type: 'p',
    el: 'Το πιστοποιητικό φορολογικής κατοικίας είναι έγγραφο που εκδίδεται από το Τμήμα Φορολογίας της Κύπρου και επιβεβαιώνει ότι ένα φυσικό ή νομικό πρόσωπο είναι φορολογικός κάτοικος Κύπρου για το συγκεκριμένο φορολογικό έτος (ή την περίοδο που αναφέρεται στο αίτημα). Χρησιμοποιείται συχνά προς τρίτες χώρες, τράπεζες, φορολογικές αρχές του εξωτερικού ή άλλους οργανισμούς που απαιτούν επίσημη βεβαίωση φορολογικής κατοικίας.',
    en: 'A tax residence certificate is a document issued by the Cyprus Tax Department confirming that an individual or legal entity is a Cyprus tax resident for the relevant tax year (or the period stated in the application). It is commonly used with third countries, banks, foreign tax authorities, or other organisations that require official proof of tax residence.',
  },
  {
    type: 'h3',
    el: 'Γιατί χρειάζομαι πιστοποιητικό φορολογικής κατοικίας;',
    en: 'Why do I need a tax residence certificate?',
  },
  {
    type: 'p',
    el: 'Το πιστοποιητικό αποδεικνύει ότι υπόκειστε στη φορολογία στην Κύπρο σύμφωνα με την εγχώρια νομοθεσία και μπορεί να συνδράμει στην εφαρμογή συμβάσεων αποφυγής διπλής φορολογίας (Σ.Α.Δ.Φ.), στην απαλλαγή ή μείωση παρακράτησης σε μερίσματα, τόκους και δικαιώματα, καθώς και σε διασυνοριακές διαδικασίες όπου ζητείται επίσημη βεβαίωση από την κυπριακή φορολογική διοίκηση.',
    en: 'The certificate shows that you fall within the Cyprus tax system under domestic law and can support the application of double tax treaties (DTTs), relief or reduced withholding on dividends, interest and royalties, and cross-border procedures where the Cyprus tax authorities must confirm your status.',
  },
  {
    type: 'h3',
    el: 'Ποιος θεωρείται φορολογικός κάτοικος Κύπρου;',
    en: 'Who is considered a Cyprus tax resident?',
  },
  {
    type: 'p',
    el: 'Για φυσικά πρόσωπα, οι βασικοί κανόνες (ενδεικτικά) είναι: (α) ο κανόνας των 183 ημερών — παραμονή στην Κύπρο για περισσότερες από 183 ημέρες στο ίδιο φορολογικό έτος· (β) ο κανόνας των 60 ημερών — παραμονή στην Κύπρο για τουλάχιστον 60 ημέρες στο φορολογικό έτος, εφόσον δεν παραμένετε φορολογικός κάτοικος άλλης χώρας για το ίδιο έτος και πληρούνται πρόσθετες προϋποθέσεις που ορίζει ο νόμος (π.χ. επιχειρηματική ή επαγγελματική δραστηριότητα στην Κύπρο, μόνιμη κατοικία στην Κύπρο, ή θέση διευθυντικής λειτουργίας σε κυπριακή εταιρεία).',
    en: 'For individuals, the main rules (in summary) are: (a) the 183-day rule — staying in Cyprus for more than 183 days in the same tax year; (b) the 60-day rule — staying in Cyprus for at least 60 days in the tax year, provided you are not tax resident in another country for that year and further statutory conditions are met (for example business or employment activity in Cyprus, a permanent home in Cyprus, or an executive role in a Cyprus company).',
  },
  {
    type: 'p',
    el: 'Η ακριβής εφαρμογή των κανόνων εξαρτάται από τα πραγματικά περιστατικά κάθε περίπτωσης. Ο αριθμός των ημερών παραμονής υπολογίζεται με συγκεκριμένο τρόπο (για παράδειγμα ημέρα άφιξης και ημέρα αναχώρησης μπορεί να μετρούν ως πλήρεις ημέρες παραμονής στην Κύπρο). Για νομικά πρόσωπα ισχύουν χωριστοί κανόνες διαχείρισης και εγκατάστασης (management and control).',
    en: 'How the rules apply depends on the facts of each case. Days of presence are counted in a specific way (for example, the day of arrival and the day of departure may each count as a full day in Cyprus). Legal entities are subject to separate management-and-control tests.',
  },
  {
    type: 'h3',
    el: 'Πώς αποκτώ πιστοποιητικό φορολογικής κατοικίας;',
    en: 'How do I obtain a tax residence certificate?',
  },
  {
    type: 'p',
    el: 'Η έκδοση γίνεται μέσω του Τμήματος Φορολογίας, σύμφωνα με τις ισχύουσες διαδικασίες και φόρμες (συμπεριλαμβανομένων ηλεκτρονικών υποβολών όπου εφαρμόζεται). Απαιτείται συνήθως σχετικό αίτημα, στοιχεία ταυτοποίησης και, όπου ζητείται, συμπλήρωση ερωτηματολογίου ή πρόσθετα δικαιολογητικά για την τεκμηρίωση της φορολογικής κατοικίας για το έτος αναφοράς.',
    en: 'Issuance is handled by the Tax Department under the current procedures and forms (including electronic filing where applicable). You will normally need to submit an application, identification details, and any questionnaire or supporting documents required to evidence tax residence for the year in question.',
  },
  {
    type: 'p',
    el: 'Η TaxNex Cyprus μπορεί να σας καθοδηγήσει στην προετοιμασία του αιτήματος, στον έλεγχο των δικαιολογητικών και στην επικοινωνία με τις αρμόδιες υπηρεσίες, ώστε η διαδικασία να ολοκληρωθεί ομαλά και με πλήρη συμμόρφωση προς την κείμενη νομοθεσία.',
    en: 'TaxNex Cyprus can guide you in preparing the application, reviewing supporting documents, and liaising with the competent authorities so the process is completed smoothly and in line with applicable law.',
  },
]
