// src/lib/data/faq.test.ts
import { describe, it, expect } from "vitest";
import { faqData } from "./faq";

describe("FAQ Data Integrity", () => {
  it("should contain at least one FAQ item", () => {
    expect(faqData.length).toBeGreaterThan(0);
  });

  it("should have non-empty questions and answers for every item", () => {
    faqData.forEach((item) => {
      // Check Question
      expect(item.question).toBeDefined();
      expect(typeof item.question).toBe("string");
      expect(item.question.trim().length).toBeGreaterThan(0);

      // Check Answer
      expect(item.answer).toBeDefined();
      expect(typeof item.answer).toBe("string");
      expect(item.answer.trim().length).toBeGreaterThan(0);
    });
  });

  it("should not have duplicate questions", () => {
    const questions = faqData.map((f) => f.question);
    const uniqueQuestions = new Set(questions);

    if (uniqueQuestions.size !== questions.length) {
      const duplicate = questions.filter((item, index) => questions.indexOf(item) !== index);
      throw new Error(`Duplicate FAQ found: "${duplicate[0]}"`);
    }

    expect(uniqueQuestions.size).toBe(questions.length);
  });
});
