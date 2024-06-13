import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { gql } from "graphql-tag";
import { connect } from "../utils/mongoDb";
const typeDefs = gql`
  type Query {
    hell: String
    firstCommit: Int
  }
`;

const resolvers = {
  Query: {
    hell: () => "Hello world!",
    firstCommit: () => 4 + 3,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Typescript: req has the type NextRequest
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
