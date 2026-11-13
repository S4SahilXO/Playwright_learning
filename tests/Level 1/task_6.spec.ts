/*Task 6: Enter information into forms
Objective: Learn to fill forms and use keyboard actions.*/

import {test, expect} from '@playwright/test';

test('Login into website using keyboard action', async ({page}) => {
    
    await page.goto('https://www.saucedemo.com/')

    const Username = page.getByPlaceholder('Username');

    const Password = page.getByPlaceholder('Password');

    await Username.fill('standard_user');

    await Password.fill('secret_sauce');

    await expect(Username).toHaveValue('standard_user');

    await expect(Password).toHaveValue('secret_sauce')


    await Password.press('Enter');


    await expect(page).toHaveURL(/inventory\.html/);

    console.log('Form submitted successfully!');

    await page.waitForTimeout(5000)

    /*
    Important methods
    Method	-------- Purpose
    fill()	-------- Enter text
    press()	-------- Press a keyboard key
    type()	-------- Type character by character
    clear()	-------- Clear an input
    check()	-------- Select checkbox
    uncheck()	---- Unselect checkbox
    selectOption() --Select dropdown option
*/

    
})
