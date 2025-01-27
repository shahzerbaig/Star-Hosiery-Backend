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
exports.addCollection = addCollection;
exports.getCollection = getCollection;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function addCollection(name, amount, mode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newDate = new Date();
            const newCollection = yield prisma.collection.create({
                data: {
                    name: name,
                    date: newDate.toISOString(),
                    amount: amount,
                    mode: mode,
                },
            });
            console.log(newCollection);
        }
        catch (error) {
            throw error;
        }
    });
}
function getCollection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const collection = yield prisma.collection.findMany();
            return collection;
        }
        catch (error) {
            console.error("Error fetching collections:", error);
            throw error;
        }
    });
}
//# sourceMappingURL=collection.service.js.map