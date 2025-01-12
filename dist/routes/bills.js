"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bills_controllers_1 = require("../controllers/bills.controllers");
const router = (0, express_1.Router)();
router.post("/bills", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, amount } = req.body;
    console.log(req.body);
    try {
        yield bills_controllers_1.billsController.newBill(name, amount);
        res.status(201).json(`{messsage: Bill Created ${name}}`);
    }
    catch (error) {
        next(error);
    }
}));
router.post("/test", (req, res) => {
    const { name, amount } = req.body;
    res.send(`User created with Name: ${name}, Amount: ${amount}`);
});
exports.default = router;
//# sourceMappingURL=bills.js.map