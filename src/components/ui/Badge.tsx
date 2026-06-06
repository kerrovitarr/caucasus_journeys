import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase text-forest",
        className
      )}
    >
      {children}
    </span>
  );
}
