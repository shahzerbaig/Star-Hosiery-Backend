"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const collection_controllers_1 = __importDefault(require("../controllers/collection.controllers"));
const express_1 = require("express");
const collectionRouter = (0, express_1.Router)();
collectionRouter.post("/collection", (req, res, next) => {
    const { name, amount, mode } = req.body;
    collection_controllers_1.default
        .addCollection(name, amount, mode)
        .then(() => res.status(200).json({ message: "This is /collection route" }))
        .catch((error) => {
        console.log(error);
        res
            .status(500)
            .json({ message: "Somthing wrong happed", error: error });
    });
});
collectionRouter.get("/getcollection", (req, res, next) => {
    collection_controllers_1.default
        .getCollection()
        .then((collection) => res.status(200).json({ message: collection }))
        .catch((error) => console.log("error at get Collection route"));
});
exports.default = collectionRouter;
//# sourceMappingURL=collection.route.js.map