import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteTopbar from '../components/SiteTopbar'
import {
  submitTaxisNetApplication,
  type TaxisNetApplicationPayload,
} from '../lib/taxisnetApplicationSubmit'
import { taxBrandHref } from '../lib/brandPaths'
import './TaxisNetService.css'

export type TaxisNetFormPayload = TaxisNetApplicationPayload

const TAX_YEARS = ['2025', '2024', '2023', '2022', '2021', '2020', '2019'] as const

const INCOME_TYPE_OPTIONS = [
  { id: 'rental_income', label: 'ΕΧΩ ΕΙΣΟΔΗΜΑ ΑΠΟ ΕΝΟΙΚΙΑ' },
  { id: 'interest_income', label: 'ΕΧΩ ΕΙΣΟΔΗΜΑ ΑΠΟ ΤΟΚΟΥΣ' },
  { id: 'dividend_income', label: 'ΕΧΩ ΕΙΣΟΔΗΜΑ ΑΠΟ ΜΕΡΙΣΜΑΤΑ' },
  { id: 'life_insurance_surrendered', label: 'ΕΧΩ ΕΞΑΡΓΥΡΩΣΕΙ ΤΗΝ ΑΣΦΑΛΕΙΑ ΖΩΗΣ ΜΟΥ' },
  { id: 'self_employed', label: 'ΕΙΜΑΙ ΑΥΤΟΑΠΑΣΧΟΛΟΥΜΕΝΟΣ' },
  { id: 'other_income', label: 'ΑΛΛΑ ΕΙΣΟΔΗΜΑΤΑ' },
] as const

const COOKIE_STORAGE_KEY = 'taxisnet-form-cookie-dismissed'

const MSG = {
  required: 'Αυτό το πεδίο είναι υποχρεωτικό.',
  radio: 'Παρακαλούμε επιλέξτε μια απάντηση.',
  incomeTypes: 'Επιλέξτε τουλάχιστον έναν τύπο εισοδήματος.',
  email: 'Εισάγετε έγκυρη διεύθυνση email.',
  consentTerms: 'Πρέπει να αποδεχθείτε τους Όρους και την Πολιτική Απορρήτου.',
  consentLaw: 'Πρέπει να επιβεβαιώσετε τη δήλωση ακρίβειας και τη συγκατάθεση επεξεργασίας.',
  submitFailed:
    'Η αποστολή απέτυχε προσωρινά. Παρακαλούμε δοκιμάστε ξανά σε λίγα λεπτά ή επικοινωνήστε μαζί μας απευθείας.',
} as const

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.trim())
}

export default function TaxisNetService() {
  const multiRef = useRef<HTMLDivElement>(null)
  const [cookieDismissed, setCookieDismissed] = useState(
    () => typeof sessionStorage !== 'undefined' && sessionStorage.getItem(COOKIE_STORAGE_KEY) === '1'
  )

  const [taxYear, setTaxYear] = useState<string>('')
  const [incomeTypeIds, setIncomeTypeIds] = useState<string[]>([])
  const [multiOpen, setMultiOpen] = useState(false)
  const [grossAnnualIncome, setGrossAnnualIncome] = useState('')

  const [afm, setAfm] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [socialInsNumber, setSocialInsNumber] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address1, setAddress1] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('Κύπρος')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const [hasTaxisnet, setHasTaxisnet] = useState<'yes' | 'no' | ''>('')
  const [daysCyprus, setDaysCyprus] = useState<'yes' | 'no' | ''>('')

  const [insurableTkka, setInsurableTkka] = useState('')
  const [approvedPensionFunds, setApprovedPensionFunds] = useState('')
  const [grantsCommissionsBenefits, setGrantsCommissionsBenefits] = useState('')
  const [socialInsuranceFund, setSocialInsuranceFund] = useState('')
  const [tradeUnion, setTradeUnion] = useState('')
  const [healthFund, setHealthFund] = useState('')
  const [feesAndOtherBenefits, setFeesAndOtherBenefits] = useState('')
  const [gesyOnInsurable, setGesyOnInsurable] = useState('')
  const [taxFreeBenefits, setTaxFreeBenefits] = useState('')
  const [incomeWithoutGesy, setIncomeWithoutGesy] = useState('')

  const [consentTerms, setConsentTerms] = useState(false)
  const [consentLaw, setConsentLaw] = useState(false)

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!multiOpen) return
    const onDown = (e: MouseEvent) => {
      if (multiRef.current && !multiRef.current.contains(e.target as Node)) setMultiOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [multiOpen])

  function toggleIncomeType(id: string) {
    setIncomeTypeIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
    setErrors((e) => ({ ...e, incomeTypes: '' }))
  }

  function dismissCookie() {
    sessionStorage.setItem(COOKIE_STORAGE_KEY, '1')
    setCookieDismissed(true)
  }

  function validate(): Record<string, string> | null {
    const next: Record<string, string> = {}

    if (!taxYear) next.taxYear = MSG.required
    if (incomeTypeIds.length === 0) next.incomeTypes = MSG.incomeTypes
    if (!grossAnnualIncome.trim()) next.grossAnnualIncome = MSG.required

    if (!afm.trim()) next.afm = MSG.required
    if (!idNumber.trim()) next.idNumber = MSG.required
    if (!socialInsNumber.trim()) next.socialInsNumber = MSG.required
    if (!firstName.trim()) next.firstName = MSG.required
    if (!lastName.trim()) next.lastName = MSG.required
    if (!address1.trim()) next.address1 = MSG.required
    if (!city.trim()) next.city = MSG.required
    if (!province.trim()) next.province = MSG.required
    if (!postalCode.trim()) next.postalCode = MSG.required
    if (!country.trim()) next.country = MSG.required
    if (!email.trim()) next.email = MSG.required
    else if (!isValidEmail(email)) next.email = MSG.email
    if (!phone.trim()) next.phone = MSG.required

    if (hasTaxisnet === '') next.hasTaxisnet = MSG.radio
    if (daysCyprus === '') next.daysCyprus = MSG.radio

    if (!socialInsuranceFund.trim()) next.socialInsuranceFund = MSG.required
    if (!gesyOnInsurable.trim()) next.gesyOnInsurable = MSG.required

    if (!consentTerms) next.consentTerms = MSG.consentTerms
    if (!consentLaw) next.consentLaw = MSG.consentLaw

    if (Object.keys(next).length > 0) return next
    return null
  }

  function buildPayload(): TaxisNetApplicationPayload {
    const labels = INCOME_TYPE_OPTIONS.filter((o) => incomeTypeIds.includes(o.id)).map((o) => o.label)
    return {
      source: 'taxisnet-application-form',
      taxYear,
      incomeTypeIds: [...incomeTypeIds],
      incomeTypeLabels: labels,
      grossAnnualIncome: grossAnnualIncome.trim(),
      personal: {
        afm: afm.trim(),
        idNumber: idNumber.trim(),
        socialInsuranceNumber: socialInsNumber.trim(),
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        addressLine1: address1.trim(),
        city: city.trim(),
        province: province.trim(),
        postalCode: postalCode.trim(),
        country: country.trim(),
        email: email.trim(),
        phone: phone.trim(),
      },
      questions: {
        hasTaxisnetAccount: hasTaxisnet as 'yes' | 'no',
        moreThan183DaysInCyprus: daysCyprus as 'yes' | 'no',
      },
      incomeDetails: {
        insurableTkka: insurableTkka.trim(),
        approvedPensionFunds: approvedPensionFunds.trim(),
        grantsCommissionsBenefits: grantsCommissionsBenefits.trim(),
        socialInsuranceFund: socialInsuranceFund.trim(),
        tradeUnion: tradeUnion.trim(),
        healthFund: healthFund.trim(),
        feesAndOtherBenefits: feesAndOtherBenefits.trim(),
        gesyOnInsurableEarnings: gesyOnInsurable.trim(),
        taxFreeBenefitsInKind: taxFreeBenefits.trim(),
        incomeWithoutGesy: incomeWithoutGesy.trim(),
      },
      consent: {
        termsAndPrivacy: consentTerms,
        accuracyAndProcessing: consentLaw,
      },
      submittedAt: new Date().toISOString(),
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const v = validate()
    if (v) {
      setErrors(v)
      const first = Object.keys(v)[0]
      const el = document.getElementById(`taxisnet-field-${first}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setErrors({})
    setSubmitError(null)
    const data = buildPayload()
    setSubmitting(true)
    try {
      await submitTaxisNetApplication(data)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setSubmitError(MSG.submitFailed)
    } finally {
      setSubmitting(false)
    }
  }

  const incomeSummary =
    incomeTypeIds.length === 0
      ? null
      : INCOME_TYPE_OPTIONS.filter((o) => incomeTypeIds.includes(o.id))
          .map((o) => o.label)
          .join(', ')

  return (
    <div className={`page taxisnet-form-page${cookieDismissed ? '' : ' taxisnet-form-page--cookie'}`} lang="el">
      <SiteTopbar logoPathname="/" logoScrollToId="home" homeHref="/" servicesSectionHref="/#services" />

      <main className="taxisnet-form-page__main">
        <div className="taxisnet-form-page__shell">
          <nav className="taxisnet-form-page__crumbs" aria-label="Breadcrumb">
            <div className="taxisnet-form-page__crumbs-inner">
              <Link to={taxBrandHref('/services/tax/income-tax-calculator')}>Αριθμομηχανή φόρου εισοδήματος</Link>
              <span className="taxisnet-form-page__crumbs-sep" aria-hidden>
                /
              </span>
              <span className="taxisnet-form-page__crumbs-current">Φόρμα TaxisNet</span>
            </div>
          </nav>

          <header className="taxisnet-form-page__hero">
            <p className="taxisnet-form-page__eyebrow">TaxNex · TaxisNet Desk</p>
            <h1 className="taxisnet-form-page__title">Φόρμα Αίτησης TaxisNet</h1>
            <p className="taxisnet-form-page__subtitle">
              Συμπληρώστε τα στοιχεία σας για να προχωρήσουμε με την αίτησή σας. Η ομάδα TaxNex θα
              λάβει την αίτησή σας στο info@komodromosgroup.com και θα επικοινωνήσει μαζί σας σύντομα.
            </p>
          </header>

          {submitted ? (
            <div className="taxisnet-form taxisnet-form--premium" aria-live="polite">
              <div className="taxisnet-form__surface taxisnet-form__surface--success">
                <div className="taxisnet-success">
                  <p className="taxisnet-success__eyebrow">TaxNex · TaxisNet</p>
                  <h2 className="taxisnet-success__title">Η αίτησή σας ολοκληρώθηκε</h2>
                  <p className="taxisnet-success__body">
                    Λάβαμε την αίτησή σας. Θα επικοινωνήσουμε σύντομα στο email που δηλώσατε (
                    <strong>{email.trim()}</strong>).
                  </p>
                  <div className="taxisnet-success__actions">
                    <Link
                      to={taxBrandHref('/services/tax/taxisnet-application')}
                      reloadDocument
                      className="taxisnet-success__btn taxisnet-success__btn--primary"
                    >
                      Νέα αίτηση
                    </Link>
                    <Link to="/contact" className="taxisnet-success__btn taxisnet-success__btn--outline">
                      Επικοινωνία
                    </Link>
                    <Link
                      to={taxBrandHref('/services/tax/income-tax-calculator')}
                      className="taxisnet-success__btn taxisnet-success__btn--ghost"
                    >
                      Αριθμομηχανή φόρου
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
          <form className="taxisnet-form taxisnet-form--premium" onSubmit={handleSubmit} noValidate>
            <div className="taxisnet-form__surface">
            <p className="taxisnet-form__banner" role="note">
              TAXNEX · Φορολογικές δηλώσεις — αίτημα υποβολής δήλωσης εισοδήματος. Συμπληρώστε τα πεδία με προσοχή· τα
              υποχρεωτικά πεδία σημειώνονται με αστερίσκο (*).
            </p>

            {/* 1–2 Tax year */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-tax-year-h">
              <h2 id="taxisnet-tax-year-h" className="taxisnet-form__section-title">
                Φορολογικό έτος
              </h2>
              <fieldset>
                <legend className="taxisnet-form__legend">Επιλέξτε έτος *</legend>
                <div className="taxisnet-form__radio-row taxisnet-form__radio-row--segmented" id="taxisnet-field-taxYear">
                  {TAX_YEARS.map((y) => (
                    <label key={y} className="taxisnet-form__radio taxisnet-form__radio--year">
                      <input
                        type="radio"
                        name="taxYear"
                        value={y}
                        checked={taxYear === y}
                        onChange={() => {
                          setTaxYear(y)
                          setErrors((e) => ({ ...e, taxYear: '' }))
                        }}
                      />
                      <span className="taxisnet-form__radio-text">{y}</span>
                    </label>
                  ))}
                </div>
                {errors.taxYear ? <p className="taxisnet-form__error">{errors.taxYear}</p> : null}
              </fieldset>
            </section>

            {/* 3 Income type + gross */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-income-h">
              <h2 id="taxisnet-income-h" className="taxisnet-form__section-title">
                Τύπος εισοδήματος
              </h2>
              <p className="taxisnet-form__section-hint">
                Πείτε μας το εισόδημά σας για το {taxYear || '…'} — μπορείτε να επιλέξετε περισσότερες από μία
                επιλογές.
              </p>

              <div className="taxisnet-form__field" id="taxisnet-field-incomeTypes" ref={multiRef}>
                <span className="taxisnet-form__label">Είδη εισοδήματος *</span>
                <p className="taxisnet-multiselect__hint">
                  Ανοίξτε τη λίστα και επιλέξτε όλους τους τύπους που σας αφορούν (επιτρέπονται πολλαπλές επιλογές).
                </p>
                <div className={`taxisnet-multiselect${multiOpen ? ' taxisnet-multiselect--open' : ''}`}>
                  <button
                    type="button"
                    className={`taxisnet-multiselect__trigger ${multiOpen ? 'taxisnet-multiselect__trigger--open' : ''} ${errors.incomeTypes ? 'taxisnet-multiselect__trigger--error' : ''} ${!incomeSummary ? 'taxisnet-multiselect__trigger--placeholder' : ''}`}
                    aria-expanded={multiOpen}
                    aria-haspopup="listbox"
                    onClick={() => setMultiOpen((o) => !o)}
                  >
                    <span className="taxisnet-multiselect__value">
                      {incomeSummary ?? 'Επιλέξτε από τη λίστα —'}
                    </span>
                    <span className="taxisnet-multiselect__chev" aria-hidden>
                      <svg className="taxisnet-multiselect__chev-svg" viewBox="0 0 20 20" width="18" height="18">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 7.5L10 12.5 15 7.5"
                        />
                      </svg>
                    </span>
                  </button>
                  {multiOpen ? (
                    <div className="taxisnet-multiselect__panel">
                      <div className="taxisnet-multiselect__panel-head" aria-hidden>
                        <span className="taxisnet-multiselect__panel-title">Τύποι εισοδήματος</span>
                        <span className="taxisnet-multiselect__panel-meta">Πολλαπλή επιλογή</span>
                      </div>
                      <div className="taxisnet-multiselect__panel-list" role="listbox" aria-multiselectable>
                      {INCOME_TYPE_OPTIONS.map((o) => (
                        <label key={o.id} className="taxisnet-multiselect__option">
                          <input
                            type="checkbox"
                            checked={incomeTypeIds.includes(o.id)}
                            onChange={() => toggleIncomeType(o.id)}
                          />
                          <span className="taxisnet-multiselect__option-text">{o.label}</span>
                        </label>
                      ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                {errors.incomeTypes ? <p className="taxisnet-form__error">{errors.incomeTypes}</p> : null}
              </div>

              <label className="taxisnet-form__field" htmlFor="taxisnet-gross">
                <span className="taxisnet-form__label">Πείτε μας το Ακαθάριστο Ετήσιο Εισόδημα *</span>
                <input
                  id="taxisnet-gross"
                  className={`taxisnet-form__input ${errors.grossAnnualIncome ? 'taxisnet-form__input--error' : ''}`}
                  value={grossAnnualIncome}
                  onChange={(e) => {
                    setGrossAnnualIncome(e.target.value)
                    setErrors((er) => ({ ...er, grossAnnualIncome: '' }))
                  }}
                  inputMode="decimal"
                  autoComplete="off"
                  placeholder="π.χ. 45.000"
                />
                {errors.grossAnnualIncome ? <p className="taxisnet-form__error">{errors.grossAnnualIncome}</p> : null}
              </label>
            </section>

            {/* 4 Personal */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-personal-h">
              <h2 id="taxisnet-personal-h" className="taxisnet-form__section-title">
                Πείτε μας για τα προσωπικά σας στοιχεία
              </h2>
              <p className="taxisnet-form__section-hint">
                Τα στοιχεία σας είναι 100% ασφαλή και εμπιστευτικά — συμμορφωνόμαστε επίσης με τον GDPR.
              </p>

              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field" id="taxisnet-field-afm">
                  <span className="taxisnet-form__label">Α.Φ.Μ. *</span>
                  <input
                    className={`taxisnet-form__input ${errors.afm ? 'taxisnet-form__input--error' : ''}`}
                    value={afm}
                    onChange={(e) => {
                      setAfm(e.target.value)
                      setErrors((er) => ({ ...er, afm: '' }))
                    }}
                    autoComplete="off"
                  />
                  {errors.afm ? <p className="taxisnet-form__error">{errors.afm}</p> : null}
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-idNumber">
                  <span className="taxisnet-form__label">Αριθμός Ταυτότητας *</span>
                  <input
                    className={`taxisnet-form__input ${errors.idNumber ? 'taxisnet-form__input--error' : ''}`}
                    value={idNumber}
                    onChange={(e) => {
                      setIdNumber(e.target.value)
                      setErrors((er) => ({ ...er, idNumber: '' }))
                    }}
                    autoComplete="off"
                  />
                  {errors.idNumber ? <p className="taxisnet-form__error">{errors.idNumber}</p> : null}
                </label>
              </div>

              <label className="taxisnet-form__field" id="taxisnet-field-socialInsNumber">
                <span className="taxisnet-form__label">Αριθμός Κοινωνικών Ασφαλίσεων *</span>
                <input
                  className={`taxisnet-form__input ${errors.socialInsNumber ? 'taxisnet-form__input--error' : ''}`}
                  value={socialInsNumber}
                  onChange={(e) => {
                    setSocialInsNumber(e.target.value)
                    setErrors((er) => ({ ...er, socialInsNumber: '' }))
                  }}
                  autoComplete="off"
                />
                {errors.socialInsNumber ? <p className="taxisnet-form__error">{errors.socialInsNumber}</p> : null}
              </label>

              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field" id="taxisnet-field-firstName">
                  <span className="taxisnet-form__label">Όνομα *</span>
                  <input
                    className={`taxisnet-form__input ${errors.firstName ? 'taxisnet-form__input--error' : ''}`}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value)
                      setErrors((er) => ({ ...er, firstName: '' }))
                    }}
                    autoComplete="given-name"
                  />
                  {errors.firstName ? <p className="taxisnet-form__error">{errors.firstName}</p> : null}
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-lastName">
                  <span className="taxisnet-form__label">Επώνυμο *</span>
                  <input
                    className={`taxisnet-form__input ${errors.lastName ? 'taxisnet-form__input--error' : ''}`}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value)
                      setErrors((er) => ({ ...er, lastName: '' }))
                    }}
                    autoComplete="family-name"
                  />
                  {errors.lastName ? <p className="taxisnet-form__error">{errors.lastName}</p> : null}
                </label>
              </div>

              <label className="taxisnet-form__field" id="taxisnet-field-address1">
                <span className="taxisnet-form__label">Address Line 1 *</span>
                <input
                  className={`taxisnet-form__input ${errors.address1 ? 'taxisnet-form__input--error' : ''}`}
                  value={address1}
                  onChange={(e) => {
                    setAddress1(e.target.value)
                    setErrors((er) => ({ ...er, address1: '' }))
                  }}
                  autoComplete="street-address"
                />
                {errors.address1 ? <p className="taxisnet-form__error">{errors.address1}</p> : null}
              </label>

              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field" id="taxisnet-field-city">
                  <span className="taxisnet-form__label">Πόλη *</span>
                  <input
                    className={`taxisnet-form__input ${errors.city ? 'taxisnet-form__input--error' : ''}`}
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value)
                      setErrors((er) => ({ ...er, city: '' }))
                    }}
                    autoComplete="address-level2"
                  />
                  {errors.city ? <p className="taxisnet-form__error">{errors.city}</p> : null}
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-province">
                  <span className="taxisnet-form__label">Επαρχία *</span>
                  <input
                    className={`taxisnet-form__input ${errors.province ? 'taxisnet-form__input--error' : ''}`}
                    value={province}
                    onChange={(e) => {
                      setProvince(e.target.value)
                      setErrors((er) => ({ ...er, province: '' }))
                    }}
                    autoComplete="off"
                  />
                  {errors.province ? <p className="taxisnet-form__error">{errors.province}</p> : null}
                </label>
              </div>

              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field" id="taxisnet-field-postalCode">
                  <span className="taxisnet-form__label">Ταχ. Κώδικας *</span>
                  <input
                    className={`taxisnet-form__input ${errors.postalCode ? 'taxisnet-form__input--error' : ''}`}
                    value={postalCode}
                    onChange={(e) => {
                      setPostalCode(e.target.value)
                      setErrors((er) => ({ ...er, postalCode: '' }))
                    }}
                    autoComplete="postal-code"
                  />
                  {errors.postalCode ? <p className="taxisnet-form__error">{errors.postalCode}</p> : null}
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-country">
                  <span className="taxisnet-form__label">Χώρα *</span>
                  <input
                    className={`taxisnet-form__input ${errors.country ? 'taxisnet-form__input--error' : ''}`}
                    value={country}
                    onChange={(e) => {
                      setCountry(e.target.value)
                      setErrors((er) => ({ ...er, country: '' }))
                    }}
                    autoComplete="country-name"
                  />
                  {errors.country ? <p className="taxisnet-form__error">{errors.country}</p> : null}
                </label>
              </div>

              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field" id="taxisnet-field-email">
                  <span className="taxisnet-form__label">Email *</span>
                  <input
                    type="email"
                    className={`taxisnet-form__input ${errors.email ? 'taxisnet-form__input--error' : ''}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setErrors((er) => ({ ...er, email: '' }))
                    }}
                    autoComplete="email"
                  />
                  {errors.email ? <p className="taxisnet-form__error">{errors.email}</p> : null}
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-phone">
                  <span className="taxisnet-form__label">Τηλέφωνο *</span>
                  <input
                    type="tel"
                    className={`taxisnet-form__input ${errors.phone ? 'taxisnet-form__input--error' : ''}`}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      setErrors((er) => ({ ...er, phone: '' }))
                    }}
                    autoComplete="tel"
                  />
                  {errors.phone ? <p className="taxisnet-form__error">{errors.phone}</p> : null}
                </label>
              </div>
            </section>

            {/* 5 Questions */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-questions-h">
              <h2 id="taxisnet-questions-h" className="taxisnet-form__section-title">
                Ερωτήσεις
              </h2>
              <fieldset className="taxisnet-form__field" id="taxisnet-field-hasTaxisnet">
                <legend className="taxisnet-form__legend">Έχετε λογαριασμό TaxisNet; *</legend>
                <div className="taxisnet-form__radio-row taxisnet-form__radio-row--pills">
                  <label className="taxisnet-form__radio taxisnet-form__radio--pill">
                    <input
                      type="radio"
                      name="hasTaxisnet"
                      value="yes"
                      checked={hasTaxisnet === 'yes'}
                      onChange={() => {
                        setHasTaxisnet('yes')
                        setErrors((er) => ({ ...er, hasTaxisnet: '' }))
                      }}
                    />
                    <span className="taxisnet-form__radio-text">Ναι</span>
                  </label>
                  <label className="taxisnet-form__radio taxisnet-form__radio--pill">
                    <input
                      type="radio"
                      name="hasTaxisnet"
                      value="no"
                      checked={hasTaxisnet === 'no'}
                      onChange={() => {
                        setHasTaxisnet('no')
                        setErrors((er) => ({ ...er, hasTaxisnet: '' }))
                      }}
                    />
                    <span className="taxisnet-form__radio-text">Όχι</span>
                  </label>
                </div>
                {errors.hasTaxisnet ? <p className="taxisnet-form__error">{errors.hasTaxisnet}</p> : null}
              </fieldset>

              <fieldset className="taxisnet-form__field" id="taxisnet-field-daysCyprus">
                <legend className="taxisnet-form__legend">
                  Έχετε παραμείνει στην Κύπρο για περισσότερες από 183 ημέρες κατά τη διάρκεια του έτους; *
                </legend>
                <div className="taxisnet-form__radio-row taxisnet-form__radio-row--pills">
                  <label className="taxisnet-form__radio taxisnet-form__radio--pill">
                    <input
                      type="radio"
                      name="daysCyprus"
                      value="yes"
                      checked={daysCyprus === 'yes'}
                      onChange={() => {
                        setDaysCyprus('yes')
                        setErrors((er) => ({ ...er, daysCyprus: '' }))
                      }}
                    />
                    <span className="taxisnet-form__radio-text">Ναι</span>
                  </label>
                  <label className="taxisnet-form__radio taxisnet-form__radio--pill">
                    <input
                      type="radio"
                      name="daysCyprus"
                      value="no"
                      checked={daysCyprus === 'no'}
                      onChange={() => {
                        setDaysCyprus('no')
                        setErrors((er) => ({ ...er, daysCyprus: '' }))
                      }}
                    />
                    <span className="taxisnet-form__radio-text">Όχι</span>
                  </label>
                </div>
                {errors.daysCyprus ? <p className="taxisnet-form__error">{errors.daysCyprus}</p> : null}
              </fieldset>
            </section>

            {/* 6 Income details */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-income-details-h">
              <h2 id="taxisnet-income-details-h" className="taxisnet-form__section-title taxisnet-form__section-title--accent">
                ΕΙΣΟΔΗΜΑ
              </h2>
              <div className="taxisnet-form__grid taxisnet-form__grid--2">
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Ασφαλιστέα στο Τ.Κ.Α (Ταμείο Κοινωνικών Ασφαλίσεων)</span>
                  <input
                    className="taxisnet-form__input"
                    value={insurableTkka}
                    onChange={(e) => setInsurableTkka(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Εγκεκριμένα Ταμεία Συντάξεων και Προνοίας</span>
                  <input
                    className="taxisnet-form__input"
                    value={approvedPensionFunds}
                    onChange={(e) => setApprovedPensionFunds(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Χορηγήματα, προμήθειες, οφέλη &amp; παροχές σε είδος</span>
                  <input
                    className="taxisnet-form__input"
                    value={grantsCommissionsBenefits}
                    onChange={(e) => setGrantsCommissionsBenefits(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-socialInsuranceFund">
                  <span className="taxisnet-form__label">Ταμείο Κοινωνικών Ασφαλίσεων *</span>
                  <input
                    className={`taxisnet-form__input ${errors.socialInsuranceFund ? 'taxisnet-form__input--error' : ''}`}
                    value={socialInsuranceFund}
                    onChange={(e) => {
                      setSocialInsuranceFund(e.target.value)
                      setErrors((er) => ({ ...er, socialInsuranceFund: '' }))
                    }}
                    autoComplete="off"
                  />
                  {errors.socialInsuranceFund ? (
                    <p className="taxisnet-form__error">{errors.socialInsuranceFund}</p>
                  ) : null}
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Συντεχνία</span>
                  <input
                    className="taxisnet-form__input"
                    value={tradeUnion}
                    onChange={(e) => setTradeUnion(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Ταμείο Υγείας</span>
                  <input
                    className="taxisnet-form__input"
                    value={healthFund}
                    onChange={(e) => setHealthFund(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Αντιμισθία και άλλα ωφελήματα</span>
                  <input
                    className="taxisnet-form__input"
                    value={feesAndOtherBenefits}
                    onChange={(e) => setFeesAndOtherBenefits(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field" id="taxisnet-field-gesyOnInsurable">
                  <span className="taxisnet-form__label">Εισφορά Γε.Σ.Υ. σε ασφαλιστέες αποδοχές *</span>
                  <input
                    className={`taxisnet-form__input ${errors.gesyOnInsurable ? 'taxisnet-form__input--error' : ''}`}
                    value={gesyOnInsurable}
                    onChange={(e) => {
                      setGesyOnInsurable(e.target.value)
                      setErrors((er) => ({ ...er, gesyOnInsurable: '' }))
                    }}
                    autoComplete="off"
                  />
                  {errors.gesyOnInsurable ? <p className="taxisnet-form__error">{errors.gesyOnInsurable}</p> : null}
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Αφορολόγητες παροχές σε είδος</span>
                  <input
                    className="taxisnet-form__input"
                    value={taxFreeBenefits}
                    onChange={(e) => setTaxFreeBenefits(e.target.value)}
                    autoComplete="off"
                  />
                </label>
                <label className="taxisnet-form__field">
                  <span className="taxisnet-form__label">Εισόδημα χωρίς Γε.Σ.Υ</span>
                  <input
                    className="taxisnet-form__input"
                    value={incomeWithoutGesy}
                    onChange={(e) => setIncomeWithoutGesy(e.target.value)}
                    autoComplete="off"
                  />
                </label>
              </div>
            </section>

            {/* 7 Consent */}
            <section className="taxisnet-form__section" aria-labelledby="taxisnet-consent-h">
              <h2 id="taxisnet-consent-h" className="taxisnet-form__section-title">
                Συγκατάθεση
              </h2>
              <label className="taxisnet-form__checkbox" id="taxisnet-field-consentTerms">
                <input
                  type="checkbox"
                  checked={consentTerms}
                  onChange={(e) => {
                    setConsentTerms(e.target.checked)
                    setErrors((er) => ({ ...er, consentTerms: '' }))
                  }}
                />
                <span>
                  Έχω διαβάσει και αποδέχομαι τους{' '}
                  <Link to="/contact">Terms and Conditions</Link> και την{' '}
                  <Link to="/contact">Privacy Policy</Link>.
                </span>
              </label>
              {errors.consentTerms ? <p className="taxisnet-form__error">{errors.consentTerms}</p> : null}

              <label className="taxisnet-form__checkbox" id="taxisnet-field-consentLaw">
                <input
                  type="checkbox"
                  checked={consentLaw}
                  onChange={(e) => {
                    setConsentLaw(e.target.checked)
                    setErrors((er) => ({ ...er, consentLaw: '' }))
                  }}
                />
                <span>
                  Γνωρίζοντας πλήρως τις συνέπειες που απορρέουν από τις διατάξεις του Νόμου περί αξιολόγησης και
                  συλλογής φόρων Ν.4/1978 όπως τροποποιήθηκε, δηλώνω ότι όλα τα στοιχεία που περιλαμβάνονται στη
                  φορολογική δήλωση, συμπεριλαμβανομένων των πιστοποιητικών και εγγράφων που υποστηρίζουν τα έσοδα,
                  είναι αληθή και σωστά και ότι έχω δηλώσει όλα τα εισοδήματά μου / του φορολογούμενου που εκπροσωπώ για
                  το φορολογικό έτος. Δίνω τη συγκατάθεσή μου ώστε τα στοιχεία μου να τύχουν επεξεργασίας για τη δήλωση
                  φόρου εισοδήματος.
                </span>
              </label>
              {errors.consentLaw ? <p className="taxisnet-form__error">{errors.consentLaw}</p> : null}
            </section>

            {submitError ? (
              <p className="taxisnet-form__submit-error" role="alert">
                {submitError}
              </p>
            ) : null}
            <button type="submit" className="taxisnet-form__submit" disabled={submitting}>
              <span className="taxisnet-form__submit-glow" aria-hidden />
              <span className="taxisnet-form__submit-label">
                {submitting ? 'Αποστολή…' : 'Υποβολή Αίτησης'}
              </span>
            </button>
            </div>
          </form>
          )}
        </div>
      </main>

      <Footer />

      {!cookieDismissed ? (
        <div className="taxisnet-cookie" role="region" aria-label="Cookies">
          <div className="taxisnet-cookie__inner">
            <p className="taxisnet-cookie__text">
              Χρησιμοποιούμε cookies για να διασφαλίσουμε την καλύτερη εμπειρία στην ιστοσελίδα. Συνεχίζοντας, συμφωνείτε
              με τη χρήση τους σύμφωνα με την πολιτική μας.
            </p>
            <button type="button" className="taxisnet-cookie__btn" onClick={dismissCookie}>
              Εντάξει
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
