import { test } from '../src/fixtures';


test('has title', async ({ page, homepage }) => {
  await homepage.goto();
  await homepage.verifyTitle();
});

test('get started link', async ({ page, homepage, product }) => {
  await homepage.goto();
  await homepage.verifyTitle();
  await homepage.clickOnProduct();
  await product.addToCart();
});
