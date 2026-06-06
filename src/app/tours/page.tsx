import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FeaturedTourCard } from "@/components/cards/FeaturedTourCard";
import { TourCategoryCard } from "@/components/cards/TourCategoryCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { bookingSteps, faqItems, travellerEssentials } from "@/data/planning";
import { tourCategories } from "@/data/tours";
import { customJourneyIdeas, travelStyles } from "@/data/travelStyles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Explore Armenia Georgia group travel options for formed communities and individual travellers who want to join a forming group."
};

export default function ToursPage() {
  return (
    <>
      <PageIntro
        eyebrow="Tours"
        title="Start with a proven route, then shape it around your people"
        body="Begin with a clear Georgia and Armenia journey skeleton, then adapt the rhythm, language, spiritual focus, atelier visits, Silk Road context, food experiences and cultural depth with the Armenian operating partner."
        primaryCta={{ label: "View 12-Day Route", href: "/tours/georgia-armenia-12-days" }}
        secondaryCta={{ label: "Request a Proposal", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Travel Formats"
            title="A whole group, or a place in one being formed"
            body="You do not need to personally gather 15-20 people before asking. A connected community can request its own proposal, while one traveller, a couple, a family or friends can register interest and potentially join a shared group departure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {travelStyles.map((style) => (
              <article key={style.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-pomegranate">{style.audience}</p>
                <h2 className="mt-4 font-display text-2xl leading-tight text-forest">{style.title}</h2>
                <p className="mt-4 text-sm leading-7 text-stone">{style.description}</p>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-stone">
                  {style.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Sample Programme"
            title="A real route skeleton from Georgia into Armenia"
            body="Based on the travel programme structure: Tbilisi, Kakheti, Mtskheta, Uplistsikhe, Haghpat, Lake Sevan, Tatev, Yerevan, Echmiadzin, Garni and Geghard. As an orientation, the land programme is currently often around CHF 1,800-2,000 per person when group economics work. International flights are planned separately from the most suitable gateway for the confirmed dates."
          />
          <div className="mt-12">
            <FeaturedTourCard />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Tour Categories"
            title="Sacred heritage, festivals, food, wine and highland routes"
            body="Begin with a travel direction, then refine the route, pace, language and cultural focus around the group that will actually travel."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tourCategories.map((category) => (
              <TourCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Customisation"
            title="What can be personalised?"
            body="Client wishes lead the design, but customisation must work for the whole group. Choose a direction below, read the story, then tell us which details should shape a formed-group proposal or a future shared departure."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-stone">
                    {idea.examples.map((example) => (
                      <li key={example} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex text-sm font-semibold text-wine group-hover:text-pomegranate">
                    Read this idea
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Tell Us Your Interests
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Booking Flow"
            title="How a request becomes a group journey"
            body="The first message does not need to be perfect. A realistic proposal grows through a few clear steps, with local knowledge checking every idea against group size, route, season and availability."
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

      <section className="bg-forest/5 py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionTitle
              eyebrow="Before You Ask"
              title="The useful details to know early"
              body="These are the practical pieces that help us prepare a thoughtful first answer: whether there is already a group, language, size, comfort, route focus and how much customisation is realistic."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {travellerEssentials.map((item) => (
                <article key={item.title} className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                  <h2 className="font-display text-2xl text-forest">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-stone">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Questions"
            title="Good things to clarify before booking"
            body="A group journey can be flexible, but it still needs transparent limits, enough compatible travellers and a clear local operating partner."
          />
          <div className="mt-10 divide-y divide-forest/10 rounded-lg border border-forest/10 bg-paper shadow-soft">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="cursor-pointer list-none font-display text-2xl leading-tight text-forest">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-stone">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Custom Planning"
        title="Have a group, or want to join one?"
        body="Tell us whether you already represent a community or want to register interest as an individual traveller, couple, family or small circle. The first answer can start broad and become more precise together."
        primaryLabel="Request a Proposal"
        primaryHref="/contact"
      />
    </>
  );
}
