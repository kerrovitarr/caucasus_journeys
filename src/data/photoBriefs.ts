export type PhotoBrief = {
  title: string;
  page: string;
  subject: string;
  direction: string;
  priority: "Hero" | "Core" | "Optional";
  sourceIdeas?: Array<{
    label: string;
    url: string;
  }>;
};

export const photoBriefs: PhotoBrief[] = [
  {
    title: "Tbilisi old town and Narikala",
    page: "Home / Featured tour",
    subject: "Real Tbilisi street, balcony or Narikala viewpoint",
    direction:
      "Warm but documentary, with enough architectural detail to show the city clearly. Avoid generic sunset-only landscapes.",
    priority: "Hero",
    sourceIdeas: [
      {
        label: "Commons: Narikala and Tbilisi old town file",
        url: "https://commons.wikimedia.org/wiki/File:Fortress_and_Old_Town_of_Tbilisi_at_dusk,_Tbilisi,_Georgia.jpg"
      }
    ]
  },
  {
    title: "Kakheti table or vineyard",
    page: "Tours / Inspiration",
    subject: "Wine tasting, qvevri cellar, supra table or vineyard in Kakheti",
    direction:
      "Hospitality-led image with people, food or cellar context. It should feel hosted and generous, not staged like stock photography.",
    priority: "Core",
    sourceIdeas: [
      {
        label: "Commons: Kvevri category",
        url: "https://commons.wikimedia.org/wiki/Category:Kvevri"
      },
      {
        label: "Commons: Kakheti kvevri winery file",
        url: "https://commons.wikimedia.org/wiki/File:Georgian_traditional_kvevri_jugs_buried_in_a_winery_in_Kakheti.jpg"
      }
    ]
  },
  {
    title: "Haghpat or Sanahin monastery",
    page: "Featured tour / Gallery",
    subject: "Northern Armenia monastery stonework and landscape",
    direction:
      "Use a real monastery exterior or courtyard with readable stone texture. Morning or soft overcast light will suit the current palette.",
    priority: "Core",
    sourceIdeas: [
      {
        label: "Commons: Haghpat Monastery category",
        url: "https://commons.wikimedia.org/wiki/Category:Haghpat_Monastery"
      },
      {
        label: "Commons: Haghpat panorama file",
        url: "https://commons.wikimedia.org/wiki/File:2018_Haghpat_Monastery.jpg"
      }
    ]
  },
  {
    title: "Lake Sevan and Sevanavank",
    page: "Featured tour / Gallery",
    subject: "Lake Sevan, monastery silhouette or lakeside landscape",
    direction:
      "Choose a clean composition with water, sky and architecture. This can give the site visual breathing space between city and monastery scenes.",
    priority: "Core"
  },
  {
    title: "Tatev cable car or monastery",
    page: "Featured tour",
    subject: "Wings of Tatev cable car, gorge, monastery or mountain road",
    direction:
      "A dramatic but real image that shows the scale of the route. Avoid overly dark mountain imagery.",
    priority: "Core",
    sourceIdeas: [
      {
        label: "Commons: Wings of Tatev category",
        url: "https://commons.wikimedia.org/wiki/Category:Wings_of_Tatev"
      }
    ]
  },
  {
    title: "Lavash or Armenian food workshop",
    page: "Tours / Inspiration",
    subject: "Lavash-making, cooking class, family table or market ingredients",
    direction:
      "Hands, flour, bread and table details will communicate custom experiences better than a polished restaurant plate.",
    priority: "Core",
    sourceIdeas: [
      {
        label: "Commons: Armenian lavash category",
        url: "https://commons.wikimedia.org/wiki/Category:Armenian_lavash"
      },
      {
        label: "Commons: Lavash near Noravank file",
        url: "https://commons.wikimedia.org/wiki/File:Fabrication_du_lavash_%C3%A0_Noravank_(1).jpg"
      }
    ]
  },
  {
    title: "Craft, textile or clothing atelier",
    page: "Tours / Inspiration",
    subject: "Textile, ceramics, jewellery, clothing, carpet or artisan workshop in Armenia or Georgia",
    direction:
      "Show the maker and material together. This supports the custom-tour promise around ateliers, clothes and craft.",
    priority: "Core"
  },
  {
    title: "Yerevan evening or Cascade",
    page: "About / Inspiration",
    subject: "Yerevan street life, Cascade, cafe culture or museum-adjacent city detail",
    direction:
      "A human city image with atmosphere, not a distant skyline. The capitals should feel alive and walkable.",
    priority: "Optional"
  }
];
