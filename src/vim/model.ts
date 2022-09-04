import { Vec2d } from "./utils/vec2d";

export enum Mode {
  Normal = "Normal",
  Insert = "Insert",
};

export type EmulatorState = {
  cursor: Vec2d;
  text: string;
  mode: Mode;
};
