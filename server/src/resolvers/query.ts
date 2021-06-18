import { Event, Prisma, User } from "@prisma/client";
import { contextType } from "../types";

const Query = {
  users(parent, args, { prisma }: contextType, info): Promise<User[]> {
    return prisma.user.findMany();
  },

  events(parent, args, { prisma }: contextType, info): Promise<Event[]> {
    const options: Prisma.EventFindManyArgs = {
      skip: args.skip,
      take: args.take,
    };

    if (args.query) {
      options.where = {
        title: {
          contains: args.query,
        },
      };
    }

    return prisma.event.findMany({
      ...options,
    });
  },
};

export { Query as default };
