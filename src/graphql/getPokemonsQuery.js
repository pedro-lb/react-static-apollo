import { gql } from "apollo-boost";

const GET_POKEMONS_QUERY = gql`
  query GetPokemons {
    pokemons (first: 100) {
      id
      name
    }
  }
`;

export default GET_POKEMONS_QUERY;
