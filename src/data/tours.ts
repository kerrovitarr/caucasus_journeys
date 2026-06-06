export type TourCategory = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  description: string;
  idealAudience: string;
  sampleHighlights: string[];
  cta: string;
};

export type ItineraryDay = {
  day: number;
  title: string;
  summary: string;
};

export const tourCategories: TourCategory[] = [
  {
    title: "Sacred & Pilgrimage Tours",
    slug: "sacred-pilgrimage",
    image: "/images/real/echmiadzin-ararat.jpg",
    imageAlt: "Ancient Armenian monastery with a snow-capped mountain in the background",
    description:
      "Early Christian heritage, monasteries, sacred music, Echmiadzin, Geghard, Haghpat, Khor Virap and spiritual landscapes.",
    idealAudience: "Parishes, church communities, faith-led groups and individual travellers who want to join a forming group.",
    sampleHighlights: ["Echmiadzin and Geghard", "Haghpat and Khor Virap", "Sacred music moments", "Group-based pacing"],
    cta: "Discuss a Sacred Route"
  },
  {
    title: "Culture, Wine & History Tours",
    slug: "culture-wine-history",
    image: "/images/real/qvevri-wine-pot.jpg",
    imageAlt: "Traditional Georgian clay wine vessel in a countryside courtyard",
    description:
      "Tbilisi, Yerevan, Kakheti wine country, UNESCO sites, museums, ancient kingdoms, Silk Road layers and local gastronomy.",
    idealAudience: "Cultural clubs, wine lovers, adult education groups and smaller parties who may join a shared departure.",
    sampleHighlights: ["Kakheti wine hospitality", "Museums and UNESCO sites", "Tbilisi and Yerevan", "Silk Road memory"],
    cta: "Explore Cultural Routes"
  },
  {
    title: "Festivals & Celebration Routes",
    slug: "festivals-celebrations",
    image: "/images/real/vardavar-water-festival.jpg",
    imageAlt: "People celebrating Vardavar water festival in Armenia",
    description:
      "Seasonal routes around Vardavar, Areni Wine Festival, Yerevan Wine Days, harvest tables, music, dance, Gata and Dolma traditions.",
    idealAudience: "Groups that want a journey with public energy, folk traditions, food, wine and a vivid reason to choose specific dates.",
    sampleHighlights: ["Vardavar water celebration", "Areni or Yerevan wine events", "Gata and dolma traditions", "Music and dance"],
    cta: "Plan a Festival Route"
  },
  {
    title: "Food, Cognac & Coffee Culture",
    slug: "food-cognac-coffee",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of Armenian brandy barrels in a Yerevan cellar",
    description:
      "Armenian coffee, Yerevan cafe life, brandy cellars, lavash, gata, markets, Georgian tables and generous hosted meals.",
    idealAudience: "Food lovers, culinary clubs, friends, families and cultural groups who want the table to carry the story.",
    sampleHighlights: ["Armenian coffee culture", "Yerevan brandy heritage", "Lavash and gata", "Market and hosted table moments"],
    cta: "Taste the Route"
  },
  {
    title: "Lake Sevan & Highland Nature",
    slug: "sevan-highland-nature",
    image: "/images/real/lake-sevan-sailboat.jpg",
    imageAlt: "Sailboat on Lake Sevan at sunset with mountain silhouettes",
    description:
      "A softer scenic route through Lake Sevan, Dilijan, red cliffs, high roads, monastery viewpoints and unhurried mountain air.",
    idealAudience: "Groups, couples and families who want culture with more visual breathing room and gentle nature pauses.",
    sampleHighlights: ["Lake Sevan and Sevanavank", "Dilijan forests", "Noravank red cliffs", "Tatev and highland roads"],
    cta: "Shape a Scenic Route"
  },
  {
    title: "Signature Armenia & Georgia Journeys",
    slug: "signature-armenia-georgia",
    image: "/images/real/yerevan-cascade-dusk.jpg",
    imageAlt: "Yerevan Cascade and city life at dusk",
    description:
      "A balanced journey combining Georgia and Armenia through nature, history, food, music, people, landscapes and cultural immersion.",
    idealAudience: "Formed communities, diaspora circles, culture-focused groups and individual travellers joining a forming group.",
    sampleHighlights: ["Mountains and old towns", "Food, wine and music", "Ateliers and workshops", "Adaptable group pacing"],
    cta: "Shape a Signature Route"
  }
];

export const featuredTour = {
  title: "12-Day Georgia & Armenia Cultural Journey",
  slug: "georgia-armenia-12-days",
  image: "/images/real/khor-virap-green-field.jpg",
  imageAlt: "Green Ararat Plain with Khor Virap Monastery and Mount Ararat",
  route:
    "Flight gateway -> Tbilisi -> Kakheti -> Mtskheta -> Haghpat -> Dilijan -> Lake Sevan -> Tatev -> Noravank -> Khor Virap -> Yerevan -> Echmiadzin -> Garni -> Geghard -> Return flight",
  routeStops: [
    "Flight gateway",
    "Tbilisi",
    "Kakheti",
    "Mtskheta",
    "Haghpat",
    "Dilijan",
    "Lake Sevan",
    "Tatev",
    "Noravank",
    "Khor Virap",
    "Yerevan",
    "Echmiadzin",
    "Garni",
    "Geghard",
    "Return flight"
  ],
  overview:
    "A carefully paced sample route from Georgia into Armenia, shaped around sacred heritage, city culture, wine traditions, mountain landscapes, Silk Road traces and warm hospitality. International flights are checked separately by date, but the journey itself begins on arrival in Tbilisi.",
  advisoryNote:
    "Birkin Travel Advisory is the first contact for route questions and planning wishes. Ruzanna's Armenian partner agency prepares the final programme, booking documents and payment instructions.",
  priceRange: "Approx. CHF 1,800-2,000 per person",
  priceDetail:
    "This is a working average for the land programme when group economics work, excluding international flights, personal insurance and optional upgrades. It is not a binding offer; the final quote depends on group size, dates, hotel level, guide language, availability and selected experiences.",
  whoFor: [
    "Connected groups such as parishes, clubs, associations, choirs, senior groups, diaspora communities or closed communities travelling together",
    "Individual travellers, couples, families or friends who want to register interest and join a forming group if dates, language and route preferences match",
    "Cultural organisers who want to present a meaningful Armenia and Georgia programme to their own community"
  ],
  offerFormats: [
    {
      title: "A whole connected group",
      body: "A parish, club, association, company circle, choir, senior group or closed community can request the route as one group. The proposal is shaped around your dates, language, pace and interests."
    },
    {
      title: "A place in a forming group",
      body: "One person, a couple, a family or a few friends can register interest. When enough compatible travellers are interested, the Armenian partner can propose shared dates and group conditions."
    },
    {
      title: "Clear partner confirmation",
      body: "Once wishes, dates and group logic are clear, travellers are introduced to the Armenian partner agency for the final programme, booking steps, payment instructions and travel documents."
    }
  ],
  routeChapters: [
    {
      title: "Arrival and Tbilisi",
      stops: ["Flight gateway", "Tbilisi"],
      body: "Flights are checked separately by date and departure point. The journey itself begins in Tbilisi with old town architecture, churches, balconies and a first Georgian welcome."
    },
    {
      title: "Wine country and Georgian heritage",
      stops: ["Kakheti", "Mtskheta", "Uplistsikhe"],
      body: "The Georgian chapter introduces qvevri wine, table culture, sacred heritage and ancient cave-town history before the route turns toward Armenia."
    },
    {
      title: "Northern Armenia to the highlands",
      stops: ["Haghpat", "Dilijan", "Lake Sevan", "Tatev"],
      body: "After the border crossing, the mood changes into monastery landscapes, forests, Lake Sevan, old caravan-route echoes and the dramatic Tatev region."
    },
    {
      title: "Ararat, Yerevan and sacred close",
      stops: ["Khor Virap", "Yerevan", "Echmiadzin", "Garni", "Geghard"],
      body: "The final chapter brings the Ararat plain, Armenian cultural memory, early Christian heritage, lavash, music and time in Yerevan."
    }
  ],
  experiencePillars: [
    {
      title: "Sacred Heritage",
      body: "Echmiadzin, Geghard, Haghpat, Mtskheta, Khor Virap and Tatev give the route its contemplative centre, with space for history, prayer, architecture and silence."
    },
    {
      title: "Food and Wine",
      body: "Kakheti wine, Georgian supra, lavash, gata, markets and possible workshop moments bring the route close to daily life."
    },
    {
      title: "Mountain Landscapes",
      body: "Lake Sevan, Dilijan, the Debed Canyon, Tatev roads, Noravank cliffs and Ararat views give the journey air, distance and visual drama."
    },
    {
      title: "Cities and Memory",
      body: "Tbilisi and Yerevan balance old-town texture, museums, manuscripts, memorials, cafes and guided historical context."
    },
    {
      title: "Silk Road Thread",
      body: "Without turning the journey into a lecture, the route can point to caravan roads, mountain passes, trade memory and the cultures that met across the Caucasus."
    },
    {
      title: "Festivals and Celebrations",
      body: "When dates allow, the route can lean into Vardavar, Areni Wine Festival, Yerevan Wine Days, Gata, Dolma, open-air concerts or harvest-season village energy."
    },
    {
      title: "Cognac and Coffee Culture",
      body: "Yerevan's brandy cellars, Armenian coffee, cafe conversations and evening walks make the city days feel social, warm and grown-up."
    },
    {
      title: "Ateliers and Handmade Armenia",
      body: "Pottery, carpets, textiles, embroidery, clothing, design shops and maker studios can add intimate, tactile moments where availability allows."
    },
    {
      title: "Lake Sevan and Rest",
      body: "Sevanavank, lakeside air and blue horizons create a beautiful pause between monasteries, cities and long road chapters."
    }
  ],
  highlights: [
    "Tbilisi old town and Narikala Fortress",
    "Kakheti wine region and Georgian supra",
    "UNESCO monasteries in Armenia and Georgia",
    "Lake Sevan and Tatev cable car",
    "Yerevan, Matenadaran and Armenian Genocide Memorial",
    "Garni Temple and Geghard cave monastery",
    "Lavash-making experience, gata tasting and sacred music concert"
  ],
  inclusions: [
    "4-star hotels",
    "Guided sightseeing",
    "Modern comfortable coach",
    "UNESCO sites",
    "Wine tasting",
    "Georgian supra",
    "Tatev cable car",
    "Geghard sacred music concert",
    "Lavash-making masterclass",
    "Gata or Armenian bakery stop where timing allows",
    "Local gastronomy",
    "German, French, Armenian, English or Russian-speaking guides depending on traveller needs"
  ],
  pricingNote:
    "As an orientation, the 12-day land programme is currently often around CHF 1,800-2,000 per person when group economics work. Final price depends on traveller count, travel dates, flight conditions, hotel level, guide language and selected experiences.",
  cooperationNote:
    "Birkin Travel Advisory is the personal first contact and introduces travellers to Ruzanna's Armenian partner agency for final booking, payment steps and travel documents unless a different written arrangement is made.",
  customisation:
    "The route is a skeleton, not a cage, but changes must work for the whole travelling group. Atelier visits, food workshops, music, sacred heritage, Silk Road context, markets, clothing, textiles, wine, family history and slower rest moments can be added where the route, season, budget and group logistics allow.",
  itinerary: [
    {
      day: 1,
      title: "Departure - Tbilisi",
      summary:
        "Departure from a suitable airport, with routing checked against current schedules, and arrival in Georgia with a warm welcome and transfer to the hotel."
    },
    {
      day: 2,
      title: "Tbilisi",
      summary: "Guided discovery of the old town, churches, balconies, Narikala Fortress and the cultural layers of the capital."
    },
    {
      day: 3,
      title: "Tbilisi - Alaverdi - Gremi - Telavi",
      summary: "Into Kakheti wine country for historic monasteries, vineyard landscapes and Georgian hospitality."
    },
    {
      day: 4,
      title: "Mtskheta - Gori - Uplistsikhe - Tbilisi",
      summary: "UNESCO-listed Mtskheta, the cave town of Uplistsikhe and key chapters of Georgian history."
    },
    {
      day: 5,
      title: "Tbilisi - Haghpat",
      summary: "Cross into Armenia and reach the atmospheric monastery landscapes of the Debed Canyon."
    },
    {
      day: 6,
      title: "Haghpat - Dilijan - Lake Sevan",
      summary: "Visit sacred heritage in northern Armenia, continue through forested Dilijan and arrive near Lake Sevan."
    },
    {
      day: 7,
      title: "Selim - Tatev - Sisian",
      summary: "Mountain passes, Silk Road traces and the dramatic Wings of Tatev cable car."
    },
    {
      day: 8,
      title: "Sisian - Noravank - Khor Virap - Yerevan",
      summary: "Red cliffs, monastery heritage and the iconic view toward Ararat before reaching Yerevan."
    },
    {
      day: 9,
      title: "Yerevan",
      summary: "Explore the Armenian capital, including Matenadaran, cultural landmarks and the Genocide Memorial."
    },
    {
      day: 10,
      title: "Yerevan - Echmiadzin - Yerevan",
      summary: "A day focused on Echmiadzin and early Christian heritage, adapted to the group's interests."
    },
    {
      day: 11,
      title: "Yerevan - Geghard - Garni - Yerevan",
      summary: "Garni Temple, Geghard cave monastery, sacred music and a lavash-making experience."
    },
    {
      day: 12,
      title: "Yerevan - Return Flight",
      summary:
        "Departure from Armenia. Final flight routing is checked against the exact travel dates and available direct or connecting services."
    }
  ]
};
