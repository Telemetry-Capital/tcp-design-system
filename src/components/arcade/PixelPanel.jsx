// ═══ PIXEL PANEL ═══
// Chamfered clip-path bordered panel with 4 corner squares. Ported faithfully.
import { ARCADE as C } from "../../theme.js";

export default function PixelPanel({ children, glow, style = {} }) {
  const bc = glow ? C.borderGlow : C.border;
  const cc = glow ? C.solYellow : C.border;
  return (
    <div style={{
      position: "relative", background: C.panel, border: `2px solid ${bc}`,
      clipPath: `polygon(4px 0%,calc(100% - 4px) 0%,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0% calc(100% - 4px),0% 4px)`,
      ...style,
    }}>
      {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h],i) => (
        <div key={i} style={{ position:"absolute",[v]:0,[h]:0,width:4,height:4,background:cc }} />
      ))}
      {children}
    </div>
  );
}
