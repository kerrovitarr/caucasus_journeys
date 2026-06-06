export type ImageCredit = {
  id: string;
  file: string;
  title: string;
  photographer: string;
  platform: "Pexels" | "Unsplash" | "Wikimedia Commons";
  sourceUrl: string;
  licenseUrl: string;
};

export const imageCredits: ImageCredit[] = [
  {
    id: "tatev-monastery",
    file: "/images/real/tatev-monastery.jpg",
    title: "Tatev Monastery and mountains",
    photographer: "Narek Hakobyan",
    platform: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/a-castle-perched-on-top-of-a-mountain-surrounded-by-mountains-gn60g7MOsEk",
    licenseUrl: "https://unsplash.com/license"
  },
  {
    id: "tbilisi-aerial",
    file: "/images/real/tbilisi-aerial.jpg",
    title: "Aerial view of Tbilisi old town architecture",
    photographer: "Serdar Balpetek",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/aerial-view-of-tbilisi-old-town-architecture-30184968/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "haghartsin-monastery",
    file: "/images/real/haghartsin-monastery.jpg",
    title: "Haghartsin Monastery in Armenian forest",
    photographer: "Valeria Drozdova",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/haghartsin-monastery-amidst-lush-armenian-forest-30251198/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "echmiadzin-ararat",
    file: "/images/real/echmiadzin-ararat.jpg",
    title: "Echmiadzin with Ararat view",
    photographer: "Aram",
    platform: "Unsplash",
    sourceUrl:
      "https://unsplash.com/photos/ancient-stone-monastery-with-snow-capped-mountain-background-KLB4RtcyDVQ",
    licenseUrl: "https://unsplash.com/license"
  },
  {
    id: "geghard-landscape",
    file: "/images/real/geghard-landscape.jpg",
    title: "Geghard Monastery landscape",
    photographer: "Robert Levonyan",
    platform: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/green-mountain-under-white-sky-during-daytime-BrgOOkW0Lbs",
    licenseUrl: "https://unsplash.com/license"
  },
  {
    id: "lavash-making",
    file: "/images/real/lavash-making.jpg",
    title: "Traditional Armenian bread making",
    photographer: "azra melek",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/traditional-bread-making-in-armenian-kitchen-36305192/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "georgian-food-wine",
    file: "/images/real/georgian-food-wine.jpg",
    title: "Georgian food and red wine",
    photographer: "Nadin Sh",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/traditional-georgian-food-and-a-glass-of-red-wine-15573644/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "georgian-grapes",
    file: "/images/real/georgian-grapes.jpg",
    title: "Grapes in a Georgian vineyard",
    photographer: "Mariam Sharia",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/vibrant-grapes-on-vine-in-georgian-vineyard-33807149/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "qvevri-wine-pot",
    file: "/images/real/qvevri-wine-pot.jpg",
    title: "Traditional Georgian clay wine vessel",
    photographer: "Anna Romanova",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/large-wine-clay-pot-on-the-ground-outdoors-16112972/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "khor-virap-green-field",
    file: "/images/real/khor-virap-green-field.jpg",
    title: "Mount Ararat and Khor Virap across green fields",
    photographer: "Vyacheslav Argenberg",
    platform: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Mount_Ararat_and_Khor_Virap,_Field,_Ararat_Plain,_Armenia.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    id: "khor-virap-aerial-ararat",
    file: "/images/real/khor-virap-aerial-ararat.jpg",
    title: "Aerial view of Khor Virap and Mount Ararat",
    photographer: "Dusan Stupar",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/aerial-view-of-khor-virap-monastery-with-mount-ararat-34146317/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "armenian-pottery-market",
    file: "/images/real/armenian-pottery-market.jpg",
    title: "Colorful Armenian pottery display",
    photographer: "Joao Bomfim Junior",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/colorful-armenian-pottery-display-at-market-33931725/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "armenian-dolma-hands",
    file: "/images/real/armenian-dolma-hands.jpg",
    title: "Hands arranging Armenian dolma",
    photographer: "Nellie Adamyan",
    platform: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/hands-arranging-stuffed-grape-leaves-in-a-pot-J7pCrGWuXgg",
    licenseUrl: "https://unsplash.com/license"
  },
  {
    id: "armenian-gata",
    file: "/images/real/armenian-gata.jpg",
    title: "Traditional Armenian gata pastry",
    photographer: "Combrian",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gata_(p%C3%A2tisserie).jpg",
    licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    id: "georgian-khachapuri-table",
    file: "/images/real/georgian-khachapuri-table.jpg",
    title: "Georgian khachapuri on a table",
    photographer: "Anthony Rahayel",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/delicious-georgian-khachapuri-on-rustic-table-32592741/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "georgian-khinkali-wine",
    file: "/images/real/georgian-khinkali-wine.jpg",
    title: "Georgian khinkali and wine",
    photographer: "Nadin Sh",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/a-plate-with-georgian-khinkali-19259176/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "sevanavank-lake",
    file: "/images/real/sevanavank-lake.jpg",
    title: "Sevanavank Monastery and Lake Sevan",
    photographer: "Natalya Markina",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/stone-walls-of-a-building-at-the-sevanavank-9739336/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "noravank-red-cliffs",
    file: "/images/real/noravank-red-cliffs.jpg",
    title: "Noravank Monastery among red cliffs",
    photographer: "Merlly Calisto",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/an-old-monastery-17958101/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "yerevan-cascade-dusk",
    file: "/images/real/yerevan-cascade-dusk.jpg",
    title: "Yerevan Cascade at dusk",
    photographer: "Gabriele Niek",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/armenia-s-cascades-in-yerevan-at-dusk-34235029/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "lake-sevan-sailboat",
    file: "/images/real/lake-sevan-sailboat.jpg",
    title: "Sailboat on Lake Sevan at sunset",
    photographer: "IsaaK Alexandre KaRslian",
    platform: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/sailboat-on-lake-sevan-at-sunset-with-scenic-mountains-29207809/",
    licenseUrl: "https://www.pexels.com/license/"
  },
  {
    id: "yerevan-brandy-barrels",
    file: "/images/real/yerevan-brandy-barrels.jpg",
    title: "Brandy barrels in Yerevan",
    photographer: "Vyacheslav Argenberg",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yerevan,_Brandy_barrels,_Armenia.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    id: "armenian-coffee",
    file: "/images/real/armenian-coffee.jpg",
    title: "Armenian coffee",
    photographer: "Pandukht",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Armenian_Coffee_01.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    id: "vardavar-water-festival",
    file: "/images/real/vardavar-water-festival.jpg",
    title: "Vardavar water festival",
    photographer: "Kamalyan001 at English Wikipedia",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Vardavar_Vartavar.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    id: "armenian-carpet-loom-goris",
    file: "/images/real/armenian-carpet-loom-goris.jpg",
    title: "Vertical weaving loom for carpet making in Goris",
    photographer: "Ararat Trvants",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:A_vertical_weaving_loom_for_carpet_making_in_Goris.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/"
  },
  {
    id: "yerevan-city-festival-music",
    file: "/images/real/yerevan-city-festival-music.jpg",
    title: "Yerevan city festival and open-air music event",
    photographer: "Vyacheslav Argenberg",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yerevan,_City_festival,_Music_event,_Armenia.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    id: "yerevan-cascade-art",
    file: "/images/real/yerevan-cascade-art.jpg",
    title: "Art at the Cascade of Yerevan",
    photographer: "Vyacheslav Argenberg",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Yerevan,_Cascade_of_Yerevan,_Art_2,_Armenia.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    id: "areni-wine-festival",
    file: "/images/real/areni-wine-festival.jpg",
    title: "Areni Wine Festival",
    photographer: "Ավետիսյան91",
    platform: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Areni_Wine_Festival_2.jpg",
    licenseUrl: "https://creativecommons.org/licenses/by/4.0/"
  }
];
