// ═══ Clean layer — Modal ═══
// overlay (ov) backdrop + modal (ml) box + close button (xB). Mirrors the
// UploadModal structure in tcp-expenses: click backdrop to close, stopPropagation
// on the box, header row with display-font title and close button.

import { useTheme } from "../../ThemeProvider.jsx";
import { fDisplay } from "../../typography.js";
import { overlay, modal, closeButton } from "../../styles/primitives.js";

export default function Modal({ open, onClose, title, children, style }) {
  const { C } = useTheme();
  if (!open) return null;
  return (
    <div style={overlay(C)} onClick={onClose}>
      <div style={{ ...modal(C), ...style }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <h2 style={{ fontFamily: fDisplay, fontSize: 15, color: C.tp, letterSpacing: 1 }}>
            {title}
          </h2>
          <button onClick={onClose} style={closeButton(C)}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
