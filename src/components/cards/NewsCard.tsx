import Image from "next/image";
import Link from "next/link";
import type { InspirationArticle } from "@/data/inspiration";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type NewsCardProps = {
  article: InspirationArticle;
};

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article
      id={article.slug}
      className="group overflow-hidden rounded-lg border border-forest/10 bg-paper shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className={cn("object-cover transition duration-700 group-hover:scale-105", article.imagePosition)}
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{article.category}</Badge>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">{article.readTime}</span>
        </div>
        <h3 className="mt-5 font-display text-2xl leading-tight text-forest">{article.title}</h3>
        <p className="mt-4 text-sm leading-7 text-stone">{article.excerpt}</p>
        <Link
          href={`/inspiration/${article.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-wine transition hover:text-pomegranate"
        >
          Read story
        </Link>
      </div>
    </article>
  );
}
