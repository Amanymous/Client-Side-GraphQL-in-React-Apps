import React from 'react';
// import { render } from 'react-dom';
import { client } from '../GraphQl-Config/graphQl';
import { ApolloProvider } from '@apollo/client';
import { Students } from './Students';
export function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app </h2>
        <Students />
      </div>
    </ApolloProvider>
  );
}
