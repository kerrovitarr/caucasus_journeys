import type { Metadata } from "next";
import { PageIntro } from "@/components/sections/PageIntro";
import { Container } from "@/components/ui/Container";
import { contactEmail } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy notice for Armenia & Georgia Journeys."
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        title="Privacy"
        body="A plain-language privacy notice for the current preview version of the website. Final provider-specific wording should be reviewed before broad public advertising."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">What data is sent</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                The current contact form prepares an email draft. Personal data is sent only when the visitor sends that
                email. Typical inquiry details may include name, email, phone, group size, preferred language, timing and
                travel interests.
              </p>
            </article>
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-3xl text-forest">Hosting and analytics</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                No custom analytics or advertising tracking is currently configured in this codebase. A hosting provider
                may process technical logs needed to serve the website. Final hosting details should be added after the
                deployment provider is chosen.
              </p>
            </article>
            <article className="rounded-lg border border-forest/10 bg-paper p-6 shadow-soft sm:p-8 lg:col-span-2">
              <h2 className="font-display text-3xl text-forest">Privacy contact</h2>
              <p className="mt-5 text-base leading-8 text-stone">
                For privacy questions or data requests, contact{" "}
                <a className="font-semibold text-wine hover:text-pomegranate" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                .
              </p>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}
