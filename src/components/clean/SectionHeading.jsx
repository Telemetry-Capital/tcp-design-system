// ═══ Clean layer — SectionHeading ═══
// Ports the `sh` style object from tcp-expenses.

import { useTheme } from "../../ThemeProvider.jsx";
import { sectionHeading } from "../../styles/primitives.js";

export default function SectionHeading({ style, children, ...rest }) {
  const { C } = useTheme();
  return (
    <div style={{ ...sectionHeading(C), ...style }} {...rest}>
      {children}
    </div>
  );
}
