// ═══ @tcp/design-system — main barrel (the "spine") ═══
// Layer components are imported via subpaths to keep bundles lean:
//   import { Panel, Button } from '@tcp/design-system/clean';
//   import { PixelPanel }    from '@tcp/design-system/arcade';

export { brand, default as tokens } from "./tokens.js";
export { LIGHT, DARK, ARCADE, palette } from "./theme.js";
export { fPixel, fDisplay, fBody, fMono } from "./typography.js";
export { loadFonts } from "./fonts.js";
export { ThemeProvider, useTheme } from "./ThemeProvider.jsx";
