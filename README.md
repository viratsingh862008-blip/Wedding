# Royal Rhapsody Invites

Act as an expert Frontend Developer specializing in React, Tailwind CSS, and Framer Motion. Build a highly interactive, single-page Indian wedding invitation website featuring a multi-layered parallax scrolling hero section and elegant event detail cards.

### 1. Visual Theme & Typography

*   **Color Palette:** Vintage royal aesthetic using deep magentas, rich golds, teal/emerald greens, and textured cream/parchment backgrounds.

*   **Typography:** Use a classic, elegant Serif font (like 'Playfair Display' or 'Cinzel') for headings and a clean Sans-serif (like 'Lato') for secondary text. Use gold or cream text colors with subtle drop shadows for high contrast over images.

### 2. Core Sections & Architecture

**Section A: The Parallax Hero (The most critical component)**

*   Implement a full-screen (`h-screen`) hero section using Framer Motion's `useScroll` and `useTransform` hooks to create a 3D depth effect.

*   Require three distinct absolute-positioned image layers:

    1.  `Background Layer` (e.g., Night sky or sunset). Moves up slightly on scroll (Y: 0 to -100px).

    2.  `Midground Layer` (e.g., Palace, temple, or mountains with a transparent background). Moves up moderately on scroll (Y: 0 to -300px).

    3.  `Foreground Layer` (e.g., Vintage car, floral arch, or gates with a transparent background). Moves up the fastest on scroll (Y: 0 to -600px).

*   **Overlay Elements:** Add floating elements (like glowing paper lanterns or flower petals) that continuously float upwards across the screen using infinite CSS keyframe animations.

*   **Hero Text:** Centered large text displaying the couples' names (e.g., "VISHU WEDS KAVYA") that fades out (Opacity 1 to 0) as the user scrolls past the hero section.

**Section B: Save The Date & Event Itinerary**

*   Create a grid layout displaying 4-6 event cards (Mehendi, Haldi, Cocktail, Wedding).

*   **Card Design:** Ornate, pill-shaped or arched borders using SVG overlays or border-radius manipulation. Use a glassmorphism effect (semi-transparent backgrounds with backdrop blur) over a textured background pattern.

*   **Content:** Include Event Name, Date, Venue, Time, and a small "See the route" text link. Apply a subtle hover scaling effect to the cards.

**Section C: Meet the Bride & Groom**

*   A section featuring two side-by-side or stacked portrait images framed inside ornate, decorative SVG borders (similar to traditional royal portraits). 

*   Add a subtle fade-in and slide-up animation when this section scrolls into the viewport using Framer Motion's `whileInView`.

**Section D: Countdown Timer & Footer**

*   Implement a live digital countdown timer (Days : Hours : Minutes : Seconds) tracking a future wedding date.

*   Use a dark, starlit background for this section to contrast with the earlier bright sections.

### 3. Technical Requirements

*   Ensure all image containers maintain their aspect ratio and use `object-cover` or `object-contain` where appropriate to prevent distortion across mobile and desktop breakpoints.

*   The entire page must be responsive, defaulting to a stacked vertical layout on mobile devices.

*   Use placeholder image URLs (e.g., via Unsplash source) for the background, midground, and foreground layers so I can easily swap them out with my own transparent PNGs later.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vintage-dream-wedding.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a80214b5-dc44-4e47-b760-059b7284b88e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
