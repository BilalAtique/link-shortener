import { config } from "dotenv";
import connectDB from "./db";
import app from "./app";

config();

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log("DB connection failed", error));
