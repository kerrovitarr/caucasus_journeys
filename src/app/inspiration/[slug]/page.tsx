import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { inspirationArticles } from "@/data/inspiration";
import { cn } from "@/lib/utils";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function findArticle(slug: string) {
  return inspirationArticles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return inspirationArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    return {
      title: "Inspiration"
    };
  }

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function InspirationArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = findArticle(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = inspirationArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <>
      <section className="bg-paper py-16 sm:py-20">
        <Container>
          <div className="max-w-4xl">
            <Link href="/inspiration" className="text-sm font-semibold text-wine transition hover:text-pomegranate">
              Back to inspiration
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge>{article.category}</Badge>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-stone">{article.readTime}</span>
            </div>
            <h1 className="mt-6 font-display text-4xl leading-tight text-forest sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone">{article.intro}</p>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="relative min-h-[24rem] overflow-hidden rounded-lg border border-forest/10 shadow-lift sm:min-h-[32rem]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="100vw"
              className={cn("object-cover", article.imagePosition)}
            />
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(18rem,0.22fr)] lg:items-start">
            <article className="grid gap-12">
              {article.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">{section.title}</h2>
                  <div className="mt-5 grid gap-5 text-base leading-8 text-stone">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
              <h2 className="font-display text-2xl text-forest">Useful for</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.usefulFor.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
              <div className="mt-8 border-t border-forest/10 pt-6">
                <h3 className="font-display text-2xl text-forest">Route ideas</h3>
                <ul className="mt-4 grid gap-3 text-sm leading-7 text-stone">
                  {article.routeIdeas.map((idea) => (
                    <li key={idea} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{idea}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <ButtonLink href="/contact" variant="primary" className="mt-8 w-full">
                Build This Into a Trip
              </ButtonLink>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <Container>
          <SectionTitle
            eyebrow="More to Read"
            title="Other ways to shape the journey"
            body="A good route often begins with one strong interest, then grows into a complete travel rhythm."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                href={`/inspiration/${related.slug}`}
                className="rounded-lg border border-forest/10 bg-ivory p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
              >
                <Badge>{related.category}</Badge>
                <h3 className="mt-5 font-display text-2xl leading-tight text-forest">{related.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Inspired Route"
        title="Would you like this theme inside your journey?"
        body="Tell us what caught your attention, who is travelling and when. We can turn one story into a realistic Armenia and Georgia travel proposal."
        primaryLabel="Request a Proposal"
        primaryHref="/contact"
      />
    </>
  );
}
