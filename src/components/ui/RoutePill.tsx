import { cn } from "@/lib/utils";

type RoutePillProps = {
  label: string;
  className?: string;
};

export function RoutePill({ label, className }: RoutePillProps) {
  return (
    <span className={cn("inline-flex rounded-full bg-forest/10 px-3 py-1 text-sm font-medium text-forest", className)}>
      {label}
    </span>
  );
}
