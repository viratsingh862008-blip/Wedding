# Royal Indian Wedding Invitation — Single Page

A one-page, scroll-driven wedding invite with a layered parallax hero, event cards, couple portraits, and a live countdown. Vintage royal look: deep magenta, rich gold, emerald/teal, cream parchment.

## What gets built

**Hero (full screen)**
- Three stacked image layers that move at different speeds as you scroll: sky background (slowest), palace skyline (medium), foreground gates/floral arch (fastest), creating depth.
- Glowing lanterns and petals drifting upward continuously.
- Large centered names "VISHU WEDS KAVYA" with the date, fading out as you scroll past.
- Placeholder images from Unsplash so they can be swapped for your own transparent PNGs later.

**Save the Date / Itinerary**
- Grid of event cards (Mehendi, Haldi, Sangeet, Cocktail, Wedding, Reception) over a subtle parchment pattern.
- Arched, gold-bordered glass cards with event name, date, time, venue, and a "See the route" link that opens Google Maps.
- Gentle lift and glow on hover; single column on phones.

**Meet the Bride & Groom**
- Two portraits inside ornate arched gold frames, with short intros.
- They fade in and slide up when scrolled into view.

**Countdown & Footer**
- Dark starlit night section with a live Days : Hours : Minutes : Seconds counter to the wedding date.
- Footer with a closing blessing line and family names.

## Technical notes

- New page at `src/routes/index.tsx` (replaces the placeholder), split into components under `src/components/wedding/`.
- Framer Motion (`motion`) added: `useScroll` + `useTransform` for hero layers (Y 0→-100 / -300 / -600, hero text opacity 1→0), `whileInView` for section reveals.
- Fonts: Cinzel + Playfair Display + Lato loaded via a `<link>` in the root route; registered as theme tokens.
- Colors, gold gradients, and shadows added as semantic tokens in `src/styles.css`; floating lantern/petal motion as CSS keyframes for performance.
- Countdown runs client-side on a 1s interval, hydration-safe.
- All images use fixed aspect ratios with `object-cover`/`object-contain`; layout stacks vertically on mobile.
- Page title, description, and social preview tags set for the invite.

## Placeholder content

Names, dates, venues, and portrait photos will be filled with sample values (wedding date set to a future date). Send me the real details and I'll swap them in.
