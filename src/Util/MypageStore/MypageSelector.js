import { selector } from "recoil";
import Mypage from "../../assets/Api/Mypage"


export const myEquipmentSelector = selector({
    key: "mypage/myEquipment",
    get: async ({ get }) => {
        const { data } = await Mypage.myEquipment().then(res => console.log("res", res));
        console.log(data)
        //    if (data.code >= 0) {
        //        const { list } = data;
        //        console.log()
        //        const rentalData = list.map((rentalItem) => {
        //            const { amount, equipmentEnum, modifiedDate, equipment } = rentalItem;
        //            const rentalDate = modifiedDate.substring(0, 9);
        //            const { content, name } = equipment;
        //            return {
        //                content, name, amount, equipmentEnum, rentalDate,
        //            }
        //        }) || {}
        //        console.log(rentalData)
        //    } else {
        //        console.log("myEquipment Error:", data)
        //    }
    }
})