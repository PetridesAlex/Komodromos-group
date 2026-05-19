export const TAX_CORPORATE_CONFERENCE_IMAGE = '/images/services/tax-services/taxnex-conference-room.webp'
export const TAX_CORPORATE_CYPRUS_EU_IMAGE = '/images/services/tax-services/taxnex-cyprus-eu.webp'

export type TaxCorporateServiceId = 'company-registration-cyprus' | 'office-secretarial-services'

export const TAX_CORPORATE_SERVICES_SECTION = {
  el: {
    eyebrow: 'Εταιρικές υπηρεσίες',
    title: 'Εγγραφή & διοίκηση στην Κύπρο',
    intro:
      'Οργάνωση εταιρείας, γραμματειακή υποστήριξη και επαγγελματική παρουσία — με την αξιοπιστία του TaxNex.',
  },
  en: {
    eyebrow: 'Corporate services',
    title: 'Registration & administration in Cyprus',
    intro:
      'Company formation, secretarial support, and a professional presence — delivered with TaxNex reliability.',
  },
} as const

export type TaxCorporateServiceCard = {
  id: TaxCorporateServiceId
  href: string
  el: {
    title: string
    contactCta: string
    readMoreCta: string
    readMoreAria: string
  }
  en: {
    title: string
    contactCta: string
    readMoreCta: string
    readMoreAria: string
  }
}

export type TaxCorporateServiceRow = {
  card: TaxCorporateServiceCard
  image: string
  imageWidth: number
  imageHeight: number
  imagePosition: string
  /** Flip image/card sides on desktop (row 2) */
  reverse: boolean
}

export const TAX_CORPORATE_SERVICE_ROWS: TaxCorporateServiceRow[] = [
  {
    card: {
      id: 'company-registration-cyprus',
      href: '/services/tax/company-registration-cyprus',
      el: {
        title: 'Εγγραφή Εταιρείας στην Κύπρο',
        contactCta: 'Επικοινωνήστε μαζί μας',
        readMoreCta: 'Διαβάστε περισσότερα',
        readMoreAria: 'Μετάβαση στη σελίδα εγγραφής εταιρείας στην Κύπρο',
      },
      en: {
        title: 'Company registration in Cyprus',
        contactCta: 'Contact us',
        readMoreCta: 'Read more',
        readMoreAria: 'Go to company registration in Cyprus',
      },
    },
    image: TAX_CORPORATE_CONFERENCE_IMAGE,
    imageWidth: 1200,
    imageHeight: 762,
    imagePosition: 'center 42%',
    reverse: false,
  },
  {
    card: {
      id: 'office-secretarial-services',
      href: '/services/tax/office-secretarial-services',
      el: {
        title: 'Γραφειακές & Γραμματειακές Υπηρεσίες',
        contactCta: 'Επικοινωνήστε μαζί μας',
        readMoreCta: 'Διαβάστε περισσότερα',
        readMoreAria: 'Μετάβαση στη σελίδα γραφειακών και γραμματειακών υπηρεσιών',
      },
      en: {
        title: 'Office & secretarial services',
        contactCta: 'Contact us',
        readMoreCta: 'Read more',
        readMoreAria: 'Go to office and secretarial services',
      },
    },
    image: TAX_CORPORATE_CYPRUS_EU_IMAGE,
    imageWidth: 1200,
    imageHeight: 633,
    imagePosition: 'center 38%',
    reverse: true,
  },
]

export const TAX_CORPORATE_SERVICE_CARDS: TaxCorporateServiceCard[] =
  TAX_CORPORATE_SERVICE_ROWS.map((row) => row.card)

export const TAX_CORPORATE_SERVICE_PAGES: Record<
  TaxCorporateServiceId,
  {
    heroImage: string
    el: {
      h1: string
      intro: string
      breadcrumbCurrent: string
      placeholderTitle: string
      placeholderBody: string
      primaryCta: string
      backCta: string
    }
    en: {
      h1: string
      intro: string
      breadcrumbCurrent: string
      placeholderTitle: string
      placeholderBody: string
      primaryCta: string
      backCta: string
    }
  }
> = {
  'company-registration-cyprus': {
    heroImage: TAX_CORPORATE_CONFERENCE_IMAGE,
    el: {
      h1: 'Εγγραφή Εταιρείας στην Κύπρο',
      intro:
        'Πλήρης καθοδήγηση για ίδρυση και λειτουργία εταιρείας στην Κύπρο — το λεπτομερές περιεχόμενο θα προστεθεί σύντομα.',
      breadcrumbCurrent: 'Εγγραφή εταιρείας',
      placeholderTitle: 'Περιεχόμενο σε εξέλιξη',
      placeholderBody:
        'Ετοιμάζουμε την πλήρη παρουσίαση της υπηρεσίας. Επικοινωνήστε μαζί μας για άμεση καθοδήγηση ή επιστρέψτε σύντομα για τις λεπτομέρειες.',
      primaryCta: 'Επικοινωνήστε μαζί μας',
      backCta: 'Επιστροφή στο TaxNex',
    },
    en: {
      h1: 'Company registration in Cyprus',
      intro:
        'End-to-end guidance for establishing and operating a Cyprus company — full content will be published shortly.',
      breadcrumbCurrent: 'Company registration',
      placeholderTitle: 'Content coming soon',
      placeholderBody:
        'We are preparing the full service presentation. Contact us for immediate guidance, or check back soon for the complete details.',
      primaryCta: 'Contact us',
      backCta: 'Back to TaxNex',
    },
  },
  'office-secretarial-services': {
    heroImage: TAX_CORPORATE_CYPRUS_EU_IMAGE,
    el: {
      h1: 'Γραφειακές & Γραμματειακές Υπηρεσίες',
      intro:
        'Γραμματειακή υποστήριξη, registered office και διοικητική οργάνωση — το λεπτομερές περιεχόμενο θα προστεθεί σύντομα.',
      breadcrumbCurrent: 'Γραφειακές υπηρεσίες',
      placeholderTitle: 'Περιεχόμενο σε εξέλιξη',
      placeholderBody:
        'Ετοιμάζουμε την πλήρη παρουσίαση της υπηρεσίας. Επικοινωνήστε μαζί μας για άμεση καθοδήγηση ή επιστρέψτε σύντομα για τις λεπτομέρειες.',
      primaryCta: 'Επικοινωνήστε μαζί μας',
      backCta: 'Επιστροφή στο TaxNex',
    },
    en: {
      h1: 'Office & secretarial services',
      intro:
        'Secretarial support, registered office, and day-to-day administration — full content will be published shortly.',
      breadcrumbCurrent: 'Office services',
      placeholderTitle: 'Content coming soon',
      placeholderBody:
        'We are preparing the full service presentation. Contact us for immediate guidance, or check back soon for the complete details.',
      primaryCta: 'Contact us',
      backCta: 'Back to TaxNex',
    },
  },
}

export function getTaxCorporateServicePage(id: TaxCorporateServiceId) {
  return TAX_CORPORATE_SERVICE_PAGES[id]
}
