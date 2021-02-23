export const BASE_API = 'https://pokeapi.co/api/v2/';

export const pokemonList = `${BASE_API}pokemon`;
export const pokemonDetail = (name) => `${BASE_API}pokemon/${name}`;
