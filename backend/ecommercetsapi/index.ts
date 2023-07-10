import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./src/auth/authrouter";

dotenv.config();

const app: Express = express();
// const port = process.env.PORT;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (_: Request, res: Response) => {
  res.send("Testing Server");
});

router.use("/api/v1", authRouter);

app.listen(9000, () => {
  console.log(`[server]: Server is running at http://localhost:${9000}`);
});
