import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes";
import express, { Request, Response, NextFunction, Express } from "express";

import router from "./routes/bills"; // Adjust import path as needed
import rootRouter from "./routes/rooted";
import collectionRouter from "./routes/collection.route";
import loginRouter from "./routes/login.route";
import { checkDatabase } from "./utils/checkDatabase";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
import protectionRouter from "./routes/protected";

const allowedOrigins = ["https://malicc.store", "http://localhost:3000"];

const PORT = process.env.PORT || "4000";
const app: Express = express();

// Make sure to add these middleware before routes
app.use(
  cors({
    origin: "https://malicc.store", // Allow only your frontend
    credentials: true, // Allow cookies and authentication headers
    methods: "GET,POST,PUT,DELETE,OPTIONS", // Specify allowed methods
    allowedHeaders: "Content-Type,Authorization", // Specify allowed headers
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.options("*", cors());

app.use("/api", [rootRouter, collectionRouter, loginRouter, router]);
app.use("/api/auth", authRouter);
app.use(protectionRouter);
app.use(rootRouter);

console.log(checkDatabase());

app.listen(PORT, () => {
  console.info(`Server started on ${PORT}`);
});

export default app;
