// Task 2: Open Google and verify the page title
// Objective: Learn navigation, page titles and assertions.

import {test, expect} from '@playwright/test'

test('open google', async ({page}) => {

    await page.goto('https://google.com');

    await expect(page).toHaveTitle(/Google/);

    console.log("Google website open and it verify the title of page");

    await page.waitForTimeout(10000)
    
})
