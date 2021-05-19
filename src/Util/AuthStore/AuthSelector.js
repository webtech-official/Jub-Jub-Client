import { selector, selectorFamily } from "recoil";
import Auth from "../../assets/Api/Auth";
import { authStore } from "./AuthStore";

export const userInfoSelector = selector({
    key: "auth/loadUserInfo",
    get: ({ get }) => {
        const { data } = Auth.loadUserInfo();
        return data;
    }
})