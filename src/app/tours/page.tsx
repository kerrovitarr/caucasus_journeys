import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Choose Armenia, Georgia or both, then shape trip length, private style, group format and route interests."
};

function contactHref(params: Record<string, string>) {
  const search = new URLSearchParams(params);
  return `/contact?${search.toString()}`;
}

const countryRoutes = [
  {
    title: "Armenia",
    subtitle: "Sacred, warm, ancient",
    body: "Ararat views, monasteries, Yerevan, Lake Sevan, Tatev, food, coffee, craft and festivals.",
    image: "/images/real/khor-virap-ararat-hero.jpg",
    imageAlt: "Khor Virap Monastery beneath Mount Ararat",
    country: "Armenia"
  },
  {
    title: "Georgia",
    subtitle: "Wine, cities, table culture",
    body: "Tbilisi, Kakheti, qvevri wine, Mtskheta, old towns, mountains and generous meals.",
    image: "/images/real/tbilisi-aerial.jpg",
    imageAlt: "Aerial view of Tbilisi old town architecture and river valley",
    country: "Georgia"
  },
  {
    title: "Armenia + Georgia",
    subtitle: "The full Caucasus route",
    body: "A richer cross-border journey with cities, wine, highlands, monasteries and a light Silk Road thread.",
    image: "/images/real/tatev-green-monastery.jpg",
    imageAlt: "Tatev Monastery above a green mountain gorge in Armenia",
    country: "Armenia + Georgia"
  }
];

const durationOptions = [
  {
    title: "Few days",
    body: "A focused city, wine, sacred or family-style short trip.",
    value: "Few days"
  },
  {
    title: "About one week",
    body: "A balanced route with enough time for culture and one or two deeper interests.",
    value: "About one week"
  },
  {
    title: "10-14 days",
    body: "Best for Armenia + Georgia or a fuller private cultural journey.",
    value: "10-14 days"
  }
];

const travelStyles = [
  {
    title: "Private",
    body: "For one person, couple, family, friends or a closed group. More flexible, usually more expensive.",
    value: "Private trip"
  },
  {
    title: "Forming group",
    body: "Register interest and travel if compatible dates, language and route wishes come together.",
    value: "Join a forming group"
  },
  {
    title: "Own community",
    body: "For a parish, club, association, company circle, school, choir or cultural group.",
    value: "Own formed group"
  }
];

const activityOptions = [
  "Sacred sites",
  "Food & wine",
  "Festivals",
  "Cognac & coffee",
  "Lake Sevan",
  "Silk Road",
  "Ateliers",
  "Mountains",
  "Family history"
];

export default function ToursPage() {
  return (
    <>
      <section className="bg-forest py-16 text-paper sm:py-20">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Tours</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Choose a direction. We shape the real route after.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-paper/82 sm:text-lg">
            Pick Armenia, Georgia or both. Then choose length, travel style and interests. A private trip is possible
            even for one person; it simply changes the price.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="light">
              Request Proposal
            </ButtonLink>
            <ButtonLink href="#choose" variant="ghost">
              Compare Options
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section id="choose" className="bg-paper py-14 sm:py-16">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">1. Country</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">Where do you want to go?</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {countryRoutes.map((route) => (
              <Link
                key={route.title}
                href={contactHref({ country: route.country })}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-ivory shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
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
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-pomegranate">{route.subtitle}</p>
                  <h3 className="mt-3 font-display text-2xl leading-tight text-forest">{route.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{route.body}</p>
                  <p className="mt-5 text-sm font-semibold text-wine">Select {route.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">2. Length</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">How much time do you have?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {durationOptions.map((option) => (
              <Link
                key={option.title}
                href={contactHref({ duration: option.value })}
                className="rounded-lg border border-forest/10 bg-paper p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="font-display text-2xl leading-tight text-forest">{option.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{option.body}</p>
                <p className="mt-5 text-sm font-semibold text-wine">Use this length</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-14 sm:py-16">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">3. Style</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">Private or shared?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {travelStyles.map((style) => (
              <Link
                key={style.title}
                href={contactHref({ style: style.value })}
                className="rounded-lg border border-forest/10 bg-paper p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <h3 className="font-display text-2xl leading-tight text-forest">{style.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone">{style.body}</p>
                <p className="mt-5 text-sm font-semibold text-wine">Select style</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">4. Interests</p>
              <h2 className="mt-3 font-display text-3xl leading-tight text-forest sm:text-4xl">Add route ingredients</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                Click any interest to start a request with it included. You can add more in the form.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {activityOptions.map((activity) => (
                <Link
                  key={activity}
                  href={contactHref({ interest: activity })}
                  className="rounded-full border border-wine/20 bg-ivory px-4 py-3 text-sm font-semibold text-wine shadow-sm transition hover:border-wine hover:bg-paper"
                >
                  {activity}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <details className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
            <summary className="cursor-pointer list-none font-display text-2xl leading-tight text-forest">
              Need more practical detail?
            </summary>
            <div className="mt-5 grid gap-5 text-sm leading-7 text-stone md:grid-cols-3">
              <p>
                <span className="font-semibold text-forest">Price:</span> private trips and very small parties cost
                more per person because the guide, transport and planning are not shared widely.
              </p>
              <p>
                <span className="font-semibold text-forest">Flexibility:</span> country, length, guide language,
                comfort level and interests are checked before any final proposal.
              </p>
              <p>
                <span className="font-semibold text-forest">Partner:</span> Ruzanna's Armenian agency Arminius confirms
                the final programme, booking documents and payment steps.
              </p>
            </div>
          </details>
        </Container>
      </section>

      <CTASection
        eyebrow="Ready"
        title="Send the short version of what you want."
        body="Country, length, style and a few interests are enough for a first answer. You can return later for deeper details."
        primaryLabel="Start Request"
        primaryHref="/contact"
      />
    </>
  );
}
