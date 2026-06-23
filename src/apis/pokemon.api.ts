import { APIRequestContext, expect, test } from "@playwright/test";

export class PokemonAPI {
    private baseURLPokemon: string;
    private request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
        const base = 'https://pokeapi.co/api/v2';
        this.baseURLPokemon = `${base.replace(/\/$/, '')}/pokemon`;
    }
    
    async getPokemon(pokemonName: string) {
        const response = await this.request.get(`${this.baseURLPokemon}/${pokemonName}`);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        return response;
    };

    async validateBody(pokemonName: string, response: any) {
        const responseBody = await response.json();

        // Basic assertions on the response structure
        expect(responseBody).toHaveProperty('name');
        expect(responseBody.name).toBe(pokemonName);
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.id).toBe(39);
        expect(responseBody).toHaveProperty('types');
        expect(Array.isArray(responseBody.types)).toBe(true);
    };

}