
import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartTitle: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartTitle = page.getByText('Your Cart', { exact: true });
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]'
    );
  }

  async getCartItemCount(): Promise<number> {
    return await this.cartItems.count();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }

  async continueShopping(): Promise<void> {
    await this.continueShoppingButton.click();
  }
}
