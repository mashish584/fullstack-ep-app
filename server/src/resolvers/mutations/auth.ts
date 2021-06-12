import { uuid } from "uuidv4";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { sendMail } from "../../utils/sendGrid";

import { signupPayload, contextType, authPayload } from "../../types";
import { createUserValidation } from "../validations/auth";

export const createUser = {
  validation: createUserValidation,
  resolve: async (parent, args, { prisma, request }: contextType, info): Promise<signupPayload> => {
    // TODO: Check for email or username existence in records throw error if already in records

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
      // TODO: Create user and send a account email verification mail to user
      const { origin } = request.request.headers;
      const verificationCode = uuid();
      const password = bcrypt.hashSync(args.data.password, 10);

      const user = await prisma.user.create({
        data: {
          ...args.data,
          verificationCode,
          password,
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
};

export const verifyUserEmail = async (parent, args, { prisma }: contextType, info): Promise<{ success: boolean }> => {
  const { username, token } = args;

  try {
    /**
     * TODO: Verify user email
     *  ?If the provided username is not in records @return false
     *  *If the username found verify token & activate user account if token matched @return true
     *  *else @return false  * */

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return { success: false };
    }

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
};

export const userLogin = async (parent, args, { prisma }: contextType, info): Promise<authPayload> => {
  const { id, password } = args;
  let token;

  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: id }, { username: id }],
    },
  });

  // !Throw error if username or email is not in records
  if (!user) {
    throw new Error("Credentials combination not matcheds.");
  }

  // !Throw error if user account is not active
  if (!user.isActive) {
    throw new Error("Please verify your email account.");
  }

  // *Compare password & if match create JWT else throw error
  if (bcrypt.compareSync(password, user.password)) {
    token = jwt.sign(user, process.env.SECRET);
  } else {
    throw new Error("Credentials combination not matched.");
  }

  return {
    token,
    user,
  };
};

export const forgotPassword = async (parent, args, { prisma }: contextType, info): Promise<{ success: boolean }> => {
  const { email } = args;

  try {
    /**
     * TODO: Send temporary password to user
     *  * - Check provided email in records & update record with new temporary password
     *  * - else return  success as true
     */

    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!isUserExist) {
      return { success: true };
    }

    const temporaryPassword = uuid().substring(-1, 7);

    await prisma.user.update({
      where: {
        email,
      },
      data: {
        password: bcrypt.hashSync(temporaryPassword, 10),
        isActive: true,
      },
    });

    await sendMail({
      from: process.env.SENDER_EMAIL,
      to: email,
      text: `Please use ${temporaryPassword} as your temporary password.`,
      subject: "Forgot Password",
      html: `<p>Please use <b>${temporaryPassword}</b> as your temporary password.</p>`,
    });

    return { success: true };
  } catch (err) {
    throw new Error("Server Error");
  }
};
