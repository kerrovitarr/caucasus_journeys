import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Birkin Travel Advisory, the Switzerland contact connecting travellers with Ruzanna's experienced Armenian family travel business for group journeys."
};

const values = [
  {
    title: "Family travel heritage",
    body: "Ruzanna's father founded the Armenian travel business in the 1990s. The agency welcomed many travellers from Germany, Austria and German-speaking Switzerland to Armenia and Georgia, and this work is now part of Ruzanna's family heritage."
  },
  {
    title: "First-contact care",
    body: "Kyrylo and Tatyana are building Birkin Travel Advisory as the Switzerland contact point, so travellers can understand the journeys clearly before being connected with the Armenian partner agency."
  },
  {
    title: "Personal connection",
    body: "Tatyana is Armenian, Kyrylo is Ukrainian, and both love travelling through Armenia and Georgia. The routes are shaped with affection for the region, practical care and respect for what each traveller hopes to experience."
  }
];

const people = [
  {
    name: "Ruzanna",
    role: "Armenian partner",
    body: "Ruzanna carries forward the travel business founded by her father. Her family history gives the journeys their local roots, trusted relationships and long experience with German-speaking travellers."
  },
  {
    name: "Tatyana",
    role: "Swiss-side founder",
    body: "Tatyana is a founder of Birkin Travel Advisory together with Kyrylo. As an Armenian, she also brings a personal connection to the region and a traveller's eye for warm, meaningful experiences: food, family stories, culture, comfort and the small details that make a journey feel cared for."
  },
  {
    name: "Kyrylo",
    role: "Swiss-side founder",
    body: "Kyrylo is founding Birkin Travel Advisory together with Tatyana, with the goal of clearly presenting Ruzanna's Armenia and Georgia journeys to travellers in Switzerland, and later Germany and Austria."
  }
];

const partnershipNotes = [
  "Formed communities can request a complete group proposal for their own members.",
  "Individuals, couples, families and friends can register interest and may join a forming group when enough compatible travellers are available.",
  "Routes are customised around interests where distance, season, budget and availability allow.",
  "Local guides, drivers, hotels, meals and workshops are coordinated by the Armenian operating partner and their trusted network.",
  "Clear communication should make the process easy to understand before travellers move into final booking with the partner."
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A personal bridge between Switzerland, Armenia and Georgia"
        body="Birkin Travel Advisory is a personal bridge to a trusted Armenian family travel business, helping formed groups and individual travellers understand the journeys before the Armenian partner confirms the final programme."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Our Story"
            title="Rooted in a family agency and a personal connection"
            body="This is not a catalogue assembled far away from the place. The Armenian side began in the 1990s, when Ruzanna's father founded a travel business that welcomed German, Austrian and Swiss travellers to Armenia and Georgia. Today Ruzanna carries that heritage forward, and Kyrylo and Tatyana help travellers in Switzerland begin the conversation clearly."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <h2 className="font-display text-3xl text-forest">{value.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{value.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="People"
                title="Three names behind the journeys"
                body="The company story is deliberately personal. Travel to Armenia and Georgia is strongest when it is planned through real relationships, not only through inventory."
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Badge>Armenian family agency</Badge>
                <Badge>Swiss first contact</Badge>
                <Badge>Group travel</Badge>
                <Badge>German-speaking heritage</Badge>
              </div>
            </div>
            <div className="grid gap-5">
              {people.map((person) => (
                <article key={person.name} className="rounded-lg border border-forest/10 bg-ivory p-6 shadow-soft">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-pomegranate">{person.role}</p>
                  <h2 className="mt-3 font-display text-3xl text-forest">{person.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone">{person.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="relative min-h-[28rem] overflow-hidden rounded-lg border border-forest/10 shadow-lift">
              <Image
                src="/images/real/lavash-making.jpg"
                alt="Hands preparing traditional Armenian lavash bread"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <SectionTitle
              eyebrow="How We Work"
              title="Wishes lead, group logic keeps the route honest"
              body="A group trip can be customised around ateliers, food, wine, sacred heritage, clothing, craft, family history or a slower rhythm. Some wishes depend on distance, season, budget, group size and availability, and those limits should be explained clearly before anyone books."
            />
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionTitle
              eyebrow="Partnership"
              title="What the Swiss side should make easier"
              body="The goal is simple: make it possible for people in Switzerland to discover these journeys confidently, whether they already represent a formed group or want to join a group that is being formed."
            />
            <div className="grid gap-4">
              {partnershipNotes.map((note) => (
                <div key={note} className="rounded-lg border border-forest/10 bg-paper p-5 text-sm leading-7 text-stone shadow-soft">
                  {note}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Meet the Journey"
        title="Tell us what you are hoping to experience"
        body="A first message can be simple: whether you have a whole group or want to join one, when you hope to travel, and what would make the journey meaningful."
        primaryLabel="Request an Offer"
        primaryHref="/contact"
      />
    </>
  );
}
