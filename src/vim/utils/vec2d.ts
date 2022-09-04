export type Vec2d = {
  x: number;
  y: number;
};

export const add = (v: Vec2d, v2: Vec2d): Vec2d => ({ x: v.x + v2.x, y: v.y + v2.y });

