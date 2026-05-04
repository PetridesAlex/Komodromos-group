/**
 * Luxury Sky — terms of carriage & charter (Cyprus).
 * Edit copy here; the modal renders this structure.
 */

export type TermsPiece =
  | { type: 'p'; text: string }
  | { type: 'ul'; intro?: string; items: string[] }

export type TermsSection = {
  id: string
  title: string
  pieces: TermsPiece[]
}

export const yachtCharterTermsDocument = {
  eyebrow: 'Luxury yacht charters · Cyprus',
  title: 'Luxury Sky',
  subtitle: 'Terms and conditions of carriage & charter',
  notice:
    'These terms govern bookings, charters, excursions, and related services provided by Luxury Sky (the “Company”). By reserving, you confirm that you and all guests have read, understood, and accept them.',
  sections: [
    {
      id: 'authority',
      title: '1. Authority of the Captain and safety compliance',
      pieces: [
        {
          type: 'p',
          text:
            '1.1 The Master (Captain) retains absolute discretion regarding navigation, safety, route, operations, and passenger conduct at all times.',
        },
        {
          type: 'p',
          text: '1.2 All passengers shall comply with directions issued by the Captain or crew.',
        },
        {
          type: 'p',
          text:
            '1.3 A mandatory safety briefing is given before departure. Passengers agree to listen carefully and ask for clarification where needed.',
        },
      ],
    },
    {
      id: 'conduct',
      title: '2. Passenger conduct and responsibilities',
      pieces: [
        {
          type: 'p',
          text:
            '2.1 Passengers must behave responsibly and respectfully toward crew, other guests, and the vessel.',
        },
        {
          type: 'p',
          text: '2.2 Children must remain under the direct supervision of a responsible adult at all times.',
        },
        {
          type: 'p',
          text:
            '2.3 Smoking or vaping is prohibited in enclosed areas. Where permitted, smoking is only in designated external areas with proper disposal.',
        },
        {
          type: 'p',
          text:
            '2.4 Discharge of waste into the sea or misuse of onboard sanitary facilities is strictly prohibited.',
        },
        {
          type: 'p',
          text:
            '2.5 Alcohol must be consumed in moderation. The Captain may refuse boarding or end participation if intoxication threatens safety.',
        },
        {
          type: 'p',
          text:
            '2.6 Passengers are responsible for personal belongings. The Company is not liable for loss, theft, or damage except where caused by proven gross negligence.',
        },
        {
          type: 'p',
          text:
            '2.7 Passengers must disclose relevant medical conditions, limitations, allergies, or disabilities before booking.',
        },
        {
          type: 'p',
          text:
            '2.8 Passengers must arrive at the agreed meeting point on time. Late arrival does not entitle anyone to a refund.',
        },
      ],
    },
    {
      id: 'risk',
      title: '3. Assumption of risk',
      pieces: [
        {
          type: 'ul',
          intro:
            '3.1 Maritime excursions involve inherent risks including, but not limited to:',
          items: [
            'Vessel movement',
            'Sea spray or water exposure',
            'Slips, falls, or minor injuries',
            'Weather variability',
            'Delayed access to medical facilities',
          ],
        },
        {
          type: 'p',
          text: '3.2 By participating, passengers voluntarily accept these risks.',
        },
        {
          type: 'p',
          text: '3.3 Passengers confirm they are physically and medically fit for the excursion.',
        },
      ],
    },
    {
      id: 'liability',
      title: '4. Limitation of liability',
      pieces: [
        {
          type: 'p',
          text:
            '4.1 To the fullest extent permitted by Cyprus and EU law, Luxury Sky shall not be liable for:',
        },
        {
          type: 'ul',
          items: [
            'Personal injury',
            'Illness',
            'Death',
            'Property damage',
            'Financial loss',
            'Consequential or indirect damages',
          ],
        },
        {
          type: 'p',
          text:
            'arising from participation in any cruise or charter, except where such loss is directly caused by wilful misconduct or gross negligence of the Company.',
        },
        {
          type: 'p',
          text:
            '4.2 Onboard medical facilities are limited. In an emergency, assistance is coordinated via maritime communications; treatment may be delayed until transfer ashore.',
        },
        {
          type: 'p',
          text: '4.3 Passengers are strongly advised to carry comprehensive travel and medical insurance.',
        },
        {
          type: 'p',
          text:
            '4.4 The Company is not liable for damage to belongings from sea conditions, including spray or humidity.',
        },
      ],
    },
    {
      id: 'weather',
      title: '5. Weather and operational variations',
      pieces: [
        {
          type: 'p',
          text:
            '5.1 Routes, timings, or itineraries may be changed at the Captain’s discretion due to weather, safety, port authority instructions, or operations.',
        },
        {
          type: 'p',
          text: '5.2 Such changes do not entitle passengers to a refund or compensation.',
        },
      ],
    },
    {
      id: 'third-party',
      title: '6. Third-party services',
      pieces: [
        {
          type: 'p',
          text:
            '6.1 Where transport, catering, excursions, or other services are supplied by third parties, the Company acts only as an intermediary.',
        },
        {
          type: 'p',
          text:
            '6.2 The Company is not liable for acts, omissions, delays, or negligence of such suppliers.',
        },
      ],
    },
    {
      id: 'payment',
      title: '7. Payment terms',
      pieces: [
        {
          type: 'ul',
          intro: 'Scheduled cruises / semi-private charters / events',
          items: [
            'Full payment is required at the time of booking.',
            'Bookings are confirmed only once cleared funds are received.',
          ],
        },
        {
          type: 'ul',
          intro: 'Private day charters',
          items: [
            '50% deposit on booking.',
            'Balance due no later than 10 days before the charter.',
            'Food, beverage, or service extras follow the same payment schedule unless agreed otherwise.',
          ],
        },
        {
          type: 'ul',
          intro: 'Weekly yacht charters',
          items: [
            '50% deposit on signing the charter agreement.',
            'Balance due four (4) weeks before departure.',
          ],
        },
      ],
    },
    {
      id: 'deposit',
      title: '8. Security deposit',
      pieces: [
        {
          type: 'p',
          text:
            'A refundable security deposit (indicatively €4,500, depending on vessel type) is payable before embarkation. Deductions may be made for damage, lost equipment, excessive cleaning, or breach of charter obligations.',
        },
      ],
    },
    {
      id: 'cancellation',
      title: '9. Cancellation policy',
      pieces: [
        {
          type: 'ul',
          intro: 'Scheduled cruises',
          items: [
            'Cancellation more than 48 hours before departure → full refund.',
            'Cancellation within 48 hours → 20% charge.',
            'Cancellation within 24 hours → 100% charge.',
          ],
        },
        {
          type: 'ul',
          intro: 'Private charters',
          items: [
            'Cancellation 30–10 days before → 50% charge.',
            'Cancellation 9–1 days before → 100% charge.',
          ],
        },
        {
          type: 'ul',
          intro: 'Weekly charters',
          items: [
            'Cancellation 40–16 days before → 50% charge.',
            'Cancellation 15–1 days before → 100% charge.',
          ],
        },
      ],
    },
    {
      id: 'no-show',
      title: '10. No-show policy',
      pieces: [
        {
          type: 'p',
          text:
            'Failure to attend at the agreed embarkation time is treated as cancellation with 100% retention of fees. Refund exceptions may apply only with official medical documentation.',
        },
      ],
    },
    {
      id: 'insurance',
      title: '11. Insurance',
      pieces: [
        {
          type: 'ul',
          intro: 'Vessels operated by Luxury Sky carry marine insurance including:',
          items: [
            'Third-party liability',
            'Hull and machinery',
            'Pollution liability',
            'Onboard equipment',
          ],
        },
        {
          type: 'p',
          text: 'This does not replace personal travel or medical insurance for passengers.',
        },
      ],
    },
    {
      id: 'law',
      title: '12. Governing law and jurisdiction',
      pieces: [
        {
          type: 'p',
          text:
            'These terms are governed by the laws of the Republic of Cyprus. Any dispute is subject to the exclusive jurisdiction of the courts of Cyprus.',
        },
      ],
    },
    {
      id: 'acceptance',
      title: '13. Acceptance',
      pieces: [
        {
          type: 'p',
          text:
            'By completing a booking, the client accepts these terms on behalf of all passengers named in the reservation.',
        },
      ],
    },
  ] satisfies TermsSection[],
}
