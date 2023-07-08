import { MongoClient } from "mongodb";

const connectionURL: string | undefined = process.env.MONGO_URL;

let mongodb;

export const getMongodb = () => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(connectionURL as string)
      .then((client: { db: () => any }) => {
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
