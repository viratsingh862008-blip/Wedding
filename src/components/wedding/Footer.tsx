import { COUPLE } from "./data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-royal-magenta-deep py-16 text-center">
      <div className="gold-rule absolute inset-x-0 top-0 h-px" />
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-gold-gradient font-display text-3xl font-bold tracking-[0.2em] uppercase">
          {COUPLE.groom.name} &amp; {COUPLE.bride.name}
        </h2>
        <p className="mt-4 font-body text-sm leading-relaxed text-royal-cream/80">
          With the blessings of the Rathore &amp; Menon families, we request the
          pleasure of your company in Jaipur, this December.
        </p>
        <p className="mt-8 font-body text-[10px] tracking-[0.35em] text-royal-cream/55 uppercase">
          RSVP · +91 98XXX XXXXX · hello@vishuwedskavya.in
        </p>
      </div>
    </footer>
  );
}
