import { Router, Request, Response } from "express";

const loginRouter = Router();

loginRouter.post("/login", (req: Request, res: Response) => {
  res.status(200).json({ message: "This is login", token: "This is token" });
});

export default loginRouter;
