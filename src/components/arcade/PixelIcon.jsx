// ═══ PIXEL ICON RENDERER ═══
// Generalized from the command-center app: instead of looking up a baked-in icon
// set, accepts the pixel `grid` (array of number rows) and a `colors` map as props.
// The icon *data* stays app-side; this component only renders it.
import { ARCADE as C } from "../../theme.js";

export default function PixelIcon({ grid, colors = {}, size = 48, style = {} }) {
  if (!grid) return <div style={{ width: size, height: size, ...style }} />;
  const rows = grid.length;
  const cols = grid[0] ? grid[0].length : rows;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      style={{ imageRendering: "pixelated", ...style }}
    >
      {grid.flatMap((row, y) =>
        row.map((cell, x) =>
          cell !== 0 ? (
            <rect
              key={`${y}-${x}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={colors[cell] || C.white}
            />
          ) : null
        )
      )}
    </svg>
  );
}
