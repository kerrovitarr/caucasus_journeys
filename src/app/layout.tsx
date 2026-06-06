import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: {
    default: "Armenia & Georgia Journeys",
    template: "%s | Armenia & Georgia Journeys"
  },
  description:
    "Curated group journeys to Armenia and Georgia with an experienced Armenian travel partner: sacred heritage, ancient culture, festivals, wine, landscapes, ateliers and hospitality.",
  keywords: [
    "Armenia Georgia tours",
    "cultural tours Armenia Georgia",
    "pilgrimage Armenia Georgia",
    "forming group Armenia Georgia travel",
    "Armenia group tours",
    "Georgia Armenia cultural journey",
    "Armenia Georgia cultural travel",
    "Armenia Georgia heritage routes"
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
