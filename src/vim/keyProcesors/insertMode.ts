import { EmulatorState, Mode } from "../model";
import { moveCursor, insertChar } from "@/vim/cursor";

function removeChar(state: EmulatorState): EmulatorState {
  return state; //todo: !!! :D xdkey
}

function insertText(text: string, state: EmulatorState): EmulatorState {
  const cursor = ({...state.cursor, x: state.cursor.x + 1 }); //warn: assuming ok input
  return ({...state, text: insertChar(text, state.cursor, state.text), cursor});
}

export function processKey(key: string, keyCode: string, state: EmulatorState) {
  //todo: filter invalid chars
  switch (key) {
    case "Escape": {
      return ({...state, mode: Mode.Normal });
    }
    case "Enter": {
      return insertText("\n", state);
    }
    case "Backspace": {
      return removeChar(state);
    }
    default: {
      return insertText(key, state);
    }
  }
};
