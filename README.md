[![Playwright Tests](https://github.com/KavindyaSamarasinghe/saucedemo-playwright-automation/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/KavindyaSamarasinghe/saucedemo-playwright-automation/actions/workflows/playwright.yml)

# SauceDemo UI Test Automation

Automated UI testing of the [SauceDemo](https://www.saucedemo.com/) e-commerce demo application using **Playwright, TypeScript, and the Page Object Model (POM)**.

This project demonstrates practical QA automation skills, including reusable page objects, centralized test data, functional test coverage, failure diagnostics, and automated test reporting with Playwright HTML and Allure.

## Project Overview

| Item | Details |
|---|---|
| Application | SauceDemo |
| Testing type | Web UI functional testing |
| Automation framework | Playwright Test |
| Programming language | TypeScript |
| Design pattern | Page Object Model (POM) |
| Browser configured for current runs | Chromium |
| Test reports | Playwright HTML and Allure |

## Technology Stack

- **Playwright Test** â€” browser automation and test assertions
- **TypeScript** â€” maintainable, type-safe test code
- **Page Object Model** â€” separates page locators and actions from test scenarios
- **Allure** â€” interactive test reporting
- **Git and GitHub** â€” version control and portfolio sharing

## Project Structure

```text
saucedemo-playwright-automation/
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”œâ”€â”€ pages/
â”‚   â”œâ”€â”€ LoginPage.ts
â”‚   â”œâ”€â”€ ProductsPage.ts
â”‚   â”œâ”€â”€ CartPage.ts
â”‚   â””â”€â”€ CheckoutPage.ts
â”œâ”€â”€ tests/
â”‚   â”œâ”€â”€ login.spec.ts
â”‚   â”œâ”€â”€ products.spec.ts
â”‚   â”œâ”€â”€ cart.spec.ts
â”‚   â””â”€â”€ checkout.spec.ts
â”œâ”€â”€ test-data/
â”‚   â””â”€â”€ testData.ts
â”œâ”€â”€ playwright.config.ts
â”œâ”€â”€ package.json
â”œâ”€â”€ package-lock.json
â””â”€â”€ README.md
```

Generated report and test artifact directories, such as `allure-results/`, `allure-report/`, `playwright-report/`, and `test-results/`, are created when tests run. They may be excluded from version control according to the project's `.gitignore` configuration.

## Test Coverage

The project currently contains **13 automated test cases**.

| Test area | Coverage | Test cases |
|---|---|---:|
| Login | Successful login and locked-out user validation | 2 |
| Products | Product page, product count, and add-to-cart behavior | 3 |
| Shopping cart | Cart page, item count, product name, and checkout button | 4 |
| Checkout | Information page, valid customer information, order completion, and required-field validation | 4 |
| **Total** | | **13** |

### Example scenarios

- Verify that a valid user can log in.
- Verify that a locked-out user cannot log in.
- Verify that six products appear on the inventory page.
- Add the Sauce Labs Backpack to the cart.
- Verify the cart contains the expected product.
- Complete the checkout process successfully.
- Verify that the first name is required during checkout.

## Framework Design

### Page Object Model

Each page class encapsulates relevant locators and user interactions:

- `LoginPage.ts` â€” login form and authentication actions
- `ProductsPage.ts` â€” product list and add-to-cart actions
- `CartPage.ts` â€” cart validation and checkout navigation
- `CheckoutPage.ts` â€” customer information and order completion

Test specifications use these page objects to keep test scenarios readable and reduce duplicated interaction code.

### Centralized test data

The `test-data/testData.ts` file stores reusable demo user credentials and checkout information.

This separates test inputs from test logic and makes it easier to maintain or extend test scenarios.

The credentials in this project are public SauceDemo demonstration credentials, not credentials for a private account.

## Reporting and Failure Diagnostics

### Playwright HTML report

The Playwright HTML reporter provides a visual summary of test execution, including passed and failed tests.

Generate the report automatically by running the test suite, then open it with:

```powershell
npm run report:playwright
```

### Allure report

Allure provides an interactive report with test results, suites, and execution details.

Generate the report:

```powershell
npm run report:allure:generate
```

Open the generated report locally:

```powershell
npm run report:allure:open
```

The project also configures the following failure diagnostics:

- Screenshots are captured when tests fail.
- Video recordings are retained for failed tests.
- Traces are configured to be captured on the first retry.

Local retries are currently disabled by default, so trace collection on retry is most useful when retries are enabled, such as in CI.

## Prerequisites

Install the following before running the project:

- Node.js and npm
- Git
- Visual Studio Code or another TypeScript editor

## Installation and Setup

### 1. Clone the repository

After publishing this project to GitHub, clone it using your repository URL:

```powershell
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd saucedemo-playwright-automation
```

Replace `<YOUR_GITHUB_REPOSITORY_URL>` with the actual URL of your published repository.

### 2. Install dependencies

```powershell
npm ci
```

### 3. Install the Chromium browser

```powershell
npx playwright install chromium
```

### 4. Run the automated tests

```powershell
npm test
```

The current `npm test` script runs the suite against Chromium.

## Available Commands

| Command | Purpose |
|---|---|
| `npm test` | Run all tests in Chromium |
| `npm run test:headed` | Run tests with the browser visible |
| `npm run test:debug` | Debug tests with Playwright Inspector |
| `npm run report:playwright` | Open the Playwright HTML report |
| `npm run report:allure:generate` | Generate the Allure report |
| `npm run report:allure:open` | Open the Allure report locally |

## Example Execution Results

The following results were observed during development on **21 October 2026**.

| Metric | Result |
|---|---:|
| Automated tests executed | 13 |
| Passed | 13 |
| Failed | 0 |
| Pass rate | 100% |
| Latest recorded full-suite execution time | 11.6 seconds |
| Browser | Chromium |

These are actual development-run results, not a guarantee of future execution time or outcomes.

## Future Improvements

Potential next steps include:

- Add negative and boundary-value test scenarios.
- Expand checkout and cart validation coverage.
- Add API tests and response validation.
- Integrate test execution and report artifacts into a CI workflow.
- Improve trace availability for local debugging.
- Add cross-browser coverage after installing and validating Firefox and WebKit.
- Publish the repository with screenshots of the generated reports.

## Disclaimer

This project is for learning, demonstration, and portfolio purposes. It tests the publicly available SauceDemo demonstration application and does not represent testing of a production e-commerce system.

---

**Author:** Kavindya Samarasinghe
**Focus:** Quality Assurance | Playwright | TypeScript | UI Test Automation | Test Reporting
