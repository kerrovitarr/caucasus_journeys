"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-paper/95 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="group max-w-[13rem] py-3 sm:max-w-none" onClick={() => setIsOpen(false)}>
            <span className="block font-display text-xl leading-none text-forest sm:text-2xl">Armenia & Georgia</span>
            <span className="mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-pomegranate">
              Heritage Journeys
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-semibold text-forest/75 transition hover:bg-forest/5 hover:text-forest",
                    active && "bg-forest/10 text-forest"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/contact" variant="primary" className="px-4">
              Request Offer
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 bg-paper text-forest shadow-sm lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className={cn("h-0.5 rounded-full bg-current transition", isOpen && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 rounded-full bg-current transition", isOpen && "opacity-0")} />
              <span className={cn("h-0.5 rounded-full bg-current transition", isOpen && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-forest/10 py-4 lg:hidden">
            <div className="grid gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-forest hover:bg-forest/5"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink href="/contact" variant="primary" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
                Request an Offer
              </ButtonLink>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
