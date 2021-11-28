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
      const {
        search, category, upcoming, featured,
      } = JSON.parse(args.query) || {};

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

      if (upcoming) {
        query.eventTimestamp = {
          gt: new Date(),
        };
        options.take = 10;
      }

      if (featured) {
        query.isFeatured = {
          equals: true,
        };
        options.take = 3;
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
  eventDetail(parent, args, { prisma }: contextType, info): Promise<Event> {
    if (!args.slug) throw new Error("Please provide event slug.");

    return prisma.event.findFirst({
      where: {
        title: args.slug,
      },
    });
  },
};

export { Query as default };
