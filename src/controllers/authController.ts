import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

import { sendVerificationEmail, sendResetEmail } from "../utils/email";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET as string;

// Register a new user
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        verifyToken: crypto.randomUUID(),
      },
    });
    // Send verification email
    await sendVerificationEmail(user.email, user.verifyToken as string);

    res
      .status(201)
      .json({ message: "User registered. Check you email for Verification" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await prisma.user.findUnique({ where: { email: email } });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }
    // Generate JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + Number(process.env.COOKIE_EXPIRES_IN)),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};

// Logout user
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};

export const verifyEmail = () => {};
export const forgotPassword = () => {};
export const resetPassword = () => {};
