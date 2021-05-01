import sgMail from "@sendgrid/mail";
import { SendGridTemplate } from "../types";

console.log({ env: process.env });

sgMail.setApiKey(process.env.SENDGRID);

export const sendMail = (data: SendGridTemplate) => sgMail.send(data);
