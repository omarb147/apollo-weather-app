import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql, InMemoryCache } from "apollo-boost";
import { typeDefs, defaults, resolvers } from "./lib/LocalState";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
  typeDefs,
  resolvers
});

client.writeData({ data: defaults });

client
  .query({
    query: gql`
      {
        scale @client
      }
    `
  })
  .then(result => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
