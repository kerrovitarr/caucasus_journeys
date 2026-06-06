import Image from "next/image";
import Link from "next/link";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items: GalleryItem[];
};

const aspectClasses: Record<GalleryItem["aspect"], string> = {
  tall: "aspect-[4/5]",
  wide: "aspect-[5/3]",
  square: "aspect-square"
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="masonry">
      {items.map((item) => (
        <figure
          key={`${item.title}-${item.category}`}
          className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-soft"
        >
          <div className={cn("relative overflow-hidden", aspectClasses[item.aspect])}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              unoptimized
              sizes="(min-width: 1024px) 33vw, 100vw"
              className={cn("object-cover", item.imagePosition)}
            />
          </div>
          <figcaption className="grid gap-3 p-4">
            <div className="flex items-center justify-between gap-4">
              <span className="font-display text-xl text-forest">{item.title}</span>
              <span className="shrink-0 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest">{item.category}</span>
            </div>
            {item.storyHref ? (
              <Link href={item.storyHref} className="text-sm font-semibold text-wine transition hover:text-pomegranate">
                {item.storyLabel ?? "Read story"}
              </Link>
            ) : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
