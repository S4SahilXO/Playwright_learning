// Task 6 - Handle multiple matching elements


const { test, expect } = require('@playwright/test');

test('Handle multiple matching buttons', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username')
        .fill('standard_user');

    await page.getByPlaceholder('Password')
        .fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    const buttons = page.getByRole('button', {
        name: 'Add to cart'
    });

    const totalButtons = await buttons.count();

    console.log('Total buttons:', totalButtons);

    expect(totalButtons).toBe(6);

    await buttons.first().click();

    await expect(buttons.first()).toHaveText('Remove');

    await expect(buttons).toHaveCount(5);

});

