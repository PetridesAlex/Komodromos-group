import { useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'
import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  Calculator,
  FileCheck,
  Compass,
  Search,
  HardHat,
  X,
} from 'lucide-react'
import Footer from './Footer'
import SiteTopbar from './SiteTopbar'
import ConsultingServiceCardsCarousel from './ConsultingServiceCardsCarousel'
import Profile3 from './profile-3'
import { useReveal } from '../hooks/useReveal'

const SVC_COVER = '/images/services/companie-services-cover'

const HERO_BG = `${SVC_COVER}/10%20Business-consulting.webp`
/** Judgment column: dedicated advisory / consulting imagery (distinct from hero) */
const JUDGMENT_MEDIA = `${SVC_COVER}/business-consulting-judgment.png`

type ConsultingServiceItem = {
  id: string
  title: string
  icon: LucideIcon
}

const SERVICE_CATEGORIES: ConsultingServiceItem[] = [
  {
    id: 'company-account',
    title: 'Company account',
    icon: Building2,
  },
  {
    id: 'business-accounting',
    title: 'Business & Accounting Services',
    icon: Calculator,
  },
  {
    id: 'tax-returns',
    title: 'Tax Returns',
    icon: FileCheck,
  },
  { id: 'tax-advice', title: 'Tax Advice & Planning', icon: Compass },
  { id: 'tax-investigation', title: 'Tax Investigation', icon: Search },
  { id: 'contractors-advice', title: 'Contractors Advice', icon: HardHat },
]

function CompanyAccountModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">Limited Company Accounts …and so much more</p>
      <p className="consulting-modal__p">
        Whether you just want help preparing your statutory accounts or you go the
        whole hog and get us to audit your year-end accounts, you&apos;ll wind up
        with a far better understanding of your business.
      </p>

      <h4 className="consulting-modal__h">Accounts</h4>
      <p className="consulting-modal__p">
        We can do a great job preparing your accounts, but getting the books together
        at year-end isn&apos;t the end of the story. Using them to make informed
        business and personal decisions is the most important bit.
      </p>
      <p className="consulting-modal__p consulting-modal__p--strong">
        With our help you&apos;ll be able to:
      </p>
      <ul className="consulting-modal__list">
        <li>See from your accounts exactly how profitable and stable your business is.</li>
        <li>Make good, solid plans for the year ahead.</li>
        <li>Use the information for making the right business decisions.</li>
      </ul>

      <h4 className="consulting-modal__h">More than accounts – it all adds up!</h4>
      <p className="consulting-modal__p">
        We won&apos;t just hand over your accounts and leave you to figure out what
        it all means. We&apos;ll review the financial performance of the business
        with you, and we&apos;ll answer your questions and advise you in plain
        English.
      </p>
      <p className="consulting-modal__p">
        We are professional and affordable Limited company accountants. It really
        helps that we are business owners themselves. We feel your pain and speak
        your language!
      </p>

      <h4 className="consulting-modal__h">
        Why Komodromos Group is better than traditional accounting
      </h4>
      <ul className="consulting-modal__list consulting-modal__list--spaced">
        <li>
          <strong>No more paperwork:</strong> raise invoices that link seamlessly to
          your accounts and upload information directly from your online bank
          statements. No need for re-keying, spreadsheets, paperwork or
          &quot;traditional&quot; bookkeeping – saves time whilst being totally
          organised.
        </li>
        <li>
          <strong>Instant access to real-time figures:</strong> an up to date view of
          your financial and tax position is available 24/7. No waiting and no extra
          cost.
        </li>
        <li>
          <strong>Unlimited Support:</strong> your own experienced accountant
          contactable directly via phone or email, for unlimited advice. No trekking
          to the office, no appointments, no delays, no stuffy meetings. And no extra
          cost!
        </li>
        <li>
          <strong>Fairness and transparency:</strong> all-inclusive, fixed fees with
          no exit fee.
        </li>
      </ul>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To manage company account and for a face to face meeting with a client
          services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function BusinessAccountingModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">Business &amp; Accounting Services</p>
      <p className="consulting-modal__p">
        Komodromos Group can provide you with more than just a set of books at
        year-end. We&apos;ve developed a range of services for businesses to cover
        many of the other challenges you&apos;ll meet, from business planning and
        company secretarial to payroll. Of course, having everything under one roof
        will save you time and money.
      </p>

      <h4 className="consulting-modal__h">Business owner support</h4>
      <p className="consulting-modal__p">
        Being a business owner is often a lonely place to be. Having advisers that
        can act as a sounding board to discuss your worries, plans, or business
        challenges can be a huge help. All of our partners are business owners
        themselves, so can not only offer you their financial experience but also
        their commercial experience as well.
      </p>

      <h4 className="consulting-modal__h">Payroll Services</h4>
      <p className="consulting-modal__p">
        Payroll management involves a lot of complex calculations and rules, so our
        payroll outsourcing service can save you a major headache. Whether you have
        one employee or a hundred, you&apos;ll find our payroll service flexible,
        accurate &amp; affordable.
      </p>

      <h4 className="consulting-modal__h">Business planning</h4>
      <p className="consulting-modal__p">
        Good business planning is key if you want your business to thrive and grow.
        We can help you map out the business plan you need to raise funds, improve
        management information, plan resources or evaluate projects.
      </p>

      <h4 className="consulting-modal__h">Company formation</h4>
      <p className="consulting-modal__p">
        Before you make a decision to incorporate your business, we provide you with
        complete guidance on the pros and cons of incorporation. We will profile
        your tax bill as both an incorporated business and an unincorporated
        business, and compare the results. We organise registrations for VAT,
        Corporation Tax.
      </p>
      <p className="consulting-modal__p">
        We also set up an online relationship with Companies House, which then
        allows us to make modifications to directors&apos; details, shareholdings and
        other registration matters, online. The company formation service is provided
        with same day registration of new limited companies.
      </p>

      <p className="consulting-modal__p">
        Take the pressure off your business – by letting Komodromos Group lend a hand
        when you need it. Contact us now and find out about the huge range of
        business &amp; accounting services we provide.
      </p>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To discuss business &amp; accounting services and for a face to face
          meeting with a client services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function TaxReturnsModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">Tax Return Services In London</p>

      <h4 className="consulting-modal__h consulting-modal__h--prominent">
        Want to pay less tax?
      </h4>
      <p className="consulting-modal__p">
        Finding the tax allowances and reliefs available isn&apos;t always easy,
        given the complexity of tax laws. This is where our growing experience of
        tax comes in. We&apos;ve got the right mix of experience and knowledge to
        make sure you&apos;re not only compliant but you and your company save
        tax.
      </p>

      <h4 className="consulting-modal__h">What areas can you help me save tax?</h4>
      <p className="consulting-modal__p consulting-modal__p--strong">All of them!</p>
      <p className="consulting-modal__p">
        You can bet that whatever tax issue or question you have, we&apos;ve got the
        answer. Here&apos;s just a taster of the areas we deal with:
      </p>

      <h4 className="consulting-modal__h">Tax compliance</h4>
      <p className="consulting-modal__p">
        Getting your tax right has never been more important. Penalties are growing
        and HMRC is cracking down more and more. We&apos;ll make sure your tax
        affairs are legal and accurate, right down to the last detail.
      </p>
      <p className="consulting-modal__p">
        Under self-assessment, individuals, businesses and companies are responsible
        for correctly calculating, returning and paying their own tax liabilities.
        Getting it wrong means that penalties can be levied even for the most
        innocent of mistakes.
      </p>
      <p className="consulting-modal__p">
        Our aim is to help you minimise the time you spend on this process.
      </p>
      <p className="consulting-modal__p">
        The Komodromos Group&apos;s experienced, highly qualified team will ensure
        that your tax affairs are handled in an efficient, timely manner, reducing
        your involvement in the compliance process, leaving you free to concentrate
        on your business or personal affairs.
      </p>

      <h4 className="consulting-modal__h">Tax planning</h4>
      <p className="consulting-modal__p">
        How you structure your personal and company affairs can have a massive
        impact on the tax you pay. We&apos;ll come up with an individual tax
        planning strategy that makes sure you pay the least amount of tax.
      </p>
      <p className="consulting-modal__p">
        Our business tax planning service helps you to plan for, manage and mitigate
        your business tax exposures, providing regular opportunities to structure
        the business and its transactions in tax effective ways and minimizing,
        where possible, the impact of unexpected tax liabilities on you and your
        business.
      </p>
      <p className="consulting-modal__p">
        Our personal tax planning service helps you to plan for, manage and mitigate
        your personal and family tax exposures, providing a framework to manage
        assets and income in tax effective ways in order to minimize the overall tax
        burden.
      </p>
      <p className="consulting-modal__p">
        Our business structure review service helps you review and consider the
        appropriateness of your current or intended business structure, taking into
        account taxation and other relevant considerations, so that you can be
        confident the structure you decide to adopt is the most tax efficient and
        appropriate for you and your business.
      </p>

      <h4 className="consulting-modal__h">Corporation tax</h4>
      <p className="consulting-modal__p">
        Whether you run a single company or a whole group we&apos;ll make sure you
        can retain more profit or extract more value from your business.
      </p>
      <ul className="consulting-modal__list">
        <li>Tax returns and corporation tax computations</li>
        <li>Quarterly instalment payment advice</li>
      </ul>
      <p className="consulting-modal__p">
        We also aim to provide you with information on changes in legislation
        throughout the tax year and help you plan the completion of your tax return
        information.
      </p>
      <p className="consulting-modal__p">
        We have a dedicated team of professional tax return accountants. Our service
        can include, if required, pre-year-end tax planning to assist you with
        planning your cash flow, identifying large capital expenditure for capital
        allowances purposes.
      </p>
      <p className="consulting-modal__p">
        Thinking of selling your business? Advice before the sale can make a
        massive difference to the Corporation Tax you&apos;ll pay.
      </p>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To discuss tax returns and for a face to face meeting with a client
          services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function TaxAdvicePlanningModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">Tax Advice &amp; Planning Services</p>
      <p className="consulting-modal__p">
        You are entitled to arrange your affairs to pay the absolute legal minimum
        amount of tax. Whilst completion of tax returns and statutory tax obligations
        are important jobs, all accountants should be capable of completing them and
        advising you of your tax position and liabilities.
      </p>
      <p className="consulting-modal__p">
        We try to do more than just this and are interested in maximizing your tax
        planning opportunities.
      </p>
      <p className="consulting-modal__p">
        We all have to pay our taxes but within the legal framework, there are
        numerous ways of saving tax and making sure you do not pay a penny more than
        is absolutely necessary. Komodromos Group has extensive experience in this
        area of work and always fight as hard as we can for our clients. We have a
        dedicated team of tax accountants in London.
      </p>

      <p className="consulting-modal__p consulting-modal__p--strong">
        We can help with tax planning in relation to:
      </p>
      <ul className="consulting-modal__list">
        <li>Personal taxes</li>
        <li>Business taxes</li>
        <li>Tax efficient employee remuneration strategies</li>
        <li>VAT planning</li>
        <li>Inheritance Tax strategies</li>
        <li>Capital Gains</li>
        <li>Profit extraction strategies</li>
        <li>Exit strategies</li>
        <li>International Tax</li>
        <li>Employment status</li>
        <li>IR35 advice</li>
      </ul>

      <p className="consulting-modal__p">
        Apart from extensive experience in this arena, we have invested heavily in
        reference materials and specialist software and have access to the Tax
        Legislation, Tax Cases, to the internal manuals of HMRC and to detailed
        commentary on all taxes, direct and indirect. This allows us to research any
        tax topic at all and provide many ways of helping you legally save tax.
      </p>
      <p className="consulting-modal__p">
        New clients are often surprised at how much can be done to help with their tax
        position. We are always willing to go that extra mile to offer advice on the
        areas where tax can be saved. We enjoy this work!
      </p>
      <p className="consulting-modal__p">
        It is important that this work is done in advance and you should contact us
        as soon as possible.
      </p>
      <p className="consulting-modal__p">
        All of our Tax Planning makes legitimate use of the Tax Legislation and Case
        Law so that you are not put at additional risk from a full HMRC Enquiry, or
        where there are risks, these are pointed out to you.
      </p>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To discuss tax advice &amp; planning and for a face to face meeting with a
          client services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function TaxInvestigationModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">
        HMRC Disputes &amp; HMRC Tax Investigation Advice in London
      </p>
      <p className="consulting-modal__p">
        Komodromos Group recognizes that tax investigations can be very stressful and
        time-consuming.
      </p>
      <p className="consulting-modal__p">
        Our Tax Investigations Team aims to provide you with specialist advice to
        diminish the stress and anxiety that an HMRC investigation may cause. We
        attempt to resolve the tax investigation in the most efficient and
        cost-effective manner whilst reducing your tax contact wherever possible. We
        provide tax investigation and tax dispute services to our clients at
        competitive fees.
      </p>
      <p className="consulting-modal__p">
        Komodromos Group specializes in tax investigation services. We are therefore
        able to keep up to date with the latest alterations in the inquiry
        legislation and the current strategies adopted by tax inspectors to address
        tax evasion and tax fraud.
      </p>
      <p className="consulting-modal__p">
        Our expertise exists in the whole range of tax investigations from voluntary
        disclosures and those conducted at local compliance level right through to
        cases of serious tax fraud and tax evasion under HMRC&apos;s Code of Practice
        9 (COP9) – Contractual Disclosure Facility conducted by HMRC&apos;s specialist
        investigations team. We also offer VAT inspection advice and specialist support
        in VAT fraud cases.
      </p>
      <p className="consulting-modal__p">
        If you are subject to a tax investigation by HMRC, we function on the basis
        that all clients receive the highest levels of professional representation,
        service, courtesy and value for money.
      </p>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To discuss tax investigations and HMRC disputes and for a face to face
          meeting with a client services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function ContractorsAdviceModalContent() {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__kicker">Contractors &amp; freelance advisory</p>
      <p className="consulting-modal__p">
        Working as a contractor or freelancer means your tax position, expenses,
        and trading structure need to stay aligned with the rules — and with how you
        actually work day to day. Komodromos Group helps you cut through the noise
        with clear, practical advice tailored to your sector and arrangements.
      </p>
      <p className="consulting-modal__p">
        We support clients who operate through limited companies, umbrella
        arrangements, or self-employment, including guidance on record-keeping,
        dividends and remuneration, VAT where relevant, and staying compliant with
        filing deadlines.
      </p>
      <p className="consulting-modal__p">
        Where employment status or off-payroll rules are in play, we can review your
        contracts and working practices alongside your accountants&apos; view of risk,
        so you understand your exposure and your options — before HMRC or an agency
        raises questions.
      </p>
      <p className="consulting-modal__p">
        Whether you are taking on a new contract, changing how you invoice, or
        planning an exit from contracting, we aim to give you a calm, senior-led
        perspective and documentation you can rely on.
      </p>

      <div className="consulting-modal__contact">
        <p className="consulting-modal__p">
          To discuss contractors advice and for a face to face meeting with a client
          services team member, contact us on{' '}
          <a href="tel:+35770003008">+357 7000 3008</a>
          {' / '}
          <a href="tel:+35770002009">+357 7000 2009</a>
          {' or email: '}
          <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
        </p>
      </div>
    </div>
  )
}

function PlaceholderModalContent({ title }: { title: string }) {
  return (
    <div className="consulting-modal__article">
      <p className="consulting-modal__p">
        Full details for <strong>{title}</strong> will be available here soon. Our
        team can walk you through scope, timelines, and pricing on a short call.
      </p>
      <p className="consulting-modal__p">
        Reach us on{' '}
        <a href="tel:+35770003008">+357 7000 3008</a> /{' '}
        <a href="tel:+35770002009">+357 7000 2009</a>
        {' or '}
        <a href="mailto:info@komodromosgroup.com">info@komodromosgroup.com</a>
      </p>
      <Link
        to="/contact"
        state={{ serviceInterest: "Business Consultant's", consultingTopic: title }}
        className="consulting-modal__inline-cta"
      >
        Request details
      </Link>
    </div>
  )
}

export default function BusinessConsultingPage() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null)
  const modalTitleId = useId()
  const pageRef = useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!openServiceId) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [openServiceId])

  useEffect(() => {
    if (!openServiceId) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenServiceId(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openServiceId])

  return (
    <div className="page consulting-page" ref={pageRef}>
      <SiteTopbar
        logoPathname="/"
        logoScrollToId="home"
        homeHref="/"
        servicesSectionHref="/#services"
      />

      <section className="consulting-hero" aria-labelledby="consulting-hero-title" data-hero-parallax-root>
        <div
          className="consulting-hero__bg"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
          data-hero-parallax
        />
        <div className="consulting-hero__grain" aria-hidden />
        <div className="consulting-hero__scrim" aria-hidden />
        <div className="consulting-hero__accent consulting-hero__accent--1" aria-hidden />
        <div className="consulting-hero__accent consulting-hero__accent--2" aria-hidden />
        <div className="container consulting-hero__inner">
          <p className="consulting-hero__kicker reveal">
            Giannos Komodromos — Business Consultant&apos;s
          </p>
          <h1 id="consulting-hero-title" className="consulting-hero__title reveal reveal-delay-1">
            The new way of success…
          </h1>
          <p className="consulting-hero__rule reveal reveal-delay-2" aria-hidden />
          <p className="consulting-hero__lead reveal reveal-delay-2">
            Strategic clarity for companies that expect precision in numbers,
            structure, and long-term outcomes.
          </p>
        </div>
      </section>

      <section className="consulting-section consulting-judgment section-led section-led--warm">
        <div className="container consulting-judgment__grid">
          <div className="consulting-judgment__media reveal-left">
            <div className="consulting-judgment__frame">
              <img
                src={JUDGMENT_MEDIA}
                alt="Advisory and professional services imagery"
                className="consulting-judgment__img"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="consulting-judgment__badge" aria-hidden>
              <span className="consulting-judgment__badge-line" />
              <span>Advisory</span>
            </div>
          </div>
          <div className="consulting-judgment__copy">
            <p className="consulting-section__eyebrow reveal">Judgment that scales</p>
            <h2 className="consulting-section__title reveal reveal-delay-1">
              Why client judgment matters
            </h2>
            <p className="consulting-section__body reveal reveal-delay-2">
              In complex accounting and tax environments, the strongest signal of
              quality is not a slogan—it is the discernment of the people you serve.
              We treat every engagement as a partnership where your standards shape
              our priorities: accuracy you can defend, advice you can act on, and
              outcomes measured in trust as much as in compliance.
            </p>
            <p className="consulting-section__body consulting-section__body--emphasis reveal reveal-delay-3">
              When clients exercise sharp judgment, they choose partners who respect
              both the letter of the law and the reality of their business—that is
              the bar we hold ourselves to.
            </p>
          </div>
        </div>
      </section>

      <section
        className="consulting-section consulting-profile section-led section-led--warm"
        aria-labelledby="profile-card-title"
      >
        <div className="container consulting-profile__inner">
          <Profile3 />
        </div>
      </section>

      <section className="consulting-section consulting-clients section-led section-led--warm">
        <div className="container consulting-clients__inner">
          <div className="consulting-clients__panel reveal">
            <p className="consulting-clients__label">Our clients</p>
            <h2 className="consulting-clients__title">
              We believe that our clients are the best judges of our service
            </h2>
            <p className="consulting-clients__text">
              We&apos;re proud of the strong relationships we have — read what our
              clients say to find out more. If you want to know more, then contact us
              and we&apos;ll happily let you speak to our clients personally.
            </p>
            <Link
              to="/contact"
              state={{ serviceInterest: "Business Consultant's" }}
              className="consulting-clients__cta"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="consulting-section consulting-services section-led section-led--warm">
        <div className="container">
          <p className="consulting-section__eyebrow reveal">What we cover</p>
          <h2 className="consulting-section__title consulting-services__heading reveal reveal-delay-1">
            Services &amp; focus areas
          </h2>
          <p className="consulting-section__intro reveal reveal-delay-2">
            A structured suite of support for companies and individuals who need
            dependable financial and tax guidance.
          </p>
        </div>
        <div className="consulting-services__carousel-bleed">
          <ConsultingServiceCardsCarousel
            items={SERVICE_CATEGORIES}
            onOpenDetails={(id) => setOpenServiceId(id)}
          />
        </div>
      </section>

      {openServiceId ? (
        <div
          className="consulting-modal-root"
          role="presentation"
          onClick={() => setOpenServiceId(null)}
        >
          <div
            className="consulting-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="consulting-modal__chrome">
              <div className="consulting-modal__accent-bar" aria-hidden />
              <button
                type="button"
                className="consulting-modal__close"
                onClick={() => setOpenServiceId(null)}
                aria-label="Close"
              >
                <X size={22} strokeWidth={1.75} />
              </button>
            </div>
            <div className="consulting-modal__scroll">
              <h2 id={modalTitleId} className="consulting-modal__title">
                {SERVICE_CATEGORIES.find((s) => s.id === openServiceId)?.title}
              </h2>
              {openServiceId === 'company-account' ? (
                <CompanyAccountModalContent />
              ) : openServiceId === 'business-accounting' ? (
                <BusinessAccountingModalContent />
              ) : openServiceId === 'tax-returns' ? (
                <TaxReturnsModalContent />
              ) : openServiceId === 'tax-advice' ? (
                <TaxAdvicePlanningModalContent />
              ) : openServiceId === 'tax-investigation' ? (
                <TaxInvestigationModalContent />
              ) : openServiceId === 'contractors-advice' ? (
                <ContractorsAdviceModalContent />
              ) : (
                <PlaceholderModalContent
                  title={
                    SERVICE_CATEGORIES.find((s) => s.id === openServiceId)?.title ??
                    ''
                  }
                />
              )}
            </div>
          </div>
        </div>
      ) : null}

      <Footer />
    </div>
  )
}
