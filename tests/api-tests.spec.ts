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
});