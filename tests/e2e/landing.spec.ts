import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for hero animations to complete (1s delay + animation)
    await page.waitForTimeout(2000);
  });

  test("loads hero section with title", async ({ page }) => {
    await expect(page).toHaveTitle(/AdaUndangan/i);
    await expect(page.getByText("Bagikan Hari Bahagia")).toBeVisible();
    await expect(page.getByText("dalam Satu Tautan")).toBeVisible();
  });

  test("hero CTA buttons are visible", async ({ page }) => {
    await expect(page.getByRole("link", { name: /lihat demo/i }).first()).toBeVisible({ timeout: 8000 });
    await expect(page.getByRole("link", { name: /pesan sekarang/i }).first()).toBeVisible({ timeout: 8000 });
  });

  test("navigates to demo on CTA click", async ({ page }) => {
    await page.getByRole("link", { name: /lihat demo/i }).click();
    await page.waitForURL(/\/[a-z-]+/);
    await expect(page.locator("body")).toBeVisible();
  });

  test("scrolls to features section", async ({ page }) => {
    await page.evaluate(() => document.getElementById("fitur")?.scrollIntoView());
    await page.waitForTimeout(300);
    await expect(page.getByText("Fitur Unggulan")).toBeVisible();
  });

  test("scrolls to pricing section", async ({ page }) => {
    await page.evaluate(() => document.getElementById("paket")?.scrollIntoView());
    await page.waitForTimeout(300);
    await expect(page.getByText("Paket Harga")).toBeVisible();
  });

  test("features grid has 8 cards", async ({ page }) => {
    await page.evaluate(() => document.getElementById("fitur")?.scrollIntoView());
    await page.waitForTimeout(800);
    const cards = page.locator("#fitur .grid > div");
    await expect(cards).toHaveCount(8);
  });

  test("pricing has 4 packages", async ({ page }) => {
    await page.evaluate(() => document.getElementById("paket")?.scrollIntoView());
    await page.waitForTimeout(800);
    const packages = page.locator("#paket .grid > div");
    await expect(packages).toHaveCount(4);
  });

  test("footer has site name", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    await expect(page.getByText("© 2026")).toBeVisible();
  });

  test("navbar links are visible on desktop", async ({ page }) => {
    await expect(page.getByRole("link", { name: "AdaUndangan" })).toBeVisible();
  });
});
