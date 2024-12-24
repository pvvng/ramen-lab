import { Db } from "mongodb";
import { connectDB } from "../../database";

export default async function connectDatabase() {
  let db: Db;

  try {
    db = (await connectDB).db("ramen-lab");
  } catch {
    return { message: "Database connection failed", status : 500, isFailed : true };
  }

  return db;
}
