import { methodType, requestApiWithoutBodyWithToken } from "../lib/requestApi";
import { MYPAGE } from "../lib/requestUrl";
class Mypage {
  async myEquipment() {
    try {
      const response = requestApiWithoutBodyWithToken(
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
