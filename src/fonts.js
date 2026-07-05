// ═══ TCP Design System — Font Loader ═══
// Injects the Google Fonts stylesheet ONCE, idempotently. Replaces the per-app
// `<style>@import ...</style>` blocks so every app pulls the same webfonts.
//
// Usage (once, near app entry):
//   import { loadFonts } from '@tcp/design-system';
//   loadFonts();                       // all TCP families
//   loadFonts({ families: ['DM Sans'] }); // subset, if you want to trim

const FAMILY_SPECS = {
  "DM Sans": "DM+Sans:wght@300;400;500;600;700;800",
  "Archivo Black": "Archivo+Black",
  "DM Mono": "DM+Mono:wght@400;500",
  "Press Start 2P": "Press+Start+2P",
};

const ALL = Object.keys(FAMILY_SPECS);

export function loadFonts({ families = ALL } = {}) {
  if (typeof document === "undefined") return; // SSR / non-browser: no-op
  const key = families.slice().sort().join("|");
  const marker = `[data-tcp-fonts="${key}"]`;
  if (document.head.querySelector(marker)) return; // already loaded this exact set

  const specs = families
    .filter((f) => FAMILY_SPECS[f])
    .map((f) => `family=${FAMILY_SPECS[f]}`)
    .join("&");
  if (!specs) return;

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = `https://fonts.googleapis.com/css2?${specs}&display=swap`;
  link.setAttribute("data-tcp-fonts", key);
  document.head.appendChild(link);
}

export default loadFonts;
