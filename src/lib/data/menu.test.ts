import { describe, it, expect } from "vitest";
import { menuItems } from "./menu";

describe("Navigation Menu Data", () => {
  it("should contain menu items", () => {
    expect(menuItems.length).toBeGreaterThan(0);
  });

  it("should have valid labels and links", () => {
    menuItems.forEach((item) => {
      // 1. Label Check
      expect(item.label).toBeDefined();
      expect(typeof item.label).toBe("string");
      expect(item.label.trim().length).toBeGreaterThan(0);

      // 2. Link Check
      expect(item.href).toBeDefined();
      expect(typeof item.href).toBe("string");
      expect(item.href.trim().length).toBeGreaterThan(0);
    });
  });

  it("should use valid URL formats (Anchor # or Path /)", () => {
    menuItems.forEach((item) => {
      const isValidFormat = item.href.startsWith("/") || item.href.startsWith("#");

      expect(isValidFormat).toBe(true);

      // If it is an anchor, it shouldn't be only "#"
      if (item.href.startsWith("#")) {
        expect(item.href.length).toBeGreaterThan(1);
      }
    });
  });

  it("should always include a Home link pointing to root", () => {
    const home = menuItems.find((i) => i.label === "Home");
    expect(home).toBeDefined();
    expect(home?.href).toBe("/");
  });

  it("should not have duplicate labels", () => {
    const labels = menuItems.map((i) => i.label);
    const uniqueLabels = new Set(labels);

    // If Set size != Array length, we have duplicates
    if (uniqueLabels.size !== labels.length) {
      const duplicate = labels.filter((item, index) => labels.indexOf(item) !== index);
      throw new Error(`Duplicate menu label found: "${duplicate[0]}"`);
    }

    expect(uniqueLabels.size).toBe(labels.length);
  });
});
