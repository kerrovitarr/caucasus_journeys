import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { imageCredits } from "@/data/imageCredits";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A local-image gallery for Armenia Georgia cultural travel: monasteries, mountains, cities, food, wine, people and traditions."
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="A first look at Armenia and Georgia"
        body="Monasteries above valleys, Lake Sevan light, old city rooftops, festivals, wine cellars, coffee cups, family tables and hands-on craft traditions. Each image points toward a route story or experience theme."
        primaryCta={{ label: "Plan Around These Images", href: "/contact" }}
        secondaryCta={{ label: "Read Inspiration", href: "/inspiration" }}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Visual Library"
            title="Monasteries, mountains, cities, festivals, food and craft"
            body="Warm documentary imagery keeps the focus on real places, hospitality and cultural texture. Every route can combine several of these worlds depending on traveller interests."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {galleryCategories.map((category) => (
              <Badge key={category}>{category}</Badge>
            ))}
          </div>
          <div className="mt-12">
            <GalleryGrid items={galleryItems} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="Image Credits"
            title="A transparent photo library"
            body="The current public gallery uses properly sourced real photography from Pexels, Unsplash and Wikimedia Commons. Attribution is kept visible here, and the collection can gradually shift toward your own images from Armenia and Georgia."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {imageCredits.map((credit) => (
              <article key={credit.id} className="rounded-lg border border-forest/10 bg-ivory p-6">
                <Badge>{credit.platform}</Badge>
                <h2 className="mt-5 font-display text-2xl leading-tight text-forest">{credit.title}</h2>
                <p className="mt-3 text-sm leading-7 text-stone">Photograph by {credit.photographer}.</p>
                <div className="mt-5 flex flex-wrap gap-4 border-t border-forest/10 pt-4 text-sm font-semibold">
                  <a href={credit.sourceUrl} target="_blank" rel="noreferrer" className="text-wine hover:text-pomegranate">
                    Source
                  </a>
                  <a href={credit.licenseUrl} target="_blank" rel="noreferrer" className="text-wine hover:text-pomegranate">
                    License
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Visual Story"
        title="Need a visual set for a proposal?"
        body="The same visual direction can support a parish presentation, club proposal, forming-group announcement or association registration page."
        primaryLabel="Discuss Visual Needs"
        primaryHref="/contact"
      />
    </>
  );
}
