// Task 6 - Handle multiple matching elements



import { test, expect } from '@playwright/test';

test('handle multiple matching elements', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    const buttons = page.getByRole('button', {name:'Add to cart'});

    const totalbtn = await buttons.count();

    console.log("Total button = ", totalbtn);

    expect(totalbtn).toBe(6)

    await buttons.first().click();
    await buttons.nth(1).click();
    await buttons.nth(2).click();
    await buttons.last().click();


    await page.waitForTimeout(5000);
});