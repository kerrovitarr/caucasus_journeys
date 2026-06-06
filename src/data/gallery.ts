export const galleryCategories = [
  "Monasteries",
  "Mountains",
  "Cities",
  "Food & Wine",
  "People & Traditions",
  "Festivals",
  "Ateliers & Craft"
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  title: string;
  category: GalleryCategory;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  aspect: "tall" | "wide" | "square";
  storyHref?: string;
  storyLabel?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Khor Virap Green Plain",
    category: "Monasteries",
    image: "/images/real/khor-virap-green-field.jpg",
    imageAlt: "Green Ararat Plain with Khor Virap Monastery and Mount Ararat",
    aspect: "wide",
    storyHref: "/inspiration/ancient-monasteries-mountain-landscapes",
    storyLabel: "Sacred routes"
  },
  {
    title: "Khor Virap And Ararat",
    category: "Monasteries",
    image: "/images/real/khor-virap-aerial-ararat.jpg",
    imageAlt: "Aerial view of Khor Virap Monastery with Mount Ararat",
    aspect: "tall",
    storyHref: "/inspiration/ancient-monasteries-mountain-landscapes",
    storyLabel: "Sacred routes"
  },
  {
    title: "Tatev Above The Gorge",
    category: "Monasteries",
    image: "/images/real/tatev-monastery.jpg",
    imageAlt: "Tatev Monastery on a mountain ridge in southern Armenia",
    aspect: "wide",
    storyHref: "/inspiration/mountain-roads-lakes-high-passes",
    storyLabel: "Mountain roads"
  },
  {
    title: "Geghard Mountain Landscape",
    category: "Mountains",
    image: "/images/real/geghard-landscape.jpg",
    imageAlt: "Green mountain landscape near Geghard Monastery in Armenia",
    aspect: "wide",
    storyHref: "/inspiration/sacred-music-ancient-monasteries",
    storyLabel: "Sacred music"
  },
  {
    title: "Sevanavank Above The Lake",
    category: "Mountains",
    image: "/images/real/sevanavank-lake.jpg",
    imageAlt: "Sevanavank Monastery with Lake Sevan behind the stone walls",
    imagePosition: "object-[52%_center]",
    aspect: "tall",
    storyHref: "/inspiration/lake-sevan-blue-highlands",
    storyLabel: "Lake Sevan"
  },
  {
    title: "Lake Sevan Sailboat",
    category: "Mountains",
    image: "/images/real/lake-sevan-sailboat.jpg",
    imageAlt: "Sailboat on Lake Sevan at sunset with mountain silhouettes",
    imagePosition: "object-[52%_center]",
    aspect: "tall",
    storyHref: "/inspiration/lake-sevan-blue-highlands",
    storyLabel: "Lake Sevan"
  },
  {
    title: "Noravank Red Cliffs",
    category: "Monasteries",
    image: "/images/real/noravank-red-cliffs.jpg",
    imageAlt: "Noravank Monastery surrounded by red cliffs in Vayots Dzor",
    imagePosition: "object-[52%_center]",
    aspect: "tall",
    storyHref: "/inspiration/mountain-roads-lakes-high-passes",
    storyLabel: "Mountain roads"
  },
  {
    title: "Qvevri Wine Vessel",
    category: "Food & Wine",
    image: "/images/real/qvevri-wine-pot.jpg",
    imageAlt: "Traditional Georgian clay qvevri wine vessel in an outdoor courtyard",
    aspect: "wide",
    storyHref: "/inspiration/kakheti-wine-hospitality",
    storyLabel: "Wine hospitality"
  },
  {
    title: "Armenian Dolma Hands",
    category: "Food & Wine",
    image: "/images/real/armenian-dolma-hands.jpg",
    imageAlt: "Hands arranging Armenian dolma in a pot",
    aspect: "tall",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Armenian Gata",
    category: "Food & Wine",
    image: "/images/real/armenian-gata.jpg",
    imageAlt: "A slice of traditional Armenian gata pastry",
    aspect: "wide",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Armenian Coffee",
    category: "Food & Wine",
    image: "/images/real/armenian-coffee.jpg",
    imageAlt: "Small cup of Armenian coffee on a table",
    imagePosition: "object-[50%_62%]",
    aspect: "tall",
    storyHref: "/inspiration/cognac-coffee-cafe-culture-yerevan",
    storyLabel: "Coffee culture"
  },
  {
    title: "Yerevan Brandy Cellar",
    category: "Food & Wine",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of brandy barrels in a Yerevan cellar",
    aspect: "wide",
    storyHref: "/inspiration/cognac-coffee-cafe-culture-yerevan",
    storyLabel: "Cognac culture"
  },
  {
    title: "Armenian Pottery Market",
    category: "Ateliers & Craft",
    image: "/images/real/armenian-pottery-market.jpg",
    imageAlt: "Colorful Armenian pottery displayed at a market",
    aspect: "wide",
    storyHref: "/inspiration/ateliers-clothing-craft-armenia-georgia",
    storyLabel: "Ateliers"
  },
  {
    title: "Carpet Loom In Goris",
    category: "Ateliers & Craft",
    image: "/images/real/armenian-carpet-loom-goris.jpg",
    imageAlt: "Vertical weaving loom for Armenian carpet making in Goris",
    imagePosition: "object-[50%_52%]",
    aspect: "tall",
    storyHref: "/inspiration/ateliers-clothing-craft-armenia-georgia",
    storyLabel: "Ateliers"
  },
  {
    title: "Lavash Hands",
    category: "People & Traditions",
    image: "/images/real/lavash-making.jpg",
    imageAlt: "Hands preparing traditional Armenian bread in a kitchen",
    aspect: "tall",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Echmiadzin and Ararat",
    category: "Monasteries",
    image: "/images/real/echmiadzin-ararat.jpg",
    imageAlt: "Ancient Armenian monastery with snow-capped mountain backdrop",
    aspect: "wide",
    storyHref: "/inspiration/ancient-monasteries-mountain-landscapes",
    storyLabel: "Sacred routes"
  },
  {
    title: "Tbilisi River And Rooftops",
    category: "Cities",
    image: "/images/real/tbilisi-aerial.jpg",
    imageAlt: "Aerial view of Tbilisi old town architecture and river valley",
    aspect: "tall",
    storyHref: "/inspiration/yerevan-tbilisi-living-city-culture",
    storyLabel: "City culture"
  },
  {
    title: "Yerevan Cascade At Dusk",
    category: "Cities",
    image: "/images/real/yerevan-cascade-dusk.jpg",
    imageAlt: "Yerevan Cascade with city life at dusk",
    aspect: "wide",
    storyHref: "/inspiration/yerevan-tbilisi-living-city-culture",
    storyLabel: "City culture"
  },
  {
    title: "Cascade Art And Stone",
    category: "Cities",
    image: "/images/real/yerevan-cascade-art.jpg",
    imageAlt: "Sculptural art and stonework at the Cascade of Yerevan",
    aspect: "wide",
    storyHref: "/inspiration/yerevan-tbilisi-living-city-culture",
    storyLabel: "Yerevan"
  },
  {
    title: "Haghartsin Forest Monastery",
    category: "Monasteries",
    image: "/images/real/haghartsin-monastery.jpg",
    imageAlt: "Haghartsin Monastery surrounded by Armenian forest",
    aspect: "tall",
    storyHref: "/inspiration/ancient-monasteries-mountain-landscapes",
    storyLabel: "Sacred routes"
  },
  {
    title: "Georgian Table",
    category: "Food & Wine",
    image: "/images/real/georgian-food-wine.jpg",
    imageAlt: "Traditional Georgian food served with a glass of red wine",
    aspect: "tall",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Khachapuri Table",
    category: "Food & Wine",
    image: "/images/real/georgian-khachapuri-table.jpg",
    imageAlt: "Georgian khachapuri served on a table",
    aspect: "wide",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Khinkali And Wine",
    category: "Food & Wine",
    image: "/images/real/georgian-khinkali-wine.jpg",
    imageAlt: "Georgian khinkali dumplings served with red wine",
    aspect: "tall",
    storyHref: "/inspiration/food-workshops-markets-family-tables",
    storyLabel: "Food traditions"
  },
  {
    title: "Georgian Vineyard",
    category: "Food & Wine",
    image: "/images/real/georgian-grapes.jpg",
    imageAlt: "Grapes growing in a Georgian vineyard",
    aspect: "tall",
    storyHref: "/inspiration/kakheti-wine-hospitality",
    storyLabel: "Wine hospitality"
  },
  {
    title: "Areni Wine Festival",
    category: "Festivals",
    image: "/images/real/areni-wine-festival.jpg",
    imageAlt: "Visitors at the Areni Wine Festival in Armenia",
    aspect: "wide",
    storyHref: "/inspiration/armenian-festivals-big-celebrations",
    storyLabel: "Festival routes"
  },
  {
    title: "Vardavar Water Festival",
    category: "Festivals",
    image: "/images/real/vardavar-water-festival.jpg",
    imageAlt: "People celebrating Vardavar water festival in Armenia",
    aspect: "wide",
    storyHref: "/inspiration/armenian-festivals-big-celebrations",
    storyLabel: "Festival routes"
  },
  {
    title: "Yerevan Festival Night",
    category: "Festivals",
    image: "/images/real/yerevan-city-festival-music.jpg",
    imageAlt: "Open-air music event and city festival in Yerevan at night",
    aspect: "wide",
    storyHref: "/inspiration/armenian-festivals-big-celebrations",
    storyLabel: "Festival routes"
  }
];
