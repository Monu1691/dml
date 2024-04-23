import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client =  new ApolloClient({
    uri: 'http://localhost:10004/graphql',
    cache: new InMemoryCache(),
});