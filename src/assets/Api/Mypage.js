import { BASE_URL } from "../../config/config.json";
import { methodType, requestApiWithoutBodyWithToken } from "../lib/requestApi";
import { MYPAGE } from "../lib/requestUrl";
class Mypage {
  async myEquipment() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        MYPAGE.myEquipment(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async myLaptop() {
    try {
      const response = requestApiWithoutBodyWithToken(
        BASE_URL,
        methodType.GET,
        MYPAGE.myLaptop(),
        {}
      );
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new Mypage();
