import { RenderStyle, render } from "./renderer";

test('cursor render', () => {
  const text = "joe!";
  const cursor = { x: 1, y: 0 }; 
  const heh = [
    { style: RenderStyle.Normal, text: "j" },
    { style: RenderStyle.Cursor, text: "o" },
    { style: RenderStyle.Normal, text: "e!" },
  ];
    
  expect(render(text, cursor)).toStrictEqual(heh);
});

test('cursor render', () => {
  const text = "joe!\nmama!\nfranku\n";
  const cursor = { x: 3, y: 1 }; 
  const heh = [
    { style: RenderStyle.Normal, text: "joe!\nmam" },
    { style: RenderStyle.Cursor, text: "a" },
    { style: RenderStyle.Normal, text: "!\nfranku\n" },
  ];
    
  expect(render(text, cursor)).toStrictEqual(heh);
});

test('cursor render', () => {
  const text = "joe!\nmama!\nfranku\nkochany...";
  const cursor = { x: 9, y: 3 }; 
  const heh = [
    { style: RenderStyle.Normal, text: "joe!\nmama!\nfranku\nkochany.." },
    { style: RenderStyle.Cursor, text: "." },
    { style: RenderStyle.Normal, text: "" },
  ];
    
  expect(render(text, cursor)).toStrictEqual(heh);
});
