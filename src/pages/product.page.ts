import { Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class Product extends BasePage {

  private addToCartButton: Locator  = this.page.locator('//input[@id="add"]');;

  constructor(page: Page) 
  {
      super(page);
  }

    async addToCart() 
    {
        await this.addToCartButton.click();
    }

}