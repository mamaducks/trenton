import { atom } from "recoil";
import { postsData } from "./data/posts";

 export const posts = atom({
    key: "posts",
    default: postsData ,
  });