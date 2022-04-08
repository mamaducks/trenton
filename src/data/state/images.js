import { atom } from "recoil";
import { images } from "../images";

 export const imagesData = atom({
    key: "imagesData",
    default: [{ images }],
  });