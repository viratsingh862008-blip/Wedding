import { motion } from "motion/react";

import bride from "@/assets/bride.jpg";
import groom from "@/assets/groom.jpg";
import { OrnateFrame } from "./OrnateFrame";
import { COUPLE } from "./data";

const people = [
  { ...COUPLE.groom, img: groom, label: "The Groom" },
  { ...COUPLE.bride, img: bride, label: "The Bride" },
];

export function Couple() {
  return (
    <section
      id="couple"
      className="relative overflow-hidden bg-royal-emerald py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, oklch(0.79 0.14 85 / 0.25) 0 1px, transparent 1px 22px)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="font-body text-xs tracking-[0.45em] text-royal-gold uppercase">
            Meet the couple
          </p>
          <h2 className="text-gold-gradient mt-3 font-display text-4xl font-bold tracking-wide sm:text-5xl">
            Bride &amp; Groom
          </h2>
          <div className="gold-rule mx-auto mt-5 h-px w-48" />
        </motion.header>

        <div className="grid gap-16 md:grid-cols-2">
          {people.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="text-center"
            >
              <OrnateFrame>
                <img
                  src={person.img}
                  alt={`Portrait of ${person.full}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </OrnateFrame>
              <p className="mt-6 font-body text-[11px] tracking-[0.4em] text-royal-gold uppercase">
                {person.label}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-royal-cream">{person.full}</h3>
              <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-royal-cream/80">
                {person.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
