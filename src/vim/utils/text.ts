import { Vec2d, add } from "./vec2d";
import _ from "lodash";

//todo: checkout if ts support tailrec out of box or i have to shit my pants about stack overflow
function nthIndexOf(str: string, substr: string, n: number, currPos = 0): number {
  if (n == 0) {
    return currPos;
  } else {
    return nthIndexOf(str, substr, n-1, str.indexOf(substr, currPos) + 1);
  }
}

export function cursorIndex(text: string, cursor: Vec2d): number {
  return cursor.x + (cursor.y > 0 ? nthIndexOf(text, "\n", cursor.y) : 0);
}

//todo: temporary solution, better use some more refined system ;)
export function addSpaces(text: string): string {
  return text.split("\n").map(line => line + " ").join("\n");
}

export function removeChar(vec: Vec2d, cursor: Vec2d, text: string): string {
  const cursorIdx = cursorIndex(text, add(cursor, vec));
  const nextText = text.substring(0, cursorIdx - 1) + text.substring(cursorIdx, text.length);
  return nextText;
}

