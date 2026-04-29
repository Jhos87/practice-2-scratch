import { test } from '../src/fixtures';


test('has title', async ({ homepage }) => {
  await homepage.goto('');
  await homepage.verifyTitle();
});

test('get started link', async ({ homepage, product }) => {
  await homepage.goto("");
  await homepage.verifyTitle();
  await homepage.clickOnProduct();
  await product.addToCart();
});
