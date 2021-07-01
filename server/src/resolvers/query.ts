import { Event, Prisma, User } from "@prisma/client";
import { contextType } from "../types";
import { IsJsonString } from "../utils";

const Query = {
  users(parent, args, { prisma }: contextType, info): Promise<User[]> {
    return prisma.user.findMany();
  },

  async events(parent, args, { prisma }: contextType, info): Promise<{ count: number; events: Event[] }> {
    const options: Prisma.EventFindManyArgs = {
      skip: args.skip,
      take: args.take,
    };

    if (args.query && IsJsonString(args.query)) {
      const query: Prisma.EventWhereInput = {};
      const { search, category } = JSON.parse(args.query) || {};

      if (search) {
        query.title = {
          contains: search,
        };
      }

      if (category) {
        query.category = {
          has: category,
        };
      }

      options.where = query;
    }

    const [count, events] = await prisma.$transaction([
      prisma.event.count({
        where: options.where || {},
      }),
      prisma.event.findMany({
        ...options,
      }),
    ]);

    return {
      count,
      events,
    };
  },
};

export { Query as default };
