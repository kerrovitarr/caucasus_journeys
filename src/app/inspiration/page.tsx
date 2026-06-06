import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { NewsCard } from "@/components/cards/NewsCard";
import { CTASection } from "@/components/sections/CTASection";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { inspirationArticles } from "@/data/inspiration";
import { customJourneyIdeas, customisationThemes } from "@/data/travelStyles";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Inspiration",
  description:
    "Inspiration articles for Armenia Georgia cultural group travel, ateliers, festivals, sacred music, wine traditions, food workshops and custom route themes."
};

export default function InspirationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Inspiration"
        title="Ideas for a journey that feels like yours"
        body="Articles and seasonal notes about sacred heritage, cities, ateliers, festivals, wine, music, food and cultural travel in Armenia and Georgia."
        primaryCta={{ label: "Explore Tour Options", href: "/tours" }}
        secondaryCta={{ label: "Request a Theme", href: "/contact" }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Articles"
            title="Culture, wine, mountains and sacred heritage"
            body="A thoughtful reading room for travellers preparing to discover the cultural depth of Armenia and Georgia."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inspirationArticles.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionTitle
              eyebrow="Route Anchors"
              title="Any theme can become the centre of a group trip"
              body="A journey can be built around sacred sites, food, wine, design, textile, clothing, music, family history or simply a slower rhythm. Some ideas depend on season and availability, but the planning starts with what the group actually cares about."
            />
            <div className="flex flex-wrap gap-3">
              {customisationThemes.map((theme) => (
                <Badge key={theme}>{theme}</Badge>
              ))}
            </div>
          </div>
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
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Planning Context"
        title="Would one of these themes make a good journey?"
        body="Wine hospitality, sacred music, festivals, ateliers, food workshops and mountain heritage can all become anchors for a formed-group proposal or a future shared departure."
        primaryLabel="Plan a Custom Journey"
        primaryHref="/contact"
      />
    </>
  );
}
