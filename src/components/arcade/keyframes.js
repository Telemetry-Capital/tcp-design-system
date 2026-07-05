// ═══ ARCADE KEYFRAMES ═══
// Injects the arcade @keyframes into <head> ONCE, idempotently (same idiom as
// fonts.js). The keyframe CSS is copied verbatim from the command-center app's
// global <style> block.
//
// Usage (once, near app entry or in the arcade view):
//   import { injectKeyframes } from '@tcp/design-system';
//   injectKeyframes();

const MARKER = "data-tcp-arcade-keyframes";

const KEYFRAMES_CSS = `
@keyframes pixelFadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pixelBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
`;

export function injectKeyframes() {
  if (typeof document === "undefined") return; // SSR / non-browser: no-op
  if (document.head.querySelector(`style[${MARKER}]`)) return; // already injected

  const style = document.createElement("style");
  style.setAttribute(MARKER, "");
  style.textContent = KEYFRAMES_CSS;
  document.head.appendChild(style);
}

export default injectKeyframes;
