export type TravelStyle = {
  title: string;
  audience: string;
  description: string;
  details: string[];
};

export const travelStyles: TravelStyle[] = [
  {
    title: "Register Interest",
    audience: "One traveller",
    description:
      "One person can request the route without already having a group. The next step is to see whether a compatible shared departure can be formed.",
    details: ["Interest list", "Compatible dates", "Shared group conditions"]
  },
  {
    title: "Join With Others",
    audience: "Couple or family",
    description:
      "A couple or family can ask for the journey and potentially join other travellers when timing, language, comfort level and route wishes fit.",
    details: ["Family needs noted", "Shared departure match", "Clear expectations"]
  },
  {
    title: "Small Circle Request",
    audience: "Friends or relatives",
    description:
      "Friends, relatives or diaspora families can start a request together, then either grow into a full group or join a larger compatible departure.",
    details: ["Shared interests", "Possible group merge", "Route balance"]
  },
  {
    title: "Formed Communities",
    audience: "Parishes, clubs and associations",
    description:
      "A parish, club, association, choir, senior group or closed community can request a complete group-ready programme for its own members.",
    details: ["Group proposal", "Guide language options", "Presentation-ready route"]
  }
];

export const customisationThemes = [
  "Sacred heritage and pilgrimage",
  "Festivals and big celebrations",
  "Wine, food and hospitality",
  "Cognac, coffee and cafe culture",
  "Textile, clothing and craft ateliers",
  "Silk Road passes and caravan memory",
  "Museums, manuscripts and history",
  "Music, concerts and local celebrations",
  "Markets, cooking and family tables",
  "Lake Sevan, soft nature and mountain roads",
  "Diaspora roots and personal family history"
];

export type CustomJourneyIdea = {
  title: string;
  label: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  description: string;
  href: string;
  examples: string[];
};

export const customJourneyIdeas: CustomJourneyIdea[] = [
  {
    title: "Festivals and Big Celebrations",
    label: "Seasonal Armenia",
    image: "/images/real/vardavar-water-festival.jpg",
    imageAlt: "People celebrating Vardavar water festival in Armenia",
    imagePosition: "object-[50%_48%]",
    description:
      "Build the route around public joy: Vardavar, Areni Wine Festival, Yerevan Wine Days, harvest music, Gata, Dolma and open-air city evenings.",
    href: "/inspiration/armenian-festivals-big-celebrations",
    examples: ["Vardavar", "Areni Wine Festival", "Yerevan Wine Days", "Gata or Dolma traditions"]
  },
  {
    title: "Food, Gata and Family Tables",
    label: "Food traditions",
    image: "/images/real/armenian-dolma-hands.jpg",
    imageAlt: "Hands arranging Armenian dolma in a pot",
    imagePosition: "object-[50%_72%]",
    description:
      "Build the journey around lavash, dolma, gata, markets, home-style meals, Georgian supra, khachapuri, khinkali and wine hospitality.",
    href: "/inspiration/food-workshops-markets-family-tables",
    examples: ["Lavash or gata stop", "Yerevan market", "Georgian supra", "Khachapuri and khinkali"]
  },
  {
    title: "Cognac, Coffee and Cafe Culture",
    label: "Yerevan table culture",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of Armenian brandy barrels in a Yerevan cellar",
    description:
      "Add Yerevan's grown-up rituals: brandy heritage, Armenian coffee, cafe conversations, dessert, evening walks and time to sit with the city.",
    href: "/inspiration/cognac-coffee-cafe-culture-yerevan",
    examples: ["Brandy cellar visit", "Armenian coffee", "Yerevan cafes", "Evening city walk"]
  },
  {
    title: "Ateliers, Carpets and Textiles",
    label: "Craft and design",
    image: "/images/real/armenian-carpet-loom-goris.jpg",
    imageAlt: "Vertical weaving loom for Armenian carpet making in Goris",
    imagePosition: "object-[50%_52%]",
    description:
      "Add maker-led moments: Armenian carpets, pottery, embroidery, clothing, design shops, ceramics or small workshops where availability allows.",
    href: "/inspiration/ateliers-clothing-craft-armenia-georgia",
    examples: ["Carpet traditions", "Pottery markets", "Textile studios", "Design shops"]
  },
  {
    title: "Sacred Heritage and Music",
    label: "Faith and sound",
    image: "/images/real/geghard-landscape.jpg",
    imageAlt: "Mountain landscape around Geghard Monastery in Armenia",
    description:
      "Give the route a contemplative centre with monasteries, sacred architecture, church history and carefully arranged music moments.",
    href: "/inspiration/sacred-music-ancient-monasteries",
    examples: ["Geghard", "Echmiadzin", "Haghpat", "Sacred music"]
  },
  {
    title: "Silk Road Passes and Caravan Memory",
    label: "Historic routes",
    image: "/images/real/tatev-monastery.jpg",
    imageAlt: "Tatev Monastery and mountain landscape in Armenia",
    imagePosition: "object-[50%_45%]",
    description:
      "Add a light historical thread around caravan roads, Selim Pass, old trade routes, mountain crossings and cultures meeting across the Caucasus.",
    href: "/inspiration/silk-road-caucasus-caravan-routes",
    examples: ["Selim Pass", "Tatev road", "Ancient trade routes", "Caravan-route context"]
  },
  {
    title: "Lake Sevan and Blue Highlands",
    label: "Water and air",
    image: "/images/real/lake-sevan-sailboat.jpg",
    imageAlt: "Sailboat on Lake Sevan at sunset with mountain silhouettes",
    imagePosition: "object-[52%_center]",
    description:
      "Give the group a clear pause around Lake Sevan, Sevanavank, lakeside meals, blue horizons and highland air between denser cultural days.",
    href: "/inspiration/lake-sevan-blue-highlands",
    examples: ["Sevanavank", "Lakeside lunch", "Blue viewpoints", "Gentler pacing"]
  },
  {
    title: "Red Cliffs and Mountain Roads",
    label: "Nature and pace",
    image: "/images/real/noravank-red-cliffs.jpg",
    imageAlt: "Noravank Monastery surrounded by red cliffs in Armenia",
    imagePosition: "object-[52%_center]",
    description:
      "Slow the journey down around clear views, Noravank cliffs, Dilijan forests, Khor Virap, Tatev roads and scenic pauses between cultural days.",
    href: "/inspiration/mountain-roads-lakes-high-passes",
    examples: ["Noravank", "Khor Virap views", "Dilijan", "Tatev road"]
  }
];
