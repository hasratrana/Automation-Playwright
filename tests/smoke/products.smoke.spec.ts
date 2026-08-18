import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';

test('SMK-002 - Verify Products Page @smoke', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    await page.goto('/inventory.html');

    await expect(page).toHaveURL(/inventory/);

    await productsPage.verifyProductsPage();
});