import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "For Groups",
  description:
    "Curated Armenia Georgia group travel planning for parishes, church communities, senior groups, cultural associations, clubs and closed communities."
};

const arrangements = [
  "Programme design with the Armenian operating partner",
  "German, French, Armenian, English or Russian-speaking guide options",
  "Presentations for parishes, clubs and associations",
  "Hotels, coaches, visits, meals and cultural experiences",
  "Sacred heritage, music, wine, nature and city culture themes",
  "Clear preparation before departure"
];

const groupTypes = ["Parishes", "Church communities", "Senior groups", "Cultural associations", "Clubs", "Closed communities"];

const groupThemes = [
  {
    title: "Sacred Heritage & Pilgrimage",
    image: "/images/real/echmiadzin-ararat.jpg",
    imageAlt: "Ancient Armenian monastery with snow-capped mountain backdrop",
    body: "Echmiadzin, Geghard, Haghpat, Khor Virap, Mtskheta, church history, sacred music and space for reflection."
  },
  {
    title: "Festivals & Big Celebrations",
    image: "/images/real/yerevan-city-festival-music.jpg",
    imageAlt: "Open-air music event and city festival in Yerevan at night",
    body: "Vardavar, Yerevan Wine Days, Areni Wine Festival, Gata, Dolma, open-air music and seasonal public celebrations."
  },
  {
    title: "Wine Routes & Harvest Tables",
    image: "/images/real/areni-wine-festival.jpg",
    imageAlt: "Visitors at the Areni Wine Festival in Armenia",
    body: "Kakheti, qvevri traditions, Areni, Yerevan wine culture, vineyards, harvest-season energy and generous hosted meals."
  },
  {
    title: "Cognac, Coffee & Yerevan Evenings",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of Armenian brandy barrels in a Yerevan cellar",
    body: "Armenian brandy heritage, small cups of Armenian coffee, cafes, dessert, city walks and adult evening programmes."
  },
  {
    title: "Ateliers, Carpets & Living Craft",
    image: "/images/real/armenian-carpet-loom-goris.jpg",
    imageAlt: "Vertical weaving loom for Armenian carpet making in Goris",
    body: "Textiles, carpets, clothing, ceramics, embroidery, design shops, manuscript culture and hands-on workshops where available."
  },
  {
    title: "Silk Road & Caravan Passes",
    image: "/images/real/tatev-monastery.jpg",
    imageAlt: "Tatev Monastery and mountain landscape in Armenia",
    body: "Selim Pass, Tatev roads, old trade-route memory, mountain crossings and a light historical thread across the Caucasus."
  },
  {
    title: "Lake Sevan & Soft Nature",
    image: "/images/real/lake-sevan-sailboat.jpg",
    imageAlt: "Sailboat on Lake Sevan at sunset with mountain silhouettes",
    body: "Sevanavank, blue horizons, Dilijan forests, gentle highland air and scenic pauses that keep the route balanced."
  },
  {
    title: "Cities, Memory & Learning",
    image: "/images/real/yerevan-cascade-dusk.jpg",
    imageAlt: "Yerevan Cascade with city life at dusk",
    body: "Tbilisi, Yerevan, museums, old towns, Matenadaran, memorial context and guided conversations for curious groups."
  },
  {
    title: "Choirs, Music & Shared Sound",
    image: "/images/real/geghard-landscape.jpg",
    imageAlt: "Mountain landscape around Geghard Monastery in Armenia",
    body: "Sacred music, folk song, possible choir-friendly moments, monastery acoustics and evenings shaped around listening."
  }
];

const processSteps = [
  "Introductory call",
  "Programme adaptation",
  "Presentation to your group",
  "Registration and confirmation",
  "Travel preparation",
  "Journey with local guides"
];

export default function ForGroupsPage() {
  return (
    <>
      <PageIntro
        eyebrow="For Groups"
        title="Meaningful journeys for formed communities"
        body="A calm planning path for parishes, church communities, senior travel groups, cultural associations, clubs and closed communities that want to travel together."
        primaryCta={{ label: "Request Group Proposal", href: "/contact" }}
        secondaryCta={{ label: "Explore Route Themes", href: "#route-themes" }}
      />

      <section id="route-themes" className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionTitle
              eyebrow="Why Armenia and Georgia?"
              title="Ancient faith, living culture and landscapes that stay with people"
              body="Armenia and Georgia offer a rare concentration of early Christian heritage, UNESCO monasteries, mountain roads, wine traditions, old cities, music and warm hospitality."
            />
            <SectionTitle
              eyebrow="Why travel as a group?"
              title="Shared discovery makes the journey richer"
              body="Group travel creates space for reflection, conversation and community. It also allows the programme to be adapted around language, pacing, spiritual interests and cultural themes."
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="What We Can Arrange"
                title="A practical framework for a carefully hosted journey"
                body="Birkin Travel Advisory helps clarify the first route idea. The Armenian partner prepares the final offer and coordinates guides, hotels, transport, meals and local service providers."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {arrangements.map((item) => (
                  <div key={item} className="rounded-lg border border-forest/10 bg-ivory p-5">
                    <p className="font-semibold leading-7 text-forest">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-[34rem] overflow-hidden rounded-lg border border-forest/10 shadow-lift">
              <Image
                src="/images/real/tbilisi-aerial.jpg"
                alt="Aerial view of Tbilisi old town rooftops and river valley"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Route Themes"
            title="Give the group a clear reason to travel"
            body="A formed group often needs a strong theme: pilgrimage, wine, history, craft, music, memory or soft mountain landscapes. The programme can hold one main idea and several lighter experiences around it."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {groupThemes.map((theme) => (
              <article key={theme.title} className="overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-soft">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={theme.image}
                    alt={theme.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge>{theme.title}</Badge>
                  <p className="mt-5 text-sm leading-7 text-stone">{theme.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle
              eyebrow="Suggested Group Types"
              title="Built for the communities who value substance"
              body="The programme can be adapted for spiritual, cultural, educational and community group needs. Visitors without an existing group, as well as couples or families, can register interest on the Tours page and may join a forming group."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {groupTypes.map((type) => (
                <div key={type} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                  <p className="font-display text-2xl text-forest">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Process"
            title="How the process works"
            body="A simple, human path from first conversation to a group-ready proposal."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <span className="font-display text-4xl text-wine">{index + 1}</span>
                <h3 className="mt-5 font-display text-2xl text-forest">{step}</h3>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CTASection
        eyebrow="Group Proposal"
        title="Let us shape a proposal around your community"
        body="Share the approximate traveller count, language needs, timing and the kind of experience your community is hoping for."
        primaryLabel="Request a Group Proposal"
        primaryHref="/contact"
      />
    </>
  );
}
