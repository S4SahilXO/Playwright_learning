// Task 5 - CSS and XPath selectors


const { test, expect } = require('@playwright/test');

test('Practice CSS selectors', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const username = page.locator('#user-name');

    const password = page.locator('#password');

    const loginButton = page.locator('#login-button');

    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
    await expect(loginButton).toBeVisible();

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL(/inventory/);

});

