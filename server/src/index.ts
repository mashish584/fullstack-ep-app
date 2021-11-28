import { PrismaClient } from "@prisma/client";
import { GraphQLServer } from "graphql-yoga";
import cookieParser from "cookie-parser";
import { resolvers } from "./resolvers";
import { yupMutationMiddleware } from "./middlewares/yup_mutation";

const prisma = new PrismaClient();

export type prismaClientType = typeof prisma;

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  middlewares: [yupMutationMiddleware],
  context(request) {
    return {
      prisma,
      request,
    };
  },
});

server.express.use(cookieParser());

server.start(
  {
    cors: {
      credentials: true,
      origin: "http://localhost:3000",
    },
    uploads: {
      maxFileSize: 25000000,
      maxFieldSize: 25000000,
      maxFiles: 5,
    },
  },
  ({ port }) =>
    console.log(`
      Server is running on port ${port} 🚀
      Run npx prisma studio for viewing records in interactive table
    `),
);
