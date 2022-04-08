import { atom } from "recoil";
import { news } from "../news";

 export const newsData = atom({
    key: "newsData",
    default: [{ news }],
  });