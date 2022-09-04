import { Vec2d, add } from "./utils/vec2d";
import { cursorIndex } from "./utils/text";

export function moveCursor(vec: Vec2d, cursor: Vec2d, text: string): Vec2d {
  const nextPos = add(vec, cursor);
  const lines = text.split("\n");
  const y = Math.min(Math.max(0, nextPos.y), lines.length - 1);
  const lineUnderPos = lines[y];
  const x = Math.min(Math.max(0, nextPos.x), lineUnderPos.length - 1);

  return { x, y };
}
  
export function insertChar(char: string, cursor: Vec2d, text: string): string {
  const cursorIdx = cursorIndex(text, cursor);
  const nextText = text.slice(0, cursorIdx) + char + text.slice(cursorIdx);

  return nextText;
}
