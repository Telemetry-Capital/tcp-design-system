// ═══ MASTER SWORD LOGO — 24x24 with shimmer ═══
// Ported faithfully from the command-center app.
import { useState, useEffect } from "react";
import { ARCADE as C } from "../../theme.js";

export default function MasterSwordLogo({ size = 80, style = {} }) {
  const [shimmerPos, setShimmerPos] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setShimmerPos(p => (p + 1) % 24), 120);
    return () => clearInterval(id);
  }, []);
  const sword = [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,2,2,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,3,3,3,3,3,3,3,5,5,3,3,3,3,3,3,3,0,0,0,0],
    [0,0,0,0,0,3,3,3,3,3,3,5,5,3,3,3,3,3,3,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];
  const baseColors = { 1: "#A0B0C0", 2: "#D0E0F0", 3: C.solYellow, 4: "#4A3060", 5: "#4488FF" };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ imageRendering: "pixelated", ...style }}>
      {sword.flatMap((row, y) => row.map((cell, x) => {
        if (cell === 0) return null;
        let fill = baseColors[cell];
        if ((cell === 1 || cell === 2) && y <= 14) {
          const dist = Math.abs(y - shimmerPos);
          if (dist <= 1) fill = dist === 0 ? "#FFFFFF" : "#E8F0FF";
        }
        if (cell === 5) {
          const pulse = Math.sin(shimmerPos * 0.5) * 0.3 + 0.7;
          fill = `rgba(68,136,255,${pulse})`;
        }
        return <rect key={`${y}-${x}`} x={x} y={y} width="1" height="1" fill={fill} />;
      }))}
      {shimmerPos >= 0 && shimmerPos <= 14 && (
        <>
          <rect x={14} y={shimmerPos} width="1" height="1" fill="#FFFFFF" opacity={0.6} />
          <rect x={9} y={Math.max(0, shimmerPos - 2)} width="1" height="1" fill="#FFFFFF" opacity={0.3} />
        </>
      )}
    </svg>
  );
}
