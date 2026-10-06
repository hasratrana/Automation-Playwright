import { test, expect } from '@playwright/test';

test('SAN-003 - Verify cart add/remove works @sanity', async ({ page }) => {
  await page.goto('/inventory.html');

  
  await page.locator('.btn_primary').first().click();
   await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.locator('.btn_secondary').first().click();
     await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});
