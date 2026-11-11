/*Task 17 – Handle radio buttons
Objective: Learn how to select one option from a group of radio buttons.*/


import { test, expect } from '@playwright/test';

test('Handle radio buttons', async ({ page }) => {

    await page.goto('https://demoqa.com/radio-button');

    // Locate Yes radio button
    const yesRadio = page.getByRole('radio', {
        name: 'Yes'
    });

    // Select Yes
    await yesRadio.check();

    // Verify selection
    await expect(yesRadio).toBeChecked();

    // Verify result message
    await expect(
        page.locator('.text-success')
    ).toHaveText('Yes');

    console.log('Radio button selected successfully!');

    await page.waitForTimeout(5000);

});
