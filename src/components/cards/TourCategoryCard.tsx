import Image from "next/image";
import type { TourCategory } from "@/data/tours";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

type TourCategoryCardProps = {
  category: TourCategory;
};

export function TourCategoryCard({ category }: TourCategoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:p-7">
        <Badge>Route direction</Badge>
        <h3 className="mt-5 font-display text-2xl leading-tight text-forest">{category.title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone">{category.description}</p>
        <p className="mt-5 text-sm font-semibold text-forest">Ideal for: {category.idealAudience}</p>
        <ul className="mt-5 grid gap-2 text-sm leading-6 text-stone">
          {category.sampleHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <ButtonLink href="/contact" variant="secondary" className="mt-6">
          {category.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
