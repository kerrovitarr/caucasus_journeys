import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-wine text-paper shadow-soft hover:bg-pomegranate focus-visible:outline-wine",
  secondary: "border border-wine/30 bg-paper text-wine hover:border-wine hover:bg-ivory focus-visible:outline-wine",
  light: "bg-paper text-forest shadow-soft hover:bg-ivory focus-visible:outline-paper",
  ghost: "border border-paper/40 text-paper hover:border-paper hover:bg-paper/10 focus-visible:outline-paper"
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export function ButtonLink({ children, href, variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(base, variants[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
