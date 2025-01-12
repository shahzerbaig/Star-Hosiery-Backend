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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.billsController = void 0;
const bills_1 = __importDefault(require("../service/bills"));
exports.billsController = {
    newBill: (name, amount) => __awaiter(void 0, void 0, void 0, function* () {
        if (!name || !amount) {
            console.error(`Invalid name and amount.`);
            const error = new Error("Invalid name and amount.");
            throw error.message;
        }
        else {
            (0, bills_1.default)(name, amount);
            console.log(`New bill added`);
        }
    }),
};
//# sourceMappingURL=bills.controllers.js.map