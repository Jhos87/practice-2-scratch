import { test } from '../src/fixtures';

test('Pokemon API - Jigglypuff', async ({ pokemonAPI }) => {
    await pokemonAPI.getPokemon('jigglypuff');
});