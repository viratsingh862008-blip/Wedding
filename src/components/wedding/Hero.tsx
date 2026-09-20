import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import arch from "@/assets/hero-arch.png";
import palace from "@/assets/hero-palace.png";
import sky from "@/assets/hero-sky.jpg";
import { FloatingParticles } from "./FloatingParticles";
import { COUPLE } from "./data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const frontY = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-royal-night"
      aria-label="Wedding invitation"
    >
      {/* Background layer — night sky */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <img
          src={sky}
          alt="Twilight sky over a royal palace garden"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-royal-night/25" />
      </motion.div>

      {/* Midground layer — palace silhouette */}
      <motion.div
        style={{ y: midY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] sm:h-[62%]"
      >
        <img
          src={palace}
          alt="Silhouette of an ornate palace skyline"
          width={1920}
          height={900}
          className="absolute bottom-0 h-full w-full object-cover object-bottom opacity-95"
        />
      </motion.div>

      <FloatingParticles count={16} variant="lantern" />

      {/* Foreground layer — floral arch */}
      <motion.div
        style={{ y: frontY }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[52%] sm:h-[68%]"
      >
        <img
          src={arch}
          alt="Golden floral wedding arch with marigold garlands"
          width={1920}
          height={900}
          className="absolute bottom-0 h-full w-full object-cover object-bottom sm:object-contain"
        />
      </motion.div>

      {/* Hero text */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-x-0 top-[22%] z-30 flex flex-col items-center px-6 text-center"
      >
        <p className="font-body text-xs tracking-[0.5em] text-royal-cream/80 uppercase drop-shadow-[0_2px_6px_oklch(0_0_0/0.7)]">
          Together with their families
        </p>
        <div className="gold-rule my-5 h-px w-40" />
        <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-[0.08em] uppercase drop-shadow-[0_4px_18px_oklch(0_0_0/0.75)] sm:text-7xl lg:text-8xl">
          <span className="text-gold-gradient block">{COUPLE.groom.name}</span>
          <span className="my-2 block font-serif text-2xl italic text-royal-cream/90 sm:text-3xl">
            weds
          </span>
          <span className="text-gold-gradient block">{COUPLE.bride.name}</span>
        </h1>
        <div className="gold-rule my-6 h-px w-40" />
        <p className="font-body text-sm tracking-[0.35em] text-royal-cream uppercase drop-shadow-[0_2px_6px_oklch(0_0_0/0.7)] sm:text-base">
          11 · 12 · 2026 &nbsp;·&nbsp; Jaipur
        </p>
      </motion.div>

      <motion.span
        style={{ opacity: textOpacity }}
        className="absolute inset-x-0 bottom-6 z-30 text-center font-body text-[10px] tracking-[0.4em] text-royal-cream/70 uppercase"
      >
        Scroll
      </motion.span>
    </section>
  );
}
