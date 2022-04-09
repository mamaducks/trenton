import { atom } from "recoil";
import { officialsData } from "./data/officials";

 export const officials = atom({
    key: "officials",
    default:  officialsData ,
  });