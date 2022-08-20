import { selector } from "recoil";
import CurrentTheme from "./CurrentTheme";

export const RandomThemeSong = selector({
  key: "RandomThemeSong",
  get: ({ get }) => {
    const theme = get(CurrentTheme);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return theme + randomNumber;
  },
});
