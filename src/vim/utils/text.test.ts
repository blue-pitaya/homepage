import { addSpaces } from "./text";

describe("addSpaces", () => {
  test("empty lines", () => {
    const text = "\n\n\n";
    const exp = " \n \n \n ";

    expect(addSpaces(text)).toStrictEqual(exp);
  });

  test("empty lines", () => {
    const text = "super\nhubert";
    const exp = "super \nhubert ";

    expect(addSpaces(text)).toStrictEqual(exp);
  });
});

describe("removeChar" () => {
  test("begining", () => {
    const vec:
    const exp = 0;

    expect(0).toStrictEqual(exp);
  };

  test("end", () => {
    const exp = 0;

    expect(0).toStrictEqual(exp);
  };
});
