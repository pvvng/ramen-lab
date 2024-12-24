import axios from "axios";
import { ObjectId } from "mongodb";
import processError from "./processError";

export default async function patchReport(id: ObjectId) {
  try {
    await axios.patch("/api/patch/report", { id });
  } catch (error) {
    processError(error);
  }
}
