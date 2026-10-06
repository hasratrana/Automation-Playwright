import { expect } from '@playwright/test';
import { test } from '../../fixtures/test-fixtures';

test('SAN-002 - Verify user lands on inventory after login', async ({ page, loginPage }) => {
  
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});

