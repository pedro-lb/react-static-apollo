import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';

import apolloClient from "../settings/apolloClient";

const Dynamic = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        This is a dynamic page! It will not be statically exported,
        but is available at runtime.
      </div>
    </ApolloProvider>
  );
};

export default Dynamic;
