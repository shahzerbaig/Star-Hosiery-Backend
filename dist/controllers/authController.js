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
exports.resetPassword = exports.forgotPassword = exports.verifyEmail = exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const email_1 = require("../utils/email");
const prisma = new client_1.PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;
// Register a new user
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Check if user exists
        const existingUser = yield prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        // Hash Password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // create user
        const user = yield prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                verifyToken: crypto.randomUUID(),
            },
        });
        // Send verification email
        yield (0, email_1.sendVerificationEmail)(user.email, user.verifyToken);
        res
            .status(201)
            .json({ message: "User registered. Check you email for Verification" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Find user
        const user = yield prisma.user.findUnique({ where: { email: email } });
        if (!user) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        // Check password
        const isPasswordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRES_IN)),
            secure: process.env.NODE_ENV === "production",
        });
        res.status(200).json({ message: "Logged in successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error });
    }
});
exports.login = login;
// Logout user
const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
};
exports.logout = logout;
const verifyEmail = () => { };
exports.verifyEmail = verifyEmail;
const forgotPassword = () => { };
exports.forgotPassword = forgotPassword;
const resetPassword = () => { };
exports.resetPassword = resetPassword;
//# sourceMappingURL=authController.js.map