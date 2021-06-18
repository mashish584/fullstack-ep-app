import { contextType } from "../../types";
import { getUserId } from "../../utils";
import { createEventValidation } from "../validations/event";

export const createEvent = {
  validation: createEventValidation,
  resolve: async (parent, args, { prisma, request }: contextType, info) => {
    // TODO: Check for authentication
    const user = getUserId(request);

    // TODO: Authentication passed create event & link current user with it
    let event;
    if (user) {
      event = await prisma.event.create({
        data: {
          owner: {
            connect: {
              id: user.id,
            },
          },
          ...args.data,
        },
      });
    }
    return event;
  },
};
