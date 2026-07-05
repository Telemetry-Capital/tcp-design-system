// ═══ Clean layer — Panel ═══
// Card/container surface. Ports the `cs` style object from tcp-expenses.

import { useTheme } from "../../ThemeProvider.jsx";
import { card } from "../../styles/primitives.js";

export default function Panel({ style, children, ...rest }) {
  const { C } = useTheme();
  return (
    <div style={{ ...card(C), ...style }} {...rest}>
      {children}
    </div>
  );
}
