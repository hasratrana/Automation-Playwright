import { test, expect } from '@playwright/test';

test('REG-002 - Checkout with multiple products @regression', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add multiple products
  await page.locator('.btn_primary').nth(0).click();
  await page.locator('.btn_primary').nth(1).click();
  await page.locator('.btn_primary').nth(2).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('3');

  // Go to cart and checkout
  await page.click('.shopping_cart_link');
  await page.click('#checkout');

  await page.fill('#first-name', 'Shubham');
  await page.fill('#last-name', 'Tester');
  await page.fill('#postal-code', '250001');
  await page.click('#continue');

  // Verify summary page shows 3 items
  await expect(page.locator('.cart_item')).toHaveCount(3);
});
