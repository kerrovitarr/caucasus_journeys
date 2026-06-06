import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: CTASectionProps) {
  return (
    <section className="bg-wine py-20 text-paper sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{eyebrow}</p> : null}
            <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
            {body ? <p className="mt-5 text-base leading-8 text-paper/80 sm:text-lg">{body}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <ButtonLink href={primaryHref} variant="light">
              {primaryLabel}
            </ButtonLink>
            {secondaryLabel && secondaryHref ? (
              <ButtonLink href={secondaryHref} variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
