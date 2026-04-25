import { test, expect } from '@playwright/test';

test('Pokemon API - Jigglypuff', async ({ request }) => {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  // Basic assertions on the response structure
  expect(responseBody).toHaveProperty('name');
  expect(responseBody.name).toBe('jigglypuff');
  expect(responseBody).toHaveProperty('id');
  expect(responseBody.id).toBe(39);
  expect(responseBody).toHaveProperty('types');
  expect(Array.isArray(responseBody.types)).toBe(true);
  expect(responseBody.types.length).toBeGreaterThan(0);
  expect(responseBody.types[0]).toHaveProperty('type');
  expect(responseBody.types[0].type.name).toBe('normal');

  // Additional property checks
  expect(responseBody).toHaveProperty('base_experience');
  expect(responseBody.base_experience).toBe(95);
  expect(responseBody).toHaveProperty('abilities');
  expect(Array.isArray(responseBody.abilities)).toBe(true);
  expect(responseBody.abilities.length).toBeGreaterThan(0);
  expect(responseBody.abilities[0]).toHaveProperty('ability');
  expect(responseBody.abilities[0].ability.name).toBe('cute-charm');

  expect(responseBody).toHaveProperty('height');
  expect(responseBody).toHaveProperty('weight');
  expect(typeof responseBody.height).toBe('number');
  expect(typeof responseBody.weight).toBe('number');
  expect(Array.isArray(responseBody.types)).toBe(true);
});
