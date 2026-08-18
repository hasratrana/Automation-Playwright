import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';

test('SMK-003 - Add product to cart @smoke', async ({ page }) => {
  const cartPage = new CartPage(page);
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory/);

  await cartPage.addFirstProduct();
  await cartPage.openCart();
  await expect(page).toHaveURL(/cart/);
  await cartPage.verifyProductInCart();
});
