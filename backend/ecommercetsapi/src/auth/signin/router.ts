import express from "express";
import {
  checkUserIsExistAndVerifyPassword,
  createToken,
  getRequestData,
  responseForAdminSignin,
} from "./middleware";

const router = express.Router();

router.use(
  getRequestData,
  checkUserIsExistAndVerifyPassword,
  createToken,
  responseForAdminSignin
);

export default router;
