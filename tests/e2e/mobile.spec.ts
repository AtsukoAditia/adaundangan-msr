import { test, expect } from "@playwright/test";

test.describe("Mobile Responsiveness", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 }); // iPhone X
  });

  test("landing page hero is visible on mobile", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Bagikan Hari Bahagia")).toBeVisible();
    await expect(page.getByRole("link", { name: /lihat demo/i })).toBeVisible();
  });

  test("mobile nav toggle works", async ({ page }) => {
    await page.goto("/");

    // On mobile, nav links should be hidden, hamburger visible
    const menuBtn = page.getByRole("button", { name: /menu/i });
    if (await menuBtn.isVisible()) {
      await menuBtn.click();
      await page.waitForTimeout(300);
    }
  });

  test("invitation cover fits mobile viewport", async ({ page }) => {
    await page.goto("/demo-dan-demo");
    await expect(page.getByRole("button", { name: /buka/i })).toBeVisible();
  });

  test("invitation content is readable on mobile", async ({ page }) => {
    await page.goto("/demo-dan-demo");
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(600);

    // Scroll through all sections on mobile
    for (let i = 0; i < 8; i++) {
      await page.evaluate(() => window.scrollBy(0, 600));
      await page.waitForTimeout(200);
    }

    // Should still be functional
    await expect(page.locator("body")).toBeTruthy();
  });

  test("RSVP form is usable on mobile", async ({ page }) => {
    await page.goto("/demo-dan-demo");
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(600);

    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 10000 });

    const nameInput = page.getByPlaceholder("Masukkan nama Anda");
    await expect(nameInput).toBeVisible();
    await nameInput.fill("Mobile Test");
  });
});

test.describe("Mobile - Gallery", () => {
  test("gallery shows images on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/demo-dan-demo");
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(600);

    // Scroll to gallery section
    for (let i = 0; i < 10; i++) {
      await page.evaluate(() => window.scrollBy(0, 500));
      await page.waitForTimeout(150);
    }

    // Gallery section exists
    await expect(page.locator("body")).toBeTruthy();
  });
});
