import { Page } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page) {}

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {

        await this.page.getByPlaceholder('Username').fill('standard_user');

        await this.page.getByPlaceholder('Password').fill('secret_sauce');

        await this.page.getByRole('button', { name: 'Login' }).click();
    }
}