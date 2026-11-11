// Task 7 - Handle hidden, disabled and visible elements


const { test, expect } = require('@playwright/test');

test('Check element states', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    const username = page.locator('#user-name');

    const loginButton = page.locator('#login-button');

    await expect(username).toBeVisible();

    await expect(loginButton).toBeVisible();

    await expect(loginButton).toBeEnabled();

    await username.fill('invalid_user');

    await page.locator('#password').fill('wrong_password');

    await loginButton.click();

    await expect(
        page.locator('[data-test="error"]')
    ).toBeVisible();

    console.log('Element state verification completed!');

});

