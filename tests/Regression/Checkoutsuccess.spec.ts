import { test, expect } from '@playwright/test';

test('REG-001 - Successful checkout flow @regression', async ({ page }) => {
  await page.goto('/');
   await page.fill('#user-name', 'standard_user');
     await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');

  
  await page.locator('.btn_primary').first().click();
     await page.click('.shopping_cart_link');
         await page.click('#checkout');

  
  await page.fill('#first-name', 'Shubham');
    await page.fill('#last-name', 'Tester');
       await page.fill('#postal-code', '250001');
            await page.click('#continue');

  
  await page.click('#finish');
      await expect(page.locator('.complete-header'))
                  .toHaveText('Thank you for your order!');
});
