import express, { Request, Response, NextFunction, Express } from "express";

import router from "./routes/bills"; // Adjust import path as needed
import rootRouter from "./routes/rooted";
import collectionRouter from "./routes/collection.route";
import loginRouter from "./routes/login.route";
import cors, { CorsOptions } from "cors";

const corsOption: CorsOptions = {
  origin: ["https:localhost:4000/"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["Content-Range", "X-Content-Range"],
  credentials: true,
  maxAge: 86400, // 24 hours in seconds
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const PORT = process.env.PORT;
const app: Express = express();

// Make sure to add these middleware before routes
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", [rootRouter, collectionRouter, loginRouter, router]);

app.use(rootRouter);
app.listen(PORT || "4000", () => {
  console.info(`Server started on ${PORT}`);
});

export default app;
