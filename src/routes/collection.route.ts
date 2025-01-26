import collectionController from "../controllers/collection.controllers";
import { Request, Response, NextFunction, Router } from "express";

const collectionRouter = Router();

collectionRouter.post(
  "/collection",
  (req: Request, res: Response, next: NextFunction) => {
    const { name, amount, mode } = req.body;

    collectionController
      .addCollection(name, amount, mode)
      .then(() =>
        res.status(200).json({ message: "This is /collection route" })
      )
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .json({ message: "Somthing wrong happed", error: error });
      });
  }
);

collectionRouter.get(
  "/getcollection",
  (req: Request, res: Response, next: NextFunction) => {
    collectionController
      .getCollection()
      .then((collection) => res.status(200).json({ message: collection }))
      .catch((error) => console.log("error at get Collection route"));
  }
);
export default collectionRouter;
