import { NextFunction, Request, Response, Router } from "express";

const rootRouter: Router = Router();

rootRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Hi this is Star Hosiery" });
});

export default rootRouter;
