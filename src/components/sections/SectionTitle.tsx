import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, body, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl leading-tight text-forest sm:text-4xl lg:text-5xl",
          align === "left" && "ornament-divider"
        )}
      >
        {title}
      </h2>
      {body ? <p className="mt-6 text-base leading-8 text-stone sm:text-lg">{body}</p> : null}
    </div>
  );
}
