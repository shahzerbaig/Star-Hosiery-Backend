import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

async function protect(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const token = req.cookies.token;

  if (!token) res.status(401).json({ message: "Not authorized" });

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    // Find user
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!user) res.status(401).json({ message: "Not authorized" });

    // Attach user to request
    //req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
}

export default protect;
