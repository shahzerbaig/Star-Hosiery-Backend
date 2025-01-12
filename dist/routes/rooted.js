"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rootRouter = (0, express_1.Router)();
rootRouter.get("/", (req, res, next) => {
    res.status(200).json({ message: "Hi this is Star Hosiery" });
});
exports.default = rootRouter;
//# sourceMappingURL=rooted.js.map