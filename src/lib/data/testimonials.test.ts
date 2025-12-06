import { describe, it, expect } from "vitest";
import { testimonials } from "./testimonials";
import fs from "node:fs";
import path from "node:path";

describe("Testimonials Data Integrity", () => {
  it("should have populated text fields", () => {
    testimonials.forEach((item) => {
      // Check Name
      expect(item.name).toBeDefined();
      expect(item.name.length).toBeGreaterThan(0);

      // Check Quote
      expect(item.quote).toBeDefined();
      expect(item.quote.length).toBeGreaterThan(10);

      // Check Program Name
      expect(item.program).toBeDefined();
      expect(item.program.length).toBeGreaterThan(0);

      // Check Star Rating
      expect(item.stars).toBeGreaterThan(0);
      expect(item.stars).toBeLessThanOrEqual(5);
    });
  });

  it("should have valid Accessibility (Alt Text)", () => {
    testimonials.forEach((item) => {
      // Alt text must exist
      expect(item.alt).toBeDefined();
      expect(typeof item.alt).toBe("string");

      // Alt text should be descriptive
      expect(item.alt.trim().length).toBeGreaterThan(3);

      // alt text shouldn't start with "Image or Picture"
      expect(item.alt.toLowerCase().startsWith("image")).toBe(false);
      expect(item.alt.toLowerCase().startsWith("picture")).toBe(false);
    });
  });

  // Check if the image file exists in the /static folder
  it("should reference image files that actually exist", () => {
    testimonials.forEach((item) => {
      // Image path must start with /
      expect(item.image.startsWith("/")).toBe(true);

      const staticFolderPath = path.resolve(process.cwd(), "static");
      const fullImagePath = path.join(staticFolderPath, item.image);

      // Verify file existence to prevent 404 image error
      const exists = fs.existsSync(fullImagePath);
      expect(exists).toBe(true);
    });
  });
});
