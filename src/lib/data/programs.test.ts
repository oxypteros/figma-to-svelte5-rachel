import { describe, it, expect } from "vitest";
import { programs } from "./programs";

describe("Programs Data", () => {
  it("should have valid pricing", () => {
    programs.forEach((program) => {
      // Ensure price is a number and positive
      expect(typeof program.price).toBe("number");
      expect(program.price).toBeGreaterThan(0);
    });
  });

  it("should have unique IDs for anchors", () => {
    const ids = programs.map((p) => p.id);
    const uniqueIds = new Set(ids);
    // If set size != array length, we have duplicates
    expect(uniqueIds.size).toBe(ids.length);
  });
});
