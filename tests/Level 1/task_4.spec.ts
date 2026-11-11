/*Task 4: Locate headings, paragraphs and links
Objective: Learn how to identify elements on a website.*/

import {test, expect} from '@playwright/test';

test ('Locate an elements', async ({page}) => {
    
    await page.goto('https://www.saucedemo.com/')

    const Username = page.getByPlaceholder('Username')
    const Passwword = page.getByPlaceholder('Password')

    const loginbutton = page.getByRole('button', {name: 'Login'})

    await expect(Username).toBeVisible();
    await expect(Passwword).toBeVisible();
    await expect(loginbutton).toBeVisible();

    console.log("All elements found successfully");
})