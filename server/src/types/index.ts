import { prismaClientType } from "..";

export type config = {
  min?: number;
  max?: number;
  required: boolean;
  title?: string;
};

export type SendGridTemplate = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  verificationCode: string | null;
  verificationExpirty: Date | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type contextType = { prisma: prismaClientType; request: any };
export type authPayload = { token: string; user: User };
export type signupPayload = { message: string };
