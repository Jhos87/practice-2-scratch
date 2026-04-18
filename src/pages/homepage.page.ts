import { Locator, type Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class Homepage extends BasePage {

  private productLocator: Locator = this.page.getByRole('heading', { name: 'Grey jacket' }); 

  constructor(page: Page) {
      super(page);
  }

    async clickOnProduct() {
        await this.productLocator.click();
    }

}