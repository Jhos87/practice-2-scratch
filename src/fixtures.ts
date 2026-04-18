import {test as base} from '@playwright/test';
import { Homepage } from './pages/homepage.page';
import { Product } from './pages/product.page';

type MyFixtures = {
  homepage: Homepage;
  product: Product;
};

export const test = base.extend<MyFixtures>({
  homepage: async ({ page }, use) => {
    const homepage = new Homepage(page);
    await use(homepage);
  },
  product: async ({ page }, use) => {
    const product = new Product(page);
    await use(product);
  }
});
