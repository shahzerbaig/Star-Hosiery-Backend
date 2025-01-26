import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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
