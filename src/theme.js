// ═══ TCP Design System — Theme Palettes ═══
// Three palettes, all sharing the same brand DNA (solYellow / aquatic / cream):
//   LIGHT, DARK  → the "clean" layer (default, from tcp-expenses). Same keys, so
//                  an app can `let C = mode === 'dark' ? DARK : LIGHT` with zero
//                  call-site changes.
//   ARCADE       → the retro pixel-art layer (from the hub / command center).
//
// Values are copied VERBATIM from the two apps so migration is pixel-identical.
// The `C` object shape differs between clean and arcade on purpose — never force
// one shape onto the other; each layer consumes its own palette.

// ── Clean layer (tcp-expenses) ──────────────────────────────────
export const LIGHT = {
  deepSpace: "#14141C", stellarDust: "#FFFBF1", solYellow: "#FFB259", sunset: "#FFE0B4",
  aquatic: "#58BBA7", aurora: "#025159", marsRed: "#9C2E35", moonDust: "#BBBBBB",
  bg: "#F5F0E8", card: "#FFFCF7", cardAlt: "#FAF6EE", border: "#E8E0D4",
  borderLight: "#EEE6DA", tp: "#1A1612", ts: "#6B5E4F", tm: "#9B8E7E",
};

export const DARK = {
  deepSpace: "#0E0F13", stellarDust: "#FFFBF1", solYellow: "#FFB259", sunset: "#C98A3A",
  aquatic: "#5FCBB5", aurora: "#3AA7A0", marsRed: "#E06B72", moonDust: "#8A8F99",
  bg: "#15171C", card: "#1E2128", cardAlt: "#262A33", border: "#32363F",
  borderLight: "#2A2E37", tp: "#F2EFE9", ts: "#C2BCB1", tm: "#8E97A3",
};

// ── Arcade layer (tcp-command-center-project) ───────────────────
export const ARCADE = {
  void: "#0a0a14", deepSpace: "#12121e", panel: "#1a1a2e", solYellow: "#FFB259",
  solBright: "#FFD080", aquatic: "#58BBA7", aquaLight: "#7EDDCA", stellarBlue: "#47B4C7",
  marsRed: "#E05050", nebulaPurple: "#9B6DFF", auroraGreen: "#3DFF88", white: "#FFFBF1",
  grey: "#8888AA", greyDark: "#555570", border: "#2a2a44", borderGlow: "rgba(255,178,89,0.25)",
};

// Convenience resolver for the clean layer.
export function palette(mode) {
  return mode === "dark" ? DARK : LIGHT;
}
