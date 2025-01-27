"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDatabase = checkDatabase;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function checkDatabase() {
    const filePath = path_1.default.resolve(__dirname, "../../../starhosiery.db");
    if (fs_1.default.existsSync(filePath)) {
        return { message: "Database Present", present: true };
    }
    else {
        return { message: "Database Not Found", present: false };
    }
}
//# sourceMappingURL=checkDatabase.js.map