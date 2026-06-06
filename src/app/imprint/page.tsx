import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { contactEmail } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Imprint",
  description: "Contact and publisher information for Armenia & Georgia Journeys."
};

export default function ImprintPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Imprint"
        body="Contact and publisher information for Armenia & Georgia Journeys. Final company address and jurisdiction details should be confirmed before a broad public launch."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">Publisher</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                Armenia & Georgia Journeys is presented by Birkin Travel Advisory as a first-contact point for cultural
                group journeys to Armenia and Georgia.
              </p>
            </article>
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">Contact</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                For route questions, website questions or legal correspondence, contact{" "}
                <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                . Full legal address and responsible-person details should be added before public advertising begins.
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
