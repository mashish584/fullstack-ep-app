import { prismaClientType } from "..";

export type contextType = { prisma: prismaClientType; request: any };
export type authPayload = { token: string };
