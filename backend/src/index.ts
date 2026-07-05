import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolvers } from "./api/resolvers";
import Container from "typedi";

async function server() {
  const schema = await buildSchema({
    resolvers,
    container: Container,
  });

  const server = new ApolloServer({ schema });
  await server
    .listen()
    .then(({ url }) => console.log(`[Server] Running on ${url}`));
}

server();
