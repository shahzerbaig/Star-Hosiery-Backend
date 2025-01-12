import { billsType } from "./../types/billsType";
import { NextFunction, Request, Response, Router } from "express";
import { billsController } from "../controllers/bills.controllers";

const router: Router = Router();

router.post(
  "/bills",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, amount }: billsType = req.body;
    console.log(req.body);

    try {
      await billsController.newBill(name, amount);
      res.status(201).json(`{messsage: Bill Created ${name}}`);
    } catch (error) {
      next(error);
    }
  }
);

router.post("/test", (req, res) => {
  const { name, amount } = req.body;
  res.send(`User created with Name: ${name}, Amount: ${amount}`);
});

export default router;
