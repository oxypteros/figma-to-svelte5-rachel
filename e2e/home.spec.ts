import { test, expect } from "@playwright/test";

test("Homepage loads and displays critical content", async ({ page }) => {
  // Go to the home page
  await page.goto("/");

  // Check the Title (SEO)
  await expect(page).toHaveTitle(/Rachel Stone/);

  // Check the Hero Heading is visible
  const heroHeading = page.getByRole("heading", { name: /Because your best/i });
  await expect(heroHeading).toBeVisible();
});

test("Structure: Every section must have a heading", async ({ page }) => {
  await page.goto("/");

  // Find all <section> tags
  const sections = page.locator("section");
  const count = await sections.count();

  // Prevent false positives
  expect(count).toBeGreaterThan(0);

  for (let i = 0; i < count; i++) {
    const section = sections.nth(i);

    // Use .count() instead of .toBeVisible() in case of sr-only headings
    const headingCount = await section.locator("h1, h2, h3, h4, h5, h6").count();

    // 4. Assert
    expect(headingCount, `Section #${i + 1} is missing a heading!`).toBeGreaterThan(0);
  }
});
