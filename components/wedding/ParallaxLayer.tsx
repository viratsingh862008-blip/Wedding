import { useRef, type ReactNode } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
};

export function ParallaxLayer({ children, className = "", distance = 90 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rawY = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  const y = useSpring(rawY, { stiffness: 80, damping: 26, mass: 0.7 });
  return <motion.div ref={ref} className={className} style={{ y }}>{children}</motion.div>;
}
