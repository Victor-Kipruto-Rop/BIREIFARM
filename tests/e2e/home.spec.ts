import { expect, test } from "@playwright/test";
test("homepage renders primary navigation and hero", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /good things grow with care/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /explore products/i })).toBeVisible();
  await expect(page.getByRole("navigation", { name: /main navigation/i })).toBeVisible();
});
test("contact page exposes required enquiry fields", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByLabel(/full name/i)).toBeVisible();
  await expect(page.getByLabel(/email address/i)).toBeVisible();
  await expect(page.getByLabel(/message/i)).toBeVisible();
});
