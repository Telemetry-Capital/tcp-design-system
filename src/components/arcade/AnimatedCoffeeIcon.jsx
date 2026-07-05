// ═══ ANIMATED COFFEE CUP ═══
// Ported faithfully from the command-center app.
import { useState, useEffect } from "react";
import { ARCADE as C } from "../../theme.js";

export default function AnimatedCoffeeIcon({ size = 48, style = {} }) {
  const [frame, setFrame] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFrame(f => (f + 1) % 4), 400);
    return () => clearInterval(id);
  }, []);
  const cup = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,1,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,0,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,0,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,1,1,0,0],
    [0,0,1,2,2,2,2,2,2,2,2,1,0,0,0,0],
    [0,0,0,1,2,2,2,2,2,2,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  ];
  const steamFrames = [[[4,2],[3,5],[4,8]],[[3,2],[4,5],[3,8]],[[2,3],[3,6],[2,9]],[[3,3],[2,5],[3,7]]];
  const wispFrames = [[[5,4],[3,7]],[[4,3],[5,7]],[[3,4],[4,8]],[[5,3],[3,6]]];
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: "pixelated", ...style }}>
      {cup.flatMap((row, y) => row.map((cell, x) => {
        if (cell === 0) return null;
        return <rect key={`c-${y}-${x}`} x={x} y={y} width="1" height="1" fill={cell === 1 ? C.solYellow : "#8B5E3C"} />;
      }))}
      {steamFrames[frame].map(([y, x], i) => (
        <rect key={`s-${i}`} x={x} y={y} width="1" height="1" fill={C.white} opacity={0.7 - i * 0.15} />
      ))}
      {wispFrames[frame].map(([y, x], i) => (
        <rect key={`w-${i}`} x={x} y={y} width="1" height="1" fill={C.white} opacity={0.35} />
      ))}
    </svg>
  );
}
