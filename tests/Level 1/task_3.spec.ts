/*Task 3: Navigate between multiple pages
Objective: Learn how to navigate between websites and verify URLs.*/

import {test, expect} from '@playwright/test';

test('Navigating between pages', async ({page}) => {
    await page.goto('https://www.facebook.com');

    await expect(page).toHaveURL(/facebook/);

    await page.goto('https://www.youtube.com');

    await expect(page).toHaveURL(/youtube/);

    await page.goBack();

    await expect(page).toHaveURL(/facebook/);

    await page.goForward();

    await expect(page).toHaveURL(/youtube/);

    await page.reload();
    
    console.log("Navigating done successfully");

    await page.waitForTimeout(5000);
})