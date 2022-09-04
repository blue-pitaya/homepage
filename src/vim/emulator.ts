import { Vec2d } from "@/vim/utils/vec2d";
import { moveCursor, insertChar } from "@/vim/cursor";
import { jakToJestBycSkryba } from "@/vim/consts/texts";
import { addSpaces } from "@/vim/utils/text";
import { Mode, EmulatorState } from "@/vim/model";
import { processKey as processKeyNormalMode } from "@/vim/keyProcesors/normalMode";
import { processKey as processKeyInsertMode } from "@/vim/keyProcesors/insertMode";

export const initEmulatorState: EmulatorState = {
  cursor: { x: 2, y: 1 },
  text: jakToJestBycSkryba,
  mode: Mode.Normal
};

export function processKeyInputMode(key: string, keyCode: string, cursor: Vec2d, text: string): string {
  switch (key) {
    default: 
      return insertChar(key, cursor, text);
  }
}
export function processKey(key: string, keyCode: string, state: EmulatorState): EmulatorState {
  if (state.mode == Mode.Normal) {
    return processKeyNormalMode(key, keyCode, state);
  }

  if (state.mode == Mode.Insert) {
    return processKeyInsertMode(key, keyCode, state);
  }

  return state;
}
