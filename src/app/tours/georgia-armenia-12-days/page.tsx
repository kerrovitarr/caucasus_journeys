import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { ItineraryTimeline } from "@/components/sections/ItineraryTimeline";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RoutePill } from "@/components/ui/RoutePill";
import { bookingSteps, travellerEssentials } from "@/data/planning";
import { featuredTour } from "@/data/tours";
import { customJourneyIdeas } from "@/data/travelStyles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "12-Day Georgia & Armenia Cultural Journey",
  description:
    "A Georgia Armenia cultural journey through Tbilisi, Kakheti, Haghpat, Lake Sevan, Tatev, Yerevan, Echmiadzin, Garni and Geghard, with flight routing checked by date."
};

export default function FeaturedTourPage() {
  return (
    <>
      <PageIntro
        eyebrow="Featured Journey"
        title={featuredTour.title}
        body="A premium sample programme for group travel through Georgia and Armenia, shaped through a personal partnership and confirmed by the Armenian partner agency."
        primaryCta={{ label: "Register Interest", href: "/contact" }}
        secondaryCta={{ label: "See Day by Day", href: "#day-by-day" }}
      />

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-forest/10 shadow-lift sm:min-h-[34rem]">
            <Image
              src={featuredTour.image}
              alt={featuredTour.imageAlt}
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <article className="rounded-lg bg-forest p-7 text-paper shadow-lift sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Planning Path</p>
              <h2 className="mt-4 font-display text-4xl leading-tight">Group journey, local confirmation</h2>
              <p className="mt-5 text-base leading-8 text-paper/78">{featuredTour.advisoryNote}</p>
              <div className="mt-7 rounded-lg border border-paper/15 bg-paper/8 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Working Budget</p>
                <p className="mt-3 font-display text-3xl leading-tight">{featuredTour.priceRange}</p>
                <p className="mt-4 text-sm leading-7 text-paper/68">{featuredTour.priceDetail}</p>
              </div>
              <ButtonLink href="/contact" variant="light" className="mt-7">
                Register Interest
              </ButtonLink>
            </article>

            <div>
              <SectionTitle
                eyebrow="Who Can Request It"
                title="Either bring a whole group, or join one being formed"
                body={featuredTour.overview}
              />
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {featuredTour.offerFormats.map((format, index) => (
                  <article key={format.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/25 text-sm font-bold text-forest">
                      {index + 1}
                    </span>
                    <h2 className="mt-5 font-display text-2xl leading-tight text-forest">{format.title}</h2>
                    <p className="mt-4 text-sm leading-7 text-stone">{format.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Route Logic"
            title="Four chapters, one clear journey"
            body="The route is not a random list of places. It moves from Georgia's city and wine culture into Armenia's monastery landscapes, then closes with Yerevan, Ararat views and sacred heritage."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {featuredTour.routeChapters.map((chapter, index) => (
              <article key={chapter.title} className="rounded-lg border border-forest/10 bg-ivory p-6 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-bold text-paper">
                    {index + 1}
                  </span>
                  {index < featuredTour.routeChapters.length - 1 ? (
                    <span className="hidden text-2xl text-gold lg:inline" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-6 font-display text-2xl leading-tight text-forest">{chapter.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{chapter.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {chapter.stops.map((stop) => (
                    <RoutePill key={`${chapter.title}-${stop}`} label={stop} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Experience Pillars"
            title="What gives the journey its depth"
            body="The day-by-day programme below gives the exact movement. These themes explain why the route works emotionally, culturally and practically for a group."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredTour.experiencePillars.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <Badge>{pillar.title}</Badge>
                <p className="mt-5 text-sm leading-7 text-stone">{pillar.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Personalisation"
            title="The route can flex around the group"
            body={featuredTour.customisation}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {customJourneyIdeas.map((idea) => (
              <Link
                key={idea.title}
                href={idea.href}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-ivory shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={idea.image}
                    alt={idea.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className={cn("object-cover transition duration-700 group-hover:scale-105", idea.imagePosition)}
                  />
                </div>
                <div className="p-6">
                  <Badge>{idea.label}</Badge>
                  <h2 className="mt-5 font-display text-2xl leading-tight text-forest">{idea.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone">{idea.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-wine group-hover:text-pomegranate">
                    Read this idea
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Planning"
            title="From sample programme to group offer"
            body="The published itinerary shows the travel logic. The final proposal is shaped around the group format, possible departure date, guide language, hotel level and selected cultural experiences."
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
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {travellerEssentials.map((item) => (
              <article key={item.title} className="rounded-lg border border-forest/10 bg-forest/5 p-6">
                <h2 className="font-display text-2xl text-forest">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="day-by-day" className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Day by Day"
            title="An elegant twelve-day timeline"
            body="Each day balances guided visits, travel comfort and memorable cultural encounters."
          />
          <div className="mt-12">
            <ItineraryTimeline days={featuredTour.itinerary} />
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Programme Request"
        title="Would you like a detailed version for your group?"
        body="Request it for a formed community, or register interest as an individual traveller, couple, family or small circle who would like to join a compatible group departure."
        primaryLabel="Request Detailed Programme"
        primaryHref="/contact"
        secondaryLabel="Ask About a Group Presentation"
        secondaryHref="/contact"
      />
    </>
  );
}
