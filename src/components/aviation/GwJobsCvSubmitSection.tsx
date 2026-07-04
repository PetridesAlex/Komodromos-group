import { useRef, useState, type ChangeEvent, type DragEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Send, Upload, X } from 'lucide-react'
import { AVIATION_ROUTES } from '../../data/globalWingsPage'
import { jobsClosing, jobsCvForm } from '../../data/aviationJobsPage'
import {
  CV_ACCEPTED_EXTENSIONS,
  CV_APPLICATION_LIMITS,
  formatCvFileSize,
  isAcceptedCvFile,
} from '../../lib/cvApplicationValidation'
import { fileToBase64, sendCvApplication } from '../../lib/sendCvApplication'

const SERVICE_INTEREST = 'Aviation Agency Services'

const contactVacanciesState = {
  serviceInterest: SERVICE_INTEREST,
  contactPrefill: {
    message: 'I would like to view current aviation vacancies with Global Wings Ltd.',
  },
}

type FormState = {
  name: string
  email: string
  phone: string
  role: string
  licence: string
  flightHours: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  role: jobsCvForm.roleOptions[0] ?? 'Pilot',
  licence: '',
  flightHours: '',
  message: jobsCvForm.defaultMessage,
}

const acceptAttribute = [
  ...CV_ACCEPTED_EXTENSIONS,
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.oasis.opendocument.text',
  'text/rtf',
  'application/rtf',
].join(',')

export default function GwJobsCvSubmitSection() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [form, setForm] = useState<FormState>(initialForm)
  const [cvFile, setCvFile] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const [fileError, setFileError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [referenceId, setReferenceId] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }))
  }

  function validateAndSetFile(file: File | null) {
    if (!file) {
      setCvFile(null)
      setFileError(null)
      return
    }

    if (!isAcceptedCvFile(file)) {
      setCvFile(null)
      setFileError('Please upload a PDF, Word, ODT, or RTF document.')
      return
    }

    if (file.size > CV_APPLICATION_LIMITS.maxFileBytes) {
      setCvFile(null)
      setFileError('Your CV must be 4 MB or smaller.')
      return
    }

    setCvFile(file)
    setFileError(null)
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    validateAndSetFile(e.target.files?.[0] ?? null)
  }

  function handleDragOver(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault()
    setDragActive(true)
  }

  function handleDragLeave(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault()
    setDragActive(false)
  }

  function handleDrop(e: DragEvent<HTMLButtonElement>) {
    e.preventDefault()
    setDragActive(false)
    validateAndSetFile(e.dataTransfer.files?.[0] ?? null)
  }

  function clearFile() {
    setCvFile(null)
    setFileError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitError(null)

    if (!cvFile) {
      setFileError('Please attach your CV before submitting.')
      return
    }

    setSubmitting(true)

    try {
      const content = await fileToBase64(cvFile)
      const reference = await sendCvApplication({
        source: 'Global Wings Jobs — CV submission',
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        role: form.role.trim(),
        licence: form.licence.trim(),
        flightHours: form.flightHours.trim(),
        message: form.message.trim(),
        attachment: {
          filename: cvFile.name,
          contentType: cvFile.type || 'application/octet-stream',
          content,
        },
      })
      setReferenceId(reference)
      setSubmitted(true)
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Could not submit your CV. Please try again or email info@komodromosgroup.com directly.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className="gw-jobs-section gw-jobs-section--closing" aria-labelledby="gw-jobs-closing-title">
      <div className="gw-jobs-closing__bg" aria-hidden />
      <div className="container gw-jobs-closing">
        <div className="gw-jobs-closing__copy reveal">
          <p className="gw-jobs-closing__eyebrow">{jobsCvForm.eyebrow}</p>
          <h2 id="gw-jobs-closing-title" className="gw-jobs-closing__title">
            {jobsClosing.title}{' '}
            <span className="gw-jobs-closing__title-em">{jobsClosing.titleEmphasis}</span>
          </h2>
          {jobsClosing.paragraphs.map((para, i) => (
            <p key={i} className="gw-jobs-closing__para">
              {para}
            </p>
          ))}
          <Link
            to={AVIATION_ROUTES.contact}
            state={contactVacanciesState}
            className="gw-jobs-closing__link"
          >
            {jobsClosing.secondaryCta}
            <ArrowRight aria-hidden size={16} />
          </Link>
        </div>

        <div className="gw-jobs-cv-form-wrap reveal reveal-delay-1">
          {submitted ? (
            <div className="gw-jobs-cv-success">
              <div className="gw-jobs-cv-success__icon" aria-hidden>
                ✓
              </div>
              <h3 className="gw-jobs-cv-success__title">{jobsCvForm.successTitle}</h3>
              <p className="gw-jobs-cv-success__text">{jobsCvForm.successMessage}</p>
              {referenceId ? (
                <p className="gw-jobs-cv-success__ref">Reference: {referenceId}</p>
              ) : null}
            </div>
          ) : (
            <form className="gw-jobs-cv-form" onSubmit={handleSubmit} noValidate>
              <span className="gw-jobs-cv-form__accent" aria-hidden />
              <div className="gw-jobs-cv-form__head">
                <h3 className="gw-jobs-cv-form__title">{jobsCvForm.title}</h3>
                <p className="gw-jobs-cv-form__intro">{jobsCvForm.intro}</p>
              </div>

              <div className="gw-jobs-cv-form__row">
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-name">Full name</label>
                  <input
                    id="gw-jobs-cv-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-email">Email address</label>
                  <input
                    id="gw-jobs-cv-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="gw-jobs-cv-form__row">
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-phone">Phone number</label>
                  <input
                    id="gw-jobs-cv-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+357 ..."
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-role">Role applying for</label>
                  <select id="gw-jobs-cv-role" name="role" required value={form.role} onChange={handleChange}>
                    {jobsCvForm.roleOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="gw-jobs-cv-form__row">
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-licence">Licence / rating</label>
                  <input
                    id="gw-jobs-cv-licence"
                    name="licence"
                    type="text"
                    placeholder="e.g. EASA ATPL, Type rated A320"
                    value={form.licence}
                    onChange={handleChange}
                  />
                </div>
                <div className="gw-jobs-cv-form__field">
                  <label htmlFor="gw-jobs-cv-hours">Total flight hours</label>
                  <input
                    id="gw-jobs-cv-hours"
                    name="flightHours"
                    type="text"
                    inputMode="numeric"
                    placeholder="Optional"
                    value={form.flightHours}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="gw-jobs-cv-form__field">
                <label htmlFor="gw-jobs-cv-message">Cover note</label>
                <textarea
                  id="gw-jobs-cv-message"
                  name="message"
                  rows={3}
                  placeholder="Brief introduction or preferred locations..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <div className="gw-jobs-cv-form__field">
                <span className="gw-jobs-cv-form__label" id="gw-jobs-cv-file-label">
                  CV / résumé
                </span>
                <input
                  ref={fileInputRef}
                  id="gw-jobs-cv-file"
                  className="gw-jobs-cv-form__file-input"
                  type="file"
                  accept={acceptAttribute}
                  aria-labelledby="gw-jobs-cv-file-label"
                  onChange={handleFileChange}
                />
                <button
                  type="button"
                  className={`gw-jobs-cv-form__upload${dragActive ? ' is-dragging' : ''}${cvFile ? ' has-file' : ''}`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {cvFile ? (
                    <>
                      <FileText className="gw-jobs-cv-form__upload-icon" aria-hidden size={22} strokeWidth={1.5} />
                      <span className="gw-jobs-cv-form__upload-copy">
                        <span className="gw-jobs-cv-form__upload-name">{cvFile.name}</span>
                        <span className="gw-jobs-cv-form__upload-meta">{formatCvFileSize(cvFile.size)}</span>
                      </span>
                      <span
                        className="gw-jobs-cv-form__upload-clear"
                        role="button"
                        tabIndex={0}
                        aria-label="Remove file"
                        onClick={(event) => {
                          event.stopPropagation()
                          clearFile()
                        }}
                        onKeyDown={(event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            event.stopPropagation()
                            clearFile()
                          }
                        }}
                      >
                        <X aria-hidden size={16} strokeWidth={2} />
                      </span>
                    </>
                  ) : (
                    <>
                      <Upload className="gw-jobs-cv-form__upload-icon" aria-hidden size={22} strokeWidth={1.5} />
                      <span className="gw-jobs-cv-form__upload-copy">
                        <span className="gw-jobs-cv-form__upload-name">Choose file or drag &amp; drop</span>
                        <span className="gw-jobs-cv-form__upload-meta">{jobsCvForm.acceptedFormats}</span>
                      </span>
                    </>
                  )}
                </button>
                {fileError ? (
                  <p className="gw-jobs-cv-form__error" role="alert">
                    {fileError}
                  </p>
                ) : null}
              </div>

              <button type="submit" className="gw-jobs-cv-form__submit" disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit CV'}
                <Send aria-hidden size={16} strokeWidth={2} />
              </button>

              {submitError ? (
                <p className="gw-jobs-cv-form__error gw-jobs-cv-form__error--submit" role="alert">
                  {submitError}
                </p>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
