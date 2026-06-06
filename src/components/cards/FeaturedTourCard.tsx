import Image from "next/image";
import { featuredTour } from "@/data/tours";
import { ButtonLink } from "@/components/ui/Button";
import { RoutePill } from "@/components/ui/RoutePill";

export function FeaturedTourCard() {
  return (
    <article className="grid overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-lift lg:grid-cols-[1.02fr_0.98fr]">
      <div className="relative min-h-[24rem]">
        <Image
          src={featuredTour.image}
          alt={featuredTour.imageAlt}
          fill
          loading="eager"
          fetchPriority="high"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 sm:p-9 lg:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Featured Journey</p>
        <h3 className="mt-4 font-display text-3xl leading-tight text-forest sm:text-4xl">{featuredTour.title}</h3>
        <p className="mt-5 text-base leading-8 text-stone">{featuredTour.overview}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {featuredTour.routeStops.slice(0, 8).map((stop) => (
            <RoutePill key={stop} label={stop} />
          ))}
          <RoutePill label="+ more" className="bg-wine/10 text-wine" />
        </div>
        <ul className="mt-7 grid gap-3 text-sm leading-6 text-stone sm:grid-cols-2">
          {featuredTour.highlights.slice(0, 6).map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/tours/georgia-armenia-12-days" variant="primary">
            View Full Itinerary
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Request This Route
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
