import { expect, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyProductsPage() {

    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.page.locator('.inventory_list')).toBeVisible();
  }
}
