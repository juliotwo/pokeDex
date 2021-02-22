import fetch from './fetchHelper';
import * as urls from './urls';

export const GetPokemonList = () => {
  return fetch(urls.pokemonList);
};
