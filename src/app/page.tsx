import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Armenia & Georgia Private and Group Journeys",
  description:
    "Choose Armenia, Georgia or both. Build a short private trip, a two-week cultural journey or a forming group request with local partner planning."
};

const choices = [
  {
    title: "Choose the country",
    body: "Armenia, Georgia, or both in one cross-border journey.",
    value: "Armenia / Georgia / both"
  },
  {
    title: "Choose the length",
    body: "A few focused days, one week, or a richer 10-14 day route.",
    value: "Few days to two weeks"
  },
  {
    title: "Choose the style",
    body: "Private for one person, couple, family or group, or join a forming group if dates fit.",
    value: "Private or shared"
  }
];

const routeCards = [
  {
    title: "Armenia only",
    body: "Monasteries, Ararat, Yerevan, Lake Sevan, Tatev, food, coffee, craft and festivals.",
    image: "/images/real/khor-virap-ararat-hero.jpg",
    imageAlt: "Khor Virap Monastery beneath Mount Ararat",
    href: "/contact?country=Armenia&duration=Not%20sure&style=Private%20or%20forming%20group"
  },
  {
    title: "Georgia only",
    body: "Tbilisi, Kakheti wine country, ancient churches, table culture, mountains and old towns.",
    image: "/images/real/tbilisi-aerial.jpg",
    imageAlt: "Aerial view of Tbilisi old town architecture and river valley",
    href: "/contact?country=Georgia&duration=Not%20sure&style=Private%20or%20forming%20group"
  },
  {
    title: "Armenia + Georgia",
    body: "A fuller Caucasus journey linking wine, monasteries, cities, highlands and Silk Road memory.",
    image: "/images/real/tatev-green-monastery.jpg",
    imageAlt: "Tatev Monastery above a green mountain gorge in Armenia",
    href: "/contact?country=Armenia%20%2B%20Georgia&duration=10-14%20days&style=Not%20sure%20yet"
  }
];

const activities = [
  "Sacred sites",
  "Food & wine",
  "Festivals",
  "Lake Sevan",
  "Silk Road",
  "Cognac & coffee",
  "Ateliers",
  "Mountain roads"
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[76svh] overflow-hidden bg-ink text-paper">
        <Image
          src="/images/real/geghard-landscape.jpg"
          alt="Green Armenian mountain landscape near Geghard with Mount Ararat in the distance"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-[42%_center] brightness-[1.08] saturate-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,23,20,0.86),rgba(28,23,20,0.56)_48%,rgba(28,23,20,0.24)),linear-gradient(180deg,rgba(28,23,20,0.12),rgba(28,23,20,0.74))]" />
        <Container className="relative flex min-h-[76svh] items-end pb-10 pt-28 sm:pb-14">
          <div className="text-on-photo max-w-[44rem]">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Armenia, Georgia, or both</p>
            <h1 className="mt-4 font-display text-[2.45rem] leading-[1.03] text-paper sm:text-6xl lg:text-7xl">
              Build a trip around what you actually want to experience.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-paper/90 sm:text-xl sm:leading-8">
              Private and group journeys from a few days to two weeks: culture, food, wine, sacred places, festivals,
              mountains and local hospitality.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/tours" variant="light" className="w-full sm:w-auto">
                Choose a Route
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost" className="w-full sm:w-auto">
                Request Proposal
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {choices.map((choice) => (
              <article key={choice.title} className="rounded-lg border border-forest/10 bg-ivory p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-pomegranate">{choice.value}</p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-forest">{choice.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone">{choice.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Starting points</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">
                Pick the simplest route direction
              </h2>
            </div>
            <ButtonLink href="/tours" variant="secondary">
              See All Options
            </ButtonLink>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {routeCards.map((route) => (
              <Link
                key={route.title}
                href={route.href}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={route.image}
                    alt={route.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl leading-tight text-forest">{route.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{route.body}</p>
                  <p className="mt-5 text-sm font-semibold text-wine">Add to request</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Add interests</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">
                Choose only what matters
              </h2>
              <p className="mt-5 text-base leading-8 text-stone">
                These are not fixed packages. They are ingredients for a route we can price and check properly.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {activities.map((activity) => (
                <Link
                  key={activity}
                  href={`/contact?interest=${encodeURIComponent(activity)}`}
                  className="rounded-full border border-wine/20 bg-paper px-4 py-3 text-sm font-semibold text-wine shadow-sm transition hover:border-wine hover:bg-ivory"
                >
                  {activity}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Send a short request. Details can come later."
        body="Choose country, length, style and a few interests. We can then answer with a realistic direction instead of asking you to write a long brief."
        primaryLabel="Start Request"
        primaryHref="/contact"
        secondaryLabel="Compare Routes"
        secondaryHref="/tours"
      />
    </>
  );
}
