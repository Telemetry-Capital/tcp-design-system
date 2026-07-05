// ═══ TCP Design System — Theme Provider ═══
// Optional context-based theming for NEW clean-layer apps. Existing apps
// (tcp-expenses) can keep their `let C` pattern and just import LIGHT/DARK.
//
// Usage:
//   import { ThemeProvider, useTheme } from '@tcp/design-system';
//   <ThemeProvider defaultMode="light"><App/></ThemeProvider>
//   const { C, mode, toggle } = useTheme();  // C = active palette

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LIGHT, DARK } from "./theme.js";

const ThemeContext = createContext(null);
const STORAGE_KEY = "ui_theme"; // same key tcp-expenses uses → preserves saved pref

export function ThemeProvider({ children, defaultMode = "light", persist = true }) {
  const [mode, setMode] = useState(() => {
    if (!persist || typeof localStorage === "undefined") return defaultMode;
    try {
      return localStorage.getItem(STORAGE_KEY) === "dark" ? "dark" : defaultMode;
    } catch {
      return defaultMode;
    }
  });

  useEffect(() => {
    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, mode); } catch { /* ignore */ }
    }
    const C = mode === "dark" ? DARK : LIGHT;
    try { document.body.style.background = C.bg; } catch { /* ignore */ }
  }, [mode, persist]);

  const value = useMemo(() => {
    const C = mode === "dark" ? DARK : LIGHT;
    return {
      mode,
      C,
      setMode,
      toggle: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    };
  }, [mode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a <ThemeProvider>");
  return ctx;
}
