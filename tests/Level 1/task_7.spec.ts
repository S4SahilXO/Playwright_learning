/*Task 7: Take screenshots and generate test reports
Objective: Learn how to capture screenshots and examine test results.*/


import {test, expect} from '@playwright/test';


test('Take a SS', async ({page}) => {
    
    
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name:'Login'}).click();

    await expect(page).toHaveTitle('Swag Labs');

    await page.screenshot({
        path : 'screenshots/saucedemo.png',
        fullPage:true
    });

    console.log("SS successfuly");

    await page.waitForTimeout(5000);

})
