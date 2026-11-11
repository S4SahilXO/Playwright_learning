/*Task 16 – Handle checkboxes
Objective: Learn how to select and deselect checkboxes.*/


import { test, expect } from '@playwright/test';

test('Handle checkboxes', async ({ page }) => {

    await page.goto('https://demoqa.com/checkbox');

    // Locate the visible Home checkbox
    const homeCheckbox = page.getByRole('checkbox', {
        name: 'Select Home'
    });

    // Select checkbox
    await homeCheckbox.check();

    // Verify selected
    await expect(homeCheckbox).toBeChecked();

    // Unselect checkbox
    await homeCheckbox.uncheck();

    // Verify unselected
    await expect(homeCheckbox).not.toBeChecked();

    console.log('Checkbox testing successful!');

    await page.waitForTimeout(5000);

});
