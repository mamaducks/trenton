import { atom } from "recoil";
import { contactData } from "./data/contactInfo";

 export const contact = atom({
    key: "contact",
    default:  contactData ,
  });