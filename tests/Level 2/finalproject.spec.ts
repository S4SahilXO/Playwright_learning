/*Build a SauceDemo product selection automation*/

import { test, expect } from '@playwright/test';

// test.use({ headless: true });

test('Selection Automation', async ({ page }) => {
    await page.goto('https://saucedemo.com/');
    
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    const loginButton = page.getByRole('button', {name:'Login'})

    await expect(loginButton).toBeVisible();

    await expect(loginButton).toBeEnabled();

    await loginButton.click();

    await expect(page.getByText('Products', { exact: true })).toBeVisible();

    const addToCartBtn = page.getByRole('button', {name:'Add to cart'})

    const btncount = await addToCartBtn.count();

    console.log("Total button = ", btncount);

    const boltTShirtButton = page
        .locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bolt T-Shirt' })
        .getByRole('button', { name: /Add to cart|Remove/ });
    await boltTShirtButton.click();

    await expect(boltTShirtButton).toHaveText('Remove');

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await page.getByRole('button', {name: /Cart, 1 items/ }).click();

    await expect(
        page.getByText('Sauce Labs Bolt T-Shirt', { exact: true })
    ).toBeVisible();

    await page.getByRole('button', { name: 'Checkout' }).click();

    await expect(page.getByText('Checkout: Your Information', { exact: true }))
        .toBeVisible();

    await page.getByPlaceholder('First Name').fill('Sahil');
    await page.getByPlaceholder('Last Name').fill('Pankaj');
    await page.getByPlaceholder('Zip/Postal Code').fill('201301');
    await page.getByRole('button', { name: 'Continue' }).click();

    await expect(page.getByText('Checkout: Overview', { exact: true }))
        .toBeVisible();
    await expect(page.getByText('Sauce Labs Bolt T-Shirt', { exact: true }))
        .toBeVisible();

    await page.getByRole('button', { name: 'Finish' }).click();

    await expect(page.getByText('Thank you for your order!', { exact: true }))
        .toBeVisible();

    await page.screenshot({
        path: 'screenshots/saucedemo-order-confirmation.png',
        fullPage: true
    });

    await page.pdf({
        path: 'pdf/saucedemo-order-confirmation.pdf',
        format: 'A4',
        printBackground: true
    });



});
