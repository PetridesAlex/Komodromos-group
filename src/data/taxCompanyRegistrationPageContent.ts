const IMG = (n: number) =>
  `/images/services/tax-services/register-company/register-company-tax-nex-${n}.webp`

export const TAX_COMPANY_REGISTRATION_IMAGES = {
  hero: IMG(9),
  establish: IMG(2),
  registration: IMG(3),
  compliance: IMG(4),
  relocation: IMG(5),
  benefits: IMG(6),
  euPosition: IMG(7),
  taxEnvironment: IMG(8),
  infrastructure: IMG(10),
} as const

export const TAX_COMPANY_REGISTRATION_PAGE_TITLES = {
  el: {
    breadcrumbCurrent: 'Εγγραφή εταιρείας',
    h1: 'Εγγραφή Εταιρείας στην Κύπρο',
    intro:
      'Ολοκληρωμένη υποστήριξη για ίδρυση ή μεταφορά επιχείρησης στην Κύπρο — νομική, διοικητική και φορολογική καθοδήγηση από την ομάδα TaxNex.',
    primaryCta: 'Επικοινωνήστε μαζί μας',
    secureCta: 'Ασφαλίστε την επιχείρησή σας σήμερα',
    backCta: 'Επιστροφή στο TaxNex',
    contactCta: 'Επικοινωνία',
    contactHeading: 'Έτοιμοι να ξεκινήσετε στην Κύπρο;',
    contactBody:
      'Επικοινωνήστε μαζί μας για προσωποποιημένη καθοδήγηση στην εγγραφή εταιρείας, τη συμμόρφωση και τη μεταφορά της επιχείρησής σας.',
  },
  en: {
    breadcrumbCurrent: 'Company registration',
    h1: 'Company registration in Cyprus',
    intro:
      'End-to-end support to establish or relocate your business in Cyprus — legal, administrative, and tax guidance from the TaxNex team.',
    primaryCta: 'Contact us',
    secureCta: 'Secure your business today',
    backCta: 'Back to TaxNex',
    contactCta: 'Contact',
    contactHeading: 'Ready to start in Cyprus?',
    contactBody:
      'Speak with us for tailored guidance on company registration, compliance, and relocating your business.',
  },
} as const

export const TAX_COMPANY_REGISTRATION_STATS = {
  el: [
    { percent: 90, label: 'Εταιρείες' },
    { percent: 70, label: 'Εργαζόμενος' },
    { percent: 80, label: 'Αυτοεργοδοτούμενος' },
    { percent: 60, label: 'Υποβάλετε μόνοι σας' },
  ],
  en: [
    { percent: 90, label: 'Companies' },
    { percent: 70, label: 'Employee' },
    { percent: 80, label: 'Self-employed' },
    { percent: 60, label: 'File yourself' },
  ],
} as const

export type TaxCompanyRegistrationSplit = {
  image: string
  imageAlt: { el: string; en: string }
  title: { el: string; en: string }
  body: { el: string; en: string }
  cta?: { el: string; en: string }
}

export const TAX_COMPANY_REGISTRATION_INTRO_SPLITS: TaxCompanyRegistrationSplit[] = [
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.establish,
    imageAlt: {
      el: 'Ίδρυση ή μεταφορά επιχείρησης στην Κύπρο',
      en: 'Establish or relocate a business in Cyprus',
    },
    title: {
      el: 'Ιδρύστε ή Μετακινήστε την Επιχείρησή σας στην Κύπρο με Ασφάλεια',
      en: 'Establish or relocate your business in Cyprus with confidence',
    },
    body: {
      el: 'Παρέχουμε ολοκληρωμένη υποστήριξη από την αρχή έως το τέλος, ώστε η ίδρυση ή η μεταφορά της επιχείρησής σας να είναι εύκολη και αποδοτική. Η ομάδα μας αναλαμβάνει όλες τις νομικές, διοικητικές και φορολογικές απαιτήσεις, επιτρέποντάς σας να εστιάσετε στην ανάπτυξη της επιχείρησής σας σε αυτήν τη στρατηγική τοποθεσία.',
      en: 'We provide full support from start to finish so establishing or relocating your business is straightforward and efficient. Our team handles all legal, administrative, and tax requirements, allowing you to focus on growing your business in this strategic location.',
    },
    cta: {
      el: 'Ασφαλίστε την επιχείρησή σας σήμερα',
      en: 'Secure your business today',
    },
  },
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.registration,
    imageAlt: {
      el: 'Εγγραφή εταιρείας στην Κύπρο',
      en: 'Company registration in Cyprus',
    },
    title: {
      el: 'Εγγραφή Εταιρείας',
      en: 'Company registration',
    },
    body: {
      el: 'Ολοκληρωμένες υπηρεσίες διαχείρισης εγγράφων και αρχειοθέτησης, διασφαλίζοντας την νόμιμη εγκαθίδρυση της επιχείρησής σας στην Κύπρο με διαδικασία εγγραφής σύμφωνα με τις απαιτήσεις συμμόρφωσης.',
      en: 'Complete document management and filing services, ensuring lawful establishment of your business in Cyprus through a registration process that meets all compliance requirements.',
    },
  },
]

export type TaxCompanyRegistrationTax2026Item = {
  label: { el: string; en: string }
  body: { el: string; en: string }
}

export const TAX_COMPANY_REGISTRATION_TAX_2026 = {
  title: {
    el: 'Κύριες Μεταβολές στην Εταιρική Φορολογία από 01/01/2026',
    en: 'Key changes in corporate taxation from 01/01/2026',
  },
  items: [
    {
      label: { el: 'Συντελεστής Εταιρικού Φόρου', en: 'Corporate tax rate' },
      body: {
        el: 'Προσαρμογή στο 15%, ευθυγραμμίζοντας την Κύπρο με τις διεθνείς πρακτικές (Pillar II).',
        en: 'Adjustment to 15%, aligning Cyprus with international practice (Pillar II).',
      },
    },
    {
      label: { el: 'Φόρος Μερισμάτων', en: 'Dividend tax' },
      body: {
        el: 'Δραστική μείωση του φόρου παρακράτησης σε πραγματική διανομή από 17% σε 5%.',
        en: 'Material reduction of withholding on actual distributions from 17% to 5%.',
      },
    },
    {
      label: { el: 'Κατάργηση Επιβαρύνσεων', en: 'Removal of burdens' },
      body: {
        el: 'Πλήρης κατάργηση της λογιζόμενης διανομής μερισμάτων και ολοκληρωτική κατάργηση των Περί Χαρτοσήμων Νόμων, μειώνοντας το διοικητικό κόστος.',
        en: 'Full abolition of deemed dividend distribution and stamp-duty laws, lowering administrative cost.',
      },
    },
    {
      label: { el: 'Αναπτυξιακά Κίνητρα', en: 'Development incentives' },
      body: {
        el: 'Μείωση της έκτακτης εισφοράς για την άμυνα σε τόκους ομολόγων (Νέα Αγορά ΧΑΚ) στο 3% και παραχώρηση νοητής έκπτωσης για επιχειρήσεις που αποδίδουν ΑΤΑ.',
        en: 'Reduction of the defence levy on bond interest (CSE New Market) to 3% and notional deduction for businesses paying CIT.',
      },
    },
  ] satisfies TaxCompanyRegistrationTax2026Item[],
}

export const TAX_COMPANY_REGISTRATION_SERVICES: TaxCompanyRegistrationSplit[] = [
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.compliance,
    imageAlt: {
      el: 'Φορολογική και νομική συμμόρφωση',
      en: 'Tax and legal compliance',
    },
    title: {
      el: 'Φορολογική και Νομική Συμμόρφωση',
      en: 'Tax and legal compliance',
    },
    body: {
      el: 'Εξασφαλίζουμε ότι οι επαγγελματικές δραστηριότητές σας συμμορφώνονται πλήρως με όλους τους τοπικούς φορολογικούς νόμους και ρυθμιστικές απαιτήσεις, μειώνοντας τους νομικούς κινδύνους και διατηρώντας την ακεραιότητα της επιχείρησής σας.',
      en: 'We ensure your professional activities fully comply with all local tax laws and regulatory requirements, reducing legal risk and safeguarding your company’s integrity.',
    },
  },
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.relocation,
    imageAlt: {
      el: 'Βοήθεια μεταφοράς επιχείρησης στην Κύπρο',
      en: 'Business relocation assistance in Cyprus',
    },
    title: {
      el: 'Βοήθεια Μεταφοράς (Relocation Assistance)',
      en: 'Relocation assistance',
    },
    body: {
      el: 'Ολοκληρωμένη υποστήριξη για τη ομαλή μεταφορά και την ίδρυση των υφιστάμενων επιχειρηματικών δραστηριοτήτων σας στην Κύπρο, διασφαλίζοντας μια ομαλή μετάβαση και συμμόρφωση με τους τοπικούς κανονισμούς.',
      en: 'Comprehensive support to smoothly relocate and establish your existing business activities in Cyprus, ensuring a seamless transition and compliance with local regulations.',
    },
  },
]

export const TAX_COMPANY_REGISTRATION_BENEFITS_INTRO = {
  image: TAX_COMPANY_REGISTRATION_IMAGES.benefits,
  imageAlt: {
    el: 'Οφέλη επιλογής της Κύπρου για επιχειρήσεις',
    en: 'Benefits of choosing Cyprus for your business',
  },
  title: {
    el: 'Οφέλη Επιλογής της Κύπρου',
    en: 'Benefits of choosing Cyprus',
  },
  body: {
    el: 'Ανακαλύψτε γιατί η Κύπρος αποτελεί ιδανικό προορισμό για την επιχείρησή σας. Απολαύστε τα πλεονεκτήματα της στρατηγικής της θέσης, του ευνοϊκού φορολογικού καθεστώτος, των φιλικών προς τις επιχειρήσεις υποδομών και της ζωτικής οικονομίας της. Η Κύπρος προσφέρει ένα ασφαλές, ελκυστικό περιβάλλον τόσο για τοπικές όσο και για διεθνείς εταιρείες που επιδιώκουν ανάπτυξη και μακροπρόθεσμη επιτυχία.',
    en: 'Discover why Cyprus is an ideal destination for your business. Enjoy strategic location, a favourable tax regime, business-friendly infrastructure, and a vibrant economy. Cyprus offers a secure, attractive environment for local and international companies seeking growth and long-term success.',
  },
}

/** Sections 7–9 on taxnexcy.com — full-width image + text rows */
export const TAX_COMPANY_REGISTRATION_BENEFIT_ROWS: TaxCompanyRegistrationSplit[] = [
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.euPosition,
    imageAlt: {
      el: 'Στρατηγική θέση της Κύπρου στην ΕΕ',
      en: 'Cyprus strategic EU position',
    },
    title: {
      el: 'Στρατηγική Θέση στην ΕΕ',
      en: 'Strategic EU position',
    },
    body: {
      el: 'Η προνομιακή θέση της Κύπρου στην Ευρωπαϊκή Ένωση προσφέρει άμεση πρόσβαση στις αγορές της Ευρώπης, της Μέσης Ανατολής και της Αφρικής. Η στρατηγική της θέση διευκολύνει την απρόσκοπτη διακίνηση εμπορευμάτων, τις επενδυτικές ευκαιρίες και την εφοδιαστική αλυσίδα, καθιστώντας την ιδανικό κόμβο για την επέκταση της επιχειρηματικής δραστηριότητας σε πολλαπλές περιοχές.',
      en: 'Cyprus’s privileged position in the European Union offers direct access to European, Middle Eastern, and African markets. Its strategic location facilitates the seamless movement of goods, investment opportunities, and supply chains—making it an ideal hub to expand business activity across multiple regions.',
    },
  },
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.taxEnvironment,
    imageAlt: {
      el: 'Ελκυστικό φορολογικό περιβάλλον Κύπρου',
      en: 'Cyprus attractive tax environment',
    },
    title: {
      el: 'Ελκυστικό Φορολογικό Περιβάλλον',
      en: 'Attractive tax environment',
    },
    body: {
      el: 'Η Κύπρος διαθέτει ένα από τα πιο ευνοϊκά φορολογικά συστήματα στην Ευρώπη, με ανταγωνιστικούς εταιρικούς φόρους, ευρύ δίκτυο συμφωνιών αποφυγής διπλής φορολόγησης και ελκυστικά κίνητρα για ξένους επενδυτές. Αυτό το υποστηρικτικό φορολογικό πλαίσιο καθιστά την Κύπρο ιδανικό προορισμό για την ίδρυση και ανάπτυξη της επιχείρησής σας, εξασφαλίζοντας ταυτόχρονα φορολογική αποδοτικότητα.',
      en: 'Cyprus has one of Europe’s most favourable tax systems, with competitive corporate rates, an extensive double-tax treaty network, and incentives for foreign investors. This supportive tax framework makes Cyprus an ideal destination to establish and grow your business while ensuring tax efficiency.',
    },
  },
  {
    image: TAX_COMPANY_REGISTRATION_IMAGES.infrastructure,
    imageAlt: {
      el: 'Υποδομές και ανθρώπινο δυναμικό στην Κύπρο',
      en: 'Infrastructure and workforce in Cyprus',
    },
    title: {
      el: 'Αξιόπιστες Υποδομές και Καταρτισμένο Ανθρώπινο Δυναμικό',
      en: 'Reliable infrastructure and skilled workforce',
    },
    body: {
      el: 'Η Κύπρος διαθέτει ισχυρές και σύγχρονες υποδομές, συμπεριλαμβανομένου προηγμένες τηλεπικοινωνίες, δίκτυα μεταφορικών μέσων και επιχειρηματικές εγκαταστάσεις. Επιπλέον, το κράτος επωφελείται από ένα υψηλά καταρτισμένο, πολυγλωσσικό και εξειδικευμένο ανθρώπινο δυναμικό, έτοιμο να στηρίξει τις επιχειρηματικές σας δραστηριότητες και να οδηγήσει σε ανάπτυξη σε διάφορους τομείς.',
      en: 'Cyprus offers robust, modern infrastructure—including advanced telecommunications, transport networks, and business facilities. It also benefits from a highly skilled, multilingual, specialised workforce ready to support your business activities and drive growth across sectors.',
    },
  },
]

export type TaxCompanyRegistrationTaxnexBlock = {
  heading: { el: string; en: string }
  paragraphs?: { el: string[]; en: string[] }
  bullets?: { el: string[]; en: string[] }
}

export const TAX_COMPANY_REGISTRATION_TAXNEX = {
  statsTagline: {
    el: 'Συνεργαζόμαστε για την επιχείρησή σας',
    en: 'We work alongside your business',
  },
  title: {
    el: 'Πώς λειτουργεί το TaxNex',
    en: 'How TaxNex works',
  },
  blocks: [
    {
      heading: {
        el: 'Το TaxNex είναι ένα εύχρηστο, διαδραστικό εργαλείο',
        en: 'TaxNex is an easy-to-use, interactive tool',
      },
      paragraphs: {
        el: [
          'Σχεδιασμένο να σας βοηθήσει να συμπληρώσετε τη φορολογική σας δήλωση χωρίς κόπο. Μέσω ενός απλού και κατανοητού ερωτηματολογίου, σας κάνουμε βασικές ερωτήσεις σχετικά με τη ζωή και την οικονομική σας κατάσταση, όπως:',
        ],
        en: [
          'Designed to help you complete your tax return without hassle. Through a simple, clear questionnaire, we ask essential questions about your life and financial situation, such as:',
        ],
      },
      bullets: {
        el: [
          'Έχετε δουλειά ή είστε συνταξιούχος;',
          'Έχετε κάνει δωρεές ή έχετε ασφάλεια ζωής;',
          'Έχετε πληρώσει φόρους στο εξωτερικό;',
        ],
        en: [
          'Are you employed or retired?',
          'Have you made donations or hold life insurance?',
          'Have you paid tax abroad?',
        ],
      },
    },
    {
      heading: {
        el: 'Εργαζόμαστε παρασκηνιακά για εσάς',
        en: 'We work behind the scenes for you',
      },
      paragraphs: {
        el: [
          'Ταυτόχρονα, εργαζόμαστε παρασκηνιακά για να συμπληρώσουμε τη φορολογική σας δήλωση βάσει των απαντήσεών σας. Οι απαντήσεις σας μας καθοδηγούν στα επόμενα βήματα, επιτρέποντάς μας να διερευνήσουμε περαιτέρω λεπτομέρειες και να σας παρέχουμε την καθοδήγηση που χρειάζεστε.',
        ],
        en: [
          'At the same time, we work behind the scenes to complete your tax return based on your answers. Your responses guide the next steps, allowing us to explore further details and provide the guidance you need.',
        ],
      },
    },
    {
      heading: {
        el: 'Φιλική καθοδήγηση βήμα προς βήμα',
        en: 'Friendly step-by-step guidance',
      },
      paragraphs: {
        el: [
          'Εάν κάποια ερώτηση φαίνεται περίπλοκη ή ασαφής, μην ανησυχείτε—είμαστε εδώ για να σας βοηθήσουμε. Με φιλική και απλή προσέγγιση, σας καθοδηγούμε βήμα προς βήμα, βοηθώντας σας να ολοκληρώσετε τη δήλωσή σας με αυτοπεποίθηση και ηρεμία.',
        ],
        en: [
          'If a question seems complex or unclear, do not worry—we are here to help. With a friendly, simple approach, we guide you step by step so you can complete your return with confidence and peace of mind.',
        ],
      },
    },
    {
      heading: {
        el: 'Το αποτέλεσμα',
        en: 'The result',
      },
      paragraphs: {
        el: [
          'Μια σωστή, πλήρης και ακριβής φορολογική δήλωση που υποβάλλεται εγκαίρως. Εντοπίζουμε όλες τις εκπτώσεις και τις πιστώσεις στις οποίες δικαιούστε και διασφαλίζουμε ότι πληρώνετε το σωστό ποσό φόρου με απόλυτη ακρίβεια.',
        ],
        en: [
          'A correct, complete, and accurate tax return filed on time. We identify every deduction and credit you are entitled to and ensure you pay the right amount of tax with absolute accuracy.',
        ],
      },
    },
  ] satisfies TaxCompanyRegistrationTaxnexBlock[],
}

/** @deprecated Use TAX_COMPANY_REGISTRATION_BENEFIT_ROWS */
export const TAX_COMPANY_REGISTRATION_BENEFIT_PILLARS = TAX_COMPANY_REGISTRATION_BENEFIT_ROWS
