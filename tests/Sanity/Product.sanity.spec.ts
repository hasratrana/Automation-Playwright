import { test, expect } from '@playwright/test'; 
import { ProductsPage } from '../../pages/ProductsPage';


test ('SNI-002 - Verify products page @Sanity', async ({ page }) =>{

await page.goto('/inventory.html');
const productsPage = new ProductsPage(page);
await productsPage.verifyProductsPage();
const addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
 await expect(addToCartBtn).toBeVisible();
 await addToCartBtn.click();
await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
const cartLink = page.locator('.shopping_cart_link');
await cartLink.click();
await expect(page).toHaveURL(/cart.html/);
await expect(page.locator('.cart_item')).toBeVisible(); 
const inventoryItemName = page.locator('.inventory_item_name');

await expect(inventoryItemName).toHaveText('Sauce Labs Backpack');
await expect(page.locator('.inventory_item_price')).toHaveText('$29.99');
await expect(page.locator('.cart_quantity')).toHaveText('1');
await expect(page.locator('.cart_item_label')).toBeVisible();
/* await expect(page.locator('.cart_item_label')).toContainText('Sauce Labs Backpack');
await expect(page.locator('.cart_item_label')).toContainText('$29.99');
await expect(page.locator('.cart_item_label')).toContainText('1');
await expect(page.locator('.cart_item_label')).toContainText('Sauce Labs Backpack');
await expect(page.locator('.cart_item_label')).toContainText('$29.99');
await expect(page.locator('.cart_item_label')).toContainText('1'); */
await expect(page.locator('.cart_item_label')).toContainText('Sauce Labs Backpack');
await inventoryItemName.click()
 

});  