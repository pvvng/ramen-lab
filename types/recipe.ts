import { ObjectId } from "mongodb";
import { AWSImageItmeType } from "./aws-image";

export interface RecipeType {
  _id: ObjectId;
  name: string;
  password: string;
  explain: string;
  ingredient: AWSImageItmeType[];
  like: number;
  view: number;
  report: number;
}
