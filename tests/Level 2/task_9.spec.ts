// Task 2 - Locate buttons and links using roles




import { test, expect } from '@playwright/test';

test('locate button and links by using getbyrole ', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    
    const Loginbtn = page.getByRole('button', {name:'Login'});

    await expect(Loginbtn).toBeVisible();

    await expect(Loginbtn).toBeEnabled();

    await expect(Loginbtn).toHaveText('Login');

    console.log("Yes button found out by using getbyrole");

});