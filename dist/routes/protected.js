"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const protectionRouter = (0, express_1.Router)();
protectionRouter.post("/protected", authMiddleware_1.default, (req, res) => {
    res.send("Protected Area");
});
exports.default = protectionRouter;
//# sourceMappingURL=protected.js.map