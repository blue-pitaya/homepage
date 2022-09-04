import { Vec2d } from "./utils/vec2d";
import { cursorIndex } from "./utils/text";

export enum RenderStyle {
  Normal,
  Cursor
};

export type RenderElement = {
  style: RenderStyle;
  text: string;
};

export function render(text: string, cursor: Vec2d): RenderElement[] {
  const cursorIdx = cursorIndex(text, cursor);
  const beforeCursor: RenderElement = {
    style: RenderStyle.Normal, text: text.slice(0, cursorIdx)
  };
  const cursorElm: RenderElement = {
    style: RenderStyle.Cursor, text: text.slice(cursorIdx, cursorIdx + 1)
  };
  const afterCursor: RenderElement = {
    style: RenderStyle.Normal, text: text.slice(cursorIdx + 1)
  };

  return [beforeCursor, cursorElm, afterCursor];
}
