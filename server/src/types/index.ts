import { prismaClientType } from "..";

export type contextType = { prisma: prismaClientType; request: any };
export type authPayload = { token: string };
export type signupPayload = { message: string };

export type config = {
  min?: number;
  max?: number;
  required: boolean;
  title?: string;
};

export type validationBodyType = "text" | "email" | "password";
export interface ValidationBody {
  type: "text" | "email" | "password";
  key: string;
  value: string;
  config?: config;
}

export type SendGridTemplate = {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
};
