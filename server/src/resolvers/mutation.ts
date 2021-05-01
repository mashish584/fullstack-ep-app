import { signupPayload, contextType, ValidationBody } from "../types";
import { sendMail } from "../utils/sendGrid";
import validate from "../utils/validate";
import { createUserSchema } from "../utils/validationSchemas";

const Mutation = {
  async createUser(parent, args, { prisma }: contextType, info): Promise<signupPayload> {
    const validationSchema: Array<ValidationBody> = createUserSchema(args.data);

    const { errors } = validate(validationSchema);

    if (Object.keys(errors).length) {
      throw new Error("Please validate all inputs.");
    }

    try {
      const user = await prisma.user.create({
        data: args.data,
      });

      await sendMail({
        from: "ep@mailinator.com",
        to: user.email,
        text: "Please click below link to verify your account",
        subject: "Email Verification",
        html: "<strong>Verify</strong>",
      });
    } catch (err) {
      throw new Error("Server Error");
    }

    return {
      message: "Your account successfully created.We've send you a mail for account verification",
    };
  },
};

export { Mutation as default };
