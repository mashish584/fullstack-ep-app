import { Stripe } from "stripe";
import { contextType } from "../../types";
import { getUserId } from "../../utils";

const STRIPE_SECRET_KEY =
  "sk_test_51K0Hd7SG1eYyyJfNwkOx9VjLMQPrxidxf1CQ90IZqk1Qc8RJIFGbrDnH1I2zEdDqppcnAHkNa1KuFomu33sCGLkY00DAzZsyoM";
const stripe: Stripe = require("stripe")(STRIPE_SECRET_KEY);

export const createStripeCustomer = async (parent, args, { prisma, request }: contextType, info) => {
  const user = getUserId(request, false) || "test@mailinator.com";

  const customer = await stripe.customers.create({
    email: user,
  });

  /** Once customer created update customer Id in user table */

  return {
    message: "Customer added.",
  };
};

export const addPaymentCard = async (parent, args, { prisma, request }: contextType, info) => {
  const setupIntent = await stripe.setupIntents.create({
    payment_method_types: ["card"],
  });

  return {
    source: setupIntent.id,
  };
};
