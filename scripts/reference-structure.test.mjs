import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const app = readFileSync("src/App.tsx", "utf8");
const css = readFileSync("src/index.css", "utf8");

const referenceAssets = [
  "ctlwo5LpuBk9eskYOT9Z2MD8wso",
  "TUkRvFIUDwblbb4eewkBlJzZwJw",
  "vo85LJWiG7KY5sTcDsBhG1aEc",
  "Vmh2DwpF7PAgb69W6NahdCwGidA",
  "hUKMKAtrpqFCDTXl35Y5yuIjRw",
  "Zrnq96rxcNCLdk4Yaz94Dup5Q",
  "qTlCAkdnbuZVEx4RAWSlgsGHX0",
  "jv9Y5c65dupWuUvOrLUvDm6o",
  "CAJYZSTyHrLw4D8Gxv3UGjFaMg",
  "ELVgHUKqtqAl9gf1nwbYhSeTg",
];

for (const asset of referenceAssets) {
  assert.ok(app.includes(asset), `missing reference asset: ${asset}`);
}

assert.ok(app.includes("ParallaxLayer"), "reference composition must retain scroll parallax");
assert.ok(app.includes("29th Aug 2026"), "reference copy should remain intact");
assert.ok(css.includes(".referenceCanvas"), "reference layout canvas is missing");
assert.ok(css.includes("translate3d"), "reference parallax layer should use GPU-friendly transforms");
assert.ok(!app.includes("locationBg"), "invented location section should not remain");
assert.ok(!app.includes("countdownBg"), "invented countdown artwork should not remain");
assert.ok(app.includes("x: 26, y: 38.3") && app.includes("x: 74, y: 38.3"), "hero event row 1 must match reference position");
assert.ok(app.includes("x: 26, y: 48.9") && app.includes("x: 74, y: 48.9"), "hero event row 2 must match reference position");
assert.ok(app.includes("x: 26, y: 59.5") && app.includes("x: 74, y: 59.5"), "hero event row 3 must match reference position");
assert.ok((app.match(/images\.unsplash\.com\/photo-/g) || []).length >= 10, "timeline photo ring must contain the full reference ring");
assert.ok(css.includes("isolation:isolate"), "major sections must isolate their stacking contexts");
assert.ok(css.includes("contain:paint"), "major sections must contain painted parallax layers");

console.log("reference-structure: PASS");

// Segment geometry regression guard: the reference is an overlapping absolute canvas,
// not four sequential flow sections. These are the measured desktop anchors from the
// rendered reference DOM; mobile uses its own compressed canvas in index.css.
assert.ok(css.includes(".referencePage{position:relative"), "reference page must own the coordinate canvas");
assert.ok(css.includes(".referenceHero{isolation:isolate;contain:paint;position:absolute;top:0"), "hero must anchor at the canvas origin");
assert.ok(css.includes(".referenceMandap{top:2228px;height:4380px"), "timeline/mandap segment must overlap from the reference anchor");
assert.ok(css.includes(".referenceGallery{top:4642px;height:2157px"), "gallery segment must use the reference anchor");
assert.ok(css.includes(".referenceTimeline{top:8529px;height:2294px"), "final segment must use the reference anchor");
assert.ok(css.includes("height:10823px"), "desktop reference canvas must reserve the overlapping composition height");
assert.ok(css.includes("@media (max-width:699px)"), "mobile composition needs its own segment geometry");
