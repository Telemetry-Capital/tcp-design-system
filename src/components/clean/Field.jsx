// ═══ Clean layer — Field ═══
// Labeled input. label (lb) + input (ip) wrapped in field (fi) from tcp-expenses.

import { useTheme } from "../../ThemeProvider.jsx";
import { label as labelStyle, input, field } from "../../styles/primitives.js";

export default function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  style,
  ...rest
}) {
  const { C } = useTheme();
  return (
    <div style={{ ...field(C), ...style }}>
      {label != null && <label style={labelStyle(C)}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={input(C)}
        {...rest}
      />
    </div>
  );
}
