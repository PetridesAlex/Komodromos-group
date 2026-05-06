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
  title: 'Luxury Sky – Terms and conditions of carriage & charter',
  subtitle: '',
  notice:
    'These Terms and Conditions govern all bookings, charters, excursions, and related services provided by Luxury Sky (hereinafter referred to as “the Company”). By making a reservation, the client and all participating guests acknowledge that they have read, understood, and agreed to be legally bound by these Terms.',
  sections: [
    {
      id: 'authority',
      title: '1. Authority of the Captain and safety compliance',
      pieces: [
        {
          type: 'p',
          text:
            '1.1 The Master (Captain) of the vessel retains absolute discretion and authority regarding navigation, safety procedures, route selection, operational decisions, and passenger conduct at all times.',
        },
        {
          type: 'p',
          text:
            '1.2 All passengers shall strictly comply with any directions or instructions issued by the Captain or crew.',
        },
        {
          type: 'p',
          text:
            '1.3 A mandatory safety briefing shall be conducted prior to departure. Passengers confirm their obligation to listen attentively and request clarification where necessary.',
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
            '2.1 Passengers must behave in a responsible and respectful manner towards crew, other passengers, and the vessel.',
        },
        {
          type: 'p',
          text:
            '2.2 Children shall remain under the direct supervision of a responsible adult at all times.',
        },
        {
          type: 'p',
          text:
            '2.3 Smoking or vaping is strictly prohibited within enclosed vessel areas. Where permitted, smoking may only take place in designated external areas using appropriate disposal facilities.',
        },
        {
          type: 'p',
          text:
            '2.4 Disposal of waste into the sea or misuse of onboard sanitary facilities is strictly prohibited.',
        },
        {
          type: 'p',
          text:
            '2.5 Alcohol consumption shall be moderate. The Captain reserves the right to deny boarding or terminate participation where intoxication compromises safety.',
        },
        {
          type: 'p',
          text:
            '2.6 Passengers remain solely responsible for their personal belongings. The Company accepts no liability for loss, theft, or damage unless caused by proven gross negligence.',
        },
        {
          type: 'p',
          text:
            '2.7 Passengers must disclose any relevant medical conditions, physical limitations, allergies, or disabilities prior to booking.',
        },
        {
          type: 'p',
          text:
            '2.8 Passengers must arrive at the agreed meeting location at the designated time. Failure to do so shall not entitle the passenger to any refund.',
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
            '3.1 Maritime excursions constitute activities involving inherent risks including, but not limited to:',
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
          text:
            '3.2 By participating, passengers expressly acknowledge and voluntarily assume all such risks.',
        },
        {
          type: 'p',
          text:
            '3.3 Passengers confirm they are physically and medically fit to participate in the excursion.',
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
            'personal injury',
            'illness',
            'death',
            'property damage',
            'financial loss',
            'consequential or indirect damages',
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
            '4.2 Medical facilities onboard are limited. In case of emergency, assistance shall be coordinated via maritime communication systems. Passengers accept that treatment may be delayed until transfer ashore.',
        },
        {
          type: 'p',
          text:
            '4.3 Passengers are strongly advised to obtain comprehensive travel and medical insurance.',
        },
        {
          type: 'p',
          text:
            '4.4 The Company shall not be liable for any damage to personal belongings caused by sea conditions including water splashes or humidity.',
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
            '5.1 Routes, timings, or itineraries may be amended at the Captain’s discretion due to weather conditions, safety considerations, port authority instructions, or operational requirements.',
        },
        {
          type: 'p',
          text:
            '5.2 Such modifications shall not constitute grounds for refund or compensation.',
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
            '6.1 Where transport, catering, excursions, or additional services are provided by third-party suppliers, the Company acts solely as an intermediary.',
        },
        {
          type: 'p',
          text:
            '6.2 The Company shall not be liable for acts, omissions, delays, or negligence of such suppliers.',
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
            'Full payment is required at time of booking.',
            'Bookings are confirmed only upon receipt of cleared funds.',
          ],
        },
        {
          type: 'ul',
          intro: 'Private day charters',
          items: [
            '50% deposit upon booking',
            'Remaining balance payable no later than 10 days prior to charter',
            'Food, beverage, or service arrangements follow identical payment timelines.',
          ],
        },
        {
          type: 'ul',
          intro: 'Weekly yacht charters',
          items: [
            '50% deposit upon signing charter agreement',
            'Remaining balance payable four (4) weeks prior to departure',
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
            'A refundable security deposit (indicatively €4,500 depending on vessel type) shall be payable prior to embarkation. Any damage, loss of equipment, excessive cleaning requirements, or breach of charter obligations may be deducted.',
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
            'Cancellation >48 hours before departure → Full refund',
            'Cancellation within 48 hours → 20% charge',
            'Cancellation within 24 hours → 100% charge',
          ],
        },
        {
          type: 'ul',
          intro: 'Private charters',
          items: [
            'Cancellation 30–10 days → 50% charge',
            'Cancellation 9–1 days → 100% charge',
          ],
        },
        {
          type: 'ul',
          intro: 'Weekly charters',
          items: [
            'Cancellation 40–16 days → 50% charge',
            'Cancellation 15–1 days → 100% charge',
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
            'Failure to attend at agreed embarkation time shall be treated as a cancellation with 100% retention of fees. Refund exceptions may be considered only upon presentation of official medical documentation.',
        },
      ],
    },
    {
      id: 'insurance',
      title: '11. Insurance',
      pieces: [
        {
          type: 'ul',
          intro: 'All vessels operated by Luxury Sky maintain marine insurance covering:',
          items: [
            'third-party liability',
            'hull and machinery',
            'pollution liability',
            'onboard equipment',
          ],
        },
        {
          type: 'p',
          text:
            'Such insurance does not replace personal travel or medical insurance of passengers.',
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
            'These Terms shall be governed by and construed in accordance with the laws of the Republic of Cyprus. Any dispute arising shall be subject to the exclusive jurisdiction of the Courts of Cyprus.',
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
            'By completing a booking, the Client confirms acceptance of these Terms on behalf of all passengers included in the reservation.',
        },
      ],
    },
  ] satisfies TermsSection[],
}
