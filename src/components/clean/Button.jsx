// ═══ Clean layer — Button ═══
// variant: 'primary' (bt) | 'ghost' (hb) | 'icon' (ib) from tcp-expenses.

import { useTheme } from "../../ThemeProvider.jsx";
import { button } from "../../styles/primitives.js";

export default function Button({ variant = "primary", onClick, style, children, ...rest }) {
  const { C } = useTheme();
  return (
    <button onClick={onClick} style={{ ...button(C, variant), ...style }} {...rest}>
      {children}
    </button>
  );
}
