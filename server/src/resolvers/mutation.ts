import { authPayload, contextType, ValidationBody } from "../types";
import validate from "../utils/validate";
import { createUserSchema } from "../utils/validationSchemas";

const Mutation = {
  async createUser(parent, args, { prisma }: contextType, info): Promise<authPayload> {
    const validationSchema: Array<ValidationBody> = createUserSchema(args.data);

    const { errors } = validate(validationSchema);
    console.log({ errors });

    return {
      token: "new token",
    };
  },
};

export { Mutation as default };
