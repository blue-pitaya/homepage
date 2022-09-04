import { moveCursor, insertChar } from "./cursor";

describe("move cursor", () => {
  test("in legal way", () => {
    const translate = { x: 0, y: 1 };
    const cursor = { x: 2, y: 0 };
    const text = "eloszka\nloszka";
    
    expect(moveCursor(translate, cursor, text)).toStrictEqual({ x: 2, y: 1 });
  });

  test("start of text", () => {
    const translate = { x: -3, y: 0 };
    const cursor = { x: 0, y: 1 };
    const text = "elooo\nsiemka";
    
    expect(moveCursor(translate, cursor, text)).toStrictEqual({ x: 0, y: 1 });
  });

  test("start of lines", () => {
    const translate = { x: 0, y: -2 };
    const cursor = { x: 0, y: 0 };
    const text = "elo";
    
    expect(moveCursor(translate, cursor, text)).toStrictEqual({ x: 0, y: 0 });
  });
  
  test("end of text", () => {
    const translate = { x: 2, y: 0 };
    const cursor = { x: 2, y: 0 };
    const text = "elo!";
    
    expect(moveCursor(translate, cursor, text)).toStrictEqual({ x: 3, y: 0 });
  });

  test("end of lines", () => {
    const translate = { x: 0, y: 2 };
    const cursor = { x: 1, y: 0 };
    const text = "elo\nelo";
    
    expect(moveCursor(translate, cursor, text)).toStrictEqual({ x: 1, y: 1 });
  });
});

describe("insert char", () => {
  test("at begining of line", () => {
    const char = "ę";
    const cursor = { x: 0, y: 1 };
    const text = "when\nwill\nyou learn";
    const exp = "when\nęwill\nyou learn";

    expect(insertChar(char, cursor, text)).toStrictEqual(exp);
  });
  test("at the end of line", () => {
    const char = "ę";
    const cursor = { x: 4, y: 1 };
    const text = "when\nwill\nyou learn";
    const exp = "when\nwillę\nyou learn";

    expect(insertChar(char, cursor, text)).toStrictEqual(exp);
  });
  test("newline", () => {
    const char = "\n";
    const cursor = { x: 2, y: 1 };
    const text = "when\nwill\nyou learn";
    const exp = "when\nwi\nll\nyou learn";

    expect(insertChar(char, cursor, text)).toStrictEqual(exp);
  });
});
