/**
 * @jest-environment jsdom
 */

import fs from "fs";
import path from "path";
import jsdom from "jsdom";

const { JSDOM } = jsdom;

describe("HTML Structure Test", () => {
  let document: Document;

  beforeAll(() => {
    const filePath = path.join(__dirname, "sample.html");
    const html = fs.readFileSync(filePath, "utf-8");
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test("should contain a <ul> element", () => {
    const ul = document.querySelector("ul");
    expect(ul).not.toBeNull();
  });

  test("should contain exactly 3 <li> elements", () => {
    const items = document.querySelectorAll("ul li");
    expect(items.length).toBe(3);
  });
});
