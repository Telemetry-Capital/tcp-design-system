// ═══ PIXEL STARFIELD ═══
// Canvas starfield background (fixed position, z-index 0). Ported faithfully.
import { useRef, useEffect } from "react";
import { ARCADE as C } from "../../theme.js";

export default function PixelStarField({ style = {} }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let animId, stars = [];
    const resize = () => {
      canvas.width = Math.floor(window.innerWidth / 3);
      canvas.height = Math.floor(window.innerHeight / 3);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      stars = Array.from({ length: 35 }, () => ({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        blink: Math.random() * 300 + 100,
        phase: Math.random() * 2000,
        bright: Math.random() > 0.85,
      }));
    };
    const draw = (t) => {
      ctx.fillStyle = C.void;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        const v = Math.sin((t + s.phase) / s.blink);
        if (v > -0.2) {
          const a = Math.floor((v + 0.2) / 1.2 * 120 + 30);
          ctx.fillStyle = s.bright ? `#FFB259${a.toString(16).padStart(2,"0")}` : `#8888AA${a.toString(16).padStart(2,"0")}`;
          ctx.fillRect(s.x, s.y, 1, 1);
        }
      });
      animId = requestAnimationFrame(draw);
    };
    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 0, imageRendering: "pixelated", ...style }} />;
}
