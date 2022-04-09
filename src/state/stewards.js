import { atom } from "recoil";
import { stewardsData } from "./data/stewards";

 export const stewards = atom({
    key: "stewards",
    default: stewardsData,
  });