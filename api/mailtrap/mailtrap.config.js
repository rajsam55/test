
import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"


dotenv.config()




export const mailTrapClient = new MailtrapClient({
  token: process.env.MAILTRAP_TOKEN, endpoint : process.env.MAILTRAP_ENDPOINT
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "glitternail",
};

