/*Task 21 – Handle JavaScript alerts and dialogs
Objective: Learn how to handle browser alerts, confirmations and prompts.*/


import { test, expect } from '@playwright/test';

test('Handle JavaScript alerts', async ({ page }) => {

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    // Handle alert dialog
    page.once('dialog', async dialog => {

        console.log('Alert message:', dialog.message());

        await dialog.accept();

    });

    // Trigger alert
    await page.getByRole('button', {
        name: 'Click for JS Alert'
    }).click();

    // Verify result
    await expect(page.locator('#result'))
        .toHaveText('You successfully clicked an alert');

    console.log('Alert handled successfully!');

    await page.waitForTimeout(5000);

});
