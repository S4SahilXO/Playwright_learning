/*Task 19 – Handle file uploads
Objective: Learn how to upload files automatically.*/


import { test, expect } from '@playwright/test';
import * as path from 'path';

test('Upload a file', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    // Create file path
    const filePath = path.join(
        __dirname,
        '../test-data/sample.txt'
    );

    // Locate file input
    const fileInput = page.locator('#uploadFile');

    // Upload file
    await fileInput.setInputFiles(filePath);

    // Verify uploaded filename
    await expect(
        page.locator('#uploadedFilePath')
    ).toContainText('sample.txt');

    console.log('File uploaded successfully!');

    await page.waitForTimeout(5000);

});
