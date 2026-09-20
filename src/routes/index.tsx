import { createFileRoute } from "@tanstack/react-router";

import { Couple } from "@/components/wedding/Couple";
import { Countdown } from "@/components/wedding/Countdown";
import { Footer } from "@/components/wedding/Footer";
import { Hero } from "@/components/wedding/Hero";
import { Itinerary } from "@/components/wedding/Itinerary";

const title = "Vishu weds Kavya · 11 December 2026, Jaipur";
const description =
  "A royal Indian wedding invitation for Vishu & Kavya — Mehendi, Haldi, Sangeet, Cocktail, Wedding and Reception details, venues and a live countdown.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-royal-parchment">
      <Hero />
      <Itinerary />
      <Couple />
      <Countdown />
      <Footer />
    </main>
  );
}
