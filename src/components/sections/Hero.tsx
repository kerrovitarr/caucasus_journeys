import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageClassName?: string;
  overlayClassName?: string;
};

export function Hero({
  title,
  subtitle,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  imageClassName,
  overlayClassName = "image-vignette",
}: HeroProps) {
  return (
    <section className="relative min-h-[78svh] overflow-hidden bg-ink text-paper">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className={cn("object-cover", imageClassName)}
      />
      <div className={cn("absolute inset-0", overlayClassName)} />
      <Container className="relative flex min-h-[78svh] items-center py-24 sm:py-28">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-gold">Armenia & Georgia Journeys</p>
          <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-paper/80 sm:text-xl">{subtitle}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} variant="light">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="ghost">
              {secondaryCta.label}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
