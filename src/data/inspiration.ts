export type ArticleSection = {
  title: string;
  body: string[];
};

export type InspirationArticle = {
  title: string;
  slug: string;
  category: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
  usefulFor: string[];
  routeIdeas: string[];
};

export const inspirationArticles: InspirationArticle[] = [
  {
    title: "Why Armenia and Georgia belong on a cultural traveller's map",
    slug: "armenia-georgia-cultural-traveller-map",
    category: "Culture",
    image: "/images/real/khor-virap-green-field.jpg",
    imageAlt: "Green Ararat Plain with Khor Virap Monastery and Mount Ararat",
    imagePosition: "object-[58%_center]",
    excerpt:
      "Few routes hold so much sacred architecture, layered history, mountain drama and hospitality in such a compact journey.",
    readTime: "6 min",
    intro:
      "Armenia and Georgia work beautifully as a combined journey because they are close enough to connect by road, yet different enough to feel like two chapters of one larger cultural story.",
    sections: [
      {
        title: "Two countries, two voices",
        body: [
          "Georgia often greets travellers through balconies, wine, polyphonic song, mountain roads and the generous ritual of the table. Armenia answers with stone monasteries, manuscripts, volcanic landscapes, lavash, apricot light and the long memory of one of the world's oldest Christian cultures.",
          "The point is not to flatten them into one regional label. A good journey lets each country keep its own voice, then uses the border crossing as a meaningful transition."
        ]
      },
      {
        title: "Why the route feels rich",
        body: [
          "The distances are manageable, but the cultural density is high. In one journey a traveller can stand above Tbilisi at Narikala, taste Kakheti wine, cross into northern Armenia, sleep near mountain monasteries, pass Lake Sevan, ride toward Tatev and finish among Yerevan's cafes, museums and sacred sites.",
          "That variety is why the route can work for very different group formats: a parish group, a cultural club, a family joining a shared departure, a couple, an individual traveller or friends who want culture without hurry."
        ]
      },
      {
        title: "What makes it personal",
        body: [
          "The best programmes are not built only from monuments. They include the human parts: the person who explains the bread, the winemaker who opens a cellar, the guide who knows when to slow down, the artisan who lets you see the work of hands.",
          "That is where custom planning matters. A route can lean toward faith, food, design, history, family roots or soft nature without losing its structure."
        ]
      }
    ],
    usefulFor: ["First-time visitors", "Couples", "Families", "Forming groups", "Cultural associations"],
    routeIdeas: ["Tbilisi old town", "Kakheti wine country", "Haghpat or Haghartsin", "Tatev", "Yerevan"]
  },
  {
    title: "From ancient monasteries to mountain landscapes",
    slug: "ancient-monasteries-mountain-landscapes",
    category: "Sacred Heritage",
    image: "/images/real/haghartsin-monastery.jpg",
    imageAlt: "Haghartsin Monastery surrounded by forest in Armenia",
    excerpt:
      "Armenia and Georgia offer contemplative spaces, living faith traditions and highland scenery for meaningful group travel.",
    readTime: "7 min",
    intro:
      "Sacred heritage in Armenia and Georgia is not only a list of churches. It is landscape, silence, stone, music, memory and the feeling of arriving somewhere that has held prayer for centuries.",
    sections: [
      {
        title: "Why monasteries matter here",
        body: [
          "Many sites sit in places that feel chosen: above a gorge, under a mountain, in a forest, at the edge of a lake or beside a village road. The architecture and the landscape belong together.",
          "For faith-led travellers, these visits can be devotional. For cultural travellers, they reveal architecture, inscription, manuscript tradition and the historical role of the church in daily life."
        ]
      },
      {
        title: "A route with breathing room",
        body: [
          "The sample programme links Georgian sacred sites such as Mtskheta with Armenian places such as Haghpat, Echmiadzin, Geghard, Khor Virap and Tatev. Each visit has a different mood.",
          "The experience is strongest when the day is not overloaded. A monastery needs time for the approach, the view, the guide's explanation and the quiet after the explanation ends."
        ]
      },
      {
        title: "For parishes and reflective travellers",
        body: [
          "A parish group may want a spiritual frame, a short reflection or a meeting with local religious context where possible. Individual travellers joining a forming group may care about photography time, architectural detail or simply a slower pace.",
          "Both kinds of wishes can be discussed. The difference is not the destination, but the rhythm that can realistically work for the group."
        ]
      }
    ],
    usefulFor: ["Parishes", "Pilgrimage travellers", "History lovers", "Photographers", "Senior travellers"],
    routeIdeas: ["Mtskheta", "Haghpat", "Lake Sevan", "Echmiadzin", "Geghard", "Khor Virap"]
  },
  {
    title: "Kakheti: the birthplace of wine hospitality",
    slug: "kakheti-wine-hospitality",
    category: "Wine",
    image: "/images/real/georgian-grapes.jpg",
    imageAlt: "Grapes growing in a Georgian vineyard",
    excerpt:
      "Georgia's wine culture is ancient and deeply social, making Kakheti a natural highlight for travellers who love table culture.",
    readTime: "5 min",
    intro:
      "Wine in Georgia is not only a tasting note. It is a way of hosting, blessing, remembering and bringing people into conversation.",
    sections: [
      {
        title: "More than a tasting",
        body: [
          "Kakheti is often described through vineyards and qvevri, the traditional clay vessels used in Georgian winemaking. But for travellers, the strongest memory is often the table: bread, herbs, cheese, wine, toasts and the sense that hospitality is an art.",
          "A good wine day should not feel like a rushed checklist of cellars. It should give time to understand why wine has such social and historical weight."
        ]
      },
      {
        title: "What can be arranged",
        body: [
          "Depending on season and availability, a route can include a family-style meal, vineyard visit, qvevri explanation, regional food pairing or a more polished winery experience.",
          "For a smaller compatible group, this can become intimate and slow. For a larger formed group, it can become a generous shared evening."
        ]
      },
      {
        title: "How it fits the route",
        body: [
          "Kakheti works especially well early in the journey after Tbilisi. It gives travellers an immediate human introduction to Georgia before the programme moves toward Mtskheta, Uplistsikhe and the Armenian border."
        ]
      }
    ],
    usefulFor: ["Wine lovers", "Food travellers", "Friends", "Cultural clubs", "Forming groups"],
    routeIdeas: ["Kakheti vineyards", "Qvevri cellar", "Georgian supra", "Telavi", "Sighnaghi if time allows"]
  },
  {
    title: "Yerevan, Tbilisi and everyday city culture",
    slug: "yerevan-tbilisi-living-city-culture",
    category: "Cities",
    image: "/images/real/tbilisi-aerial.jpg",
    imageAlt: "Aerial view of Tbilisi old town, river and city architecture",
    excerpt:
      "The two capitals reward slow looking: music, museums, churches, markets, cafe life and generous conversation.",
    readTime: "6 min",
    intro:
      "The capitals are not only arrival and departure points. They are where the journey becomes modern, social and alive.",
    sections: [
      {
        title: "Tbilisi: layered and theatrical",
        body: [
          "Tbilisi is a city of balconies, courtyards, hills, sulfur-bath stories, churches, bridges and sudden views. The old town rewards walking because the city reveals itself vertically: street, stair, balcony, fortress, river.",
          "For travellers, Tbilisi is often the first emotional doorway into the trip. It gives architecture, food and history without feeling like a museum."
        ]
      },
      {
        title: "Yerevan: warm, intellectual, open",
        body: [
          "Yerevan has a different rhythm: broad squares, pink stone, cafes, museums, the Cascade, manuscript culture and Mount Ararat as a constant presence in the imagination.",
          "It is also the place to add depth: Matenadaran, the Genocide Memorial, galleries, food experiences, markets and evenings that let travellers talk through what they have seen."
        ]
      },
      {
        title: "City days should not be overloaded",
        body: [
          "The temptation is to pack every museum and viewpoint into one day. A better city day leaves some open space, because the small encounters are often what make the capitals memorable."
        ]
      }
    ],
    usefulFor: ["First-time visitors", "Museum lovers", "Couples", "Individual travellers", "Urban culture travellers"],
    routeIdeas: ["Tbilisi old town", "Narikala", "Yerevan Cascade", "Matenadaran", "Local markets"]
  },
  {
    title: "Ateliers, clothing and craft encounters",
    slug: "ateliers-clothing-craft-armenia-georgia",
    category: "Ateliers",
    image: "/images/real/armenian-carpet-loom-goris.jpg",
    imageAlt: "Vertical weaving loom for Armenian carpet making in Goris",
    imagePosition: "object-[50%_52%]",
    excerpt:
      "Textiles, ceramics, jewellery, carpets, clothing and maker studios can become the most personal part of a custom route.",
    readTime: "5 min",
    intro:
      "A custom journey should leave space for taste. For some travellers, that means sacred architecture. For others, it is the texture of a textile, a handmade object, a studio visit or a piece of clothing with a story.",
    sections: [
      {
        title: "Why ateliers belong in the programme",
        body: [
          "Armenia and Georgia both have deep craft traditions and active contemporary makers. The interesting part is the connection between old material culture and present-day design.",
          "An atelier visit can make a journey feel less like sightseeing and more like entering a living culture."
        ]
      },
      {
        title: "What could be included",
        body: [
          "Depending on the route, timing and availability, experiences may include textile studios, carpet or embroidery traditions, ceramics, jewellery, clothing, leather work, small design shops, food craft or market-based sourcing.",
          "Not every workshop is available every day, so these moments should be planned early and treated as curated additions, not generic stops."
        ]
      },
      {
        title: "Who loves this most",
        body: [
          "Atelier-led travel is especially good for couples, families with older children, creative professionals, small groups of friends and travellers who want to bring home something more meaningful than a souvenir."
        ]
      }
    ],
    usefulFor: ["Design lovers", "Families", "Creative travellers", "Small circles", "Slow shoppers"],
    routeIdeas: ["Yerevan studios", "Tbilisi design shops", "Textile or carpet visits", "Ceramic workshops", "Markets"]
  },
  {
    title: "A quiet Silk Road thread through the Caucasus",
    slug: "silk-road-caucasus-caravan-routes",
    category: "Silk Road",
    image: "/images/real/tatev-green-monastery.jpg",
    imageAlt: "Tatev Monastery above a green mountain gorge in Armenia",
    imagePosition: "object-[50%_48%]",
    excerpt:
      "Caravan roads, mountain passes, wine, monasteries and trade memory can add a famous historical layer without overwhelming the journey.",
    readTime: "5 min",
    intro:
      "The Silk Road is a powerful phrase, but it works best here as a thread rather than a costume. Armenia and Georgia can show travellers how routes, faith, wine, trade and mountain geography shaped the Caucasus.",
    sections: [
      {
        title: "A thread, not the whole story",
        body: [
          "A good Caucasus journey does not need to turn every stop into a Silk Road lecture. The stronger approach is to let the idea appear naturally: a mountain pass, an old road, a caravanserai memory, a market, a wine tradition, a monastery that stood near routes of movement.",
          "This keeps the trip emotionally broad. Travellers still get sacred heritage, food, landscapes and city culture, while the Silk Road gives familiar historical orientation."
        ]
      },
      {
        title: "Where it can appear in the route",
        body: [
          "The highland road chapters in Armenia are especially good for this context. Selim Pass, the road toward Tatev, Vayots Dzor, Noravank and the movement between lake, gorge and valley can all carry a sense of old crossings.",
          "In Georgia, wine country and old urban layers help show how hospitality, trade and culture met along routes rather than staying isolated."
        ]
      },
      {
        title: "Why groups understand it quickly",
        body: [
          "The phrase Silk Road is already known, so it gives cultural groups, adult education travellers and curious families an easy mental doorway into the region.",
          "The planning should stay selective: one or two strong explanations, a few route notes and the right guide context are enough."
        ]
      }
    ],
    usefulFor: ["Cultural clubs", "Adult education groups", "History lovers", "Families", "Curious first-time visitors"],
    routeIdeas: ["Selim Pass", "Tatev road", "Vayots Dzor", "Noravank", "Kakheti wine country"]
  },
  {
    title: "Armenian festivals and big celebrations worth planning around",
    slug: "armenian-festivals-big-celebrations",
    category: "Festivals",
    image: "/images/real/yerevan-city-festival-music.jpg",
    imageAlt: "Open-air music event and city festival in Yerevan at night",
    excerpt:
      "Vardavar, Areni Wine Festival, Yerevan Wine Days, Gata, Dolma and city music can give a group journey a vivid seasonal centre.",
    readTime: "8 min",
    intro:
      "Some journeys are built around monuments. Others become unforgettable because the group arrives when Armenia is celebrating in public: water, wine, music, food, dance and city streets full of people.",
    sections: [
      {
        title: "Why festivals change the mood of a route",
        body: [
          "A festival day gives travellers something a normal sightseeing programme cannot fully reproduce: local rhythm. People dress differently, streets fill, villages host, music carries across a square and food becomes part of a shared occasion.",
          "Festival-led travel needs more care than ordinary route planning. Dates, crowd levels, road access, hotel demand and weather can change the practical shape of the day, so these ideas should be checked early with the Armenian partner."
        ]
      },
      {
        title: "Vardavar: water, joy and summer Armenia",
        body: [
          "Vardavar is one of Armenia's most joyful public celebrations, connected today with the Feast of the Transfiguration in the Armenian Apostolic Church and known widely for water games. In cities and villages, the mood can be playful, generous and wonderfully unpolished.",
          "For travellers, Vardavar can be epic if the group is ready for crowds, wet clothes and a festive atmosphere. It is not a polished performance; that is exactly why it feels alive."
        ]
      },
      {
        title: "Wine celebrations from Yerevan to Areni",
        body: [
          "Yerevan Wine Days brings wine, food, music and street life into the capital. Areni Wine Festival places the celebration closer to the vineyards and Vayots Dzor landscape, where wine heritage, village atmosphere and mountain scenery meet.",
          "A wine-focused group might build the journey around one of these events, then add Noravank, Areni cellars, Yerevan cafes, Kakheti qvevri traditions and a slower table-led evening."
        ]
      },
      {
        title: "Food, dance and village celebrations",
        body: [
          "Gata, Dolma and harvest-season events can also become strong anchors when dates fit. These are especially good for travellers who want Armenia to feel domestic and generous: pastry, grape leaves, herbs, music, family recipes and local pride.",
          "The best festival routes keep one main celebration in focus, then add lighter cultural experiences around it. A group should leave with energy, not exhaustion."
        ]
      }
    ],
    usefulFor: ["Cultural groups", "Food lovers", "Wine travellers", "Families", "Friends"],
    routeIdeas: [
      "Vardavar in summer",
      "Yerevan Wine Days",
      "Areni Wine Festival",
      "Gata or Dolma traditions",
      "Open-air music in Yerevan",
      "Harvest-season route"
    ]
  },
  {
    title: "Cognac, Armenian coffee and Yerevan cafe culture",
    slug: "cognac-coffee-cafe-culture-yerevan",
    category: "Cognac & Coffee",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of Armenian brandy barrels in a Yerevan cellar",
    excerpt:
      "Yerevan's brandy cellars, Armenian coffee, dessert tables and cafes add a sophisticated social layer to the cultural route.",
    readTime: "6 min",
    intro:
      "Yerevan is not only museums and monuments. It is also the pleasure of sitting down: a small cup of strong Armenian coffee, a pastry, an evening glass, a cellar visit, a conversation that makes the city feel close.",
    sections: [
      {
        title: "Cognac as a Yerevan story",
        body: [
          "Armenian brandy is part of Yerevan's modern cultural identity. A carefully chosen cellar or tasting visit can show oak barrels, aging traditions, label history and the connection between craft, hospitality and city pride.",
          "For a group, this works best as a refined city moment rather than a loud tasting. It can be paired with dinner, a walk through central Yerevan or a conversation about how Armenian food and drink traditions sit beside modern cafe life."
        ]
      },
      {
        title: "Armenian coffee is a rhythm, not only a drink",
        body: [
          "Armenian coffee is small, strong and social. It appears after meals, beside sweets, in homes, cafes and quiet pauses. The cup invites people to slow down and talk.",
          "A route can include coffee culture through a market stop, dessert tasting, cafe time or a hosted meal. The point is not to turn coffee into a staged workshop every time; sometimes the best version is simply leaving time for it."
        ]
      },
      {
        title: "How it fits a group itinerary",
        body: [
          "Cognac and coffee work especially well after dense heritage days. They give adults a warm evening programme and give the group a chance to absorb what they have seen.",
          "Families and senior groups may prefer gentle cafe time. Wine and food groups may want a deeper tasting. Cultural clubs may enjoy the history of the brandy houses and Yerevan's cafe conversations."
        ]
      }
    ],
    usefulFor: ["Food travellers", "Adult cultural groups", "Friends", "Couples", "City lovers"],
    routeIdeas: ["Yerevan brandy cellar", "Armenian coffee", "Dessert and gata", "Evening cafe walk", "Market-to-table day"]
  },
  {
    title: "Sacred music in ancient monasteries",
    slug: "sacred-music-ancient-monasteries",
    category: "Music",
    image: "/images/real/geghard-landscape.jpg",
    imageAlt: "Mountain landscape around Geghard Monastery in Armenia",
    excerpt:
      "A carefully arranged sacred music moment can turn a visit into a deeply human shared memory.",
    readTime: "4 min",
    intro:
      "Music changes the scale of a place. A monastery that is impressive in silence can become unforgettable when voices move through stone.",
    sections: [
      {
        title: "Why music works here",
        body: [
          "Armenia and Georgia both carry strong sacred and folk music traditions. In the right setting, music is not entertainment placed on top of culture; it is a way to feel the space.",
          "For a group, a short arranged moment can become the emotional centre of the journey."
        ]
      },
      {
        title: "How to plan it respectfully",
        body: [
          "Sacred spaces need care. Any music experience should respect religious life, site rules, availability and the atmosphere of the place.",
          "This is why professional local coordination matters: the right moment should feel natural, not intrusive."
        ]
      },
      {
        title: "Best suited for",
        body: [
          "Music-led additions work beautifully for parishes, choirs, cultural associations and travellers who are sensitive to atmosphere and sound."
        ]
      }
    ],
    usefulFor: ["Parishes", "Choirs", "Cultural associations", "Music lovers", "Reflective travellers"],
    routeIdeas: ["Geghard", "Yerevan concert options", "Tbilisi music evenings", "Church music context"]
  },
  {
    title: "Food workshops, markets and family tables",
    slug: "food-workshops-markets-family-tables",
    category: "Food",
    image: "/images/real/armenian-dolma-hands.jpg",
    imageAlt: "Hands arranging Armenian dolma in a pot",
    imagePosition: "object-[50%_72%]",
    excerpt:
      "Lavash, dolma, gata, market visits, Georgian supra, khachapuri and khinkali make the route feel human, rooted and generous.",
    readTime: "8 min",
    intro:
      "Food is often the easiest way to understand where you are. In Armenia and Georgia it brings language, memory, season, family rhythm and hospitality to the same table.",
    sections: [
      {
        title: "Armenia first: bread, herbs, dolma and gata",
        body: [
          "Armenian food carries a deep domestic memory. Lavash is not only bread on the table; it is a whole world of tonir baking, hands, rhythm, storage, blessing and hospitality. A lavash-making moment can teach more than a long lecture because travellers see how skill lives inside ordinary gestures.",
          "Dolma brings another layer: grape leaves or vegetables filled with rice, herbs and meat or vegetables, prepared patiently and often associated with family gatherings. Then comes gata, the traditional Armenian sweet pastry or cake, with regional variations and the warm feeling of tea, coffee, roadside bakeries and celebration.",
          "A good Armenia food day might include a market visit in Yerevan, herbs and seasonal produce, lavash or gata, a hosted meal, and time to understand why the table is tied to memory rather than only taste."
        ]
      },
      {
        title: "Then Georgia: supra, khachapuri, khinkali and wine",
        body: [
          "Georgia has its own table language. The supra is not simply a big dinner; it is a hosted ritual of toasts, conversation, generosity and rhythm. Wine, especially qvevri wine traditions, belongs naturally to that world.",
          "Khachapuri, khinkali, walnuts, herbs, cheeses, breads and regional dishes make Georgian food feel abundant and social. For travellers, the Georgian table often becomes the place where the group relaxes, laughs and starts to feel the journey together.",
          "The point is not to compare the two cuisines as if one should win. Armenia and Georgia each have their own food grammar. A strong route lets travellers feel the difference."
        ]
      },
      {
        title: "How food becomes travel",
        body: [
          "Food experiences can be very simple or carefully curated. One traveller joining a forming group may care most about a serious wine day in Kakheti; another family may prefer a market walk, lavash, gata and a relaxed evening meal. A parish group may want meals that leave space for conversation and reflection.",
          "The best programme does not turn food into a performance. It uses meals to make the journey warmer, more personal and more grounded in daily life."
        ]
      },
      {
        title: "Useful planning note",
        body: [
          "Dietary needs should be shared early. Vegetarian travel is usually workable, but allergies, fasting rules, child preferences and mobility needs should be included in the first planning conversation."
        ]
      }
    ],
    usefulFor: ["Families", "Food lovers", "Small circles", "Couples", "Senior travellers"],
    routeIdeas: [
      "Lavash-making",
      "Gata tasting or bakery stop",
      "Yerevan market",
      "Dolma or family-style meal",
      "Georgian supra",
      "Khachapuri and khinkali",
      "Kakheti table"
    ]
  },
  {
    title: "Mountain roads, lakes and high passes",
    slug: "mountain-roads-lakes-high-passes",
    category: "Nature",
    image: "/images/real/noravank-red-cliffs.jpg",
    imageAlt: "Noravank Monastery surrounded by red cliffs in Vayots Dzor",
    imagePosition: "object-[52%_center]",
    excerpt:
      "Mountain roads, lakes and high passes bring breadth and quiet contrast to the cultural route.",
    readTime: "5 min",
    intro:
      "The route is cultural, but the landscapes do a lot of the emotional work. Mountains, lakes and passes create the pauses between cities, monasteries and meals.",
    sections: [
      {
        title: "The road as part of the journey",
        body: [
          "Some of the strongest memories happen between stops: a changing valley, a high road, a sudden view, the first glimpse of Lake Sevan or the approach to Tatev.",
          "This is why pacing matters. A route should respect distances and avoid turning every road day into a race."
        ]
      },
      {
        title: "Lake Sevan and the Armenian highlands",
        body: [
          "Lake Sevan offers visual space after the density of monasteries and city visits. It can be a short scenic stop or a gentler overnight depending on the route.",
          "Further south, the road toward Tatev and the gorges of Syunik brings a more dramatic sense of scale."
        ]
      },
      {
        title: "Season and comfort",
        body: [
          "Mountain routes are seasonal in feeling. Spring, summer and autumn each change the colour, road experience and comfort level. Winter can be beautiful but requires more careful planning."
        ]
      }
    ],
    usefulFor: ["Nature lovers", "Photographers", "Couples", "Careful drivers", "Slow travellers"],
    routeIdeas: ["Lake Sevan", "Dilijan", "Selim Pass", "Tatev road", "Ararat viewpoints"]
  },
  {
    title: "Lake Sevan and the blue highlands",
    slug: "lake-sevan-blue-highlands",
    category: "Lake Sevan",
    image: "/images/real/sevanavank-lake.jpg",
    imageAlt: "Sevanavank Monastery above Lake Sevan in Armenia",
    imagePosition: "object-[52%_center]",
    excerpt:
      "Lake Sevan gives the journey water, sky, highland air and a gentler pause between monasteries, cities and long road chapters.",
    readTime: "5 min",
    intro:
      "Sevan is one of the places where the route breathes. After stone monasteries, city museums and mountain roads, the lake opens the horizon and changes the group's pace.",
    sections: [
      {
        title: "More than a photo stop",
        body: [
          "Lake Sevan is often visited quickly, but it deserves a more thoughtful role. The water, wind, high altitude and changing light give travellers a sense of Armenia's scale beyond Yerevan and the monastery valleys.",
          "A short visit can still be beautiful, especially with Sevanavank. But when the route allows, a slower lakeside meal or overnight can make the whole journey feel more balanced."
        ]
      },
      {
        title: "Sevanavank, food and open air",
        body: [
          "Sevanavank gives the lake a cultural frame: stone, stairs, horizon and the feeling of a monastery looking across water. It pairs naturally with a lakeside lunch, a quiet view stop or a gentle conversation about Armenian highland life.",
          "For food-focused travellers, Sevan can also become a table moment. For photographers, it offers sky and water. For senior groups, it can provide a softer day between denser visits."
        ]
      },
      {
        title: "How to pace it",
        body: [
          "Sevan works well between northern Armenia, Dilijan and the route south toward Tatev or Yerevan. The exact timing depends on hotels, weather, season and how much driving the group can comfortably enjoy.",
          "A good programme uses the lake as a pause, not a box to tick."
        ]
      }
    ],
    usefulFor: ["Nature lovers", "Senior travellers", "Families", "Photographers", "Slow travellers"],
    routeIdeas: ["Sevanavank", "Lakeside lunch", "Dilijan connection", "Blue viewpoints", "Gentler pacing day"]
  }
];
