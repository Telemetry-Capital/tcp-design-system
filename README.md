# @tcp/design-system

Shared design system for TCP Command Center apps — one source of truth for tokens, theme, fonts, and components so the apps stop drifting.

## Install (consumer app)

Add a **tag-pinned** git dependency (never `#main`):

```jsonc
// package.json
"dependencies": {
  "@tcp/design-system": "github:adelmanmax7-design/tcp-design-system#v0.1.0"
}
```

Then add the one-time Vite tweak so Vite compiles the package's JSX (it skips `node_modules` by default):

```js
// vite.config.js
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react({ include: [/\.jsx?$/, /node_modules\/@tcp\/design-system/] })],
  optimizeDeps: { include: ["@tcp/design-system"] },
});
```

## Use

```jsx
import { loadFonts, ThemeProvider, useTheme } from "@tcp/design-system";
import { Panel, Button, Field, Modal, SectionHeading } from "@tcp/design-system/clean"; // default look
import { PixelPanel, AppCard, PixelDivider, PixelStarField } from "@tcp/design-system/arcade"; // opt-in retro

loadFonts(); // inject webfonts once
// <ThemeProvider><App/></ThemeProvider>; inside: const { C } = useTheme();
```

- **`clean`** is the default aesthetic (modern, light/dark) — use it for real work tools.
- **`arcade`** is the opt-in retro pixel-art layer — the hub and playful moments.
- Both draw from the same `theme.js`, so colors can't re-drift.

## Subpaths

`@tcp/design-system` (spine) · `/tokens` · `/theme` · `/typography` · `/fonts` · `/primitives` · `/clean` · `/arcade`

## Local development

`npm link` this repo into an app while co-editing, then **unlink and reinstall the pinned tag before committing** so Vercel only ever builds a tagged version:

```
# in tcp-design-system:   npm link
# in the app:             npm link @tcp/design-system
# before committing:      npm unlink @tcp/design-system && npm install
```

## Releasing a change

1. Edit tokens/components, commit.
2. Bump `version`, `git tag vX.Y.Z`, push `main` + the tag.
3. In each app, change the one dep line to `#vX.Y.Z` and push → Vercel auto-redeploys.

Semver: patch = value tweak · minor = new token/component · major = renamed/removed token or changed API.
