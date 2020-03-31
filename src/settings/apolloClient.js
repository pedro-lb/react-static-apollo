import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql',
});

export default client;
