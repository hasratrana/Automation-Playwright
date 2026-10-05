import { test, expect } from '@playwright/test';

test('NEG-003 - Checkout missing first name shows error @negative', async ({ page }) => {
  await page.goto('/inventory.html');
  await page.locator('.btn_primary').first().click();
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  // Leave first name empty
  await page.fill('#last-name', 'Tester');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('First Name is required');
});
