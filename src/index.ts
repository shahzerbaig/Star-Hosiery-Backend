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
    origin: "http://localhost:3000", // Explicitly allow your frontend origin
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.options("*", (req: Request, res: Response) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://malicc.store");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.sendStatus(200); // Send OK response for preflight
// });

app.use("/api", [rootRouter, collectionRouter, loginRouter, router]);
app.use("/api/auth", authRouter);
app.use(protectionRouter);
app.use(rootRouter);

console.log(checkDatabase());

app.listen(PORT, () => {
  console.info(`Server started on ${PORT}`);
});

export default app;
