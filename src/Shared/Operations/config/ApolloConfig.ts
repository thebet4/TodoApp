import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache,
})

export default client;
