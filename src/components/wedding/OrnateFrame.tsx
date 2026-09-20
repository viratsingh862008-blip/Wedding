import type { ReactNode } from "react";

/** Arched, gold-filigree portrait frame. */
export function OrnateFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="relative overflow-hidden border-2 border-royal-gold/70 bg-royal-magenta-deep p-2 shadow-[0_20px_60px_-25px_oklch(0.79_0.14_85/0.6)]"
        style={{ borderRadius: "50% 50% 12px 12px / 32% 32% 4% 4%" }}
      >
        <div
          className="relative overflow-hidden border border-royal-gold/50"
          style={{ borderRadius: "50% 50% 8px 8px / 32% 32% 3% 3%" }}
        >
          <div className="aspect-[4/5] w-full">{children}</div>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 200 40"
        className="mx-auto -mt-3 h-8 w-40 text-royal-gold"
        fill="none"
      >
        <path
          d="M10 20 H70 M130 20 H190"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M100 6c9 6 14 10 14 15 0 6-6 11-14 13-8-2-14-7-14-13 0-5 5-9 14-15Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="76" cy="20" r="3" fill="currentColor" />
        <circle cx="124" cy="20" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}
