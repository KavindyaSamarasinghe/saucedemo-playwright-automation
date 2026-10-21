
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users, checkoutData } from '../test-data/testData';

test.describe('SauceDemo Checkout Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.addBackpackToCart();
    await productsPage.openCart();
    await cartPage.proceedToCheckout();
  });

  test('TC_CHECKOUT_001 - Checkout information page displays', async () => {
    await expect(checkoutPage.checkoutTitle)
      .toHaveText('Checkout: Your Information');
  });

  test('TC_CHECKOUT_002 - Continue with valid information', async ({ page }) => {
    const customer = checkoutData.validCustomer;

    await checkoutPage.fillInformation(
      customer.firstName,
      customer.lastName,
      customer.postalCode
    );

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.checkoutTitle)
      .toHaveText('Checkout: Overview');

    await expect(page).toHaveURL(/checkout-step-two\.html/);
  });

  test('TC_CHECKOUT_003 - Complete an order successfully', async ({ page }) => {
    const customer = checkoutData.validCustomer;

    await checkoutPage.fillInformation(
      customer.firstName,
      customer.lastName,
      customer.postalCode
    );

    await checkoutPage.continueToOverview();
    await checkoutPage.finishOrder();

    await expect(page).toHaveURL(/checkout-complete\.html/);

    await expect(
      page.getByText('Thank you for your order!', { exact: true })
    ).toBeVisible();
  });

  test('TC_CHECKOUT_004 - First name is required', async () => {
    const customer = checkoutData.validCustomer;

    await checkoutPage.fillInformation(
      '',
      customer.lastName,
      customer.postalCode
    );

    await checkoutPage.continueToOverview();

    await expect(checkoutPage.checkoutTitle)
      .toHaveText('Checkout: Your Information');

    await expect(
      checkoutPage.page.locator('[data-test="error"]')
    ).toContainText('First Name is required');
  });
});
