import { atom } from "recoil";

export const equipmentListState = atom({
    key : "equipmentList",
    default  : [],
})

export const equipmentItemState = atom({
    key:  "equipmentItem",
    default : {}
})

export const applyListState = atom({
    key : "applyList",
    default : []
})

