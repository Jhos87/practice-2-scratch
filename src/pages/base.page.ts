import { type Page, expect } from '@playwright/test';
export class BasePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

    async goto(url: string) 
    {
        await this.page.goto(url);
        await expect(this.page).toHaveURL(url);
    }

    async verifyTitle()    
    {
        await expect(this.page).toHaveTitle('Sauce Demo');
    }
}