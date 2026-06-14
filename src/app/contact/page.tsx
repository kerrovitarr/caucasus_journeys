import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageIntro } from "@/components/sections/PageIntro";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Container } from "@/components/ui/Container";
import { contactEmail } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a short request for an Armenia, Georgia or Armenia plus Georgia journey."
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Send a short request"
        body="Choose country, length, style and interests. The form opens a prepared email, so you do not need to write a long travel brief."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr]">
            <div>
              <SectionTitle
                eyebrow="Fast path"
                title="Enough for a first answer"
                body="A private trip can be planned even for one person. A forming group request can also be registered. The difference is mainly price, flexibility and whether costs are shared."
              />
              <div className="mt-8 rounded-lg border border-forest/10 bg-paper p-6 shadow-soft">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-pomegranate">Direct email</p>
                <p className="mt-4 text-sm leading-7 text-stone">
                  Prefer to write normally? Use{" "}
                  <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                    {contactEmail}
                  </a>
                  . Final route, price and booking steps are confirmed with Arminius in Armenia.
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
