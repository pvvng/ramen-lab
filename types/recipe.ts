import { AWSImageItmeType } from "./aws-image";

export interface RecipeType {
    name: string;
    password: string;
    explain: string;
    ingredient: AWSImageItmeType[];
    like: number;
    view: number;
}