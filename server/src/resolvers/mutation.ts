import { uuid } from "uuidv4";
import bcrypt from "bcryptjs";
import { signupPayload, contextType, ValidationBody } from "../types";
import { sendMail } from "../utils/sendGrid";
import validate from "../utils/validate";
import { createUserSchema } from "../utils/validationSchemas";

const Mutation = {
  async createUser(parent, args, { prisma, request }: contextType, info): Promise<signupPayload> {
    const validationSchema: Array<ValidationBody> = createUserSchema(args.data);

    const { errors } = validate(validationSchema);

    if (Object.keys(errors).length) {
      throw new Error("Please validate all inputs.");
    }

    // Check for email or username existence in records

    const isUsernameExist = await prisma.user.findFirst({
      where: {
        username: args.data.username,
      },
    });

    if (isUsernameExist) {
      throw new Error("Username is not available.");
    }

    const isEmailExist = await prisma.user.findFirst({
      where: {
        email: args.data.email,
      },
    });

    if (isEmailExist) {
      throw new Error("Email address is not available.");
    }

    try {
      const { origin } = request.request.headers;
      const verificationCode = uuid();
      const password = bcrypt.hashSync(args.data.password, 10);

      // create user record & send account verification mail to user
      const user = await prisma.user.create({
        data: {
          verificationCode,
          password,
          ...args.data,
        },
      });

      await sendMail({
        from: process.env.SENDER_EMAIL,
        to: user.email,
        text: `Please click below link to verify your account.${origin}/account/${verificationCode}/?user=${user.username}`,
        subject: "Email Verification",
        html: `<p>Please click below link to verify your account.</p><br/><a href="${origin}/account/${verificationCode}/?user=${user.username}">Verify Now</a>`,
      });
    } catch (err) {
      throw new Error("Server Error");
    }

    return {
      message: "Your account successfully created.We've send you a mail for account verification",
    };
  },
  async verifyUserEmail(parent, args, { prisma, request }: contextType, info): Promise<{ success: boolean }> {
    const { username, token } = args;

    try {
      // check for username existence
      const user = await prisma.user.findFirst({
        where: {
          username,
        },
      });

      if (!user) {
        return { success: false };
      }

      /*
        check for verificationCode from db if it's match
        with request set it as empty
      */

      if (token === user.verificationCode) {
        await prisma.user.update({
          where: {
            username,
          },
          data: {
            verificationCode: null,
            isActive: true,
          },
        });
        return { success: true };
      }

      return { success: false };
    } catch (err) {
      throw new Error("Server Error");
    }
  },
};

export { Mutation as default };
