import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//routes import
import userRouter from "./routes/user.routes";
import shortLinkRouter from "./routes/shortLink.routes";
import { redirectToOriginalURL } from "./controllers/shortLink.controller";

//routes declaration
app.use("/api/users", userRouter);

app.use("/api/short-links", shortLinkRouter);

app.get("/test", (req, res) => {
  res.send("Hello World");
});

app.get("/:shortLink", redirectToOriginalURL);


export default app;
