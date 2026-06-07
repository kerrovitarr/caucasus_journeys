import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms and planning model for Armenia & Georgia Journeys."
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Terms"
        body="A plain-language summary of the current planning and partner-confirmation model. Final legal terms should be reviewed before broad public advertising."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">Website information</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                The website presents travel inspiration, route examples and inquiry paths. Published prices and
                programmes are orientation only until a final written offer is prepared and confirmed.
              </p>
            </article>
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">Current partnership model</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                Birkin Travel Advisory is the first contact for route questions. Arminius in Armenia prepares the final
                offer, receives payments, issues travel documents and carries local coordination responsibility unless a
                different written arrangement is introduced.
              </p>
            </article>
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8 lg:col-span-2">
              <h2 className="font-display text-3xl text-forest">Before booking</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                Final terms should include cancellation rules, payment deadlines, insurance recommendations, liability,
                passport or visa responsibilities, health and mobility requirements, applicable law and the precise role
                of each partner. Travellers should review those final documents before committing.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
