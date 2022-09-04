import { RenderStyle } from "@/vim/renderer";

export function renderStyleToCssClass(style: RenderStyle): string {
  switch (style) {
    case RenderStyle.Normal: return "normalStyle";
    case RenderStyle.Cursor: return "cursorStyle";
    default: return "normalStyle";
  }
}
