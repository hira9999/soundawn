import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import "dotenv/config";

import { resolvers } from "./graphql/resolvers/index.js";
import { typeDefs } from "./graphql/typeDefs.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: ({ req }) => ({ req }),
});

const PORT = "4000";

mongoose
  .connect(
    `mongodb+srv://hira:${process.env.MONGODB_PASSWORD}@cluster0.sfkqz.mongodb.net/soundawn?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  )
  .then(async () => {
    console.log("mongodb connected successfully");
    await server.listen(PORT, () => {
      console.log(`Server is now running on http://localhost:${PORT}`);
    });
  });
