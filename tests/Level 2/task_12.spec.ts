// Task 12 - CSS and XPath selectors


import { test, expect } from '@playwright/test';

test('locator by using css selectors', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const username = page.locator('#user-name');
    const password = page.locator('#password');
    const loginbtn = page.locator('#login-button');
    
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginbtn).toBeVisible();

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginbtn.click();


    await page.waitForTimeout(5000);
});
