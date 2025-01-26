import { User } from "@prisma/client"; // Adjust this based on your user model location

declare global {
  namespace Express {
    interface Request {
      user?: User; // Or the type of your user object
    }
  }
}
