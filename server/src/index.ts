import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";

const prisma = new PrismaClient();

export type prismaClientType = typeof prisma;

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context(request) {
    return {
      prisma,
      request,
    };
  },
});

server.start(({ port }) => console.log(`Server is running on port ${port} 😁`));
