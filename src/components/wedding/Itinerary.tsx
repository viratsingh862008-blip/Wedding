import { motion } from "motion/react";

import { EVENTS, mapUrl } from "./data";

export function Itinerary() {
  return (
    <section
      id="itinerary"
      className="relative overflow-hidden bg-royal-parchment py-24 sm:py-32"
    >
      {/* Textured parchment pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.42 0.19 349) 1px, transparent 1.4px), radial-gradient(oklch(0.79 0.14 85) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px, 28px 28px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <p className="font-body text-xs tracking-[0.45em] text-royal-magenta uppercase">
            Save the date
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-wide text-royal-magenta-deep sm:text-5xl">
            The Celebrations
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-48" />
        </motion.header>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <motion.article
              key={event.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.035 }}
              className="group relative border border-royal-gold/60 bg-royal-cream/45 p-8 text-center backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_25px_60px_-30px_oklch(0.42_0.19_349/0.85)]"
              style={{ borderRadius: "48% 48% 18px 18px / 22% 22% 5% 5%" }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-2 border border-royal-gold/35"
                style={{ borderRadius: "48% 48% 14px 14px / 22% 22% 4% 4%" }}
              />
              <h3 className="font-display text-2xl font-bold tracking-[0.14em] text-royal-magenta-deep uppercase">
                {event.name}
              </h3>
              <div className="gold-rule mx-auto my-4 h-px w-24" />
              <p className="font-serif text-lg text-royal-emerald">{event.date}</p>
              <p className="mt-1 font-body text-sm tracking-wide text-royal-magenta-deep/80">
                {event.time}
              </p>
              <p className="mt-4 font-body text-sm font-bold text-royal-magenta-deep">
                {event.venue}
              </p>
              <p className="mt-1 font-body text-xs text-royal-magenta-deep/70 italic">
                {event.note}
              </p>
              <a
                href={mapUrl(event.address)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block font-body text-xs tracking-[0.25em] text-royal-magenta uppercase underline decoration-royal-gold underline-offset-4 transition-colors hover:text-royal-emerald"
              >
                See the route
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
