import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/** Greek FAQ — copied from https://taxnexcy.com (Συχνές ερωτήσεις), structure preserved. */
export type TaxNexFaqItem = {
  question: string
  answer: ReactNode
}

/** In-page anchor for FAQ on `/services/tax`. Subnav links to `/services/tax#tax-faq`. */
export const TAX_NEX_FAQ_SECTION_ID = 'tax-faq'

export const TAX_NEX_FAQ_HEADING = {
  eyebrow: 'Συχνές ερωτήσεις',
  title: 'Εάν έχετε οποιεσδήποτε ερωτήσεις',
}

export const TAX_NEX_FAQ_ITEMS: TaxNexFaqItem[] = [
  {
    question: 'Πόσο ασφαλή είναι τα δεδομένα και οι προσωπικές μου πληροφορίες;',
    answer: (
      <>
        <p>
          Είμαστε 100% δεσμευμένοι να διατηρούμε τα προσωπικά σας δεδομένα <strong>ασφαλή</strong>.
        </p>
        <p>
          1. Το TaxNexcy.com είναι αδειοδοτημένο, εγκεκριμένο και ρυθμιζόμενο από το ICPAC – το μοναδικό αναγνωρισμένο σώμα
          Λογιστών και Ελεγκτών στην Κύπρο.
        </p>
        <p>2. Προστατεύουμε τα δεδομένα σας και διαφυλάσσουμε το απόρρητό σας χρησιμοποιώντας κορυφαία τεχνολογία και πρακτικές του κλάδου.</p>
        <p>3. Συμμορφωνόμαστε και ξεπερνάμε όλους τους κανόνες και κανονισμούς που σχετίζονται με την προστασία δεδομένων (GDPR).</p>
        <p>4. Διατηρούμε πάντα τις πληροφορίες σας εμπιστευτικές. Δεν πουλάμε ή/και ενοικιάζουμε τις πληροφορίες σας σε τρίτα μέρη.</p>
      </>
    ),
  },
  {
    question: 'Υποβάλλω τη φορολογική μου δήλωση για πρώτη φορά. Μπορώ να χρησιμοποιήσω το TaxNexcy.com;',
    answer: (
      <>
        <p>Φυσικά και μπορείτε! Αρκεί να:</p>
        <p>
          1. Έχετε ΑΦΜ – Αριθμό Φορολογικής Μητρώας (δείτε παρακάτω) <br />
          2. Είστε εγγεγραμμένοι στο TAXISnet (δείτε παρακάτω).
        </p>
      </>
    ),
  },
  {
    question: 'Τι είναι το “TIC”;',
    answer: (
      <>
        <p>
          Το TIC σημαίνει &apos;Taxpayer&apos;s Identification Code&apos;. Σκεφτείτε το σαν τον προσωπικό σας &apos;Φορολογικό
          Αριθμό&apos;, που σας δίνεται κατά την εγγραφή σας στο φορολογικό γραφείο της Κύπρου.
        </p>
        <p>Το TIC αποτελείται από 8 αριθμούς (ψηφία) και ένα ΚΕΦΑΛΑΙΟ λατινικό γράμμα στο τέλος (π.χ. 01234567X).</p>
      </>
    ),
  },
  {
    question: 'Τι είναι το TAXISnet;',
    answer: (
      <>
        <p>
          Το TAXISnet είναι η κυβερνητική ιστοσελίδα της Κύπρου που χρησιμοποιούν οι άνθρωποι για να υποβάλουν τη φορολογική
          τους δήλωση (διαδικτυακά).
        </p>
        <p>
          Συμβουλή<strong>:</strong> χρειάζεστε έναν &quot;Αριθμό Φορολογικής Ταυτότητας&quot; (TIC) για να μπορέσετε να εγγραφείτε στο
          TAXISnet.
        </p>
      </>
    ),
  },
  {
    question: 'Πρέπει να είμαι εγγεγραμμένος στο TAXISnet για να χρησιμοποιήσω το TaxApp.cy;',
    answer: <p>Ναι, για να χρησιμοποιήσετε το TaxApp.cy πρέπει να είστε εγγεγραμμένοι στο TAXISnet.</p>,
  },
  {
    question: 'Είμαι αυτοαπασχολούμενος. Μπορώ να χρησιμοποιήσω το TaxNexcy.com;',
    answer: (
      <>
        <p>Υπάρχουν δύο διαφορετικές φορολογικές δηλώσεις στην Κύπρο (για φυσικά πρόσωπα):</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            Η φορολογική δήλωση για <strong>Υπαλλήλους</strong> – δηλαδή για όσους έχουν δουλειά ως υπάλληλοι μιας εταιρείας, ,
          </li>
          <li>
            Η φορολογική δήλωση για τους <strong>Αυτοαπασχολούμενους –</strong> δηλαδή για όσους εργάζονται για τον εαυτό τους,
            χωρίς τη χρήση εταιρείας.
          </li>
        </ol>
        <p>Οι δύο δηλώσεις είναι αρκετά διαφορετικές!</p>
        <p>
          Τα κακά νέα είναι ότι αν είστε &quot;Αυτοαπασχολούμενος&quot; δεν μπορείτε να χρησιμοποιήσετε το φορολογικό μας εργαλείο.
          Τα καλά νέα είναι ότι μπορούμε &quot;χειροκίνητα&quot; να προετοιμάσουμε και να υποβάλουμε τη{' '}
          <strong>φορολογική δήλωση</strong> Αυτοαπασχολούμενου εμείς οι ίδιοι.
        </p>
        <p>
          Το μόνο που έχετε να κάνετε είναι να{' '}
          <Link className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900" to="/contact">
            Επικοινωνήσετε Μαζί Μας!
          </Link>
        </p>
      </>
    ),
  },
  {
    question: 'Μέχρι τώρα υπέβαλλα τη φορολογική μου δήλωση μόνος μου, μια χαρά. Γιατί να χρησιμοποιήσω το TaxNexcy.com;',
    answer: (
      <>
        <p>1. Ο χρόνος σας είναι πολύτιμος! Προετοιμάζουμε και υποβάλλουμε τη φορολογική σας δήλωση μέσα σε λεπτά.</p>
        <p>2. Η δήλωσή σας υποβάλλεται σωστά και χωρίς λάθη.</p>
        <p>3. Είμαστε εκεί για εσάς – σε κάθε βήμα της διαδικασίας.</p>
        <p>4. Έχουμε τη δυνατότητα να μειώσουμε τους φόρους σας – όλες οι φορολογικές εκπτώσεις απαλλαγές αποκαλύπτονται.</p>
        <p>5. Θα στείλουμε υπενθυμίσεις νωρίς (υπάρχει πρόστιμο 100 ευρώ για καθυστερημένη υποβολή).</p>
        <p>6. Είμαστε 100% ασφαλείς και συμμορφούμαστε με το GDPR. Τα δεδομένα σας είναι ασφαλή μαζί μας.</p>
        <p>7. Έχετε ένα λιγότερο πράγμα να ανησυχείτε!</p>
      </>
    ),
  },
  {
    question: 'Δεν ζω στην Κύπρο, μπορώ να χρησιμοποιήσω το TaxNexcy.com;',
    answer: (
      <>
        <p>Φυσικά και μπορείτε!</p>
        <p>
          ΣΥΜΒΟΥΛΗ: Οι μη κάτοικοι Κύπρου για φορολογικούς σκοπούς πρέπει να δηλώσουν μόνο το &quot;εισόδημα από πηγές
          Κύπρου&quot;.
        </p>
      </>
    ),
  },
  {
    question: 'Και τι είναι το “εισόδημα από πηγές Κύπρου”;',
    answer: (
      <>
        <p>Το &quot;εισόδημα από πηγές Κύπρου&quot; είναι οποιοδήποτε εισόδημα παράγεται στην Κύπρο. Για παράδειγμα:</p>
        <p>
          1. Εισόδημα από ενοικίαση <span className="underline">ακινήτου Κύπρου;</span> <br />
          2. Μισθός (δηλαδή &quot;εισόδημα από εργασία&quot;) που κερδίζεται από <span className="underline">εργοδότη Κύπρου</span>;
          <br />
          3. Εισόδημα σύνταξης από <span className="underline">εργασία στην Κύπρο, κλπ</span>;
        </p>
        <p>
          <Link className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900" to="/contact">
            Επικοινωνήστε Μαζί Μας
          </Link>{' '}
          αν χρειάζεστε οποιαδήποτε βοήθεια!
        </p>
      </>
    ),
  },
  {
    question: 'Έχω μια περίπλοκη φορολογική κατάσταση. Μπορώ να χρησιμοποιήσω το TaxNexcy.com;',
    answer: (
      <>
        <p>Απολύτως!</p>
        <p>
          Μπορείτε είτε να χρησιμοποιήσετε το{' '}
          <a
            className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
            href="https://taxnexcy.com/el/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TaxNexcy.com
          </a>
          , ή{' '}
          <Link className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900" to="/contact">
            στείλτε μας ένα μήνυμα
          </Link>
          . Θα χαρούμε να προσφέρουμε μια εξατομικευμένη λύση που λειτουργεί ειδικά για εσάς!
        </p>
      </>
    ),
  },
  {
    question: 'Γιατί να ιδρύσω ή να μεταφέρω την επιχείρησή μου στην Κύπρο;',
    answer: (
      <p>
        Η Κύπρος διαθέτει στρατηγική θέση, ελκυστικό φορολογικό καθεστώς και ισχυρές υποδομές για επιχειρήσεις
      </p>
    ),
  },
  {
    question: 'Τι υπηρεσίες προσφέρει η Komodromos Group για την ίδρυση εταιρείας στην Κύπρο;',
    answer: (
      <p>
        Παρέχουμε ολοκληρωμένη υποστήριξη, συμπεριλαμβανομένων των διαδικασιών καταχώρησης/σύστασης της εταιρείας διασφάλιση
        πλήρους φορολογικής και νομικής συμμόρφωσης, καθώς και υποστηρικτικές υπηρεσίες μεταφοράς προς εξασφάλιση ομαλής
        μεταφοράς
      </p>
    ),
  },
]

const TAX_NEX_FAQ_HEADING_EN = {
  eyebrow: 'Frequently asked questions',
  title: 'If you have any questions',
}

const TAX_NEX_FAQ_ITEMS_EN: TaxNexFaqItem[] = [
  {
    question: 'How secure are my data and personal details?',
    answer: (
      <>
        <p>We are 100% committed to keeping your personal data safe.</p>
        <p>1. TaxNexcy.com is licensed, approved, and regulated by ICPAC.</p>
        <p>2. We protect your data with leading technology and industry practices.</p>
        <p>3. We comply with GDPR data protection requirements.</p>
        <p>4. Your information remains confidential. We do not sell or rent it to third parties.</p>
      </>
    ),
  },
  {
    question: 'I am filing for the first time. Can I use TaxNexcy.com?',
    answer: (
      <>
        <p>Yes, absolutely. You only need:</p>
        <p>
          1. A TIN (Tax Identification Number) <br />
          2. TAXISnet registration.
        </p>
      </>
    ),
  },
  {
    question: 'What is TIC?',
    answer: (
      <>
        <p>TIC means Taxpayer Identification Code. It is your personal tax number in Cyprus.</p>
        <p>It contains 8 digits and one uppercase Latin letter at the end (e.g. 01234567X).</p>
      </>
    ),
  },
  {
    question: 'What is TAXISnet?',
    answer: (
      <>
        <p>TAXISnet is the Cyprus government portal used for online tax return submission.</p>
        <p>
          Tip: you need a TIC first in order to register on TAXISnet.
        </p>
      </>
    ),
  },
  {
    question: 'Do I need TAXISnet registration to use TaxApp.cy?',
    answer: <p>Yes. TAXISnet registration is required to use TaxApp.cy.</p>,
  },
  {
    question: 'I am self-employed. Can I use TaxNexcy.com?',
    answer: (
      <>
        <p>Cyprus has two different returns for individuals:</p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Employee tax return (for people employed by a company).</li>
          <li>Self-employed tax return (for people working for themselves).</li>
        </ol>
        <p>These returns are different, but we can manually prepare and submit your self-employed return.</p>
        <p>
          <Link className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900" to="/contact">
            Contact us
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: 'Why should I use TaxNexcy.com if I can file by myself?',
    answer: (
      <>
        <p>1. Your time is valuable — we prepare and submit quickly.</p>
        <p>2. Your return is submitted correctly and with fewer errors.</p>
        <p>3. We support you in every step.</p>
        <p>4. We help identify tax reliefs and exemptions.</p>
        <p>5. We send reminders before deadlines.</p>
        <p>6. We are GDPR-compliant and secure.</p>
        <p>7. One less thing for you to worry about.</p>
      </>
    ),
  },
  {
    question: 'I do not live in Cyprus. Can I still use TaxNexcy.com?',
    answer: (
      <>
        <p>Yes, you can.</p>
        <p>Non-tax residents of Cyprus generally declare only Cyprus-source income.</p>
      </>
    ),
  },
  {
    question: 'What is Cyprus-source income?',
    answer: (
      <>
        <p>Any income generated in Cyprus, such as:</p>
        <p>
          1. Rental income from Cyprus property <br />
          2. Employment income from a Cyprus employer <br />
          3. Pension income related to work in Cyprus.
        </p>
      </>
    ),
  },
  {
    question: 'I have a complex tax case. Can you help?',
    answer: (
      <p>
        Yes. You can use TaxNexcy.com or{' '}
        <Link className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-900" to="/contact">
          send us a message
        </Link>{' '}
        for a tailored solution.
      </p>
    ),
  },
  {
    question: 'Why establish or transfer my business to Cyprus?',
    answer: <p>Cyprus offers strategic location, attractive taxation, and strong business infrastructure.</p>,
  },
  {
    question: 'What services does Komodromos Group offer for Cyprus company setup?',
    answer: (
      <p>
        We provide end-to-end support for registration/incorporation, tax and legal compliance, and relocation support
        services.
      </p>
    ),
  },
]

export function getTaxNexFaqContent(locale: string) {
  if (locale === 'en') {
    return {
      heading: TAX_NEX_FAQ_HEADING_EN,
      items: TAX_NEX_FAQ_ITEMS_EN,
    }
  }
  return {
    heading: TAX_NEX_FAQ_HEADING,
    items: TAX_NEX_FAQ_ITEMS,
  }
}
