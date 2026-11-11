// Task 4 - Locate elements using labels

import { test, expect } from '@playwright/test';

test('locator by using label', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    expect(await page.title()).toBe('Facebook');

    const email = page.getByLabel('Email address or mobile number');
    const password = page.getByLabel('Password')

    await expect(email).toBeVisible();
    await expect(password).toBeVisible();


    await page.waitForTimeout(5000);
});
