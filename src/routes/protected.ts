import { Request, Response, Router } from "express";
import protect from "../middlewares/authMiddleware";

const protectionRouter = Router();

protectionRouter.post("/protected", protect, (req: Request, res: Response) => {
  res.send("Protected Area");
});

export default protectionRouter;
