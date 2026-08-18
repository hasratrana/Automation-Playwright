import { test, expect } from '@playwright/test';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('SMK-004 - Complete checkout @smoke', async ({ page }) => {
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Start directly at inventory page (session already authenticated via storageState)
  await page.goto('/inventory.html');
  await expect(page).toHaveURL(/inventory/);

  // Add product and go to cart
  await cartPage.addFirstProduct();
  await cartPage.openCart();
  await expect(page).toHaveURL(/cart/);

  // Checkout flow
  await checkoutPage.clickCheckout();
  await checkoutPage.enterCustomerInformation('Hasrat', 'Tester', '201301');
  await checkoutPage.clickContinue();
  await expect(page).toHaveURL(/checkout-step-two/);

  await checkoutPage.clickFinish();
  await checkoutPage.verifyOrderCompleted();
});
