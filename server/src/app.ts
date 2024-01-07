import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app: Express = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())

//routes import
import userRouter from "./routes/user.routes";

//routes declaration
app.use("/api/users", userRouter);

export default app;
