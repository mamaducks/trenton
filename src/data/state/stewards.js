import { atom } from "recoil";
import { stewards } from "../stewards";

 export const stewardsData = atom({
    key: "stewardsData",
    default: [{ stewards }],
  });