import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";

import { WEDDING_DATE } from "./data";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function diff(target: number): Parts {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const target = useMemo(() => new Date(WEDDING_DATE).getTime(), []);
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        top: `${(i * 37) % 100}%`,
        left: `${(i * 61) % 100}%`,
        size: 1 + ((i * 7) % 3),
        duration: 2.5 + ((i * 3) % 5),
        delay: -((i * 1.3) % 6),
      })),
    [],
  );

  const cells: [string, number][] = parts
    ? [
        ["Days", parts.days],
        ["Hours", parts.hours],
        ["Minutes", parts.minutes],
        ["Seconds", parts.seconds],
      ]
    : [
        ["Days", 0],
        ["Hours", 0],
        ["Minutes", 0],
        ["Seconds", 0],
      ];

  return (
    <section className="relative overflow-hidden bg-royal-night py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="twinkle-star absolute rounded-full bg-royal-cream"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        <p className="font-body text-xs tracking-[0.45em] text-royal-gold uppercase">
          The wait begins
        </p>
        <h2 className="text-gold-gradient mt-3 font-display text-4xl font-bold tracking-wide sm:text-5xl">
          Counting Down
        </h2>
        <div className="gold-rule mx-auto mt-5 h-px w-48" />

        <div
          className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
          aria-live="polite"
          suppressHydrationWarning
        >
          {cells.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-royal-gold/45 bg-royal-cream/5 px-4 py-7 backdrop-blur-sm"
            >
              <div
                suppressHydrationWarning
                className="text-gold-gradient font-display text-4xl font-bold tabular-nums sm:text-5xl"
              >
                {label === "Days" ? value : pad(value)}
              </div>
              <div className="mt-2 font-body text-[10px] tracking-[0.35em] text-royal-cream/70 uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 font-serif text-xl text-royal-cream/85 italic">
          &ldquo;Two souls, one ceremony, a lifetime of festivals.&rdquo;
        </p>
      </motion.div>
    </section>
  );
}
