import { authVerify, removeTokenInDB, responseController } from "./middleware";
import express from "express";

const router = express.Router();

router.use(authVerify, removeTokenInDB, responseController);

export default router;
