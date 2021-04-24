import { authPayload, contextType } from "../types";

const Mutation = {
  async createUser(parent, args, { prisma }: contextType, info): Promise<authPayload> {
    return {
      token: "new token",
    };
  },
};

export { Mutation as default };
