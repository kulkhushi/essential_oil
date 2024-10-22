import SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transPort = nodemailer.createTransport({
  service: "gmail",
  // host: process.env.MAIL_HOST,
  // port: 465,
  // secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMATP_PASS,
  },
} as SMTPTransport.Options);


export type SendMailType = {
  sender: Mail.Address;
  resipient?: Mail.Address[];
  subject: string;
  message: string;
};

export const sendMail = async (mailData: SendMailType) => {
  const { sender, subject, message } = mailData;
  try {
    const response = await transPort.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject,
      html: message,
      text: message,
    });
    return response;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};
