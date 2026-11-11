/*Task 18 – Handle date pickers
Objective: Learn how to select dates from calendar controls.*/


import { test, expect } from '@playwright/test';

test('Handle date picker', async ({ page }) => {

    await page.goto('https://demoqa.com/date-picker');

    // Locate date input
    const dateInput = page.locator('#datePickerMonthYearInput');

    // Select date
    await dateInput.fill('11/06/2026');

    // Verify selected date
    await expect(dateInput).toHaveValue('11/06/2026');

    // Locate date and time input
    const dateTimeInput = page.locator('#dateAndTimePickerInput');

    // Select date and time
    await dateTimeInput.fill('November 6, 2026 3:30 PM');

    // Verify
    await expect(dateTimeInput)
        .toHaveValue('November 6, 2026 3:30 PM');

    console.log('Date picker testing successful!');

    await page.waitForTimeout(5000);

});
