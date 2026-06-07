import Link from "next/link";
import { contactEmail, legalNavigation, mainNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-forest py-14 text-paper">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-3xl">Armenia & Georgia Journeys</p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-paper/70">
              A personal first-contact point by Birkin Travel Advisory for group journeys to Armenia and Georgia,
              prepared with Ruzanna's Armenian agency Arminius.
            </p>
            <a className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-paper" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Explore</p>
            <div className="mt-4 grid gap-2">
              {mainNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-paper/70 hover:text-paper">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Legal</p>
            <div className="mt-4 grid gap-2">
              {legalNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-paper/70 hover:text-paper">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-paper/60">
              Working orientation: around CHF 1,800-2,000 per person for the sample land programme when group economics
              work. Final price, booking, payments and travel documents are confirmed through Arminius.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
