import { test, expect } from '../src/fixtures/base';

test('has title', async ({ page }) => {
  // await page.waitForTimeout(3000);
  await expect(page).toHaveTitle(/Playwright/);
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
});
