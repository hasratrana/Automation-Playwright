import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    // Navigate to baseURL (from playwright.config.ts)
    await loginPage.goto();

    // Perform login once before test starts
    await loginPage.login('standard_user', 'secret_sauce');

    // Expose loginPage object to the test
    await use(loginPage);
  },
});
    