import { atom } from "recoil";
import { meetings } from "../meetings";

 export const meetingsData = atom({
    key: "meetingsData",
    default: [{ meetings }],
  });