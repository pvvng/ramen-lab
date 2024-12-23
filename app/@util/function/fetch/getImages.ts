import { AWSImageItmeType } from "@/types/aws-image";
import axios from "axios";
import processError from "./processError";

export default async function getImages() {
  try {
    let res = await axios.get<AWSImageItmeType[]>("/api/get/image-list");
    return res.data;
  } catch (error) {
    processError(error);
  }
}
