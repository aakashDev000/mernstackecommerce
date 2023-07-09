import express from "express";

import adminSignupRouter from "./signup/router";
import adminSigninRouter from "./signin/router";
import adminSignouRouter from "./signout/router";
import docdataRouter from "./getdocdata/router";

const router = express.Router();

router.post("/auth/signup", adminSignupRouter);

router.post("/auth/signin", adminSigninRouter);

router.get("/auth/signout", adminSignouRouter);

router.get("/auth/docdata", docdataRouter);

export default router;
