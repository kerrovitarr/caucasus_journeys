import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Container } from "@/components/ui/Container";
import { contactEmail } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request information for Armenia Georgia group journeys through Birkin Travel Advisory."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Request information"
        body="Share whether you already have a group or would like to join a forming one, plus your preferred language, timing and interests. The form opens a prepared email so your request can be sent directly."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <SectionTitle
                eyebrow="Lead Request"
                title="A clear first step"
                body="Use this form for formed communities, parishes, associations, senior groups and cultural clubs, or as an individual traveller, couple, family or small circle registering interest in a future shared departure. You do not need to know the perfect route yet."
              />
              <div className="mt-8 rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Partner Confirmation</p>
                <p className="mt-4 text-sm leading-7 text-stone">
                  Birkin Travel Advisory helps clarify the first route questions. Final booking, payments and travel
                  documents are prepared with Arminius in Armenia.
                </p>
              </div>
              <div className="mt-5 rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Direct Contact</p>
                <p className="mt-4 text-sm leading-7 text-stone">
                  Or contact us directly:{" "}
                  <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
