import { atom } from "recoil";
import { officials } from "../officials";

 export const officialsData = atom({
    key: "officialsData",
    default: [{ officials }],
  });