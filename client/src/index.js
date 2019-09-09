import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);
