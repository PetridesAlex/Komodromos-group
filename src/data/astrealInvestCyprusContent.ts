import { ASTREAL_ASSETS } from './astrealDevelopersPage'

const INVEST_PHOTOS = `${ASTREAL_ASSETS}/all-photos`

export const ASTREAL_INVEST_CYPRUS_HERO_IMAGE = `${INVEST_PHOTOS}/invest-cyprus-3.webp`

export type AstrealInvestHighlight = {
  text: string
  image?: string
  imageAlt?: string
}

export type AstrealInvestMosaicImage = {
  src: string
  alt: string
  featured?: boolean
}

export const ASTREAL_INVEST_CYPRUS_INTRO = {
  eyebrow: 'Invest in Cyprus',
  heroImageAlt: 'Cyprus coastline and Mediterranean lifestyle — invest in Cyprus',
  title: 'Reasons to invest',
  titleAccent: 'In Cyprus, the ancient island of Aphrodite!',
  sectionTitle: 'A few words about Cyprus',
  introImage: `${INVEST_PHOTOS}/invest-in-cyprus-1.webp`,
  introImageAlt: 'Coastal Cyprus — lifestyle and investment destination',
  paragraphs: [
    'Cyprus is a modern country that enjoys a strategic geographical position. It lies at the crossroads of three continents, Europe, Africa and Asia, thus provides unrivalled access and travel opportunities. With its excellent flight connections and first-class airports, the island is perfectly placed for working and travelling within and beyond the European Union. Cyprus has a rich heritage and diverse culture, beautiful beaches with the cleanest bathing waters in Europe, fresh air, a wonderful Mediterranean climate and cosmopolitan cities with an abundance of amenities. The island offers a low cost but high standard of living and is a very popular year-round destination for Europeans seeking a coastal or golf holiday.',
    'Cyprus has a modern, free-market, service-based economy and is a favoured business destination due to its strong set of business and taxation advantages. Additionally, the island is very safe and stable making it an ideal location for families and students. Cyprus is rapidly recovering from recent economic turmoil thanks to significant activities in the shipping, tourism, financial & legal services sectors. Cyprus is an emerging regional energy hub, since the discovery of huge hydrocarbon reserves in its Exclusive Economic zone the island has seen a surge in foreign investment and development. Additionally, Cyprus’ recently launched residency and citizenship programmes have proved highly popular, creating strong demand in the property sector. Cyprus enjoys world-class property rights and solid investment, trade, labour, business and financial freedom.',
  ],
  mosaic: [
    {
      src: `${INVEST_PHOTOS}/invest-in-cyprus-2.webp`,
      alt: 'Cyprus property and coastal living',
      featured: true,
    },
    {
      src: `${INVEST_PHOTOS}/invest-in-cyprus-4.webp`,
      alt: 'Modern Cyprus development and infrastructure',
    },
    {
      src: `${INVEST_PHOTOS}/invest-in-cyprus-10.webp`,
      alt: 'Mediterranean lifestyle in Cyprus',
    },
  ] satisfies readonly AstrealInvestMosaicImage[],
  reasonsTitle: 'Why invest in Cyprus',
  reasonsLead:
    'From EU membership and education to infrastructure, healthcare, and quality of life — the island combines stability with opportunity.',
  highlights: [
    {
      text: 'Full EU member since 2004',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-11.webp`,
      imageAlt: 'Cyprus as an EU member state',
    },
    {
      text: 'Excellent British education',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-12.webp`,
      imageAlt: 'Education and schools in Cyprus',
    },
    {
      text: 'Beautiful scenery & very low crime rate',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-13.webp`,
      imageAlt: 'Scenic Cyprus landscapes',
    },
    {
      text: 'Strategic location enables easy access to Europe, Africa & Asia',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-14.webp`,
      imageAlt: 'Cyprus strategic location in the Mediterranean',
    },
    {
      text: 'Excellent year-round climate',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-15.webp`,
      imageAlt: 'Sunny Mediterranean climate in Cyprus',
    },
    {
      text: 'Advanced infrastructure',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-16.webp`,
      imageAlt: 'Modern infrastructure in Cyprus',
    },
    {
      text: 'No inheritance tax',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-17.webp`,
      imageAlt: 'Favourable taxation for investors',
    },
    {
      text: 'Excellent health care system',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-18.webp`,
      imageAlt: 'Healthcare facilities in Cyprus',
    },
    {
      text: 'Relatively low cost & high standard of living',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-2.webp`,
      imageAlt: 'Quality of life in Cyprus',
    },
    {
      text: 'English widely spoken',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-4.webp`,
      imageAlt: 'International business environment in Cyprus',
    },
    {
      text: 'Very clean air & the cleanest bathing waters in Europe!',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-10.webp`,
      imageAlt: 'Clean beaches and bathing waters in Cyprus',
    },
    {
      text: 'Efficient & transparent British based legal system',
      image: `${INVEST_PHOTOS}/invest-in-cyprus-1.webp`,
      imageAlt: 'Legal and business framework in Cyprus',
    },
    {
      text: 'Cyprus allows dual citizenship',
      image: `${INVEST_PHOTOS}/invest-cyprus-3.webp`,
      imageAlt: 'Residency and citizenship programmes in Cyprus',
    },
    {
      text: 'Euro currency',
    },
  ] as AstrealInvestHighlight[],
}
