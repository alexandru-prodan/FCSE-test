import { ApolloServer } from "apollo-server";
import typeDefs from "./schema.graphql"; // import your schema here
import resolvers from "./resolvers"; // import your resolvers

import schema from "./schema.graphql";

const server = new ApolloServer({
    schema,
  resolvers,
  context: ({ req }) => {
    // Add authorization logic if needed
    return { user: req.user };
  },
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
