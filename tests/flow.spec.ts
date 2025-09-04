import { test, expect } from '@playwright/test';

test('home page has start test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('Inizia il test')).toBeVisible();
});
