import { Page, expect } from '@playwright/test';

export class CheckoutPage {
     constructor(private page: Page) {}

    async clickCheckout() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }

    async enterCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {
        await this.page.getByPlaceholder('First Name').fill(firstName);

        await this.page.getByPlaceholder('Last Name')
            .fill(lastName);

        await this.page.getByPlaceholder('Zip/Postal Code')
            .fill(postalCode);
    }

    async clickContinue() {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async clickFinish() {
        await this.page.getByRole('button', { name: 'Finish' })
            .click();
    }

    async verifyOrderCompleted() {
        await expect(
            this.page.getByText('Thank you for your order!')
        ).toBeVisible();
    }
}