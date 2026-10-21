
import { type Page, type Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inventoryItems: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;
  readonly backpackName: Locator;
  readonly addBackpackButton: Locator;


  constructor(page: Page) {
    this.page = page;

    this.pageTitle = page.getByText('Products', { exact: true });
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.backpackName = page
  .locator('[data-test="inventory-item-name"]')
  .filter({ hasText: 'Sauce Labs Backpack' });

this.addBackpackButton = page.locator(
  '[data-test="add-to-cart-sauce-labs-backpack"]'
);
  }

  async getProductCount(): Promise<number> {
    return await this.inventoryItems.count();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }

async addBackpackToCart(): Promise<void> {
  await this.addBackpackButton.click();
}

}
