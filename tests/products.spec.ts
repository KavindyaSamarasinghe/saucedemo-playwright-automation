
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('SauceDemo Products Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);

    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('TC_PRODUCTS_001 - Products page displays after login', async ({ page }) => {
    await expect(page).toHaveURL(/inventory.html/);
    await expect(productsPage.pageTitle).toBeVisible();
  });

  test('TC_PRODUCTS_002 - Product list contains six products', async () => {
    await expect(productsPage.inventoryItems).toHaveCount(6);
  });

  test('TC_PRODUCTS_003 - Add Backpack to cart', async () => {
    await productsPage.addBackpackToCart();

    await expect(productsPage.shoppingCartBadge).toHaveText('1');
  });
});
