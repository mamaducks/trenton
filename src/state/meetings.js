import { atom } from "recoil";
import { meetingsData } from "./data/meetings";

 export const meetings = atom({
    key: "meetings",
    default:  meetingsData ,
  });