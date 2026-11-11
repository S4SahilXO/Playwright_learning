/*Select country, state and city*/


import { test, expect } from '@playwright/test';

test('Handle dropdowns', async ({ page }) => {

    await page.goto('https://demoqa.com/select-menu');

    // Locate the standard HTML dropdown
    const dropdown = page.locator('#oldSelectMenu');

    // Select India
    await dropdown.selectOption({
        label: 'Indigo'
    });

    // Verify selected value
    await expect(dropdown).toHaveValue('8');

    // Verify selected option
    await expect(dropdown.locator('option:checked'))
        .toHaveText('Indigo');

    console.log('Dropdown selection successful!');

    await page.waitForTimeout(5000);

});
