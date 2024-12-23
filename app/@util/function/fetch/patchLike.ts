import axios from "axios";
import { ObjectId } from "mongodb";
import processError from "./processError";

export default async function patchLike(id: ObjectId) {
  try {
    await axios.patch("/api/patch/like", { id });
  } catch (error) {
    processError(error);
  }
}
