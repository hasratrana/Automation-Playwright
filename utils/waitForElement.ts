import { Locator } from '@playwright/test';

export async function waitForElement(locator: Locator, timeout = 5000) {
  await locator.waitFor({ state: 'visible', timeout });
}
