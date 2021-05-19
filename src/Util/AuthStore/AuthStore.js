import { atom } from "recoil";

export const authStore = atom({
    key : "userInfoState",
    default: {
        roles: "ROLE_ADMIN"
    },
})


