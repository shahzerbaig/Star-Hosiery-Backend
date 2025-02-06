import nodemailer from "nodemailer";
import mgTransport from "nodemailer-mailgun-transport";

const api_key = process.env.SMTP_PASS_COMPANY as string;
const domain = process.env.SMTP_COMPANY as string;
// Configure Mailgun transport
const mailgunOptions = {
  auth: {
    api_key: api_key,
    domain: domain,
  },
};
const transporter = nodemailer.createTransport(mgTransport(mailgunOptions));
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   auth: {
//     user: process.env.SMTP_COMPANY,
//     pass: process.env.SMTP_PASS_COMPANY,
//   },
// });

// Send verification email
export const sendVerificationEmail = async (email: string, token: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Verify Your Email",
    html: `<a href="${process.env.CLIENT_URL}/verify/${token}">Click here to verify your email</a>`,
  });
};

// Send password reset email
export const sendResetEmail = async (email: string, token: string) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: "Reset Your Password",
    html: `<a href="${process.env.CLIENT_URL}/reset-password/${token}">Click here to reset your password</a>`,
  });
};
