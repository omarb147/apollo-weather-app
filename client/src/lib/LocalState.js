import gql from "graphql-tag";

export const typeDefs = gql`
  {
    type
    Query {
      scale: String
    }
  }
`;

export const defaults = {
  scale: "C"
};

export const resolvers = {};
