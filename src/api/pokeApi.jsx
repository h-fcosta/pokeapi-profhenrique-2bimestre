import axios from "axios";
const api = axios.create({ baseURL: "https://pokeapi.co/api/v2" });

export const listPokemons = (limit = 151, offset = 0) =>
  api.get(`/pokemon?limit=${limit}&offset=${offset}`);

export const getPokemon = (name) => api.get(`/pokemon/${name.toLowerCase()}`);
