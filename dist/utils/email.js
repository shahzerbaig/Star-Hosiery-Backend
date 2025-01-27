"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResetEmail = exports.sendVerificationEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});
// Send verification email
const sendVerificationEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    yield transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Verify Your Email",
        html: `<a href="${process.env.CLIENT_URL}/verify/${token}">Click here to verify your email</a>`,
    });
});
exports.sendVerificationEmail = sendVerificationEmail;
// Send password reset email
const sendResetEmail = (email, token) => __awaiter(void 0, void 0, void 0, function* () {
    yield transporter.sendMail({
        from: process.env.SMTP_USER,
        to: email,
        subject: "Reset Your Password",
        html: `<a href="${process.env.CLIENT_URL}/reset-password/${token}">Click here to reset your password</a>`,
    });
});
exports.sendResetEmail = sendResetEmail;
//# sourceMappingURL=email.js.map