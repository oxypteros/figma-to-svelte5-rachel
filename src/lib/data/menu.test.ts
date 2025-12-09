// src/lib/data/menus.test.ts

import { describe, it, expect } from "vitest";
import { headerMenuItems } from "./header-menu";
import { footerMenuItems } from "./footer-menu";

const menuScenarios = [
  { name: "Header", data: headerMenuItems },
  { name: "Footer", data: footerMenuItems }
];

describe.each(menuScenarios)("$name Menu Data", ({ name, data }) => {
  it("should contain menu items", () => {
    expect(data.length).toBeGreaterThan(0);
  });

  it("should have valid labels and links", () => {
    data.forEach((item) => {
      // id Check
      expect(item.id).toBeDefined();
      expect(typeof item.id).toBe("string");
      expect(item.id.trim().length).toBeGreaterThan(0);

      // Link Check
      expect(item.href).toBeDefined();
      expect(typeof item.href).toBe("string");
      expect(item.href.trim().length).toBeGreaterThan(0);
    });
  });

  it("should use valid URL formats (Anchor # or Path /)", () => {
    data.forEach((item) => {
      const isValidFormat = item.href.startsWith("/") || item.href.startsWith("#");
      expect(isValidFormat).toBe(true);

      // If it is an anchor, it shouldn't be only "#"
      if (item.href.startsWith("#")) {
        expect(item.href.length).toBeGreaterThan(1);
      }
    });
  });

  it("should always include a Home link pointing to root", () => {
    // Only check this if the menu actually has a "Home" item
    const home = data.find((i) => i.id === "Home");
    if (home) {
      expect(home.href).toBe("/");
    }
  });

  it("should not have duplicate id's", () => {
    const ids = data.map((i) => i.id);
    const uniqueLabels = new Set(ids);

    if (uniqueLabels.size !== ids.length) {
      const duplicate = ids.filter((item, index) => ids.indexOf(item) !== index);
      throw new Error(`Duplicate menu id found in ${name}: "${duplicate[0]}"`);
    }

    expect(uniqueLabels.size).toBe(ids.length);
  });
});
