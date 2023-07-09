import express from "express";

import {
  checkExistingUser,
  getRequestData,
  hashPassword,
  storeAdminSignupData,
} from "./middleware";

const router = express.Router();

router.use(
  getRequestData,
  checkExistingUser,
  hashPassword,
  storeAdminSignupData
);

export default router;
