import { Db } from "mongodb";
import { getMongodb } from "../../../mongodb";
import * as uuid from "uuid";
import bcrypt from "bcrypt";

const getRequestData = (req: any, res: any, next: any) => {
  if (req.method === "POST") {
    const { data } = req.body;
    res.locals.reqdata = data;
  }

  next();
  return;
};

const checkUserIsExistAndVerifyPassword = async (
  req: any,
  res: any,
  next: any
) => {
  console.log("req data", res.locals.reqdata);

  const { password, email } = res.locals.reqdata;

  if (!email) {
    res.status(400).send({ status: 400, data: "Please Enter Your email" });
  }

  if (!password) {
    res.status(400).send({ status: 400, data: "Please Enter Your Password" });
  }

  try {
    const checkEmail = email.endsWith("@gmail.com");

    if (!checkEmail) {
      res.status(400).send({ status: 400, data: "Please Enter valid Email" });
      return;
    }

    const mongoDB = (await getMongodb()) as Db;

    const data = await mongoDB.collection("AdminLogin").findOne(
      { email },
      {
        projection: {
          _id: 0,
          hashedpassword: "$password",
          accountid: 1,
          adminid: 1,
          isadmin: 1,
        },
      }
    );

    if (!data) {
      res.status(400).send({ status: 400, data: "Account not found" });
      return;
    }

    const { hashedpassword, accountid, adminid, isadmin } = data;

    const isMatch = await bcrypt.compare(password, hashedpassword);

    if (!isMatch) {
      res.status(400).send({ status: 400, data: "Password not match" });
      return;
    }

    res.locals.tempdata = {
      ...res.locals.tempdata,
      accountid,
      adminid,
      isadmin,
    };

    next();
    return;
  } catch (error) {
    console.log("error in mongodb", error);
    res.status(400).send({ status: 400, data: "Database error occured" });
    return;
  }
};

const createToken = async (req: any, res: any, next: any) => {
  const authtoken = uuid.v4();
  +uuid.v4();
  const { adminid, isadmin } = res.locals.tempdata;
  const { email } = res.locals.reqdata;

  try {
    const expirydate = new Date(new Date().setDate(new Date().getDate() + 1));
    const mongoDB = (await getMongodb()) as Db;

    await mongoDB.collection("AuthToken").insertOne({
      authtoken,
      isadmin,
      adminid,
      email,
      expirydate,
      cretedat: new Date(),
    });

    res.locals.tempdata = { ...res.locals.tempdata, authtoken };

    next();
    return;
  } catch (error) {
    console.log("error in mongodb", error);
    res.status(400).send({ status: 400, data: "Database error occured" });
    return;
  }
};

const responseForAdminSignin = async (req: any, res: any, next: any) => {
  const { accountid, isadmin, authtoken } = res.locals.tempdata;

  res
    .status(200)
    .send({ status: 200, data: { accountid, isadmin, authtoken } });
  return;
};

export {
  getRequestData,
  checkUserIsExistAndVerifyPassword,
  responseForAdminSignin,
  createToken,
};
