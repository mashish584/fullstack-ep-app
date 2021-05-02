import sgMail from "@sendgrid/mail";
import { SendGridTemplate } from "../types";

sgMail.setApiKey(process.env.SENDGRID);

export const sendMail = (data: SendGridTemplate) => sgMail.send(data);
