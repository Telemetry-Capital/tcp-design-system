// ═══ APP CARD ═══
// The app tile: icon + name + subtitle + status dot + hover lift.
//
// Ported from the command-center app, but made PRESENTATIONAL. The source version
// was coupled to app-registry objects (`app`, `isExternal`, `onArcade`) and did its
// own launch/status derivation. Here those decisions are pushed up to the caller and
// passed as plain props:
//   name, subtitle, color, onClick
//   status   — "live" | "planned" | undefined (drives the blink dot + grayscale)
//   index    — stagger index for the pixelFadeIn entrance animation (default 0)
//   desktop  — show the little "DESKTOP" tag (was `app.desktopScheme`)
//   interactive — whether hover-lift/pointer applies (was `(isLive && hasUrl) || isArcade`)
//   icon / children — the icon node to render (e.g. <PixelIcon .../> or <AnimatedCoffeeIcon/>)
//
// Requires the arcade keyframes (pixelFadeIn, pixelBlink) — call injectKeyframes() once.
import { useState } from "react";
import { ARCADE as C } from "../../theme.js";
import { fPixel, fBody } from "../../typography.js";
import PixelPanel from "./PixelPanel.jsx";
import { playHoverBlip } from "./sounds.js";

export default function AppCard({
  name,
  subtitle,
  color = C.solYellow,
  status,
  index = 0,
  desktop = false,
  interactive,
  onClick,
  icon,
  children,
  style = {},
}) {
  const [hovered, setHovered] = useState(false);
  const isLive = status === "live";
  const isPlanned = status === "planned";
  // Default interactivity: anything not "planned" is treated as interactive.
  const canInteract = interactive != null ? interactive : !isPlanned;
  const iconNode = icon != null ? icon : children;

  const handleHover = () => { setHovered(true); if (!isPlanned) playHoverBlip(); };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: canInteract ? "pointer" : "default",
        animation: `pixelFadeIn 0.3s ease ${index * 0.05}s both`,
        transition: "transform 0.15s ease",
        transform: hovered && canInteract ? "translateY(-3px)" : "translateY(0)",
        position: "relative",
        ...style,
      }}
    >
      <div style={{ filter: isPlanned ? "grayscale(1)" : "none", opacity: isPlanned ? 0.3 : 1 }}>
      <PixelPanel glow={hovered && canInteract} style={{ padding: "20px 16px" }}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: 12, textAlign: "center", minHeight: 120, justifyContent: "center", position: "relative",
        }}>
          {isLive && !isPlanned && (
            <div style={{
              position: "absolute", top: -8, right: -4, width: 6, height: 6,
              background: C.aquatic, boxShadow: `0 0 6px ${C.aquatic}`,
              animation: "pixelBlink 2s step-end infinite",
            }} />
          )}
          {desktop && (
            <div style={{
              position: "absolute", top: -8, left: -4,
              fontFamily: fPixel, fontSize: "5px",
              color: hovered ? C.auroraGreen : C.greyDark, letterSpacing: "0.5px", transition: "color 0.2s",
            }}>DESKTOP</div>
          )}
          <div style={{
            transition: "transform 0.15s ease",
            transform: hovered ? "scale(1.1)" : "scale(1)",
            filter: hovered && isLive ? `drop-shadow(0 0 8px ${color}66)` : "none",
          }}>
            {iconNode}
          </div>
          <div>
            <div style={{
              fontFamily: fPixel, fontSize: "8px",
              color: hovered && canInteract ? color : C.white,
              letterSpacing: "0.5px", lineHeight: 1.5, transition: "color 0.2s",
            }}>{name}</div>
            <div style={{
              fontFamily: fBody, fontSize: "10px",
              color: C.grey, marginTop: 4, fontStyle: isPlanned ? "italic" : "normal",
            }}>{subtitle}</div>
          </div>
        </div>
      </PixelPanel>
      </div>
      {isPlanned && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 2, pointerEvents: "none", overflow: "hidden",
          clipPath: `polygon(4px 0%,calc(100% - 4px) 0%,100% 4px,100% calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,0% calc(100% - 4px),0% 4px)`,
        }}>
          <div style={{
            position: "absolute", width: "150%", transform: "rotate(-12deg)",
          }}>
            <div style={{
              background: `repeating-linear-gradient(45deg, #FFB259 0px, #FFB259 8px, #1a1a2e 8px, #1a1a2e 16px)`,
              height: 14, width: "100%",
            }} />
          </div>
        </div>
      )}
    </div>
  );
}
