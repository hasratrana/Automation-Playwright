import { test, expect } from '@playwright/test';

test('NEG-001 - Invalid login shows error @negative', async ({ page }) => {
  await page.goto('/');
    await page.fill('#user-name', 'wrong_user');
      await page.fill('#password', 'wrong_pass');
         await page.click('#login-button');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Username and password do not match');
});
