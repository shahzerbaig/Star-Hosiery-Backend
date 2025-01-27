"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const express_1 = __importDefault(require("express"));
const bills_1 = __importDefault(require("./routes/bills")); // Adjust import path as needed
const rooted_1 = __importDefault(require("./routes/rooted"));
const collection_route_1 = __importDefault(require("./routes/collection.route"));
const login_route_1 = __importDefault(require("./routes/login.route"));
const checkDatabase_1 = require("./utils/checkDatabase");
const cors_1 = __importDefault(require("cors"));
const corsOption = {
    origin: ["https:localhost:4000/"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    credentials: true,
    maxAge: 86400, // 24 hours in seconds
    preflightContinue: false,
    optionsSuccessStatus: 204,
};
const PORT = process.env.PORT || "4000";
const app = (0, express_1.default)();
// Make sure to add these middleware before routes
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", [rooted_1.default, collection_route_1.default, login_route_1.default, bills_1.default]);
app.use("/api/auth", authRoutes_1.default);
app.use(rooted_1.default);
console.log((0, checkDatabase_1.checkDatabase)());
app.listen(PORT, () => {
    console.info(`Server started on ${PORT}`);
});
exports.default = app;
//# sourceMappingURL=index.js.map