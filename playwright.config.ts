
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Run independent tests in parallel.
  fullyParallel: true,

  // Prevent accidental test.only in CI.
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI.
  retries: process.env.CI ? 2 : 0,

  // Use one worker on CI; use Playwright's default locally.
  workers: process.env.CI ? 1 : undefined,

  // Generate a self-contained HTML report.
  reporter: [
  ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ['allure-playwright', {
    resultsDir: 'allure-results',
    detail: true,
    suiteTitle: false,
  }],
],

  // Shared browser and debugging settings.
  use: {
    // Capture screenshots only when a test fails.
    screenshot: 'only-on-failure',

    // Record a trace when a failed test is retried.
    trace: 'on-first-retry',

    // Capture video only when a test fails.
    video: 'retain-on-failure',
  },

  // Browser projects.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  // Add a webServer configuration here if your project needs one.
});
