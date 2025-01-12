"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginRouter = (0, express_1.Router)();
loginRouter.post("/login", (req, res) => {
    res.status(200).json({ message: "This is login", token: "This is token" });
});
exports.default = loginRouter;
//# sourceMappingURL=login.route.js.map