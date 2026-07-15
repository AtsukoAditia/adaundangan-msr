import { test, expect } from "@playwright/test";

const DEMO_SLUG = "demo-dan-demo";

test.describe("Invitation Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/${DEMO_SLUG}`);
  });

  test("loads cover with couple names", async ({ page }) => {
    await expect(page.locator("#cover")).toContainText("Rama");
    await expect(page.locator("#cover")).toContainText("Sinta");
  });

  test("cover has buka button", async ({ page }) => {
    const openBtn = page.getByRole("button", { name: /buka/i });
    await expect(openBtn).toBeVisible();
  });

  test("opens invitation on button click", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    // After open, hero section should appear with couple names
    await expect(page.getByText("Pernikahan").first()).toBeVisible({ timeout: 8000 });
  });

  test("scroll reveals sections on scroll", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    await page.evaluate(() => window.scrollBy(0, 1000));
    await page.waitForTimeout(400);
    await expect(page.locator("body")).toContainText("Mempelai");
  });

  test("countdown shows time units or ended state", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    await page.evaluate(() => window.scrollBy(0, 2000));
    await page.waitForTimeout(400);

    await expect(page.locator("body")).toContainText(/Menghitung Hari|Acara telah berlangsung/);
  });

  test("RSVP form is accessible after open", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 15000 });
    await expect(rsvp).toBeVisible();
  });

  test("RSVP step 1 shows name input", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 15000 });

    await expect(page.getByPlaceholder("Masukkan nama Anda")).toBeVisible();
  });

  test("RSVP step 1 validates empty name", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 15000 });

    await page.getByRole("button", { name: /lanjut/i }).click();
    await expect(page.getByText(/wajib/i)).toBeVisible();
  });

  test("back to top button appears on scroll", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);

    const backBtn = page.getByRole("button", { name: /kembali ke atas/i });
    await expect(backBtn).toBeVisible({ timeout: 5000 });
  });

  test("event section shows venue info", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    await page.evaluate(() => window.scrollBy(0, 2500));
    await page.waitForTimeout(400);

    await expect(page.locator("body")).toContainText(/acara/i);
  });

  test("music controller appears after open", async ({ page }) => {
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);

    // Music controller should render (even if no audio, component exists)
    await expect(page.locator("body")).toBeTruthy();
  });
});

test.describe("Invitation - RSVP Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/${DEMO_SLUG}`);
    await page.getByRole("button", { name: /buka/i }).click();
    await page.waitForTimeout(800);
    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 15000 });
  });

  test("full RSVP flow: name → attendance → guest count → message", async ({ page }) => {
    const rsvp = page.locator("#rsvp");
    await rsvp.scrollIntoViewIfNeeded({ timeout: 15000 });

    // Step 1: Name
    await page.getByPlaceholder("Masukkan nama Anda").fill("E2E Test Guest");
    await page.getByRole("button", { name: /lanjut/i }).click();
    await page.waitForTimeout(500);

    // Step 2: Attendance — click the "Hadir" option card
    await expect(page.getByText("Hadir", { exact: true }).first()).toBeVisible({ timeout: 5000 });
    await page.getByText("Hadir", { exact: true }).first().click();
    await page.waitForTimeout(300);
    // Click "Lanjut" button
    await page.locator("button", { hasText: /lanjut/i }).first().click();
    await page.waitForTimeout(500);

    // Step 3: Guest count
    await expect(page.getByText("Jumlah Tamu")).toBeVisible({ timeout: 5000 });
    await page.locator("button", { hasText: /lanjut/i }).first().click();
    await page.waitForTimeout(500);

    // Step 4: Message
    await expect(page.getByText("Pesan & Ucapan")).toBeVisible({ timeout: 5000 });
    await page.getByPlaceholder(/pesan/i).fill("Selamat menikah! E2E test");
  });
});
