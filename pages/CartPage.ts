import { Page, expect } from '@playwright/test';

export class CartPage {

    constructor(private page: Page) {}

    async addFirstProduct() {
        await this.page
            .getByRole('button', { name: 'Add to cart' })
            .first()
            .click();
    }

    async openCart() {
        await this.page
            .locator('[data-test="shopping-cart-link"]')
            .click();
    }

    async verifyProductInCart() {
        await expect(
            this.page.getByText('Sauce Labs Backpack')
        ).toBeVisible();
    }
}