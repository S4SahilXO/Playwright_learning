// Task 3 - Locate elements using placeholders


import {test, expect} from '@playwright/test';

test("locate by using placeholder", async ({page}) => {
    
    await page.goto('https://www.saucedemo.com/')

    const username = page.getByPlaceholder('Username')

    const password = page.getByPlaceholder('Password')

    await expect(username).toBeVisible();
    await expect(password).toBeVisible();


    await username.fill('standard_user')
    await password.fill('secret_sauce')

    await expect(username).toHaveValue('standard_user')
    await expect(password).toHaveValue('secret_sauce')

    const loginbtn = page.getByRole('button', {name:'Login'}).click()

    await page.waitForTimeout(5000);
    
})

