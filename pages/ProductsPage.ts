import { expect, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductsPage() {
    // Verify URL
    await expect(this.page).toHaveURL(/inventory.html/);

    // Verify product list is visible
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}
