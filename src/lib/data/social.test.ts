// src/lib/data/socials.test.ts
import { describe, it, expect } from "vitest";
import { socialItems, type IconName } from "./socials";
import fs from "node:fs";
import path from "node:path";

describe("Social Media Data", () => {
  it("should contain social items", () => {
    expect(socialItems.length).toBeGreaterThan(0);
  });

  it("should have valid icons, ids, and labels", () => {
    // Define only the valid icons taht matches the Type definition)
    const validIcons: IconName[] = ["Github", "Instagram", "X", "YouTube", "Email"];

    socialItems.forEach((item) => {
      // Check ID
      expect(item.id).toBeTruthy();

      // Check Icon Validity
      expect(validIcons).toContain(item.icon);

      // Check Label (Accessibility)
      expect(item.label).toBeDefined();
      expect(item.label.length).toBeGreaterThan(5); // Pseudo check for descriptive label
    });
  });

  it("should follow logic for Internal vs External links", () => {
    socialItems.forEach((item) => {
      const isAnchor = item.href.startsWith("#");
      const isHttp = item.href.startsWith("http");

      // Anchor links (#) MUST set inTab: false
      if (isAnchor) {
        if (item.inTab !== false) {
          throw new Error(
            `Anchor link "${item.id}" (${item.href}) must have 'inTab: false' to prevent opening in a new window.`
          );
        }
      }

      // External links (https://) SHOULD usually be new tab (soft check)
      if (isHttp) {
        expect(item.inTab).not.toBe(false);
      }
    });
  });

  it("should not have duplicate IDs", () => {
    const ids = socialItems.map((i) => i.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it("should correspond to a real SVG file on disk", () => {
    const ICON_DIR = path.join(process.cwd(), "src/lib/icons");

    if (!fs.existsSync(ICON_DIR)) {
      throw new Error(`Test Configuration Error: Could not find icon folder at: ${ICON_DIR}`);
    }

    socialItems.forEach((item) => {
      // Normalize the name
      const fileName = `${item.icon.toLowerCase()}.svg`;
      const fullPath = path.join(ICON_DIR, fileName);

      const exists = fs.existsSync(fullPath);

      if (!exists) {
        throw new Error(
          `Missing Icon File! \n` +
            `Item ID: ${item.id} \n` +
            `Expected file at: ${fullPath} \n` +
            `Make sure you added the SVG file to the folder.`
        );
      }

      expect(exists).toBe(true);
    });
  });
});
