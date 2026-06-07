import type { Metadata } from "next";
import Image from "next/image";
import { FeaturedTourCard } from "@/components/cards/FeaturedTourCard";
import { NewsCard } from "@/components/cards/NewsCard";
import { TourCategoryCard } from "@/components/cards/TourCategoryCard";
import { CTASection } from "@/components/sections/CTASection";
import { Hero } from "@/components/sections/Hero";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { inspirationArticles } from "@/data/inspiration";
import { bookingSteps } from "@/data/planning";
import { tourCategories } from "@/data/tours";
import { travelStyles } from "@/data/travelStyles";

export const metadata: Metadata = {
  title: "Armenia & Georgia Group Journeys",
  description:
    "Discover curated Armenia and Georgia group journeys with sacred heritage, food, wine, festivals, ateliers, mountains and an experienced Armenian travel partner."
};

const sellingPoints = [
  {
    title: "A route with real emotional range",
    body: "Monasteries, wine country, Silk Road traces, Lake Sevan, Yerevan evenings, ateliers and mountain roads give the journey more than one reason to be memorable."
  },
  {
    title: "Individual approach inside a clear route",
    body: "The journey starts from proven group logic, then adapts around the people travelling: their pace, language, interests, comfort and reason for going."
  },
  {
    title: "Local knowledge checks every idea",
    body: "The first conversation can be broad, but the final route is checked against dates, comfort, guide language, hotels, transport and cultural availability."
  },
  {
    title: "Beautiful, but not overloaded",
    body: "The best version leaves space to absorb what you see: a quiet monastery, a table conversation, a blue view over Sevan or a slow evening coffee."
  }
];

const routeMoments = [
  {
    title: "Silk Road roads and highland memory",
    image: "/images/real/tatev-green-monastery.jpg",
    imageAlt: "Tatev Monastery above a green mountain gorge in Armenia"
  },
  {
    title: "Festivals, wine and public celebration",
    image: "/images/real/areni-wine-festival.jpg",
    imageAlt: "Visitors at the Areni Wine Festival in Armenia"
  },
  {
    title: "Cognac, coffee and Yerevan evenings",
    image: "/images/real/yerevan-brandy-barrels.jpg",
    imageAlt: "Rows of Armenian brandy barrels in a Yerevan cellar"
  }
];

const confidenceSignals = [
  {
    title: "Real partner roots",
    body: "The Armenian travel side comes from Ruzanna's family agency Arminius, active since the 1990s and experienced with travellers from German-speaking Europe."
  },
  {
    title: "Clear next step",
    body: "The inquiry starts with format, timing, traveller count, language and interests. No one needs to know the perfect route before writing."
  },
  {
    title: "Transparent limits",
    body: "Prices are orientation only until dates, group size, hotels, guide language and experiences are checked by the Armenian partner."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Armenia & Georgia Journeys for Curious Groups"
        subtitle="A cultured, warm and group-ready way to experience ancient monasteries, Silk Road traces, mountain landscapes, wine traditions, festivals, ateliers, food and unforgettable hospitality."
        image="/images/real/khor-virap-ararat-hero.jpg"
        imageAlt="Khor Virap Monastery beneath Mount Ararat"
        imageClassName="object-[55%_center] brightness-[1.04] saturate-[1.08]"
        overlayClassName="image-vignette-soft"
        primaryCta={{ label: "Explore Journeys", href: "/tours" }}
        secondaryCta={{ label: "Request an Offer", href: "/contact" }}
      />

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <SectionTitle
                eyebrow="Why People Say Yes"
                title="It feels famous, intimate and beautifully varied"
                body="Armenia and Georgia give travellers the pleasure of recognition - Ararat, the Silk Road, ancient Christianity, wine - and then surprise them with living culture, generous tables, individual route care and landscapes that feel close."
              />
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {sellingPoints.map((point) => (
                  <article key={point.title} className="rounded-lg border border-forest/10 bg-ivory p-5">
                    <h2 className="font-display text-2xl leading-tight text-forest">{point.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-stone">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {routeMoments.map((moment, index) => (
                <figure
                  key={moment.title}
                  className="relative min-h-[12rem] overflow-hidden rounded-lg border border-forest/10 shadow-lift sm:min-h-[16rem] lg:min-h-[11rem]"
                >
                  <Image
                    src={moment.image}
                    alt={moment.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/18 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Moment {index + 1}</p>
                    <p className="mt-2 font-display text-2xl leading-tight text-paper">{moment.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Journey Directions"
            title="Many ways to experience Armenia and Georgia"
            body="Each route starts from a proven group programme, then adapts around language, season, pace and the interests that matter to the travelling group."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tourCategories.map((category) => (
              <TourCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Featured Tour"
            title="12-Day Georgia & Armenia Cultural Journey"
            body="A signature Armenia and Georgia route linking old towns, sacred sites, wine country, mountain landscapes and living culture. The sample is shown as 12 days, but many group versions can be shaped within a 10-14 day window."
          />
          <div className="mt-12">
            <FeaturedTourCard />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <SectionTitle
              eyebrow="Our Roots"
              title="Rooted in Armenian travel heritage and real relationships"
              body="The journeys grow from a personal partnership: Ruzanna's Armenian family agency Arminius, founded by her father in the 1990s, and the careful first-contact support built by Kyrylo and Tatyana."
            />
            <div className="grid gap-5 md:grid-cols-3">
              <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <Badge>Armenia</Badge>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">Ruzanna's agency, Arminius</h2>
                <p className="mt-4 text-sm leading-7 text-stone">
                  A family travel business with roots in the 1990s and long experience welcoming German-speaking travellers to
                  Armenia and Georgia.
                </p>
              </article>
              <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <Badge>Route Care</Badge>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">First conversations</h2>
                <p className="mt-4 text-sm leading-7 text-stone">
                  Kyrylo and Tatyana help travellers understand the routes, compare ideas and prepare a thoughtful
                  first request before the Armenian partner confirms details.
                </p>
              </article>
              <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <Badge>Arminius</Badge>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">Final programme</h2>
                <p className="mt-4 text-sm leading-7 text-stone">
                  We gather wishes and explain the route. Arminius prepares the final programme, payment steps and
                  travel documents.
                </p>
              </article>
            </div>
          </div>
          <div className="mt-10">
            <ButtonLink href="/about" variant="secondary">
              Read Our Story
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Who Can Travel"
            title="You do not need to arrive with 15-20 people"
            body="A whole connected group can request a programme immediately. One traveller, a couple, a family or friends can also register interest, and compatible requests may be combined into one group departure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {travelStyles.map((style) => (
              <article key={style.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-pomegranate">{style.audience}</p>
                <h3 className="mt-4 font-display text-2xl leading-tight text-forest">{style.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone">{style.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/tours" variant="primary">
              Compare Travel Options
            </ButtonLink>
            <ButtonLink href="/for-groups" variant="secondary">
              Group Planning
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Booking"
            title="How the first conversation becomes a route"
            body="Visitors do not need to choose a perfect product before writing. A request can start with people, dates and interests, then move toward either a formed-group proposal or a forming-group match."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/25 text-sm font-bold text-forest">
                  {index + 1}
                </span>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">{step.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Inspiration"
            title="Stories, seasons and cultural reasons to travel"
            body="Readable travel notes for ateliers, festivals, sacred music, wine, food, cities and personal route ideas."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inspirationArticles.slice(4, 7).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
            <NewsCard article={inspirationArticles[2]} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Confidence"
            title="A clear path before anyone commits"
            body="The journey should feel inspiring, but also understandable. These signals help travellers know who is involved, what happens next and where final confirmation happens."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {confidenceSignals.map((signal) => (
              <article key={signal.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <Badge>{signal.title}</Badge>
                <p className="mt-5 text-sm leading-7 text-stone">{signal.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Begin the Conversation"
        title="Ready to shape a journey to Armenia and Georgia?"
        body="Share who is travelling, what you love, your preferred language and rough timing. We will respond with a thoughtful next step."
        primaryLabel="Request an Offer"
        primaryHref="/contact"
      />
    </>
  );
}
