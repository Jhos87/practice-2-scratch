import { type Page, expect } from '@playwright/test';
export class BasePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    async goto() 
    {
        await this.page.goto('');
    }

    async verifyTitle()    
    {
        await expect(this.page).toHaveTitle('Sauce Demo');
    }
}