// ═══ TCP Design System — Clean-layer Style Primitives ═══
// Factory functions ported VERBATIM from the tcp-expenses shared style objects
// (App.jsx ~line 2310–2320). Each takes the active palette `C` and returns a
// plain inline-style object. The originals used getters that read a live module
// `C` binding — here `C` is passed in explicitly. Font refs map to the shared
// typography stacks: fDisplay (fH), fBody (fB), fMono (fM).

import { fDisplay, fBody, fMono } from "../typography.js";

// from `lb` — form label
export function label(C) {
  return {
    display: "block",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.5,
    color: C.tm,
    marginBottom: 4,
    fontFamily: fBody,
  };
}

// from `ip` — text input
export function input(C) {
  return {
    width: "100%",
    padding: "9px 11px",
    borderRadius: 6,
    border: `1px solid ${C.border}`,
    background: C.card,
    fontSize: 13,
    fontFamily: fBody,
    color: C.tp,
  };
}

// from `fi` — compact field wrapper
export function field(C) {
  return {
    padding: "7px 10px",
    borderRadius: 6,
    border: `1px solid ${C.border}`,
    background: C.card,
    fontSize: 12,
    fontFamily: fBody,
    color: C.tp,
  };
}

// from `bt` (primary), `hb` (ghost), `ib` (icon)
export function button(C, variant = "primary") {
  if (variant === "ghost") {
    // from `hb`
    return {
      padding: "6px 12px",
      borderRadius: 6,
      border: `1px solid ${C.stellarDust}15`,
      background: "transparent",
      fontSize: 11,
      fontWeight: 700,
      fontFamily: fBody,
      cursor: "pointer",
      letterSpacing: 1,
    };
  }
  if (variant === "icon") {
    // from `ib`
    return {
      width: 24,
      height: 24,
      borderRadius: 4,
      borderStyle: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: 12,
      color: C.tm,
    };
  }
  // from `bt` — primary (default)
  return {
    padding: "10px 18px",
    borderRadius: 6,
    borderStyle: "none",
    background: C.deepSpace,
    color: C.stellarDust,
    fontSize: 12,
    fontWeight: 800,
    fontFamily: fBody,
    cursor: "pointer",
    letterSpacing: 1,
  };
}

// from `cs` — card / container surface
export function card(C) {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
  };
}

// from `sh` — section heading
export function sectionHeading(C) {
  return {
    fontFamily: fDisplay,
    fontSize: 12,
    color: C.tp,
    letterSpacing: 1,
    marginBottom: 12,
  };
}

// from `ov` — modal overlay / backdrop
export function overlay(C) {
  return {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    backdropFilter: "blur(3px)",
  };
}

// from `ml` — modal dialog box
export function modal(C) {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: 22,
    width: "90%",
    maxHeight: "85vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
  };
}

// from `xB` — modal close button
export function closeButton(C) {
  return {
    width: 28,
    height: 28,
    borderRadius: 6,
    border: `1px solid ${C.border}`,
    background: "transparent",
    color: C.tm,
    fontSize: 13,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}
