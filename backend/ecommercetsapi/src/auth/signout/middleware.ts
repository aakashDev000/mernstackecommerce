import { Db } from "mongodb";
import { getMongodb } from "../../../mongodb";

const authVerify = (req: any, res: any, next: any) => {
  try {
    const authorization = req.headers["authorization"];

    const split = authorization.split(" ");

    if (split[0] !== "Bearer") {
      res.status(401).send({ status: 400, data: "Invalid Token" });
      return;
    }

    if (split[1]) {
      res.locals = { ...res.locals, authtoken: split[1] };
      next();
      return;
    }

    res.status(401).send({ status: 401, data: "Invalid Token" });
    return;
  } catch (error) {
    console.log("error****", error);
    res
      .status(401)
      .send({ status: 401, data: "Error Occured in Token Validation" });
    return;
  }
};

const removeTokenInDB = async (req: any, res: any, next: any) => {
  try {
    const { authtoken } = res.locals;

    const mongoDB = (await getMongodb()) as Db;

    await mongoDB.collection("AuthToken").deleteMany({ authtoken });

    next();
    return;
  } catch (error) {
    console.log("error********", error);
    res.status(400).send({ status: 400, data: "Database error occured" });
    return;
  }
};

const responseController = (req: any, res: any, next: any) => {
  res.status(200).send({ status: 200, data: "signout successfully" });
  return;
};

export { authVerify, removeTokenInDB, responseController };
