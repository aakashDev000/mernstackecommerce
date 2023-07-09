import dotenv from "dotenv";

dotenv.config();
import { Db, MongoClient } from "mongodb";

const connectionURL: string | undefined = process.env.MONGO_URL;

let mongodb;

export const getMongodb = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(connectionURL as string)
      .then((client: { db: () => Db }) => {
        mongodb = client.db();
        console.log("Database Connected");
        resolve(mongodb);
      })
      .catch((err: any) => {
        console.log("dberror****", err);
        reject(err);
      });
  });
};
