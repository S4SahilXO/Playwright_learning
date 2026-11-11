/*Task 5: Click buttons and links
Objective: Learn how to interact with website elements.*/


import {test, expect} from '@playwright/test';

test('Login', async ({page}) => {
    
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    const loginbutton = page.getByRole('button', {name:'Login'}).click();

    await expect(page).toHaveURL(/inventory/);

    await expect(page.getByText('Products', {exact:true})).toBeVisible();

    console.log("Login Successfully");


    await page.waitForTimeout(5000);
});