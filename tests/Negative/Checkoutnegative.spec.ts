import { test, expect } from '@playwright/test';

test('NEG-002 - Checkout with empty cart shows error @negative', async ({ page }) => {

    await page.goto('/cart.html');

    await page.click('#checkout');

    console.log('URL:', page.url());
    console.log('PAGE TEXT:', await page.locator('body').innerText());

});