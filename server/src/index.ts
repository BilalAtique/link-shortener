import { config } from "dotenv";
import express, { Express, Request, Response } from "express";
import connectDB from "./db";

config();

connectDB()

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
