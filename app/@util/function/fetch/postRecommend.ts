import axios from "axios";
import processError from "./processError";

export default async function postRecommend(recommend : string){
  try {
    await axios.post("/api/post/recommend", { recommend });
  } catch (error) {
    processError(error);
  }
}