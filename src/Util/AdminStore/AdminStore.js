import { atom } from "recoil";
import { equipment_table } from "../../Data/equipment_table.json";
import { equipment_allow_table } from "../../Data/equipment_allow_table.json";

export const equipmentListState = atom({
  key: "equipmentList",
  default: [...equipment_table],
});

export const equipmentItemState = atom({
  key: "equipmentItem",
  default: {},
});

export const applyListState = atom({
  key: "applyList",
  default: [...equipment_allow_table],
});

export const isAdminState = atom({
  key: "isAdminState",
  default: false,
});
