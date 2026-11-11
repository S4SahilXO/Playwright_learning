/*Locate elements using text*/

import {test , expect} from '@playwright/test'


test('Locate elements using text', async ({page}) => {

    await page.goto('https://www.saucedemo.com/');

    const Loginbtn = page.getByText('Login', {exact:true});

    await expect(Loginbtn).toBeVisible();

    await expect(Loginbtn).toHaveText('Login');

    console.log("Text found out")


});