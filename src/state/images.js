import { atom } from "recoil";
import { imagesData } from "../data/images";

 export const images = atom({
    key: "images",
    default: imagesData,
  });