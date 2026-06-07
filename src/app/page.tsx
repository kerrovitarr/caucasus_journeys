import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { featuredTour } from "@/data/tours";

export const metadata: Metadata = {
  title: "Armenia & Georgia Group Journeys",
  description:
    "Concise, beautiful Armenia and Georgia group journeys shaped around culture, food, wine, festivals, sacred heritage, Silk Road traces and local partner care."
};

const heroFacts = [
  { value: "10-14 days", label: "Flexible cultural routes" },
  { value: "Groups or shared interest", label: "Private groups and forming groups" },
  { value: "DE, EN, FR, AM, RU", label: "Guide languages by request" }
];

const reasonsToGo = [
  {
    title: "Famous views, quiet sacred places",
    body: "Ararat, Khor Virap, Geghard, Tatev and early Christian heritage give the journey its emotional centre.",
    image: "/images/real/khor-virap-ararat-hero.jpg",
    imageAlt: "Khor Virap Monastery beneath Mount Ararat",
    href: "/inspiration/ancient-monasteries-mountain-landscapes",
    linkLabel: "Sacred routes"
  },
  {
    title: "Food, wine and tables that feel alive",
    body: "Kakheti wine, Armenian coffee, lavash, gata, cognac, markets and hosted meals turn the route into something social.",
    image: "/images/real/yerevan-wine-days-people.jpg",
    imageAlt: "Travelers raising glasses together at Yerevan Wine Days",
    href: "/inspiration/food-workshops-markets-family-tables",
    linkLabel: "Food stories"
  },
  {
    title: "Festivals and living traditions",
    body: "When dates fit, the journey can lean into Vardavar, wine days, dance, village festivals and seasonal celebration.",
    image: "/images/real/armenian-national-dance-aznavour.jpg",
    imageAlt: "Armenian national dancers performing in Yerevan",
    href: "/inspiration/armenian-festivals-big-celebrations",
    linkLabel: "Festival ideas"
  },
  {
    title: "A light Silk Road thread",
    body: "Mountain roads, caravan memories, monasteries and trade routes add depth without turning the journey into a lecture.",
    image: "/images/real/tatev-green-monastery.jpg",
    imageAlt: "Tatev Monastery above a green mountain gorge in Armenia",
    href: "/inspiration/silk-road-caucasus-caravan-routes",
    linkLabel: "Silk Road notes"
  }
];

const planningSteps = [
  {
    title: "Start with the route feeling",
    body: "Sacred, food-led, festival-focused, scenic, atelier-based or balanced across Armenia and Georgia.",
    href: "/tours",
    linkLabel: "See tours"
  },
  {
    title: "Match it to the people",
    body: "Dates, pace, traveller count, language, comfort level and whether you are a formed group or joining a forming group.",
    href: "/for-groups",
    linkLabel: "Group options"
  },
  {
    title: "Request the real proposal",
    body: "Ruzanna's Armenian agency Arminius checks availability and prepares the confirmed programme, price and booking steps.",
    href: "/contact",
    linkLabel: "Request offer"
  }
];

const pageLinks = [
  {
    title: "Tours",
    body: "Sample routes, the 10-14 day structure and the full Georgia & Armenia itinerary.",
    href: "/tours",
    image: "/images/real/lake-sevan-sailboat.jpg",
    imageAlt: "Sailboat on Lake Sevan at sunset with mountain silhouettes"
  },
  {
    title: "For Groups",
    body: "How private groups, communities, couples, families and solo travellers can request or join a route.",
    href: "/for-groups",
    image: "/images/real/gata-festival-khachik.jpg",
    imageAlt: "Crowd gathered at the Gata Festival in Khachik village"
  },
  {
    title: "Inspiration",
    body: "Festivals, coffee, cognac, Sevan, ateliers, sacred music, food and Silk Road ideas.",
    href: "/inspiration",
    image: "/images/real/lavash-baking-yerevan-people.jpg",
    imageAlt: "Lavash being prepared around a tonir oven in Yerevan"
  },
  {
    title: "Gallery",
    body: "A visual first look at places, tables, people, craft, festivals and route moods.",
    href: "/gallery",
    image: "/images/real/georgian-supra-feast.jpg",
    imageAlt: "Georgian supra table set with wine, lavash, herbs and shared dishes"
  }
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[82svh] overflow-hidden bg-ink text-paper">
        <Image
          src="/images/real/khor-virap-ararat-hero.jpg"
          alt="Khor Virap Monastery beneath Mount Ararat"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[58%_center] brightness-[1.03] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,23,20,0.74),rgba(28,23,20,0.42)_45%,rgba(28,23,20,0.12)),linear-gradient(180deg,rgba(28,23,20,0.08),rgba(28,23,20,0.62))]" />
        <Container className="relative flex min-h-[82svh] flex-col justify-end pb-8 pt-28 sm:pb-10 lg:pt-32">
          <div className="min-w-0 max-w-[22rem] pb-8 sm:max-w-3xl sm:pb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold">Armenia & Georgia journeys</p>
            <h1 className="text-wrap font-display text-[2.25rem] leading-[1.04] sm:text-6xl lg:text-7xl">
              Culture, mountains and warm tables, beautifully planned.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/84 sm:text-xl sm:leading-8">
              Custom group journeys and forming-group requests through Armenia and Georgia, shaped around sacred
              heritage, wine, festivals, ateliers, Lake Sevan and a gentle Silk Road thread.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tours" variant="light" className="w-full sm:w-auto">
                View Routes
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost" className="w-full sm:w-auto">
                Request an Offer
              </ButtonLink>
            </div>
          </div>

          <div className="grid min-w-0 gap-3 border-t border-paper/25 pt-5 sm:grid-cols-3">
            {heroFacts.map((fact) => (
              <div key={fact.value} className="min-w-0">
                <p className="break-words font-display text-2xl leading-tight text-paper">{fact.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-paper/64">{fact.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionTitle
              eyebrow="Why go"
              title="A journey with more than one reason to say yes"
              body="Armenia and Georgia combine famous places with living culture: sacred sites, high roads, wine, tables, music, makers and warm city evenings."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {reasonsToGo.map((reason) => (
                <Link
                  key={reason.title}
                  href={reason.href}
                  className="group relative min-h-[20rem] overflow-hidden rounded-lg border border-forest/10 bg-ink shadow-soft"
                >
                  <Image
                    src={reason.image}
                    alt={reason.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{reason.linkLabel}</p>
                    <h2 className="mt-2 font-display text-2xl leading-tight text-paper">{reason.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-paper/78">{reason.body}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="How it works"
            title="Simple first steps, detailed planning later"
            body="Start with the kind of journey you want. Then share who is travelling, when, in which language and at what pace, so the real proposal can be checked properly."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {planningSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/25 text-sm font-bold text-forest">
                  {index + 1}
                </span>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{step.body}</p>
                <Link href={step.href} className="mt-5 inline-flex text-sm font-semibold text-wine transition hover:text-pomegranate">
                  {step.linkLabel}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-16 sm:py-20">
        <Container>
          <div className="grid overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-lift lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[22rem] lg:min-h-[34rem]">
              <Image
                src="/images/real/tatev-green-monastery.jpg"
                alt="Tatev Monastery above a green mountain gorge in Armenia"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover object-[50%_48%]"
              />
            </div>
            <div className="p-6 sm:p-9 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Featured route</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-forest sm:text-4xl">
                {featuredTour.title}
              </h2>
              <p className="mt-3 inline-flex rounded-full bg-gold/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-forest">
                {featuredTour.durationLabel}
              </p>
              <p className="mt-6 text-base leading-8 text-stone">
                A balanced Georgia and Armenia route through Tbilisi, Kakheti, northern Armenia, Lake Sevan, Tatev,
                Khor Virap, Yerevan, Echmiadzin, Garni and Geghard. It can stay classic or lean toward festivals,
                food, sacred music, ateliers or scenic pauses.
              </p>
              <div className="mt-7 grid gap-3 text-sm leading-6 text-stone sm:grid-cols-2">
                {featuredTour.highlights.slice(0, 6).map((highlight) => (
                  <div key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/tours/georgia-armenia-12-days" variant="primary">
                  View Itinerary
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Request This Route
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="Choose where to go next"
            title="Go straight to the details you need"
            body="Routes, group formats, stories, photos and direct contact are separated so every visitor can keep moving without reading everything at once."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pageLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-ivory shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-2xl leading-tight text-forest">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-stone">{item.body}</p>
                  <p className="mt-5 text-sm font-semibold text-wine">Open {item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Begin the conversation"
        title="Tell us who is travelling and what should make the journey unforgettable."
        body="A request can be simple: group size, rough dates, preferred language and the kind of route you imagine. The details can be shaped after that."
        primaryLabel="Request an Offer"
        primaryHref="/contact"
      />
    </>
  );
}
