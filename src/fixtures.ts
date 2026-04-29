import {test as base} from '@playwright/test';
import { Homepage } from './pages/homepage.page';
import { Product } from './pages/product.page';
import { PokemonAPI } from './apis/pokemon.api';

type MyFixtures = {
  homepage: Homepage;
  product: Product;
  pokemonAPI: PokemonAPI;
};

export const test = base.extend<MyFixtures>({
  homepage: async ({ page }, use) => {
    const homepage = new Homepage(page);
    await use(homepage);
  },
  product: async ({ page }, use) => {
    const product = new Product(page);
    await use(product);
  },
  pokemonAPI: async ({ request }, use) => {
    const pokemonAPI = new PokemonAPI(request);
    await use(pokemonAPI);
  }
});
