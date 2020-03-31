import React from 'react'
import { useQuery } from '@apollo/react-hooks';

import GET_POKEMONS_QUERY from "../graphql/getPokemonsQuery";

const PokemonList = () => {
  const {
    loading,
    error,
    data,
  } = useQuery(GET_POKEMONS_QUERY);

  if (error) {
    return (
      <p>Error: {error}</p>
    );
  }

  const {
    pokemons,
  } = data || {};

  return (
    <div>
      In this very specific case, we'll use this to show pokemon names! 🐾

      {
        loading && (
          <p>Loading...</p>
        )
      }

      {
        !loading
        && pokemons.map((pokemon) => (
          <p key={pokemon.id}>
            {pokemon.name}
          </p>
        ))
      }
    </div>
  );
};

export default PokemonList;
