import express from "express";
import { cors } from "./constants.js";
import type { Request, Response } from "express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

export { app, express };
export type { Request, Response };
