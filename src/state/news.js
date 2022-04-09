import { atom } from "recoil";
import { newsData } from "./data/news";

 export const news = atom({
    key: "news",
    default: newsData ,
  });