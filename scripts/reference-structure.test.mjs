import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const app = readFileSync("App.tsx", "utf8");
const entryApp = readFileSync("src/App.tsx", "utf8");
const entryCss = readFileSync("src/index.css", "utf8");
const css = readFileSync("index.css", "utf8");

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

console.log("reference-structure: PASS");
