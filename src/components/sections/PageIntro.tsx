import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageIntro({ eyebrow, title, body, primaryCta, secondaryCta }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden bg-forest py-24 text-paper sm:py-28">
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full bg-[linear-gradient(135deg,transparent_0_44%,#c39b55_45%_46%,transparent_47%_100%)] bg-[length:26px_26px]" />
      </div>
      <Container className="relative">
        <Badge className="border-gold/60 bg-paper/10 text-paper">{eyebrow}</Badge>
        <h1 className="mt-8 max-w-4xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-paper/80">{body}</p>
        {primaryCta ? (
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryCta.href} variant="light">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="ghost">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
