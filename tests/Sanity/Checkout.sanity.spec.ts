import { test, expect } from '@playwright/test';

test('SAN-004 - Verify checkout requires customer info @sanity', async ({ page }) => {
  await page.goto('/inventory.html');

  // Add product and go to cart
  await page.locator('.btn_primary').first().click();
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // Leave fields empty and continue
  await page.click('#continue');

  // Verify error message
  await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
});
