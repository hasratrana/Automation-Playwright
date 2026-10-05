import { expect } from '@playwright/test';
import { test } from '../../fixtures/test-fixtures';

test('SAN-002 - Verify user lands on inventory after login', async ({ page, loginPage }) => {
  // loginPage fixture already logged in
  await expect(page).toHaveURL(/inventory/);

  // Verify products are visible
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

