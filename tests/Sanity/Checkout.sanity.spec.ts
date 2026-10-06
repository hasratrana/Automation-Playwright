import { test, expect } from '@playwright/test';

test('SAN-004 - Verify checkout requires customer info @sanity', async ({ page }) => {
  await page.goto('/inventory.html');

  
  await page.locator('.btn_primary').first().click();
   await page.click('.shopping_cart_link');
    await page.click('#checkout');
     await page.click('#continue');
      await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
});
