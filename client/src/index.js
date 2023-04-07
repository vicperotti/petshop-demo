import React from 'react';
import ReactDOM from 'react-dom/client';
import { Pages } from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider,HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const httpLink = new HttpLink({
  uri: "https://4000-vicperotti-petshopdemo-kq7zy6eprl1.ws-us93.gitpod.io" //specific to my gitpod
  //uri: "http://localhost:4000" //turn this one on for non-gitpod work
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink,httpLink])
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>
);
