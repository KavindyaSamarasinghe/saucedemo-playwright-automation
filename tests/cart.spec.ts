
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('SauceDemo Cart Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await productsPage.addBackpackToCart();
    await productsPage.openCart();
  });

  test('TC_CART_001 - Cart page displays correctly', async ({ page }) => {
    await expect(page).toHaveURL(/cart.html/);
    await expect(cartPage.cartTitle).toBeVisible();
  });

  test('TC_CART_002 - Cart contains one item', async () => {
    await expect(cartPage.cartItems).toHaveCount(1);
  });

test('TC_CART_003 - Cart displays the Backpack', async ({ page }) => {
  await expect(
    page.locator('[data-test="inventory-item-name"]')
      .filter({ hasText: /^Sauce Labs Backpack$/ })
  ).toBeVisible();
});


  test('TC_CART_004 - Checkout button is visible', async () => {
    await expect(cartPage.checkoutButton).toBeVisible();
  });
});
