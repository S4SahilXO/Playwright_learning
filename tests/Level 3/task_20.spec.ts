/*Task 20 – Handle file downloads
Objective: Learn how to download files automatically and verify their existence.*/

import { test, expect } from '@playwright/test';
import * as path from 'path';
import * as fs from 'fs';

test('Download a file', async ({ page }) => {

    await page.goto('https://demoqa.com/upload-download');

    // Start waiting for download
    const downloadPromise = page.waitForEvent('download');

    // Click download button
    await page.getByRole('button', {
        name: 'Download'
    }).click();

    // Get downloaded file
    const download = await downloadPromise;

    // Get filename
    const filename = download.suggestedFilename();

    console.log('Downloaded file:', filename);

    // Save file
    const downloadPath = path.join(
        __dirname,
        '../downloads',
        filename
    );

    fs.mkdirSync(path.dirname(downloadPath), { recursive: true });

    await download.saveAs(downloadPath);

    // Verify file exists
    expect(fs.existsSync(downloadPath)).toBe(true);

    console.log('File downloaded successfully!');

    await page.waitForTimeout(5000);

});
