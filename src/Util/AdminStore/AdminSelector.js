import { selector, selectorFamily } from "recoil";
import Admin from "../../Assets/Api/Admin";
import { applyListState, equipmentListState } from "./AdminStore";
//신청 전체 조회
export const applyViewSelector = selectorFamily({
    key: "admin/applyView",
    get: ({ get }, filter) => {
        const { data } = Admin.applyView()
        const equipmentData = get(equipmentListState);
        switch (filter) {
            case "All":
                return;
            default:
                return;
        }
        return data
    },
    set: ({ set }, newState) => {
        set(applyListState, newState)
    }
})

