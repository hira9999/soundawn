import { atom } from "recoil";

export default atom<string>({
  key: "CurrentTheme",
  default: "coffee",
});
