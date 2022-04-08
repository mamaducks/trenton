import { atom } from "recoil";
import { posts } from "../posts";

 export const postsData = atom({
    key: "postsData",
    default: [{ posts }],
  });