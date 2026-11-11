// Task 4 - Locate elements using labels


const { test, expect } = require('@playwright/test');

test('Locate form fields using labels', async ({ page }) => {

    await page.goto('https://demoqa.com/text-box');

    const fullName = page.getByLabel('Full Name');
    const email = page.getByLabel('Email');

    await expect(fullName).toBeVisible();
    await expect(email).toBeVisible();

    await fullName.fill('Sahil Pankaj');
    await email.fill('sahil@example.com');

    await expect(fullName).toHaveValue('Sahil Pankaj');
    await expect(email).toHaveValue('sahil@example.com');

    console.log('Label locators working successfully!');

});

