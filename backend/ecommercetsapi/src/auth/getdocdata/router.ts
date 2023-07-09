import { authVerify, getaccountData } from "./middleware";

import express from "express";

const router = express.Router();

router.use(authVerify, getaccountData);

export default router;
