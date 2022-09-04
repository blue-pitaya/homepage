import { Vec2d } from "../utils/vec2d";
import { EmulatorState, Mode } from "../model";
import { addSpaces } from "@/vim/utils/text";
import { moveCursor, insertChar } from "@/vim/cursor";

function updateCursor(vec: Vec2d, state: EmulatorState): EmulatorState {
  const nextCursor = moveCursor(vec, state.cursor, state.text);
  return ({...state, cursor: nextCursor });
}

export function processKey(key: string, keyCode: string, state: EmulatorState): EmulatorState {
  switch (keyCode) {
    case "KeyJ": 
      return updateCursor({ x: 0, y: 1 }, state);
    case "KeyK": 
      return updateCursor({ x: 0, y: -1 }, state);
    case "KeyH": 
      return updateCursor({ x: -1, y: 0 }, state);
    case "KeyL": 
      return updateCursor({ x: 1, y: 0 }, state);
    case "KeyI":
      return ({...state, mode: Mode.Insert, text: addSpaces(state.text)});
    default:
      console.log(keyCode);
  }

  return state;
}
