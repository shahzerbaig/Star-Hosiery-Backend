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
const collection_service_1 = require("../service/collection.service");
const collectionController = {
    addCollection: (name, amount, mode) => __awaiter(void 0, void 0, void 0, function* () {
        if (!name || !amount || !mode) {
            const newError = new Error();
            console.log(name, amount, mode);
            throw newError.message;
        }
        try {
            (0, collection_service_1.addCollection)(name, amount, mode);
        }
        catch (error) {
            console.log(error);
        }
    }),
    getCollection: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const collection = yield (0, collection_service_1.getCollection)();
            return collection;
        }
        catch (error) {
            console.log("Error at Collection controller at getCollection");
            throw error;
        }
    }),
};
exports.default = collectionController;
//# sourceMappingURL=collection.controllers.js.map