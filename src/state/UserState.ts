import { atom } from "recoil";
import jwtDecode from "jwt-decode";

export const userState = atom({
  key: "userState",
  default: null,
  effects: [
    ({ onSet, setSelf }) => {
      //** */
      const savedValue = localStorage.getItem("jwtToken");
      if (savedValue) {
        const decodedJwt: any = jwtDecode(
          localStorage.getItem("jwtToken") as string
        );
        if (decodedJwt.exp * 1000 < Date.now()) {
          localStorage.removeItem("jwtToken");
          setSelf(null);
          console.log("remove");
        } else {
          setSelf(decodedJwt);
        }
      }
      //**  */
      onSet((userData: any, _, isReset) => {
        isReset
          ? localStorage.removeItem("jwtToken")
          : localStorage.setItem("jwtToken", userData.token);
      });
    },
  ],
});
