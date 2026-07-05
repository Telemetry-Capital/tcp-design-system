// ═══ SECTION DIVIDER ═══
// Section header: three fading dots + label + dashed line. Ported faithfully.
import { ARCADE as C } from "../../theme.js";
import { fPixel } from "../../typography.js";

export default function PixelDivider({ label, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "8px 0 20px", ...style }}>
      <div style={{ display: "flex", gap: 2 }}>
        {[1, 0.7, 0.4].map((o, i) => <div key={i} style={{ width: 4, height: 4, background: C.solYellow, opacity: o }} />)}
      </div>
      <div style={{
        fontFamily: fPixel, fontSize: "10px",
        color: C.solYellow, letterSpacing: "2px", textTransform: "uppercase", whiteSpace: "nowrap",
      }}>{label}</div>
      <div style={{
        flex: 1, height: 2,
        backgroundImage: `repeating-linear-gradient(90deg, ${C.solYellow}40 0px, ${C.solYellow}40 4px, transparent 4px, transparent 8px)`,
      }} />
    </div>
  );
}
