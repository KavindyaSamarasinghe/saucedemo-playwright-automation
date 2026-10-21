
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { users } from '../test-data/testData';

test.describe('SauceDemo Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('TC_LOGIN_001 - Valid user can log in successfully', async ({ page }) => {
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  });

  test('TC_LOGIN_002 - Locked-out user cannot log in', async () => {
    await loginPage.login(
      users.lockedOut.username,
      users.lockedOut.password
    );

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Sorry, this user has been locked out.'
    );
  });
});
