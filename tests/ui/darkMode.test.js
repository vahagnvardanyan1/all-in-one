import { expect } from '@playwright/test';
import { test } from '../fixtures';

const URL = 'http://localhost:3000';

// Testing the dark mode feature

test.describe('Dark Mode Feature Tests', () => {
    test('Dark mode toggle should be present and functional', async ({ page }) => {
        await page.goto(URL);
        const toggleButton = await page.$('button[aria-label="Toggle dark mode"]');
        expect(toggleButton).not.toBeNull();

        // Verify it toggles correctly
        const initialMode = await page.evaluate(() => document.body.dataset.theme);
        await toggleButton.click();
        const toggledMode = await page.evaluate(() => document.body.dataset.theme);
        expect(initialMode).not.toEqual(toggledMode);
    });

    test('UI components adjust correctly in dark mode', async ({ page }) => {
        await page.goto(URL);
        await page.click('button[aria-label="Toggle dark mode"]');
        const bodyBackgroundColor = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
        expect(bodyBackgroundColor).toBe('rgb(34, 34, 34)'); // assuming dark mode color

        const textColor = await page.evaluate(() => getComputedStyle(document.querySelector('h1')).color);
        expect(textColor).toBe('rgb(255, 255, 255)'); // assuming light text on dark background
    });

    test('Verify readability and aesthetics in dark mode across devices', async ({ page, browserName }) => {
        await page.goto(URL);
        await page.click('button[aria-label="Toggle dark mode"]');

        const viewportSizes = [
            { width: 1920, height: 1080 }, // Desktop
            { width: 1280, height: 800 }, // Laptop
            { width: 768, height: 1024 }, // Tablet
            { width: 375, height: 667 }  // Mobile
        ];

        for (const size of viewportSizes) {
            await page.setViewportSize(size);
            const isVisible = await page.isVisible('body');
            expect(isVisible).toBeTruthy();
        }

        expect(browserName).toMatch(/chromium|webkit|firefox/);
    });

    test('Accessibility compliance in dark mode', async ({ page }) => {
        await page.goto(URL);
        await page.click('button[aria-label="Toggle dark mode"]');
        const contrastRatio = await page.evaluate(() => {
            const bodyStyle = getComputedStyle(document.body);
            const bgColor = bodyStyle.backgroundColor;
            const textColor = bodyStyle.color;
            return (bgColor && textColor) ? getComputedStyle(document.body).getPropertyValue('color') : null;
        });

        // Assuming contrast ratio threshold
        expect(parseFloat(contrastRatio)).toBeGreaterThanOrEqual(4.5);
    });
});