import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/pokemon/", // ✅ Fixed typo
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (name) => ({
        url: `${name}`, // ✅ Fetches data from https://pokeapi.co/api/v2/pokemon/{name}
        method: "GET", // ✅ PokeAPI uses GET, not POST
      }),
    }),
  }),
});

export const { useGetPokemonQuery } = pokemonApi;
