import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secrer_sauce');
  await page.locator('[data-test="login-button"]').click();
});

// interview 
// selenium and playwright 
// 1 - playwright is faster then selenium , playwirght has its own browser, selenium - webdriver
// 2 - playwright is full testing bundle - UI, api and mobile, selenium - UI automation
// 3 - playwirght has auto-wait , selenium - explicit wait 