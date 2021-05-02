import { User } from "@prisma/client";
import { contextType } from "../types";

const Query = {
  users(parent, args, { prisma }: contextType, info): Promise<User[]> {
    return prisma.user.findMany();
  },
};

export { Query as default };
