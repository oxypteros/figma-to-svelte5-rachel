// src/lib/data/contact.test.ts
import { describe, it, expect } from "vitest";
import { contactConfig } from "./contact";

describe("Contact Configuration Data", () => {
  const { contact } = contactConfig;

  it("should have all required fields defined", () => {
    expect(contact.phoneDisplay).toBeTruthy();
    expect(contact.phoneNumber).toBeTruthy();
    expect(contact.whatsapp).toBeTruthy();
    expect(contact.email).toBeTruthy();
    expect(contact.hours).toBeTruthy();
  });

  it("should have a valid email format", () => {
    // Check for x@x.x
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(contact.email)) {
      throw new Error(`Invalid email format detected: "${contact.email}"`);
    }
    expect(emailRegex.test(contact.email)).toBe(true);
  });

  it("should have a valid phone number for 'tel:' links", () => {

    // Optional +, then only digits
    const telLinkRegex = /^\+?[0-9]+$/;

    if (!telLinkRegex.test(contact.phoneNumber)) {
      throw new Error(`Phone number for linking must contain only digits (and optional +). Found: "${contact.phoneNumber}"`);
    }
    expect(telLinkRegex.test(contact.phoneNumber)).toBe(true);
  });

  it("should have a valid WhatsApp format", () => {
    // WhatsApp API requires pure digits
    const waRegex = /^[0-9]+$/;
    
    if (!waRegex.test(contact.whatsapp)) {
       throw new Error(`WhatsApp ID should be pure digits (no +, no spaces). Found: "${contact.whatsapp}"`);
    }
    expect(waRegex.test(contact.whatsapp)).toBe(true);
  });

  it("should match display phone with link phone (soft check)", () => {
    const cleanDisplay = contact.phoneDisplay.replace(/[^0-9]/g, "");
    const cleanLink = contact.phoneNumber.replace(/[^0-9]/g, "");

    expect(cleanDisplay).toContain(cleanLink); // or .toBe(cleanLink)
  });

});