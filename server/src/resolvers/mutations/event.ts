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

export const bookEvent = async (parent, args, { prisma, request }: contextType, info) => {
  console.log("book event");
  // TODO: Check for authentication
  // const user = getUserId(request);
  // const { event } = args;
  // TODO: Check if event exist
  // TODO: Throw Error if not exist
  // TODO: If event exist check if paid or free
  // TODO: If free create a transaction id automatically without processing payment gateway else take user to perform transaction
};
