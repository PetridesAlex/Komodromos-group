export type WeddingReview = {
  author: string
  quote: string
  stars: 5
  source: 'google' | 'facebook'
  lang?: string
  initials: string
}

function initialsFrom(name: string): string {
  const parts = name
    .replace(/[()]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
  if (parts.length === 0) return '?'
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return `${parts[0][0] ?? ''}${parts[parts.length - 1][0] ?? ''}`.toUpperCase()
}

function google(
  author: string,
  quote: string,
  lang: string = 'en',
): WeddingReview {
  return {
    author,
    quote,
    lang,
    source: 'google',
    stars: 5,
    initials: initialsFrom(author),
  }
}

function facebook(author: string, quote: string, lang: string = 'el'): WeddingReview {
  return {
    author,
    quote,
    lang,
    source: 'facebook',
    stars: 5,
    initials: initialsFrom(author),
  }
}

/**
 * Public Google Business + Facebook couple reviews (positive only).
 * Sourced from Wedding Sky Google listings and published community feedback.
 */
export const WEDDING_REVIEWS: readonly WeddingReview[] = [
  google(
    'Elina Tilemachou',
    'Got married this Saturday 06.06. We cannot thank Sky Event Planner enough for making our wedding day absolutely perfect. From the very first consultation, we knew we were in the best hands. The team’s professionalism, creativity, attention to detail, and dedication exceeded every expectation. They took care of decorations, invitations, DJ, and photography — every element was exceptional. What truly sets Wedding Sky apart is their ability to make the entire planning process stress-free and enjoyable. Highly recommend.',
  ),
  google(
    'Irene M',
    'We had the most magical wedding experience thanks to Wedding Sky Cyprus! From the very beginning, their team was incredibly attentive, professional, and dedicated to making our dream wedding come true. Their attention to detail was flawless, and they went above and beyond to ensure every aspect of our special day was perfect. I can’t recommend Wedding Sky Cyprus enough.',
  ),
  google(
    'Anna Sotiri',
    'We chose WeddingSky for the decoration of our wedding and they far exceeded our expectations! They created such a beautiful atmosphere we couldn’t even imagine, looking like a fairytale! Excellent professionals, best value for money. Highly recommended!',
  ),
  google(
    'Stavros Prodromou',
    'True professional wedding services. The team was amazing from the first call and throughout the ceremony, all at a very reasonable price. I would not recommend any other planner on the island.',
  ),
  google(
    'Abc',
    'I’ve done my wedding with Wedding Sky and the experience was beyond my expectations! It was really amazing and I thank all the team from the bottom of my heart for the unforgettable moments that will stay with me forever!!',
  ),
  google(
    '16criss95',
    'The team was perfect! Everything was as planned!! I recommend them 1000000%!!!! Our wedding was a fairytale!!!! Charalambos & Kristina 10.11.2024',
  ),
  google(
    'vasiliki charalambous',
    'Perfect — everything went perfect with our wedding. Decoration was on point and I didn’t have to do anything — I just enjoyed my wedding. Wedding Sky handled everything for us.',
  ),
  google(
    'George Neophytou',
    'Trust them for the most beautiful day of your life. Live unforgettable, feel like a king. Leave yourself in experienced hands and don’t worry!!!',
  ),
  google(
    'Komodromos Group (Sure we can)',
    'Probably the most prestigious wedding planner in Cyprus!',
  ),
  google(
    'Marios Avgousti',
    'The most professional service I’ve ever experienced.',
  ),
  google(
    'Ρεβέκκα Γεωργίου',
    'I HIGHLY RECOMMEND IT! I cannot express in words how pleased I am with your amazing work in decorating.',
    'el',
  ),
  google(
    'Viki Antreou',
    'We really don’t know where to start! From the very first meeting we understood that we were dealing with professional people — and in the end we understood that it was not just their job, they truly love what they do. We chose the package that included everything, and they guided us with patience and incredible professionalism. If we could give them 100 stars we would. Our most important day happened exactly as we dreamed of it thanks to you.',
    'el',
  ),
  google(
    'Elisavet Andreou',
    'There are no words… Everything was excellent, they made our wedding seem like a fairy tale. The staff were excellent professionals and showed us from the first moment that we can trust them! Thank you very much Wedding Sky. TOP.',
    'el',
  ),
  google(
    'Natalia Rustan',
    '31.05.2025 — There are not enough words — not enough stars — to describe our experience with Wedding Sky. From the first moment we felt trust and confidence.',
    'el',
  ),
  google(
    'Eleni Kola',
    'Wedding Sky — Komodromos Group, thank you very much for making our day wonderful. I would like to thank your entire team for our wonderful collaboration. Impeccable service and impeccable, immediate communication.',
    'el',
  ),
  google(
    'ioanna Hadjimarkou',
    'Thank you so much Wedding Sky for making our wedding day special. Everything was excellent — decoration, organisation — we are speechless with the result. You are all professionals!!!',
    'el',
  ),
  google(
    'Despina Hadjipiera',
    'We chose Wedding Sky for our wedding. Our package included a DJ, centre and church decoration, refreshments, cake, invitations, car with driver, photographer… basically it had everything!',
    'el',
  ),
  google(
    'Bella Komiati',
    '16/9/23 — We cannot describe how happy we are and how special this day was for us. You have made us very happy to be present at our wedding. The best moments.',
    'el',
  ),
  google(
    'Antonia Nicolaou',
    'Simply perfect! Our wedding decoration was fantastic! The Wedding Sky staff were absolutely professional and stood by us throughout the wedding! Thank you for making our day unforgettable!',
    'el',
  ),
  google(
    'Christiana Nicolaou',
    'We booked a package from Wedding Sky for our wedding on 15/9/24. The guidance provided was impeccable throughout. The coordinator who took over our wedding was very helpful, always proceeding based on our needs.',
    'el',
  ),
  google(
    'Xryshs Andreou',
    'Everything was perfect — we had everything we asked for and more. People who know how to work and are reliable. Professionals in all areas. Decorations simply perfect and everything very organised, no stress. We simply lived our most perfect day knowing Wedding Sky had taken care of everything!!',
    'el',
  ),
  google(
    'Eleni Stefani',
    'The least I could say is thank you. Everything perfect! Everything organised and most importantly they organise you for everything and you just live your wedding day!!! I recommend it 1000 times!!! Impeccable service from the whole team.',
    'el',
  ),
  google(
    'Elena Spyrou',
    'The first by far. Avoid the stress of running for everything and enjoy your wedding. That’s what we did. Grade 10. Simply perfect in everything — from the cakes to the wedding dress.',
    'el',
  ),
  google(
    'ELENA THEODOROU',
    'Impeccable service and impeccable result. I highly recommend it!!!',
    'el',
  ),
  google(
    'Andriani Panagiotou',
    'I would like to thank Wedding Sky — Komodromos Group because they made the most special day of our lives even more special! Wonderful people, helpful, accommodating, always there to advise us. Thank you for everything, you are the best!',
    'el',
  ),
  google(
    'Elena Papapanagiotou',
    'The best in everything. Thank you so much for everything. Everything was amazing, just as we asked for. The best decoration I could ask for and more.',
    'el',
  ),
  google(
    'Melina Charalambous',
    'Thank you for everything. It was all wonderful and professional. You made the most important day of our lives special — everything was wonderful, flawless and perfect. I would definitely trust them again. Wonderful team, I highly recommend it.',
    'el',
  ),
  google(
    'katerina tzanoudaki',
    'Clearly the best of their kind in Cyprus. Prompt, helpful — they satisfy every taste and desire of the couple! Professionals in everything!',
    'el',
  ),
  google(
    'George Eglezos',
    'I would like to thank Wedding Sky for their exceptional and professional help in organising a fairytale wedding for me. The decoration, the photographers, the DJ, and collaborators for the wedding dress and costume were all amazing. I trust them 1000%.',
    'el',
  ),
  google(
    'FSLM Marketing Ltd Phedra S. Panagiotou',
    'Excellent service!!! Human and above all quality!!! They take care of everything and you don’t have to rush for anything!! You say what you want, how you want it, and they just do it!!',
    'el',
  ),
  google(
    'Evdokia Vasiliou',
    'A big thank you to everyone at the company. Everyone was willing to serve us. The team that did our wedding was very organised. The result was EXCELLENT. EVERYTHING PERFECT.',
    'el',
  ),
  google(
    'Rafaella Theodoulou',
    'The best choice I could have made. I had the full package and everything was excellent, everyone was professional. My decoration in both the church and the event venue was fantastic, exactly what I asked for.',
    'el',
  ),
  google(
    'Maria Kwstaki',
    'Κάναμε τον γάμο του αδελφού μου με την εταιρεία Wedding Sky και είμαστε πάρα πολύ ευχαριστημένοι! Είναι αξιόπιστη εταιρεία!',
    'el',
  ),
  google(
    'Giorgos Mallouris',
    'Καλή συνεργασία, πολύ εξυπηρετικοί και καλοί άνθρωποι! Συστήνω ανεπιφύλακτα την εταιρεία! Είναι επαγγελματίες Wedding Sky!!',
    'el',
  ),
  google(
    'David V. Mariolis',
    'Good service. Nice staff.',
    'ru',
  ),
  facebook(
    'Κωνσταντίνα',
    'Δεν μπορούσα να φανταστώ τον γάμο μου καλύτερα. Είσασταν όλοι καταπληκτικοί επαγγελματίες. Όλοι μου είπαν τα καλύτερα λόγια για το νυφικό μου, τα κεραστικά και φυσικά για την υπέροχη διακόσμηση του Σέργιου. Σας προτείνω με 1000.',
  ),
  facebook(
    'John',
    'Something like more than happy from you guys! Thank you very much for everything!',
    'en',
  ),
  facebook(
    'Μαρία & Γιάννης',
    'Ευχαριστούμε πολύ για όλα!!! Δεν θα μπορούσαμε να φανταστούμε τον γάμο μας καλύτερο. Όλα ήταν τέλεια!!!',
  ),
]
