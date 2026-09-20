import { useMemo } from "react";

type Props = {
  count?: number;
  variant?: "lantern" | "petal";
};

/** Continuously rising lanterns / petals driven by CSS keyframes. */
export function FloatingParticles({ count = 14, variant = "lantern" }: Props) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = seed / 233280;
        return {
          left: `${(r * 100 + i * 7) % 100}%`,
          size: variant === "lantern" ? 10 + ((i * 5) % 16) : 7 + ((i * 3) % 9),
          duration: 14 + ((i * 3.5) % 16),
          delay: -((i * 2.7) % 18),
          drift: `${((i % 5) - 2) * 45}px`,
        };
      }),
    [count, variant],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((p, i) => (
        <span
          key={i}
          className="float-particle absolute bottom-0 block"
          style={{
            left: p.left,
            width: p.size,
            height: variant === "lantern" ? p.size * 1.35 : p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ["--drift" as string]: p.drift,
          }}
        >
          {variant === "lantern" ? (
            <span
              className="block h-full w-full rounded-[45%_45%_50%_50%/60%_60%_40%_40%]"
              style={{
                background:
                  "radial-gradient(circle at 50% 35%, oklch(0.95 0.09 88), oklch(0.79 0.14 70) 60%, oklch(0.6 0.14 45))",
                boxShadow: "0 0 18px 4px oklch(0.79 0.14 85 / 0.55)",
              }}
            />
          ) : (
            <span
              className="block h-full w-full rounded-[60%_40%_60%_40%/50%_60%_40%_50%]"
              style={{
                background:
                  "linear-gradient(140deg, oklch(0.72 0.16 350), oklch(0.5 0.19 349))",
                opacity: 0.75,
              }}
            />
          )}
        </span>
      ))}
    </div>
  );
}
