import { test } from '../src/fixtures';

test('Pokemon API - Jigglypuff', async ({ pokemonAPI }) => {
    const response = await pokemonAPI.getPokemon('jigglypuff');
    await pokemonAPI.validateBody('jigglypuff', response);
});